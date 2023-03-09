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


    const setMatriz = [...matriz];
    if (setMatriz[x][y] === 0) {

      // Verifica si la ficha seleccionada está entre dos fichas del color opuesto
      let shouldFlip = false;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) {
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
                setMatriz[x + k][y + l] = value;
              }
              shouldFlip = true;
            }
          }
        }
      }

      if (shouldFlip) {
        setMatriz[x][y] = value;
        setTurn(!turn);
        return true;
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
        </div>
      </div>
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
  );
};


export default Board