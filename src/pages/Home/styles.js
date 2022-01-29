import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column
`;
export const Title = styled.div`
color: black;
font-size: 50px;
text-align: center;
`;
export const Subtitle = styled.div`
color: black;
font-size: 25px;
text-align: center;
`;
export const WhichTurnIs = styled.div`
font-size: 30px;
margin: 20px;
display: flex;
flex-direction:row;
`;
export const WhichTurnIsButton = styled.p`
color: blue;
text-align: center;
font-size: 40px;
font-weight: bold;
`;
export const GameContainer = styled.div`
border-radius: 5px;
display: flex;
flex-direction: row;
max-width: 200px;
flex-wrap: wrap;
justify-content: center;
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
font-size: 20px;
display: flex;
flex-direction: row;
`;
export const ResetGame = styled.div`
color: red;
font-size: 20px;
margin-top: 50px;
cursor: pointer;
`;
export const ButtonColor = styled.p`
color: ${(props) => props.color || 'black'};
margin: 0 5px;
`;
export const ButtonXColor = styled.div`
color: blue;
margin: 0 5px;
`;
export const ButtonOColor = styled.div`
color: red;
margin: 0 5px;
`;
export const ModalTitle = styled.p`
text-align: center;
font-size: 18px;
font-weight: bold;
`;
export const ModalRow = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`;
export const ModalConfirmation = styled.p`
font-size: 16px;
color: white;
background-color: green;
padding: 10px 25px;
margin-right: 5px;
font-weight:bold;
cursor:pointer;
`;
export const ModalNegation = styled.p`
font-size: 16px;
color: white;
background-color: red;
padding: 10px 25px;
margin-left: 5px;
font-weight:bold;
cursor:pointer;
`;