interface Props {
  matrix: string[];
}

export const FindPathAndLetters = ({ matrix }: Props) => {
  let path = '';
  let letters = '';
  let row = 0;
  let col = 0;
  let direction: 'right' | 'down' | 'left' | 'up' = 'right';

  const moveRight = () => { col++; };
  const moveDown = () => { row++; };
  const moveLeft = () => { col--; };
  const moveUp = () => { row--; };

  const canMoveRight = () => {
    return col + 1 < matrix[0].length && matrix[row][col + 1] !== ' ';
  };

  const canMoveDown = () => {
    return row + 1 < matrix.length && matrix[row + 1][col] !== ' ';
  };

  const canMoveLeft = () => {
    return col - 1 >= 0 && matrix[row][col - 1] !== ' ';
  };

  const canMoveUp = () => {
    return row - 1 >= 0 && matrix[row - 1][col] !== ' ';
  };

  const updateDirection = () => {
    switch (direction) {
      case 'right':
        if (canMoveRight()) {
          moveRight();
        } else if (canMoveDown()) {
          direction = 'down';
          moveDown();
        } else if (canMoveLeft()) {
          direction = 'left';
          moveLeft();
        } else if (canMoveUp()) {
          direction = 'up';
          moveUp();
        }
        break;
      
      case 'down':
        if (canMoveDown()) {
          moveDown();
        } else if (canMoveRight()) {
          direction = 'right';
          moveRight();
        } else if (canMoveLeft()) {
          direction = 'left';
          moveLeft();
        } else if (canMoveUp()) {
          direction = 'up';
          moveUp();
        }
        break;
      
      case 'left':
        if (canMoveLeft()) {
          moveLeft();
        } else if (canMoveDown()) {
          direction = 'down';
          moveDown();
        } else if (canMoveUp()) {
          direction = 'up';
          moveUp();
        }
        break;
      
      case 'up':
        if (canMoveUp()) {
          moveUp();
        } else if (canMoveRight()) {
          direction = 'right';
          moveRight();
        } else if (canMoveLeft()) {
          direction = 'left';
          moveLeft();
        }
        break;

      default:
        break;
    }
  };

  while (true) {
    const character = matrix[row][col];

    if (character === 's') {
      path += 's';
      break;
    }

    if (character !== ' ') {
      if (character === '|' || character === '+') {
        path += character;
      } else {
        path += character;
        if (/[A-Z]/.test(character)) {
          letters += character;
        }
      }
    }

    updateDirection();
  }

  return (
    <div>
      <h3>Path: {path}</h3>
      <h3>Letters: {letters}</h3>
    </div>
  );
};