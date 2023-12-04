import { Component } from "react";
import "../css/Card.css";
type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

type Char = {
  char: Character;
};

export class Card extends Component<Char> {
  render() {
    const character = this.props.char;

    return (
      <div className='card'>
        <div className='card-titles'>
          <h3>{character.name}</h3>
          <h4>{character.nickName}</h4>
        </div>
        <img src={character.imageUrl} alt={character.name} />
        <p>{character.background}</p>
      </div>
    );
  }
}
