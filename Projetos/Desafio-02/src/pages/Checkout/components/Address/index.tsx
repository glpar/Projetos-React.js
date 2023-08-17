// import { useContext } from "react";
// import {formatDistanceToNow} from 'date-fns'
import { MapPinLine } from "phosphor-react";
import { FormContainer, AddressContainer, TitleContainer, CEPInput, RuaInput, NumeroComplementoAlign, NumeroInput, ComplementoInput, BairroInput, CidadeInput, UFInput,
    // HistoryList, 
    // Status 
} from "./styles";
// import { CyclesContext } from "../../contexts/CyclesContext";
// import { ptBR } from "date-fns/locale";

export function Address(){
    // const {cycles} =useContext(CyclesContext)
    // const {activeCycle} = useContext(CyclesContext)
    // const {register} = useFormContext()

    return (
        <AddressContainer>
            <h1>Complete seu pedido</h1>
            <FormContainer >
                <TitleContainer>
                    <div className="titleAndSubtitleContainer">
                        <div className="alignTitle">
                            <MapPinLine className="MapPin"size={22} />
                            <strong> Endereço de Entrega</strong>
                        </div>
                        <div className="subtitleText"> Informe o endereço onde deseja receber seu pedido</div>
                    </div>
                </TitleContainer>
                <CEPInput 
                    id="cep" 
                    // list="task-suggestion" 
                    placeholder="CEP"
                    // disabled={!!activeCycle}
                    // {...register('task')}
                />
{/* 
                    <datalist id="task-suggestion">
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                        <option value="Projeto 3"></option>
                        <option value="Projeto 4"></option>
                    </datalist> */}
                    
                <RuaInput
                    id="rua"
                    placeholder="Rua"  
                    // type="number" 
                    // id="minutesAmount" 
                    // placeholder="00" 
                    // step={1}
                    // min={1} 
                    // max={60}
                    // disabled={!!activeCycle}
                    // {...register('minutesAmount', {valueAsNumber: true})}
                />

                <NumeroComplementoAlign>
                    <NumeroInput
                        type="number"
                        id="numberAddress"
                        placeholder="Número" 
                    />
                    <ComplementoInput
                        id="complemento"
                        placeholder="Complemento" 
                    />
                </NumeroComplementoAlign>
                
                <NumeroComplementoAlign>
                    <BairroInput
                        id="bairro"
                        placeholder="Bairro"  
                    />
                    <CidadeInput
                        id="cidade"
                        placeholder="Cidade" 
                    />
                    <UFInput
                        id="uf"
                        placeholder="UF" 
                    />
                </NumeroComplementoAlign>
            </FormContainer>
        </AddressContainer>
        )
}
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
