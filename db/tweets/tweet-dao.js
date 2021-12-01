const model = require('./tweet-model');
const {ObjectId} = require('mongodb');

const findAllTweets = () => model.find();
const createTweet = (tweet) => {
  model.create(tweet);
};
const deleteTweet = (id) =>
    model.deleteOne({_id: ObjectId(id)},function(err,res){
      if(err) throw err;
      console.log('the document is deleted')
    });

const findTweetById = (id)  =>
  model.findById(id);

const updateTweet = (id, tweet) =>
    model.updateOne({_id: id},
        {$set: tweet},function(err,res){
          if(err) throw err;
          console.log('the document is updated')
        });

module.exports = {
  findAllTweets, createTweet,
  deleteTweet, updateTweet, findTweetById
};
