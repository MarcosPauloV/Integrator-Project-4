import styled from "styled-components"

export const EventsFilters = styled.form`
  min-height: 70vh;
  width: 20%;
  //border: 1px solid #C4C4C4;
  margin: 0 2% 0 2%;
  padding: 1%;
  border-radius: 4px;
  background-color: #DBDADA;
  display: flex;
  position: sticky;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #000;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
  font-weight: bold;
  @media screen and (max-width: 768px){
    width: 100%;
    border-bottom: 1px solid black;
  }
`

export const FilterTitle = styled.h5`
  text-align: center;
  font-weight: bold;
  color: #000;
`

export const EventsSelect = styled.select`
    display: inline-block;
    width: 90%;
    height: 40px;
    //max-width: 200x;
    max-height: 40px;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border: 0.1rem solid #15cdfc;
    padding: 0 1rem;
    &:focus{
        outline: none;
        border-bottom: 0.2rem solid #15cdfc;;
    }
  @media screen and (max-width: 768px){
    width: 80%;
  }
`

export const EventsOpt = styled.option`
  background-color: transparent;
  text-align: center;
`

export const EventsCategory = styled.select`
  height: fit-content;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-weight: bold;
  width: 80%;
  &:active{
    outline: none;
    border: none;
  }
  @media screen and (max-width: 768px){
    width: 80%;
  }
`

export const Category = styled.option`
  background-color: transparent;
  text-align: center;
`

export const PriceContainer = styled.div`
  margin-top: 10%;
  width: 80%;
`

export const EventsPrice = styled.input`
  width: 100%;
  appearance: none;
  cursor: w-resize;
  height: 1px;
  background-color: black;
`

export const MinVal = styled.span`
  margin-right: 80%;
  font-size: 12px;
  color: #ddd8d8b0;
`

export const MaxVal = styled.span`
  color: #ddd8d8b0;
  font-size: 12px;
`

export const PriceVal = styled.label`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`

export const DateContainer = styled.div`
  width: 100%;
`

export const DateIn = styled.input`
  display: inline-block;
  width: 90%;
  height: 40px;
  //max-width: 200x;
  max-height: 40px;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border: 0.1rem solid #15cdfc;
  padding: 0 1rem;
  &:focus{
      outline: none;
      border-bottom: 0.2rem solid #15cdfc;;
  }
  &:active{
    border: none;
    outline: none;
  }
`

export const FilterSubmit = styled.input`
  border-radius: 4px;
  font-weight: bold;
  background: #15cdfc;
  padding: 0.5rem;
  width: 100%;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
    &:hover {
      background-color: #09beeb;
      color: #fff;
      transition: 200ms all ease-in-out;
      cursor: pointer;
  }
  
`
