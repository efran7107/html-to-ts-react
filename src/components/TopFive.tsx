type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

type charProps = {
  character: Character;
  index: number;
};

export const TopFive = ({ character, index }: charProps) => {
  const shade = (index + 1) % 2 === 0 ? "light" : "dark";

  return (
    <>
      <tr className={shade}>
        <td>{character.name}</td>
        <td>{character.skillset}</td>
        <td>{character.votes}</td>
      </tr>
    </>
  );
};
