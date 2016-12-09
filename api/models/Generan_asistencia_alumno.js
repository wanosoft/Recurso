/**
 * Generan_asistencia_alumno.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  	  	id_asis_alumn: {
			type: 'Integer',
			primaryKey: true
		},

		matricula: {
			type: 'string',
			required: true
		},

		id_asistencias: {
			type: 'Integer'
			//foreignKey: true
		}
  	}
};

