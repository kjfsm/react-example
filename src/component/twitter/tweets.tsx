import React, { useState } from "react";

interface TweetsProps {
  handleSend: (tweetText: string) => void;
}

const Tweets: React.FC<TweetsProps> = (props: TweetsProps) => {
  const [tweetText, setTweetText] = useState("");
  return (
    <div>
      <div>
        text{" "}
        <input value={tweetText} onChange={e => setTweetText(e.target.value)} />
      </div>
      <div>
        <button
          onClick={() => {
            props.handleSend(tweetText);
            setTweetText("");
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
export default Tweets;
