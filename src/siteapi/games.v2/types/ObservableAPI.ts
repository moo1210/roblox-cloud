import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { RobloxWebResponsesGamesGameMediaItemResponseV2 } from '../models/RobloxWebResponsesGamesGameMediaItemResponseV2';
import { RobloxWebResponsesGamesGameResponseV2 } from '../models/RobloxWebResponsesGamesGameResponseV2';
import { RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformAssetsAssetType } from '../models/RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformAssetsAssetType';
import { RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformCoreCreatorType } from '../models/RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformCoreCreatorType';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt32 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt32';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2 } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2';
import { RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2';

import { GamesV2ApiRequestFactory, GamesV2ApiResponseProcessor} from "../apis/GamesV2Api";
export class ObservableGamesV2Api {
    private requestFactory: GamesV2ApiRequestFactory;
    private responseProcessor: GamesV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GamesV2ApiRequestFactory,
        responseProcessor?: GamesV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GamesV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GamesV2ApiResponseProcessor();
    }

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public v2GamesUniverseIdMediaGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2>> {
        const requestContextPromise = this.requestFactory.v2GamesUniverseIdMediaGet(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GamesUniverseIdMediaGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public v2GamesUniverseIdMediaGet(universeId: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2> {
        return this.v2GamesUniverseIdMediaGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2>) => apiResponse.data));
    }

    /**
     * Gets games created by the specified group.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdGamesGetWithHttpInfo(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        const requestContextPromise = this.requestFactory.v2GroupsGroupIdGamesGet(groupId, accessFilter, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GroupsGroupIdGamesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets games created by the specified group.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdGamesGet(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        return this.v2GroupsGroupIdGamesGetWithHttpInfo(groupId, accessFilter, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>) => apiResponse.data));
    }

    /**
     * Gets games created by the specified group. This will replace V1 after validation. Note that this can only used for public/all universes.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdGamesV2GetWithHttpInfo(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        const requestContextPromise = this.requestFactory.v2GroupsGroupIdGamesV2Get(groupId, accessFilter, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GroupsGroupIdGamesV2GetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets games created by the specified group. This will replace V1 after validation. Note that this can only used for public/all universes.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdGamesV2Get(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        return this.v2GroupsGroupIdGamesV2GetWithHttpInfo(groupId, accessFilter, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>) => apiResponse.data));
    }

    /**
     * Gets users favorite games.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdFavoriteGamesGetWithHttpInfo(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        const requestContextPromise = this.requestFactory.v2UsersUserIdFavoriteGamesGet(userId, accessFilter, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UsersUserIdFavoriteGamesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets users favorite games.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdFavoriteGamesGet(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        return this.v2UsersUserIdFavoriteGamesGetWithHttpInfo(userId, accessFilter, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>) => apiResponse.data));
    }

    /**
     * Gets games created by the specified user.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdGamesGetWithHttpInfo(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        const requestContextPromise = this.requestFactory.v2UsersUserIdGamesGet(userId, accessFilter, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UsersUserIdGamesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets games created by the specified user.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdGamesGet(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        return this.v2UsersUserIdGamesGetWithHttpInfo(userId, accessFilter, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>) => apiResponse.data));
    }

}
