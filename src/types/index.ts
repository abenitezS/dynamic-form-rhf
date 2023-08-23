import { OptionalObjectSchema, TypeOfShape } from 'yup/lib/object'
import { AnyObject } from 'yup/lib/types';

export type FormSection = 'register' //| 'another'

export interface InputProps {
    type: 'text' | 'radio' | 'email' | 'password' | 'select' | 'checkbox' | 'cuit' | 'razon'
    name: string
    value: string | number | boolean
    placeholder?: string
    label?: string

    typeValue?: 'boolean' | 'number'
    validations?: Validation[]
    options?: Opt[]
}

export interface Opt {
    value: string | number
    desc: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'isTrue' | 'oneOf' | 'fixLength' | 'positive' | 'nullable' | 'maxLength'
    | 'isName' | 'isRazon'
    value?: string | number | boolean
    message: string
    ref?: string
}

export type SchemaForm = OptionalObjectSchema<{
    [x: string]: any;
}, AnyObject, TypeOfShape<{
    [x: string]: any;
}>>

export type CustomInputProps = Omit<InputProps, 'validations' | 'typeValue' | 'value'>