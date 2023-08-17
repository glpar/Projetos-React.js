// import { useContext } from "react";
// import {formatDistanceToNow} from 'date-fns'

import { Address } from "./components/Address";
import { CoffeeSelection } from "./components/CoffeeSelection";
import { Payment } from "./components/Payment";
import { AddressAndPayContainer, CheckoutContainer } from "./styles";

// import { CyclesContext } from "../../contexts/CyclesContext";
// import { ptBR } from "date-fns/locale";

export function Checkout(){


    return (
        <CheckoutContainer>
            <AddressAndPayContainer>
                <Address/>
                <Payment/>
            </AddressAndPayContainer>
            <CoffeeSelection/>
        </CheckoutContainer>
    )
}