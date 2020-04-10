import React from "react";

export interface TweetProps {
  tweetData: TweetData;
  index: number;
  handleDelete: any;
}

export interface TweetData {
  name: string;
  text: string;
}

const Tweet: React.FC<TweetProps> = (props: TweetProps) => {
  return (
    <fieldset>
      <div>{props.tweetData.name}</div>
      <div>{props.tweetData.text}</div>
      <button onClick={() => props.handleDelete(props.index)}>delete</button>
    </fieldset>
  );
};

export default Tweet;
