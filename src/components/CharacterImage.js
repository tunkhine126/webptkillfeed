import React from 'react';

const CharacterImage = ({character, player}) => {
  let image

  switch (character) {
    case 'Winston':
      image = require('../assets/images/Winston.png');
      break;
    case 'Mei':
      image = require('../assets/images/Mei.png');
      break;
    case 'Zenyatta':
      image = require('../assets/images/Zenyatta.png');
      break;
    default:
      image = 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5c/PI_Overwatch_Logo_Black.png/revision/latest?cb=20160706115645';
      break;
  }

  return (
    <div className="character flex flex-col items-center">
      <div className="text-lg font-bold text-ow-grey py-2">
        {character}
      </div>
      <div>
        <img className="object-contain h-48 w-96" src={image} alt={character} />
      </div>
      <div className="text-sm text-white">
        {player}
      </div>
    </div>
  )

}

export default CharacterImage

// Chars:
// Winston
// Mei
// Zenyatta