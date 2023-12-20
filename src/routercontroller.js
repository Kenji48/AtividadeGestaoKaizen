
const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
let dadosRecebidos =[];

app.post('/dados', (req, res) => {
  console.log(req.body.array); 
  dadosRecebidos=req.body.array;
  res.send('Dados recebidos!');
});

router.get("/valores", function (req, res) {
  if (dadosRecebidos) {
    res.send(dadosRecebidos);}else{
    res.send('Nenhum dado disponível');
  }
});
app.use(router); 

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(3000);

