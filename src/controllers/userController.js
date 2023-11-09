const userService = require('../services/userService');

exports.getUsers = async (req, res, next) => {
  try {
    const data = await userService.getUsers(req.query.since);
    res.set('Link', data.headers.link);
    res.json(data.users);
  } catch (error) {
    next(error);
  }
};

exports.getUserDetails = async (req, res, next) => {
  try {
    const userDetails = await userService.getUserDetails(req.params.username);
    res.json(userDetails);
  } catch (error) {
    next(error);
  }
};

exports.getUserRepos = async (req, res, next) => {
  try {
    const userRepos = await userService.getUserRepos(req.params.username);
    res.json(userRepos);
  } catch (error) {
    next(error);
  }
};
