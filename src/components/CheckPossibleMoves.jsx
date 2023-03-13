export const hasPossibleMoves = (matriz, turn) => {
    // Verifica si hay algún movimiento posible para el jugador actual
    const value = turn ? 2 : 1;
    for (let x = 0; x < matriz.length; x++) {
      for (let y = 0; y < matriz[x].length; y++) {
        if (matriz[x][y] === 0) {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              if (matriz[x + i]?.[y + j] === (turn ? 1 : 2)) {
                let row = x + i;
                let col = y + j;
                while (matriz[row]?.[col] === (turn ? 1 : 2)) {
                  row += i;
                  col += j;
                }
                if (matriz[row]?.[col] === value) {
                  return true;
                }
              }
            }
          }
        }
      }
    }
    return false;
  };
  