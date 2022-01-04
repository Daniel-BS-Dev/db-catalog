import axios from 'axios';
import qs from 'qs';

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'https://dbcatalog1.herokuapp.com';

//FAZENDO REQUISIÇÃO DE LOGIN
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  //cabeçalho header e content
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded', // o tipo que eu vou receber os dados pego no postman
    Authorization: 'Basic' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET), // pegando o header authorization
  };

  // corpo da requisição  email senha e gant_type
  const data = qs.stringify({
    ...loginData, //email e senha
    grant_type: 'password',
  });

  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data,
    headers,
  });
};
