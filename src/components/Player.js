import React from "react";
import useAudio from "../hooks/useAudio";
import Button from "../styles/Button";

export default ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div style={{ margin: "1rem 0" }}>
      <Button onClick={toggle}>{playing ? "Pause" : "Play now"}</Button>
    </div>
  );
};
