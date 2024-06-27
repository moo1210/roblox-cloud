import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxGamesApiCreateVipServersRequest } from '../models/RobloxGamesApiCreateVipServersRequest';
import { RobloxGamesApiGameResponse } from '../models/RobloxGamesApiGameResponse';
import { RobloxGamesApiGameServerPlayerResponse } from '../models/RobloxGamesApiGameServerPlayerResponse';
import { RobloxGamesApiModelsRequestGameFavoritesRequest } from '../models/RobloxGamesApiModelsRequestGameFavoritesRequest';
import { RobloxGamesApiModelsRequestSetUserGameVoteRequest } from '../models/RobloxGamesApiModelsRequestSetUserGameVoteRequest';
import { RobloxGamesApiModelsResponseElasticSearchDebugInfoModel } from '../models/RobloxGamesApiModelsResponseElasticSearchDebugInfoModel';
import { RobloxGamesApiModelsResponseGameCreator } from '../models/RobloxGamesApiModelsResponseGameCreator';
import { RobloxGamesApiModelsResponseGameDetailResponse } from '../models/RobloxGamesApiModelsResponseGameDetailResponse';
import { RobloxGamesApiModelsResponseGameFavoriteResponse } from '../models/RobloxGamesApiModelsResponseGameFavoriteResponse';
import { RobloxGamesApiModelsResponseGameFavoritesCountResponse } from '../models/RobloxGamesApiModelsResponseGameFavoritesCountResponse';
import { RobloxGamesApiModelsResponseGameFilter } from '../models/RobloxGamesApiModelsResponseGameFilter';
import { RobloxGamesApiModelsResponseGameMediaItem } from '../models/RobloxGamesApiModelsResponseGameMediaItem';
import { RobloxGamesApiModelsResponseGamePassResponse } from '../models/RobloxGamesApiModelsResponseGamePassResponse';
import { RobloxGamesApiModelsResponseGameProductResponse } from '../models/RobloxGamesApiModelsResponseGameProductResponse';
import { RobloxGamesApiModelsResponseGameRecommendationsResponse } from '../models/RobloxGamesApiModelsResponseGameRecommendationsResponse';
import { RobloxGamesApiModelsResponseGameResponseModel } from '../models/RobloxGamesApiModelsResponseGameResponseModel';
import { RobloxGamesApiModelsResponseGameSort } from '../models/RobloxGamesApiModelsResponseGameSort';
import { RobloxGamesApiModelsResponseGameSortTopicLayoutData } from '../models/RobloxGamesApiModelsResponseGameSortTopicLayoutData';
import { RobloxGamesApiModelsResponseGameSortsResponse } from '../models/RobloxGamesApiModelsResponseGameSortsResponse';
import { RobloxGamesApiModelsResponseGameSpotlightResponse } from '../models/RobloxGamesApiModelsResponseGameSpotlightResponse';
import { RobloxGamesApiModelsResponseGameVoteResponse } from '../models/RobloxGamesApiModelsResponseGameVoteResponse';
import { RobloxGamesApiModelsResponseGamesSearchResponse } from '../models/RobloxGamesApiModelsResponseGamesSearchResponse';
import { RobloxGamesApiModelsResponseGenreFilter } from '../models/RobloxGamesApiModelsResponseGenreFilter';
import { RobloxGamesApiModelsResponsePageContext } from '../models/RobloxGamesApiModelsResponsePageContext';
import { RobloxGamesApiModelsResponsePlaceDetails } from '../models/RobloxGamesApiModelsResponsePlaceDetails';
import { RobloxGamesApiModelsResponsePlayabilityStatusResponse } from '../models/RobloxGamesApiModelsResponsePlayabilityStatusResponse';
import { RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse } from '../models/RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse';
import { RobloxGamesApiModelsResponseThumbnail } from '../models/RobloxGamesApiModelsResponseThumbnail';
import { RobloxGamesApiModelsResponseTimeFilter } from '../models/RobloxGamesApiModelsResponseTimeFilter';
import { RobloxGamesApiModelsResponseUserGameVoteResponse } from '../models/RobloxGamesApiModelsResponseUserGameVoteResponse';
import { RobloxGamesApiModelsResponseVerifiedBadgeUserResponse } from '../models/RobloxGamesApiModelsResponseVerifiedBadgeUserResponse';
import { RobloxGamesApiPlaceResponse } from '../models/RobloxGamesApiPlaceResponse';
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
import { RobloxPagingExclusiveStartKeyCursorSystemString } from '../models/RobloxPagingExclusiveStartKeyCursorSystemString';
import { RobloxPagingStartIndexCursor } from '../models/RobloxPagingStartIndexCursor';
import { RobloxWebResponsesGamesGameServerResponse } from '../models/RobloxWebResponsesGamesGameServerResponse';
import { RobloxWebResponsesUsersSkinnyUserResponse } from '../models/RobloxWebResponsesUsersSkinnyUserResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxGamesApiModelsResponseGamePassResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxGamesApiModelsResponseGamePassResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse';
import { ObservableFavoritesApi } from './ObservableAPI';

import { FavoritesApiRequestFactory, FavoritesApiResponseProcessor} from "../apis/FavoritesApi";
export class PromiseFavoritesApi {
    private api: ObservableFavoritesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FavoritesApiRequestFactory,
        responseProcessor?: FavoritesApiResponseProcessor
    ) {
        this.api = new ObservableFavoritesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the favorites count of the a specific game
     * @param universeId The Id of the universe.
     */
    public v1GamesUniverseIdFavoritesCountGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameFavoritesCountResponse>> {
        const result = this.api.v1GamesUniverseIdFavoritesCountGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Get the favorites count of the a specific game
     * @param universeId The Id of the universe.
     */
    public v1GamesUniverseIdFavoritesCountGet(universeId: number, _options?: Configuration): Promise<RobloxGamesApiModelsResponseGameFavoritesCountResponse> {
        const result = this.api.v1GamesUniverseIdFavoritesCountGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Returns if a game was marked as favorite for the authenticated user
     * @param universeId The Id of the universe.
     */
    public v1GamesUniverseIdFavoritesGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameFavoriteResponse>> {
        const result = this.api.v1GamesUniverseIdFavoritesGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Returns if a game was marked as favorite for the authenticated user
     * @param universeId The Id of the universe.
     */
    public v1GamesUniverseIdFavoritesGet(universeId: number, _options?: Configuration): Promise<RobloxGamesApiModelsResponseGameFavoriteResponse> {
        const result = this.api.v1GamesUniverseIdFavoritesGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Favors (or unfavors) a game for the authenticated user
     * @param universeId The Id of the universe.
     * @param request Request data.
     */
    public v1GamesUniverseIdFavoritesPostWithHttpInfo(universeId: number, request: RobloxGamesApiModelsRequestGameFavoritesRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GamesUniverseIdFavoritesPostWithHttpInfo(universeId, request, _options);
        return result.toPromise();
    }

    /**
     * Favors (or unfavors) a game for the authenticated user
     * @param universeId The Id of the universe.
     * @param request Request data.
     */
    public v1GamesUniverseIdFavoritesPost(universeId: number, request: RobloxGamesApiModelsRequestGameFavoritesRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GamesUniverseIdFavoritesPost(universeId, request, _options);
        return result.toPromise();
    }


}



import { ObservableGameInstancesApi } from './ObservableAPI';

import { GameInstancesApiRequestFactory, GameInstancesApiResponseProcessor} from "../apis/GameInstancesApi";
export class PromiseGameInstancesApi {
    private api: ObservableGameInstancesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GameInstancesApiRequestFactory,
        responseProcessor?: GameInstancesApiResponseProcessor
    ) {
        this.api = new ObservableGameInstancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of private servers user can access for given game id.
     * @param placeId The Id of the place we are geting the private server list for.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GamesPlaceIdPrivateServersGetWithHttpInfo(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse>> {
        const result = this.api.v1GamesPlaceIdPrivateServersGetWithHttpInfo(placeId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Get list of private servers user can access for given game id.
     * @param placeId The Id of the place we are geting the private server list for.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GamesPlaceIdPrivateServersGet(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse> {
        const result = this.api.v1GamesPlaceIdPrivateServersGet(placeId, limit, cursor, sortOrder, _options);
        return result.toPromise();
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
    public v1GamesPlaceIdServersServerTypeGetWithHttpInfo(placeId: number, serverType: 0 | 1, sortOrder?: 1 | 2, excludeFullGames?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse>> {
        const result = this.api.v1GamesPlaceIdServersServerTypeGetWithHttpInfo(placeId, serverType, sortOrder, excludeFullGames, limit, cursor, _options);
        return result.toPromise();
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
    public v1GamesPlaceIdServersServerTypeGet(placeId: number, serverType: 0 | 1, sortOrder?: 1 | 2, excludeFullGames?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse> {
        const result = this.api.v1GamesPlaceIdServersServerTypeGet(placeId, serverType, sortOrder, excludeFullGames, limit, cursor, _options);
        return result.toPromise();
    }


}



import { ObservableGamePassesApi } from './ObservableAPI';

import { GamePassesApiRequestFactory, GamePassesApiResponseProcessor} from "../apis/GamePassesApi";
export class PromiseGamePassesApi {
    private api: ObservableGamePassesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GamePassesApiRequestFactory,
        responseProcessor?: GamePassesApiResponseProcessor
    ) {
        this.api = new ObservableGamePassesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the game\'s game passes
     * @param universeId The id of the universe.
     * @param limit 
     * @param sortOrder 
     * @param cursor The cursor to figure out where to start fetching
     */
    public v1GamesUniverseIdGamePassesGetWithHttpInfo(universeId: number, limit: number, sortOrder?: 1 | 2, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGamesApiModelsResponseGamePassResponse>> {
        const result = this.api.v1GamesUniverseIdGamePassesGetWithHttpInfo(universeId, limit, sortOrder, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get the game\'s game passes
     * @param universeId The id of the universe.
     * @param limit 
     * @param sortOrder 
     * @param cursor The cursor to figure out where to start fetching
     */
    public v1GamesUniverseIdGamePassesGet(universeId: number, limit: number, sortOrder?: 1 | 2, cursor?: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGamesApiModelsResponseGamePassResponse> {
        const result = this.api.v1GamesUniverseIdGamePassesGet(universeId, limit, sortOrder, cursor, _options);
        return result.toPromise();
    }


}



import { ObservableGamesApi } from './ObservableAPI';

import { GamesApiRequestFactory, GamesApiResponseProcessor} from "../apis/GamesApi";
export class PromiseGamesApi {
    private api: ObservableGamesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GamesApiRequestFactory,
        responseProcessor?: GamesApiResponseProcessor
    ) {
        this.api = new ObservableGamesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a single game thumbnail
     * @param imageToken 
     * @param height 
     * @param width 
     */
    public v1GamesGameThumbnailGetWithHttpInfo(imageToken: string, height?: number, width?: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1GamesGameThumbnailGetWithHttpInfo(imageToken, height, width, _options);
        return result.toPromise();
    }

    /**
     * Get a single game thumbnail
     * @param imageToken 
     * @param height 
     * @param width 
     */
    public v1GamesGameThumbnailGet(imageToken: string, height?: number, width?: number, _options?: Configuration): Promise<void> {
        const result = this.api.v1GamesGameThumbnailGet(imageToken, height, width, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of game thumbnails
     * @param imageTokens 
     * @param height 
     * @param width 
     */
    public v1GamesGameThumbnailsGetWithHttpInfo(imageTokens: Array<string>, height?: number, width?: number, _options?: Configuration): Promise<HttpInfo<Array<RobloxGamesApiModelsResponseThumbnail>>> {
        const result = this.api.v1GamesGameThumbnailsGetWithHttpInfo(imageTokens, height, width, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of game thumbnails
     * @param imageTokens 
     * @param height 
     * @param width 
     */
    public v1GamesGameThumbnailsGet(imageTokens: Array<string>, height?: number, width?: number, _options?: Configuration): Promise<Array<RobloxGamesApiModelsResponseThumbnail>> {
        const result = this.api.v1GamesGameThumbnailsGet(imageTokens, height, width, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of games\' product info, used to purchase a game
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesGamesProductInfoGetWithHttpInfo(universeIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse>> {
        const result = this.api.v1GamesGamesProductInfoGetWithHttpInfo(universeIds, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of games\' product info, used to purchase a game
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesGamesProductInfoGet(universeIds: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse> {
        const result = this.api.v1GamesGamesProductInfoGet(universeIds, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of games\' detail
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesGetWithHttpInfo(universeIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse>> {
        const result = this.api.v1GamesGetWithHttpInfo(universeIds, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of games\' detail
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesGet(universeIds: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse> {
        const result = this.api.v1GamesGet(universeIds, _options);
        return result.toPromise();
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
    public v1GamesListGetWithHttpInfo(sortToken: string, gameFilter: string, timeFilter: string, genreFilter: string, exclusiveStartId: number, sortOrder: number, gameSetTargetId: number, keyword: string, startRows: number, maxRows: number, contextCountryRegionId: number, contextUniverseId: number, pageContextPageId: string, pageContextIsSeeAllPage: boolean, sortPosition: number, sessionId: string, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGamesSearchResponse>> {
        const result = this.api.v1GamesListGetWithHttpInfo(sortToken, gameFilter, timeFilter, genreFilter, exclusiveStartId, sortOrder, gameSetTargetId, keyword, startRows, maxRows, contextCountryRegionId, contextUniverseId, pageContextPageId, pageContextIsSeeAllPage, sortPosition, sessionId, _options);
        return result.toPromise();
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
    public v1GamesListGet(sortToken: string, gameFilter: string, timeFilter: string, genreFilter: string, exclusiveStartId: number, sortOrder: number, gameSetTargetId: number, keyword: string, startRows: number, maxRows: number, contextCountryRegionId: number, contextUniverseId: number, pageContextPageId: string, pageContextIsSeeAllPage: boolean, sortPosition: number, sessionId: string, _options?: Configuration): Promise<RobloxGamesApiModelsResponseGamesSearchResponse> {
        const result = this.api.v1GamesListGet(sortToken, gameFilter, timeFilter, genreFilter, exclusiveStartId, sortOrder, gameSetTargetId, keyword, startRows, maxRows, contextCountryRegionId, contextUniverseId, pageContextPageId, pageContextIsSeeAllPage, sortPosition, sessionId, _options);
        return result.toPromise();
    }

    /**
     * Gets games that the client should spotlight.
     */
    public v1GamesListSpotlightGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse>> {
        const result = this.api.v1GamesListSpotlightGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets games that the client should spotlight.
     */
    public v1GamesListSpotlightGet(_options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse> {
        const result = this.api.v1GamesListSpotlightGet(_options);
        return result.toPromise();
    }

    /**
     * Get place details
     * @param placeIds List of placeId to uniquely Identify a place
     */
    public v1GamesMultigetPlaceDetailsGetWithHttpInfo(placeIds: Array<number>, _options?: Configuration): Promise<HttpInfo<Array<RobloxGamesApiModelsResponsePlaceDetails>>> {
        const result = this.api.v1GamesMultigetPlaceDetailsGetWithHttpInfo(placeIds, _options);
        return result.toPromise();
    }

    /**
     * Get place details
     * @param placeIds List of placeId to uniquely Identify a place
     */
    public v1GamesMultigetPlaceDetailsGet(placeIds: Array<number>, _options?: Configuration): Promise<Array<RobloxGamesApiModelsResponsePlaceDetails>> {
        const result = this.api.v1GamesMultigetPlaceDetailsGet(placeIds, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of universe playability statuses for the authenticated user
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesMultigetPlayabilityStatusGetWithHttpInfo(universeIds: Array<number>, _options?: Configuration): Promise<HttpInfo<Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>>> {
        const result = this.api.v1GamesMultigetPlayabilityStatusGetWithHttpInfo(universeIds, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of universe playability statuses for the authenticated user
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesMultigetPlayabilityStatusGet(universeIds: Array<number>, _options?: Configuration): Promise<Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>> {
        const result = this.api.v1GamesMultigetPlayabilityStatusGet(universeIds, _options);
        return result.toPromise();
    }

    /**
     * Get games recommendations
     * @param algorithmName The algorithm name of recommendations
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public v1GamesRecommendationsAlgorithmAlgorithmNameGetWithHttpInfo(algorithmName: string, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse>> {
        const result = this.api.v1GamesRecommendationsAlgorithmAlgorithmNameGetWithHttpInfo(algorithmName, paginationKey, maxRows, isTruncatedResultsEnabled, _options);
        return result.toPromise();
    }

    /**
     * Get games recommendations
     * @param algorithmName The algorithm name of recommendations
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public v1GamesRecommendationsAlgorithmAlgorithmNameGet(algorithmName: string, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Promise<RobloxGamesApiModelsResponseGameRecommendationsResponse> {
        const result = this.api.v1GamesRecommendationsAlgorithmAlgorithmNameGet(algorithmName, paginationKey, maxRows, isTruncatedResultsEnabled, _options);
        return result.toPromise();
    }

    /**
     * Get games recommendations based on a given universe
     * @param universeId The universe to base recommendations on
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public v1GamesRecommendationsGameUniverseIdGetWithHttpInfo(universeId: number, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse>> {
        const result = this.api.v1GamesRecommendationsGameUniverseIdGetWithHttpInfo(universeId, paginationKey, maxRows, isTruncatedResultsEnabled, _options);
        return result.toPromise();
    }

    /**
     * Get games recommendations based on a given universe
     * @param universeId The universe to base recommendations on
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public v1GamesRecommendationsGameUniverseIdGet(universeId: number, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Promise<RobloxGamesApiModelsResponseGameRecommendationsResponse> {
        const result = this.api.v1GamesRecommendationsGameUniverseIdGet(universeId, paginationKey, maxRows, isTruncatedResultsEnabled, _options);
        return result.toPromise();
    }

    /**
     * Gets an ordered list of all sorts
     * @param gameSortsContext Context to determine which game sorts are being requested.
     */
    public v1GamesSortsGetWithHttpInfo(gameSortsContext: 0 | 1 | 2 | 3 | 4 | 6 | 7, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameSortsResponse>> {
        const result = this.api.v1GamesSortsGetWithHttpInfo(gameSortsContext, _options);
        return result.toPromise();
    }

    /**
     * Gets an ordered list of all sorts
     * @param gameSortsContext Context to determine which game sorts are being requested.
     */
    public v1GamesSortsGet(gameSortsContext: 0 | 1 | 2 | 3 | 4 | 6 | 7, _options?: Configuration): Promise<RobloxGamesApiModelsResponseGameSortsResponse> {
        const result = this.api.v1GamesSortsGet(gameSortsContext, _options);
        return result.toPromise();
    }

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public v1GamesUniverseIdMediaGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem>> {
        const result = this.api.v1GamesUniverseIdMediaGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public v1GamesUniverseIdMediaGet(universeId: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem> {
        const result = this.api.v1GamesUniverseIdMediaGet(universeId, _options);
        return result.toPromise();
    }


}



import { ObservableVipServersApi } from './ObservableAPI';

import { VipServersApiRequestFactory, VipServersApiResponseProcessor} from "../apis/VipServersApi";
export class PromiseVipServersApi {
    private api: ObservableVipServersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VipServersApiRequestFactory,
        responseProcessor?: VipServersApiResponseProcessor
    ) {
        this.api = new ObservableVipServersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create VIP server for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public v1GamesVipServersUniverseIdPostWithHttpInfo(universeId: number, requestBody: RobloxGamesApiCreateVipServersRequest, _options?: Configuration): Promise<HttpInfo<RobloxWebResponsesGamesGameServerResponse>> {
        const result = this.api.v1GamesVipServersUniverseIdPostWithHttpInfo(universeId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Create VIP server for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public v1GamesVipServersUniverseIdPost(universeId: number, requestBody: RobloxGamesApiCreateVipServersRequest, _options?: Configuration): Promise<RobloxWebResponsesGamesGameServerResponse> {
        const result = this.api.v1GamesVipServersUniverseIdPost(universeId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Checks if the private servers are enabled in the specified universe.
     * @param universeId 
     */
    public v1PrivateServersEnabledInUniverseUniverseIdGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse>> {
        const result = this.api.v1PrivateServersEnabledInUniverseUniverseIdGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Checks if the private servers are enabled in the specified universe.
     * @param universeId 
     */
    public v1PrivateServersEnabledInUniverseUniverseIdGet(universeId: number, _options?: Configuration): Promise<RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse> {
        const result = this.api.v1PrivateServersEnabledInUniverseUniverseIdGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Get private servers from private server ids
     * @param privateServerIds 
     */
    public v1PrivateServersGetWithHttpInfo(privateServerIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiPrivateServersResponse>> {
        const result = this.api.v1PrivateServersGetWithHttpInfo(privateServerIds, _options);
        return result.toPromise();
    }

    /**
     * Get private servers from private server ids
     * @param privateServerIds 
     */
    public v1PrivateServersGet(privateServerIds: Array<number>, _options?: Configuration): Promise<RobloxGamesApiPrivateServersResponse> {
        const result = this.api.v1PrivateServersGet(privateServerIds, _options);
        return result.toPromise();
    }

    /**
     * Determines if a user by id is allowed to receive a VIP Server invite from the authenticated user.
     * @param userId The user id.
     */
    public v1VipServerCanInviteUserIdGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerCanInviteResponse>> {
        const result = this.api.v1VipServerCanInviteUserIdGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Determines if a user by id is allowed to receive a VIP Server invite from the authenticated user.
     * @param userId The user id.
     */
    public v1VipServerCanInviteUserIdGet(userId: number, _options?: Configuration): Promise<RobloxGamesApiVipServerCanInviteResponse> {
        const result = this.api.v1VipServerCanInviteUserIdGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Get necessary data to generate webpage
     * @param id The VIP Server ID
     */
    public v1VipServersIdGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerResponse>> {
        const result = this.api.v1VipServersIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get necessary data to generate webpage
     * @param id The VIP Server ID
     */
    public v1VipServersIdGet(id: number, _options?: Configuration): Promise<RobloxGamesApiVipServerResponse> {
        const result = this.api.v1VipServersIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Updates vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateRequest
     */
    public v1VipServersIdPatchWithHttpInfo(id: number, request: RobloxGamesApiVipServerUpdateRequest, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerResponse>> {
        const result = this.api.v1VipServersIdPatchWithHttpInfo(id, request, _options);
        return result.toPromise();
    }

    /**
     * Updates vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateRequest
     */
    public v1VipServersIdPatch(id: number, request: RobloxGamesApiVipServerUpdateRequest, _options?: Configuration): Promise<RobloxGamesApiVipServerResponse> {
        const result = this.api.v1VipServersIdPatch(id, request, _options);
        return result.toPromise();
    }

    /**
     * Update friend/clan access and allowed friends/clan list
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdatePermissionsRequest
     */
    public v1VipServersIdPermissionsPatchWithHttpInfo(id: number, request: RobloxGamesApiVipServerUpdatePermissionsRequest, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerPermissionsResponse>> {
        const result = this.api.v1VipServersIdPermissionsPatchWithHttpInfo(id, request, _options);
        return result.toPromise();
    }

    /**
     * Update friend/clan access and allowed friends/clan list
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdatePermissionsRequest
     */
    public v1VipServersIdPermissionsPatch(id: number, request: RobloxGamesApiVipServerUpdatePermissionsRequest, _options?: Configuration): Promise<RobloxGamesApiVipServerPermissionsResponse> {
        const result = this.api.v1VipServersIdPermissionsPatch(id, request, _options);
        return result.toPromise();
    }

    /**
     * Updates subscription status of a vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateSubscriptionRequest
     */
    public v1VipServersIdSubscriptionPatchWithHttpInfo(id: number, request: RobloxGamesApiVipServerUpdateSubscriptionRequest, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerSubscriptionResponse>> {
        const result = this.api.v1VipServersIdSubscriptionPatchWithHttpInfo(id, request, _options);
        return result.toPromise();
    }

    /**
     * Updates subscription status of a vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateSubscriptionRequest
     */
    public v1VipServersIdSubscriptionPatch(id: number, request: RobloxGamesApiVipServerUpdateSubscriptionRequest, _options?: Configuration): Promise<RobloxGamesApiVipServerSubscriptionResponse> {
        const result = this.api.v1VipServersIdSubscriptionPatch(id, request, _options);
        return result.toPromise();
    }

    /**
     * Update voice settings for a private server.
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateVoiceSettingsRequest
     */
    public v1VipServersIdVoicesettingsPatchWithHttpInfo(id: number, request: RobloxGamesApiVipServerUpdateVoiceSettingsRequest, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerVoiceSettingsResponse>> {
        const result = this.api.v1VipServersIdVoicesettingsPatchWithHttpInfo(id, request, _options);
        return result.toPromise();
    }

    /**
     * Update voice settings for a private server.
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateVoiceSettingsRequest
     */
    public v1VipServersIdVoicesettingsPatch(id: number, request: RobloxGamesApiVipServerUpdateVoiceSettingsRequest, _options?: Configuration): Promise<RobloxGamesApiVipServerVoiceSettingsResponse> {
        const result = this.api.v1VipServersIdVoicesettingsPatch(id, request, _options);
        return result.toPromise();
    }


}



import { ObservableVotesApi } from './ObservableAPI';

import { VotesApiRequestFactory, VotesApiResponseProcessor} from "../apis/VotesApi";
export class PromiseVotesApi {
    private api: ObservableVotesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VotesApiRequestFactory,
        responseProcessor?: VotesApiResponseProcessor
    ) {
        this.api = new ObservableVotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set the user\'s vote for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public v1GamesUniverseIdUserVotesPatchWithHttpInfo(universeId: number, requestBody: RobloxGamesApiModelsRequestSetUserGameVoteRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GamesUniverseIdUserVotesPatchWithHttpInfo(universeId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Set the user\'s vote for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public v1GamesUniverseIdUserVotesPatch(universeId: number, requestBody: RobloxGamesApiModelsRequestSetUserGameVoteRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GamesUniverseIdUserVotesPatch(universeId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Get the game vote status
     * @param universeId The id of the universe we get vote status from.
     */
    public v1GamesUniverseIdVotesGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameVoteResponse>> {
        const result = this.api.v1GamesUniverseIdVotesGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Get the game vote status
     * @param universeId The id of the universe we get vote status from.
     */
    public v1GamesUniverseIdVotesGet(universeId: number, _options?: Configuration): Promise<RobloxGamesApiModelsResponseGameVoteResponse> {
        const result = this.api.v1GamesUniverseIdVotesGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Get the user\'s vote status for a game
     * @param universeId The id of the universe we get user vote status from.
     */
    public v1GamesUniverseIdVotesUserGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseUserGameVoteResponse>> {
        const result = this.api.v1GamesUniverseIdVotesUserGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Get the user\'s vote status for a game
     * @param universeId The id of the universe we get user vote status from.
     */
    public v1GamesUniverseIdVotesUserGet(universeId: number, _options?: Configuration): Promise<RobloxGamesApiModelsResponseUserGameVoteResponse> {
        const result = this.api.v1GamesUniverseIdVotesUserGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of universe vote status
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesVotesGetWithHttpInfo(universeIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse>> {
        const result = this.api.v1GamesVotesGetWithHttpInfo(universeIds, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of universe vote status
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesVotesGet(universeIds: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse> {
        const result = this.api.v1GamesVotesGet(universeIds, _options);
        return result.toPromise();
    }


}



