import React, { useState } from "react";

import Form from "../../Componente/Form";

const Caixa = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </>
  );
};

export default Caixa;
