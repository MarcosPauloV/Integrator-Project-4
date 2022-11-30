import React, { useState, useEffect } from 'react'

import {
  EventsFilters,
  FilterTitle,
  EventsSelect,
  EventsOpt,
  PriceContainer,
  EventsPrice,
  MaxVal,
  MinVal,
  PriceVal,
  DateContainer,
  DateIn,
  FilterSubmit
} from './styled'

import  {Container}  from '../../Components/Container/styled';
export const Filter = () => {

  const[priceVal, setPriceVal] = useState(null);


  return(
    <>
          <EventsFilters>
            <FilterTitle>Aplique seus filtros</FilterTitle>
            <EventsSelect>
              <EventsOpt defaultValue >Estado</EventsOpt>
              <EventsOpt>AC</EventsOpt>
              <EventsOpt>AL</EventsOpt>
              <EventsOpt>AP</EventsOpt>
              <EventsOpt>AM</EventsOpt>
              <EventsOpt>BA</EventsOpt>
              <EventsOpt>CE</EventsOpt>
              <EventsOpt>DF</EventsOpt>
              <EventsOpt>ES</EventsOpt>
              <EventsOpt>GO</EventsOpt>
              <EventsOpt>MG</EventsOpt>
              <EventsOpt>MA</EventsOpt>
              <EventsOpt>MT</EventsOpt>
              <EventsOpt>MS</EventsOpt>
              <EventsOpt>MG</EventsOpt>
              <EventsOpt>PA</EventsOpt>
              <EventsOpt>PB</EventsOpt>
              <EventsOpt>PE</EventsOpt>
              <EventsOpt>PR</EventsOpt>
              <EventsOpt>PI</EventsOpt>
              <EventsOpt>RJ</EventsOpt>
              <EventsOpt>RN</EventsOpt>
              <EventsOpt>RS</EventsOpt>
              <EventsOpt>RO</EventsOpt>
              <EventsOpt>RR</EventsOpt>
              <EventsOpt>SC</EventsOpt>
              <EventsOpt>SP</EventsOpt>
              <EventsOpt>SE</EventsOpt>
              <EventsOpt>TO</EventsOpt>
            </EventsSelect>
            <FilterTitle>Escolha a categoria que deseja</FilterTitle>
            <EventsSelect>
              <EventsOpt>Humor</EventsOpt>
              <EventsOpt>Teatro</EventsOpt>
              <EventsOpt>Festa</EventsOpt>
            </EventsSelect>
            <PriceContainer>
              <FilterTitle>Informe o limite de preço </FilterTitle>
              <EventsPrice 
                type='range' 
                min="0" 
                max="1000" 
                step="20"
                onChange={(e) => setPriceVal(e.target.value)}
                >
              </EventsPrice>
              <MinVal>0</MinVal><MaxVal>1000</MaxVal>
              <PriceVal>Até R${priceVal}</PriceVal>
            </PriceContainer>

            <DateContainer>
              <FilterTitle>Selecione a data do evento</FilterTitle>
              <DateIn type='date'/>
            </DateContainer>

            <FilterSubmit type='submit'></FilterSubmit>
          </EventsFilters>       
    </>
  )
}
