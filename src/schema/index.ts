import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup.string().required("Esse campo é obrigatório."),
  passworld: yup.string().required("Esse campo é obrigatório.").min(8, 'Coloque 8 caracteres!'),
  email: yup.string().email("Email inválido.").required("Esse campo é obrigatório."),
  tel: yup.string().required("Esse campo é obrigatório."),
  cpf: yup.string().required("Esse campo é obrigatório."),
//   nascimento: yup.string().required("Esse campo é obrigatório."),
})