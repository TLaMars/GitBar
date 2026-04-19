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
- [x] Hide PRs from Relevant PRs tab

### To Do

- [ ] Bitbucket
- [ ] Prioritize PRs
- [ ] Ignore Repositories
- [ ] Merge PRs
- [ ] See Pipeline Status

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

1. In keychain select both certificates and corresponding private keys.
2. Right click and select "Export 4 items".
3. Choose a name for the certificates and private keys and export them as p12 file.
4. Choose a password and save that password (it is needed in the workflow)
5. Base64 encode the p12 file: `cat certificate.p12 | base64`
6. Add the base64 encoded string as a secret in the repository. -> `APPLE_CERTIFICATE_P12_BASE64`
7. Add the password as a secret in the repository. -> `APPLE_CERTIFICATE_P12_PASSWORD`
8. Base64 encode the API Key for App Store Connect: `cat api-key.txt | base64`
9. Add the base64 encoded string as a secret in the repository. -> `APPLE_API_KEY_CONTENT`
