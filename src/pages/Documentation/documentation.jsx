import React, { useState } from "react";
import { ControlBar, Player } from "video-react";
import "video-react/dist/video-react.css";
import { Button } from "reactstrap";
import PDF from "./pdf";

const sources = {
  sintelTrailer: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "https://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "https://www.w3schools.com/html/mov_bbb.mp4",
  test: "https://media.w3.org/2010/05/video/movie_300.webm",
};

export default function Documentation() {
  const [player, setPlayer] = useState();
  const [source, setSource] = useState(sources.bunnyTrailer);

  const play = () => {
    player.play();
  };

  const pause = () => {
    player.pause();
  };

  const load = () => {
    player.load();
  };

  return (
    <div>
      <h1>Strategi Permainan</h1>
      <Player
        ref={(player) => {
          setPlayer(player);
        }}
      >
        <source src={source}></source>
        <ControlBar autoHide></ControlBar>
      </Player>
      <div className="py-3">
        <Button onClick={play} className="mr-3">
          Play
        </Button>
        <Button onClick={pause} className="mr-3">
          Pause
        </Button>
        <Button onClick={load} className="mr-3">
          Load
        </Button>
      </div>
      {/* <div className="py-1">
          <Button className="mr-3">PlaybackRate++</Button>
          <Button className="mr-3">PlaybackRate--</Button>
          <Button className="mr-3">PlaybackRate+=0.1</Button>
          <Button className="mr-3">PlaybackRate=0.1</Button>
        </div>
        <div className="py-1">
          <Button className="mr-3">Volume+=0.1</Button>
          <Button className="mr-3">Volume-=0.1</Button>
          <Button className="mr-3">Muted=true</Button>
          <Button className="mr-3">Muted=false</Button>
        </div> */}
      <div className="py-3">
        <Button onClick={() => setSource(sources.sintelTrailer)} className="mr-3">
          Sintel Trailer
        </Button>
        <Button onClick={() => setSource(sources.bunnyTrailer)} className="mr-3">
          Bunny Trailer
        </Button>
        <Button onClick={() => setSource(sources.bunnyMovie)} className="mr-3">
          Bunny Movie
        </Button>
        <Button onClick={() => setSource(sources.test)} className="mr-3">
          Test Movie
        </Button>
      </div>
      <div>
        <PDF />
      </div>
    </div>
  );
}
