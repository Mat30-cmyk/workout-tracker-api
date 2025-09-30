console.log("workout-tracker app");

const express = require("express"); // Import express
const app = express(); // Create an instance of express
const { port } = require('./config/env');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use((req, res, next) => {
  console.log('${new Date().toISOString()} - ${req.method} ${req.url}');
  next();
});

// Inicializacion del servidor y primera ruta
app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

app.use('/api', routes);

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});