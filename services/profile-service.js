let profile = require('./profile.json');

module.exports = (app) => {

  const getCurrentProfile = (req, res) => {
    res.json(profile);
  }

  const updateCurrentProfile = (req, res) => {
    console.log(req);
    profile = {
      ...profile,
      ...req.body,
    }
    res.sendStatus(200);
  }

  app.put('/api/profile', updateCurrentProfile);

  app.get('/api/profile', getCurrentProfile);
};

