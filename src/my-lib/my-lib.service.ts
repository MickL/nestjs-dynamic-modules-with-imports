import { HttpService, Injectable } from "@nestjs/common";

@Injectable()
export class MyLibService {
  constructor(
    private httpService: HttpService,
  ) {
  }
}
