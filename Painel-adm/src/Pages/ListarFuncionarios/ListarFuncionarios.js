import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ListarFuncionarios.css'

const ListarFuncionarios = () => {
    const [funcionarios, setFuncionarios] = useState([])
    useEffect(() => {
        recuperarFuncionarios()
      
      }, []) 
    
const recuperarFuncionarios = async () => {
    const funcio = await axios.get('http://localhost:3001/funcionarios')
  
    setFuncionarios(funcio.data)
  }
  
  const preencheTabelaFuncionarios = () => {
  return funcionarios.map((funcionario) => (
      <tr>
          
          <td>{funcionario.nomeFun}</td> 
          <td>{funcionario.telefoneFun}</td>                    
          <td>{funcionario.ruaAv}</td>                  
          <td>{funcionario.numEnd}</td>                  
          <td>{funcionario.bairro}</td>                  
      </tr>
    ))
  }
  return (
    <div className='get-funcion'>
    <div className='list-funcionarios'>
    <h2 id='uso'>Funcionários</h2>   
          { funcionarios.length > 0?<table  >
              <thead >
                  <tr>
                    
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th>Av./Rua</th>
                  <th>Nº</th>
                  <th>Bairro</th>
                 
                      
                  </tr>
              </thead>
              <tbody>
              {preencheTabelaFuncionarios()}
             
              
              </tbody>
          </table>:"Carregando funcionários..."}
          
    </div> 
    </div>
  )
}

export default ListarFuncionarios
