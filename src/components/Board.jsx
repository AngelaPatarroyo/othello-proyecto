import React, { useState, useEffect } from "react";
import Tile from './Tile'
import ScoreBoard from './ScoreBoard'


/* false = turno blanco
    true = turno negro */

/* 1=blanco
2=negro
0=vacio */

const Board = () => {
  const [turn, setTurn] = useState(true);
  const [matriz, setMatriz] = useState([
    
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [whiteCount, setWhiteCount] = useState(0);
  const [blackCount, setBlackCount] = useState(0);


  useEffect(() => {
    const white = matriz.reduce(
      (acc, x) => acc + x.filter((value) => value === 1).length,
      0
    );
    const black = matriz.reduce(
      (acc, x) => acc + x.filter((value) => value === 2).length,
      0
    );
    setWhiteCount(white);
    setBlackCount(black);

    // verifica si algún color alcanzó 32
    if (white >= 32 || black >= 32) {
      // aquí se puede detener el juego de alguna manera
      alert(`El Ganador es: ${white >= 32 ? 'Blanco' : 'Negro'}`);
    }
  }, [matriz, whiteCount, blackCount]);



  const checkTile = (x, y) => {

    const value = turn ? 2 : 1;
    const oppositeColor = turn ? 1 : 2;

    // Verifica si hay una ficha del color opuesto en una posición adyacente
    const hasOppositeColorAdjacent = [[x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
    [x - 1, y - 1],
    [x - 1, y + 1],
    [x + 1, y - 1],
    [x + 1, y + 1],
    ].some(([i, j]) => matriz[i]?.[j] === oppositeColor);

    if (hasOppositeColorAdjacent) {
      const newMatriz = [...matriz]; // crear una copia de la matriz

      // check if tile is already occupied before setting its value
      if (newMatriz[x][y] === 0) {
        // Verifica si la ficha seleccionada está entre dos fichas del color opuesto
        let shouldFlip = false;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) {
              continue; // saltar la ficha actual
            }
            if (matriz[x + i]?.[y + j] === oppositeColor) {
              let row = x + i;
              let col = y + j;
              while (matriz[row]?.[col] === oppositeColor) {
                row += i;
                col += j;
              }
              if (matriz[row]?.[col] === value) {
                // se pueden voltear las fichas en esta dirección
                for (let k = i, l = j; matriz[x + k]?.[y + l] === oppositeColor; k += i, l += j) {
                  newMatriz[x + k][y + l] = value;
                }
                shouldFlip = true;
              }
            }
          }
        }

        if (shouldFlip) {
          newMatriz[x][y] = value;
          setMatriz(newMatriz);
          setTurn(!turn);
          return true;
        }
      }

    }
    return false;
  };

  return (
    <div className="flex items-center space-x-2 text-base gap-x-4 mt-8">
      <div className="mt-14">
        {matriz.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-start ml-44">
            {row.map((value, colIndex) => (
              <Tile
                key={colIndex}
                value={value}
                onClick={() => checkTile(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
        <div>
          <ScoreBoard
            setTurn={setTurn}
            setMatriz={setMatriz}
            setBlackCount={setBlackCount}
            setWhiteCount={setWhiteCount}
            whiteCount={whiteCount}
            blackCount={blackCount}
            turn={turn}
          />
        </div>
      </div>
    </div>
  );
};


export default Board