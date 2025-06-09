const Aluno = require('../models/alunoModel');
const Curso = require('../../curso/models/cursoModel');
const { where } = require('sequelize');

class AlunoController {
  static async criar(req, res) {
    try {
      const { matricula, nome, cod_curso } = req.body;

      if (matricula && nome && cod_curso) {
        const aluno = await Aluno.create({ matricula, nome, cod_curso });
        res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso', aluno });
      } else {
        res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
      }
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  static async listar(req, res) {
    try {
      const alunos = await Aluno.findAll();

      if (alunos.length > 0) {
        res.status(200).json(alunos);
      } else {
        res.status(200).json({ mensagem: 'Nenhum aluno encontrado' });
      }
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { matricula } = req.params;
      const { nome, cod_curso } = req.body;

      if (matricula && nome && cod_curso) {
        const [atualizado] = await Aluno.update(
          { nome, cod_curso },
          { where: { matricula } }
        );

        if (atualizado === 0) {
          return res.status(404).json({ mensagem: 'Aluno não encontrado ou dados iguais aos anteriores' });
        }

        res.status(200).json({ mensagem: 'Aluno atualizado com sucesso' });
      } else {
        res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
      }
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { matricula } = req.params;

      if (!matricula) {
        return res.status(400).json({ mensagem: 'Matrícula não informada' });
      }

      const aluno = await Aluno.findByPk(matricula);

      if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
      }

      await aluno.destroy();
      res.status(200).json({ mensagem: 'Aluno deletado com sucesso' });

    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = AlunoController;
