import React, { useState } from "react";
import {
  BsPlayFill,
  BsSkipEndFill,
  BsPauseFill,
  BsSkipStartFill,
  BsRepeat,
  BsShuffle,
  BsHeart,
  BsFillVolumeUpFill,
  BsHeartFill,
} from "react-icons/bs";

const PLayer = ({ isPlaying, onToggle, onPrev, onNext, currentSong, song }) => {
  const [fillHeart, setFillHeart] = useState(false);
  return (
    <>
      <div className="music">
        <div className="music-infor">
          <div className="music-infor-img">
            {currentSong ? (
              <img src={currentSong.cover} alt="" />
            ) : (
              <img src={song[0].cover} alt="" />
            )}
          </div>

          <div className="music-infor-des">
            {currentSong ? (
              <div className="music-name">{currentSong.title}</div>
            ) : (
              <div className="music-name">{song[0].title}</div>
            )}

            {currentSong ? (
              <div className="music-author">{currentSong.owner.name}</div>
            ) : (
              <div className="music-author">{song[0].owner.name}</div>
            )}
          </div>

          <div
            className="music-infor-favorite"
            onClick={() => setFillHeart(!fillHeart)}
          >
            {fillHeart ? (
              <>
                <BsHeartFill style={{ color: "red" }} />
              </>
            ) : (
              <>
                <BsHeart />
              </>
            )}
          </div>
        </div>

        <div className="music-player">
          <div className="music-player-button">
            <button>
              <BsShuffle
                style={{ fontSize: 12, color: "white", fontSize: "22px" }}
              />
            </button>

            <button onClick={() => onPrev()}>
              <BsSkipStartFill
                style={{ fontSize: 16, color: "white", fontSize: "22px" }}
              />
            </button>

            <button onClick={() => onToggle()}>
              {!isPlaying ? (
                <BsPlayFill
                  style={{ fontSize: 16, color: "white", fontSize: "38px" }}
                />
              ) : (
                <BsPauseFill
                  style={{ fontSize: 16, color: "white", fontSize: "38px" }}
                />
              )}
            </button>

            <button onClick={() => onNext()}>
              <BsSkipEndFill
                style={{ fontSize: 16, color: "white", fontSize: "22px" }}
              />
            </button>

            <button>
              <BsRepeat
                style={{ fontSize: 12, color: "white", fontSize: "22px" }}
              />
            </button>
          </div>

          <div className="music-player-time">
            <div className="time-start">00:00</div>

            <div className="time-duration">
              <input type="range" name="" id="" max={257} min={0} />
              <div className="progress"></div>
            </div>

            <div className="time-end">00:00</div>
          </div>
        </div>

        <div className="music-volumn">
          <BsFillVolumeUpFill style={{ color: "white", fontSize: "20px" }} />
          <div className="volume-duration">
            <input type="range" name="" id="" max={100} min={1} />
            <div className="volume-progress"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PLayer;
