// import { useContext } from "react";
// import {formatDistanceToNow} from 'date-fns'
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { FormContainer, PaymentContainer, TitleContainer, PaymentButtons,
    // HistoryList, 
    // Status 
} from "./styles";
// import { CyclesContext } from "../../contexts/CyclesContext";
// import { ptBR } from "date-fns/locale";

export function Payment(){
    // const {cycles} =useContext(CyclesContext)
    // const {activeCycle} = useContext(CyclesContext)
    // const {register} = useFormContext()

    return (
        <PaymentContainer>
            <FormContainer >
                <TitleContainer>
                    <div className="titleAndSubtitleContainer">
                        <div className="alignTitle">
                            <CurrencyDollar className="CurrencyDollar"size={22} />
                            <strong> Pagamento</strong>
                        </div>
                        <div className="subtitleText"> O pagamento é feito na entrega . Escolha a forma que deseja pagar:</div>
                    </div>
                </TitleContainer>
                <PaymentButtons>
                    <button className="payButton">
                        <CreditCard className= "payIcon" size={15}/>
                        CARTÃO DE CRÉDITO
                    </button>

                    <button className="payButton">
                        <Bank className= "payIcon" size={15}/>
                        CARTÃO DE DÉBITO
                    </button>

                    <button className="payButton">
                        <Money className= "payIcon" size={15}/>
                        DINHEIRO
                    </button>
                </PaymentButtons>
            </FormContainer>
        </PaymentContainer>

    )
}
{/* {/*             
                    <datalist id="task-suggestion">
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                        <option value="Projeto 3"></option>
                        <option value="Projeto 4"></option>
                    </datalist> */}
                    
                // <RuaInput
                //     id="rua"
                //     placeholder="Rua"  
                    // type="number" 
                    // id="minutesAmount" 
                    // placeholder="00" 
                    // step={1}
                    // min={1} 
                    // max={60}
                    // disabled={!!activeCycle}
                    // {...register('minutesAmount', {valueAsNumber: true})}
                // />

//                 <NumeroComplementoAlign>
//                     <NumeroInput
//                         type="number"
//                         id="numberAddress"
//                         placeholder="Número" 
//                     />
//                     <ComplementoInput
//                         id="complemento"
//                         placeholder="Complemento" 
//                     />
//                 </NumeroComplementoAlign>
                
//                 <NumeroComplementoAlign>
//                     <BairroInput
//                         id="bairro"
//                         placeholder="Bairro"  
//                     />
//                     <CidadeInput
//                         id="cidade"
//                         placeholder="Cidade" 
//                     />
//                     <UFInput
//                         id="uf"
//                         placeholder="UF" 
//                     />
//                 </NumeroComplementoAlign>
 
//         ) */}
// }
            {/* <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map((cycle) => {
                            return(
                                <tr key={cycle.id}>
                                    <td>{cycle.image}</td>
                                    <td>{cycle.description} minutos</td>
                                    <td>{formatDistanceToNow(new Date(cycle.startDate), {addSuffix:true, locale: ptBR})}</td>
                                    <td>
                                        {cycle.finishedDate && (
                                            <Status statusColor="green">Concluído</Status>
                                        )}

                                        {cycle.interruptedDate && (
                                            <Status statusColor="red">Interrompido</Status>
                                        )}

                                        {(!cycle.finishedDate && !cycle.interruptedDate) && (
                                            <Status statusColor="yellow">Em andamento</Status>
                                        )}

                                    </td>
                                </tr>    
                            )
                        })}
                    </tbody>
                </table>
            </HistoryList> */}
