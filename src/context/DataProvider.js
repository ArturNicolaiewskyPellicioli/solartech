import React, { useState } from "react";
import DataContext from './Datacontext'
import axios from 'axios'


const DataProvider = (props) => {
  // Delete Client

  const deleteClient = () => {
    clients.splice(currentClientIndex , 1)
    localStorage.setItem("clients", JSON.stringify(clients))

    goToHome()
  }

  // EditMode
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const saveEditChanges = (propsName, propsEmail, propsPhone, propsCpf, propsCep, propsUf, propsCity, propsNeighborhood, propsStreet, propsNumber, propsComplement, propsType, propsCepS, propsUfS, propsCityS, propsNeighborhoodS, propsStreetS, propsNumberS, propsComplementS, propsTypeS) => {
    const client = {
      name: propsName,
      email: propsEmail,
      telefone: propsPhone,
      cpf: propsCpf,
      endereco: {
        cep: propsCep,
        estado: propsUf,
        cidade: propsCity,
        bairro: propsNeighborhood,
        rua: propsStreet,
        numero: propsNumber,
        complemento: propsComplement,
        tipo: propsType,
      },
      enderecoSecundario: {
        cep: propsCepS,
        cidade: propsUfS,
        estado: propsCityS,
        bairro: propsNeighborhoodS,
        rua: propsStreetS,
        numero: propsNumberS,
        complemento: propsComplementS,
        tipo: propsTypeS,
      }
    }

    clients.splice(currentClientIndex , 1, client)
    localStorage.setItem("clients", JSON.stringify(clients))
    setCurrentClient(client)
    setEditMode(false)
  }
  
  //LocalStorage
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [cpf, setCpf] = useState();
  //  endereço 1
  const [cep, setCep] = useState();
  const [uf, setUf] = useState();
  const [city, setCity] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [complement, setComplement] = useState();
  const [type, setType] = useState();
  // endereço 2
  const [cepS, setCepS] = useState();
  const [ufS, setUfS] = useState();
  const [cityS, setCityS] = useState();
  const [neighborhoodS, setNeighborhoodS] = useState();
  const [streetS, setStreetS] = useState();
  const [numberS, setNumberS] = useState();
  const [complementS, setComplementS] = useState();
  const [typeS, setTypeS] = useState();
  const [currentClient, setCurrentClient] = useState();
  const [currentClientIndex, setCurrentClientIndex] = useState();
  // clients 
  const [clients, setClients] = useState([]);
  
  const saveClientData = () => {
    
    const client = {
      name: name,
      email: email,
      telefone: phone,
      cpf: cpf,
      endereco: {
        cep: cep,
        estado: uf,
        cidade: city,
        bairro: neighborhood,
        rua: street,
        numero: number,
        complemento: complement,
        tipo: type,
      },
      enderecoSecundario: {
        cep: cepS,
        cidade: cityS,
        estado: ufS,
        bairro: neighborhoodS,
        rua: streetS,
        numero: numberS,
        complemento: complementS,
        tipo: typeS,
      }
    }


      if (clients) {
        const clientsToSave = [...clients, client]
        localStorage.setItem("clients", JSON.stringify(clientsToSave))
      } else {
        const clientsToSave = [client]
        localStorage.setItem("clients", JSON.stringify(clientsToSave))
      }

    goToHome()
    sendEmail()
  }


    //Client Info open

  const onClickClient = (client) => {
    setPage(4)
    const listClients = JSON.parse(localStorage.getItem("clients"))

    const clientIndex = listClients.findIndex(clienteInfo => clienteInfo.name === client)
    setCurrentClientIndex(clientIndex)
    setCurrentClient(listClients[clientIndex])

    setClients(listClients)

  }

    // Modal settings

  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
  
  
    // Modal Email settings

  const [modalEmailIsOpen, setModalEmailIsOpen] = useState(false);
  
  function openModalEmail() {
    setModalEmailIsOpen(true);
  }

  function closeModalEmail(){
    setModalEmailIsOpen(false);
  }


  const sendEmail = () => {

    const hostEmail = localStorage.getItem("email")
    
  const dataEmail = {
    service_id: 'service_0e9183z',
    template_id: 'template_l9gfuc8',
    user_id: 'user_dJ0JcQp2kq7BYOIO1bW5q',
    template_params: {
      'name': `${ name }`,
      'hostEmail': `${hostEmail}`
    }
    };
    
    const body = dataEmail
    
    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', body)
      .catch(err => {
        console.log(err.message)
      })
  }
    
    // Page navigation

  const [page, setPage] = useState(0);
    
    const nextPage = () => {
        setPage(page + 1)
        setIsOpen(false);
    };
    
    const backPage = () => {
        setPage(page - 1)   
    };
    
    const goToHome = () => {
        setPage(0)
        setIsOpen(false);
    }

  const states = {
    page,
    modalIsOpen,
    currentClient,
    clients,
    editMode,
    currentClientIndex,
    cep,
    name,
    number,
    modalEmailIsOpen
  };

  const setters = {
    setName, setEmail, setPhone, setCpf, 
    setCep, setUf, setCity, setNeighborhood, setStreet, setNumber, setComplement, setType,
    setCepS, setUfS, setCityS, setNeighborhoodS, setStreetS, setNumberS, setComplementS, setTypeS, setClients
  };
  const requests = {
    nextPage,
    backPage,
    goToHome,
    openModal,
    closeModal,
    onClickClient,
    saveClientData,
    toggleEditMode,
    saveEditChanges,
    deleteClient,
    openModalEmail,
    closeModalEmail,
  };

  const data = { states, setters, requests };

  return (
    <DataContext.Provider value={data}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
