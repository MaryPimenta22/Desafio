const express = require("express");
const router = express.Router();
const sql = require("mssql");
const { connectDB } = require("../config/db");

// Rota para listar todas as tarefas
router.get("/", async (req, res) => {
  try {
    let pool = await connectDB();
    let result = await pool.request().query("SELECT * FROM Tasks");
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send("Erro ao buscar tarefas");
  }
});

// Rota para adicionar uma nova tarefa
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    let pool = await connectDB();
    await pool.request()
      .input("title", sql.VarChar, title)
      .input("description", sql.VarChar, description)
      .query("INSERT INTO Tasks (title, description) VALUES (@title, @description)");
    
    res.status(201).send("Tarefa adicionada com sucesso");
  } catch (error) {
    res.status(500).send("Erro ao adicionar tarefa");
  }
});

module.exports = router;
