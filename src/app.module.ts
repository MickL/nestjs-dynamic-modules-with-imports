import { Module } from "@nestjs/common";
import { MyLibModule } from "./my-lib/my-lib.module";

@Module({
  imports:     [
    MyLibModule.register({
      externalApiUrl: "http://localhost:1234",
      timeout:        5000,
    })
  ],
  controllers: [],
  providers:   []
})
export class AppModule {
}
