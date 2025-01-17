const githubUsername = "SoobinJung1013";
const mediumUsername = "judy1013";

const createMediumURL = (username) =>
  `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
const createGitConnectedURL = (username) =>
  `https://gitconnected.com/v1/portfolio/${username}`;
const gitRepos = (username) => `https://pinned.berrysauce.dev/get/${username}`;

export const URLs = {
  medium: createMediumURL(mediumUsername),
  gitConnected: createGitConnectedURL(githubUsername),
  gitRepo: gitRepos(githubUsername),
};
