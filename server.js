const express = require('express');
const app = express();
const PORT = 3000;
const { version } = require('./package.json');

app.get('/', (req, res) => {
  //res.send(`<h1>🚀 Versión ${version} de la aplicación - Estable y Funcionando</h1>`);
  res.send(`<h1>🚨 Versión ${version} - TODO ESTÁ ROTO EN PRODUCCIÓN</h1>`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});