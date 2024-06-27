import { HttpLibrary } from "./http/http";
import {
  Middleware,
  PromiseMiddleware,
  PromiseMiddlewareWrapper,
} from "./apis/middleware";
import { IsomorphicFetchHttpLibrary as DefaultHttpLibrary } from "./http/isomorphic-fetch";
import { BaseServerConfiguration, BasicServerConfiguration } from "./servers";
import {
  configureAuthMethods,
  AuthMethods,
  AuthMethodsConfiguration,
} from "./auth/auth";

export class Configuration {
  readonly baseServer?: BaseServerConfiguration;
  readonly serverIndex: number;
  readonly httpApi: HttpLibrary;
  readonly middleware: Middleware[];
  readonly authMethods: AuthMethods;

  public constructor(
    baseServer: BaseServerConfiguration | undefined,
    serverIndex: number,
    httpApi: HttpLibrary,
    middleware: Middleware[],
    authMethods: AuthMethods,
  ) {
    this.baseServer = baseServer;
    this.serverIndex = serverIndex;
    this.httpApi = httpApi;
    this.middleware = middleware;
    this.authMethods = authMethods;
  }
  
  getServer(basePath: string): BaseServerConfiguration {
    return new BasicServerConfiguration(basePath)
  }
}

/**
 * Interface with which a configuration object can be configured.
 */
export interface ConfigurationParameters {
  /**
   * Default server to use - a list of available servers (according to the
   * OpenAPI yaml definition) is included in the `servers` const in `./servers`. You can also
   * create your own server with the `ServerConfiguration` class from the same
   * file.
   */
  baseServer?: BaseServerConfiguration;

  /**
   * Default index of a server to use from the predefined server list
   */
  serverIndex?: number;

  /**
   * HTTP library to use e.g. IsomorphicFetch. This can usually be skipped as
   * all generators come with a default library.
   * If available, additional libraries can be imported from `./http/*`
   */
  httpApi?: HttpLibrary;

  /**
   * The middlewares which will be applied to requests and responses. You can
   * add any number of middleware components to modify requests before they
   * are sent or before they are deserialized by implementing the `Middleware`
   * interface defined in `./middleware`
   */
  middleware?: Middleware[];
  /**
   * Configures middleware functions that return promises instead of
   * Observables (which are used by `middleware`). Otherwise allows for the
   * same functionality as `middleware`, i.e., modifying requests before they
   * are sent and before they are deserialized.
   */
  promiseMiddleware?: PromiseMiddleware[];
  /**
   * Configuration for the available authentication methods (e.g., api keys)
   * according to the OpenAPI yaml definition. For the definition, please refer to
   * `./auth/auth`
   */
  authMethods?: AuthMethodsConfiguration;
}

/**
 * Provide your `ConfigurationParameters` to this function to get a `Configuration`
 * object that can be used to configure your APIs (in the constructor or
 * for each request individually).
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: server1
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *
 * @param conf partial configuration
 */
export function createConfiguration(
  conf: ConfigurationParameters = {}
): Configuration {
  const authMethods = conf.authMethods || {};
  if (
    !("roblox-api-key" in authMethods) &&
    typeof process !== "undefined" &&
    process.env &&
    process.env.RBX_API_KEY
  ) {
    authMethods["roblox-api-key"] = process.env.RBX_API_KEY;
  }
  if (
    !("roblox-auth-cookie" in authMethods) &&
    typeof process !== "undefined" &&
    process.env &&
    process.env.ROBLOSECURITY
  ) {
    authMethods["roblox-auth-cookie"] = process.env.ROBLOSECURITY;
  }

  const configuration = new Configuration(
    conf.baseServer,
    conf.serverIndex || 0,
    conf.httpApi || new DefaultHttpLibrary(),
    conf.middleware || [],
    configureAuthMethods(authMethods),
  );
  if (conf.promiseMiddleware) {
    conf.promiseMiddleware.forEach((m) =>
      configuration.middleware.push(new PromiseMiddlewareWrapper(m))
    );
  }
  return configuration;
}
