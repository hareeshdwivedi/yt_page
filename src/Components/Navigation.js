import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';
import { Fade } from 'react-reveal';

function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="" style={{borderTop:' 2.5px solid  #F08D27 ', width:'12px',  display:'block'}}>Home</a>
                </li>
                <li>
                    <a href="">Company</a>
                </li>
                <li>
                    <a href="">Team</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
            </ul>
            <PrimaryButton name={'Sign Up'} />
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
export default Navigation
