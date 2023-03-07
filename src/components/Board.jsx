import React, { useState, useEffect } from "react";


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
      (acc, row) => acc + row.filter((val) => val === 1).length,
      0
    );
    const black = matriz.reduce(
      (acc, row) => acc + row.filter((val) => val === 2).length,
      0
    );
    setWhiteCount(white);
    setBlackCount(black);

    // verifica si algún color alcanzó 32
    if (white === 32 || black === 32) {
      // aquí se puede detener el juego de alguna manera
      alert(`El Ganador es: ${white === 32 ? 'Blanco' : 'Negro'}`);
    }
  }, [matriz, whiteCount, blackCount]);



  const checkTile = (x, y) => {
    if (matriz[x][y] !== 0) {
      return false;
    }
  
    const value = turn ? 2 : 1;
    const oppositeColor = turn ? 1 : 2;
  
    // Verifica si hay una ficha del color opuesto en una posición adyacente
    const hasOppositeColorAdjacent = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
      [x - 1, y - 1],
      [x - 1, y + 1],
      [x + 1, y - 1],
      [x + 1, y + 1],
    ].some(([i, j]) => matriz[i]?.[j] === oppositeColor);
  
    if (hasOppositeColorAdjacent) {
      const newMatriz = matriz.map(row => [...row]); // crear una copia de la matriz
      newMatriz[x][y] = value;
  
      // Verifica si la ficha seleccionada está entre dos fichas del color opuesto
      let shouldFlip = false;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (matriz[x + i]?.[y + j] === oppositeColor) {
            let row = x + i;
            let col = y + j;
            while (matriz[row]?.[col] === oppositeColor) {
              row += i;
              col += j;
            }
            if (matriz[row]?.[col] === value) {
              for (let k = i, l = j; matriz[x + k]?.[y + l] === oppositeColor; k += i, l += j) {
                newMatriz[x + k][y + l] = value;
              }
              shouldFlip = true;
            }
          }
        }
      }
  
      if (shouldFlip) {
        setMatriz(newMatriz);
        setTurn(!turn);
        return true;
      }
    }
  
    return false;
  };
  
  

  const Tile = ({ row, col, value, onClick }) => (
    <div
      onClick={() => onClick(row, col)}
      className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800"
    >
      {value !== 0 && (
        <div
          className={`${value === 1 ? "bg-white" : "bg-black"
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
      <div className="mt-10 flex justify-center">Blanco tiene: {whiteCount} fichas en el tablero</div>
      <div className=" flex justify-center">Negro tiene: {blackCount} fichas en el tablero</div>
    </div>
  );
};

export default Board;
