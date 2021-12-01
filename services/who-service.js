const dao = require('../db/who/who-dao');

module.exports = (app) => {

  const findWhoToFollowList = (req, res) =>
      dao.findWhoToFollowList()
      .then(who => res.json(who));

  app.get('/api/who', findWhoToFollowList);
};

