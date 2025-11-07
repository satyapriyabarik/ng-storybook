/** @type {import('semantic-release').Options} */
module.exports = {
  branches: [
    "main",
    // optional pre-release branches
    // { name: "beta", prerelease: true },
    // { name: "alpha", prerelease: true },
  ],

  repositoryUrl: "https://github.com/satyapriyabarik/ng-storybook",

  tagFormat: "v${version}",

  plugins: [
    "@semantic-release/commit-analyzer", // determines version bump
    "@semantic-release/release-notes-generator", // generates changelog text
    [
      "@semantic-release/changelog",
      { changelogFile: "CHANGELOG.md" },
    ],
    "@semantic-release/npm", // publishes to npm
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github", // creates GitHub release
  ],
};
