import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "roblox-api-key"?: SecurityAuthentication;
    "roblox-auth-cookie"?: SecurityAuthentication;
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "roblox-api-key"?: ApiKeyConfiguration,
    "roblox-auth-cookie"?: ApiKeyConfiguration,
    // TODO: "roblox-oauth2"?: HttpBearerConfiguration
}

/**
 * Applies apiKey authentication to the request context.
 */
export class OpenCloudApiKeyAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}
  
    public getName(): string {
      return "roblox-api-key";
    }
  
    public applySecurityAuthentication(context: RequestContext): void {
      context.setHeaderParam("x-api-key", this.apiKey);
    }
}

export class RobloxSecurityAccountCookieAuthentication implements SecurityAuthentication {
    /**
     * Configures this authentication cookie with the necessary properties
     *
     * @param cookie: The authentication cookie to be used for every request
     */
    public constructor(private cookie: string) {}
  
    public getName(): string {
      return "roblox-security";
    }
  
    public applySecurityAuthentication(context: RequestContext): void {
      context.addCookie(".ROBLOSECURITY", this.cookie);
    }
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    if (config["roblox-api-key"]) {
        authMethods["roblox-api-key"] = new OpenCloudApiKeyAuthAuthentication(
            config["roblox-api-key"]
        );
        authMethods["default"] = authMethods["roblox-api-key"]
    }
    if (config["roblox-auth-cookie"]) {
        authMethods["roblox-auth-cookie"] = new RobloxSecurityAccountCookieAuthentication(
            config["roblox-auth-cookie"]
        )
        authMethods["default"] = authMethods["roblox-auth-cookie"]
    }

    return authMethods;
}