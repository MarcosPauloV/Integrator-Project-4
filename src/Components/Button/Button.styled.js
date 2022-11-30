import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 0.6rem;
  width: 90%;
  border-radius: 4px;
  font-weight: bold;
  background: #15cdfc;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    background-color: #09beeb;
      color: #fff;
      transition: 200ms all ease-in-out;
      cursor: pointer;
  }
`;
