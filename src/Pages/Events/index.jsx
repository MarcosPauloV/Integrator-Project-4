import React, { useState, useEffect } from 'react'
import axios from 'axios';
import api from '../../api/api';
import {
  EventsTickets,
  SearchInput,
  TicketsSearch,
  SearchIcon,
  Icon,
  TickContent,
  TicketDiv,
  TicketTitle,
  TicketImage,
  TicketInfo,
  LoadingPage,
  Loader
} from './styled'

import { Filter } from '../../Components/Filter';

import  {Container}  from '../../Components/Container/styled';
const Events = () => {

  const[ticket, setTicket] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadApi(){
      const response = await api.get("api/event");
      console.log(response.data);
      setTicket(response.data.result);
      setLoading(false);
    }

    loadApi();
  }, [])

  return(
    <>
      <Container>
        <Filter/>
          {!loading ? 
            <EventsTickets>
              <SearchInput>
                  <TicketsSearch type='text' placeholder='Digite o nome do evento...'></TicketsSearch>
                  <SearchIcon type='submit'><Icon/></SearchIcon>
              </SearchInput>
              <TickContent>
            {ticket.map((item) => {
              return(
                <TicketDiv to={`/EventDetails/${item._id}`} key={item._id}>
                  <TicketInfo>
                    <TicketImage src="https://images.unsplash.com/photo-1511016469271-ba8f47d3a2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></TicketImage>
                    <TicketTitle>{item.evName}</TicketTitle>
                </TicketInfo>
              </TicketDiv>
              )
            })}
            </TickContent>
        </EventsTickets>  
        : <LoadingPage>
            <Loader/>
            Carregando eventos...
          </LoadingPage>}
        
        </Container>
    </>
  )
}


export default Events;
