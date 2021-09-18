import express from 'express';

const routes = express.Router();

import SignInController from './app/controllers/signIn';
import SignUpController from './app/controllers/signUp';

const signUpController = new SignUpController();
const signInController = new SignInController();

// rotas da API
routes.post('/user/signIn', signInController.show);
routes.post('/user/signUp', signUpController.create);

// rotas das páginas
routes.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
routes.get('/entrar', (req, res) => res.sendFile(__dirname + '/views/login.html'))
routes.get('/cadastrar', (req, res) => res.sendFile(__dirname + '/views/signup.html'))

export default routes;