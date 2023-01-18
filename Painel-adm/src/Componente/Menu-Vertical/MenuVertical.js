import React from 'react'
import { Link } from 'react-router-dom'
import './MenuVertical.css'


const MenuVertical = () => {

  return (
    <div className='painel-nav'>
    <div className="container-drop2">
<button className="btn-drop2"><i className="fa fa-ellipsis-v" aria-hidden="true"></i>
  <ul className="dropdown-drop2">
    <li  ><i className="fa fa-cog" aria-hidden="true"></i><Link to="/configconta">Configurar Conta</Link></li>
    <li   ><i className="fa fa-address-card-o" aria-hidden="true" ></i><Link to="/cadastrarfuncionarios">Cadastrar Funcionário</Link></li>
  
    <li><i className="fa fa-calendar" aria-hidden="true"></i><Link to="/listatendimento">Lista de Atendimento</Link></li>
   
         
  </ul>
</button>
</div>
     <h3>DiasCode.ltda</h3>
     <p className='sub-title'>Gerente</p>
     <h4>Navegação</h4>
     <div className='naveg'>
       <ul  role="menu">
     <li className="user"><i className="fa fa-address-card-o" aria-hidden="true"></i><Link to="/listarusuarios">Usuários</Link></li>
     <li className="funcion"><i className="fa fa-users" aria-hidden="true"></i><Link to="/listarfuncionarios">Funcionários</Link></li>
     <li className="lista"><i className="fa fa-tasks" aria-hidden="true"></i><Link to="/listafazeres">Lista de Tarefas</Link></li>
     <li className="financeiro"><i className="fa fa-usd" aria-hidden="true"></i><Link to="/caixafinancas">Caixa</Link></li>
     
    </ul>
     </div>
     </div>
  )
}

export default MenuVertical
