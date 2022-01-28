import {  useState } from 'react';
import {
    Container,
    WhichTurnIs,
    GameContainer,
    ButtonGame,
    WhoWins,
    ResetGame,
    ButtonXColor,
    ButtonOColor,
    ButtonColor,
    Header
  } from './styles';

  const Home = () => {
const [whichTurnIs, setWhichTurnIs] = useState('X')
const [mutableButtonColor, setMutableButtonColor] = useState('blue')
const numberGameSize = (['?','?','?','?','?','?','?','?','?'])

function changeButtonType(value){
  setMutableButtonColor('red')
  setWhichTurnIs('O') 
  console.log('value')
}

    return (
      <Container>
          <Header>
              Jogo da velha
          </Header>
          <WhichTurnIs>
            É a vez do: <ButtonColor color={mutableButtonColor}>{whichTurnIs}</ButtonColor>
          </WhichTurnIs>
          <GameContainer>
              {numberGameSize.map((value, index) => (
            <ButtonGame onClick={changeButtonType.bind(index)} key={index} id={index}>{value}</ButtonGame>
                  ))}                
          </GameContainer>
          <WhoWins>
              O <ButtonXColor>X</ButtonXColor> ganhou <ButtonColor>0</ButtonColor> vezes
          </WhoWins>
          <WhoWins>
              O <ButtonOColor>O</ButtonOColor> ganhou <ButtonColor>0</ButtonColor> vezes
          </WhoWins>
          <ResetGame>Clique para resetar o jogo</ResetGame>
          <ResetGame>Clique para resetar as partidas</ResetGame>
      </Container>
    );
  }
  
  export default Home;
  