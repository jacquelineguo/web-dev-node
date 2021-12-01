const dao = require('../db/profile/profile-dao')
// let profile = require('./profile.json');

module.exports = (app) => {

  const getCurrentProfile = (req, res) => {
    // res.json(profile);
    dao.findCurrentProfile()
    .then(profile => res.json(profile[0]));
  }

  const updateCurrentProfile = (req, res) => {
    // profile = {
    //   ...profile,
    //   ...req.body,
    // }
    dao.findCurrentProfile()
    .then(profile => {
      dao.updateProfile(profile[0]._id, req.body);
    })
    res.sendStatus(200);
  }

  app.put('/api/profile', updateCurrentProfile);

  app.get('/api/profile', getCurrentProfile);
};

