import "./style.css";
import { useState, useEffect } from "react";

function Stories() {
  const [stories, setStories] = useState([]);

  const [userLimit] = useState(8);

  const total = stories.slice(0, userLimit);

  useEffect(() => {
    fetch(`https://api.github.com/users/JVictorDias/followers`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setStories(result);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <div className="container">
      {total.map((storie, key) => (
        <div className="userElements" key={key}>
          <div>
            <img
              className="imageUserStory"
              src={`https://github.com/${storie.login}.png`}
              alt="user"
            />
          </div>
          <span>UserImg</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
