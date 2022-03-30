import "./style.css";
import { useState, useEffect } from "react";

function Sugestoes() {
  const [suggestions, setSuggestions] = useState([]);

  const [userLimit] = useState(5);

  const total = suggestions.slice(0, userLimit);

  useEffect(() => {
    fetch(`https://api.github.com/users/filipedeschamps/followers`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setSuggestions(result);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <div className="suggestionContainer">
      <div className="headerSuges">
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14Gjyt8x8kHrtKOJQqDhvEI6W429QOaXl0Nolo9DChg=s288-p-no"
          alt="myImage"
        />

        <div className="userDataSuges">
          <div className="data">
            <span>samuk4l</span>
            <p>Samuel Lima</p>
          </div>

          <button className="mudar">Mudar</button>
        </div>
      </div>
      <div className="headerPrincipalSuges">
        <p>Sugestões para você</p>

        <span>Ver tudo</span>
      </div>

      <div className="userSuges">
        {total.map((suggestion, key) => (
          <div className="suggestionDatas" key={key}>
            <img src={`https://github.com/${suggestion.login}.png`} />

            <div className="dataLog">
              <span>{suggestion.login}</span>
              <p>Seguido por joaogabrieltg</p>
            </div>

            <button className="seguir">Seguir</button>
          </div>
        ))}
      </div>

      <footer className="suggestionFooter">
        <p>
          Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull;
          Privacidade &bull; Termos &bull; Localizações &bull; Principais contas
          &bull; Hashtags &bull; Idioma
        </p>

        <p>&copy; 2022 INSTAGRAM FROM META</p>
      </footer>
    </div>
  );
}

export default Sugestoes;
