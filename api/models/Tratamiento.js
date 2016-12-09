/**
 * Tratamiento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		id_t: {
			type: 'Integer',
			primaryKey: true
		},

		fecha_hora_trat: {
			type: 'datetime',
			required: true
		}
  	}
};

