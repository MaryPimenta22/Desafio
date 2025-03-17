const sql = require("mssql");

const config = {
  user: "sa",
  password: "87051175Ma@",
  server: "localhost", // ou IP do servidor
  database: "todolist",
  options: {
    encrypt: false, // true se estiver usando Azure
    trustServerCertificate: true,
  },
};

async function connectDB() {
  try {
    await sql.connect(config);
    console.log("✅ Conectado ao banco de dados!");
  } catch (err) {
    console.error("❌ Erro ao conectar:", err);
  }
}

connectDB();

