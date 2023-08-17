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
    BackgroundContainer

} from "./styles";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import imagem from "../../../../assets/Imagem.svg"

// import { differenceInSeconds } from "date-fns";
// import { CyclesContext } from "../../../../contexts/CyclesContext";

export function Countdown() {

    return (
        <BackgroundContainer>
            <CountdownContainer>
                <TitleContainer>
                    <div className="titleAndSubtitleContainer">
                        <strong> Encontre o café perfeito para qualquer hora do dia</strong>
                        <div className="subtitleText"> Com o Cofee Delivery você recebe seu café onde estiver, a qualquer hora</div>
                    </div>
                    <DescritionContainer>
                    <AuxiliaryContainer>
                        <DescritionItem1>
                            <div className="circleIconShop">
                                <ShoppingCart size={14} color="#fefbfc" weight="fill" />
                            </div>
                            <div className="textDescritionItem">Compra simples e segura</div>                        
                        </DescritionItem1>

                        <DescritionItem2>
                            <div className="circleIconTimer">
                                <Timer size={14} color="#fefbfc" weight="fill" />
                            </div>
                            <div className="textDescritionItem">Entrega rápida e rastreada</div>                        
                        </DescritionItem2>
                    </AuxiliaryContainer>

                    <AuxiliaryContainer>
                        <DescritionItem3>
                            <div className="circleIconPackage">
                            <Package size={14} color="#fefbfc" weight="fill" />
                            </div>
                            <div className="textDescritionItem">Embalagem mantém o café intacto</div>                        
                        </DescritionItem3>

                        <DescritionItem4>
                            <div className="circleIconTimer">
                            <Coffee size={14} color="#fefbfc" weight="fill" />
                            </div>
                            <div className="textDescritionItem">Entrega rápida e rastreada</div>                        
                        </DescritionItem4>
                    </AuxiliaryContainer>
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