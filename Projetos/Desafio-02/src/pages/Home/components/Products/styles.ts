import styled from "styled-components"

export const ProductCard = styled.div`
display: flex;
flex-direction: column;
/* gap: 20rem; */
/* /* height: 100%; */
width: 22%;
/* padding: 5rem 0rem;; */
background-color: ${(props) => props.theme['card']};
border-radius: 12px 48px 12px 48px ;
align-items: center;
vertical-align: middle;
max-width: 100%;
-moz-transition: all 0.3s;
-webkit-transition: all 0.3s;
transition: all 0.3s;

&:hover {
    -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

img {
    justify-self: baseline;
    width: 45%;
    top: 2rem;
    max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
}
img:hover {
    -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.2);
}

.nameProduct {
    /* margin: 5rem 3rem; */
    font-family: 'Baloo 2', cursive;
    font-size: 1.4rem;
    font-weight: bold;
    /* width: 40%; */
    color: ${(props) => props.theme['gray-900']};
    margin-top: 0.5rem;
}

.descriptionProduct {
    width: 80%;
    font-size: 0.9rem;
    /* width: 100%; */
    color: ${(props) => props.theme["card-description"]};
    text-align: center;
}

`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  .tagProduct {
    background-color:${(props) => props.theme['yellow-100']};
    padding: 0.3rem 0.5rem;
    color: ${(props) => props.theme['yellow-500']};
    font-weight: bold;
    font-size: 0.8rem;
    border-radius: 12px;
}
`
export const BuyContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 1rem;
    
    .priceProduct {
        font-family: 'Baloo 2', cursive;
    font-size: 1.4rem;
    font-weight: bold;
    color: #272221;
    margin-right: 0.5rem;
    }
        a {
            padding: 0.3rem 0.45rem;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: ${(props) => props.theme["purple-500"]};
            color: ${(props) => props.theme["red-500"]};

            border-radius: 8px;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover {
                background-color: ${(props) => props.theme["purple-300"]};

            }

            &.active {
                color: ${(props) => props.theme["green-500"]};
            }
        }
        .shopIcon{
            color: ${(props) => props.theme["white"]};
        }
`

export const QuantityContainer = styled.div`
    border-radius: 8px;
    display: flex;
    gap: 0.2rem;
    align-items: center;
    background-color: ${(props) => props.theme['card-quantity']};
    color: ${(props) => props.theme["gray-900"]};
    font-weight: bold;

    button{
        display: flex;
        align-items: center;
        padding: 0.6rem 0.3rem;
        background-color: transparent;
        border-color: transparent;
        cursor: pointer;
        color: ${(props) => props.theme["purple-500"]};
        font-size: 0.8rem;
        
    }
    
`