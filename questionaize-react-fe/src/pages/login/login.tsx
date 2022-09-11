import { useDispatch } from 'react-redux';
import './login.scss';
import { useState, useEffect } from 'react';
import authService from '@core/services/auth.service';


const tailLayout = {
  wrapperCol: { span: 24 },
  style: { marginTop: '50px' },
};

export default function Login() {

  const onFinish = async (values: any) => {
    //Login
    const payload = {


    }
    const response = await authService.getToken(payload)
    if (response) {
      //dosomething

      //GetProvider

      //Redirect to Main Page
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <></>
  );
}
