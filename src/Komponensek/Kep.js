import React, { useContext } from "react";
import { KivalasztContext } from "../Context/KivalasztContext.js";

export default function Kep({ src, index }) {
  const { kattintas } = useContext(KivalasztContext);

  return (
    <div className="kep" onClick={() => kattintas(index)}>
      <img src={src} alt={`Kép ${index}`} />
    </div>
  );
}
