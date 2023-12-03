import { TopFive } from "./TopFive";
import { characters } from "../components/char-data";

type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

export const CharRatings = () => {
  return (
    <section id='character-ratings'>
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <TopFive characters={characters} />
      </table>
    </section>
  );
};
