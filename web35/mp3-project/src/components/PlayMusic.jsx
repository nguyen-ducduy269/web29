import React from "react";

const PlayMusic = ({ currentSong, song }) => {
  return (
    <>
      <div className="play-music">
        <div className="music-now">
          <h4>
            <b>Playing</b>
          </h4>
          {currentSong ? (
            <>
              <div className="music-name">{currentSong.title}</div>
              <div className="music-artist">{currentSong.owner.name}</div>
              <div className="music-image">
                <img src={currentSong.cover} />
              </div>
            </>
          ) : (
            <>
              <div className="music-name">{song[0].title}</div>
              <div className="music-artist">{song[0].owner.name}</div>
              <div className="music-image">
                <img src={song[0].cover} />
              </div>
            </>
          )}
        </div>

        <div className="music-list">
          <div className="table">
            <div style={{ display: "flex" }}>
              <div className="number">#</div>
              <div className="title">Title</div>
              <div className="artist">Artist</div>
            </div>
            <div className="list-item">
              {song.map((item) => {
                return (
                  <div key={item.id} className="music-list-item">
                    <div className="number-td">{item.id}</div>
                    <div className="title-td">{item.title}</div>
                    <div className="artist-td">{item.owner.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayMusic;
