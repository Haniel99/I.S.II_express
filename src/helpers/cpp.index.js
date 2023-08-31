
const { Rol, Department } = require("../app.model");

/**
 * Esta funcion recibe un body para verificar si existe algun tipo
 * de filtro, ejemplo del body:
 * {
 *  "order_by": "nombre", //Para ordenar por el tipo de columna
 *  "type_order": true //Es obligatorio que este, true para asc
 * }
 * 
 * {
 *  "condition":{ "rol_id": 1 } // Para mostrar datos con ese rol
 * }
 * {
 *  "condition":{ "departamento_id": 2 } // Para mostrar datos con ese rol
 * }
 * En caso de querer ordenar y ademas solo mostrar los de un departamento o rol
 * {
 *  "order_by": "salario",
 *  "type_order": true,
 *  "condition": {
 *    "rol_id": 2
 *  }
 * }
 * @returns {options}
 */
const prepareQuery = (actions) => {
  let options = {
    include: [
      {
        model: Rol,
        as: "rol",
      },
      {
        model: Department,
        as: "departamento",
      },
    ],
    limit: 10,
    offset: 0,
  };
  if (!actions) {
    return options;
  }

  options.offset = actions.offset || 0;

  if (actions.order_by) {
    options.order = [[actions.order_by, actions.type_order ? "ASC" : "DESC"]];
  }

  if (actions.condition) {
    options.where = actions.condition;
  }
  return options;
};

module.exports = {
  prepareQuery,
};
