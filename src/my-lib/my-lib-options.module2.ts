import { DynamicModule, Module } from "@nestjs/common";
import { MODULE_OPTIONS, ModuleOptions } from "./my-lib-options.interface";

@Module({})
export class MyLibOptionsModule2 {
  static register(options: ModuleOptions): DynamicModule {
    return {
      module:    MyLibOptionsModule2,
      providers: [
        {
          provide:  MODULE_OPTIONS,
          useValue: options
        },
      ],
      exports:   [
        MODULE_OPTIONS,
      ],
    };
  }
}
