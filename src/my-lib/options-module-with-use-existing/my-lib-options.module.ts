import { Module } from "@nestjs/common";
import { MODULE_OPTIONS } from "../my-lib-options.interface";

@Module({
  providers: [
    {
      provide:     MODULE_OPTIONS,
      useExisting: MODULE_OPTIONS
    }
  ],
  exports: [
    MODULE_OPTIONS,
  ],
})
export class MyLibOptionsModule {}
