const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();





const getAllPreco = async (req, res) => {
    const preco = await prisma.precos.findMany({
      // include: { disciplinas: false },
    });
    res.send(preco);
  }

const createPreco = async (req, res) => {
    try {
      const data = req.body;
    //  data.disciplinas = { create: [req.body.disciplinas] };
      const insert = await prisma.precos.create({ data });
      res.send(insert);
    } catch (err) {
      console.log(err);
    }
  }

 const getuniquePreco = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await prisma.precos.findUnique({ where: { id } });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    getAllPreco,
    createPreco,
    getuniquePreco,
  };