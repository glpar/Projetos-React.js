import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 100rem;
    position: relative;
    /* height: calc(100vh - 10rem); */
    height: auto;
    margin: auto;
    padding-bottom: 2rem;


    background: ${(props) => props.theme["white"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`;