import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
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

import { FavoritesApiRequestFactory, FavoritesApiResponseProcessor} from "../apis/FavoritesApi";
export class ObservableFavoritesApi {
    private requestFactory: FavoritesApiRequestFactory;
    private responseProcessor: FavoritesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FavoritesApiRequestFactory,
        responseProcessor?: FavoritesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FavoritesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FavoritesApiResponseProcessor();
    }

    /**
     * Get the favorites count of the a specific game
     * @param universeId The Id of the universe.
     */
    public v1GamesUniverseIdFavoritesCountGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiModelsResponseGameFavoritesCountResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesUniverseIdFavoritesCountGet(universeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesUniverseIdFavoritesCountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the favorites count of the a specific game
     * @param universeId The Id of the universe.
     */
    public v1GamesUniverseIdFavoritesCountGet(universeId: number, _options?: Configuration): Observable<RobloxGamesApiModelsResponseGameFavoritesCountResponse> {
        return this.v1GamesUniverseIdFavoritesCountGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiModelsResponseGameFavoritesCountResponse>) => apiResponse.data));
    }

    /**
     * Returns if a game was marked as favorite for the authenticated user
     * @param universeId The Id of the universe.
     */
    public v1GamesUniverseIdFavoritesGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiModelsResponseGameFavoriteResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesUniverseIdFavoritesGet(universeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesUniverseIdFavoritesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns if a game was marked as favorite for the authenticated user
     * @param universeId The Id of the universe.
     */
    public v1GamesUniverseIdFavoritesGet(universeId: number, _options?: Configuration): Observable<RobloxGamesApiModelsResponseGameFavoriteResponse> {
        return this.v1GamesUniverseIdFavoritesGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiModelsResponseGameFavoriteResponse>) => apiResponse.data));
    }

    /**
     * Favors (or unfavors) a game for the authenticated user
     * @param universeId The Id of the universe.
     * @param request Request data.
     */
    public v1GamesUniverseIdFavoritesPostWithHttpInfo(universeId: number, request: RobloxGamesApiModelsRequestGameFavoritesRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GamesUniverseIdFavoritesPost(universeId, request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesUniverseIdFavoritesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Favors (or unfavors) a game for the authenticated user
     * @param universeId The Id of the universe.
     * @param request Request data.
     */
    public v1GamesUniverseIdFavoritesPost(universeId: number, request: RobloxGamesApiModelsRequestGameFavoritesRequest, _options?: Configuration): Observable<any> {
        return this.v1GamesUniverseIdFavoritesPostWithHttpInfo(universeId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { GameInstancesApiRequestFactory, GameInstancesApiResponseProcessor} from "../apis/GameInstancesApi";
export class ObservableGameInstancesApi {
    private requestFactory: GameInstancesApiRequestFactory;
    private responseProcessor: GameInstancesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GameInstancesApiRequestFactory,
        responseProcessor?: GameInstancesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GameInstancesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GameInstancesApiResponseProcessor();
    }

    /**
     * Get list of private servers user can access for given game id.
     * @param placeId The Id of the place we are geting the private server list for.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GamesPlaceIdPrivateServersGetWithHttpInfo(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesPlaceIdPrivateServersGet(placeId, limit, cursor, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesPlaceIdPrivateServersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of private servers user can access for given game id.
     * @param placeId The Id of the place we are geting the private server list for.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GamesPlaceIdPrivateServersGet(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse> {
        return this.v1GamesPlaceIdPrivateServersGetWithHttpInfo(placeId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse>) => apiResponse.data));
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
    public v1GamesPlaceIdServersServerTypeGetWithHttpInfo(placeId: number, serverType: 0 | 1, sortOrder?: 1 | 2, excludeFullGames?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesPlaceIdServersServerTypeGet(placeId, serverType, sortOrder, excludeFullGames, limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesPlaceIdServersServerTypeGetWithHttpInfo(rsp)));
            }));
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
    public v1GamesPlaceIdServersServerTypeGet(placeId: number, serverType: 0 | 1, sortOrder?: 1 | 2, excludeFullGames?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse> {
        return this.v1GamesPlaceIdServersServerTypeGetWithHttpInfo(placeId, serverType, sortOrder, excludeFullGames, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameServerResponse>) => apiResponse.data));
    }

}

import { GamePassesApiRequestFactory, GamePassesApiResponseProcessor} from "../apis/GamePassesApi";
export class ObservableGamePassesApi {
    private requestFactory: GamePassesApiRequestFactory;
    private responseProcessor: GamePassesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GamePassesApiRequestFactory,
        responseProcessor?: GamePassesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GamePassesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GamePassesApiResponseProcessor();
    }

    /**
     * Get the game\'s game passes
     * @param universeId The id of the universe.
     * @param limit 
     * @param sortOrder 
     * @param cursor The cursor to figure out where to start fetching
     */
    public v1GamesUniverseIdGamePassesGetWithHttpInfo(universeId: number, limit: number, sortOrder?: 1 | 2, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGamesApiModelsResponseGamePassResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesUniverseIdGamePassesGet(universeId, limit, sortOrder, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesUniverseIdGamePassesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the game\'s game passes
     * @param universeId The id of the universe.
     * @param limit 
     * @param sortOrder 
     * @param cursor The cursor to figure out where to start fetching
     */
    public v1GamesUniverseIdGamePassesGet(universeId: number, limit: number, sortOrder?: 1 | 2, cursor?: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxGamesApiModelsResponseGamePassResponse> {
        return this.v1GamesUniverseIdGamePassesGetWithHttpInfo(universeId, limit, sortOrder, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGamesApiModelsResponseGamePassResponse>) => apiResponse.data));
    }

}

import { GamesApiRequestFactory, GamesApiResponseProcessor} from "../apis/GamesApi";
export class ObservableGamesApi {
    private requestFactory: GamesApiRequestFactory;
    private responseProcessor: GamesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GamesApiRequestFactory,
        responseProcessor?: GamesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GamesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GamesApiResponseProcessor();
    }

    /**
     * Get a single game thumbnail
     * @param imageToken 
     * @param height 
     * @param width 
     */
    public v1GamesGameThumbnailGetWithHttpInfo(imageToken: string, height?: number, width?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v1GamesGameThumbnailGet(imageToken, height, width, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesGameThumbnailGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single game thumbnail
     * @param imageToken 
     * @param height 
     * @param width 
     */
    public v1GamesGameThumbnailGet(imageToken: string, height?: number, width?: number, _options?: Configuration): Observable<void> {
        return this.v1GamesGameThumbnailGetWithHttpInfo(imageToken, height, width, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets a list of game thumbnails
     * @param imageTokens 
     * @param height 
     * @param width 
     */
    public v1GamesGameThumbnailsGetWithHttpInfo(imageTokens: Array<string>, height?: number, width?: number, _options?: Configuration): Observable<HttpInfo<Array<RobloxGamesApiModelsResponseThumbnail>>> {
        const requestContextPromise = this.requestFactory.v1GamesGameThumbnailsGet(imageTokens, height, width, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesGameThumbnailsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of game thumbnails
     * @param imageTokens 
     * @param height 
     * @param width 
     */
    public v1GamesGameThumbnailsGet(imageTokens: Array<string>, height?: number, width?: number, _options?: Configuration): Observable<Array<RobloxGamesApiModelsResponseThumbnail>> {
        return this.v1GamesGameThumbnailsGetWithHttpInfo(imageTokens, height, width, _options).pipe(map((apiResponse: HttpInfo<Array<RobloxGamesApiModelsResponseThumbnail>>) => apiResponse.data));
    }

    /**
     * Gets a list of games\' product info, used to purchase a game
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesGamesProductInfoGetWithHttpInfo(universeIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesGamesProductInfoGet(universeIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesGamesProductInfoGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of games\' product info, used to purchase a game
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesGamesProductInfoGet(universeIds: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse> {
        return this.v1GamesGamesProductInfoGetWithHttpInfo(universeIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameProductResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of games\' detail
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesGetWithHttpInfo(universeIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesGet(universeIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of games\' detail
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesGet(universeIds: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse> {
        return this.v1GamesGetWithHttpInfo(universeIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameDetailResponse>) => apiResponse.data));
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
    public v1GamesListGetWithHttpInfo(sortToken: string, gameFilter: string, timeFilter: string, genreFilter: string, exclusiveStartId: number, sortOrder: number, gameSetTargetId: number, keyword: string, startRows: number, maxRows: number, contextCountryRegionId: number, contextUniverseId: number, pageContextPageId: string, pageContextIsSeeAllPage: boolean, sortPosition: number, sessionId: string, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiModelsResponseGamesSearchResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesListGet(sortToken, gameFilter, timeFilter, genreFilter, exclusiveStartId, sortOrder, gameSetTargetId, keyword, startRows, maxRows, contextCountryRegionId, contextUniverseId, pageContextPageId, pageContextIsSeeAllPage, sortPosition, sessionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesListGetWithHttpInfo(rsp)));
            }));
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
    public v1GamesListGet(sortToken: string, gameFilter: string, timeFilter: string, genreFilter: string, exclusiveStartId: number, sortOrder: number, gameSetTargetId: number, keyword: string, startRows: number, maxRows: number, contextCountryRegionId: number, contextUniverseId: number, pageContextPageId: string, pageContextIsSeeAllPage: boolean, sortPosition: number, sessionId: string, _options?: Configuration): Observable<RobloxGamesApiModelsResponseGamesSearchResponse> {
        return this.v1GamesListGetWithHttpInfo(sortToken, gameFilter, timeFilter, genreFilter, exclusiveStartId, sortOrder, gameSetTargetId, keyword, startRows, maxRows, contextCountryRegionId, contextUniverseId, pageContextPageId, pageContextIsSeeAllPage, sortPosition, sessionId, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiModelsResponseGamesSearchResponse>) => apiResponse.data));
    }

    /**
     * Gets games that the client should spotlight.
     */
    public v1GamesListSpotlightGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesListSpotlightGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesListSpotlightGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets games that the client should spotlight.
     */
    public v1GamesListSpotlightGet(_options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse> {
        return this.v1GamesListSpotlightGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameSpotlightResponse>) => apiResponse.data));
    }

    /**
     * Get place details
     * @param placeIds List of placeId to uniquely Identify a place
     */
    public v1GamesMultigetPlaceDetailsGetWithHttpInfo(placeIds: Array<number>, _options?: Configuration): Observable<HttpInfo<Array<RobloxGamesApiModelsResponsePlaceDetails>>> {
        const requestContextPromise = this.requestFactory.v1GamesMultigetPlaceDetailsGet(placeIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesMultigetPlaceDetailsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get place details
     * @param placeIds List of placeId to uniquely Identify a place
     */
    public v1GamesMultigetPlaceDetailsGet(placeIds: Array<number>, _options?: Configuration): Observable<Array<RobloxGamesApiModelsResponsePlaceDetails>> {
        return this.v1GamesMultigetPlaceDetailsGetWithHttpInfo(placeIds, _options).pipe(map((apiResponse: HttpInfo<Array<RobloxGamesApiModelsResponsePlaceDetails>>) => apiResponse.data));
    }

    /**
     * Gets a list of universe playability statuses for the authenticated user
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesMultigetPlayabilityStatusGetWithHttpInfo(universeIds: Array<number>, _options?: Configuration): Observable<HttpInfo<Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>>> {
        const requestContextPromise = this.requestFactory.v1GamesMultigetPlayabilityStatusGet(universeIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesMultigetPlayabilityStatusGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of universe playability statuses for the authenticated user
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesMultigetPlayabilityStatusGet(universeIds: Array<number>, _options?: Configuration): Observable<Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>> {
        return this.v1GamesMultigetPlayabilityStatusGetWithHttpInfo(universeIds, _options).pipe(map((apiResponse: HttpInfo<Array<RobloxGamesApiModelsResponsePlayabilityStatusResponse>>) => apiResponse.data));
    }

    /**
     * Get games recommendations
     * @param algorithmName The algorithm name of recommendations
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public v1GamesRecommendationsAlgorithmAlgorithmNameGetWithHttpInfo(algorithmName: string, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesRecommendationsAlgorithmAlgorithmNameGet(algorithmName, paginationKey, maxRows, isTruncatedResultsEnabled, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesRecommendationsAlgorithmAlgorithmNameGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get games recommendations
     * @param algorithmName The algorithm name of recommendations
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public v1GamesRecommendationsAlgorithmAlgorithmNameGet(algorithmName: string, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Observable<RobloxGamesApiModelsResponseGameRecommendationsResponse> {
        return this.v1GamesRecommendationsAlgorithmAlgorithmNameGetWithHttpInfo(algorithmName, paginationKey, maxRows, isTruncatedResultsEnabled, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse>) => apiResponse.data));
    }

    /**
     * Get games recommendations based on a given universe
     * @param universeId The universe to base recommendations on
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public v1GamesRecommendationsGameUniverseIdGetWithHttpInfo(universeId: number, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesRecommendationsGameUniverseIdGet(universeId, paginationKey, maxRows, isTruncatedResultsEnabled, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesRecommendationsGameUniverseIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get games recommendations based on a given universe
     * @param universeId The universe to base recommendations on
     * @param paginationKey The key of a page, which includes the start row index and all other necessary information to query the data.  This parameter is usually not needed for the first page.
     * @param maxRows The requested number of rows.
     * @param isTruncatedResultsEnabled Truncated Results
     */
    public v1GamesRecommendationsGameUniverseIdGet(universeId: number, paginationKey: string, maxRows: number, isTruncatedResultsEnabled: boolean, _options?: Configuration): Observable<RobloxGamesApiModelsResponseGameRecommendationsResponse> {
        return this.v1GamesRecommendationsGameUniverseIdGetWithHttpInfo(universeId, paginationKey, maxRows, isTruncatedResultsEnabled, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiModelsResponseGameRecommendationsResponse>) => apiResponse.data));
    }

    /**
     * Gets an ordered list of all sorts
     * @param gameSortsContext Context to determine which game sorts are being requested.
     */
    public v1GamesSortsGetWithHttpInfo(gameSortsContext: 0 | 1 | 2 | 3 | 4 | 6 | 7, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiModelsResponseGameSortsResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesSortsGet(gameSortsContext, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesSortsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets an ordered list of all sorts
     * @param gameSortsContext Context to determine which game sorts are being requested.
     */
    public v1GamesSortsGet(gameSortsContext: 0 | 1 | 2 | 3 | 4 | 6 | 7, _options?: Configuration): Observable<RobloxGamesApiModelsResponseGameSortsResponse> {
        return this.v1GamesSortsGetWithHttpInfo(gameSortsContext, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiModelsResponseGameSortsResponse>) => apiResponse.data));
    }

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public v1GamesUniverseIdMediaGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem>> {
        const requestContextPromise = this.requestFactory.v1GamesUniverseIdMediaGet(universeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesUniverseIdMediaGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public v1GamesUniverseIdMediaGet(universeId: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem> {
        return this.v1GamesUniverseIdMediaGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameMediaItem>) => apiResponse.data));
    }

}

import { VipServersApiRequestFactory, VipServersApiResponseProcessor} from "../apis/VipServersApi";
export class ObservableVipServersApi {
    private requestFactory: VipServersApiRequestFactory;
    private responseProcessor: VipServersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VipServersApiRequestFactory,
        responseProcessor?: VipServersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VipServersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VipServersApiResponseProcessor();
    }

    /**
     * Create VIP server for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public v1GamesVipServersUniverseIdPostWithHttpInfo(universeId: number, requestBody: RobloxGamesApiCreateVipServersRequest, _options?: Configuration): Observable<HttpInfo<RobloxWebResponsesGamesGameServerResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesVipServersUniverseIdPost(universeId, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesVipServersUniverseIdPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create VIP server for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public v1GamesVipServersUniverseIdPost(universeId: number, requestBody: RobloxGamesApiCreateVipServersRequest, _options?: Configuration): Observable<RobloxWebResponsesGamesGameServerResponse> {
        return this.v1GamesVipServersUniverseIdPostWithHttpInfo(universeId, requestBody, _options).pipe(map((apiResponse: HttpInfo<RobloxWebResponsesGamesGameServerResponse>) => apiResponse.data));
    }

    /**
     * Checks if the private servers are enabled in the specified universe.
     * @param universeId 
     */
    public v1PrivateServersEnabledInUniverseUniverseIdGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse>> {
        const requestContextPromise = this.requestFactory.v1PrivateServersEnabledInUniverseUniverseIdGet(universeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PrivateServersEnabledInUniverseUniverseIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Checks if the private servers are enabled in the specified universe.
     * @param universeId 
     */
    public v1PrivateServersEnabledInUniverseUniverseIdGet(universeId: number, _options?: Configuration): Observable<RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse> {
        return this.v1PrivateServersEnabledInUniverseUniverseIdGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiModelsResponsePrivateServersEnabledInUniverseResponse>) => apiResponse.data));
    }

    /**
     * Get private servers from private server ids
     * @param privateServerIds 
     */
    public v1PrivateServersGetWithHttpInfo(privateServerIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiPrivateServersResponse>> {
        const requestContextPromise = this.requestFactory.v1PrivateServersGet(privateServerIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PrivateServersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get private servers from private server ids
     * @param privateServerIds 
     */
    public v1PrivateServersGet(privateServerIds: Array<number>, _options?: Configuration): Observable<RobloxGamesApiPrivateServersResponse> {
        return this.v1PrivateServersGetWithHttpInfo(privateServerIds, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiPrivateServersResponse>) => apiResponse.data));
    }

    /**
     * Determines if a user by id is allowed to receive a VIP Server invite from the authenticated user.
     * @param userId The user id.
     */
    public v1VipServerCanInviteUserIdGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiVipServerCanInviteResponse>> {
        const requestContextPromise = this.requestFactory.v1VipServerCanInviteUserIdGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1VipServerCanInviteUserIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Determines if a user by id is allowed to receive a VIP Server invite from the authenticated user.
     * @param userId The user id.
     */
    public v1VipServerCanInviteUserIdGet(userId: number, _options?: Configuration): Observable<RobloxGamesApiVipServerCanInviteResponse> {
        return this.v1VipServerCanInviteUserIdGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiVipServerCanInviteResponse>) => apiResponse.data));
    }

    /**
     * Get necessary data to generate webpage
     * @param id The VIP Server ID
     */
    public v1VipServersIdGetWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiVipServerResponse>> {
        const requestContextPromise = this.requestFactory.v1VipServersIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1VipServersIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get necessary data to generate webpage
     * @param id The VIP Server ID
     */
    public v1VipServersIdGet(id: number, _options?: Configuration): Observable<RobloxGamesApiVipServerResponse> {
        return this.v1VipServersIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiVipServerResponse>) => apiResponse.data));
    }

    /**
     * Updates vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateRequest
     */
    public v1VipServersIdPatchWithHttpInfo(id: number, request: RobloxGamesApiVipServerUpdateRequest, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiVipServerResponse>> {
        const requestContextPromise = this.requestFactory.v1VipServersIdPatch(id, request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1VipServersIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateRequest
     */
    public v1VipServersIdPatch(id: number, request: RobloxGamesApiVipServerUpdateRequest, _options?: Configuration): Observable<RobloxGamesApiVipServerResponse> {
        return this.v1VipServersIdPatchWithHttpInfo(id, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiVipServerResponse>) => apiResponse.data));
    }

    /**
     * Update friend/clan access and allowed friends/clan list
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdatePermissionsRequest
     */
    public v1VipServersIdPermissionsPatchWithHttpInfo(id: number, request: RobloxGamesApiVipServerUpdatePermissionsRequest, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiVipServerPermissionsResponse>> {
        const requestContextPromise = this.requestFactory.v1VipServersIdPermissionsPatch(id, request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1VipServersIdPermissionsPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update friend/clan access and allowed friends/clan list
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdatePermissionsRequest
     */
    public v1VipServersIdPermissionsPatch(id: number, request: RobloxGamesApiVipServerUpdatePermissionsRequest, _options?: Configuration): Observable<RobloxGamesApiVipServerPermissionsResponse> {
        return this.v1VipServersIdPermissionsPatchWithHttpInfo(id, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiVipServerPermissionsResponse>) => apiResponse.data));
    }

    /**
     * Updates subscription status of a vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateSubscriptionRequest
     */
    public v1VipServersIdSubscriptionPatchWithHttpInfo(id: number, request: RobloxGamesApiVipServerUpdateSubscriptionRequest, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiVipServerSubscriptionResponse>> {
        const requestContextPromise = this.requestFactory.v1VipServersIdSubscriptionPatch(id, request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1VipServersIdSubscriptionPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates subscription status of a vip server
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateSubscriptionRequest
     */
    public v1VipServersIdSubscriptionPatch(id: number, request: RobloxGamesApiVipServerUpdateSubscriptionRequest, _options?: Configuration): Observable<RobloxGamesApiVipServerSubscriptionResponse> {
        return this.v1VipServersIdSubscriptionPatchWithHttpInfo(id, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiVipServerSubscriptionResponse>) => apiResponse.data));
    }

    /**
     * Update voice settings for a private server.
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateVoiceSettingsRequest
     */
    public v1VipServersIdVoicesettingsPatchWithHttpInfo(id: number, request: RobloxGamesApiVipServerUpdateVoiceSettingsRequest, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiVipServerVoiceSettingsResponse>> {
        const requestContextPromise = this.requestFactory.v1VipServersIdVoicesettingsPatch(id, request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1VipServersIdVoicesettingsPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update voice settings for a private server.
     * @param id The VIP Server ID
     * @param request The Roblox.Games.Api.VipServerUpdateVoiceSettingsRequest
     */
    public v1VipServersIdVoicesettingsPatch(id: number, request: RobloxGamesApiVipServerUpdateVoiceSettingsRequest, _options?: Configuration): Observable<RobloxGamesApiVipServerVoiceSettingsResponse> {
        return this.v1VipServersIdVoicesettingsPatchWithHttpInfo(id, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiVipServerVoiceSettingsResponse>) => apiResponse.data));
    }

}

import { VotesApiRequestFactory, VotesApiResponseProcessor} from "../apis/VotesApi";
export class ObservableVotesApi {
    private requestFactory: VotesApiRequestFactory;
    private responseProcessor: VotesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VotesApiRequestFactory,
        responseProcessor?: VotesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VotesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VotesApiResponseProcessor();
    }

    /**
     * Set the user\'s vote for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public v1GamesUniverseIdUserVotesPatchWithHttpInfo(universeId: number, requestBody: RobloxGamesApiModelsRequestSetUserGameVoteRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GamesUniverseIdUserVotesPatch(universeId, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesUniverseIdUserVotesPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set the user\'s vote for a game
     * @param universeId The id of the universe.
     * @param requestBody The request body.
     */
    public v1GamesUniverseIdUserVotesPatch(universeId: number, requestBody: RobloxGamesApiModelsRequestSetUserGameVoteRequest, _options?: Configuration): Observable<any> {
        return this.v1GamesUniverseIdUserVotesPatchWithHttpInfo(universeId, requestBody, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get the game vote status
     * @param universeId The id of the universe we get vote status from.
     */
    public v1GamesUniverseIdVotesGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiModelsResponseGameVoteResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesUniverseIdVotesGet(universeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesUniverseIdVotesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the game vote status
     * @param universeId The id of the universe we get vote status from.
     */
    public v1GamesUniverseIdVotesGet(universeId: number, _options?: Configuration): Observable<RobloxGamesApiModelsResponseGameVoteResponse> {
        return this.v1GamesUniverseIdVotesGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiModelsResponseGameVoteResponse>) => apiResponse.data));
    }

    /**
     * Get the user\'s vote status for a game
     * @param universeId The id of the universe we get user vote status from.
     */
    public v1GamesUniverseIdVotesUserGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxGamesApiModelsResponseUserGameVoteResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesUniverseIdVotesUserGet(universeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesUniverseIdVotesUserGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the user\'s vote status for a game
     * @param universeId The id of the universe we get user vote status from.
     */
    public v1GamesUniverseIdVotesUserGet(universeId: number, _options?: Configuration): Observable<RobloxGamesApiModelsResponseUserGameVoteResponse> {
        return this.v1GamesUniverseIdVotesUserGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxGamesApiModelsResponseUserGameVoteResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of universe vote status
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesVotesGetWithHttpInfo(universeIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesVotesGet(universeIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesVotesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of universe vote status
     * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
     */
    public v1GamesVotesGet(universeIds: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse> {
        return this.v1GamesVotesGetWithHttpInfo(universeIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse>) => apiResponse.data));
    }

}
