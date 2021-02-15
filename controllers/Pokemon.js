//const pokeData = require('../data/pokedex.json');
const Pokemon = require('../models/Pokemon');

const pokeController = {
  mongoGetAll: async (req, res) => {
    try {
      const dbResult = await Pokemon.find({});
      res.status(200).json({
        code: 200,
        data: dbResult,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).json({
        code: 500,
        message: 'Internal mongodb error',
      });
    }
  },

  mongoGetById: async (req, res) => {
    const { id } = req.params;

    try {
      const dbResult = await Pokemon.find({ id: parseInt(id) });
      res.status(200).json({
        code: 200,
        data: dbResult,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).json({
        code: 500,
        message: 'Internal mongodb error',
      });
    }
  },
  mongoGetInfo: async (req, res) => {
    const { id, info } = req.params;
    try {
      const dbResult = await Pokemon.find({ id: parseInt(id) });
      const dbInfo = dbResult[0][info];
      res.status(200).json({
        code: 200,
        data: dbInfo,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).json({
        code: 500,
        message: 'Internal mongodb error',
      });
    }
  },

  /*
  getAll: async (req, res) => {
    res.status(200).send(pokeData);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const pokemon = pokeData.filter(item => item.id == id);
    res.status(200).send(pokemon);
  },
  getInfo: async (req, res) => {
    const { id, info } = req.params;

    try {
      const pokeId = pokeData.filter(pokemon => pokemon.id == id);
      if (!pokeId[0][info]) res.sendStatus(404);
      else res.status(200).send(pokeId[0][info]);
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  */
};

module.exports = pokeController;