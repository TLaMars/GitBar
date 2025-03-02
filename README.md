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
   1. This will bump the version/build number.
   2. Commit the changes.
   3. Creates a new tag.
   4. Pushes the changes.
2. The tag will trigger a new build on Xcode Cloud.
   1. This will build the app.
   2. Upload the app to the App Store (Testflight).
3. Triggers a new release on GitHub.
   1. This will create a new release with the new version.
   2. Adds the changelog to the release.
4. Done!
