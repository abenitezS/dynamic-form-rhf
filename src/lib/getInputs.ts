import * as Yup from "yup";
import { AnyObject } from "yup/lib/types";
import { FormSection, InputProps } from '../types';
import { forms } from '../lib';

type YupBoolean = Yup.BooleanSchema<boolean | undefined, AnyObject, boolean | undefined>
type YupString = Yup.StringSchema<string | undefined, AnyObject, string | undefined>
type YupNumber = Yup.NumberSchema<number | undefined, AnyObject, number | undefined>


const generateValidations = (field: InputProps): YupBoolean | YupString | YupNumber | null => {

    if (!field.validations) return null

    let schema = Yup[field.typeValue || 'string' || 'number']()
    const namePattern = /^[aA-zZ\s]+$/ as RegExp
    const numberPattern = /^[0-9]+$/ as RegExp
    const razonPattern = /^[a-zA-Z0-9-.\s]+$/ as RegExp

    for (const rule of field.validations) {
        switch (rule.type) {
            //valido cuit
            case 'fixLength': schema = (schema as YupNumber).min(rule.value as number, rule.message).max(rule.value as number, rule.message); break;
            case 'positive': schema = (schema as YupString).matches(numberPattern, rule.message)
            //razon social ()
            case 'isRazon': schema = (schema as YupString).matches(razonPattern, rule.message); break;
            //valido nombre 
            case 'isName': schema = (schema as YupString).matches(namePattern, rule.message); break;
            case 'minLength': schema = (schema as YupString).min(rule.value as number, rule.message); break;
            //valido mail
            case 'isEmail': schema = (schema as YupString).email(rule.message); break;
            //valido telefono
            case 'nullable': schema = (schema as YupString).notRequired()
            default: schema = schema.required(rule.message); break;
        }
    }

    return schema
}


export const getInputs = <T>(section: FormSection) => {

    let initialValues: { [key: string]: any } = {};

    let validationsFields: { [key: string]: any } = {};

    for (const field of forms[section]) {

        initialValues[field.name] = field.value;

        if (!field.validations) continue;

        const schema = generateValidations(field)

        validationsFields[field.name] = schema;
    }

    return {
        validationSchema: Yup.object({ ...validationsFields }),
        initialValues: initialValues as T,
        inputs: forms[section],
    };

};
