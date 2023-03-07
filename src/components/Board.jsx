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
    if (white === 32 || black === 32) {
      // aquí se puede detener el juego de alguna manera
      alert(`El Ganador es: ${white === 32 ? 'Blanco' : 'Negro'}`);
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


  const resetGame = () => {
    setMatriz([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 2, 0, 0, 0],
      [0, 0, 0, 2, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    setTurn(true);
    setWhiteCount(2);
    setBlackCount(2);
  };


  const Tile = ({ row, col, value, onClick }) => (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClick(row, col);
        }
      }}
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
      <div className=" flex justify-center">Es el truno de {turn === false ? 'Blanco' : 'Negro'}</div>
      <button onClick={resetGame} className="mt-10 bg-green-600 text-white rounded-lg py-2 px-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
        Reiniciar
      </button>
    </div>
  );
}
export default Board;
