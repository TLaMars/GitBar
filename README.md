# GitBar

Your new Pull Request tool for GitHub, GitLab and Azure.

## Featues

- [x] GitHub
- [x] GitLab (self-hosted and gitlab.com)
- [x] Azure DevOps
- [x] View Pull Requests
- [x] Get Notifications
- [x] Launch at Login
- [x] Dark / Light Mode
- [x] Amount of PRs in the menubar
- [x] Open PRs in your browser
- [x] Hide PRs from Mine & Review tabs
- [x] Merge PRs
- [x] See Pipeline Status

### To Do

- [ ] Bitbucket
- [ ] Prioritize PRs
- [ ] Ignore Repositories

## Release Process

1. Bump the version with `npm run version:bump {major/minor/patch}`
   1. This will bump the version.
   2. Commit the changes.
   3. Creates a new tag.
   4. Pushes the changes.
2. Triggers a new release on GitHub.
   1. This will build the app.
   2. Upload the app to the App Store (Testflight).
   3. This will create a new release with the new version.
   4. Adds the changelog to the release.
3. Done!

### Certificates

To build and distribute the app to TestFlight / the Mac App Store you need:

1. **3rd Party Mac Developer Application** certificate — signs the `.app` binary.
2. **3rd Party Mac Developer Installer** certificate — signs the `.pkg` installer that gets uploaded.
3. **Provisioning profile** `GitBar - Production` for `io.lamars.gitbar` (macOS, App Store). Fetched automatically by `get_provisioning_profile` in the [Fastfile](fastlane/Fastfile).
4. **App Store Connect API key** (.p8) with the App Manager role — used by `upload_to_testflight`:
   - API Key ID (`APPLE_API_KEY_ID`)
   - API Key Issuer ID (`APPLE_API_KEY_ISSUER_ID`)
   - Key contents, base64 encoded (`APPLE_API_KEY_CONTENT`)
5. **Apple Developer Team ID**.

Notes:

- Developer ID Application / Installer certificates are **not** needed — those are only for distribution outside the Mac App Store.
- Notarization is not required; App Store review replaces it.

For installing the certificates in the workflow we use: apple-actions/import-codesign-certs@v3.

How to give them to the workflow:

Export the two certs **separately** — Keychain Access's "Export 4 items" flow is unreliable and silently drops entries, so each cert goes into its own `.p12`.

For **each** of `3rd Party Mac Developer Application` and `3rd Party Mac Developer Installer`:

1. In Keychain Access → My Certificates, expand the cert with the disclosure triangle and confirm a private key is nested under it.
2. Select the cert **and** its private key (2 items).
3. Right-click → "Export 2 items" → save as a `.p12` with a password.
4. Base64 encode: `base64 -i certificate.p12 | pbcopy`

Add the four resulting secrets to the repo:

- Application cert → `APPLE_CERTIFICATE_P12_BASE64` + `APPLE_CERTIFICATE_P12_PASSWORD`
- Installer cert → `APPLE_INSTALLER_CERTIFICATE_P12_BASE64` + `APPLE_INSTALLER_CERTIFICATE_P12_PASSWORD`

Then the App Store Connect API key:

5. Base64 encode the key: `base64 -i api-key.p8 | pbcopy`
6. Add as `APPLE_API_KEY_CONTENT`, plus `APPLE_API_KEY_ID` and `APPLE_API_KEY_ISSUER_ID`.

The workflow runs `security find-identity` after importing so you can verify both identities show up in the CI log (Application under `codesigning`, Installer under all policies).
