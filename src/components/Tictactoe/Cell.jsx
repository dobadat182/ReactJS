import React from 'react';
import { styled } from 'styled-components';

const GameCellStyled = styled.div`
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &.is-x {
        color: #2cccff;
    }
    &.is-o {
        color: #ff6651;
    }
`;

const Cell = (props) => {
    const { value, onClick, children, className } = props;

    return (
        <GameCellStyled
            className={`h-64 bg-white hover:bg-slate-100 transition-all duration-100 flex justify-center items-center font-mono text-6xl font-black ${className}`}
            onClick={onClick}
        >
            {value}
        </GameCellStyled>
    );
};

export default Cell;
