# Accounts & authentication

GitBar supports any mix of GitHub, GitLab, and Azure DevOps accounts at the same
time. Each stored account is turned into a provider instance
([accounts context](../../src/contexts/accounts.tsx) →
[data-providers](../../src/core/data-providers/)) that knows how to fetch PRs,
fetch issues, and merge — their results are pulled independently and combined
into one list.

## Connecting a provider

**GitHub** — browser-based OAuth: GitBar opens a web-auth session to GitHub's
authorize page (scopes `repo, read:user`), GitHub redirects back into the app via
the `gitbar://` URL scheme, and the code is exchanged for an access token
([use-github-auth.ts](../../src/hooks/use-github-auth.ts),
[register/github.tsx](../../src/pages/auth/register/github.tsx)). No manual token
handling.

**GitLab** — personal access token: enter your GitLab host (defaults to
`gitlab.com`; self-hosted instances work — the domain is validated and
normalized) plus a PAT with the **`api`** scope. The form links directly to the
instance's token-creation page with the scope pre-selected
([register/gitlab.tsx](../../src/pages/auth/register/gitlab.tsx)).

**Azure DevOps** — organization + personal access token with **Code (Read &
Write)** and **Graph (Read)** scopes; the form links to the organization's token
page ([register/azure.tsx](../../src/pages/auth/register/azure.tsx)).

In every flow the token is verified immediately — GitBar fetches your profile
with it and shows who you're signed in as before the account is saved. Adding an
account with the same identity again replaces the stored one instead of
duplicating it.

## Where credentials live

Accounts — including their tokens — are persisted in the app's local storage on
your Mac (MMKV via redux-persist,
[store/configure.ts](../../src/core/store/configure.ts)). They are only ever sent
to the API of the provider they belong to; there is no GitBar backend. Note that
this is app-local file storage, not the macOS Keychain.

## Managing accounts

Settings → Accounts lists every connected account with its avatar and username,
lets you remove one, and offers "Add new account". Removing the last account
returns you to the add-account screen. Because Azure PR ids are only unique per
organization, everything downstream (queries, merge actions, caches) is keyed by
account id + PR id.
