import React, { useState } from 'react'
import BotaoNavegacao from "../../../components/BotaoNavegacao";
import { EnderecoSecundarioContainer } from "./endereco-secundario-style";
import DataContext from "../../../context/Datacontext";
import { useContext, useEffect } from "react";
import useForm from "../../../hooks/useForm";
import ModalBox from "../../../components/ModalBox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EnderecoSecundario() {
  const { states, setters, requests } = useContext(DataContext);
  const [form, onChange] = useForm({ cepS: "", ufS: "", cityS: "", neighborhoodS: "", streetS: "", numberS: "", complementS: "", typeS: ""})
  const [cepData, setCepData] = useState()
  const RepeatedAddress = () => toast.dark("Este endereço já foi adicionado");
    
  const onClickNextPage = (event) => {
    event.preventDefault()
    if (states.cep === form.cepS && states.number === form.numberS) {
      
      RepeatedAddress()
      
    } else {
      requests.openModal()
      
      setters.setCepS(form.cepS)
      setters.setUfS(cepData && cepData.state ? cepData.state : form.ufS)
      setters.setCityS(cepData && cepData.city ? cepData.city : form.cityS)
      setters.setNeighborhoodS(cepData && cepData.neighborhood ? cepData.neighborhood : form.neighborhoodS)
      setters.setStreetS(cepData && cepData.street ? cepData.street : form.streetS)
      setters.setNumberS(form.numberS)
      setters.setComplementS(form.complementS)
      setters.setTypeS(form.typeS)
    
      const listClients = JSON.parse(localStorage.getItem("clients"))
      setters.setClients(listClients)
    }
  }

  const onClickCancel = () => {
    requests.saveClientData()
    requests.goToHome()
  }
  
  const inputName = React.createRef();

  useEffect(() => {
    inputName.current.focus()
  }, [])
  
  
  const searchCep = () => {
    fetch(`https://api.pagar.me/1/zipcodes/${form.cepS}`, { method: 'get' })
    .then(response => response.json())
      .then(data => setCepData(data))
  }
  
  return (
    <EnderecoSecundarioContainer>
      <h1>Adicionar endereço secundário</h1>
      
      <form onSubmit={onClickNextPage}>
        <div>
          <label htmlFor="cepS">CEP:</label>
          <input id="cepS" name="cepS" value={form.cepS} onChange={onChange} ref={inputName} onBlur={searchCep} required/>
        </div>
        {/* FAZER VERIFICAÇÃO INDIVIDUAL PARA VER SE TODAS AS INFORMAÇÕES EXISTEM, CASO CONTRÁRIO, N DESABILITAR CAMPO */}
        <div>
            <label htmlFor="ufS">Estado:</label>
            <input id="ufS" name="ufS" value={cepData ? cepData.state : form.ufS} disabled={cepData && cepData.state && 'disabled'} placeholder="Ex: 89801303" onInput={onChange} required/>
        </div>
        <div>
            <label htmlFor="cityS">Cidade:</label>
            <input id="cityS" name="cityS" value={cepData ? cepData.city : form.cityS} disabled={cepData && cepData.city && 'disabled'} placeholder="Ex: SC" onChange={onChange} required/>
        </div>
        <div>
            <label htmlFor="neighborhoodS">Bairro:</label>
            <input id="neighborhoodS" name="neighborhoodS" value={cepData && cepData.neighborhood ? cepData.neighborhood : form.neighborhoodS} placeholder="Ex: Chapecó" disabled={cepData && cepData.neighborhood && 'disabled'} placeholder="Ex: Pres Médici" onChange={onChange} required/>
        </div>
        <div>
            <label htmlFor="streetS">Rua:</label>
            <input id="streetS" name="streetS" value={cepData && cepData.street ? cepData.street : form.streetS} disabled={cepData && cepData.street && 'disabled'} placeholder="Ex: Servidão Turquia" onChange={onChange} required/>
        </div>
        <div>
            <label htmlFor="numberS">Número:</label>
            <input type="number" id="numberS" name="numberS" value={form.number} placeholder="Ex: 135" onChange={onChange} required/>
        </div>
        <div>
            <label htmlFor="complementS">Complemento:</label>
            <input id="complementS" name="complementS" value={form.complementS} placeholder="Ex: Prédio inteiro" onChange={onChange} required/>
        </div>
        <div>
          <label htmlFor="typeS">Tipo de endereço:</label>
            <select id="typeS" name="typeS" value={form.typeS} onChange={onChange} required>
              <option hidden value="">Selecionar</option>
              <option>Comercial</option>
              <option>Residencial</option>
              <option>Rural</option>
              <option>Casa de praia</option>
            </select>
        </div>
        <div className="button-container">
          <BotaoNavegacao clickFunction={onClickCancel} title="Cancelar"/>
          <BotaoNavegacao title="Salvar"/>
        </div>
      </form>
      
      <ToastContainer/>
      <ModalBox title={`Você vai adicionar ${states.name} na lista de clientes?`} functionNo={requests.closeModal} functionYes={requests.saveClientData}/>
    </EnderecoSecundarioContainer>
  );
}

export default EnderecoSecundario;