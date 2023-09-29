const areandina = require("../assets/universidades/areandina.png");
const compensar = require("../assets/universidades/compensar.png");
const uniremington = require("../assets/universidades/uniremington.png");
const unitec = require("../assets/universidades/unitec.png");
const uvirtual = require("../assets/universidades/uvirtual.png");

const universidadesData = [
  {
    nombre: "Fundación Universitaria del Área Andina",
    imagen: areandina,
    descuento: "% Descuento 1",
  },
  {
    nombre: "Corporación Universitaria Unitec",
    imagen: unitec,
    descuento: "% Descuento 2",
  },
  {
    nombre: "Universitaria Virtual Internacional",
    imagen: uvirtual,
    descuento: "% Descuento 3",
  },
  {
    nombre: "Corporación Universitaria Remington",
    imagen: uniremington,
    descuento: "% Descuento 4",
  },
  {
    nombre: "Fundación Universitaria Compensar",
    imagen: compensar,
    descuento: "% Descuento 5",
  },
];

module.exports = universidadesData;