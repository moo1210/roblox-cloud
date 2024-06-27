import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGamesApiModelsResponseGameRecommendationsResponse } from '../models/RobloxGamesApiModelsResponseGameRecommendationsResponse';
import { RobloxGamesApiModelsResponseGameSortsResponse } from '../models/RobloxGamesApiModelsResponseGameSortsResponse';
import { RobloxGamesApiModelsResponseGamesSearchResponse } from '../models/RobloxGamesApiModelsResponseGamesSearchResponse';
import { RobloxGamesApiModelsResponsePlaceDetails } from '../models/RobloxGamesApiModelsResponsePlaceDetails';
import { RobloxGamesApiModelsResponsePlayabilityStatusResponse } from '../models/RobloxGamesApiModelsResponsePlayabilityStatusResponse';
import { RobloxGamesApiModelsResponseThumbnail } from '../models/RobloxGamesApiModelsResponseThumbnail';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse';

/**
 * no description
 */
export class GamesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a single game thumbnail
     * @param imageToken 
     * @param height 
     * @param width 
     */
    public async v1GamesGameThumbnailGet(imageToken: string, height?: number, width?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'imageToken' is not null or undefined
        if (imageToken === null || imageToken === undefined) {
            throw new RequiredError("GamesApi", "v1GamesGameThumbnailGet", "imageToken");
        }




        // Path Params
        const localVarPath = '/v1/games/game-thumbnail';

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (imageToken !== undefined) {
            requestContext.setQueryParam("imageToken", ObjectSerializer.serialize(imageToken, "string", ""));
        }

        // Query Params
        if (height !== undefined) {
            requestContext.setQueryParam("height", ObjectSerializer.serialize(height, "number", "int32"));
        }

        // Query Params
        if (width !== undefined) {
            requestContext.setQueryParam("width", ObjectSerializer.serialize(width, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a list of game thumbnails
     * @param imageTokens 
     * @param height 
     * @param width 
     */
    public async v1GamesGameThumbnailsGet(imageTokens: Array<string>, height?: number, width?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'imageTokens' is not null or undefined
        if (imageTokens === null || imageTokens === undefined) {
            throw new RequiredError("GamesApi", "v1GamesGameThumbnailsGet", "imageTokens");
        }




        // Path Params
        const localVarPath = '/v1/games/game-thumbnails';

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (imageTokens !== undefined) {
            requestContext.setQueryParam("imageTokens", ObjectSerializer.serialize(imageTokens, "Array<string>", ""));
        }

        // Query Params
        if (height !== undefined) {
            requestContext.setQueryParam("height", ObjectSerializer.serialize(height, "number", "int32"));
        }

        // Query Params
        if (width !== undefined) {
            requestContext.setQueryParam("width", ObjectSerializer.serialize(width, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a list of games\' product info, used to purchase a game
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public async v1GamesGamesProductInfoGet(universeIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeIds' is not null or undefined
        if (universeIds === null || universeIds === undefined) {
            throw new RequiredError("GamesApi", "v1GamesGamesProductInfoGet", "universeIds");
        }


        // Path Params
        const localVarPath = '/v1/games/games-product-info';

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

    /**
     * Gets a list of games\' detail
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public async v1GamesGet(universeIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeIds' is not null or undefined
        if (universeIds === null || universeIds === undefined) {
            throw new RequiredError("GamesApi", "v1GamesGet", "universeIds");
        }


        // Path Params
        const localVarPath = '/v1/games';

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

    /**
     * Gets a list of games
     * @param sortToken Sort token.
     * @param gameFilter Game filter.
     * @param timeFilter Time filter.
     * @param genreFilter Genre filter.
     * @param exclusiveStartId Id to start getting entities.
     * @param sortOrder Sort order.
     * @param gameSetTargetId Extra id needed for specific Game Sets.
     * @param keyword Keyword
     * @param startRows StartRows
     * @param maxRows MaxRows
     * @param contextCountryRegionId ContextCountryRegionId
     * @param contextUniverseId ContextUniverseId
     * @param pageContextPageId Id to identify the page as shown to the user.
     * @param pageContextIsSeeAllPage SortPosition
     * @param sortPosition SortPosition
     * @param sessionId SessionId
     */
    public async v1GamesListGet(sortToken: string, gameFilter: string, timeFilter: string, genreFilter: string, exclusiveStartId: number, sortOrder: number, gameSetTargetId: number, keyword: string, startRows: number, maxRows: number, contextCountryRegionId: number, contextUniverseId: number, pageContextPageId: string, pageContextIsSeeAllPage: boolean, sortPosition: number, sessionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sortToken' is not null or undefined
        if (sortToken === null || sortToken === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "sortToken");
        }


        // verify required parameter 'gameFilter' is not null or undefined
        if (gameFilter === null || gameFilter === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "gameFilter");
        }


        // verify required parameter 'timeFilter' is not null or undefined
        if (timeFilter === null || timeFilter === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "timeFilter");
        }


        // verify required parameter 'genreFilter' is not null or undefined
        if (genreFilter === null || genreFilter === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "genreFilter");
        }


        // verify required parameter 'exclusiveStartId' is not null or undefined
        if (exclusiveStartId === null || exclusiveStartId === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "exclusiveStartId");
        }


        // verify required parameter 'sortOrder' is not null or undefined
        if (sortOrder === null || sortOrder === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "sortOrder");
        }


        // verify required parameter 'gameSetTargetId' is not null or undefined
        if (gameSetTargetId === null || gameSetTargetId === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "gameSetTargetId");
        }


        // verify required parameter 'keyword' is not null or undefined
        if (keyword === null || keyword === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "keyword");
        }


        // verify required parameter 'startRows' is not null or undefined
        if (startRows === null || startRows === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "startRows");
        }


        // verify required parameter 'maxRows' is not null or undefined
        if (maxRows === null || maxRows === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "maxRows");
        }


        // verify required parameter 'contextCountryRegionId' is not null or undefined
        if (contextCountryRegionId === null || contextCountryRegionId === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "contextCountryRegionId");
        }


        // verify required parameter 'contextUniverseId' is not null or undefined
        if (contextUniverseId === null || contextUniverseId === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "contextUniverseId");
        }


        // verify required parameter 'pageContextPageId' is not null or undefined
        if (pageContextPageId === null || pageContextPageId === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "pageContextPageId");
        }


        // verify required parameter 'pageContextIsSeeAllPage' is not null or undefined
        if (pageContextIsSeeAllPage === null || pageContextIsSeeAllPage === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "pageContextIsSeeAllPage");
        }


        // verify required parameter 'sortPosition' is not null or undefined
        if (sortPosition === null || sortPosition === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "sortPosition");
        }


        // verify required parameter 'sessionId' is not null or undefined
        if (sessionId === null || sessionId === undefined) {
            throw new RequiredError("GamesApi", "v1GamesListGet", "sessionId");
        }


        // Path Params
        const localVarPath = '/v1/games/list';

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sortToken !== undefined) {
            requestContext.setQueryParam("SortToken", ObjectSerializer.serialize(sortToken, "string", ""));
        }

        // Query Params
        if (gameFilter !== undefined) {
            requestContext.setQueryParam("GameFilter", ObjectSerializer.serialize(gameFilter, "string", ""));
        }

        // Query Params
        if (timeFilter !== undefined) {
            requestContext.setQueryParam("TimeFilter", ObjectSerializer.serialize(timeFilter, "string", ""));
        }

        // Query Params
        if (genreFilter !== undefined) {
            requestContext.setQueryParam("GenreFilter", ObjectSerializer.serialize(genreFilter, "string", ""));
        }

        // Query Params
        if (exclusiveStartId !== undefined) {
            requestContext.setQueryParam("ExclusiveStartId", ObjectSerializer.serialize(exclusiveStartId, "number", "int64"));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("SortOrder", ObjectSerializer.serialize(sortOrder, "number", "int32"));
        }

        // Query Params
        if (gameSetTargetId !== undefined) {
            requestContext.setQueryParam("GameSetTargetId", ObjectSerializer.serialize(gameSetTargetId, "number", "int64"));
        }

        // Query Params
        if (keyword !== undefined) {
            requestContext.setQueryParam("Keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }

        // Query Params
        if (startRows !== undefined) {
            requestContext.setQueryParam("StartRows", ObjectSerializer.serialize(startRows, "number", "int32"));
        }

        // Query Params
        if (maxRows !== undefined) {
            requestContext.setQueryParam("MaxRows", ObjectSerializer.serialize(maxRows, "number", "int32"));
        }

        // Query Params
        if (contextCountryRegionId !== undefined) {
            requestContext.setQueryParam("ContextCountryRegionId", ObjectSerializer.serialize(contextCountryRegionId, "number", "int32"));
        }

        // Query Params
        if (contextUniverseId !== undefined) {
            requestContext.setQueryParam("ContextUniverseId", ObjectSerializer.serialize(contextUniverseId, "number", "int64"));
        }

        // Query Params
        if (pageContextPageId !== undefined) {
            requestContext.setQueryParam("PageContext.PageId", ObjectSerializer.serialize(pageContextPageId, "string", "uuid"));
        }

        // Query Params
        if (pageContextIsSeeAllPage !== undefined) {
            requestContext.setQueryParam("PageContext.IsSeeAllPage", ObjectSerializer.serialize(pageContextIsSeeAllPage, "boolean", ""));
        }

        // Query Params
        if (sortPosition !== undefined) {
            requestContext.setQueryParam("SortPosition", ObjectSerializer.serialize(sortPosition, "number", "int32"));
        }

        // Query Params
        if (sessionId !== undefined) {
            requestContext.setQueryParam("SessionId", ObjectSerializer.serialize(sessionId, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets games that the client should spotlight.
     */
    public async v1GamesListSpotlightGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/games/list-spotlight';

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
     * Get place details
     * @param placeIds List of placeId to uniquely Identify a place
     */
    public async v1GamesMultigetPlaceDetailsGet(placeIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeIds' is not null or undefined
        if (placeIds === null || placeIds === undefined) {
            throw new RequiredError("GamesApi", "v1GamesMultigetPlaceDetailsGet", "placeIds");
        }


        // Path Params
        const localVarPath = '/v1/games/multiget-place-details';

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (placeIds !== undefined) {
            requestContext.setQueryParam("placeIds", ObjectSerializer.serialize(placeIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a list of universe playability statuses for the authenticated user
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public async v1GamesMultigetPlayabilityStatusGet(universeIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeIds' is not null or undefined
        if (universeIds === null || universeIds === undefined) {
            throw new RequiredError("GamesApi", "v1GamesMultigetPlayabilityStatusGet", "universeIds");
        }


        // Path Params
        const localVarPath = '/v1/games/multiget-playability-status';

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

    /**
     * Get games recommendations
     * @param algorithmName The algorithm name of recommendations
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public async v1GamesRecommendationsAlgorithmAlgorithmNameGet(algorithmName: string, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'algorithmName' is not null or undefined
        if (algorithmName === null || algorithmName === undefined) {
            throw new RequiredError("GamesApi", "v1GamesRecommendationsAlgorithmAlgorithmNameGet", "algorithmName");
        }


        // verify required parameter 'paginationKey' is not null or undefined
        if (paginationKey === null || paginationKey === undefined) {
            throw new RequiredError("GamesApi", "v1GamesRecommendationsAlgorithmAlgorithmNameGet", "paginationKey");
        }


        // verify required parameter 'maxRows' is not null or undefined
        if (maxRows === null || maxRows === undefined) {
            throw new RequiredError("GamesApi", "v1GamesRecommendationsAlgorithmAlgorithmNameGet", "maxRows");
        }


        // verify required parameter 'isTruncatedResultsEnabled' is not null or undefined
        if (isTruncatedResultsEnabled === null || isTruncatedResultsEnabled === undefined) {
            throw new RequiredError("GamesApi", "v1GamesRecommendationsAlgorithmAlgorithmNameGet", "isTruncatedResultsEnabled");
        }


        // Path Params
        const localVarPath = '/v1/games/recommendations/algorithm/{algorithmName}'
            .replace('{' + 'algorithmName' + '}', encodeURIComponent(String(algorithmName)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (paginationKey !== undefined) {
            requestContext.setQueryParam("PaginationKey", ObjectSerializer.serialize(paginationKey, "string", ""));
        }

        // Query Params
        if (maxRows !== undefined) {
            requestContext.setQueryParam("MaxRows", ObjectSerializer.serialize(maxRows, "number", "int32"));
        }

        // Query Params
        if (isTruncatedResultsEnabled !== undefined) {
            requestContext.setQueryParam("IsTruncatedResultsEnabled", ObjectSerializer.serialize(isTruncatedResultsEnabled, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get games recommendations based on a given universe
     * @param universeId The universe to base recommendations on
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public async v1GamesRecommendationsGameUniverseIdGet(universeId: number, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("GamesApi", "v1GamesRecommendationsGameUniverseIdGet", "universeId");
        }


        // verify required parameter 'paginationKey' is not null or undefined
        if (paginationKey === null || paginationKey === undefined) {
            throw new RequiredError("GamesApi", "v1GamesRecommendationsGameUniverseIdGet", "paginationKey");
        }


        // verify required parameter 'maxRows' is not null or undefined
        if (maxRows === null || maxRows === undefined) {
            throw new RequiredError("GamesApi", "v1GamesRecommendationsGameUniverseIdGet", "maxRows");
        }


        // verify required parameter 'isTruncatedResultsEnabled' is not null or undefined
        if (isTruncatedResultsEnabled === null || isTruncatedResultsEnabled === undefined) {
            throw new RequiredError("GamesApi", "v1GamesRecommendationsGameUniverseIdGet", "isTruncatedResultsEnabled");
        }


        // Path Params
        const localVarPath = '/v1/games/recommendations/game/{universeId}'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (paginationKey !== undefined) {
            requestContext.setQueryParam("PaginationKey", ObjectSerializer.serialize(paginationKey, "string", ""));
        }

        // Query Params
        if (maxRows !== undefined) {
            requestContext.setQueryParam("MaxRows", ObjectSerializer.serialize(maxRows, "number", "int32"));
        }

        // Query Params
        if (isTruncatedResultsEnabled !== undefined) {
            requestContext.setQueryParam("IsTruncatedResultsEnabled", ObjectSerializer.serialize(isTruncatedResultsEnabled, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets an ordered list of all sorts
     * @param gameSortsContext Context to determine which game sorts are being requested.
     */
    public async v1GamesSortsGet(gameSortsContext: 0 | 1 | 2 | 3 | 4 | 6 | 7, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'gameSortsContext' is not null or undefined
        if (gameSortsContext === null || gameSortsContext === undefined) {
            throw new RequiredError("GamesApi", "v1GamesSortsGet", "gameSortsContext");
        }


        // Path Params
        const localVarPath = '/v1/games/sorts';

        // Make Request Context
        const requestContext = _config.getServer('https://games.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (gameSortsContext !== undefined) {
            requestContext.setQueryParam("GameSortsContext", ObjectSerializer.serialize(gameSortsContext, "0 | 1 | 2 | 3 | 4 | 6 | 7", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public async v1GamesUniverseIdMediaGet(universeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("GamesApi", "v1GamesUniverseIdMediaGet", "universeId");
        }


        // Path Params
        const localVarPath = '/v1/games/{universeId}/media'
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

}

export class GamesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesGameThumbnailGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesGameThumbnailGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "10: This endpoint is deprecated", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesGameThumbnailsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesGameThumbnailsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RobloxGamesApiModelsResponseThumbnail> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RobloxGamesApiModelsResponseThumbnail> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxGamesApiModelsResponseThumbnail>", ""
            ) as Array<RobloxGamesApiModelsResponseThumbnail>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "10: This endpoint is deprecated", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RobloxGamesApiModelsResponseThumbnail> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxGamesApiModelsResponseThumbnail>", ""
            ) as Array<RobloxGamesApiModelsResponseThumbnail>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesGamesProductInfoGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesGamesProductInfoGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: No universe IDs were specified.  9: Too many universe IDs were requested.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: No universe IDs were specified.  9: Too many universe IDs were requested.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesListGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesListGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiModelsResponseGamesSearchResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiModelsResponseGamesSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGamesSearchResponse", ""
            ) as RobloxGamesApiModelsResponseGamesSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Compliance Context service is unavailable.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiModelsResponseGamesSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGamesSearchResponse", ""
            ) as RobloxGamesApiModelsResponseGamesSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesListSpotlightGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesListSpotlightGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Compliance Context service is unavailable.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesMultigetPlaceDetailsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesMultigetPlaceDetailsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RobloxGamesApiModelsResponsePlaceDetails> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RobloxGamesApiModelsResponsePlaceDetails> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxGamesApiModelsResponsePlaceDetails>", ""
            ) as Array<RobloxGamesApiModelsResponsePlaceDetails>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RobloxGamesApiModelsResponsePlaceDetails> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxGamesApiModelsResponsePlaceDetails>", ""
            ) as Array<RobloxGamesApiModelsResponsePlaceDetails>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesMultigetPlayabilityStatusGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesMultigetPlayabilityStatusGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>", ""
            ) as Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: No universe IDs were specified.  9: Too many universe IDs were requested.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>", ""
            ) as Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesRecommendationsAlgorithmAlgorithmNameGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesRecommendationsAlgorithmAlgorithmNameGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiModelsResponseGameRecommendationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGameRecommendationsResponse", ""
            ) as RobloxGamesApiModelsResponseGameRecommendationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The pagination key is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiModelsResponseGameRecommendationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGameRecommendationsResponse", ""
            ) as RobloxGamesApiModelsResponseGameRecommendationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesRecommendationsGameUniverseIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesRecommendationsGameUniverseIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiModelsResponseGameRecommendationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGameRecommendationsResponse", ""
            ) as RobloxGamesApiModelsResponseGameRecommendationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The pagination key is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: The requested universe does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiModelsResponseGameRecommendationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGameRecommendationsResponse", ""
            ) as RobloxGamesApiModelsResponseGameRecommendationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesSortsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesSortsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGamesApiModelsResponseGameSortsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGamesApiModelsResponseGameSortsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGameSortsResponse", ""
            ) as RobloxGamesApiModelsResponseGameSortsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGamesApiModelsResponseGameSortsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGamesApiModelsResponseGameSortsResponse", ""
            ) as RobloxGamesApiModelsResponseGameSortsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GamesUniverseIdMediaGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GamesUniverseIdMediaGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem;
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
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
