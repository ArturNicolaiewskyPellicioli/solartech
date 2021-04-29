import React from 'react';
import { useContext } from "react";
import DataContext from "../context/Datacontext";
import Modal from 'react-modal';
import { ModalContent } from './component-styles/modal-box-styles';
import BotaoDecisao from './BotaoDecisao';

function ModalBox({title, functionNo, functionYes}) {
  const { states, requests } = useContext(DataContext);

  const customStyles = {
    content: {
    width: '30vw',
    minWidth: '200px',
    minHeight: '280px',
    overflow: 'hidden',
    height: '25vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    
  }
  };
  
    return (
      <Modal
        isOpen={states.modalIsOpen}
        onRequestClose={requests.closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalContent>
          <h2>{title}</h2>
          <div className="button-container-box">
            <BotaoDecisao title="Não" clickFunction={functionNo}/>
            <BotaoDecisao title="Sim" clickFunction={functionYes}/>
          </div>
        </ModalContent>
      </Modal>
        
  );
}

export default ModalBox;
