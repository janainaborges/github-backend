const axios = require('axios');

const GITHUB_API_URL = 'https://api.github.com';

exports.getUsers = async (since) => {
  const response = await axios.get(`${GITHUB_API_URL}/users`, { params: { since } });
  return { users: response.data, headers: response.headers };
};

exports.getUserDetails = async (username) => {
  const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
  return response.data;
};

exports.getUserRepos = async (username) => {
  const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
  return response.data;
};
