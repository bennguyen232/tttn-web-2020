import {AnotherGateway} from '../gateways';

export class AnotherService {
  private anotherGateway: AnotherGateway;

  constructor(anotherGateway: AnotherGateway) {
    this.anotherGateway = anotherGateway;
  }

  getAllDataFromServer() {
    return this.anotherGateway.getAllDataFromServer();
  }
}
