'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Livros', [{
      titulo: 'O Afinador de Passarinhos',
      isbn: '978-85-7480-550-4',
      preco_unitario: 38.2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Até a Margem do Grande Rio',
      isbn: '978-85-7480-575-7',
      preco_unitario: 42.1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Várias Histórias',
      isbn: '978-85-7480-441-5',
      preco_unitario: 38.5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Livros', null, {});

  }
};
