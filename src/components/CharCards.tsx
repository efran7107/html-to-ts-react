import { Card } from "./Card";
import "../css/CharCards.css";
type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

type arrProps = {
  characters: Character[];
};

export const CharCards = ({ characters }: arrProps) => {
  return (
    <>
      <section id='character-cards'>
        {characters.map((char) => (
          <Card char={char} key={characters.indexOf(char)} />
        ))}
      </section>
    </>
  );
};
