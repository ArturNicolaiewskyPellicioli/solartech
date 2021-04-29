import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import BotaoNavegacao from "../../../components/BotaoNavegacao";
import DataContext from "../../../context/Datacontext";
import useForm from "../../../hooks/useForm";
import { DadosPessoaisContainer } from "./dados-pessoais-style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DadosPessoais() {
  const { setters, requests } = useContext(DataContext);
  const [form, onChange] = useForm({ name: "", email: "", phone: "", cpf: "" })
  const [clients, setClients] = useState([]);
  const RepeatedClient = () => toast.dark("Este cliente ja foi adicionado");

  const localStorageClients = localStorage.getItem("clients")
  
  useEffect(() => {
    const listClients = JSON.parse(localStorage.getItem("clients"))
    setClients(listClients)

  },[localStorageClients])
  
  const onClickNextPage = (event) => {
    event.preventDefault()

    if (clients.findIndex(client => client.name.toLowerCase().includes(form.name.toLowerCase())) === -1) {
      
      requests.nextPage()
      setters.setName(form.name)
      setters.setEmail(form.email)
      setters.setPhone(form.phone)
      setters.setCpf(form.cpf)

    } else {
      RepeatedClient()
    }
  }
  
  const inputName = React.createRef();

  useEffect(() => {
    inputName.current.focus()
  }, [])

  return (
    <DadosPessoaisContainer>
      <h1>Adicionar cliente</h1>
      
        <form onSubmit={onClickNextPage}>
          <div>
              <label htmlFor="name">Nome:</label>
              <input id="name" name="name" value={form.name} onChange={onChange} ref={inputName} placeholder="Fulano de tal" required/>
          </div>
          <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={form.email} onChange={onChange} placeholder="fulano@gmail.com" required/>
          </div>
          <div>
              <label htmlFor="phone">Telefone:</label>
              <input type="number" id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="51991494462" required/>
          </div>
          <div>
              <label htmlFor="cpf">CPF:</label>
              <input id="cpf" name="cpf" pattern="[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}" value={form.cpf} onChange={onChange} placeholder="000.000.000-00" required/>
          </div>
          <BotaoNavegacao title="Avançar"/>
        </form>
          
      <ToastContainer/>
    </DadosPessoaisContainer>
  );
}

export default DadosPessoais;