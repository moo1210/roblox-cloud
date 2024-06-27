import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse';

/**
 * no description
 */
export class GameInstancesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get list of private servers user can access for given game id.
     * @param placeId The Id of the place we are geting the private server list for.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v1GamesPlaceIdPrivateServersGet(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeId' is not null or undefined
        if (placeId === null || placeId === undefined) {
            throw new RequiredError("GameInstancesApi", "v1GamesPlaceIdPrivateServersGet", "placeId");
        }





        // Path Params
        const localVarPath = '/v1/games/{placeId}/private-servers'
            .replace('{' + 'placeId' + '}', encodeURIComponent(String(placeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Get the game server list
     * @param placeId The Id of the place we are geting the server list for.
     * @param serverType The type of the server we geting the server list for.
     * @param sortOrder The sort order of the servers.
     * @param excludeFullGames Exclude full servers.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public async v1GamesPlaceIdServersServerTypeGet(placeId: number, serverType: 0 | 1, sortOrder?: 1 | 2, excludeFullGames?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeId' is not null or undefined
        if (placeId === null || placeId === undefined) {
            throw new RequiredError("GameInstancesApi", "v1GamesPlaceIdServersServerTypeGet", "placeId");
        }


        // verify required parameter 'serverType' is not null or undefined
        if (serverType === null || serverType === undefined) {
            throw new RequiredError("GameInstancesApi", "v1GamesPlaceIdServersServerTypeGet", "serverType");
        }






        // Path Params
        const localVarPath = '/v1/games/{placeId}/servers/{serverType}'
            .replace('{' + 'placeId' + '}', encodeURIComponent(String(placeId)))
            .replace('{' + 'serverType' + '}', encodeURIComponent(String(serverType)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "1 | 2", "int32"));
        }

        // Query Params
        if (excludeFullGames !== undefined) {
            requestContext.setQueryParam("excludeFullGames", ObjectSerializer.serialize(excludeFullGames, "boolean", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class GameInstancesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesPlaceIdPrivateServersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesPlaceIdPrivateServersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The place is invalid.  7: Guest users are not allowed.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The place is invalid.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesPlaceIdServersServerTypeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesPlaceIdServersServerTypeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The place is invalid.  6: The server type is invalid. For fetching private servers, please use https://games.roblox.com/v1/games/{placeId}/private-servers.  7: Guest users are not allowed.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The place is invalid.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
