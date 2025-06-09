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

  try {
    const novoProjeto = await Projeto.create({ nome, descricao, link });

    const aceitaHTML = req.headers.accept && req.headers.accept.includes('text/html');

    if (aceitaHTML) {
      res.redirect("/projetos");
    } else {
      res.status(201).json({ message: "Projeto criado com sucesso", projeto: novoProjeto });
    }
  } catch (error) {
    console.error("Erro ao criar projeto:", error);
    res.status(500).json({ error: "Erro ao criar projeto" });
  }
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