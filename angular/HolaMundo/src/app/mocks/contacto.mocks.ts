import { Icontacto } from "../models/contacto.interface";

//Exportamos una lista de contactos

export const CONTACTOS : Icontacto [] = [
    {
        id:1,
        nombre: 'Martin',
        apellidos: 'San Jose',
        email: 'sanjosem@mail.com',
        edad: 30
    },
    {
        id:2,
        nombre: 'Juan',
        apellidos: 'Garcia Lopez',
        email: 'garcialopezj@mail.com',
        edad: 35
    },
    {
        id:3,
        nombre: 'Natalia',
        apellidos: 'Gimenez',
        email: 'gimenezn@mail.com',
        edad: 32
    }
];