import React from 'react';

const MethodImage = ({ method, damage}) => {
  let image

  switch (method) {
    case 'Tesla Cannon':
      image = require('../assets/images/Icon_teslacannon.png');
      break;
    case 'Cryo-Freeze':
      image = require('../assets/images/Icon_Cryo-Freeze.png');
      break;
    case 'Orb of Destruction':
      image = require('../assets/images/Icon_OrbofDestruction.png');
      break;
    case 'Primal Rage':
      image = require('../assets/images/Icon_PrimalRage.png');
      break;
    case 'Icicle':
      image = require('../assets/images/Icon_Icicle.png');
      break;
    case 'Orb of Discord':
      image = require('../assets/images/Icon_OrbofDiscord.png');
      break;
    default:
      image = 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5c/PI_Overwatch_Logo_Black.png/revision/latest?cb=20160706115645';
      break;
  }
  return(
    <div className="method flex flex-col items-center flex-wrap justify-center p-4">
      <div>
        <img className="object-contain h-20 w-40 px-4 transform -scale-x-100" src={image} alt={method} />
      </div>
      <div className="text-sm sm:text-lg text-white w-full">
        Method: <span className="font-bold">{method}</span>
      </div>
      <div className="text-sm sm:text-lg text-white px-4">
        Damage ⚡: <span className="font-bold">{damage}</span>
      </div>
    </div>
  )
}

export default MethodImage

// Methods:
// Tesla Cannon
// Cryo-Freeze
// Orb of Destruction
// Primal Rage
// Icicle
// Orb of Discord