import * as yup from "yup";

export const TitleFormSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  author: yup.string().required("Campo obrigatório"),
  publisher: yup.string().required("Campo obrigatório"),
  coverURL: yup.string(),
  cover: yup.mixed().when("coverURL", {
    is: "",
    then: yup.mixed().required("Campo obrigatório"),
  }),
});
