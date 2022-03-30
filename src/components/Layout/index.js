import "./style.css";
import Stories from "../stories/Stories.js";
import Post from "../Post/Post.js";
import Sugestoes from "../Sugestoes/Sugestoes.js";

function Layout() {
  return (
    //retornando um fragment
    <>
      <div className="mainGrid">
        <div className="column1" style={{ gridArea: "column1" }}>
          <div className="box">
            <Stories />
          </div>

          <div className="box" style={{ margin: "30px 0" }}>
            <Post />
          </div>
        </div>

        <div style={{ gridArea: "column2" }}>
          <div className="sugestionBox">
            <Sugestoes />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
