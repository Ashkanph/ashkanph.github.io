import * as React from "react";
import styled from 'styled-components';

const PlusIconEl = 
    styled.span`
        position: relative;
        width: 18px;
        height: 18px;
        border: 1px solid ${props => props.color};
        margin: 0 10px;
        float: right;
        margin-top: 2px;

        &:before,
        &:after{
            content: "";
            position: absolute;
            background-color: ${props => props.color};
            transition: transform 0.25s ease-out;
        }

        /* Vertical line */
        &:before{
            top: 0;
            left: 50%;
            width: 2px;
            height: 100%;
            margin-left: -1px;
        }

        /* horizontal line */
        &:after{
            top: 50%;
            left: 0;
            width: 100%;
            height: 2px;
            margin-top: -1px;
        }

        &.open{
            &:before {
                transform: rotate(90deg);
            }

            &:after{
                transform: rotate(180deg);
            }
        }
    `;

const PlusIcon = props => {
    const { className, open, color } = props;

    return (
        <PlusIconEl className={`${className} ${open ? 'open' : ''}`} color={color} />
    )
}

export default PlusIcon;