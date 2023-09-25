import { useEffect, useState } from "react";
import "./App.css";
import { Grid, Flex } from "@chakra-ui/react";
// import useFetchData from "./useFetchData";

const navBar = [
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    title: "Action",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
    title: "Indie",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
    title: "Adventure",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
    title: "RPG",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/a88/a886c37bf112d009e318b106db9d420a.jpg",
    title: "Strategy",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/120/1201a40e4364557b124392ee50317b99.jpg",
    title: "Shooter",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/screenshots/054/054bf49d9e736edfda5aa8e9015faf9b.jpeg",
    title: "Casual",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
    title: "Simulation",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/328/3283617cb7d75d67257fc58339188742.jpg",
    title: "Puzzle",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/363/36306deef81e7955a5d0f5c3b43fccee.jpg",
    title: "Arcade",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg",
    title: "Platformer",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/082/082365507ff04d456c700157072d35db.jpg",
    title: "Racing",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
    title: "Massively Multiplayer",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/d16/d160819f22de73d29813f7b6dad815f9.jpg",
    title: "Sports",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg",
    title: "Fighting",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/0c1/0c1c9965ba59166ab986a663ab2252dc.jpg",
    title: "Family",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/screenshots/f64/f6470e82e699c6f4d6e151ecaf13e256.jpg",
    title: "Board Games",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/screenshots/9d4/9d45ba1c76712ad692fadda67f2777a9.jpeg",
    title: "Educational",
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/screenshots/8ff/8ffe8f19d2e764867c8ed625ddf4e368.jpg",
    title: "Card",
  },
];

const orderBy = [
  {
    name: "Relevance",
  },
  {
    name: "Data added",
  },
  {
    name: "Name",
  },
  {
    name: "Release date",
  },
  {
    name: "Popularity",
  },
  {
    name: "Average rating",
  },
];

function App() {
  const [myResult, setMyResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = navBar.map((item: any) => {
    return (
      <div className="item">
        <Flex gap={"10px"}>
          <div className="item-img">
            <img src={item.image} alt={item.title} />
          </div>

          <button className="title">{item.title}</button>
        </Flex>
      </div>
    );
  });

  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/platforms?key=6fd6551be32c4258b82295f48d4cee95"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setMyResult(data))
      .catch((err) => {
        setError(err.message);
        setMyResult(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <Flex alignItems={"center"} gap={"10px"}>
          <a href="#" className="page-logo">
            <img
              src="https://felstar.com/demo/gamehub/assets/logo-ff4914e6.webp"
              alt=""
            />
          </a>

          <form action="" className="header-form">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search games..." />
          </form>

          <div className="header-toggle">
            <label htmlFor="" data-checked>
              <input type="checkbox" name="" id="" />
              <span data-checked>
                <span data-checked></span>
              </span>
            </label>
            <p>Dark Mode</p>
          </div>
        </Flex>
      </header>

      <main>
        <Flex>
          <div className="nav">
            <Grid gap={"15px"} paddingLeft={"20px"} paddingRight={"20px"}>
              <h1>
                <b>Genres</b>
              </h1>

              {data}
            </Grid>
          </div>

          <div className="content">
            <h1>
              <b>Games</b>
            </h1>

            <div>
              <select name="" id="game-result">
                {loading && <div>A moment please...</div>}
                {error && (
                  <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                {myResult &&
                  myResult.results.map((item: any) => (
                    <option value={item.name}>{item.name}</option>
                  ))}
              </select>

              <select name="" id="order-by">
                {orderBy.map((item: any) => {
                  return <option value="">Order by:{item.name}</option>;
                })}
              </select>
            </div>
          </div>
        </Flex>
      </main>
    </>
  );
}

export default App;
