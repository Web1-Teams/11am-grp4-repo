import React from "react"
import Category from "./components/Category";

function App() {
  return (
    <article class="CategorySection">
    <Category imageSrc="IMG/DRESS.jpg" label="أثواب" />
    <Category imageSrc="IMG/DRESS.jpg" label="كوفيات" />
    <Category imageSrc="IMG/DRESS.jpg" label="شنط" />
    <Category imageSrc="IMG/DRESS.jpg" label="مجوهرات" />
    <Category imageSrc="IMG/DRESS.jpg" label="شالات" />
    <Category imageSrc="IMG/DRESS.jpg" label="مطرزات اخرى" />
    </article>
  );
}

export default App;