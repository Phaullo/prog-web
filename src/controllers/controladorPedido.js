exports.criarPedido = async (req, res) => {
    try {
      res.status(201).json( {"res" : "ok"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };