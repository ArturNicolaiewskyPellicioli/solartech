import { useContext, useEffect, useState } from "react";
import ModalInputEmail from "../../components/ModalInputEmail";
import DataContext from "../../context/Datacontext";
import useForm from "../../hooks/useForm";
import { HomeContainer } from "./home-style";

function Home() {
  const { setters, requests } = useContext(DataContext);
   const [form, onChange] = useForm({ searchClient: ""})

  const [clients, setClients] = useState([]);

  const localStorageClients = localStorage.getItem("clients")

  useEffect(() => {
    const listClients = JSON.parse(localStorage.getItem("clients"))
    setClients(listClients)

      setters.setName()
      setters.setEmail()
      setters.setPhone()
      setters.setCpf()
      setters.setCep()
      setters.setUf()
      setters.setCity()
      setters.setNeighborhood()
      setters.setStreet()
      setters.setNumber()
      setters.setComplement()
      setters.setType()
      setters.setCepS()
      setters.setUfS()
      setters.setCityS()
      setters.setNeighborhoodS()
      setters.setStreetS()
      setters.setNumberS()
      setters.setComplementS()
      setters.setTypeS()
    
  }, [localStorageClients])

  useEffect(() => {
    if (localStorage.getItem("email") === null) {
      requests.openModalEmail()
    }
  },[])
  

  const listClientsFiltered = clients?.filter(client => client.name.toLowerCase().includes(form.searchClient.toLowerCase()))

  return (
    <HomeContainer>
      <h1>Clientes</h1>
      <input placeholder="Busque pelo nome" id="searchClient" name="searchClient" value={form.searchClient} onChange={onChange}/>
      
      {clients && clients.length != 0 ? listClientsFiltered.map((client) => {
          return (
            <div key={client.name} onClick={() => requests.onClickClient(client.name)}>
              <span>{client.name}</span>
              <span>Ver mais</span>
            </div>
          )
      }) :
        <div>
          Sem clientes cadastros
        </div>
      }
      <ModalInputEmail/>
    </HomeContainer>
  );
}

export default Home;
