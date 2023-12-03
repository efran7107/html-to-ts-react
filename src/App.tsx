import "./App.css";
import { CharRatings } from "./components/CharRatings";
import { Header } from "./components/Header";
import { characters } from "./components/char-data";

function App() {
  return (
    <>
      <Header />
      <CharRatings characters={characters} />
    </>
  );
}

export default App;
