import styled from 'styled-components';

export const OptionsWraper = styled.div`
  display: flex;
  border-radius: 15px;
  justify-content: center;
`;

export const ButtonPoll = styled.button`
  background-color: rgb(150, 248, 238);
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 25%;
  margin: 5px;

  width: 80px;
  height: 80px;
  &:hover,
  &:focus {
    background-color: #bebbbb;
  }
`;
