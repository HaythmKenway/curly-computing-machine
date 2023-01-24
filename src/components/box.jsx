import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './box.css';

export const Form = () => {

  const schema = yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email().required(),
    age: yup.number().positive().integer(),
    pwd: yup.string().min(4).max(10).required(),
    confirmpwd: yup.string().oneOf([yup.ref("pwd"),null]).required(),
  });

  const {register, handleSubmit} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

  };
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name"{...register("name")}/>
      <input type="text" placeholder="email"{...register("email")}/>
      <input type="number" placeholder="age"{...register("age")}/>
      <input type="password" placeholder="pwd"{...register("pwd")}/>
      <input type="password" placeholder="confirm pwd"{...register("confirmpwd")}/>
      <input type="submit"/>
    </form>
  );
};
  