# NestJS Sandbox: Dynamic modules with that import other dynamic modules

This is a sandbox for figuring out how to pass (async) config to a dynamic module and configuring another dynamic module with it.

The example is simplified and uses just a `.register()` function but in real life there would be the analog for `.registerAsync()`

Feel free to make PR's or discuss in the issues or at Stackoverflow. I would be very happy about each and every help!

Stackoverflow question: https://stackoverflow.com/questions/65968652/nest-cant-resolve-dependencies-when-importing-a-module-with-registerasync/65981401?noredirect=1

Article about creating dynamic modules: https://dev.to/nestjs/advanced-nestjs-how-to-build-completely-dynamic-nestjs-modules-1370


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
