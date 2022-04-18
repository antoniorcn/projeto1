const express = require('express');
const pg = require('pg');
const port = 80;
const app = express();

const pool = new pg.Pool(
    {
        connectionString: 
        "postgres://fivrtpgwuangyi:c81fab4e020e53629101c422750d6d7e881a1b33a130d28df2a3f437eaeb2303@ec2-3-233-43-103.compute-1.amazonaws.com:5432/d1mjgmpk8o2peb",
        ssl: { 
            rejectUnauthorized: false
        }
    }
);

app.set('port', port);

app.route('/').get((requisicao, resposta) => {
  console.log("Recebida requisição na /");
  resposta.send("Ola...");
});


app.listen(port, () => {
  console.log("Servidor foi iniciado");
})
