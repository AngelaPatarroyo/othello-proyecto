import React, { useState } from "react";

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
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
 

  const checkTile = (x, y) => {
    if (matriz[x][y] !== 0) {
      return false;
    }
    const value = turn ? 2 : 1;
    const oppositeColor = turn ? 1 : 2;

    if (
      (x > 0 &&
        y > 0 &&
        x <= 7 &&
        y <= 7 &&
        matriz[x - 1][y] === oppositeColor) ||
      matriz[x + 1][y] === oppositeColor ||
      matriz[x][y - 1] === oppositeColor ||
      matriz[x][y + 1] === oppositeColor ||
      matriz[x - 1][y - 1] === oppositeColor ||
      matriz[x - 1][y + 1] === oppositeColor ||
      matriz[x + 1][y - 1] === oppositeColor ||
      matriz[x + 1][y + 1] === oppositeColor
    ) {
      setMatriz((matriz) => {
        const newMatriz = [...matriz];
        newMatriz[x][y] = value;

        /* actualizar la fila */

        for (let i = x - 1; i >= 0; i--) {
          if (matriz[x][y] === oppositeColor) {
            newMatriz[i][y] = value;
          }
        }
        for (let i = x + 1; i < 8; i++) {
          if (matriz[i][y] === oppositeColor) {
            newMatriz[i][y] = value;
          }
        }

        /* actualizar la columna */
        for (let i = y - 1; i >= 0; i--) {
          if (matriz[x][i] === oppositeColor) {
            newMatriz[x][i] = value;
          }
        }
        for (let i = y - 1; i < 8; i++) {
          if (matriz[x][i] === oppositeColor) {
            newMatriz[x][i] = value;
          }
        }
        return newMatriz;
      });
    } else {
      return false;
    }

    setTurn(!turn);
  };

  const Tile = ({ row, col, value, onClick }) => (
    <div
      onClick={() => onClick(row, col)}
      className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800"
    >
      {value !== 0 && (
        <div
          className={`${
            value === 1 ? "bg-white" : "bg-black"
          } h-16 w-16 rounded-full`}
        />
      )}
    </div>
  );

  return (
    <div className="mt-14">
      {matriz.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-start ml-44">
          {row.map((value, colIndex) => (
            <Tile
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              value={value}
              onClick={checkTile}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
