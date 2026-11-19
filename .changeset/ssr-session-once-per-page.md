---
"@omnidotdev/arbor-app": patch
---

Fix signed-in pages such as Repositories sometimes loading with an authorization error: pages now always render with your session, and a page load refreshes your sign-in at most once.
