const mongoose = require('mongoose');
const schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  handle: String,
  profilePicture: String,
  bannerPicture: String,
  bio: String,
  website: String,
  location: String,
  dateOfBirth: String,
  dateJoined: String,
  followingCount: {type: Number, defaultValue: 312},
  followersCount: {type: Number, defaultValue: 190},
}, {collection: "profile"});
module.exports = schema;
