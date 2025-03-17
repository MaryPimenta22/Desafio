require("dotenv").config();
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use("/api/tasks", taskRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
