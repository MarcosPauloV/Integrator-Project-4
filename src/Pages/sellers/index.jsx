import React from "react";
import { Container } from "../../Components/Container/styled";
import SearchBar from "../../Components/SearchBar/index";
import BookData from "./Data.json";

import {
    SellersWrapper
} from './styled'

const Sellers = () => {
    return(
        <Container>
            <SearchBar placeholder='Digite o nome do evento...' data={BookData}></SearchBar>
            <SellersWrapper></SellersWrapper>
        </Container>
    )
}

export default Sellers;