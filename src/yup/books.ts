import * as yup from 'yup';

export const yupCreateBookInput = yup.object().shape({
  name: yup.string().required(),
  amount: yup.number().required().positive().integer(),
  imageUrl: yup.string().url(),
});

export const yupUpdateBookAmountById = yup.object().shape({
  amount: yup.number().required().positive().integer(),
});
