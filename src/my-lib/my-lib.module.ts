import { DynamicModule, HttpModule, Module } from "@nestjs/common";
import { MODULE_OPTIONS, ModuleOptions } from "./my-lib-options.interface";

// import { MyLibOptionsModule } from "./use-existing/my-lib-options.module";
import { MyLibOptionsModule } from "./options-module-with-register/my-lib-options.module";

@Module({
  imports:     [],
  controllers: [],
  providers:   []
})
export class MyLibModule {
  static register(options: ModuleOptions): DynamicModule {
    return {
      module:    MyLibModule,
      imports:   [
        MyLibOptionsModule.register(options),
        HttpModule.registerAsync({
          useFactory: ((options: ModuleOptions) => {
            console.log("Works:", options);

            return {
              url:     options.externalApiUrl,
              timeout: options.timeout
            };
          }),
          imports:    [MyLibOptionsModule],
          inject:     [MODULE_OPTIONS]
        })
      ]
    };
  }

  // ... registerAsync() ...
}
