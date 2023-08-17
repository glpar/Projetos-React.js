import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 4.4rem;
    margin-top: 2rem;
    /* gap: 3rem; */

    nav {
        display: flex;
        gap: 0.5rem;
    }

    .localization {
        display: flex;
        align-items: center;
        background-color: ${(props) => props.theme["purple-100"]};
        color: ${(props) => props.theme["purple-300"]};
        font-size: 80%;
        gap: 0.2rem;
        padding: 0 1rem;
        border: transparent;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme["purple-300"]};
            color: ${(props) => props.theme["white"]};
        }
    }

    a {
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${(props) => props.theme["yellow-100"]};
        color: ${(props) => props.theme["red-500"]};

        border-radius: 8px;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover {
            background-color: ${(props) => props.theme["yellow-300"]};

            .shopIcon{
                color: ${(props) => props.theme["white"]};
            }
        }

        &.active {
            color: ${(props) => props.theme["green-500"]};
        }
    }
    .shopIcon{
        color: ${(props) => props.theme["yellow-300"]};
    }
`;