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

import { ObservableFavoritesApi } from "./ObservableAPI";
import { FavoritesApiRequestFactory, FavoritesApiResponseProcessor} from "../apis/FavoritesApi";

export interface FavoritesApiV1GamesUniverseIdFavoritesCountGetRequest {
    /**
     * The Id of the universe.
     * @type number
     * @memberof FavoritesApiv1GamesUniverseIdFavoritesCountGet
     */
    universeId: number
}

export interface FavoritesApiV1GamesUniverseIdFavoritesGetRequest {
    /**
     * The Id of the universe.
     * @type number
     * @memberof FavoritesApiv1GamesUniverseIdFavoritesGet
     */
    universeId: number
}

export interface FavoritesApiV1GamesUniverseIdFavoritesPostRequest {
    /**
     * The Id of the universe.
     * @type number
     * @memberof FavoritesApiv1GamesUniverseIdFavoritesPost
     */
    universeId: number
    /**
     * Request data.
     * @type RobloxGamesApiModelsRequestGameFavoritesRequest
     * @memberof FavoritesApiv1GamesUniverseIdFavoritesPost
     */
    request: RobloxGamesApiModelsRequestGameFavoritesRequest
}

export class ObjectFavoritesApi {
    private api: ObservableFavoritesApi

    public constructor(configuration: Configuration, requestFactory?: FavoritesApiRequestFactory, responseProcessor?: FavoritesApiResponseProcessor) {
        this.api = new ObservableFavoritesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the favorites count of the a specific game
     * @param param the request object
     */
    public v1GamesUniverseIdFavoritesCountGetWithHttpInfo(param: FavoritesApiV1GamesUniverseIdFavoritesCountGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameFavoritesCountResponse>> {
        return this.api.v1GamesUniverseIdFavoritesCountGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Get the favorites count of the a specific game
     * @param param the request object
     */
    public v1GamesUniverseIdFavoritesCountGet(param: FavoritesApiV1GamesUniverseIdFavoritesCountGetRequest, options?: Configuration): Promise<RobloxGamesApiModelsResponseGameFavoritesCountResponse> {
        return this.api.v1GamesUniverseIdFavoritesCountGet(param.universeId,  options).toPromise();
    }

    /**
     * Returns if a game was marked as favorite for the authenticated user
     * @param param the request object
     */
    public v1GamesUniverseIdFavoritesGetWithHttpInfo(param: FavoritesApiV1GamesUniverseIdFavoritesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameFavoriteResponse>> {
        return this.api.v1GamesUniverseIdFavoritesGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Returns if a game was marked as favorite for the authenticated user
     * @param param the request object
     */
    public v1GamesUniverseIdFavoritesGet(param: FavoritesApiV1GamesUniverseIdFavoritesGetRequest, options?: Configuration): Promise<RobloxGamesApiModelsResponseGameFavoriteResponse> {
        return this.api.v1GamesUniverseIdFavoritesGet(param.universeId,  options).toPromise();
    }

    /**
     * Favors (or unfavors) a game for the authenticated user
     * @param param the request object
     */
    public v1GamesUniverseIdFavoritesPostWithHttpInfo(param: FavoritesApiV1GamesUniverseIdFavoritesPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GamesUniverseIdFavoritesPostWithHttpInfo(param.universeId, param.request,  options).toPromise();
    }

    /**
     * Favors (or unfavors) a game for the authenticated user
     * @param param the request object
     */
    public v1GamesUniverseIdFavoritesPost(param: FavoritesApiV1GamesUniverseIdFavoritesPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GamesUniverseIdFavoritesPost(param.universeId, param.request,  options).toPromise();
    }

}

import { ObservableGameInstancesApi } from "./ObservableAPI";
import { GameInstancesApiRequestFactory, GameInstancesApiResponseProcessor} from "../apis/GameInstancesApi";

export interface GameInstancesApiV1GamesPlaceIdPrivateServersGetRequest {
    /**
     * The Id of the place we are geting the private server list for.
     * @type number
     * @memberof GameInstancesApiv1GamesPlaceIdPrivateServersGet
     */
    placeId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof GameInstancesApiv1GamesPlaceIdPrivateServersGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GameInstancesApiv1GamesPlaceIdPrivateServersGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof GameInstancesApiv1GamesPlaceIdPrivateServersGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface GameInstancesApiV1GamesPlaceIdServersServerTypeGetRequest {
    /**
     * The Id of the place we are geting the server list for.
     * @type number
     * @memberof GameInstancesApiv1GamesPlaceIdServersServerTypeGet
     */
    placeId: number
    /**
     * The type of the server we geting the server list for.
     * @type 0 | 1
     * @memberof GameInstancesApiv1GamesPlaceIdServersServerTypeGet
     */
    serverType: 0 | 1
    /**
     * The sort order of the servers.
     * @type 1 | 2
     * @memberof GameInstancesApiv1GamesPlaceIdServersServerTypeGet
     */
    sortOrder?: 1 | 2
    /**
     * Exclude full servers.
     * @type boolean
     * @memberof GameInstancesApiv1GamesPlaceIdServersServerTypeGet
     */
    excludeFullGames?: boolean
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof GameInstancesApiv1GamesPlaceIdServersServerTypeGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GameInstancesApiv1GamesPlaceIdServersServerTypeGet
     */
    cursor?: string
}

export class ObjectGameInstancesApi {
    private api: ObservableGameInstancesApi

    public constructor(configuration: Configuration, requestFactory?: GameInstancesApiRequestFactory, responseProcessor?: GameInstancesApiResponseProcessor) {
        this.api = new ObservableGameInstancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of private servers user can access for given game id.
     * @param param the request object
     */
    public v1GamesPlaceIdPrivateServersGetWithHttpInfo(param: GameInstancesApiV1GamesPlaceIdPrivateServersGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse>> {
        return this.api.v1GamesPlaceIdPrivateServersGetWithHttpInfo(param.placeId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Get list of private servers user can access for given game id.
     * @param param the request object
     */
    public v1GamesPlaceIdPrivateServersGet(param: GameInstancesApiV1GamesPlaceIdPrivateServersGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse> {
        return this.api.v1GamesPlaceIdPrivateServersGet(param.placeId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Get the game server list
     * @param param the request object
     */
    public v1GamesPlaceIdServersServerTypeGetWithHttpInfo(param: GameInstancesApiV1GamesPlaceIdServersServerTypeGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse>> {
        return this.api.v1GamesPlaceIdServersServerTypeGetWithHttpInfo(param.placeId, param.serverType, param.sortOrder, param.excludeFullGames, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get the game server list
     * @param param the request object
     */
    public v1GamesPlaceIdServersServerTypeGet(param: GameInstancesApiV1GamesPlaceIdServersServerTypeGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse> {
        return this.api.v1GamesPlaceIdServersServerTypeGet(param.placeId, param.serverType, param.sortOrder, param.excludeFullGames, param.limit, param.cursor,  options).toPromise();
    }

}

import { ObservableGamePassesApi } from "./ObservableAPI";
import { GamePassesApiRequestFactory, GamePassesApiResponseProcessor} from "../apis/GamePassesApi";

export interface GamePassesApiV1GamesUniverseIdGamePassesGetRequest {
    /**
     * The id of the universe.
     * @type number
     * @memberof GamePassesApiv1GamesUniverseIdGamePassesGet
     */
    universeId: number
    /**
     * 
     * @type number
     * @memberof GamePassesApiv1GamesUniverseIdGamePassesGet
     */
    limit: number
    /**
     * 
     * @type 1 | 2
     * @memberof GamePassesApiv1GamesUniverseIdGamePassesGet
     */
    sortOrder?: 1 | 2
    /**
     * The cursor to figure out where to start fetching
     * @type string
     * @memberof GamePassesApiv1GamesUniverseIdGamePassesGet
     */
    cursor?: string
}

export class ObjectGamePassesApi {
    private api: ObservableGamePassesApi

    public constructor(configuration: Configuration, requestFactory?: GamePassesApiRequestFactory, responseProcessor?: GamePassesApiResponseProcessor) {
        this.api = new ObservableGamePassesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the game\'s game passes
     * @param param the request object
     */
    public v1GamesUniverseIdGamePassesGetWithHttpInfo(param: GamePassesApiV1GamesUniverseIdGamePassesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGamesApiModelsResponseGamePassResponse>> {
        return this.api.v1GamesUniverseIdGamePassesGetWithHttpInfo(param.universeId, param.limit, param.sortOrder, param.cursor,  options).toPromise();
    }

    /**
     * Get the game\'s game passes
     * @param param the request object
     */
    public v1GamesUniverseIdGamePassesGet(param: GamePassesApiV1GamesUniverseIdGamePassesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGamesApiModelsResponseGamePassResponse> {
        return this.api.v1GamesUniverseIdGamePassesGet(param.universeId, param.limit, param.sortOrder, param.cursor,  options).toPromise();
    }

}

import { ObservableGamesApi } from "./ObservableAPI";
import { GamesApiRequestFactory, GamesApiResponseProcessor} from "../apis/GamesApi";

export interface GamesApiV1GamesGameThumbnailGetRequest {
    /**
     * 
     * @type string
     * @memberof GamesApiv1GamesGameThumbnailGet
     */
    imageToken: string
    /**
     * 
     * @type number
     * @memberof GamesApiv1GamesGameThumbnailGet
     */
    height?: number
    /**
     * 
     * @type number
     * @memberof GamesApiv1GamesGameThumbnailGet
     */
    width?: number
}

export interface GamesApiV1GamesGameThumbnailsGetRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof GamesApiv1GamesGameThumbnailsGet
     */
    imageTokens: Array<string>
    /**
     * 
     * @type number
     * @memberof GamesApiv1GamesGameThumbnailsGet
     */
    height?: number
    /**
     * 
     * @type number
     * @memberof GamesApiv1GamesGameThumbnailsGet
     */
    width?: number
}

export interface GamesApiV1GamesGamesProductInfoGetRequest {
    /**
     * A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     * @type Array&lt;number&gt;
     * @memberof GamesApiv1GamesGamesProductInfoGet
     */
    universeIds: Array<number>
}

export interface GamesApiV1GamesGetRequest {
    /**
     * A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     * @type Array&lt;number&gt;
     * @memberof GamesApiv1GamesGet
     */
    universeIds: Array<number>
}

export interface GamesApiV1GamesListGetRequest {
    /**
     * Sort token.
     * @type string
     * @memberof GamesApiv1GamesListGet
     */
    sortToken: string
    /**
     * Game filter.
     * @type string
     * @memberof GamesApiv1GamesListGet
     */
    gameFilter: string
    /**
     * Time filter.
     * @type string
     * @memberof GamesApiv1GamesListGet
     */
    timeFilter: string
    /**
     * Genre filter.
     * @type string
     * @memberof GamesApiv1GamesListGet
     */
    genreFilter: string
    /**
     * Id to start getting entities.
     * @type number
     * @memberof GamesApiv1GamesListGet
     */
    exclusiveStartId: number
    /**
     * Sort order.
     * @type number
     * @memberof GamesApiv1GamesListGet
     */
    sortOrder: number
    /**
     * Extra id needed for specific Game Sets.
     * @type number
     * @memberof GamesApiv1GamesListGet
     */
    gameSetTargetId: number
    /**
     * Keyword
     * @type string
     * @memberof GamesApiv1GamesListGet
     */
    keyword: string
    /**
     * StartRows
     * @type number
     * @memberof GamesApiv1GamesListGet
     */
    startRows: number
    /**
     * MaxRows
     * @type number
     * @memberof GamesApiv1GamesListGet
     */
    maxRows: number
    /**
     * ContextCountryRegionId
     * @type number
     * @memberof GamesApiv1GamesListGet
     */
    contextCountryRegionId: number
    /**
     * ContextUniverseId
     * @type number
     * @memberof GamesApiv1GamesListGet
     */
    contextUniverseId: number
    /**
     * Id to identify the page as shown to the user.
     * @type string
     * @memberof GamesApiv1GamesListGet
     */
    pageContextPageId: string
    /**
     * SortPosition
     * @type boolean
     * @memberof GamesApiv1GamesListGet
     */
    pageContextIsSeeAllPage: boolean
    /**
     * SortPosition
     * @type number
     * @memberof GamesApiv1GamesListGet
     */
    sortPosition: number
    /**
     * SessionId
     * @type string
     * @memberof GamesApiv1GamesListGet
     */
    sessionId: string
}

export interface GamesApiV1GamesListSpotlightGetRequest {
}

export interface GamesApiV1GamesMultigetPlaceDetailsGetRequest {
    /**
     * List of placeId to uniquely Identify a place
     * @type Array&lt;number&gt;
     * @memberof GamesApiv1GamesMultigetPlaceDetailsGet
     */
    placeIds: Array<number>
}

export interface GamesApiV1GamesMultigetPlayabilityStatusGetRequest {
    /**
     * A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     * @type Array&lt;number&gt;
     * @memberof GamesApiv1GamesMultigetPlayabilityStatusGet
     */
    universeIds: Array<number>
}

export interface GamesApiV1GamesRecommendationsAlgorithmAlgorithmNameGetRequest {
    /**
     * The algorithm name of recommendations
     * @type string
     * @memberof GamesApiv1GamesRecommendationsAlgorithmAlgorithmNameGet
     */
    algorithmName: string
    /**
     * The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @type string
     * @memberof GamesApiv1GamesRecommendationsAlgorithmAlgorithmNameGet
     */
    paginationKey: string
    /**
     * The requested number of rows.
     * @type number
     * @memberof GamesApiv1GamesRecommendationsAlgorithmAlgorithmNameGet
     */
    maxRows: number
    /**
     * Truncated Results
     * @type boolean
     * @memberof GamesApiv1GamesRecommendationsAlgorithmAlgorithmNameGet
     */
    isTruncatedResultsEnabled: boolean
}

export interface GamesApiV1GamesRecommendationsGameUniverseIdGetRequest {
    /**
     * The universe to base recommendations on
     * @type number
     * @memberof GamesApiv1GamesRecommendationsGameUniverseIdGet
     */
    universeId: number
    /**
     * The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @type string
     * @memberof GamesApiv1GamesRecommendationsGameUniverseIdGet
     */
    paginationKey: string
    /**
     * The requested number of rows.
     * @type number
     * @memberof GamesApiv1GamesRecommendationsGameUniverseIdGet
     */
    maxRows: number
    /**
     * Truncated Results
     * @type boolean
     * @memberof GamesApiv1GamesRecommendationsGameUniverseIdGet
     */
    isTruncatedResultsEnabled: boolean
}

export interface GamesApiV1GamesSortsGetRequest {
    /**
     * Context to determine which game sorts are being requested.
     * @type 0 | 1 | 2 | 3 | 4 | 6 | 7
     * @memberof GamesApiv1GamesSortsGet
     */
    gameSortsContext: 0 | 1 | 2 | 3 | 4 | 6 | 7
}

export interface GamesApiV1GamesUniverseIdMediaGetRequest {
    /**
     * The id of the universe we get media data from.
     * @type number
     * @memberof GamesApiv1GamesUniverseIdMediaGet
     */
    universeId: number
}

export class ObjectGamesApi {
    private api: ObservableGamesApi

    public constructor(configuration: Configuration, requestFactory?: GamesApiRequestFactory, responseProcessor?: GamesApiResponseProcessor) {
        this.api = new ObservableGamesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a single game thumbnail
     * @param param the request object
     */
    public v1GamesGameThumbnailGetWithHttpInfo(param: GamesApiV1GamesGameThumbnailGetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.v1GamesGameThumbnailGetWithHttpInfo(param.imageToken, param.height, param.width,  options).toPromise();
    }

    /**
     * Get a single game thumbnail
     * @param param the request object
     */
    public v1GamesGameThumbnailGet(param: GamesApiV1GamesGameThumbnailGetRequest, options?: Configuration): Promise<void> {
        return this.api.v1GamesGameThumbnailGet(param.imageToken, param.height, param.width,  options).toPromise();
    }

    /**
     * Gets a list of game thumbnails
     * @param param the request object
     */
    public v1GamesGameThumbnailsGetWithHttpInfo(param: GamesApiV1GamesGameThumbnailsGetRequest, options?: Configuration): Promise<HttpInfo<Array<RobloxGamesApiModelsResponseThumbnail>>> {
        return this.api.v1GamesGameThumbnailsGetWithHttpInfo(param.imageTokens, param.height, param.width,  options).toPromise();
    }

    /**
     * Gets a list of game thumbnails
     * @param param the request object
     */
    public v1GamesGameThumbnailsGet(param: GamesApiV1GamesGameThumbnailsGetRequest, options?: Configuration): Promise<Array<RobloxGamesApiModelsResponseThumbnail>> {
        return this.api.v1GamesGameThumbnailsGet(param.imageTokens, param.height, param.width,  options).toPromise();
    }

    /**
     * Gets a list of games\' product info, used to purchase a game
     * @param param the request object
     */
    public v1GamesGamesProductInfoGetWithHttpInfo(param: GamesApiV1GamesGamesProductInfoGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse>> {
        return this.api.v1GamesGamesProductInfoGetWithHttpInfo(param.universeIds,  options).toPromise();
    }

    /**
     * Gets a list of games\' product info, used to purchase a game
     * @param param the request object
     */
    public v1GamesGamesProductInfoGet(param: GamesApiV1GamesGamesProductInfoGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse> {
        return this.api.v1GamesGamesProductInfoGet(param.universeIds,  options).toPromise();
    }

    /**
     * Gets a list of games\' detail
     * @param param the request object
     */
    public v1GamesGetWithHttpInfo(param: GamesApiV1GamesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse>> {
        return this.api.v1GamesGetWithHttpInfo(param.universeIds,  options).toPromise();
    }

    /**
     * Gets a list of games\' detail
     * @param param the request object
     */
    public v1GamesGet(param: GamesApiV1GamesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse> {
        return this.api.v1GamesGet(param.universeIds,  options).toPromise();
    }

    /**
     * Gets a list of games
     * @param param the request object
     */
    public v1GamesListGetWithHttpInfo(param: GamesApiV1GamesListGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGamesSearchResponse>> {
        return this.api.v1GamesListGetWithHttpInfo(param.sortToken, param.gameFilter, param.timeFilter, param.genreFilter, param.exclusiveStartId, param.sortOrder, param.gameSetTargetId, param.keyword, param.startRows, param.maxRows, param.contextCountryRegionId, param.contextUniverseId, param.pageContextPageId, param.pageContextIsSeeAllPage, param.sortPosition, param.sessionId,  options).toPromise();
    }

    /**
     * Gets a list of games
     * @param param the request object
     */
    public v1GamesListGet(param: GamesApiV1GamesListGetRequest, options?: Configuration): Promise<RobloxGamesApiModelsResponseGamesSearchResponse> {
        return this.api.v1GamesListGet(param.sortToken, param.gameFilter, param.timeFilter, param.genreFilter, param.exclusiveStartId, param.sortOrder, param.gameSetTargetId, param.keyword, param.startRows, param.maxRows, param.contextCountryRegionId, param.contextUniverseId, param.pageContextPageId, param.pageContextIsSeeAllPage, param.sortPosition, param.sessionId,  options).toPromise();
    }

    /**
     * Gets games that the client should spotlight.
     * @param param the request object
     */
    public v1GamesListSpotlightGetWithHttpInfo(param: GamesApiV1GamesListSpotlightGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse>> {
        return this.api.v1GamesListSpotlightGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets games that the client should spotlight.
     * @param param the request object
     */
    public v1GamesListSpotlightGet(param: GamesApiV1GamesListSpotlightGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse> {
        return this.api.v1GamesListSpotlightGet( options).toPromise();
    }

    /**
     * Get place details
     * @param param the request object
     */
    public v1GamesMultigetPlaceDetailsGetWithHttpInfo(param: GamesApiV1GamesMultigetPlaceDetailsGetRequest, options?: Configuration): Promise<HttpInfo<Array<RobloxGamesApiModelsResponsePlaceDetails>>> {
        return this.api.v1GamesMultigetPlaceDetailsGetWithHttpInfo(param.placeIds,  options).toPromise();
    }

    /**
     * Get place details
     * @param param the request object
     */
    public v1GamesMultigetPlaceDetailsGet(param: GamesApiV1GamesMultigetPlaceDetailsGetRequest, options?: Configuration): Promise<Array<RobloxGamesApiModelsResponsePlaceDetails>> {
        return this.api.v1GamesMultigetPlaceDetailsGet(param.placeIds,  options).toPromise();
    }

    /**
     * Gets a list of universe playability statuses for the authenticated user
     * @param param the request object
     */
    public v1GamesMultigetPlayabilityStatusGetWithHttpInfo(param: GamesApiV1GamesMultigetPlayabilityStatusGetRequest, options?: Configuration): Promise<HttpInfo<Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>>> {
        return this.api.v1GamesMultigetPlayabilityStatusGetWithHttpInfo(param.universeIds,  options).toPromise();
    }

    /**
     * Gets a list of universe playability statuses for the authenticated user
     * @param param the request object
     */
    public v1GamesMultigetPlayabilityStatusGet(param: GamesApiV1GamesMultigetPlayabilityStatusGetRequest, options?: Configuration): Promise<Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>> {
        return this.api.v1GamesMultigetPlayabilityStatusGet(param.universeIds,  options).toPromise();
    }

    /**
     * Get games recommendations
     * @param param the request object
     */
    public v1GamesRecommendationsAlgorithmAlgorithmNameGetWithHttpInfo(param: GamesApiV1GamesRecommendationsAlgorithmAlgorithmNameGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse>> {
        return this.api.v1GamesRecommendationsAlgorithmAlgorithmNameGetWithHttpInfo(param.algorithmName, param.paginationKey, param.maxRows, param.isTruncatedResultsEnabled,  options).toPromise();
    }

    /**
     * Get games recommendations
     * @param param the request object
     */
    public v1GamesRecommendationsAlgorithmAlgorithmNameGet(param: GamesApiV1GamesRecommendationsAlgorithmAlgorithmNameGetRequest, options?: Configuration): Promise<RobloxGamesApiModelsResponseGameRecommendationsResponse> {
        return this.api.v1GamesRecommendationsAlgorithmAlgorithmNameGet(param.algorithmName, param.paginationKey, param.maxRows, param.isTruncatedResultsEnabled,  options).toPromise();
    }

    /**
     * Get games recommendations based on a given universe
     * @param param the request object
     */
    public v1GamesRecommendationsGameUniverseIdGetWithHttpInfo(param: GamesApiV1GamesRecommendationsGameUniverseIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse>> {
        return this.api.v1GamesRecommendationsGameUniverseIdGetWithHttpInfo(param.universeId, param.paginationKey, param.maxRows, param.isTruncatedResultsEnabled,  options).toPromise();
    }

    /**
     * Get games recommendations based on a given universe
     * @param param the request object
     */
    public v1GamesRecommendationsGameUniverseIdGet(param: GamesApiV1GamesRecommendationsGameUniverseIdGetRequest, options?: Configuration): Promise<RobloxGamesApiModelsResponseGameRecommendationsResponse> {
        return this.api.v1GamesRecommendationsGameUniverseIdGet(param.universeId, param.paginationKey, param.maxRows, param.isTruncatedResultsEnabled,  options).toPromise();
    }

    /**
     * Gets an ordered list of all sorts
     * @param param the request object
     */
    public v1GamesSortsGetWithHttpInfo(param: GamesApiV1GamesSortsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameSortsResponse>> {
        return this.api.v1GamesSortsGetWithHttpInfo(param.gameSortsContext,  options).toPromise();
    }

    /**
     * Gets an ordered list of all sorts
     * @param param the request object
     */
    public v1GamesSortsGet(param: GamesApiV1GamesSortsGetRequest, options?: Configuration): Promise<RobloxGamesApiModelsResponseGameSortsResponse> {
        return this.api.v1GamesSortsGet(param.gameSortsContext,  options).toPromise();
    }

    /**
     * Get the game media data
     * @param param the request object
     */
    public v1GamesUniverseIdMediaGetWithHttpInfo(param: GamesApiV1GamesUniverseIdMediaGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem>> {
        return this.api.v1GamesUniverseIdMediaGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Get the game media data
     * @param param the request object
     */
    public v1GamesUniverseIdMediaGet(param: GamesApiV1GamesUniverseIdMediaGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem> {
        return this.api.v1GamesUniverseIdMediaGet(param.universeId,  options).toPromise();
    }

}

import { ObservableVipServersApi } from "./ObservableAPI";
import { VipServersApiRequestFactory, VipServersApiResponseProcessor} from "../apis/VipServersApi";

export interface VipServersApiV1GamesVipServersUniverseIdPostRequest {
    /**
     * The id of the universe.
     * @type number
     * @memberof VipServersApiv1GamesVipServersUniverseIdPost
     */
    universeId: number
    /**
     * The request body.
     * @type RobloxGamesApiCreateVipServersRequest
     * @memberof VipServersApiv1GamesVipServersUniverseIdPost
     */
    requestBody: RobloxGamesApiCreateVipServersRequest
}

export interface VipServersApiV1PrivateServersEnabledInUniverseUniverseIdGetRequest {
    /**
     * 
     * @type number
     * @memberof VipServersApiv1PrivateServersEnabledInUniverseUniverseIdGet
     */
    universeId: number
}

export interface VipServersApiV1PrivateServersGetRequest {
    /**
     * 
     * @type Array&lt;number&gt;
     * @memberof VipServersApiv1PrivateServersGet
     */
    privateServerIds: Array<number>
}

export interface VipServersApiV1VipServerCanInviteUserIdGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof VipServersApiv1VipServerCanInviteUserIdGet
     */
    userId: number
}

export interface VipServersApiV1VipServersIdGetRequest {
    /**
     * The VIP Server ID
     * @type number
     * @memberof VipServersApiv1VipServersIdGet
     */
    id: number
}

export interface VipServersApiV1VipServersIdPatchRequest {
    /**
     * The VIP Server ID
     * @type number
     * @memberof VipServersApiv1VipServersIdPatch
     */
    id: number
    /**
     * The Roblox.Games.Api.VipServerUpdateRequest
     * @type RobloxGamesApiVipServerUpdateRequest
     * @memberof VipServersApiv1VipServersIdPatch
     */
    request: RobloxGamesApiVipServerUpdateRequest
}

export interface VipServersApiV1VipServersIdPermissionsPatchRequest {
    /**
     * The VIP Server ID
     * @type number
     * @memberof VipServersApiv1VipServersIdPermissionsPatch
     */
    id: number
    /**
     * The Roblox.Games.Api.VipServerUpdatePermissionsRequest
     * @type RobloxGamesApiVipServerUpdatePermissionsRequest
     * @memberof VipServersApiv1VipServersIdPermissionsPatch
     */
    request: RobloxGamesApiVipServerUpdatePermissionsRequest
}

export interface VipServersApiV1VipServersIdSubscriptionPatchRequest {
    /**
     * The VIP Server ID
     * @type number
     * @memberof VipServersApiv1VipServersIdSubscriptionPatch
     */
    id: number
    /**
     * The Roblox.Games.Api.VipServerUpdateSubscriptionRequest
     * @type RobloxGamesApiVipServerUpdateSubscriptionRequest
     * @memberof VipServersApiv1VipServersIdSubscriptionPatch
     */
    request: RobloxGamesApiVipServerUpdateSubscriptionRequest
}

export interface VipServersApiV1VipServersIdVoicesettingsPatchRequest {
    /**
     * The VIP Server ID
     * @type number
     * @memberof VipServersApiv1VipServersIdVoicesettingsPatch
     */
    id: number
    /**
     * The Roblox.Games.Api.VipServerUpdateVoiceSettingsRequest
     * @type RobloxGamesApiVipServerUpdateVoiceSettingsRequest
     * @memberof VipServersApiv1VipServersIdVoicesettingsPatch
     */
    request: RobloxGamesApiVipServerUpdateVoiceSettingsRequest
}

export class ObjectVipServersApi {
    private api: ObservableVipServersApi

    public constructor(configuration: Configuration, requestFactory?: VipServersApiRequestFactory, responseProcessor?: VipServersApiResponseProcessor) {
        this.api = new ObservableVipServersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create VIP server for a game
     * @param param the request object
     */
    public v1GamesVipServersUniverseIdPostWithHttpInfo(param: VipServersApiV1GamesVipServersUniverseIdPostRequest, options?: Configuration): Promise<HttpInfo<RobloxWebResponsesGamesGameServerResponse>> {
        return this.api.v1GamesVipServersUniverseIdPostWithHttpInfo(param.universeId, param.requestBody,  options).toPromise();
    }

    /**
     * Create VIP server for a game
     * @param param the request object
     */
    public v1GamesVipServersUniverseIdPost(param: VipServersApiV1GamesVipServersUniverseIdPostRequest, options?: Configuration): Promise<RobloxWebResponsesGamesGameServerResponse> {
        return this.api.v1GamesVipServersUniverseIdPost(param.universeId, param.requestBody,  options).toPromise();
    }

    /**
     * Checks if the private servers are enabled in the specified universe.
     * @param param the request object
     */
    public v1PrivateServersEnabledInUniverseUniverseIdGetWithHttpInfo(param: VipServersApiV1PrivateServersEnabledInUniverseUniverseIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse>> {
        return this.api.v1PrivateServersEnabledInUniverseUniverseIdGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Checks if the private servers are enabled in the specified universe.
     * @param param the request object
     */
    public v1PrivateServersEnabledInUniverseUniverseIdGet(param: VipServersApiV1PrivateServersEnabledInUniverseUniverseIdGetRequest, options?: Configuration): Promise<RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse> {
        return this.api.v1PrivateServersEnabledInUniverseUniverseIdGet(param.universeId,  options).toPromise();
    }

    /**
     * Get private servers from private server ids
     * @param param the request object
     */
    public v1PrivateServersGetWithHttpInfo(param: VipServersApiV1PrivateServersGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiPrivateServersResponse>> {
        return this.api.v1PrivateServersGetWithHttpInfo(param.privateServerIds,  options).toPromise();
    }

    /**
     * Get private servers from private server ids
     * @param param the request object
     */
    public v1PrivateServersGet(param: VipServersApiV1PrivateServersGetRequest, options?: Configuration): Promise<RobloxGamesApiPrivateServersResponse> {
        return this.api.v1PrivateServersGet(param.privateServerIds,  options).toPromise();
    }

    /**
     * Determines if a user by id is allowed to receive a VIP Server invite from the authenticated user.
     * @param param the request object
     */
    public v1VipServerCanInviteUserIdGetWithHttpInfo(param: VipServersApiV1VipServerCanInviteUserIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerCanInviteResponse>> {
        return this.api.v1VipServerCanInviteUserIdGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Determines if a user by id is allowed to receive a VIP Server invite from the authenticated user.
     * @param param the request object
     */
    public v1VipServerCanInviteUserIdGet(param: VipServersApiV1VipServerCanInviteUserIdGetRequest, options?: Configuration): Promise<RobloxGamesApiVipServerCanInviteResponse> {
        return this.api.v1VipServerCanInviteUserIdGet(param.userId,  options).toPromise();
    }

    /**
     * Get necessary data to generate webpage
     * @param param the request object
     */
    public v1VipServersIdGetWithHttpInfo(param: VipServersApiV1VipServersIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerResponse>> {
        return this.api.v1VipServersIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get necessary data to generate webpage
     * @param param the request object
     */
    public v1VipServersIdGet(param: VipServersApiV1VipServersIdGetRequest, options?: Configuration): Promise<RobloxGamesApiVipServerResponse> {
        return this.api.v1VipServersIdGet(param.id,  options).toPromise();
    }

    /**
     * Updates vip server
     * @param param the request object
     */
    public v1VipServersIdPatchWithHttpInfo(param: VipServersApiV1VipServersIdPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerResponse>> {
        return this.api.v1VipServersIdPatchWithHttpInfo(param.id, param.request,  options).toPromise();
    }

    /**
     * Updates vip server
     * @param param the request object
     */
    public v1VipServersIdPatch(param: VipServersApiV1VipServersIdPatchRequest, options?: Configuration): Promise<RobloxGamesApiVipServerResponse> {
        return this.api.v1VipServersIdPatch(param.id, param.request,  options).toPromise();
    }

    /**
     * Update friend/clan access and allowed friends/clan list
     * @param param the request object
     */
    public v1VipServersIdPermissionsPatchWithHttpInfo(param: VipServersApiV1VipServersIdPermissionsPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerPermissionsResponse>> {
        return this.api.v1VipServersIdPermissionsPatchWithHttpInfo(param.id, param.request,  options).toPromise();
    }

    /**
     * Update friend/clan access and allowed friends/clan list
     * @param param the request object
     */
    public v1VipServersIdPermissionsPatch(param: VipServersApiV1VipServersIdPermissionsPatchRequest, options?: Configuration): Promise<RobloxGamesApiVipServerPermissionsResponse> {
        return this.api.v1VipServersIdPermissionsPatch(param.id, param.request,  options).toPromise();
    }

    /**
     * Updates subscription status of a vip server
     * @param param the request object
     */
    public v1VipServersIdSubscriptionPatchWithHttpInfo(param: VipServersApiV1VipServersIdSubscriptionPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerSubscriptionResponse>> {
        return this.api.v1VipServersIdSubscriptionPatchWithHttpInfo(param.id, param.request,  options).toPromise();
    }

    /**
     * Updates subscription status of a vip server
     * @param param the request object
     */
    public v1VipServersIdSubscriptionPatch(param: VipServersApiV1VipServersIdSubscriptionPatchRequest, options?: Configuration): Promise<RobloxGamesApiVipServerSubscriptionResponse> {
        return this.api.v1VipServersIdSubscriptionPatch(param.id, param.request,  options).toPromise();
    }

    /**
     * Update voice settings for a private server.
     * @param param the request object
     */
    public v1VipServersIdVoicesettingsPatchWithHttpInfo(param: VipServersApiV1VipServersIdVoicesettingsPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiVipServerVoiceSettingsResponse>> {
        return this.api.v1VipServersIdVoicesettingsPatchWithHttpInfo(param.id, param.request,  options).toPromise();
    }

    /**
     * Update voice settings for a private server.
     * @param param the request object
     */
    public v1VipServersIdVoicesettingsPatch(param: VipServersApiV1VipServersIdVoicesettingsPatchRequest, options?: Configuration): Promise<RobloxGamesApiVipServerVoiceSettingsResponse> {
        return this.api.v1VipServersIdVoicesettingsPatch(param.id, param.request,  options).toPromise();
    }

}

import { ObservableVotesApi } from "./ObservableAPI";
import { VotesApiRequestFactory, VotesApiResponseProcessor} from "../apis/VotesApi";

export interface VotesApiV1GamesUniverseIdUserVotesPatchRequest {
    /**
     * The id of the universe.
     * @type number
     * @memberof VotesApiv1GamesUniverseIdUserVotesPatch
     */
    universeId: number
    /**
     * The request body.
     * @type RobloxGamesApiModelsRequestSetUserGameVoteRequest
     * @memberof VotesApiv1GamesUniverseIdUserVotesPatch
     */
    requestBody: RobloxGamesApiModelsRequestSetUserGameVoteRequest
}

export interface VotesApiV1GamesUniverseIdVotesGetRequest {
    /**
     * The id of the universe we get vote status from.
     * @type number
     * @memberof VotesApiv1GamesUniverseIdVotesGet
     */
    universeId: number
}

export interface VotesApiV1GamesUniverseIdVotesUserGetRequest {
    /**
     * The id of the universe we get user vote status from.
     * @type number
     * @memberof VotesApiv1GamesUniverseIdVotesUserGet
     */
    universeId: number
}

export interface VotesApiV1GamesVotesGetRequest {
    /**
     * A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     * @type Array&lt;number&gt;
     * @memberof VotesApiv1GamesVotesGet
     */
    universeIds: Array<number>
}

export class ObjectVotesApi {
    private api: ObservableVotesApi

    public constructor(configuration: Configuration, requestFactory?: VotesApiRequestFactory, responseProcessor?: VotesApiResponseProcessor) {
        this.api = new ObservableVotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set the user\'s vote for a game
     * @param param the request object
     */
    public v1GamesUniverseIdUserVotesPatchWithHttpInfo(param: VotesApiV1GamesUniverseIdUserVotesPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GamesUniverseIdUserVotesPatchWithHttpInfo(param.universeId, param.requestBody,  options).toPromise();
    }

    /**
     * Set the user\'s vote for a game
     * @param param the request object
     */
    public v1GamesUniverseIdUserVotesPatch(param: VotesApiV1GamesUniverseIdUserVotesPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1GamesUniverseIdUserVotesPatch(param.universeId, param.requestBody,  options).toPromise();
    }

    /**
     * Get the game vote status
     * @param param the request object
     */
    public v1GamesUniverseIdVotesGetWithHttpInfo(param: VotesApiV1GamesUniverseIdVotesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseGameVoteResponse>> {
        return this.api.v1GamesUniverseIdVotesGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Get the game vote status
     * @param param the request object
     */
    public v1GamesUniverseIdVotesGet(param: VotesApiV1GamesUniverseIdVotesGetRequest, options?: Configuration): Promise<RobloxGamesApiModelsResponseGameVoteResponse> {
        return this.api.v1GamesUniverseIdVotesGet(param.universeId,  options).toPromise();
    }

    /**
     * Get the user\'s vote status for a game
     * @param param the request object
     */
    public v1GamesUniverseIdVotesUserGetWithHttpInfo(param: VotesApiV1GamesUniverseIdVotesUserGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGamesApiModelsResponseUserGameVoteResponse>> {
        return this.api.v1GamesUniverseIdVotesUserGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Get the user\'s vote status for a game
     * @param param the request object
     */
    public v1GamesUniverseIdVotesUserGet(param: VotesApiV1GamesUniverseIdVotesUserGetRequest, options?: Configuration): Promise<RobloxGamesApiModelsResponseUserGameVoteResponse> {
        return this.api.v1GamesUniverseIdVotesUserGet(param.universeId,  options).toPromise();
    }

    /**
     * Gets a list of universe vote status
     * @param param the request object
     */
    public v1GamesVotesGetWithHttpInfo(param: VotesApiV1GamesVotesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse>> {
        return this.api.v1GamesVotesGetWithHttpInfo(param.universeIds,  options).toPromise();
    }

    /**
     * Gets a list of universe vote status
     * @param param the request object
     */
    public v1GamesVotesGet(param: VotesApiV1GamesVotesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse> {
        return this.api.v1GamesVotesGet(param.universeIds,  options).toPromise();
    }

}
