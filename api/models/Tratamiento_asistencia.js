/**
 * Tratamiento_asistencia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		id_trat_asis: {
			type: 'Integer',
			primaryKey: true
		},

		id_asistencias: {
			type: 'Integer',
			required: true
		},

		id_t: {
			type: 'Integer'
			//foreignKey: true
		}
  	}
};

