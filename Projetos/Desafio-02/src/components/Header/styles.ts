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

    .logo {
        background-color: transparent;
        &:hover {
            background-color: transparent;
            border-color: transparent;
        }
        &:focus {
            box-shadow: 0 0 0 2px transparent
        }
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
        color: transparent;

        border-radius: 8px;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover {
            background-color: ${(props) => props.theme["yellow-300"]};

            .shopIcon{
                color: ${(props) => props.theme["white"]};
            }
            .totalCounter{
                background-color: ${(props) => props.theme["yellow-100"]};
                color: ${(props) => props.theme["yellow-500"]};
            }
        }

        &.active {
            color: transparent
        }
    }
    .shopIcon{
        color: ${(props) => props.theme["yellow-300"]};
    }

    .totalCounter{
        display: flex;
        width: 20px;
        height: 20px;
        /* margin: 1rem; */
        border-radius:50%;
        background-color: ${(props) => props.theme["yellow-500"]};
        align-items: center;
        justify-content: center;
        font-size: 60%;
        font-weight: bold;
        text-decoration: none;
        color: white;
        top: 28px;
        right: 62px;
        margin-bottom: auto;
        position: absolute;
    }
`;