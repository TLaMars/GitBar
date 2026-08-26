#!/bin/zsh

echo "===== Installling CocoaPods ====="
export HOMEBREW_NO_INSTALL_CLEANUP=TRUE
brew install cocoapods
echo "===== Installing Node.js ====="
brew install node

# Install dependencies
echo "===== Running pnpm install ====="
# Match the pnpm version pinned in package.json's packageManager field.
npm install -g "pnpm@$(node -p "require('./package.json').packageManager.split('@')[1]")"
pnpm install --frozen-lockfile
echo "===== Running pod install ====="
cd macos
pod install
