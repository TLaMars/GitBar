#!/usr/bin/env node
import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";

const INFO_PLIST_PATH = "macos/GitBar/Info.plist";
const PACKAGE_JSON_PATH = "package.json";

/**
 * @returns {string}
 */
function getCurrentVersion() {
  const packageJson = JSON.parse(readFileSync(PACKAGE_JSON_PATH, "utf8"));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return packageJson.version;
}

/**
 * @param {string} newVersion
 */
function updatePackageJson(newVersion) {
  const packageJson = JSON.parse(readFileSync(PACKAGE_JSON_PATH, "utf8"));
  packageJson.version = newVersion;
  writeFileSync(PACKAGE_JSON_PATH, `${JSON.stringify(packageJson, null, 2)}\n`);
}

/**
 * @param {string} newVersion
 */
function updateInfoPlist(newVersion) {
  let content = readFileSync(INFO_PLIST_PATH, "utf8");

  content = content.replace(
    /<key>CFBundleShortVersionString<\/key>\s*<string>[^<]+<\/string>/,
    `<key>CFBundleShortVersionString</key>\n\t<string>${newVersion}</string>`,
  );

  writeFileSync(INFO_PLIST_PATH, content);
}

/**
 * @param {'major' | 'minor' | 'patch'} type
 * @returns {string}
 */
function bumpVersion(type = "patch") {
  const currentVersion = getCurrentVersion();
  const [major, minor, patch] = currentVersion.split(".").map(Number);

  switch (type) {
    case "major":
      return `${major + 1}.0.0`;
    case "minor":
      return `${major}.${minor + 1}.0`;
    case "patch":
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error("Invalid version type. Use major, minor, or patch");
  }
}

/**
 * @param {string} version
 */
function commitAndTag(version) {
  execSync("git add package.json macos/GitBar/Info.plist");
  execSync(`git commit -m "chore(release): v${version}"`);
  execSync(`git tag -a v${version} -m "v${version}"`);
  execSync("git push && git push --tags");
}

function main() {
  const args = process.argv.slice(2);
  const type = args[0];

  if (!["major", "minor", "patch"].includes(type)) {
    console.error("Please specify version type: major, minor, or patch");
    process.exit(1);
  }

  try {
    const newVersion = bumpVersion(type);

    updatePackageJson(newVersion);
    updateInfoPlist(newVersion);
    commitAndTag(newVersion);

    // eslint-disable-next-line no-console
    console.log(`Successfully bumped version to ${newVersion}`);
  } catch (error) {
    console.error(
      "Error:",
      error instanceof Error ? error.message : String(error),
    );
    process.exit(1);
  }
}

main();
