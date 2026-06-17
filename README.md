1. Install Prerequisites
# SessionSync

Rust:
SessionSync is a desktop-first collaborative music session interface. It is built with a React + TypeScript frontend and packaged with Tauri so musicians can manage a rehearsal/session workspace in a native desktop shell.

![SessionSync session dashboard](docs/images/session-sync-dashboard.svg)

## Purpose

SessionSync is designed to give remote or hybrid musicians a shared control room for a live session. The current app focuses on the visual and interaction foundation for:

- Joining a session room with other players.
- Monitoring collaborators and their instrument channels.
- Creating and selecting local audio tracks.
- Adjusting track controls such as volume, pan, mute/solo, and effects.
- Managing tempo/count-in controls for session coordination.
- Keeping chat and session tools available in the same workspace.

## Architecture Overview

```text
SessionSync
├── React application (src/)
│   ├── App routing and authentication context
│   ├── Session layout grid
│   ├── Dashboard, chat, user, track, and transport UI components
│   └── Static image/audio assets
├── Tauri shell (src-tauri/)
│   ├── Native desktop window configuration
│   ├── Rust application bootstrap
│   └── Bundling metadata and platform icons
└── Vite/TypeScript toolchain
    ├── Fast development server
    ├── Type checking/build pipeline
    └── ESLint configuration
```

### Frontend Layer

The frontend is a Vite-powered React app written in TypeScript. `src/main.tsx` mounts the React tree, while `src/App.tsx` wires the top-level routes and wraps the app in the authentication provider.

Key frontend responsibilities:

- **Routing:** Public authentication route, lounge route, and protected session route.
- **Stateful UI:** Track creation/selection, collaborator joining, chat messages, tempo controls, and plugin selection state.
- **Component composition:** The session screen is assembled from focused panels such as `VisualDisplay`, `UserPanel`, `TracksPanel`, `ChatPanel`, `Sidebar`, and `SettingsController`.
- **Styling:** Component-local layouts are implemented with `styled-components`, with global styles in `src/index.css` and `src/App.css`.

### Desktop Shell Layer

The Tauri layer in `src-tauri/` packages the web UI into a native desktop application. The Tauri config defines the product name, app window dimensions, bundle targets, icons, and the commands used to build or serve the frontend.

The Rust bootstrap currently starts the Tauri app and enables logging in debug builds. This keeps the native layer lightweight while the interface and session behavior continue to evolve in React.

## Application Flow

1. **Launch:** Tauri starts the desktop window and points to the Vite dev server in development or the built frontend in production.
2. **Render:** React mounts the app and installs the route tree.
3. **Authenticate:** The auth context tracks whether the user is signed in and protects the session layout route.
4. **Enter a session:** The `/session/:sessionId` route renders the session workspace.
5. **Coordinate the session:** The session workspace displays collaborator controls, tracks, chat, visual content, transport controls, and sidebar navigation.

## Session Workspace

The main session screen is organized as a full-window CSS grid:

- **Title bar:** Desktop-style app chrome.
- **Visual display:** Shared visual/session media area.
- **User panel:** Collaborator channel strips with mute/solo-style controls and level indicators.
- **Control bar:** Track heading, BPM control, and metronome/count-in control.
- **Tracks panel:** Dynamic list of local track strips with labels, inputs, knobs, effects, mute/solo buttons, and meters.
- **Chat panel:** In-session text communication.
- **Sidebar:** Navigation/actions for home, chat, metronome, tracks, instruments, plugins, collaborators, and settings.
- **Footer:** Bottom application footer region.

## Notable Directories

| Path | Description |
| --- | --- |
| `src/App.tsx` | Top-level route definitions and app providers. |
| `src/contexts/` | Shared React context, currently authentication state. |
| `src/layouts/` | Page-level layout shells, including the session grid. |
| `src/components/` | Reusable UI panels, controls, inputs, track strips, user widgets, and modals. |
| `src/views/` | Route-level view components. |
| `src/assets/` | Static images, icons, and audio assets consumed by the frontend. |
| `src-tauri/` | Tauri/Rust desktop wrapper, configuration, icons, and capabilities. |
| `docs/images/` | README and documentation imagery. |

## Technology Stack

- **React 19** for UI composition.
- **TypeScript** for typed frontend code.
- **Vite** for development and production builds.
- **Tauri 2** for desktop packaging.
- **Rust** for the native app shell.
- **styled-components** for component-scoped styles.
- **Material UI icons** for sidebar and control iconography.

## Getting Started

### Prerequisites

Install Rust:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Tauri apps use WebView2 on Windows and WebKitGTK on Linux to render the frontend.
Install dependencies (Debian/Ubuntu):
Tauri apps also require platform WebView dependencies. On Debian/Ubuntu, install:

```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev build-essential curl wget file libssl-dev libgtk-3-dev
```

2. Clone Git Repo

3. Make sure Node is up to date
Install a current Node.js release before installing frontend dependencies.

4. Install Frontend Dependencies:
### Install Dependencies

```bash
npm install
```

5. Build and run program:
### Run in Development

```bash
npm run tauri dev
```

This starts the Vite frontend and opens it inside the Tauri desktop shell.

### Build

```bash
npm run build
```

To build the desktop bundle, run:

```bash
npm run tauri build
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check and build the frontend. |
| `npm run lint` | Run ESLint across the project. |
| `npm run preview` | Preview the built frontend. |
| `npm run tauri` | Run Tauri CLI commands. |

## Current Status

The project currently emphasizes the session UI prototype and desktop application shell. Several controls use local component state and mock data, which makes the app useful for validating the product layout before wiring in real-time audio, networking, persistent sessions, plugin scanning, or backend services.

## Future Enhancements

Potential next steps include:

- Real authentication and session persistence.
- Low-latency audio device routing and monitoring.
- Real-time collaborator state synchronization.
- Chat transport over a backend or peer network.
- Plugin discovery and effect-chain persistence.
- Saved sessions, project templates, and track presets.
- Cross-platform installer polish and auto-update support.
