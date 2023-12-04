import "./App.css";
import { CharCards } from "./components/CharCards";
import { CharRatings } from "./components/CharRatings";
import { Header } from "./components/Header";
import { characters } from "./components/char-data";

function App() {
  return (
    <>
      <Header />
      <CharRatings characters={characters} />
      <CharCards characters={characters} />
    </>
  );
}

export default App;
