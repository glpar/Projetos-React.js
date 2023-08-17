import styled from "styled-components";

export const AddressContainer = styled.main`
    flex: 1;
    /* padding: 2rem; */

    display: flex;
    flex-direction: column;

    h1{
        font-size: 1.2rem;
        color: ${(props) => props.theme["checkout-title"]};
        margin: 1rem 4.5rem;
        font-family: 'Baloo 2', cursive;
        font-weight: bold;
        /* width: 40%; */
    }

`
export const FormContainer = styled.div`
    margin: 1rem 4.5rem;
    width: 80%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    /* align-items : center; */
    justify-content : center;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    background-color: ${(props) => props.theme["card"]};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
    padding: 0 4.5rem;
`

export const TitleContainer = styled.div`
    font-size: 2.8rem;
    -webkit-font-smoothing: antialiased;

    display: flex;
    flex-direction: column;
    width: 80%;

    /* gap: 1rem; */
    .titleAndSubtitleContainer{
        .alignTitle {
            align-items: center;
            display: flex;
            margin-top: 3rem;
            
            .MapPin{
                color: ${(props) => props.theme["yellow-500"]};
        }
            strong {
            /* font-family: 'Baloo 2', cursive;
            font-weight: bold;
            line-height: 2rem; */
            /* width: 40%; */
            /* margin-top: 1rem; */
            font-size: 40%;
            width: 90%;
            color: ${(props) => props.theme["checkout-title"]};
            }
        }
        
        .subtitleText {
            margin-top: 0.2rem;
            font-size: 34%;
            width: 90%;
            font-weight: lighter;
            color: ${(props) => props.theme["brown-200"]};
            margin-left: 1.4rem;
        }
    }
`

const BaseInput = styled.input`
    background-color: ${(props) => props.theme["form-input"]};
    height: 2.5rem;
    width: 50%;
    border: 2px solid;
    border-color: ${(props) => props.theme["form-border"]};
    /* border-bottom: 2px solid ${(props) => props.theme['gray-500']}; */
    font-weight:lighter;
    font-size: 1.125rem;
    padding: 0.8rem 0.8rem;
    border-radius: 6px;
    color: ${(props) => props.theme['form-placeholder']};
    

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['purple-300']};
    }

    &::placeholder {
        color: ${(props) => props.theme['gray-500']};
    }
`

export const CEPInput = styled(BaseInput)`
    flex: 1;
    margin-top: 1.8rem;

`

export const RuaInput = styled(BaseInput)` 
    width: 100%;
    margin-top: 0.6rem;
`
export const NumeroInput = styled(BaseInput)` 
    width: 40%;
    margin-top: 0.6rem;
`
export const ComplementoInput = styled(BaseInput)` 
    width: 100%;
    margin-top: 0.6rem;
`
export const BairroInput = styled(BaseInput)` 
    width: 40%;
    margin-top: 0.6rem;
`
export const CidadeInput = styled(BaseInput)` 
    width: 40%;
    margin-top: 0.6rem;
`
export const UFInput = styled(BaseInput)` 
    width: 20%;
    margin-top: 0.6rem;
`

export const NumeroComplementoAlign = styled.div`
    display: flex;
    align-items: center;
    gap: 0 1rem;

    & + & {
        margin-bottom: 3rem;;
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