import { DynamicModule, Module } from "@nestjs/common";
import { MY_LIB_MODULE_OPTIONS, MyLibModuleOptions } from "./my-lib-options.interface";

@Module({})
export class MyLibOptionsModule {
  static register(options: MyLibModuleOptions): DynamicModule {
    return {
      module:    MyLibOptionsModule,
      providers: [
        {
          provide:  MY_LIB_MODULE_OPTIONS,
          useValue: options
        },
      ],
      exports:   [
        MY_LIB_MODULE_OPTIONS,
      ],
    };
  }
}
