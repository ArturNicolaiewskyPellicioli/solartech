import { useContext } from "react";
import BotaoNavegacao from "../../components/BotaoNavegacao";
import DataContext from "../../context/Datacontext";
import styled from 'styled-components'
import useForm from "../../hooks/useForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClienteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    overflow: hidden;

    h1 {
        color: #18A49F;
        margin: 2rem;
        margin-top: 3rem;
        font-family: inter;
    }

    form {
    width: 60vw;
    display: flex;
    justify-content: center;

        section {
            display: flex;
            flex-direction: column;
            align-items: center;


            label {
                margin: 0.75rem;
            }

            input {
                width: 20vw;
                min-width: 180px;
                border: none;
                background-color:${props => props.editModeStyle ? 'white' : '#EEF3F2'};
                padding: 1rem 2rem;
                border-radius: 4px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);

                margin: 0.75rem;
                margin-bottom: 1.25rem;

                display: flex;

                font-size: 14px;
                font-family: inter;

                cursor:${props => props.editModeStyle ? 'text' : 'default'};

                span:last-child {
                    font-size: 18px;
                }
            }
        }
    }

    .button-container-box {
        display: flex;
    }

    @media only screen and (max-width: 700px) {
        form {
            flex-direction: column;
            align-items: center;
        }
    }
`

function Cliente() {
    const { states, setters, requests } = useContext(DataContext);
    const [form, onChange] = useForm({ name: states.currentClient.name, email: states.currentClient.email, phone: states.currentClient.telefone, cpf: states.currentClient.cpf, cep:  states.currentClient.endereco.cep, uf: states.currentClient.endereco.estado, city: states.currentClient.endereco.cidade, neighborhood: states.currentClient.endereco.bairro, street: states.currentClient.endereco.rua, number: states.currentClient.endereco.numero, complement: states.currentClient.endereco.complemento, type: states.currentClient.endereco.tipo, cepS:  states.currentClient.enderecoSecundario.cep, ufS: states.currentClient.enderecoSecundario.estado, cityS: states.currentClient.enderecoSecundario.cidade, neighborhoodS: states.currentClient.enderecoSecundario.bairro, streetS: states.currentClient.enderecoSecundario.rua, numberS: states.currentClient.enderecoSecundario.numero, complementS: states.currentClient.enderecoSecundario.complemento, typeS: states.currentClient.enderecoSecundario.tipo})
    const EditCompleted = () => toast.dark("Cliente atualizado com sucesso");

    const onClickSaveEdit = () => {
        
        const listClients = JSON.parse(localStorage.getItem("clients"))
        setters.setClients(listClients)
        
        requests.saveEditChanges(form.name, form.email, form.phone, form.cpf, form.cep, form.uf, form.city, form.neighborhood, form.street, form.number, form.complement, form.type, form.cepS, form.ufS, form.cityS, form.neighborhoodS, form.streetS, form.numberS, form.complementS, form.typeS)
    
        EditCompleted()
    }

  return (
    <ClienteContainer editModeStyle={states.editMode}>
      <h1>{states.currentClient.name}</h1>
    
          <form>
            <section>
                
                  <h3>Dados pessoais</h3>
                  
                <div>
                    <label htmlFor="name">Nome:</label>
                      <input id="name" name="name" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.name : states.currentClient.name} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="phone">Telefone:</label>
                    <input id="phone" name="phone" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.phone : states.currentClient.telefone} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.email : states.currentClient.email} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="cpf">CPF:</label>
                    <input id="cpf" name="cpf" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.cpf : states.currentClient.cpf} onChange={onChange}/>
                  </div>
              </section>
              
              <section>
                  
                  <h3>Dados endereço</h3>

                <div>
                    <label htmlFor="cep">CEP:</label>
                    <input id="cep" name="cep" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.cep : states.currentClient.endereco.cep} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="uf">Estado:</label>
                    <input id="uf" name="uf" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.uf : states.currentClient.endereco.estado} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="city">Cidade:</label>
                    <input id="city" name="city" disabled={!states.editMode && 'disabled'}value={states.editMode ? form.city : states.currentClient.endereco.cidade} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="neighborhood">Bairro:</label>
                    <input id="neighborhood" name="neighborhood" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.neighborhood : states.currentClient.endereco.bairro} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="street">Rua:</label>
                    <input id="street" name="street" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.street : states.currentClient.endereco.rua} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="number">Número:</label>
                    <input id="number" name="number" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.number : states.currentClient.endereco.numero} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="complement">Complemento:</label>
                    <input id="complement" name="complement" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.complement : states.currentClient.endereco.complemento} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="type">Tipo de endereço:</label>
                    <input id="type" name="type" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.type : states.currentClient.endereco.tipo} onChange={onChange}/>
                </div>
              </section>
              
              {states.currentClient.enderecoSecundario.cep &&
                  <section>
                  
                      <h3>Dados endereço secundário</h3>

                      <div>
                          <label htmlFor="cepS">CEP:</label>
                          <input id="cepS" name="cepS" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.cepS : states.currentClient.enderecoSecundario.cep} onChange={onChange} />
                      </div>
                      <div>
                          <label htmlFor="cityS">Cidade:</label>
                          <input id="cityS" name="cityS" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.cityS : states.currentClient.enderecoSecundario.estado} onChange={onChange} />
                      </div>
                      <div>
                          <label htmlFor="ufS">Estado:</label>
                          <input id="ufS" name="ufS" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.ufS : states.currentClient.enderecoSecundario.cidade} onChange={onChange} />
                      </div>
                      <div>
                          <label htmlFor="neighborhoodS">Bairro:</label>
                          <input id="neighborhoodS" name="neighborhoodS" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.neighborhoodS : states.currentClient.enderecoSecundario.bairro} onChange={onChange} />
                      </div>
                      <div>
                          <label htmlFor="streetS">Rua:</label>
                          <input id="streetS" name="streetS" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.streetS : states.currentClient.enderecoSecundario.rua} onChange={onChange} />
                      </div>
                      <div>
                          <label htmlFor="numberS">Número:</label>
                          <input id="numberS" name="numberS" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.numberS : states.currentClient.enderecoSecundario.numero} onChange={onChange} />
                      </div>
                      <div>
                          <label htmlFor="complementS">Complemento:</label>
                          <input id="complementS" name="complementS" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.complementS : states.currentClient.enderecoSecundario.complemento} onChange={onChange} />
                      </div>
                      <div>
                          <label htmlFor="typeS">Tipo de endereço:</label>
                          <input id="typeS" name="typeS" disabled={!states.editMode && 'disabled'} value={states.editMode ? form.typeS : states.currentClient.enderecoSecundario.tipo} onChange={onChange} />
                      </div>
                  </section>
              }
          </form>
          
            <div className="button-container-box">
                <BotaoNavegacao title="X" clickFunction={requests.deleteClient}/>
              {!states.editMode && <BotaoNavegacao title="E" clickFunction={requests.toggleEditMode} />}
              {states.editMode && <BotaoNavegacao title="S" clickFunction={onClickSaveEdit} />}
            </div>
          
        <ToastContainer/>
    </ClienteContainer>
  );
}

export default Cliente;