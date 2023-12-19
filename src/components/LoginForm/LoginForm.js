import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  IconWrap,
  LogTitle,
  FormContainer,
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormButton,
} from './LogintForm.styled';
import { CiLock } from 'react-icons/ci';

const formSchema = Yup.object().shape({
  email: Yup.string().min(2, 'Too Short!').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <IconWrap>
        <CiLock
          style={{
            width: '40px',
            height: '40px',
          }}
        />
      </IconWrap>
      <LogTitle>Log In</LogTitle>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          dispatch(logIn(values));
          actions.resetForm();
        }}
      >
        <Form>
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

          <FormButton type="submit">Log in</FormButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};
