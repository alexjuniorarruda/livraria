'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Assunto_Livro', [{
      assunto_id: 1,
      livro_id: 1
    }, {
      assunto_id: 2,
      livro_id: 1
    }, {
      assunto_id: 1,
      livro_id: 2
    }, {
      assunto_id: 2,
      livro_id: 2
    }, {
      assunto_id: 3,
      livro_id: 2
    }, {
      assunto_id: 4,
      livro_id: 2
    }, {
      assunto_id: 1,
      livro_id: 3
    }, {
      assunto_id: 2,
      livro_id: 3
    }, {
      assunto_id: 4,
      livro_id: 3
    }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Assunto_Livro', null, {});

  }
};
