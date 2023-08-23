import { FormSection, InputProps } from '../types';


export const forms: { [K in FormSection]: InputProps[] } =
{

    register: [
        {
            label: "Número de Cuit",
            type: "cuit",
            name: "cuit",
            placeholder: "Número de Cuit",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Debe ingresar cuit"
                },
                {
                    type: "fixLength",
                    value: 11,
                    message: "Cuit debe tener 11 digitos numericos",
                },
                {
                    type: "positive",
                    message: "Debe ser número entero y positivo",

                },
            ],
        },
        {

            label: "Razon Social",
            type: "text",
            name: "razon",
            placeholder: "Razón Social ",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 4,
                    message: "Min. 10 characteres",
                },
                {
                    type: "required",
                    message: "Razón Social es requerido",
                },
                {
                    type: "isRazon",
                    message: 'Razon Social es invalida',

                }

            ],

        },
        {

            label: "Nombre",
            type: "text",
            name: "Nombre",
            placeholder: "Ingrese Nombre",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characteres",
                },
                {
                    type: "required",
                    message: "Nombres is requerido",
                },
                {
                    type: "isName",
                    message: 'Nombre invalido',

                }

            ],

        },
        {

            label: "Apellido",
            type: "text",
            name: "apellido",
            placeholder: "Ingrese Apellido",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characteres",
                },
                {
                    type: "required",
                    message: "Apellido is requerido",
                },
                {
                    type: "isName",
                    message: 'Nombre invalido',

                }

            ],

        },

        {
            label: "Mail oficial",
            type: "email",
            name: "email",
            placeholder: "correo@correo.com",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Mail is requirido"
                },
                {
                    type: "isEmail",
                    message: "Mail no es valido"
                }
            ],

        },
        {
            label: "Teléfono",
            type: "text",
            name: "telefono",
            placeholder: "Teléfono",
            value: "",
            validations: [

                {
                    type: "nullable",
                    message: "",
                },
                {
                    type: "minLength",
                    value: 10,
                    message: "Telefono debe tener al menos 10 digitos",
                },

                {
                    type: "positive",
                    message: "Debe ser número entero y positivo",

                },
            ],
        },

        {

            label: "Domicilio",
            type: "text",
            name: "domicilio",
            placeholder: "Domicilio ",
            value: "",
            validations: [
                {
                    type: "nullable",
                    message: "",
                },

                {
                    type: "isRazon",
                    message: 'Domicilio invalido',

                }

            ],

        },
    ]
}