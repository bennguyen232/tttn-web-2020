import axios from 'axios';

import {AccountService} from './AccountService';

import {AccountGateway} from '../gateways';

const restConnector = axios.create({baseURL: process.env.REACT_APP_API_URL});

const accountGateway = new AccountGateway(restConnector);

export const accountService = new AccountService(accountGateway);
