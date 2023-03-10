import React, { useState, useEffect } from "react";
import Tile from './Tile'
import ScoreBoard from './ScoreBoard'
import Swal from 'sweetalert2'
import BoardSizeChange from "./BoardSizeChage";


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
  const [whiteCount, setWhiteCount] = useState(32);
  const [blackCount, setBlackCount] = useState(32);

  useEffect(() => {
    const white = 32 - matriz.reduce(
      (acc, x) => acc + x.filter((value) => value === 1).length,
      0
    );
    const black = 32 - matriz.reduce(
      (acc, x) => acc + x.filter((value) => value === 2).length,
      0
    );
    setWhiteCount(white);
    setBlackCount(black);

    // verifica si algún color alcanzó 32
    if (white <= 0 || black <= 0) {
      // aquí se puede detener el juego de alguna manera
      Swal.fire({
        title: `And the winner is ... ${white <= 0 ? 'White' : 'Black'}`,
        width: 600,
        padding: '3em',
        color: '#716add',
      })

    }
  }, [matriz, whiteCount, blackCount]);
  const checkTile = (x, y) => {

    const value = turn ? 2 : 1;
    const oppositeColor = turn ? 1 : 2;
    const newMatriz = [...matriz];
    if (newMatriz[x][y] === 0) {
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
        
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Hey, You cannot do that!',
        })
        return false;
      }
    }
    return false;
  };

  return (
    <div className="flex gap-x- my-7 ml-32">
      <div className="mt-14">
        {matriz.map((row, rowIndex) => (
          <div key={rowIndex} className="flex shadow-lg shadow-slate-700">
            {row.map((value, colIndex) => (
              <Tile
                value={value}
                onClick={() => checkTile(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
        <div>
        </div>
      </div>
      <div className="w-max">
        <ScoreBoard
          setTurn={setTurn}
          setMatriz={setMatriz}
          setBlackCount={setBlackCount}
          setWhiteCount={setWhiteCount}
          whiteCount={whiteCount}
          blackCount={blackCount}
          turn={turn}
        />
        <BoardSizeChange
          setMatriz={setMatriz}
          turn={turn}
          setTurn={setTurn}
        />
      </div>
    </div>
  );
};


export default Board