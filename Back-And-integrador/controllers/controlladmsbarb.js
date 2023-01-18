const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllAdm = async (req, res) => {
  const adm = await prisma.administradores.findMany({ include:{ funcionarios:true},include:{ planos:true} });
    res.send(adm);
    
  }

const createAdm = async (req, res) => {
    try {
      const data = req.body;
      const enviar = await prisma.administradores.create({ data });
      console.log(enviar);
      res.send(enviar);
    } catch (err) {
      console.log(err);
    }
  }


 const updateAdm = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      
     // data.disciplinas = {   
      //    update: [
      //         {
     //             data: req.body.disciplinas,
    //              where:{
   //                   id: req.body.disciplinas.id
   //               } 
    //          }
//]
  //    };
      const result = await prisma.administradores.update({ where: { id }, data });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniqueAdm = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.administradores.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

const deleteAdm = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.administradores.delete({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  const loginAdm = async (req, res) => {
    try {
      const { email, senhaAdm } = req.body;
      const result = await prisma.administradores.findFirst({ where: { AND: [{ email:{contains: email}}, {senhaAdm:{contains: senhaAdm}}] } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  
  module.exports = {
    getAllAdm,
    createAdm,
    updateAdm,
    getuniqueAdm,
    deleteAdm,
    loginAdm 
  };