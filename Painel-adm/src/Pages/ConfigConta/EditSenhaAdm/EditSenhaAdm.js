import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import {Link, useParams, useNavigate } from 'react-router-dom'
import './EditSenhaAdm.css'

const EditSenhaAdm = () => {
    const [senhaAdms, setSenhaAdms] = useState("")
    const { id } = useParams()
    const navigate = useNavigate();
    
    useEffect(() => {
        buscarSenha()
      }, [])
    
      const buscarSenha = async () => {
          const retorno = await axios.get(`http://localhost:3001/adms/${id}`)
          setSenhaAdms(retorno.data.senhaAdms)
        
      }
    
      const editSenha = async (event) => {
          event.preventDefault()
          const adm = {
            senhaAdm: senhaAdms,
        
          }
          const respost = await axios.put(`http://localhost:3001/adms/${id}`, adm)
          if (respost.status === 200) {
              navigate("/");
          }
      }
  return (
    <div className='edit-configsenha'>
    <div className="edit-senha-edit">
    <span>Editar Senha</span>
        <div className="edit-senha01">                 
    <input  type="text"
        name="senha"
        placeholder="Senha"
        value={senhaAdms}
        onChange={(event) => setSenhaAdms(event.target.value)} 
        required />
    </div>
    <div className="edit-senha02">
    <input placeholder="Confirmar"  type="text" required />            
    </div>

    <div className='button-edit-senha'>
    <Link to="/configconta">
    <button onClick={()=>editSenha() } >Atualizar</button>
    </Link>
     </div>
    </div>
    </div>
  )
}

export default EditSenhaAdm
