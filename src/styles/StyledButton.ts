import styled from "styled-components";

export const Button = styled.button<{
    $primary?: boolean;
    $widthSmall?: boolean;
}>`
    background: ${props => props.$primary ? "#b72e4a" : "#72cec1"};
    color: ${props => props.$primary ? "#fef9fd" : "#29282d"};
    width: ${props => props.$widthSmall ? "25px" : "100%"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    padding: 5px 10px;
    border: 1px solid #29282d;
    border-radius: 10px;
    cursor: pointer;
`;