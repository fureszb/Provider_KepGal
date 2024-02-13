import React, { createContext, useState } from "react";

export const KivalasztContext = createContext();

export const KivalasztProvider = ({ children }) => {
  const [aktKep, setAktKep] = useState(0);
  console.log(aktKep);
  const kattintas = (index) => {
    console.log(index);
    setAktKep(index);
  };

  return (
    <KivalasztContext.Provider value={{ aktKep, setAktKep, kattintas }}>
      {children}
    </KivalasztContext.Provider>
  );
};