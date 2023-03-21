import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
/*     padding: 0 40px; */
    align-items: center;
    justify-content: space-between;
    height: 15vh;
    width: 100%;
    background-color: #f4f4f4;
    top: 0;
    overflow-x: hidden;
`

export const StyledButton = styled.button`
  background-color: #4caf50;
  width: 25%;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`

export const StyledHeadingTwo = styled.h2`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.color ? props.color : 'blue'};
`