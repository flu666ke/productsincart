import React from 'react';
import style from './style.module.css';
import { Field, reduxForm } from 'redux-form';
import HeaderCart from '../HeaderCart/HeaderCart';
import { required, minLengthCreator } from './validator';
import { Input } from './formControl';
import { Redirect } from 'react-router-dom';

const minLength8 = minLengthCreator(8);

const LoginForm = (props) => {

  if (props.submitSucceeded) return <Redirect to={'/market'} />

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.field}>
        <Field
          placeholder={'Login'}
          name={'login'}
          component={Input}
          validate={[required, minLength8]}
        />
      </div>
      <div className={style.field}>
        <Field
          placeholder={'Password'}
          name={'password'}
          type={'password'}
          validate={[required, minLength8]}
          component={Input}
        />
      </div>
      <>
        <button className={style.loginBtn} >Submit</button>
      </>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {
  const onSubmit = ({ login, password }) => {
    localStorage.setItem('user', `login: ${login}; password: ${password}`)
  }

  return (
    <div className={style.loginPage}>
      <HeaderCart />
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;