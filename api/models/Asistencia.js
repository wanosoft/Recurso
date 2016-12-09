/**
 * Asistencia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		id_asistencia: {
			type: 'Integer',
			primaryKey: true
		},

		fecha_horario: {
			type: 'datetime',
			required: true
		},

		motivo: {
			type: 'string',
			required: true
		},

		id_hc: {
			type: 'Integer'
			//foreignKey: true
		}
  	}
};

