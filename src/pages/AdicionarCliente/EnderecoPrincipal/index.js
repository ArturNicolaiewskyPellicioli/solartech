import React, { useState } from 'react'
import { useContext, useEffect } from "react";
import BotaoNavegacao from "../../../components/BotaoNavegacao";
import ModalBox from "../../../components/ModalBox";
import DataContext from "../../../context/Datacontext";
import useForm from "../../../hooks/useForm";
import { EnderecoPrincipalContainer } from "./endereco-principal-style";

function EnderecoPrincipal() {
  const { setters, requests } = useContext(DataContext);
  const [form, onChange] = useForm({ cep: "", uf: "", city: "", neighborhood: "", street: "", number: "", complement: "", type: ""})
  const [cepData, setCepData] = useState()

  const onClickNextPage = (event) => {
    event.preventDefault()

    requests.openModal()
    setters.setCep(form.cep)
    setters.setUf(cepData && cepData.state ? cepData.state : form.uf)
    setters.setCity(cepData && cepData.city ? cepData.city : form.city)
    setters.setNeighborhood(cepData && cepData.neighborhood ? cepData.neighborhood : form.neighborhood)
    setters.setStreet(cepData && cepData.street ? cepData.street : form.street)
    setters.setNumber(form.number)
    setters.setComplement(form.complement)
    setters.setType(form.type)
    
    const listClients = JSON.parse(localStorage.getItem("clients"))
    setters.setClients(listClients)
  }
  const inputName = React.createRef();

  useEffect(() => {
    inputName.current.focus()
  },[])
  
  const searchCep = () => {
    fetch(`https://api.pagar.me/1/zipcodes/${form.cep}`, { method: 'get' })
    .then(response => response.json())
    .then(data => setCepData(data))
  }

  return (
    <EnderecoPrincipalContainer>
      <h1>Adicionar endereço</h1>
      
          <form onSubmit={onClickNextPage}>
                <div>
                    <label htmlFor="cep">CEP:</label>
                    <input id="cep" name="cep" value={form.cep} onChange={onChange} ref={inputName} onBlur={searchCep} placeholder="Ex: 89801303" required/>
                </div>
                <div>
                    <label htmlFor="uf">Estado:</label>
                    <input id="uf" name="uf" value={cepData ? cepData.state : form.uf} disabled={cepData && cepData.state && 'disabled'} placeholder="Ex: SC" onChange={onChange} required/>
                </div>
                <div>
                    <label htmlFor="city">Cidade:</label>
                    <input id="city" name="city" value={cepData ? cepData.city : form.city} disabled={cepData && cepData.city && 'disabled'} placeholder="Ex: Chapecó" onChange={onChange} required/>
                </div>
                <div>
                    <label htmlFor="neighborhood">Bairro:</label>
                    <input id="neighborhood" name="neighborhood" value={cepData ? cepData.neighborhood : form.neighborhood} disabled={cepData && cepData.neighborhood && 'disabled'} placeholder="Ex: Pres Médici" onChange={onChange} required/>
                </div>
                <div>
                    <label htmlFor="street">Rua:</label>
                    <input id="street" name="street" value={cepData ? cepData.street : form.street} disabled={cepData && cepData.street && 'disabled'} placeholder="Ex: Servidão Turquia" onChange={onChange} required/>
                </div>
                <div>
                    <label htmlFor="number">Número:</label>
                    <input type="number" id="number" name="number" value={form.number} placeholder="Ex: 50" onChange={onChange} required/>
                </div>
                <div>
                    <label htmlFor="complement">Complemento:</label>
                    <input id="complement" name="complement" value={form.complement} placeholder="Ex: Casa" onChange={onChange} required/>
                </div>
            <div>
              <label htmlFor="type">Tipo de endereço:</label>
                <select id="type" name="type" value={form.type} onChange={onChange} required>
                  <option hidden value="">Selecionar</option>
                  <option>Comercial</option>
                  <option>Residencial</option>
                  <option>Rural</option>
                  <option>Casa de praia</option>
                </select>
        </div>
        <div className="button-container">
          <BotaoNavegacao color="gray" clickFunction={requests.backPage} title="Voltar"/>
          <BotaoNavegacao title="Avançar"/>
        </div>
          </form>
          
     
        <ModalBox title="Gostaria de adicionar um endereço secundário?" functionNo={requests.saveClientData} functionYes={requests.nextPage}/>
    </EnderecoPrincipalContainer>
  );
}

export default EnderecoPrincipal;