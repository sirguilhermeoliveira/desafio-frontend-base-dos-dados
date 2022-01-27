import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column
`;
export const Header = styled.header`
color: black;
font-size: 50px;
text-align: center;
`;
export const WhichTurnIs = styled.div`
font-size: 30px;
margin: 20px;
`;
export const WhichTurnIsButton = styled.div`
color: blue;
text-align: center;
font-size: 40px;
font-weight: bold;
`;
export const GameContainer = styled.div`
border-radius: 5px;
`;
export const ButtonGame = styled.div`
background-color: white;
padding: 10px;
font-size: 25px;
color: black;
font-weight: bold;
border: 1px solid black;
width: 30px;
text-align: center;
cursor: pointer
`;
export const WhoWins = styled.div`
margin: 10px;
font-size: 20px;x
`;
export const ResetGame = styled.div`
color: red;
font-size: 20px;
margin-top: 50px;
cursor: pointer;
`;
export const ButtonFlex = styled.div`
display: flex;
flex-direction: row;
`;
export const ButtonColor = styled.text`
color: blue;
`;