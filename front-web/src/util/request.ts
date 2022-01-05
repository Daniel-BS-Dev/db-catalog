import { useNavigate } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';
import { Category } from 'types/category';
import history from './history';
import qs from 'qs';
import jwtDecode from 'jwt-decode';

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'https://dbcatalog1.herokuapp.com';

//requisição para obter os atibutos todos tipos
export const requestBackend = (config: AxiosRequestConfig) => {
  //pegando token para liberar rotas
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token,
      }
    : config.headers;
  return axios({ ...config, baseURL: BASE_URL, headers });
};

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
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET), // pegando o header authorization
  };

  // corpo da requisição  email senha e gant_type
  const data = qs.stringify({
    // qs e pra transformar o codigo em urlencoded
    ...loginData, //email e senha
    grant_type: 'password',
  });

  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data, // não colequei o data e o headers pq e o mesmo nome
    headers,
  });
};

//GUARDA O MEU TOKEN NO LOCAL STORE
type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
  userId: number;
  email: Category[];
};
//guardar
export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem('authData', JSON.stringify(obj)); //savando o token Json.. e pra tranformar o object em string
};
//obter os dados
export const getAuthData = () => {
  const str = localStorage.getItem('authData') ?? '{}';
  return JSON.parse(str) as LoginResponse; // transformando em obj
};

//AXIOS INTERCEPTORS PARA DIRECIONAR BASEADO NO ERRO
axios.interceptors.request.use(
  function (config) {
    
    return config;
  },
  function (error) {
  
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      history.push("/admin/auth");
      document.location.reload();
      console.log('voce não esta logado');
    } 

    if (error.response.status === 403) {
      history.push("/products");
      document.location.reload();
      console.log('login não atorizado');
    }
    return Promise.reject(error);
  }
);

//pegando informações do token
type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

type TokenData = {
  exp: number,
  user_name:string,
  authorities: Role[];
}

export const getTokenData = () : TokenData | undefined => {
  try{
    return jwtDecode(getAuthData().access_token);
  }
  catch(error){
    return undefined;
  }
}

//ESTA AUTENTICADO
export const isAuthenticated = () : boolean => {
  const tokenData = getTokenData();

  return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
}