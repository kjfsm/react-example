import React from "react";
import Tweet, { TweetData } from "./tweet";

interface TimelineProps {
  tweets: TweetData[];
  handleDelete: (index: number) => void;
}

const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => {
  return (
    <div>
      {props.tweets.map((tweet, index) => (
        <Tweet
          key={index}
          index={index}
          tweetData={tweet}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};

export default Timeline;
