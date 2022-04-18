const express = require('express');
const port = 80;
const app = express();

app.set('port', port);

app.route('/').get((requisicao, resposta) => {
  console.log("Recebida requisição na /");
  resposta.send("Ola...");
});


app.listen(port, () => {
  console.log("Servidor foi iniciado");
})
