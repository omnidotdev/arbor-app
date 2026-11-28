# @omnidotdev/arbor-app

## 0.1.0

### Minor Changes

- [#82](https://github.com/omnidotdev/arbor-app/pull/82) [`bb60c09`](https://github.com/omnidotdev/arbor-app/commit/bb60c09dac2f99e0c58ce9501a4dde4ff98eb445) Thanks [@coopbri](https://github.com/coopbri)! - Links from Arbor to your Omni account (Manage account, workspaces, Upgrade, Manage subscription) now open it as the same account you use in Arbor, even when another account is signed in on the browser

- [#70](https://github.com/omnidotdev/arbor-app/pull/70) [`66f73ea`](https://github.com/omnidotdev/arbor-app/commit/66f73ea9b6643efca47f13fb732d27930edc7690) Thanks [@coopbri](https://github.com/coopbri)! - Workspace owners and admins can move a repository to another of their workspaces from its settings (**Move repository**). The confirm names the target and what changes, and you land on the repository in its new workspace. Old links to a moved repository now redirect to the same page where it lives now.

### Patch Changes

- [#68](https://github.com/omnidotdev/arbor-app/pull/68) [`a5f0586`](https://github.com/omnidotdev/arbor-app/commit/a5f05861e267dd12e2aaf0c46aa8fb5a9c967c01) Thanks [@coopbri](https://github.com/coopbri)! - Signed-in users who do not have closed-beta access yet are now taken straight to the application page when they open an Arbor page, instead of seeing a page that cannot load.

- [#78](https://github.com/omnidotdev/arbor-app/pull/78) [`21de6be`](https://github.com/omnidotdev/arbor-app/commit/21de6beb282de616a01b90132f8146129c20e87a) Thanks [@coopbri](https://github.com/coopbri)! - Arbor now follows your Omni session: switching accounts or signing out in another Omni app switches or signs out here too, the next time you come back to the tab

- [#71](https://github.com/omnidotdev/arbor-app/pull/71) [`4bdd480`](https://github.com/omnidotdev/arbor-app/commit/4bdd4803be3687ab62f51188ab6c7b921173034e) Thanks [@coopbri](https://github.com/coopbri)! - Dropdowns now match the rest of the interface.

- [#63](https://github.com/omnidotdev/arbor-app/pull/63) [`47f0e6e`](https://github.com/omnidotdev/arbor-app/commit/47f0e6e2b80914d4f75b5dfab23740dd3c740898) Thanks [@coopbri](https://github.com/coopbri)! - Buy and manage plans on the Omni account hub. The pricing page's paid plans now open the hub's confirm step for that plan and workspace, "New workspace" opens the hub's workspaces console, and Manage billing on a workspace's dashboard opens plan management on the hub; each comes back to Arbor. The in-app checkout, billing portal, and cancel and renew actions are removed.

- [#66](https://github.com/omnidotdev/arbor-app/pull/66) [`3431575`](https://github.com/omnidotdev/arbor-app/commit/34315758697294350d0bc5502537db5ff09c3552) Thanks [@coopbri](https://github.com/coopbri)! - Stop writing users' email addresses to the logs: a failed sign-in token check logs only the error message, not the user's email and name, by moving to `@omnidotdev/providers` v0.2.0.

- [#65](https://github.com/omnidotdev/arbor-app/pull/65) [`043d53d`](https://github.com/omnidotdev/arbor-app/commit/043d53d80c00ba4b92f8790aca10ccae7e681f3c) Thanks [@coopbri](https://github.com/coopbri)! - Fix pages failing to load (HTTP 431) for accounts that belong to many workspaces

- [#80](https://github.com/omnidotdev/arbor-app/pull/80) [`2ad5d19`](https://github.com/omnidotdev/arbor-app/commit/2ad5d195374a99c7509959993a5a1f6a26b47eb9) Thanks [@coopbri](https://github.com/coopbri)! - Sign-in session data sent to the browser no longer includes the session token

- [#81](https://github.com/omnidotdev/arbor-app/pull/81) [`8b06a62`](https://github.com/omnidotdev/arbor-app/commit/8b06a623d33de3d4283bbb9b788043febb6d44b2) Thanks [@coopbri](https://github.com/coopbri)! - Sign-in session tokens stay out of reach of scripts running on the page.

- [#67](https://github.com/omnidotdev/arbor-app/pull/67) [`fa9f4d5`](https://github.com/omnidotdev/arbor-app/commit/fa9f4d54467d5b117de0dadd39a290cf4b5b8b5b) Thanks [@coopbri](https://github.com/coopbri)! - Fix signed-in pages such as Repositories sometimes loading with an authorization error: pages now always render with your session, and a page load refreshes your sign-in at most once.

- [#64](https://github.com/omnidotdev/arbor-app/pull/64) [`69136f5`](https://github.com/omnidotdev/arbor-app/commit/69136f5f44becbbc13cc5b3a9de9ed7a51c70108) Thanks [@coopbri](https://github.com/coopbri)! - The changed-files tree on pull requests now supports full keyboard navigation (arrow keys, Home/End, and typeahead), and the unified/split diff switch is now a segmented control

- [#83](https://github.com/omnidotdev/arbor-app/pull/83) [`65831b3`](https://github.com/omnidotdev/arbor-app/commit/65831b3f4dcc2b63f0a6f954d5f90f09289d6774) Thanks [@coopbri](https://github.com/coopbri)! - The pricing page now lists unlimited collaborators on the Free plan, matching every plan

- [#69](https://github.com/omnidotdev/arbor-app/pull/69) [`81116e9`](https://github.com/omnidotdev/arbor-app/commit/81116e9fe039bbb74f74e0b58bf07caf891f4a7e) Thanks [@coopbri](https://github.com/coopbri)! - The workspace switcher now shows each workspace's `@handle` under its name, and its "Manage workspaces" link can be reached with the keyboard.

- [#75](https://github.com/omnidotdev/arbor-app/pull/75) [`951ce2a`](https://github.com/omnidotdev/arbor-app/commit/951ce2a37f32359b332a5d2b95753edd079217de) Thanks [@coopbri](https://github.com/coopbri)! - The workspace menu in the sidebar now scrolls when you belong to many workspaces, and opens at the same width as the switcher.
