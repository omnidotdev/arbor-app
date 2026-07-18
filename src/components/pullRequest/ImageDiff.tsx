"use client";

import {
  SliderControl,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "@omnidotdev/thornberry/slider";
import { ImageOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import type { DiffStatus } from "@/generated/graphql";

interface ImageDiffProps {
  /** Same-origin proxy URL for the old image, or null when added. */
  oldSrc: string | null;
  /** Same-origin proxy URL for the new image, or null when deleted. */
  newSrc: string | null;
  status: DiffStatus;
}

type ImageDiffMode = "two-up" | "swipe" | "onion" | "difference";

interface Dimensions {
  width: number;
  height: number;
}

const MODE_LABELS: Record<ImageDiffMode, string> = {
  "two-up": "2-up",
  swipe: "Swipe",
  onion: "Onion skin",
  difference: "Difference",
};

// Checkerboard so transparent regions read as transparent rather than blending
// into the card background
const CHECKERBOARD_STYLE = {
  backgroundImage:
    "linear-gradient(45deg, rgba(128,128,128,0.15) 25%, transparent 25%), linear-gradient(-45deg, rgba(128,128,128,0.15) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(128,128,128,0.15) 75%), linear-gradient(-45deg, transparent 75%, rgba(128,128,128,0.15) 75%)",
  backgroundSize: "16px 16px",
  backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0",
} as const;

/**
 * GitHub-style image diff with four comparison modes: 2-up, swipe, onion skin
 * and difference. Added and deleted images (one side missing) render the single
 * present side with a label and disable the comparison-only modes.
 *
 * The difference mode composites the two images on a `<canvas>` client-side, so
 * that work is guarded to run only in an effect after mount.
 */
export function ImageDiff({ oldSrc, newSrc, status }: ImageDiffProps) {
  const bothPresent = Boolean(oldSrc) && Boolean(newSrc);

  const [mode, setMode] = useState<ImageDiffMode>("two-up");
  const [opacity, setOpacity] = useState(0.5);
  const [swipeX, setSwipeX] = useState(50);
  const [oldDims, setOldDims] = useState<Dimensions | null>(null);
  const [newDims, setNewDims] = useState<Dimensions | null>(null);
  const [oldError, setOldError] = useState(false);
  const [newError, setNewError] = useState(false);
  const [diffError, setDiffError] = useState(false);

  const swipeRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Composite the two images with the "difference" blend so identical pixels
  // render black. Runs only on the client, inside an effect
  useEffect(() => {
    if (mode !== "difference" || !oldSrc || !newSrc) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    setDiffError(false);

    const loadImage = (src: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("image load failed"));
        img.src = src;
      });

    Promise.all([loadImage(oldSrc), loadImage(newSrc)])
      .then(([oldImg, newImg]) => {
        if (cancelled) return;

        const width = Math.max(oldImg.naturalWidth, newImg.naturalWidth);
        const height = Math.max(oldImg.naturalHeight, newImg.naturalHeight);

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          setDiffError(true);
          return;
        }

        try {
          // Black base: unchanged pixels differenced against themselves stay
          // black, so a fully black canvas signals an identical image
          ctx.fillStyle = "#000000";
          ctx.fillRect(0, 0, width, height);
          ctx.globalCompositeOperation = "source-over";
          ctx.drawImage(oldImg, 0, 0);
          ctx.globalCompositeOperation = "difference";
          ctx.drawImage(newImg, 0, 0);
          ctx.globalCompositeOperation = "source-over";
        } catch {
          // A tainted canvas (should not happen with the same-origin proxy)
          // throws on draw. Fall back to a friendly message
          setDiffError(true);
        }
      })
      .catch(() => {
        if (!cancelled) setDiffError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [mode, oldSrc, newSrc]);

  const updateSwipe = (clientX: number) => {
    const el = swipeRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSwipeX(Math.max(0, Math.min(100, pct)));
  };

  const dimsDiffer =
    oldDims !== null &&
    newDims !== null &&
    (oldDims.width !== newDims.width || oldDims.height !== newDims.height);

  // Single-sided image (added or deleted): show the present side only
  if (!bothPresent) {
    const src = newSrc ?? oldSrc;
    const label = status === "DELETED" ? "Deleted" : "Added";
    const error = newSrc ? newError : oldError;

    return (
      <div className="p-4">
        <div className="mb-2 text-muted-foreground text-xs">{label}</div>
        {src && !error ? (
          <img
            src={src}
            alt={label}
            className="max-w-full rounded border"
            style={CHECKERBOARD_STYLE}
            onError={() => (newSrc ? setNewError(true) : setOldError(true))}
          />
        ) : (
          <ImageLoadError />
        )}
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* Mode switcher */}
      <div className="mb-4 inline-flex rounded-md border">
        {(Object.keys(MODE_LABELS) as ImageDiffMode[]).map((m, index) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              "px-3 py-1.5 font-medium text-sm transition-colors",
              index > 0 && "border-l",
              mode === m
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {MODE_LABELS[m]}
          </button>
        ))}
      </div>

      {oldError || newError ? (
        <ImageLoadError />
      ) : mode === "two-up" ? (
        <div className="space-y-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <figure className="min-w-0">
              <figcaption className="mb-1 text-muted-foreground text-xs">
                Old
              </figcaption>
              {oldSrc && (
                <img
                  src={oldSrc}
                  alt="Old"
                  className="max-w-full rounded border"
                  style={CHECKERBOARD_STYLE}
                  onLoad={(e) =>
                    setOldDims({
                      width: e.currentTarget.naturalWidth,
                      height: e.currentTarget.naturalHeight,
                    })
                  }
                  onError={() => setOldError(true)}
                />
              )}
            </figure>
            <figure className="min-w-0">
              <figcaption className="mb-1 text-muted-foreground text-xs">
                New
              </figcaption>
              {newSrc && (
                <img
                  src={newSrc}
                  alt="New"
                  className="max-w-full rounded border"
                  style={CHECKERBOARD_STYLE}
                  onLoad={(e) =>
                    setNewDims({
                      width: e.currentTarget.naturalWidth,
                      height: e.currentTarget.naturalHeight,
                    })
                  }
                  onError={() => setNewError(true)}
                />
              )}
            </figure>
          </div>
          {dimsDiffer && oldDims && newDims && (
            <p className="text-muted-foreground text-xs">
              Dimensions changed: {oldDims.width}
              {"x"}
              {oldDims.height} {"->"} {newDims.width}
              {"x"}
              {newDims.height}
            </p>
          )}
        </div>
      ) : mode === "swipe" ? (
        // biome-ignore lint/a11y/noStaticElementInteractions: draggable swipe divider
        <div
          ref={swipeRef}
          className="relative inline-block max-w-full cursor-ew-resize select-none overflow-hidden rounded border"
          style={CHECKERBOARD_STYLE}
          onPointerDown={(e) => {
            draggingRef.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            updateSwipe(e.clientX);
          }}
          onPointerMove={(e) => {
            if (draggingRef.current) updateSwipe(e.clientX);
          }}
          onPointerUp={() => {
            draggingRef.current = false;
          }}
        >
          {/* Base: old image defines the box */}
          {oldSrc && (
            <img
              src={oldSrc}
              alt="Old"
              className="block max-w-full"
              draggable={false}
              onError={() => setOldError(true)}
            />
          )}
          {/* Top: new image clipped to the left of the divider */}
          {newSrc && (
            <img
              src={newSrc}
              alt="New"
              className="absolute top-0 left-0 h-full w-full"
              draggable={false}
              style={{ clipPath: `inset(0 ${100 - swipeX}% 0 0)` }}
              onError={() => setNewError(true)}
            />
          )}
          {/* Divider handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary"
            style={{ left: `${swipeX}%` }}
          >
            <div className="absolute top-1/2 left-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background text-[10px] text-primary shadow">
              {"<>"}
            </div>
          </div>
        </div>
      ) : mode === "onion" ? (
        <div className="space-y-3">
          <div
            className="relative inline-block max-w-full overflow-hidden rounded border"
            style={CHECKERBOARD_STYLE}
          >
            {oldSrc && (
              <img
                src={oldSrc}
                alt="Old"
                className="block max-w-full"
                onError={() => setOldError(true)}
              />
            )}
            {newSrc && (
              <img
                src={newSrc}
                alt="New"
                className="absolute top-0 left-0 h-full w-full"
                style={{ opacity }}
                onError={() => setNewError(true)}
              />
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-xs">Old</span>
            <SliderRoot
              className="w-48"
              min={0}
              max={1}
              step={0.01}
              value={[opacity]}
              onValueChange={(details) =>
                setOpacity(details.value[0] ?? opacity)
              }
              aria-label={["Onion skin opacity"]}
            >
              <SliderControl>
                <SliderTrack>
                  <SliderRange />
                </SliderTrack>
                <SliderThumb index={0} />
              </SliderControl>
            </SliderRoot>
            <span className="text-muted-foreground text-xs">New</span>
          </div>
        </div>
      ) : diffError ? (
        <ImageLoadError message="Could not render the difference view for this image." />
      ) : (
        <div
          className="inline-block max-w-full overflow-hidden rounded border"
          style={CHECKERBOARD_STYLE}
        >
          <canvas ref={canvasRef} className="block h-auto max-w-full" />
        </div>
      )}
    </div>
  );
}

function ImageLoadError({
  message = "Could not load image.",
}: {
  message?: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded border border-dashed p-4 text-muted-foreground text-sm">
      <ImageOff className="h-4 w-4" />
      {message}
    </div>
  );
}
