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

function compNums(a: number, b: number) {
  return a + b;
}

export const TopFive = ({ characters }: arrProps) => {
  return <tbody></tbody>;
};
