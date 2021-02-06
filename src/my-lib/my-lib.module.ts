import { DynamicModule, HttpModule, Module } from "@nestjs/common";
import { MyLibOptionsModule } from "./my-lib-options.module";
import { MODULE_OPTIONS, ModuleOptions } from "./my-lib-options.interface";

@Module({
  imports:     [],
  controllers: [],
  providers:   []
})
export class MyLibModule {
  static register(options: ModuleOptions): DynamicModule {
    return {
      module:    MyLibModule,
      providers: [
        {
          provide:  MODULE_OPTIONS,
          useValue: options
        }
      ],
      imports:   [
        MyLibOptionsModule,
        // MyLibOptionsModule2.register(options),
        HttpModule.registerAsync({
          useFactory: ((options: ModuleOptions) => {
            console.log("Works:", options);

            return {
              url:     options.externalApiUrl,
              timeout: options.timeout
            };
          }),
          imports:    [MyLibOptionsModule],
          // imports:    [MyLibOptionsModule2],
          inject: [MODULE_OPTIONS]
        })
      ]
    };
  }

  // ... registerAsync() ...
}
