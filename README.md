# NestJS Sandbox: Configurable dynamic modules that import other configurable dynamic modules

This is a sandbox for figuring out how to pass (async) config to a dynamic module and importing/configuring another dynamic module with it.

The example here follows the exact same pattern as modules like [@nestjs/config](https://github.com/nestjs/config/tree/master/lib), [@nestjs/jwt](https://github.com/nestjs/jwt/tree/master/lib), [@nestjs/mongoose](https://github.com/nestjs/mongoose/tree/master/lib), [@nestjs/jwt](https://github.com/nestjs/jwt/tree/master/lib), [@nestjs/common/cache](https://github.com/nestjs/nest/tree/master/packages/common/cache), [@nestjs/common/http](https://github.com/nestjs/nest/tree/master/packages/common/http), etc. and is described in this article: https://dev.to/nestjs/advanced-nestjs-how-to-build-completely-dynamic-nestjs-modules-1370

Feel free to make a PR to solve the issue or [answer the question at Stackoverflow](https://stackoverflow.com/questions/63356440/how-to-import-a-registerasync-in-a-dynamic-nestjs-module). 


## Installation

```bash
$ npm install
# or
$ yarn install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
