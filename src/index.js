import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/home/App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

/*
<React.StrictMode> englobe le tout et permet de détecter les erreurs, d'encadrer le projet.
Le routeur et l'app sont appelés.

Le <routes> (anciennement switch) s'assure qu'une seule route sera proposée à la fois. Il propose de modifier la fin d'URL en prenant en compte l'ID et s'execute de haut en bas.
Ici, un composant par page pour structurer les AUTRES composants du dossier qui viennent servir d'élément, comme on l'a vu, tout simplement.
*/

reportWebVitals();
