'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Assuntos', [{
      descricao: 'Literatura brasileira',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      descricao: 'Contos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      descricao: 'Fotografia',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      descricao: 'Ilustrado',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Assuntos', null, {});

  }
};
