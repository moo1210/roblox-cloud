import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2 } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2';
import { RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2';

/**
 * no description
 */
export class GamesV2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public async v2GamesUniverseIdMediaGet(universeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("GamesV2Api", "v2GamesUniverseIdMediaGet", "universeId");
        }


        // Path Params
        const localVarPath = '/v2/games/{universeId}/media'
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
     * Gets games created by the specified group.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v2GroupsGroupIdGamesGet(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("GamesV2Api", "v2GroupsGroupIdGamesGet", "groupId");
        }






        // Path Params
        const localVarPath = '/v2/groups/{groupId}/games'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accessFilter !== undefined) {
            requestContext.setQueryParam("accessFilter", ObjectSerializer.serialize(accessFilter, "1 | 2 | 4", "int32"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets games created by the specified group. This will replace V1 after validation. Note that this can only used for public/all universes.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v2GroupsGroupIdGamesV2Get(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("GamesV2Api", "v2GroupsGroupIdGamesV2Get", "groupId");
        }






        // Path Params
        const localVarPath = '/v2/groups/{groupId}/gamesV2'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accessFilter !== undefined) {
            requestContext.setQueryParam("accessFilter", ObjectSerializer.serialize(accessFilter, "1 | 2 | 4", "int32"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets users favorite games.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v2UsersUserIdFavoriteGamesGet(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("GamesV2Api", "v2UsersUserIdFavoriteGamesGet", "userId");
        }






        // Path Params
        const localVarPath = '/v2/users/{userId}/favorite/games'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accessFilter !== undefined) {
            requestContext.setQueryParam("accessFilter", ObjectSerializer.serialize(accessFilter, "1 | 2 | 4", "int32"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets games created by the specified user.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v2UsersUserIdGamesGet(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("GamesV2Api", "v2UsersUserIdGamesGet", "userId");
        }






        // Path Params
        const localVarPath = '/v2/users/{userId}/games'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accessFilter !== undefined) {
            requestContext.setQueryParam("accessFilter", ObjectSerializer.serialize(accessFilter, "1 | 2 | 4", "int32"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class GamesV2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2GamesUniverseIdMediaGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2GamesUniverseIdMediaGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: The universe\&#39;s root place is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: The requested universe does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2GroupsGroupIdGamesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2GroupsGroupIdGamesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Not authorized.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Compliance Context service is unavailable.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2GroupsGroupIdGamesV2Get
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2GroupsGroupIdGamesV2GetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Compliance Context service is unavailable.", undefined, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Code path is not Implemented.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UsersUserIdFavoriteGamesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UsersUserIdFavoriteGamesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UsersUserIdGamesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UsersUserIdGamesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
