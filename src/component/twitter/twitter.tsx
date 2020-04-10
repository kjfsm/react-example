import React, { useState } from "react";
import Tweets from "./tweets";
import Timeline from "./timeline";
import { TweetData } from "./tweet";

const Twitter = () => {
  const [tweets, setTweets] = useState<TweetData[]>([{ name: "", text: "" }]);
  const [name, setName] = useState<string>("");

  const handleSend = (tweetText: string) => {
    const newTweets = tweets.slice();
    setTweets(newTweets.concat({ name: name, text: tweetText }));
  };

  const handleDelete = (index: number) => {
    const newTweets = tweets.slice();
    newTweets.splice(index, 1);
    setTweets(newTweets);
  };

  return (
    <>
      name <input onChange={(e) => setName(e.target.value)} />
      <Tweets handleSend={handleSend} />
      <Timeline tweets={tweets} handleDelete={handleDelete} />
    </>
  );
};

export default Twitter;
