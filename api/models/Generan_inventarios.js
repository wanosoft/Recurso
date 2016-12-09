/**
 * Generan_inventarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		id_gen_tratam: {
			type: 'Integer',
			primaryKey: true
		},

		id_inventario: {
			type: 'Integer',
			required: true
		},

		id_t: {
			type: 'Integer',
			//foreignKey: true
		},

		dosis: {
			type: 'Integer',
			required: true
		}
  	}
};

