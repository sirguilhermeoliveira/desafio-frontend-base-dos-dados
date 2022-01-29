import { useState, Fragment } from 'react';
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
    Title,
    Subtitle,
    ModalTitle,
    ModalRow,
    ModalConfirmation,
    ModalNegation,
  } from './styles';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Modal from 'react-modal';
  import Switch from "react-switch";

const Home = () => {
const firstButtons = ['?','?','?','?','?','?','?','?','?']
const [whichTurnIs, setWhichTurnIs] = useState('X')
const [mutableButtonColor, setMutableButtonColor] = useState('blue')
const [winsX, setWinsX] = useState(0)
const [winsO, setWinsO] = useState(0)
const [numberGameSize, setNumberGameSize] = useState(firstButtons)
const [modalIsOpen, setIsOpen] = useState(false)
const [cantPress, setCantPress] = useState(false)
const [whichResetIs, setWhichResetIs] = useState('')
const [remainingToWinX, setRemainingToWinX] = useState(3)
const [remainingToWinO, setRemainingToWinO] = useState(3)
const [isDarkTheme, setDarkTheme] = useState(false)

function handleDarkTheme() {
  setDarkTheme(!isDarkTheme)
}

function openModal(value) {
  setIsOpen(true);
  setWhichResetIs(value)
  setWhichResetIs(value)
}

function closeModal() {
  setIsOpen(false);
  setWhichResetIs('')
}

function changeButtonType(value, name){
  if(cantPress === true){
    return
  }
  const valueHelper = Number(value)
  numberGameSize.splice(Number(valueHelper), 1, whichTurnIs);
    setNumberGameSize(numberGameSize);
    if(whichTurnIs==='X'){
      setWhichTurnIs('O') 
      setMutableButtonColor('red')
    } else {
      setMutableButtonColor('blue')
      setWhichTurnIs('X')   
    }
    checkWinner()  
}

function checkWinner(){
  if((numberGameSize[0] ==='X' && numberGameSize[1] ==='X' && numberGameSize[2] ==='X') || (numberGameSize[3] ==='X' && numberGameSize[4] ==='X' && numberGameSize[5] ==='X') || (numberGameSize[6] ==='X' && numberGameSize[7] ==='X' && numberGameSize[8] ==='X') || (numberGameSize[0] ==='X' && numberGameSize[4] ==='X' && numberGameSize[8] ==='X') || (numberGameSize[2] ==='X' && numberGameSize[4] ==='X' && numberGameSize[6] ==='X')){
    setCantPress(true)
    toast('X PLAYER WINS!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {      
      setWinsX(winsX+1)
      setNumberGameSize(firstButtons)
      setWhichTurnIs('X')  
      setRemainingToWinX(remainingToWinX-1)
      setCantPress(false)
      isMatchWinner()
    }, 1000);
  } 
  if((numberGameSize[0] ==='O' && numberGameSize[1] ==='O' && numberGameSize[2] ==='O') || (numberGameSize[3] ==='O' && numberGameSize[4] ==='O' && numberGameSize[5] ==='O') || (numberGameSize[6] ==='O' && numberGameSize[7] ==='O' && numberGameSize[8] ==='O') || (numberGameSize[0] ==='O' && numberGameSize[4] ==='O' && numberGameSize[8] ==='O') || (numberGameSize[2] ==='O' && numberGameSize[4] ==='O' && numberGameSize[6] ==='O')){
    setCantPress(true)
    toast('O PLAYER WINS!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {      
      setWinsO(winsO+1)
      setNumberGameSize(firstButtons)
      setWhichTurnIs('X')  
      setCantPress(false)
      setRemainingToWinO(remainingToWinO-1)
      isMatchWinner()
    }, 1000);
  } 
  if(numberGameSize[0] !=='?' && numberGameSize[1] !=='?' && numberGameSize[2] !=='?' && numberGameSize[3] !=='?' && numberGameSize[4] !=='?' && numberGameSize[5] !=='?' && numberGameSize[6] !=='?' && numberGameSize[7] !=='?' && numberGameSize[8] !=='?'){
    setCantPress(true)
    toast('Deu velha, ninguém ganhou!!!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {      
      setNumberGameSize(firstButtons)
      setWhichTurnIs('X')  
      setCantPress(false)
    }, 1000);
    
  }
}
function isMatchWinner(){
  if(remainingToWinX===1){
    alert('O vencedor da melhor de 3 é o X')
    setRemainingToWinX(3)
    setRemainingToWinO(3)
    setWinsX(0)
    setWinsO(0)
  }
  if(remainingToWinO===1){
    alert('O vencedor da melhor de 3 é o O')
    setRemainingToWinX(3)
    setRemainingToWinO(3)
    setWinsX(0)
    setWinsO(0)
  }
}

function resetGame(value){
  if(cantPress === true){
    return
  }
  setNumberGameSize(firstButtons)
  setWhichTurnIs('X') 
  toast('A mesa foi resetada', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  setTimeout(() => {
    closeModal()
  }, 1000);
}
function resetMatch(value){
  if(cantPress === true){
    return
  }
  setNumberGameSize(firstButtons)
  setWhichTurnIs('X') 
  setWinsX(0)
  setWinsO(0)
  setRemainingToWinX(3)
  setRemainingToWinO(3)
  toast('O jogo foi resetado', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  setTimeout(() => {
    closeModal()
  }, 1000);
}

    return (
      <Container backgroundColor={isDarkTheme}>
        <ToastContainer />
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {whichResetIs === 'resetGame' ?
        <Fragment>
        <ModalTitle>Tem certeza que quer resetar o jogo?</ModalTitle>
        <ModalRow>
          <ModalConfirmation onClick={resetGame}>Sim</ModalConfirmation>
          <ModalNegation onClick={closeModal}>Não</ModalNegation>
        </ModalRow>
        </Fragment>
        : 
        <Fragment>
        <ModalTitle>Tem certeza que quer resetar a partida?</ModalTitle>
        <ModalRow>
        <ModalConfirmation onClick={resetMatch}>Sim</ModalConfirmation>
        <ModalNegation onClick={closeModal}>Não</ModalNegation>
      </ModalRow>
      </Fragment>
        }
       </Modal>
       <Switch offColor='#000' onColor='#FFF' onHandleColor='#000' onChange={handleDarkTheme} checked={isDarkTheme} />
          <Title color={isDarkTheme}>
              Jogo da velha
          </Title>
          <Subtitle color={isDarkTheme}>
            melhor de 3
          </Subtitle>
          <WhichTurnIs color={isDarkTheme}>
            É a vez do: <ButtonColor color={mutableButtonColor}>{whichTurnIs}</ButtonColor>
          </WhichTurnIs>
          <GameContainer>
              {numberGameSize.map((value, index) => (
            <ButtonGame id={index} onClick={changeButtonType.bind(null, index, value)} key={index}>{value}</ButtonGame>
                  ))}                
          </GameContainer>
          <WhoWins color={isDarkTheme}>
              O <ButtonXColor>X</ButtonXColor> ganhou <ButtonColor>{winsX}</ButtonColor> vezes
          </WhoWins>
          <WhoWins color={isDarkTheme}>
              Faltam {remainingToWinX} partidas para o jogador <ButtonXColor>X</ButtonXColor> ganhar o jogo
          </WhoWins>
          <WhoWins color={isDarkTheme}>
              O <ButtonOColor>O</ButtonOColor> ganhou <ButtonColor>{winsO}</ButtonColor> vezes
          </WhoWins>
          <WhoWins color={isDarkTheme}>
              Faltam {remainingToWinO} partidas para o jogador <ButtonOColor>O</ButtonOColor> ganhar o jogo
          </WhoWins>
          <ResetGame onClick={() => openModal('resetGame')}>Clique para resetar o jogo</ResetGame>
          <ResetGame onClick={() => openModal('resetMatch')}>Clique para resetar as partidas</ResetGame>
      </Container>
    );
  }
  
  export default Home;
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
