module.exports = {
  preset: 'react-native',
  // Background-agent worktrees live under .claude/worktrees; their in-flight
  // test files must not run as part of this checkout's suite.
  testPathIgnorePatterns: ['/node_modules/', '/.claude/'],
};
