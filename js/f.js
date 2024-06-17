const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://default:XFr4qlPbm1ZT@ep-blue-cake-a4fhksdx.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
});

const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString();
};

const query = {
  text: `INSERT INTO tabela (id, nome, descricao, criado_em) VALUES ($1, $2, $3, $4)`,
  values: [232, 'Johnp Doe', 'johndosdfe@example.com', getCurrentDate()],
};

pool.query(query, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Inserted ${result.rowCount} row(s)`);
});


function select(){
    const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://default:XFr4qlPbm1ZT@ep-blue-cake-a4fhksdx.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
});

const query = {
  text: "SELECT * FROM tabela",
};

pool.query(query, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result.rows); // Imprime os resultados da consulta
});
}