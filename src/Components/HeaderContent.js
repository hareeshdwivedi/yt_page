import React from "react";
import styled from "styled-components";
import Secondarybutton from "./SecondaryButton";

import { Fade } from "react-reveal";

function HeaderContent() {
  return (
    <HeaderContentStyled>
      <Fade left cascade>
        <div className="left-content">
          <div className="left-text-container">
            <h1>Abstract Gradient Landingpage Template</h1>
            <p className="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              molestiae minus dicta ipsum atque est qui vel illo magni
              voluptates esse, e x commodi corporis quos odio libero temporibus,
              eveniet nisi.
            </p>
            <Secondarybutton name={"Join Now"} />
          </div>
        </div>
      </Fade>
    </HeaderContentStyled>
  );
}

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    .white {
      color: white;
    }
    h1 {
      font-size: 4rem;
      font-weight: 600;
      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }

    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }


  }

  //Header Animations
  .message1 {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
    @keyframes move2 {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
  }
`;

export default HeaderContent;
