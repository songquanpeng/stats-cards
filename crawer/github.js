const axios = require('axios');

let config = {};
if (process.env['GITHUB_TOKEN']) {
  config = {
    headers: { Authorization: `Bearer ${process.env['GITHUB_TOKEN']}` }
  };
}

async function getGitHubInfo(username) {
  let result = {
    name: 'username',
    followers: 0,
    stars: 0,
    repos: 0,
    forks: 0,
    watchers: 0,
    following: 0,
    issues: 0,
    gists: 0
  };

  try {
    let res = await axios.get(
      `https://api.github.com/users/${username}`,
      config
    );
    let userInfo = res.data;
    result.name = userInfo.name;
    result.followers = userInfo.followers;
    result.following = userInfo.following;
    result.repos = userInfo.public_repos;
    result.gists = userInfo.public_gists;
    for (let i = 0; i < result.repos / 100; i++) {
      let res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100&page=${i + 1}`
      );
      let repos = res.data;
      repos.forEach(repo => {
        result.stars += repo.stargazers_count;
        result.forks += repo.forks;
        result.watchers += repo.watchers;
        result.issues += repo.open_issues;
      });
    }
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getGitHubInfo;
