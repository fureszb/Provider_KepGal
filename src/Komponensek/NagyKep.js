import React, { useContext } from "react";
import { KivalasztContext } from "../Context/KivalasztContext.js";

export default function NagyKep({kepLista}) {
  const { aktKep } = useContext(KivalasztContext);
    console.log(aktKep);
   
  return (
    <div className="kep">
      <img src={kepLista[aktKep]} alt={`Kép`} />
    </div>
  );
}
