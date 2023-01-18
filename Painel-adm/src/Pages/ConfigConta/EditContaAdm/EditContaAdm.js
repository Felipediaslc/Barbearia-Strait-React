import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"
import './EditContaAdm.css'

const EditContaAdm = ( ) => {

    const [nomeEmpres, setNomeEmpres] = useState("")
    const [Telefone, setTelefone] = useState("")
    const [ruaAv, setRuaAv] = useState("")
    const [numEnd, setNumEnd] = useState("")
    const [Complemento, setComplemento] = useState("")
    const [Bairro, setiBarro] = useState("")
    const [Cidade, setCidade] = useState("")
    const [senhaAdm, setSenhaAdm] = useState("")
    const { id } = useParams()
    const navigate = useNavigate();
    
    useEffect(() => {
        buscarAdministrador()
      }, [])
    
      const buscarAdministrador = async () => {
          const retorno = await axios.get(`http://localhost:3001/adms/${id}`)
          setNomeEmpres(retorno.data.nomeEmpres)
          setTelefone(retorno.data.Telefone)
          setRuaAv(retorno.data.ruaAv)
          setNumEnd(retorno.data.numEnd)
          setComplemento(retorno.data.Complemento)
          setiBarro(retorno.data.Bairro)
          setCidade(retorno.data.Cidade)
          setSenhaAdm(retorno.data.senhaAdm)
      }
    
      const editAdm = async (event) => {
          event.preventDefault()
          const adm = {
            nomeEmpres: nomeEmpres,
            telefone:Telefone,
            ruaAv: ruaAv,
            numEnd: numEnd,
            complemento:Complemento,
            bairro:Bairro,
            cidade: Cidade,
            senhaAdm:senhaAdm
          }
          const resposta = await axios.put(`http://localhost:3001/adms/${id}`, adm)
          if (resposta.status === 200) {
              navigate("/");
          }
      
       
  return (
    <div   className="edit-configconta" >
      <div className="edit-user-edit">
        <span>Editar Perfil Adm</span>
      <div className='nom-Empresa-edit'>
     <input 
        type="text" 
        name="nomeEmpres" 
        placeholder="Nome empresarial" 
        value={nomeEmpres}
        onChange={(event) => setNomeEmpres(event.target.value)}
                 />
            </div>
     <div className="telefone-edit">
      <input 
        type="text" 
        name="telefone" 
        placeholder="Telefone" 
        value={Telefone}
        onChange={(event) => setTelefone(event.target.value)}
                 /> 
    </div>
    <div className="rua-av-edit">
    <input 
        type="text" 
        name="ruaAv" 
        placeholder="Av./Rua" 
        value={ruaAv}
        onChange={(event) => setRuaAv(event.target.value)}
                 /> 
    </div>
    <div className="num-empres-edit">
    <input 
        type="text" 
        name="numero" 
        placeholder="Nº" 
        value={numEnd}
        onChange={(event) => setNumEnd(event.target.value)}
                 /> 
    </div>
    <div className="complemento-edit">
    <input 
        type="text" 
        name="complemento" 
        placeholder="Complemento" 
        value={Complemento}
        onChange={(event) => setComplemento(event.target.value)}
                 /> 
    </div>
   <div className="bairro-edit">
   <input 
        type="text" 
        name="bairro" 
        placeholder="Bairro" 
        value={Bairro}
        onChange={(event) => setiBarro(event.target.value)}
                 /> 
    </div>
     <div className="cidade-edit">
     <input 
        type="text" 
        name="cidade" 
        placeholder="Cidade" 
        value={Cidade}
        onChange={(event) => setCidade(event.target.value)}
                 /> 
    </div>
     <div className='button-edit'>
    <button onClick={(e) => editAdm(e)}>Atualizar</button>
     </div>
      </div>
      </div>
  );
}
}

export default EditContaAdm
