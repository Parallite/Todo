import styled from "styled-components";

export const StyledTasksForm = styled.form`
    margin: 10px 0;
    display: flex;
    align-items: center;
    gap: 15px;
    flex-direction: column;

    & p {
        color: red;
    }

    & div {
        width: 100%;
    }

    & input {
        width: 100%;
        padding: 5px 10px;
        color: #29282d;
    }
`