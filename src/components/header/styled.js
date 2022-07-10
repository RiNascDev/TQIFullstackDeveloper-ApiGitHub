import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width:100%;
    justify-content:space-between;
    padding:4px;

    input {
        border: 1px solid rgb(96, 72, 236);
        border-radius: 8px 0 0 8px;
        width:100%;
        height:44px;
        padding:8px ;
    }

    button {
        background-color:rgb(96, 72, 236);
        padding: 8px 16px ;
        color: #fff;
        border-radius:0 8px 8px 0;
        font-weight:bold;
        border: 1px solid rgb(96, 72, 236);
        font-size:22px;

        &:hover {
            background-color: rgb(38, 14, 176);
        }
    }
`;