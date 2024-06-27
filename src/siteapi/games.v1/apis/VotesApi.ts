import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGamesApiModelsRequestSetUserGameVoteRequest } from '../models/RobloxGamesApiModelsRequestSetUserGameVoteRequest';
import { RobloxGamesApiModelsResponseGameVoteResponse } from '../models/RobloxGamesApiModelsResponseGameVoteResponse';
import { RobloxGamesApiModelsResponseUserGameVoteResponse } from '../models/RobloxGamesApiModelsResponseUserGameVoteResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse';

/**
 * no description
 */
export class VotesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Set the user\'s vote for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public async v1GamesUniverseIdUserVotesPatch(universeId: number, requestBody: RobloxGamesApiModelsRequestSetUserGameVoteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("VotesApi", "v1GamesUniverseIdUserVotesPatch", "universeId");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("VotesApi", "v1GamesUniverseIdUserVotesPatch", "requestBody");
        }


        // Path Params
        const localVarPath = '/v1/games/{universeId}/user-votes'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

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
            ObjectSerializer.serialize(requestBody, "RobloxGamesApiModelsRequestSetUserGameVoteRequest", ""),
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
     * Get the game vote status
     * @param universeId The id of the universe we get vote status from.
     */
    public async v1GamesUniverseIdVotesGet(universeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("VotesApi", "v1GamesUniverseIdVotesGet", "universeId");
        }


        // Path Params
        const localVarPath = '/v1/games/{universeId}/votes'
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
     * Get the user\'s vote status for a game
     * @param universeId The id of the universe we get user vote status from.
     */
    public async v1GamesUniverseIdVotesUserGet(universeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("VotesApi", "v1GamesUniverseIdVotesUserGet", "universeId");
        }


        // Path Params
        const localVarPath = '/v1/games/{universeId}/votes/user'
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
     * Gets a list of universe vote status
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public async v1GamesVotesGet(universeIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeIds' is not null or undefined
        if (universeIds === null || universeIds === undefined) {
            throw new RequiredError("VotesApi", "v1GamesVotesGet", "universeIds");
        }


        // Path Params
        const localVarPath = '/v1/games/votes';

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (universeIds !== undefined) {
            requestContext.setQueryParam("universeIds", ObjectSerializer.serialize(universeIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class VotesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesUniverseIdUserVotesPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesUniverseIdUserVotesPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: The universe\&#39;s root place is invalid.  3: The asset is not voteable.  4: The requested vote is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  6: The user needs to play the game before vote.  7: The user needs additional permission to vote.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The requested universe does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: Too many attempts to vote. Please try again later.  10: Internal service busy. Please try again later.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: An unknown error occurred.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesUniverseIdVotesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesUniverseIdVotesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiModelsResponseGameVoteResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiModelsResponseGameVoteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGameVoteResponse", ""
            ) as RobloxGamesApiModelsResponseGameVoteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: The universe\&#39;s root place is invalid.  3: The asset is not voteable.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The requested universe does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "10: Internal service busy. Please try again later.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: An unknown error occurred.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiModelsResponseGameVoteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGameVoteResponse", ""
            ) as RobloxGamesApiModelsResponseGameVoteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesUniverseIdVotesUserGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesUniverseIdVotesUserGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiModelsResponseUserGameVoteResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiModelsResponseUserGameVoteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseUserGameVoteResponse", ""
            ) as RobloxGamesApiModelsResponseUserGameVoteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: The universe\&#39;s root place is invalid.  3: The asset is not voteable.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The requested universe does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "10: Internal service busy. Please try again later.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: An unknown error occurred.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiModelsResponseUserGameVoteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseUserGameVoteResponse", ""
            ) as RobloxGamesApiModelsResponseUserGameVoteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesVotesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesVotesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: The asset is not voteable.  8: No universe IDs were specified.  9: Too many universe IDs were requested.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "10: Internal service busy. Please try again later.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: An unknown error occurred.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
