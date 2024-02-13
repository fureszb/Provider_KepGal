import React, { useContext } from "react"; 
import "./App.css";
import Kep from "./Komponensek/Kep";
import { KivalasztProvider } from "./Context/KivalasztContext.js"; 
import { kepLista } from "./KepLista.js";
import NagyKep from "./Komponensek/NagyKep";

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgalléria</h1>
      </header>
      <KivalasztProvider>
        <section>
        <NagyKep kepLista={kepLista} />
        </section>
        <article>
          {kepLista.map((elem, index) => (
            <Kep key={index} src={elem} index={index} />
          ))}
        </article>
      </KivalasztProvider>
      <footer>Furesz Bence</footer>
    </div>
  );
}

export default App;
