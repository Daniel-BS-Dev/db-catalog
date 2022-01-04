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
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET), // pegando o header authorization
  };

  // corpo da requisição  email senha e gant_type
  const data = qs.stringify({// qs e pra transformar o codigo em urlencoded
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
type Email = {
    id: number,
    authority: string
}

type LoginResponse ={
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
    userFirstName: string,
    userId: number,
    email: Email[]
}
//guardar
export const saveAuthData = (obj : LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(obj)); //savando o token Json.. e pra tranformar o object em string
}
//obter os dados
export const getAuthData = () => {
    const str = localStorage.getItem('authData') ?? '';
    return JSON.parse(str) as LoginResponse; // transformando em obj
}