import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../../Components/Container/styled'
import axios from 'axios'
import api from '../../api/api'
import {
    TicketContainer,
    TickContent,
    TickIMG,
    IMG,
    TickInfo,
    BuyBtn,
    TickDetContent,
    TickDetails,
    Detail,
    Det,
    TickSection,
    Ticket
 } from "./styled"


export const EventDetails = () => {
    
    const{id} = useParams();
    const[ticket, setTicket] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData(){
          const response = await api.get(`api/event/${id}`);
          setTicket([response.data.result]);
          setLoading(false);
        }
        console.log(ticket)
        loadData();
      }, [])

  return (
    <Container>
        
            <TicketContainer>
                {ticket.map((item) => {
                    return(
                        <TickContent key={item._id}>
                            <TickIMG>
                                <IMG src='https://images.unsplash.com/photo-1511016469271-ba8f47d3a2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></IMG>
                            </TickIMG>
                            <TickInfo>
                                <BuyBtn>Comprar</BuyBtn>
                                <TickDetContent>
                                    <TickDetails>
                                        <Detail>
                                            Descrição do evento: <Det>{item.evOverview}</Det>
                                        </Detail>
                                        <Detail>
                                            Local onde acontecerá: <Det>{item.evLocal}</Det>
                                        </Detail>
                                        <Detail>
                                            Estado: <Det>{item.evState}</Det>
                                        </Detail>
                                    </TickDetails>
                                    <TickDetails>
                                        <Detail>
                                            Idade mínima: <Det>{item.evYear}</Det>
                                        </Detail>
                                        <Detail>
                                            Tipo do evento: <Det>{item.evType}</Det>
                                        </Detail>
                                        <Detail>
                                            Data do evento: <Det>{item.evDate}</Det>
                                        </Detail>
                                    </TickDetails>
                                </TickDetContent>
                                <TickSection>
                                    <Ticket>
                                        
                                    </Ticket>
                                </TickSection>
                            </TickInfo>
                        </TickContent>
                )
            })}
            </TicketContainer>
       
    </Container>
  )
}

