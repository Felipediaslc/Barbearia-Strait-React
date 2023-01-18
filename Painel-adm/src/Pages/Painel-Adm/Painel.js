import React, { useEffect, useState } from 'react';

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import MenuPainel from "../../Componente/Manu-painel/MenuPainel";

import MenuVertival from "../../Componente/Menu-Vertical/MenuVertical";
import Routes from "../../Routes";
import Resume from "../../Componente/Resume/index";


const Painel = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);
    
  return (
    <>
    
      <MenuPainel />
      <MenuVertival />
      <Resume
        income={income}
        expense={expense}
        total={total}
        transactionsList={transactionsList}
      />
      <Routes />
   

    <ToastContainer />
  </>
  )
}

export default Painel
