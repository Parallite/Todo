import styled from "styled-components";

export const StyledTasksBox = styled.li`
    margin: 12px 0;

    & div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & label {
        padding-left: 20px;
        width: 100%;
        color: #29282d;
        cursor: pointer;
    }
`