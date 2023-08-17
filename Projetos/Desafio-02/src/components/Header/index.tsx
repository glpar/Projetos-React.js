import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart} from "phosphor-react";

import logo from "../../assets/logo-ignite.svg";
import { NavLink } from "react-router-dom";

export function Header(){
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <nav>

                <button className="localization">
                    <MapPin size={15} color="#4B2995" weight="fill"/>
                    Porto Alegre, RS
                </button>
                {/* <NavLink to="/" title="Timer">
                </NavLink> */}
                <NavLink to="history" title="Histórico">
                    <ShoppingCart className="shopIcon" size={24}  weight="fill" />
                    {/* color="#DBAC2C" */}
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}