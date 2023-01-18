import React, {useState} from 'react';

import './Planos.css'
import CadastroAdm from '../CadastroAdm/CadastroAdm';





function Planos() {
    const [isCadast, setIsCadast] = useState(false);
  return (
    <div className="containerss">
    <div className="card">
        <div className="card-title">
            <h2>Basic</h2>
            <span className="subtitle">de 1 a 2 profissionais</span>
            <p><i >R$</i><span>50</span>/mês</p>
        </div>
        <div className="card-content">
            <ul>
                <li><i className="fa fa-check-circle"></i>Lista de Usuários</li>
                <li><i className="fa fa-check-circle"></i>Cadastrar Funcionários</li>
                <li><i className="fa fa-check-circle"></i>Lista de Funcionários</li>
                <li><i className="fa fa-times-circle"></i>Lista de Tarefas</li>
                <li><i className="fa fa-times-circle"></i>Lista de Atendimento</li>
                <li><i className="fa fa-times-circle"></i>Controle  Financeiro</li>
               
            </ul>
            <button onClick={() => setIsCadast(true)} id='bt'>Assine já</button>
            {isCadast ? <CadastroAdm onClose={()=> setIsCadast(false)} />: null }
        </div>
    </div>
    <div className="card">
        <div className="card-title">
            <h2>Standard</h2>
            <span className="subtitle">de 5 a 10 profissionais</span>
            <p><i>R$</i><span>100</span>/mês</p>
        </div>
        <div className="card-content">
            <ul>
                <li><i className="fa fa-check-circle"></i>Lista de Usuários</li>
                <li><i className="fa fa-check-circle"></i>Cadastrar Funcionários</li>
                <li><i className="fa fa-check-circle"></i>Lista de Funcionários</li>
                <li><i className="fa fa-check-circle "></i>Lista de Tarefas</li>
                <li><i className="fa fa-check-circle "></i>Lista de Atendimento</li>
                <li><i className="fa fa-times-circle"></i>Controle  Financeiro</li>
                
            </ul>
            <button onClick={() => setIsCadast(true)} id='bt'>Assine já</button>
            {isCadast ? <CadastroAdm onClose={()=> setIsCadast(false)} />: null }
        </div>
    </div>
    <div className="card">
        <div className="card-title">
            <h2>Premium</h2>
            <span className="subtitle">de 11 a 20 profissionais</span>
            <p id='titulo'><i >R$</i><span>180</span>/mês</p>
        </div>
        <div className="card-content">
            <ul>
                <li><i className="fa fa-check-circle"></i>Lista de Usuários</li>
                <li><i className="fa fa-check-circle"></i>Cadastrar Funcionários</li>
                <li><i className="fa fa-check-circle"></i>Lista de Funcionários</li>
                <li><i className="fa fa-check-circle"></i>Lista de Tarefas</li>
                <li><i className="fa fa-check-circle"></i>Lista de Atendimento</li>
                <li><i className="fa fa-check-circle"></i>Controle  Financeiro</li>
               
            </ul>
            <button onClick={() => setIsCadast(true)} id='bt'>Assine já</button>
            {isCadast ? <CadastroAdm onClose={()=> setIsCadast(false)} />: null }
        </div>
    </div>
</div>
  );
}

export default Planos;
