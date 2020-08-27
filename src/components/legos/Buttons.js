import styled from "styled-components";

const Button = styled.button`
  font-size: 1.7em;
  outline: none;
  color: white;
  padding: 20px;
  border: 1px solid black;
  border-radius: 9px;
  background-color: #243e36;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: #7ca982;
    cursor: pointer;
  }
`;

export default Button;
