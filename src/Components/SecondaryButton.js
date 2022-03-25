import React from 'react';
import styled from 'styled-components';
import bg from '../img/bg.svg';


function Secondarybutton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={bg} alt="" />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color:#F08D27;
    padding: 0 4rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 378px;
    img{
        width: 297%;
    display: block;
    position: absolute;
    left: -396px;
    top: 527px;
    min-width: 120%;
    transform: scaleY(-1);
    }
`;

export default Secondarybutton;
