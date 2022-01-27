import {
    Container,
    WhichTurnIs,
    GameContainer,
    ButtonGame,
    WhoWins,
    ResetGame,
    ButtonFlex,
    ButtonColor,
    Header
  } from './styles';

function Home() {
    return (
      <Container>
          <Header>
              Jogo da velha
          </Header>
          <WhichTurnIs>
            É a vez do: <ButtonColor>X</ButtonColor>
          </WhichTurnIs>
          <GameContainer>
              <ButtonFlex>
            <ButtonGame><ButtonColor>0</ButtonColor></ButtonGame>
            <ButtonGame><ButtonColor>X</ButtonColor></ButtonGame>
            <ButtonGame><ButtonColor>0</ButtonColor></ButtonGame>
              </ButtonFlex>
              <ButtonFlex>
            <ButtonGame><ButtonColor>0</ButtonColor></ButtonGame>
            <ButtonGame><ButtonColor>0</ButtonColor></ButtonGame>
            <ButtonGame><ButtonColor>0</ButtonColor></ButtonGame>
            </ButtonFlex>
            <ButtonFlex>
            <ButtonGame><ButtonColor>0</ButtonColor></ButtonGame>
            <ButtonGame><ButtonColor>0</ButtonColor></ButtonGame>
            <ButtonGame><ButtonColor>0</ButtonColor></ButtonGame>
            </ButtonFlex>
          </GameContainer>
          <WhoWins>
              O <ButtonColor>X</ButtonColor> ganhou <ButtonColor>0</ButtonColor> vezes
          </WhoWins>
          <WhoWins>
              O <ButtonColor>O</ButtonColor> ganhou <ButtonColor>0</ButtonColor> vezes
          </WhoWins>
          <ResetGame>Clique para resetar o jogo</ResetGame>
          <ResetGame>Clique para resetar as partidas</ResetGame>
      </Container>
    );
  }
  
  export default Home;
  