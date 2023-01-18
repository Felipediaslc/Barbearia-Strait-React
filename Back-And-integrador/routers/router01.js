
  const  { Router} =  require("express");
  const routs = Router()
  const userCtrl = require("../controllers/controlluserbarb")
  const agendamentoCtrl = require("../controllers/controllagendbarb")
  const admCtrl = require("../controllers/controlladmsbarb")
  const servicoCtrl = require("../controllers/controllservicobarb")
  const planoCtrl = require("../controllers/controllplanosbarb")
  const funcionCtrl = require("../controllers/controllfunciobarb")
  
  
  
  
  routs.get("/usuarios",userCtrl.getAllUser);
  routs.post("/usuarios",userCtrl.createUser );
  routs.put("/usuarios/:id",userCtrl.updateUser);
  routs.get("/usuarios/:id",userCtrl.getuniqueUser);
  routs.delete("/usuarios/:id",userCtrl.deleteUser);
  routs.post("/usuarios/login",userCtrl.loginUser);

  routs.get("/agendamentos",agendamentoCtrl.getAllAgend);
  routs.post("/agendamentos",agendamentoCtrl.createAgend );
  routs.get("/agendamentos/:id",agendamentoCtrl.getuniqueAgend);
  routs.delete("/agendamentos/:id",agendamentoCtrl.deleteAgend);

  routs.get("/adms",admCtrl.getAllAdm);
  routs.post("/adms",admCtrl.createAdm );
  routs.put("/adms/:id",admCtrl.updateAdm);
  routs.get("/adms/:id",admCtrl.getuniqueAdm);
  routs.delete("/adms/:id",admCtrl.deleteAdm);
  routs.post("/adms/login",admCtrl.loginAdm);

  routs.get("/servicos",servicoCtrl.getAllServ);
  routs.post("/servicos",servicoCtrl.createServ );
  routs.get("/servicos/:id",servicoCtrl.getuniqueServ);

  routs.get("/planos",planoCtrl.getAllPlano);
  routs.post("/planos",planoCtrl.createPlano );
  routs.get("/planos/:id",planoCtrl.getuniquePlano);



  routs.get("/funcionarios",funcionCtrl.getAllFuncion);
  routs.post("/funcionarios",funcionCtrl.createFuncion );
  routs.put("/funcionarios/:id",funcionCtrl.updateFuncion);
  routs.get("/funcionarios/:id",funcionCtrl.getuniqueFuncion);
  routs.delete("/funcionarios/:id",funcionCtrl.deleteFuncion);


  module.exports = routs;