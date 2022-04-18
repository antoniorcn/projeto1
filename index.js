const express = require('express');
const pg = require('pg');
const port = 80;
const app = express();

const pool = new pg.Pool(
    {
        connectionString: 
        "postgres://gcvjknfaoqznok:7e094e2429545dc989e67a777214f0c161dcde959593772044e3d0631313d4ce@ec2-44-194-4-127.compute-1.amazonaws.com:5432/de7platbov0pup",
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

app.route('/database').get((req, res)=> { 
    let sqlQuery = "DROP TABLE IF EXISTS contatos; ";
    sqlQuery += "CREATE TABLE contatos (";
    sqlQuery += " nome char(100), ";
    sqlQuery += " telefone char(50) ";
    sqlQuery += ");";

    pool.query(sqlQuery, (err, dbres) => { 
        console.log("Executando reset de banco de dados");
        if (err) { 
            res.status(500).send(err);
        } else { 
            res.status(200).send("Banco de dados resetado");
        }
    })

    console.log("Query foi enviada para a execução");
});


app.listen(port, () => {
  console.log("Servidor foi iniciado");
})
