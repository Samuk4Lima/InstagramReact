import "./style.css";
import { BsBookmark, BsChat, BsEmojiSmile } from "react-icons/bs";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";

function Post() {
  const [posts, setPosts] = useState([]);

  const [userLimit] = useState(20);

  const total = posts.slice(0, userLimit);

  useEffect(() => {
    fetch(`https://api.github.com/users/JVictorDias/followers`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setPosts(result);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  return (
    <div className="postCompleto">
      {total.map((post, key) => (
        <div className="contido" key={key}>
          <div className="postH">
            <div className="postData">
              <img
                className="imgPost"
                src={`https://github.com/${post.login}.png`}
                alt="fireEye"
              />
              <p>{post.login}</p>
            </div>

            <FiMoreHorizontal />
          </div>

          <div className="postImage">
            <img src={`https://github.com/${post.login}.png`} alt="Oracle" />
          </div>

          <div className="postFooter">
            <IconContext.Provider value={{ size: "30px" }}>
              <div className="postEngagement">
                <div className="icone1">
                  <div className="icone">
                    <IoMdHeartEmpty />
                  </div>
                  <div className="icone">
                    <BsChat />
                  </div>
                  <div className="icone">
                    <FiSend />
                  </div>
                </div>

                <div className="icone">
                  <BsBookmark />
                </div>
              </div>
            </IconContext.Provider>

            <section className="like">
              <strong>200 curtidas</strong>
            </section>

            <div className="postLegend">
              <p>
                <strong>{post.login}</strong> The Oracle Accelerated Data
                Science (ADS) SDK is a Python library that is included as part
                of the Oracle Cloud Infrastructure Data Science service.
              </p>
            </div>

            <div className="latestPost">
              <time>HÁ 3 HORAS</time>
            </div>

            <div className="coment">
              <div className="comentFake">
                <IconContext.Provider value={{ size: "25px" }}>
                  <div className="icone">
                    <BsEmojiSmile />
                  </div>
                </IconContext.Provider>

                <input placeholder="Adicione um comentário..." />
              </div>

              <button>Publicar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
