const Aluno = require('./aluno/model/alunoModel');
const Curso = require('./curso/model/cursoModel');

Aluno.belongsTo(Curso,
    {
        foreignKey: 'cod_curso',
        targetKey: 'cod_curso'
    }
);
Curso.hasMany(Aluno,
    {
        foreignKey: 'cod_curso',
        sourceKey: 'cod_curso'
    }
);
module.exports = {
    Aluno, Curso
}