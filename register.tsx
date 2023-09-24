import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    age: yup.string().required("Idade é obrigatória"),
    addres: yup.string().required("Endereço é obrigatório"),

})