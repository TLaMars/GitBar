const { exec } = require("child_process");
const fs = require("fs");

const execPromise = (cmd) =>
  new Promise((resolve, reject) => {
    exec(cmd, (err, stdout) => {
      if (err) return reject(err);
      return resolve(stdout);
    });
  });

// Path to your CHANGELOG.md file
const FILE_PATH = "./CHANGELOG.md";

// Function to extract changelog content for a specific version
const getChangelogContent = (version) =>
  new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
      if (err) {
        reject(new Error(`Error reading the file: ${err}`));
        return;
      }

      // Regex to match version and extract content
      const pattern = new RegExp(
        `## \\[${version}\\].*?\\n\\n([\\s\\S]*?)(?=## \\[|$)`,
        "g",
      );
      const match = data.match(pattern);

      if (match) {
        // Remove the header and return the content as a string
        const content = match[0].replace(/##.*?\n\n/, "").trim();
        resolve(content);
      } else {
        resolve(`Version ${version} not found.`);
      }
    });
  });

const getPackageJsonVersion = () => {
  const packageJson = require("../package.json");
  return packageJson.version;
};

const createGitHubRelease = async () => {
  console.info("Starting GitHub release process...");
  const version = getPackageJsonVersion();
  const releaseVersion = `v${version}`;
  const releaseTitle = `Release ${releaseVersion}`;
  const releaseBody = await getChangelogContent(version);

  console.info("Creating GitHub release...");
  const cmd = `gh release create ${releaseVersion} -t "${releaseTitle}" -n "${releaseBody}"`;
  await execPromise(cmd);
  console.info("GitHub release created successfully");
};

void createGitHubRelease();
