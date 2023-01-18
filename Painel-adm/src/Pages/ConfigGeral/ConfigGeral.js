import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "./ConfigGeral.css";

const ConfigGeral = () => {
  const notify = () => toast("Xuxinha de Jesus!");

  return (
    <div className="container-configGeral">
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
};

export default ConfigGeral;
