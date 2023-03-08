import { useState } from "react";
import Game from "./Game";

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios({
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": CLIENT_ID,
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      data: `fields name, rating, summary, total_rating_count; sort rating desc; limit 10;`,
    })
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Games</h1>
      <IconContext.Provider value={{ color: "#2980B9", size: "50px" }}>
        <div className="gamepad-icon">
          <GiGamepad />
        </div>
      </IconContext.Provider>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search games"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="game-list">
        {filteredGames.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default App;
