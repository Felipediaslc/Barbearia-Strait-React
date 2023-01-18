const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllAgend = async (req, res) => {
    const agenda = await prisma.agendamentos.findMany({
   
    });
    res.send(agenda);
  }

const createAgend = async (req, res) => {
    try {
      const data = req.body;
   
      const insert = await prisma.agendamentos.create({ data });
      res.send(insert);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniqueAgend = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.agendamentos.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  const deleteAgend = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.agendamentos.delete({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }


  module.exports = {
    getAllAgend,
    createAgend,
    getuniqueAgend,
    deleteAgend
  };