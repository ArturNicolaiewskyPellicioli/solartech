import React from 'react';
import { useContext } from "react";
import DataContext from "../context/Datacontext";
import Modal from 'react-modal';
import { ModalContent } from './component-styles/modal-input-email-style';
import BotaoDecisao from './BotaoDecisao';
import useForm from '../hooks/useForm';

function ModalInputEmail({title, functionNo, functionYes}) {
  const { states, requests } = useContext(DataContext);
  const [form, onChange] = useForm({email: ""})

  const customStyles = {
    content: {
    width: '30vw',
    minWidth: '280px',
    minHeight: '300px',
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
    
    const sendEmail = (event) => {
        event.preventDefault()

        localStorage.setItem("email", form.email)
        requests.closeModalEmail()
    }
  
    return (
      <Modal
        isOpen={states.modalEmailIsOpen}
        onRequestClose={requests.closeModalEmail}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
      >
            <ModalContent>
                <form onSubmit={sendEmail}>
                    <h2>Sua primeira vez por aqui?</h2>

                    <label htmlFor="email">Adicione um email para ser notificado:</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={onChange} placeholder="email@email.com" required></input>

                    <BotaoDecisao title="Enviar" />
                </form>
        </ModalContent>
      </Modal>
        
  );
}

export default ModalInputEmail;
