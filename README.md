1. Install Prerequisites

Rust:

curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

Tauri apps use WebView2 on Windows and WebKitGTK on Linux to render the frontend.
Install dependencies (Debian/Ubuntu):

sudo apt update
sudo apt install libwebkit2gtk-4.0-dev build-essential curl wget file libssl-dev libgtk-3-dev

2. Clone Git Repo

3. Make sure Node is up to date

4. Install Frontend Dependencies

npm install

5. Run Tauri Build 

npm run tauri dev







