import { TopFive } from "./TopFive";
import "../css/CharRatings.css";

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

export const CharRatings = ({ characters }: arrProps) => {
  const topVotes = characters
    .sort(({ votes: a }, { votes: b }) => b - a)
    .slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topVotes.map((char) => (
            <TopFive
              character={char}
              index={topVotes.indexOf(char)}
              key={char.name}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
