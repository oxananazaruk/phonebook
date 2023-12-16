import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormButton,
} from './RegisterForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string().min(2, 'Too Short!').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="email" component="span" />
          </FormGroup>

          <FormGroup>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </FormGroup>

          <FormGroup>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </FormGroup>

          <FormButton type="submit">Register</FormButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};
