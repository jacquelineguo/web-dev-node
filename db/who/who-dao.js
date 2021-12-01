const model = require('./who-model');

const findWhoToFollowList = () => model.find();

module.exports = {
  findWhoToFollowList
};
