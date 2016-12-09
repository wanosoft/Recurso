/**
 * Inventario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		id_inventario: {
			type: 'Integer',
			primaryKey: true
		},

		nombre: {
			type: 'string',
			required: true
		},

		unidad: {
			type: 'Integer',
			required: true
		},

		cantidad: {
			type: 'Integer',
			required: true
		},

		peso: {
			type: 'float',
			required: true
		},

		caducidad: {
			type: 'date',
			required: true
		},

		alerta: {
			type: 'string',
			required: true
		},

		sustancia: {
			type: 'string',
			required: true
		}
  	}
};

