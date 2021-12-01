const model = require('./profile-model');

const findCurrentProfile = () => model.find();

const updateProfile = (id, tweet) =>
    model.updateOne({_id: id},
        {$set: tweet},function(err,question){
          if(err) throw err;
          console.log('the document is updated')
        });

module.exports = {
  findCurrentProfile, updateProfile
};
