import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    .coffeeList{
        margin: 3rem 5rem;
        font-family: 'Baloo 2', cursive;
        font-size: 2rem;
        font-weight: bold;
        /* width: 40%; */
        color: ${(props) => props.theme['gray-900']};
    }

`

export const HistoryList = styled.section`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    /* justify-content: flex-start; */
    margin: 0 3rem;
    margin-left: 5rem;
`
/* 
    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;
    }

    th{
        background-color: transparent;
        padding: 1rem;
        text-align: left;
        color: ${(props) => props.theme["brown-100"]};
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child{
            border-top-left-radius: 8px;
            padding-left: 1.5rem;
        }

        &:last-child{
            border-top-right-radius: 8px;
            padding-right: 1.5rem;
        }
    }

    td{
        background-color: ${(props) => props.theme["gray-700"]};
        border-top: 4px solid ${(props) => props.theme["gray-800"]};
        padding: 1rem;
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child{
            width: 50%;
            padding-left: 1.5rem;
        }

        &:last-child{
            padding-right: 1.5rem;
        }
    }
`

const STATUS_COLOR = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500'
} as const
  


interface StatusProps {
    statusColor: keyof typeof STATUS_COLOR;
}

export const Status = styled.span < StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 9999px;
        background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
    }

` */