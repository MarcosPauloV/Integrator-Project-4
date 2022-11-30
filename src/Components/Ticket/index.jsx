import React from 'react'
import {
    TicketDiv,
    TicketTitle,
    TicketImage,
    TicketInfo,
} from './styled'

export const Ticket = () => {
  return (
    <>
        <TicketDiv>
            <TicketImage></TicketImage>
            <TicketInfo>
                <TicketTitle>Nome do evento</TicketTitle>
            </TicketInfo>
        </TicketDiv>
    </>
  )
}
