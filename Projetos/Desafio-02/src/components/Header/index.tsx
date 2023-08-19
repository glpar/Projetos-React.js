import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart} from "phosphor-react";

import logo from "../../assets/logo-ignite.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext, useProductsContext } from "../../contexts/CyclesContext";

export function Header(){
    const {productsCart} = useProductsContext()

    const quantity = productsCart.reduce((count, current) => {
        return count + current.quantity;
    }, 0)

    return (
        <HeaderContainer>
            <NavLink className="logo" to="/" title="Checkout">
                <img src={logo} alt="" />
            </NavLink>
            <nav>

                <button className="localization">
                    <MapPin size={15} color="#4B2995" weight="fill"/>
                    Porto Alegre, RS
                </button>
                {/* <NavLink to="/" title="Timer">
                </NavLink> */}
                <NavLink to="checkout" title="Checkout">
                    <ShoppingCart className="shopIcon" size={24}  weight="fill" />
                    <div className="totalCounter">{quantity}</div>
                    
                    {/* color="#DBAC2C" */}
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}