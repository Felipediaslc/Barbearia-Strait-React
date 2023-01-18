const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllFuncion = async (req, res) => {
    const funcionario = await prisma.funcionarios.findMany({
      // include: { disciplinas: false },
    });
    res.send(funcionario);
  }

const createFuncion = async (req, res) => {
    try {
      const data = req.body;
    //  data.disciplinas = { create: [req.body.disciplinas] };
      const insert = await prisma.funcionarios.create({ data });
      res.send(insert); 
    } catch (err) {
      console.log(err);
    }
  }


 const updateFuncion = async (req, res) => {
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
      const result = await prisma.funcionarios.update({ where: { id }, data });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniqueFuncion = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.funcionarios.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

const deleteFuncion = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.funcionarios.delete({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    getAllFuncion,
    createFuncion,
    updateFuncion,
    getuniqueFuncion,
    deleteFuncion
  };