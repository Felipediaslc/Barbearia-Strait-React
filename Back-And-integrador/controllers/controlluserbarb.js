const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllUser = async (req, res) => {
    const usuarios = await prisma.usuarios.findMany({ include:{ agendamentos:true} });
    res.send(usuarios);
  }

const createUser = async (req, res) => {
    try {
      const data = req.body;
   
      const insert = await prisma.usuarios.create({ data });
      res.send(insert);
    } catch (err) {
      console.log(err);
    }
  }


 const updateUser = async (req, res) => {
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
      const result = await prisma.usuarios.update({ where: { id }, data });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniqueUser = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.usuarios.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

const deleteUser = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.usuarios.delete({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }


  const loginUser = async (req, res) => {
    try {
      const { email, senha } = req.body;
      const result = await prisma.usuarios.findFirst({ where: { AND: [{ email:{contains: email}}, {senha:{contains: senha}}] } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

 

  module.exports = {
    getAllUser,
    createUser,
    updateUser,
    getuniqueUser,
    deleteUser,
    loginUser
  };