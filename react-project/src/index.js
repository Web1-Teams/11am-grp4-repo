import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryParents from "./components/CategoryParents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <main className="CategorySection">
        <CategoryParents imageSrc="/img/DRESS.jpg" categoryName="أثواب" />
        <CategoryParents imageSrc="/img/BAG.jpg" categoryName="حقائب" />
        <CategoryParents imageSrc="/img/KOFEA.jpg" categoryName="كوفيات" />
        <CategoryParents imageSrc="/img/MJOHRAT.jpg" categoryName="مجوهرات" />
        <CategoryParents imageSrc="/img/SHALAT.jpg" categoryName="شالات" />
        <CategoryParents
          imageSrc="/img/TATEZa5r.jpg"
          categoryName="تطريزات اخرى"
        />
      </main>
    </Router>
  </React.StrictMode>
);
