const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllPlano = async (req, res) => {
    const plano = await prisma.planos.findMany({
      // include: { disciplinas: false },
    });
    res.send(plano);
  }

const createPlano = async (req, res) => {
    try {
      const data = req.body;
    //  data.disciplinas = { create: [req.body.disciplinas] };
      const insert = await prisma.planos.create({ data });
      res.send(insert);
    } catch (err) {
      console.log(err);
    }
  }



 const getuniquePlano = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.planos.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }



  module.exports = {
    getAllPlano,
    createPlano,
    getuniquePlano,
  };