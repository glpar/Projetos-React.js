// import { useContext, useEffect } from "react";
import { CountdownContainer, 
    DescritionContainer, 
    AuxiliaryContainer, 
    // AuxiliaryContainer2, 
    // BaseDescritionItem,
    DescritionItem1,
    DescritionItem2,
    DescritionItem3,
    DescritionItem4,
    TitleContainer,
    ImageContainer,
    BackgroundContainer,
    BorderGradient

} from "./styles";
import { ShoppingCart, Timer, Package, Coffee, MapPin, Money, CurrencyDollar } from "phosphor-react";

import imagem from "../../../../assets/Illustration.svg"
import { useLocation } from "react-router-dom";
import { usePaymentContext } from "../../../../contexts/PaymentContext";
import { useAddressContext } from "../../../../contexts/AddressContext";

// import { differenceInSeconds } from "date-fns";
// import { CyclesContext } from "../../../../contexts/CyclesContext";

export function Title() {
    const { selectedPayment } = usePaymentContext();
    const {rua, cidade, numero, bairro, uf /* ...rest of your state */ } = useAddressContext();

    return (
        <BackgroundContainer>
            <CountdownContainer>
                <TitleContainer>
                    <div className="titleAndSubtitleContainer">
                        <strong> Uhu! Pedido confirmado</strong>
                        <div className="subtitleText"> Agora é só aguardar que logo o café chegará até você</div>
                    </div>
                    <DescritionContainer>
                        <BorderGradient>
                            <AuxiliaryContainer>
                                <DescritionItem4>
                                    <div className="circleIconTimer">
                                    <MapPin size={14} color="#fefbfc" weight="fill" />
                                    </div>
                                        <div className="textDescritionItem">Entrega em {rua}, {numero}
                                        <div className="textSubDescritionItem">{bairro} - {cidade}, {uf}</div>
                                    </div>                        
                                </DescritionItem4>
                                <DescritionItem2>
                                    <div className="circleIconTimer">
                                    <Timer size={14} color="#fefbfc" weight="fill" />
                                    </div>
                                        <div className="textDescritionItem">Previsão de Entrega
                                        <div className="textSubDescritionItem">20min - 30 min</div>
                                    </div>                                        
                                </DescritionItem2>

                                <DescritionItem1>
                                    <div className="circleIconShop">
                                        <CurrencyDollar size={14} color="#fefbfc" weight="fill" />
                                    </div>
                                        <div className="textDescritionItem">Pagamento na entrega
                                        <div className="textSubDescritionItem">{selectedPayment}</div>  
                                    </div>                
                                </DescritionItem1>
                            </AuxiliaryContainer>
                        </BorderGradient>
                    </DescritionContainer>
                </TitleContainer>
                <ImageContainer>
                    <img src={imagem} alt="Imagem de um copo de café com grãos de café ao lado" />
                </ImageContainer>
            </CountdownContainer>
            <div className="gradiente1">.</div>
            {/* <div className="gradiente2"> oi tudo bem?</div> */}
        </BackgroundContainer>
    )
}
    // const {activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed} = useContext(CyclesContext)

    // const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    // useEffect(() => {
    //     let interval: number

    //     if (activeCycle) {
    //         interval = window.setInterval(() => {
    //             const secondsDifference = differenceInSeconds(
    //                 new Date(),
    //                 new Date(activeCycle.startDate),
                    
    //             )

    //             if (secondsDifference >= totalSeconds) {
    //                 markCurrentCycleAsFinished()

    //                 setSecondsPassed(totalSeconds)
                    
    //                 clearInterval(interval)
    //             }
                
    //             else {
    //                 setSecondsPassed(secondsDifference)
    //             }
    //         }, 1000)
    //     }

    //     return () => {
    //         clearInterval(interval)
    //     }

//     }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed]);

//     const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

//     const minutesAmount = Math.floor(currentSeconds / 60)
//     const secondsAmount = currentSeconds % 60

//     const minutes = String(minutesAmount).padStart(2, '0')
//     const seconds = String(secondsAmount).padStart(2, '0')

//     useEffect(() => {
//         if (activeCycle){
//             document.title = `${minutes} : ${seconds}`
//         }
//     }, [minutes, seconds, activeCycle])

//     return(
//         <CountdownContainer>
//         <span>{minutes[0]}</span>
//         <span>{minutes[1]}</span>
//         <Separator>:</Separator>
//         <span>{seconds[0]}</span>
//         <span>{seconds[1]}</span>
//         </CountdownContainer>
//     )