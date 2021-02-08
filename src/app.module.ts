import { Module } from "@nestjs/common";
import { MyLibModule } from "./my-lib/my-lib.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "./my-lib/configuration";

@Module({
  imports:     [
    // // This works:
    // MyLibModule.register({
    //   externalApiUrl: "http://localhost:1234",
    //   timeout:        5000,
    // }),

    // This does not work:
    ConfigModule.forRoot({ load: [configuration] }),
    MyLibModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        externalApiUrl: configService.get<string>("externalApiUrl"),
        timeout:        configService.get<number>("timeout")
      }),
      inject:     [ConfigService],
      imports:    [ConfigModule]
    })
  ],
  controllers: [],
  providers:   []
})
export class AppModule {
}
