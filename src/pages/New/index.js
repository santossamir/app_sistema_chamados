import { useState, useEffect, useContext } from "react";
import firebase from "../../services/FirebaseConnection";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlus } from "react-icons/fi";
import { AuthContext } from "../../contexts/auth";
import './new.css';

export default function New(){
    const [loadCustomers, setLoadCustomers] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [customersSelected, setCustomersSelected] = useState(0);

    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(()=>{
        async function loadCustomers(){
            await firebase.firestore().collection('customers')
            .get()
            .then((snapshot)=>{
                let lista = [];
                snapshot.forEach((doc)=>{
                    lista.push({
                        id:doc.id,
                        nomeFantasia: doc.data().nomeFantasia
                    })
                })
                if(lista.length === 0){
                    console.log("Nenhuma empresa encontrada.");
                    setCustomers([{id:'1', nomeFantasia: 'Freela'}]);
                    setLoadCustomers(false);
                    return;
                } 
                setCustomers(lista);
                setLoadCustomers(false);
            })
            .catch((error)=>{
                console.log("Erros =>", error);
                setLoadCustomers(false);
                setCustomers([{id:'1', nomeFantasia: ''}])
            })
        }
        loadCustomers();
    }, []);

    function handleRegister(e){
        e.preventDefault();
    }

    //Para quando troca o assunto
    function handleChangeSelect(e){
        setAssunto(e.target.value);
    }

    //Para quando troca o status
    function handleOptionChange(e){
        setStatus(e.target.value);
    }

    //Para quando trocar de cliente
    function handleChangeCostumers(e){
        //console.log("Index do cliente: ", e.target.value);
        //console.log('Cliente selecionado: ', customers[e.target.value]);
        setCustomersSelected(e.target.value);        
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Novo chamado">
                    <FiPlus size={25}/>
                </Title>
                <div className="container">
                    <form className="formProfile" onSubmit={handleRegister}>
                        
                        <label>Cliente</label>
                        {loadCustomers ? (
                            <input type="text" disabled={true} value="Carregando clientes..." />
                            ) : (
                            <select value={customersSelected} onChange={handleChangeCostumers}>
                                {customers.map((item, index)=>{
                                    return(
                                        <option key={item.id} value={index}>
                                            {item.nomeFantasia}
                                        </option>
                                    )
                                })}
                            </select>)
                        }
                       
                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Técnica">Visita Técnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className="status">
                            <input type="radio" name="radio" value="Aberto" onChange={handleOptionChange} checked={ status === 'Aberto'} />
                            <span>Em aberto</span>
                            
                            <input type="radio" name="radio" value="Progresso" onChange={handleOptionChange} checked={ status === 'Progresso'} />
                            <span>Progresso</span>
                            
                            <input type="radio" name="radio" value="Atendido" onChange={handleOptionChange} checked={ status === 'Atendido'} />
                            <span>Atendido</span>
                         </div>
                        
                        <label>Complemento</label>
                        <textarea type="text" placeholder="Descreva seu problema (opcional)."value={complemento} onChange={(e) => setComplemento(e.target.value)}/>

                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}