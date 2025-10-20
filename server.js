import express from "express";
import dotenv from "dotenv";
import petshopRoutes from "./src/routes/petshopRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(" Servidor funcionando...");
});

app.use("/pets", petshopRoutes);

app.listen(serverPort, () => {
  console.log(` Servidor rodando em http://localhost:${serverPort} 🚀`);
});