import { DynamicModule, HttpModule, Module, Provider } from "@nestjs/common";
import {
  MY_LIB_MODULE_OPTIONS,
  MyLibModuleAsyncOptions,
  MyLibModuleOptions,
  MyLibModuleOptionsFactory
} from "./my-lib-options.interface";
import { MyLibService } from "./my-lib.service";

@Module({
  providers: [MyLibService]
})
export class MyLibModule {
  static register(options: MyLibModuleOptions): DynamicModule {
    // This is easy:
    return {
      module:  MyLibModule,
      imports: [
        HttpModule.register({
          url:     options.externalApiUrl,
          timeout: options.timeout
        })
      ]
    };
  }

  static registerAsync(options: MyLibModuleAsyncOptions): DynamicModule {
    // But how to import other modules here and pass in the options?
    return {
      module:    MyLibModule,
      imports:   [
        ...options.imports,
        // TODO: How?
        // HttpModule.register({
        //   url:     options.externalApiUrl,
        //   timeout: options.timeout
        // })
      ],
      providers: [...this.createAsyncProviders(options)]
    };
  }

  private static createAsyncProviders(options: MyLibModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide:  options.useClass,
        useClass: options.useClass
      }
    ];
  }

  private static createAsyncOptionsProvider(options: MyLibModuleAsyncOptions): Provider {
    if (options.useFactory) {
      return {
        provide:    MY_LIB_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject:     options.inject || []
      };
    }
    return {
      provide:    MY_LIB_MODULE_OPTIONS,
      useFactory: async (optionsFactory: MyLibModuleOptionsFactory) => await optionsFactory.createOptions(),
      inject:     [options.useExisting || options.useClass]
    };
  }
}
