'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Autores', [{
      nome: 'Gil Perini',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'José de Paula Ramos Jr.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Machado de Assis',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Edu Campos',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Autores', null, {});

  }
};
