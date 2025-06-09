const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/configDB');
const alunoRoutes = require('./src/modules/aluno/routes/alunoRoutes');
const cursoRoutes = require('./src/modules/curso/routes/cursoRoutes');
require('dotenv').config();

const port = process.env.PORT

app.use = express.json();
app.use(cors());

app.use('/alunos', alunoRoutes);
app.use('/cursos', cursoRoutes);

sequelize.sync().then(()=>{
    app.listem(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
})