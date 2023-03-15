import React, { useState, useEffect } from "react";
import ScoreBoard from './ScoreBoard'
import Swal from 'sweetalert2'
import { hasPossibleMoves } from "./CheckPossibleMoves";
import TileChecker from "./TileChecker";

/* false = turno blanco
   true = turno negro 
*/


const empty = 0;
const black = 2;
const white = 1;

const baseMatriz = () => [
  [empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, white, black, empty, empty, empty],
  [empty, empty, empty, black, white, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty],
];

const baseMatriz10x10 = () => [
  [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, white, black, empty, empty, empty, empty],
  [empty, empty, empty, empty, black, white, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
];

const Board = () => {
  const [turn, setTurn] = useState(true);
  const [matriz, setMatriz] = useState(baseMatriz);
  const [boardSize, setBoardSize] = useState(8);
  const [whiteCount, setWhiteCount] = useState(32);
  const [blackCount, setBlackCount] = useState(32);
  const [endGame, setEndGame] = useState(false);
  const [allowDiagonal, setAllowDiagonal] = useState(false);

  const handleBoardSize = () => {
    if (boardSize === 8) {
      setBoardSize(10);
      setMatriz(baseMatriz10x10());
    } else {
      setMatriz(baseMatriz());
      setBoardSize(8);
    }

    if (turn === false) {
      setTurn(true);
      setEndGame(false);
    }
  };
  
  useEffect(() => {
    const whiteTokens = (boardSize === 8 ? 32 : 50) - matriz.reduce(
      (acc, x) => acc + x.filter((value) => value === 1).length,
      0
    );
    const blackTokens = (boardSize === 8 ? 32 : 50) - matriz.reduce(
      (acc, x) => acc + x.filter((value) => value === 2).length,
      0
    );
    setWhiteCount(whiteTokens);
    setBlackCount(blackTokens);

    // verifica si algún color alcanzó 32
    if (whiteTokens <= 0 || blackTokens <= 0) {
      setEndGame(true);
      // aquí se puede detener el juego de alguna manera
      Swal.fire({
        title: `Game Over!!! The winner is ... ${whiteTokens <= 0 ? 'White' : 'Black'}`,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
    `
      });
    } else if (!hasPossibleMoves(matriz, turn, allowDiagonal, white, black)) {
      setEndGame(true)
      Swal.fire({
        title: `Uh-oh, no more moves for you ...The winner is ${whiteCount < blackCount ? 'White' : 'Black'}`,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
    `
      });
    }
  }, [matriz, whiteCount, blackCount, turn, boardSize, allowDiagonal]);

  return (
    <div className="flex ml-32">
      <div className="mt-8 mb-7">
        {matriz.map((row, rowIndex) => (
          <div key={rowIndex} className="flex shadow-lg shadow-slate-700">
            {row.map((value, colIndex) => (
              <TileChecker
                x={rowIndex}
                y={colIndex}
                endGame={endGame}
                turn={turn}
                matriz={matriz}
                setMatriz={setMatriz}
                setTurn={setTurn}
                key={colIndex}
                allowDiagonal={allowDiagonal}
                setAllowDiagonal={setAllowDiagonal}
                empty={empty}
                white={white}
                black={black}
                boardSize={boardSize}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="w-max">
        <ScoreBoard
          whiteCount={whiteCount}
          blackCount={blackCount}
          turn={turn}
          boardSize={boardSize}
          baseMatriz={baseMatriz}
          matriz={matriz}
          setMatriz={setMatriz}
          setWhiteCount={setWhiteCount}
          setBlackCount={setBlackCount}
          setTurn={setTurn}
          setEndGame={setEndGame}
          baseMatriz10x10={baseMatriz10x10}
          handleBoardSize={handleBoardSize}
          setAllowDiagonal={setAllowDiagonal}
          allowDiagonal={allowDiagonal}
        />
        
      </div>
    </div>
    
  );
}

export default Board