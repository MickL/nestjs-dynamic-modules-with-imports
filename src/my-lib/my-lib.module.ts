import { DynamicModule, HttpModule, Module } from "@nestjs/common";
import { MY_LIB_MODULE_OPTIONS, MyLibModuleOptions } from "./my-lib-options.interface";
import { MyLibOptionsModule } from "./my-lib-options.module";

@Module({})
export class MyLibModule {
  static register(options: MyLibModuleOptions): DynamicModule {
    return {
      module:  MyLibModule,
      imports: [
        MyLibOptionsModule.register(options),
        HttpModule.registerAsync({
          useFactory:     ((options: MyLibModuleOptions) => {
            return {
              url:     options.externalApiUrl,
              timeout: options.timeout
            };
          }),
          inject: [
            MY_LIB_MODULE_OPTIONS,
          ],
          imports: [MyLibOptionsModule]
        })
      ]
    };
  }

  // ... registerAsync() ...
}
