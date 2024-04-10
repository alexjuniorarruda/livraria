'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Autor_Livro', [{
      autor_id: 1,
      livro_id: 1
    }, {
      autor_id: 4,
      livro_id: 2
    }, {
      autor_id: 2,
      livro_id: 3
    }, {
      autor_id: 3,
      livro_id: 3
    }], {});
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Autor_Livro', null, {});
    
  }
};
