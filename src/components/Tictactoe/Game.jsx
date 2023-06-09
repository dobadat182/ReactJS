import React, { useReducer, useState } from 'react';
import Board from './Board';
import { CalculateWinner } from './helpers';
import Modal from './Modal';

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = CalculateWinner(board);

    const handleClick = (index) => {
        const boardDuplicate = [...board];
        // Has winner and index is choose
        if (winner || boardDuplicate[index]) return;

        boardDuplicate[index] = xIsNext ? 'X' : 'O';
        setBoard(boardDuplicate);
        setXIsNext((xIsNext) => !xIsNext);
    };

    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    };

    return (
        <>
            {winner && <Modal />}

            <Board cells={board} onClick={handleClick}></Board>

            <button
                onClick={handleResetGame}
                type="button"
                className="block m-auto mb-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-1000"
            >
                Reset Game
            </button>
        </>
    );
};

export default Game;
