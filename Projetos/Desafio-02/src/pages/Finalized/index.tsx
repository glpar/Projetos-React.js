// import { useContext } from "react";
// import {formatDistanceToNow} from 'date-fns'

import { usePaymentContext } from "../../contexts/PaymentContext";
import { Title } from "./components/Title"
import { CheckoutContainer } from "./styles";

// import { CyclesContext } from "../../contexts/CyclesContext";
// import { ptBR } from "date-fns/locale";

export function Finalized(){
    const { selectedPayment } = usePaymentContext();


    return (
        <CheckoutContainer>
                <Title selectedPayment = {selectedPayment} />
        </CheckoutContainer>
    )
}