import styled from "styled-components";

export const BackgroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url('src/assets/Background.svg');;
    /* background-color: transparent; */
    opacity: 0.95;
    left: 5px;
    height: 35%;
    /* position: absolute; */
    /* border-radius: 25%; */
    /* .gradiente2 {
        background-image: linear-gradient(#8047F8, white);
        opacity: 0.08;
        position: relative;
        top: -122px;
    } */

`

export const CountdownContainer = styled.div`
    display: flex;
    margin-top: 5rem;
    margin: 5rem 3rem;
    justify-content: center;
    gap: 4rem;
    background-color: transparent;
    /* border-radius: 25%; */
    width: auto;
    /* background: rgba(0,0,0,0.0) */
    /* font-size: 2rem;

    -webkit-font-smoothing: antialiased;

    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
        font-family: 'Baloo 2', cursive;
        width: 35%;
        color: ${(props) => props.theme['gray-900']};
    }
    p {
        font-size: 50%;
        width: 35%;
        color: ${(props) => props.theme["brown-100"]};
    } */
    

    /* span{
        background: ${(props) => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 8px;
    } */
`

export const TitleContainer = styled.div`
    font-size: 2.8rem;
    -webkit-font-smoothing: antialiased;

    display: flex;
    flex-direction: column;
    width: 50%;

    /* gap: 1rem; */
    .titleAndSubtitleContainer{
        
        strong {
        font-family: 'Baloo 2', cursive;
        font-weight: bold;
        line-height: 2rem;
        /* width: 40%; */
        color: ${(props) => props.theme['gray-900']};
        }
        .subtitleText {
            margin-top: 1rem;
            font-size: 44%;
            width: 90%;
            color: ${(props) => props.theme["brown-100"]};
        }
    }
    

    /* span{
        background: ${(props) => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 8px;
    } */
`

export const DescritionContainer = styled.div`
margin-top: 3rem;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
`

export const AuxiliaryContainer = styled.div`
    display: flex;
    width: 60%;
    gap: 0.5rem;
    flex-direction: column;
    /* align-items: flex-start; */
    /* vertical-align:middle */
`

export const BaseDescritionItem = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 0.4rem;

    .textDescritionItem{
        font-size: 38%;
        width: 70%;
        color: ${(props) => props.theme["brown-200"]};
    }

`
export const DescritionItem1 = styled(BaseDescritionItem)`
        .circleIconShop{
        display: flex;
        background-color: ${(props) => props.theme["yellow-500"]};
        border-radius: 50%;
        width: 25px;
        height: 25px;
        align-items: center;
        justify-content: center;
    }

`

export const DescritionItem2 = styled(BaseDescritionItem)`
        .circleIconTimer{
        display: flex;
        background-color: ${(props) => props.theme["yellow-300"]};
        border-radius: 50%;
        width: 25px;
        height: 25px;
        align-items: center;
        justify-content: center;
    }
    /* .textDescritionItem2{
        font-size: 38%;
        width: 35%;
        color: ${(props) => props.theme["brown-200"]};
    } */
`
export const DescritionItem3 = styled(BaseDescritionItem)`
        .circleIconPackage{
        display: flex;
        background-color: ${(props) => props.theme["brown-200"]};
        border-radius: 50%;
        width: 25px;
        height: 25px;
        align-items: center;
        justify-content: center;
    }

    .textDescritionItem{
        width: 90%;
        color: ${(props) => props.theme["brown-200"]};
    }
    /* .textDescritionItem2{
        font-size: 38%;
        width: 35%;
        color: ${(props) => props.theme["brown-200"]};
    } */
`
export const DescritionItem4 = styled(BaseDescritionItem)`
        .circleIconTimer{
        display: flex;
        background-color: ${(props) => props.theme["purple-300"]};
        border-radius: 50%;
        width: 25px;
        height: 25px;
        align-items: center;
        justify-content: center;
    }
    /* .textDescritionItem2{
        font-size: 38%;
        width: 35%;
        color: ${(props) => props.theme["brown-200"]};
    } */
`

export const ImageContainer = styled.div`
    width: 40%;
    display: flex;
    box-sizing: content-box;
    justify-content: flex-end;
    
    img {
        width: 100%;
        margin-left: auto;
        justify-content: flex-end;
}
`