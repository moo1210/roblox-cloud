import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGamesApiCreateVipServersRequest } from '../models/RobloxGamesApiCreateVipServersRequest';
import { RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse } from '../models/RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse';
import { RobloxGamesApiPrivateServersResponse } from '../models/RobloxGamesApiPrivateServersResponse';
import { RobloxGamesApiVipServerCanInviteResponse } from '../models/RobloxGamesApiVipServerCanInviteResponse';
import { RobloxGamesApiVipServerPermissionsResponse } from '../models/RobloxGamesApiVipServerPermissionsResponse';
import { RobloxGamesApiVipServerResponse } from '../models/RobloxGamesApiVipServerResponse';
import { RobloxGamesApiVipServerSubscriptionResponse } from '../models/RobloxGamesApiVipServerSubscriptionResponse';
import { RobloxGamesApiVipServerUpdatePermissionsRequest } from '../models/RobloxGamesApiVipServerUpdatePermissionsRequest';
import { RobloxGamesApiVipServerUpdateRequest } from '../models/RobloxGamesApiVipServerUpdateRequest';
import { RobloxGamesApiVipServerUpdateSubscriptionRequest } from '../models/RobloxGamesApiVipServerUpdateSubscriptionRequest';
import { RobloxGamesApiVipServerUpdateVoiceSettingsRequest } from '../models/RobloxGamesApiVipServerUpdateVoiceSettingsRequest';
import { RobloxGamesApiVipServerVoiceSettingsResponse } from '../models/RobloxGamesApiVipServerVoiceSettingsResponse';
import { RobloxWebResponsesGamesGameServerResponse } from '../models/RobloxWebResponsesGamesGameServerResponse';

/**
 * no description
 */
export class VipServersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create VIP server for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public async v1GamesVipServersUniverseIdPost(universeId: number, requestBody: RobloxGamesApiCreateVipServersRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("VipServersApi", "v1GamesVipServersUniverseIdPost", "universeId");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("VipServersApi", "v1GamesVipServersUniverseIdPost", "requestBody");
        }


        // Path Params
        const localVarPath = '/v1/games/vip-servers/{universeId}'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "RobloxGamesApiCreateVipServersRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Checks if the private servers are enabled in the specified universe.
     * @param universeId 
     */
    public async v1PrivateServersEnabledInUniverseUniverseIdGet(universeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("VipServersApi", "v1PrivateServersEnabledInUniverseUniverseIdGet", "universeId");
        }


        // Path Params
        const localVarPath = '/v1/private-servers/enabled-in-universe/{universeId}'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get private servers from private server ids
     * @param privateServerIds 
     */
    public async v1PrivateServersGet(privateServerIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'privateServerIds' is not null or undefined
        if (privateServerIds === null || privateServerIds === undefined) {
            throw new RequiredError("VipServersApi", "v1PrivateServersGet", "privateServerIds");
        }


        // Path Params
        const localVarPath = '/v1/private-servers';

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (privateServerIds !== undefined) {
            requestContext.setQueryParam("privateServerIds", ObjectSerializer.serialize(privateServerIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Determines if a user by id is allowed to receive a VIP Server invite from the authenticated user.
     * @param userId The user id.
     */
    public async v1VipServerCanInviteUserIdGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServerCanInviteUserIdGet", "userId");
        }


        // Path Params
        const localVarPath = '/v1/vip-server/can-invite/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get necessary data to generate webpage
     * @param id The VIP Server ID
     */
    public async v1VipServersIdGet(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServersIdGet", "id");
        }


        // Path Params
        const localVarPath = '/v1/vip-servers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateRequest
     */
    public async v1VipServersIdPatch(id: number, request: RobloxGamesApiVipServerUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServersIdPatch", "id");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServersIdPatch", "request");
        }


        // Path Params
        const localVarPath = '/v1/vip-servers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxGamesApiVipServerUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update friend/clan access and allowed friends/clan list
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdatePermissionsRequest
     */
    public async v1VipServersIdPermissionsPatch(id: number, request: RobloxGamesApiVipServerUpdatePermissionsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServersIdPermissionsPatch", "id");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServersIdPermissionsPatch", "request");
        }


        // Path Params
        const localVarPath = '/v1/vip-servers/{id}/permissions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxGamesApiVipServerUpdatePermissionsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates subscription status of a vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateSubscriptionRequest
     */
    public async v1VipServersIdSubscriptionPatch(id: number, request: RobloxGamesApiVipServerUpdateSubscriptionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServersIdSubscriptionPatch", "id");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServersIdSubscriptionPatch", "request");
        }


        // Path Params
        const localVarPath = '/v1/vip-servers/{id}/subscription'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxGamesApiVipServerUpdateSubscriptionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update voice settings for a private server.
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateVoiceSettingsRequest
     */
    public async v1VipServersIdVoicesettingsPatch(id: number, request: RobloxGamesApiVipServerUpdateVoiceSettingsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServersIdVoicesettingsPatch", "id");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("VipServersApi", "v1VipServersIdVoicesettingsPatch", "request");
        }


        // Path Params
        const localVarPath = '/v1/vip-servers/{id}/voicesettings'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxGamesApiVipServerUpdateVoiceSettingsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class VipServersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesVipServersUniverseIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesVipServersUniverseIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebResponsesGamesGameServerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebResponsesGamesGameServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebResponsesGamesGameServerResponse", ""
            ) as RobloxWebResponsesGamesGameServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "15: The price for purchasing this private server has changed. Please refresh the page and try again.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "4: The universe does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "16: We are having a problem completing your purchase. Please try again in a few minutes.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebResponsesGamesGameServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebResponsesGamesGameServerResponse", ""
            ) as RobloxWebResponsesGamesGameServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PrivateServersEnabledInUniverseUniverseIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PrivateServersEnabledInUniverseUniverseIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse", ""
            ) as RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: No universe IDs were specified.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse", ""
            ) as RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PrivateServersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PrivateServersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiPrivateServersResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiPrivateServersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiPrivateServersResponse", ""
            ) as RobloxGamesApiPrivateServersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: The creator of this game has disabled private servers for this game.  34: Invalid request, private server ids cannot be null.  35: Guest users are not allowed.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: You are not the owner of this private server.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The private server is invalid or does not exist.  4: The universe does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiPrivateServersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiPrivateServersResponse", ""
            ) as RobloxGamesApiPrivateServersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1VipServerCanInviteUserIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1VipServerCanInviteUserIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiVipServerCanInviteResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiVipServerCanInviteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerCanInviteResponse", ""
            ) as RobloxGamesApiVipServerCanInviteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "19: The user is does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiVipServerCanInviteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerCanInviteResponse", ""
            ) as RobloxGamesApiVipServerCanInviteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1VipServersIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1VipServersIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiVipServerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiVipServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerResponse", ""
            ) as RobloxGamesApiVipServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: The creator of this game has disabled private servers for this game.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: You are not the owner of this private server.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The private server is invalid or does not exist.  4: The universe does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiVipServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerResponse", ""
            ) as RobloxGamesApiVipServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1VipServersIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1VipServersIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiVipServerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiVipServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerResponse", ""
            ) as RobloxGamesApiVipServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: The creator of this game has disabled private servers for this game.  10: The name of the private server is either empty or too long.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You are not the owner of this private server.  11: You cannot activate a cancelled private server.  12: The game must not be Friends Only to allow private servers.  13: Join Link can be generated only for active private servers.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The private server is invalid or does not exist.  4: The universe does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Please wait a few minutes before configuring your private server again.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiVipServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerResponse", ""
            ) as RobloxGamesApiVipServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1VipServersIdPermissionsPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1VipServersIdPermissionsPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiVipServerPermissionsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiVipServerPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerPermissionsResponse", ""
            ) as RobloxGamesApiVipServerPermissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "6: You cannot add so many players to the private server\&#39;s invite list.  8: The creator of this game has disabled private servers for this game.  12: The game must not be Friends Only to allow private servers.  28: You may only add or remove valid players to your private server\&#39;s invite list.  29: You may only add or remove players when your private server is active.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You are not the owner of this private server.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The private server is invalid or does not exist.  4: The universe does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiVipServerPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerPermissionsResponse", ""
            ) as RobloxGamesApiVipServerPermissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1VipServersIdSubscriptionPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1VipServersIdSubscriptionPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiVipServerSubscriptionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiVipServerSubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerSubscriptionResponse", ""
            ) as RobloxGamesApiVipServerSubscriptionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: The creator of this game has disabled private servers for this game.  32: You do not have enough funds available to renew the subscription for this private server.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You are not the owner of this private server.  21: You may not configure a cancelled private server. Please renew your subscription before configuring.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The private server is invalid or does not exist.  4: The universe does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Please wait a few minutes before configuring your private server again.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiVipServerSubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerSubscriptionResponse", ""
            ) as RobloxGamesApiVipServerSubscriptionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1VipServersIdVoicesettingsPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1VipServersIdVoicesettingsPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiVipServerVoiceSettingsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiVipServerVoiceSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerVoiceSettingsResponse", ""
            ) as RobloxGamesApiVipServerVoiceSettingsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: The creator of this game has disabled private servers for this game.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You are not the owner of this private server.  33: You are not eligible for voice chat.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The private server is invalid or does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiVipServerVoiceSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiVipServerVoiceSettingsResponse", ""
            ) as RobloxGamesApiVipServerVoiceSettingsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
