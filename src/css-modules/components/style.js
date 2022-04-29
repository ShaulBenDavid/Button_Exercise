import styled from "styled-components";
import { css } from "styled-components";

// default button
const Button = styled.button`
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    padding: 14px 30.5px;
    border-radius: 12px;
    background-color: inherit;
    border: 2px solid #ff9f00;
    box-sizing: border-box;

    

/* Primary button */
    ${props => props.variant === 'primary' && css`
        background-color: #ff9f00;
        &:hover {
            background-color: #f08e0e;
            border-color: #f08e0e;
            }
            
        &:active {
        background-color: #fb3;
        border-color: #fb3;
        }

        &:disabled, &[disabled] {
            border: 1px solid #999999;
            background-color: #cccccc;
            color: #666666;
        }


    `}
/* Secondery button */
    ${props => props.variant === 'secondary' && css`
        border: solid 2px #ff9f00;
        padding: 14px 30.5px;
        color: #ff9f00;
        &:hover {
            border-color: #f08e0e;
            color: #f08e0e;
            }
        &:active {
            border-color: #fb3;
            color: #fb3;
        }
            
        &:disabled, &[disabled] {
            border-color: #999999;
            color: #666666;
        } 
        `}
/* Text button */
    ${props => props.variant === 'text' && css`
        color: #ff9f00;
        border: none;
        &:hover {
            color: #f08e0e;
            background-color: rgba(240, 142, 14, 0.2);
        } 
        &:active {
            background-color: rgba(255, 187, 51, 0.2);
            color: #fb3;
        }    
        &:disabled, &[disabled] {
            color: #666666;
            background: none;
        }
    `}

    /* Buttons Sizes */
    /* Large */
    ${props => props.size === "medium" && css`
        padding: 14px 30.5px;
        font-size: 20px;
    `}    

    /* Medium */
    ${props => props.size === "medium" && css`
        padding: 12px 28px;
        font-size: 18px;
    `}

    /* Small */
    ${props => props.size === "small" && css`
        padding: 10px 26px;
        font-size: 16px;
    `}


`;



export default Button;