import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [blood, setBlood] = useState("");
  const [sex, setSex] = useState("");
  const [isSport, setIsSport] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [isMusic, setIsMusic] = useState(false);
  const [isTravel, setIsTravel] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <>
      <p>
        <label>
          名前：
          <input
            type="text"
            name="name"
            size={40}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          血液型：
          <select name="blood" onChange={(e) => setBlood(e.target.value)}>
            <option value="A">A型</option>
            <option value="B">B型</option>
            <option value="O">O型</option>
            <option value="AB">AB型</option>
          </select>
        </label>
      </p>
      <fieldset>
        <legend>性別</legend>
        <p>
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              onChange={() => setSex("male")}
            />
            男
          </label>
        </p>
        <p>
          <label>
            <input
              type="radio"
              name="sex"
              value="female"
              onChange={() => setSex("female")}
            />
            女
          </label>
        </p>
      </fieldset>
      <fieldset>
        <legend>趣味</legend>
        <p>
          <label>
            <input
              type="checkbox"
              name="hobby"
              value="sports"
              checked={isSport}
              onChange={() => setIsSport(!isSport)}
            />
            スポーツ
          </label>
        </p>
        <p>
          <label>
            <input
              type="checkbox"
              name="hobby"
              value="reading"
              checked={isReading}
              onChange={() => setIsReading(!isReading)}
            />
            読書
          </label>
        </p>
        <p>
          <label>
            <input
              type="checkbox"
              name="hobby"
              value="music"
              checked={isMusic}
              onChange={() => setIsMusic(!isMusic)}
            />
            音楽
          </label>
        </p>
        <p>
          <label>
            <input
              type="checkbox"
              name="hobby"
              value="travel"
              checked={isTravel}
              onChange={() => setIsTravel(!isTravel)}
            />
            旅行
          </label>
        </p>
      </fieldset>
      <p>
        <label>
          コメント：
          <br />
          <textarea
            name="comments"
            rows={2}
            cols={40}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </label>
      </p>
      <p>名前 {name}</p>
      <p>血液型 {blood}</p>
      <p>性別 {sex}</p>
      <p>スポーツ {isSport ? "Yes" : "No"}</p>
      <p>読書 {isReading ? "Yes" : "No"}</p>
      <p>音楽 {isMusic ? "Yes" : "No"}</p>
      <p>旅行 {isTravel ? "Yes" : "No"}</p>
      <p>コメント {comment}</p>
    </>
  );
};

export default Forms;
