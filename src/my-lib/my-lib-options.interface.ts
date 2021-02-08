import { ModuleMetadata, Type } from "@nestjs/common";

export const MY_LIB_MODULE_OPTIONS = "MY_LIB_MODULE_OPTIONS";

export interface MyLibModuleOptions {
  externalApiUrl: string;
  timeout: number;
}

export interface MyLibModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<MyLibModuleOptionsFactory>;
  useClass?: Type<MyLibModuleOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<MyLibModuleOptions> | MyLibModuleOptions;
  inject?: any[];
}

export interface MyLibModuleOptionsFactory {
  createOptions(): Promise<MyLibModuleOptions> | MyLibModuleOptions;
}
