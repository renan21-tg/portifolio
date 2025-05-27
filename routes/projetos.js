const express = require("express");
const router = express.Router();
const { Projeto } = require("../models/");

// Listar projetos
router.get("/", async (req, res) => {
  const projetos = await Projeto.findAll();
  res.render("projetos/index", { projetos });
});

// Formulário
router.get("/novo", (req, res) => {
  res.render("projetos/create");
});

// Cadastro
router.post("/novo", async (req, res) => {
  const { nome, descricao, link } = req.body;
  await Projeto.create({ nome, descricao, link });
  res.redirect("/projetos");
});

// Deletar
router.delete('/:id', async (req, res) => {
  try {
    await Projeto.destroy({ where: { id: req.params.id } });
    res.redirect('/projetos');
  } catch (error) {
    console.error('Erro ao excluir projeto:', error);
    res.status(500).send('Erro ao excluir projeto');
  }
});

module.exports = router;