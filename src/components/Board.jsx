import React, { useState } from 'react'

const Board = () => {
    /* false = turno blanco
    true = turno negro */
    const [turn, setTurn] = useState(false)
    /* 1=blanco
    2=negro
    0=vacio */
    const [matriz, setMatriz] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]])

    console.log(matriz[0])

    const checkTile = (x, y) => {
        if (matriz[x][y] !== 0) {
            return false
        }
        let aux = [...matriz]
        if (turn) {
            aux[x][y] = 2
        } else {
            aux[x][y] = 1
        }
        setMatriz(aux)
        setTurn(!turn)
    }

    return (
        <div className='justify-center'>
            <div className="flex justify-center">
                <div onClick={() => checkTile(0, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(1, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][0] !== 0 && <div className={`${matriz[1][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][1] !== 0 && <div className={`${matriz[1][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][2] !== 0 && <div className={`${matriz[1][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][3] !== 0 && <div className={`${matriz[1][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][4] !== 0 && <div className={`${matriz[1][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][5] !== 0 && <div className={`${matriz[1][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][6] !== 0 && <div className={`${matriz[1][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][7] !== 0 && <div className={`${matriz[1][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(0, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(0, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(0, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(0, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(0, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(0, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            


        </div>
    )
}

export default Board;