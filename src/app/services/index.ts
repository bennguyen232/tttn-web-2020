import axios from 'axios';

import {AccountService} from './AccountService';
import {ProjectService} from './ProjectService';
import {AnotherService} from './AnotherService';
import {IssueService} from './IssueService';

import {AccountGateway, ProjectGateway, AnotherGateway, IssueGateway} from '../gateways';

const restConnector = axios.create({baseURL: process.env.REACT_APP_API_URL});

const accountGateway = new AccountGateway(restConnector);
const projectGateway = new ProjectGateway(restConnector);
const anotherGateway = new AnotherGateway(restConnector);
const issueGateway = new IssueGateway(restConnector);

export const accountService = new AccountService(accountGateway);
export const projectService = new ProjectService(projectGateway);
export const anotherService = new AnotherService(anotherGateway);
export const issueService = new IssueService(issueGateway);
