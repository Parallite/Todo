import styled from "styled-components";

export const StyledCompletedBox = styled.div`
    width: 100%;
    margin-top: 30px;

    & h2 {
        font-size: 16px;
        text-align: center;
        margin-bottom: 10px;
    }

    & li > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        color: #29282d;

        & svg {
            width: 25px;
            height: 25px;
            color: green;
        }
    }
`