import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const GameBoard = styled.div`
    margin: 10% 10% 5%;
    gap: 30px;
`;

const Board = (props) => {
    const { value, onClick } = props;
    return (
        <GameBoard className="grid grid-cols-3 game-board place-content-center">
            {props.cells.map((item, index) => (
                <Cell
                    className={item === 'X' ? 'is-x' : item === 'O' ? 'is-o' : ''}
                    key={index}
                    value={item}
                    onClick={() => onClick(index)}
                >
                    {value}
                </Cell>
            ))}
        </GameBoard>
    );
};

export default Board;
