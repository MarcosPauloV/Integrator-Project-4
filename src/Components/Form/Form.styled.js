import styled from "styled-components";


export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-width: 60%;
  min-height: 95vh;
  margin: auto;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  border: none;
  color: #000;
  @media screen and (max-width: 768px) {
    min-width: 100%;
    min-height: 95vh;
  }
`

export const LeftDiv = styled.div`
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  display: flex;

  background-color: white;
  background-image: url("https://i.ibb.co/WnzYqZt/icon.png");
  background-repeat: no-repeat;
  background-position: center;
  
  font-size: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const LeftDivTitle = styled.h4`
  color: #000;
  font-weight: bold;
  align-self: flex-start;
  margin-top: 25%;
`

export const StyledForm = styled.form`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,100) 0%, rgba(255, 255, 255, 0.15) 100%);
`;

