// let tweets = require('./tweets.json');
const dao = require('../db/tweets/tweet-dao');

module.exports = (app) => {


  const findAllTweets = (req, res) =>
      dao.findAllTweets()
      .then(tweets => res.json(tweets));


  // const findAllTweets = (req, res) => {
  //   res.json(tweets);
  // }

  const postNewTweet = (req, res) => {
    const newTweet = {
      // _id: (new Date()).getTime() + '',
      "topic": "webdev",
      "userName": "ReactJS",
      "verified": false,
      "handle": "ReactJS",
      "time": "2h",
      "avatar-image": "../../../image/react.png",
      "logo-image": "../../../image/react.png",
      "stats": {
        "comments": 123,
        "retweets": 234,
        "likes": 345
      },
      ...req.body,
    }
    // tweets = [
    //   newTweet,
    //   ...tweets
    // ];
    dao.createTweet(newTweet);
    res.json(newTweet);
  }

  const deleteTweet = (req, res) => {
    const id = req.params['id'];
    // tweets = tweets.filter(tweet => tweet._id !== id);
    dao.deleteTweet(id)
    res.sendStatus(200);
  }

  const likeTweet = (req, res) => {
    const id = req.params['id'];
    // tweets = tweets.map(tweet => {
    //   if (tweet._id === id) {
    dao.findTweetById(id)
    .then(tweet => {
      // console.log("\n\n\n", tweet.stats.likes, "\n\n\n");
      if (tweet.liked === true) {
        tweet.liked = false;
        tweet.stats.likes--;
      } else {
        tweet.liked = true;
        tweet.stats.likes++;
      }

      // console.log("\n\n\n", tweet.stats.likes, "\n\n\n");
      // return tweet;
      // } else {
      //   return tweet;
      // }
      // });
      dao.updateTweet(id, tweet)
    })
    res.sendStatus(200);
  }


  app.put('/api/tweets/:id/like', likeTweet);

  app.delete('/api/tweets/:id', deleteTweet);

  app.post('/api/tweets', postNewTweet);

  app.get('/api/tweets', findAllTweets);
};

