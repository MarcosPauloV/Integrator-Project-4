import styled from "styled-components";
import { Link } from "react-router-dom";
export const FormLink = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #15cdfc;
  }
`;

export const FormP = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: bold;
`;

export const ErrP = styled.p`
  color: #e01d41;
  font-size: 12px;
  text-align: center;
  margin-bottom: 0;
`