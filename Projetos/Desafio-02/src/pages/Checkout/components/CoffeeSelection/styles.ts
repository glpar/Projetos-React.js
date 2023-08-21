import styled from "styled-components";

export const CoffeeSelectionContainer = styled.main`
    flex: 1;
    /* padding: 2rem; */

    display: flex;
    flex-direction: column;

    h1{
        font-size: 1.2rem;
        color: ${(props) => props.theme["checkout-title"]};
        margin: 1rem 0rem;
        font-family: 'Baloo 2', cursive;
        font-weight: bold;
        /* width: 40%; */
    }

`
export const FormContainer = styled.div`
    /* gap: 20rem; */
    /* /* height: 100%; */
    /* margin-top: 1rem; */
    width: 90%;
    padding: 1.5rem 1.5rem;;
    background-color: ${(props) => props.theme['card']};
    border-radius: 12px 48px 12px 48px ;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    .totalPrice {
        display: flex;
        gap: 60%;
        align-items: center;
        margin-top: 1rem;

        .subtitleText {
            display: flex;
            font-size: 1rem;
            color: ${(props) => props.theme["brown-200"]};
            margin: 0.3rem auto;
            /* font-family: 'Baloo 2', cursive; */
            font-weight:lighter;
        }

        .subtitlePrice {
            display: flex;
            font-size: 1rem;
            color: ${(props) => props.theme["brown-200"]};
            margin: 0.3rem auto;
            /* font-family: 'Baloo 2', cursive; */
            font-weight:lighter;
        }
    }

    .totalFrete {
        display: flex;
        gap: 72%;
        align-items: center;

        .subtitleText {
            display: flex;
            font-size: 1rem;
            color: ${(props) => props.theme["brown-200"]};
            margin: 0.3rem auto;
            /* font-family: 'Baloo 2', cursive; */
            font-weight:lighter;
        }

        .subtitlePrice {
            display: flex;
            font-size: 1rem;
            color: ${(props) => props.theme["brown-200"]};
            margin: 0.3rem auto;
            /* font-family: 'Baloo 2', cursive; */
            font-weight:lighter;
        }
    }

    .totalFullPrice {
        display: flex;
        align-items: center;
        gap: 73%;

        .subtitleText {
            display: flex;
            font-size: 1rem;
            color: ${(props) => props.theme["checkout-title"]};
            margin: 0.3rem auto;
            /* font-family: 'Baloo 2', cursive; */
            font-weight:bold;
            font-size: 1.3rem;
        }

        .subtitlePrice {
            display: flex;
            font-size: 1rem;
            color: ${(props) => props.theme["brown-200"]};
            margin: 0.3rem auto;
            /* font-family: 'Baloo 2', cursive; */
            font-weight:bold;
            font-size: 1.3rem;
        }
    }

`

export const CoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 50%;
    color: ${(props) => props.theme["gray-900"]};
    align-items: center;


    .List {
        display: flex;
        padding-bottom: 2rem;
        border-bottom: 0.15rem solid ${(props) => props.theme["form-border"]};
        padding-top: 2rem;
        
        .imageContainer{
            display: flex;
            flex-direction: column;
            width: 20%;
        }
    }
`
export const CoffeeNameAndQuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
   
    .subtitleTextCoffee {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .price {
        display: flex;
        font-size: 1.2rem;
        color: ${(props) => props.theme["checkout-title"]};
        margin: 0rem 1rem;
        margin-left: 5rem;
        font-family: 'Baloo 2', cursive;
        font-weight: bold;
        /* width: 40%; */
    }
    .coffeeTitle {
        display: flex;
        font-size: 1.2rem;
        color: ${(props) => props.theme["checkout-title"]};
        margin-left: 1rem;
        align-items: center;
        width: 100%;
        /* font-family: 'Baloo 2', cursive; */
        /* font-weight: bold; */
        /* width: 40%; */
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-left: 1rem;
    .coffee {
    border-radius: 8px;
    display: flex;
    gap: 0.2rem;
    align-items: center;
    background-color: ${(props) => props.theme['card-quantity']};
    color: ${(props) => props.theme["gray-900"]};
    font-weight: bold;
    width: 4rem;

        button{
            display: flex;
            align-items: center;
            padding: 0.6rem 0.3rem;
            background-color: transparent;
            border-color: transparent;
            cursor: pointer;
            color: ${(props) => props.theme["purple-300"]};
            font-size: 0.8rem;
        }
        .quantity {
                font-size: 0.8rem;
            }
    }

    .removeButton {
        border-radius: 8px;
        display: flex;
        gap: 0.2rem;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.theme['card-quantity']};
        border-color: transparent;
        font-size: 1rem;
        color: ${(props) => props.theme["checkout-title"]};
        width: 6rem;
        padding: 0.6rem 0.3rem;
        
        .trashIcon{
            color: ${(props) => props.theme["purple-300"]};
        }
    }

`
// export const HistoryList = styled.div`
//     flex: 1;
//     overflow: auto;
//     margin-top: 2rem;

//     table{
//         width: 100%;
//         border-collapse: collapse;
//         min-width: 600px;
//     }

//     th{
//         background-color: ${(props) => props.theme["gray-600"]};
//         padding: 1rem;
//         text-align: left;
//         color: ${(props) => props.theme["gray-100"]};
//         font-size: 0.875rem;
//         line-height: 1.6;

//         &:first-child{
//             border-top-left-radius: 8px;
//             padding-left: 1.5rem;
//         }

//         &:last-child{
//             border-top-right-radius: 8px;
//             padding-right: 1.5rem;
//         }
//     }

//     td{
//         background-color: ${(props) => props.theme["gray-700"]};
//         border-top: 4px solid ${(props) => props.theme["gray-800"]};
//         padding: 1rem;
//         font-size: 0.875rem;
//         line-height: 1.6;

//         &:first-child{
//             width: 50%;
//             padding-left: 1.5rem;
//         }

//         &:last-child{
//             padding-right: 1.5rem;
//         }
//     }
// `

// const STATUS_COLOR = {
//     yellow: 'yellow-500',
//     green: 'green-500',
//     red: 'red-500'
// } as const
  


// interface StatusProps {
//     statusColor: keyof typeof STATUS_COLOR;
// }

// export const Status = styled.span < StatusProps>`
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;

//     &::before {
//         content: '';
//         width: 0.5rem;
//         height: 0.5rem;
//         border-radius: 9999px;
//         background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
//     }

// `



// export const Separator = styled.div`

// `

// export const StartCountdownButton = styled.button`


// `