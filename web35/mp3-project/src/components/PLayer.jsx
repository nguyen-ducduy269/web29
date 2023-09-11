import React from "react";
import {
  BsPlayFill,
  BsSkipEndFill,
  BsPauseFill,
  BsSkipStartFill,
} from "react-icons/bs";

const PLayer = ({ isPlaying, onToggle, onPrev, onNext }) => {
  return (
    <>
      <div
        className="music"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          height: 88,
        }}
      >
        <div className="music-infor"></div>

        <div className="music-player" style={{ height: "50%" }}>
          <div
            className="music-player-button"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <button onClick={() => onPrev()}>
              <BsSkipStartFill style={{ fontSize: 16 }} />
            </button>

            <button onClick={() => onToggle()}>
              {!isPlaying ? (
                <BsPlayFill style={{ fontSize: 16 }} />
              ) : (
                <BsPauseFill style={{ fontSize: 16 }} />
              )}
            </button>

            <button onClick={() => onNext()}>
              <BsSkipEndFill style={{ fontSize: 16 }} />
            </button>
          </div>
          <div className="music-player-time"></div>
        </div>

        <div className="music-volumn"></div>
      </div>
    </>
  );
};

export default PLayer;
