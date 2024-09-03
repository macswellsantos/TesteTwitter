var Twit = require("twit");
require("dotenv").config();

const express = require('express')
const app = express()
const port = 3000


const nossoBot = new Twit({

  consumer_key: process.env.CONSUMER_KEY,

  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,

  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000
});

function botAction() {
    var postTweet = "uhuuuuuuuu! I'm back!";
    nossoBot.post(

        'statuses/update',
        { status: postTweet },
        function (err, data, response) {

        if (err) {

            console.log("ERRO: " + err);
            return false;
        }

        console.log("Tweet postado com sucesso!\n");

        }
    )
}

app.get('/post', (req, res) => {
  botAction();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})