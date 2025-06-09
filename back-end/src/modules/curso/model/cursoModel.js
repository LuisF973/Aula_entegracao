const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/configDB');


const cursoModel = sequelize.define('Curso', {

   cod_curso:{
    type: DataTypes.STRING(6),
    allowNull: false,
    primaryKey: true,
    validate: {
      is:{
        args:/^[A-Z]\d{5}$/,
        msg: 'O código do curso deve conter 4 letras maiúsculas Deve começar com uma letra seguida de 3 números.'
      }
    }
   },

   nome:{
    type: DataTypes.STRING(100),
    allowNull: false,
   },



})

module.export = cursoModel