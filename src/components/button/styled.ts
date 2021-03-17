import styled from "styled-components";
import { ComponentSize, heights, sidePaddings } from "../../config/sizes";
import { ButtonType } from "./button";

type StateColors = {
    regular: string;
    hover: string;
}

const typeColors: {[key in ButtonType]: StateColors} = {
    default: {
        regular: '',
        hover: '#2e27cc',
    },
    primary: {
        regular: '#0070F3',
        hover: '#0070F3',
    },
};

interface StyledButtonProps {
    innerType: ButtonType;
    size: ComponentSize;
    withText: boolean;
}

/* Real tag is assigned dynamically */
export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border: none;
    cursor: pointer;
    background-color: ${ (pr) => typeColors[pr.innerType].regular };
    padding: 0 ${ pr => sidePaddings[pr.size]}px;
    height: ${ pr => heights[pr.size]}px;
    color: '#FFFFFF';
    border-radius: 0;
    outline: none;
    &:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ${ (pr) => typeColors[pr.innerType].regular };
    }
    &:hover {
        background-color: ${ (pr) => typeColors[pr.innerType].hover };
    }
`;