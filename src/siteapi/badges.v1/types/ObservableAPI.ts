import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxBadgesApiBadgeAwardResponse } from '../models/RobloxBadgesApiBadgeAwardResponse';
import { RobloxBadgesApiBadgeMetadataResponse } from '../models/RobloxBadgesApiBadgeMetadataResponse';
import { RobloxBadgesApiBadgeResponse } from '../models/RobloxBadgesApiBadgeResponse';
import { RobloxBadgesApiUniverseResponse } from '../models/RobloxBadgesApiUniverseResponse';
import { RobloxBadgesApiUpdateBadgeRequest } from '../models/RobloxBadgesApiUpdateBadgeRequest';
import { RobloxPagingExclusiveStartKeyCursorSystemString } from '../models/RobloxPagingExclusiveStartKeyCursorSystemString';
import { RobloxWebResponsesBadgesBadgeAwardStatisticsResponse } from '../models/RobloxWebResponsesBadgesBadgeAwardStatisticsResponse';
import { RobloxWebResponsesBadgesBadgeResponseV2 } from '../models/RobloxWebResponsesBadgesBadgeResponseV2';
import { RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformBadgesBadgeAwarderType } from '../models/RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformBadgesBadgeAwarderType';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2 } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2';
import { SystemIOStream } from '../models/SystemIOStream';

import { BadgeAwardsApiRequestFactory, BadgeAwardsApiResponseProcessor} from "../apis/BadgeAwardsApi";
export class ObservableBadgeAwardsApi {
    private requestFactory: BadgeAwardsApiRequestFactory;
    private responseProcessor: BadgeAwardsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BadgeAwardsApiRequestFactory,
        responseProcessor?: BadgeAwardsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BadgeAwardsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BadgeAwardsApiResponseProcessor();
    }

    /**
     * Removes a badge from the authenticated user.
     * @param badgeId The badge Id.
     */
    public v1UserBadgesBadgeIdDeleteWithHttpInfo(badgeId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UserBadgesBadgeIdDelete(badgeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserBadgesBadgeIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a badge from the authenticated user.
     * @param badgeId The badge Id.
     */
    public v1UserBadgesBadgeIdDelete(badgeId: number, _options?: Configuration): Observable<any> {
        return this.v1UserBadgesBadgeIdDeleteWithHttpInfo(badgeId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Removes a badge from the user.
     * @param userId 
     * @param badgeId The badge Id.
     */
    public v1UserUserIdBadgesBadgeIdDeleteWithHttpInfo(userId: number, badgeId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UserUserIdBadgesBadgeIdDelete(userId, badgeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserUserIdBadgesBadgeIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a badge from the user.
     * @param userId 
     * @param badgeId The badge Id.
     */
    public v1UserUserIdBadgesBadgeIdDelete(userId: number, badgeId: number, _options?: Configuration): Observable<any> {
        return this.v1UserUserIdBadgesBadgeIdDeleteWithHttpInfo(userId, badgeId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets timestamps for when badges were awarded to a user.
     * @param userId The user Id.
     * @param badgeIds The CSV of badge Ids.
     */
    public v1UsersUserIdBadgesAwardedDatesGetWithHttpInfo(userId: number, badgeIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdBadgesAwardedDatesGet(userId, badgeIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdBadgesAwardedDatesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets timestamps for when badges were awarded to a user.
     * @param userId The user Id.
     * @param badgeIds The CSV of badge Ids.
     */
    public v1UsersUserIdBadgesAwardedDatesGet(userId: number, badgeIds: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse> {
        return this.v1UsersUserIdBadgesAwardedDatesGetWithHttpInfo(userId, badgeIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse>) => apiResponse.data));
    }

    /**
     * Gets timestamp for when a single badge was awarded to a user.
     * @param userId User id.
     * @param badgeId Badge id.
     */
    public v1UsersUserIdBadgesBadgeIdAwardedDateGetWithHttpInfo(userId: number, badgeId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdBadgesBadgeIdAwardedDateGet(userId, badgeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdBadgesBadgeIdAwardedDateGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets timestamp for when a single badge was awarded to a user.
     * @param userId User id.
     * @param badgeId Badge id.
     */
    public v1UsersUserIdBadgesBadgeIdAwardedDateGet(userId: number, badgeId: number, _options?: Configuration): Observable<void> {
        return this.v1UsersUserIdBadgesBadgeIdAwardedDateGetWithHttpInfo(userId, badgeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { BadgesApiRequestFactory, BadgesApiResponseProcessor} from "../apis/BadgesApi";
export class ObservableBadgesApi {
    private requestFactory: BadgesApiRequestFactory;
    private responseProcessor: BadgesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BadgesApiRequestFactory,
        responseProcessor?: BadgesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BadgesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BadgesApiResponseProcessor();
    }

    /**
     * Gets badge information by the badge Id.
     * @param badgeId The badge Id.
     */
    public v1BadgesBadgeIdGetWithHttpInfo(badgeId: number, _options?: Configuration): Observable<HttpInfo<RobloxBadgesApiBadgeResponse>> {
        const requestContextPromise = this.requestFactory.v1BadgesBadgeIdGet(badgeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BadgesBadgeIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets badge information by the badge Id.
     * @param badgeId The badge Id.
     */
    public v1BadgesBadgeIdGet(badgeId: number, _options?: Configuration): Observable<RobloxBadgesApiBadgeResponse> {
        return this.v1BadgesBadgeIdGetWithHttpInfo(badgeId, _options).pipe(map((apiResponse: HttpInfo<RobloxBadgesApiBadgeResponse>) => apiResponse.data));
    }

    /**
     * Updates badge configuration.
     * @param badgeId The badge Id.
     * @param request The request body.
     */
    public v1BadgesBadgeIdPatchWithHttpInfo(badgeId: number, request: RobloxBadgesApiUpdateBadgeRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1BadgesBadgeIdPatch(badgeId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BadgesBadgeIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates badge configuration.
     * @param badgeId The badge Id.
     * @param request The request body.
     */
    public v1BadgesBadgeIdPatch(badgeId: number, request: RobloxBadgesApiUpdateBadgeRequest, _options?: Configuration): Observable<any> {
        return this.v1BadgesBadgeIdPatchWithHttpInfo(badgeId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets metadata about the badges system.
     */
    public v1BadgesMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxBadgesApiBadgeMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1BadgesMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BadgesMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets metadata about the badges system.
     */
    public v1BadgesMetadataGet(_options?: Configuration): Observable<RobloxBadgesApiBadgeMetadataResponse> {
        return this.v1BadgesMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxBadgesApiBadgeMetadataResponse>) => apiResponse.data));
    }

    /**
     * Gets badges by their awarding game.
     * @param universeId The universe Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UniversesUniverseIdBadgesGetWithHttpInfo(universeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdBadgesGet(universeId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdBadgesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets badges by their awarding game.
     * @param universeId The universe Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UniversesUniverseIdBadgesGet(universeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse> {
        return this.v1UniversesUniverseIdBadgesGetWithHttpInfo(universeId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse>) => apiResponse.data));
    }

    /**
     * Creates a new badge.
     * @param universeId The ID of the universe to create the badge for.
     * @param name The badge name.
     * @param description The badge description.
     * @param paymentSourceType Whether or not to pay for the badge with user funds, or group funds. [\\\&#39;User\\\&#39; &#x3D; 1, \\\&#39;Group\\\&#39; &#x3D; 2]
     * @param files The badge icon.
     * @param expectedCost User expected cost of a badge.
     * @param isActive Whether or not the badge should be created in the active state.
     */
    public v1UniversesUniverseIdBadgesPostWithHttpInfo(universeId: number, name?: string, description?: string, paymentSourceType?: number, files?: HttpFile, expectedCost?: number, isActive?: boolean, _options?: Configuration): Observable<HttpInfo<RobloxWebResponsesBadgesBadgeResponseV2>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdBadgesPost(universeId, name, description, paymentSourceType, files, expectedCost, isActive, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdBadgesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new badge.
     * @param universeId The ID of the universe to create the badge for.
     * @param name The badge name.
     * @param description The badge description.
     * @param paymentSourceType Whether or not to pay for the badge with user funds, or group funds. [\\\&#39;User\\\&#39; &#x3D; 1, \\\&#39;Group\\\&#39; &#x3D; 2]
     * @param files The badge icon.
     * @param expectedCost User expected cost of a badge.
     * @param isActive Whether or not the badge should be created in the active state.
     */
    public v1UniversesUniverseIdBadgesPost(universeId: number, name?: string, description?: string, paymentSourceType?: number, files?: HttpFile, expectedCost?: number, isActive?: boolean, _options?: Configuration): Observable<RobloxWebResponsesBadgesBadgeResponseV2> {
        return this.v1UniversesUniverseIdBadgesPostWithHttpInfo(universeId, name, description, paymentSourceType, files, expectedCost, isActive, _options).pipe(map((apiResponse: HttpInfo<RobloxWebResponsesBadgesBadgeResponseV2>) => apiResponse.data));
    }

    /**
     * Gets the number of free badges left for the current UTC day by their awarding game.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdFreeBadgesQuotaGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<number>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdFreeBadgesQuotaGet(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdFreeBadgesQuotaGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the number of free badges left for the current UTC day by their awarding game.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdFreeBadgesQuotaGet(universeId: number, _options?: Configuration): Observable<number> {
        return this.v1UniversesUniverseIdFreeBadgesQuotaGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<number>) => apiResponse.data));
    }

    /**
     * Gets a list of badges a user has been awarded.
     * @param userId The user Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdBadgesGetWithHttpInfo(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdBadgesGet(userId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdBadgesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of badges a user has been awarded.
     * @param userId The user Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdBadgesGet(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2> {
        return this.v1UsersUserIdBadgesGetWithHttpInfo(userId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2>) => apiResponse.data));
    }

}
