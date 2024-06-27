import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxFriendsApiCaptchaStatusResponseModel } from '../models/RobloxFriendsApiCaptchaStatusResponseModel';
import { RobloxFriendsApiFollowCountResponse } from '../models/RobloxFriendsApiFollowCountResponse';
import { RobloxFriendsApiFollowingExistsRequestModel } from '../models/RobloxFriendsApiFollowingExistsRequestModel';
import { RobloxFriendsApiFriendRequest } from '../models/RobloxFriendsApiFriendRequest';
import { RobloxFriendsApiFriendRequestResponse } from '../models/RobloxFriendsApiFriendRequestResponse';
import { RobloxFriendsApiFriendStatusResponse } from '../models/RobloxFriendsApiFriendStatusResponse';
import { RobloxFriendsApiFriendsCountResponse } from '../models/RobloxFriendsApiFriendsCountResponse';
import { RobloxFriendsApiFriendshipRequestModel } from '../models/RobloxFriendsApiFriendshipRequestModel';
import { RobloxFriendsApiModelsRequestFriendingTokenRequestModel } from '../models/RobloxFriendsApiModelsRequestFriendingTokenRequestModel';
import { RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse } from '../models/RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse';
import { RobloxFriendsApiModelsResponseFollowingExistsResponse } from '../models/RobloxFriendsApiModelsResponseFollowingExistsResponse';
import { RobloxFriendsApiModelsResponseFollowingExistsResponseModel } from '../models/RobloxFriendsApiModelsResponseFollowingExistsResponseModel';
import { RobloxFriendsApiModelsResponseFriendResponse } from '../models/RobloxFriendsApiModelsResponseFriendResponse';
import { RobloxFriendsApiModelsResponseFriendsPageMetadataResponse } from '../models/RobloxFriendsApiModelsResponseFriendsPageMetadataResponse';
import { RobloxFriendsApiModelsResponseUserPresenceResponse } from '../models/RobloxFriendsApiModelsResponseUserPresenceResponse';
import { RobloxFriendsApiModelsResponseUserPresenceResponseModel } from '../models/RobloxFriendsApiModelsResponseUserPresenceResponseModel';
import { RobloxFriendsApiModelsResponseUserRecommendation } from '../models/RobloxFriendsApiModelsResponseUserRecommendation';
import { RobloxFriendsApiModelsResponseUserRecommendationsResponse } from '../models/RobloxFriendsApiModelsResponseUserRecommendationsResponse';
import { RobloxFriendsApiModelsResponseUserResponse } from '../models/RobloxFriendsApiModelsResponseUserResponse';
import { RobloxFriendsApiPendingFriendRequestCountModel } from '../models/RobloxFriendsApiPendingFriendRequestCountModel';
import { RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse } from '../models/RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse';
import { RobloxPagingExclusiveStartKeyCursorSystemString } from '../models/RobloxPagingExclusiveStartKeyCursorSystemString';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoRobloxWebFriendsFriendRequestsPlatformExclusiveStartKey } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoRobloxWebFriendsFriendRequestsPlatformExclusiveStartKey';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { RobloxWebCaptchaModelsRequestCaptchaTokenRequest } from '../models/RobloxWebCaptchaModelsRequestCaptchaTokenRequest';
import { RobloxWebWebAPIExclusiveStartRequestRobloxWebFriendsFriendRequestsPlatformExclusiveStartKey } from '../models/RobloxWebWebAPIExclusiveStartRequestRobloxWebFriendsFriendRequestsPlatformExclusiveStartKey';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse';
import { SystemValueTupleRobloxWebWebAPIExclusiveStartRequestSystemInt64RobloxPagingExclusiveStartKeyCursorSystemString } from '../models/SystemValueTupleRobloxWebWebAPIExclusiveStartRequestSystemInt64RobloxPagingExclusiveStartKeyCursorSystemString';

import { FollowingsApiRequestFactory, FollowingsApiResponseProcessor} from "../apis/FollowingsApi";
export class ObservableFollowingsApi {
    private requestFactory: FollowingsApiRequestFactory;
    private responseProcessor: FollowingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FollowingsApiRequestFactory,
        responseProcessor?: FollowingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FollowingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FollowingsApiResponseProcessor();
    }

    /**
     * Returns whether or not the current user is following each userId in a list of userIds
     * @param requestModel The userIds potentially being followed
     */
    public v1UserFollowingExistsPostWithHttpInfo(requestModel: RobloxFriendsApiFollowingExistsRequestModel, _options?: Configuration): Observable<HttpInfo<RobloxFriendsApiModelsResponseFollowingExistsResponseModel>> {
        const requestContextPromise = this.requestFactory.v1UserFollowingExistsPost(requestModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserFollowingExistsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns whether or not the current user is following each userId in a list of userIds
     * @param requestModel The userIds potentially being followed
     */
    public v1UserFollowingExistsPost(requestModel: RobloxFriendsApiFollowingExistsRequestModel, _options?: Configuration): Observable<RobloxFriendsApiModelsResponseFollowingExistsResponseModel> {
        return this.v1UserFollowingExistsPostWithHttpInfo(requestModel, _options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiModelsResponseFollowingExistsResponseModel>) => apiResponse.data));
    }

    /**
     * Creates the following between a user and user with targetUserId
     * @param targetUserId 
     * @param captchaTokenRequest 
     */
    public v1UsersTargetUserIdFollowPostWithHttpInfo(targetUserId: number, captchaTokenRequest?: RobloxWebCaptchaModelsRequestCaptchaTokenRequest, _options?: Configuration): Observable<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>> {
        const requestContextPromise = this.requestFactory.v1UsersTargetUserIdFollowPost(targetUserId, captchaTokenRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersTargetUserIdFollowPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates the following between a user and user with targetUserId
     * @param targetUserId 
     * @param captchaTokenRequest 
     */
    public v1UsersTargetUserIdFollowPost(targetUserId: number, captchaTokenRequest?: RobloxWebCaptchaModelsRequestCaptchaTokenRequest, _options?: Configuration): Observable<RobloxFriendsApiCaptchaStatusResponseModel> {
        return this.v1UsersTargetUserIdFollowPostWithHttpInfo(targetUserId, captchaTokenRequest, _options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>) => apiResponse.data));
    }

    /**
     * Get the number of following a user has
     * @param targetUserId 
     */
    public v1UsersTargetUserIdFollowersCountGetWithHttpInfo(targetUserId: number, _options?: Configuration): Observable<HttpInfo<RobloxFriendsApiFollowCountResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersTargetUserIdFollowersCountGet(targetUserId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersTargetUserIdFollowersCountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the number of following a user has
     * @param targetUserId 
     */
    public v1UsersTargetUserIdFollowersCountGet(targetUserId: number, _options?: Configuration): Observable<RobloxFriendsApiFollowCountResponse> {
        return this.v1UsersTargetUserIdFollowersCountGetWithHttpInfo(targetUserId, _options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiFollowCountResponse>) => apiResponse.data));
    }

    /**
     * Get all users that follow user with targetUserId in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersTargetUserIdFollowersGetWithHttpInfo(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersTargetUserIdFollowersGet(targetUserId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersTargetUserIdFollowersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all users that follow user with targetUserId in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersTargetUserIdFollowersGet(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse> {
        return this.v1UsersTargetUserIdFollowersGetWithHttpInfo(targetUserId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse>) => apiResponse.data));
    }

    /**
     * Get the number of following a user has
     * @param targetUserId 
     */
    public v1UsersTargetUserIdFollowingsCountGetWithHttpInfo(targetUserId: number, _options?: Configuration): Observable<HttpInfo<RobloxFriendsApiFollowCountResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersTargetUserIdFollowingsCountGet(targetUserId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersTargetUserIdFollowingsCountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the number of following a user has
     * @param targetUserId 
     */
    public v1UsersTargetUserIdFollowingsCountGet(targetUserId: number, _options?: Configuration): Observable<RobloxFriendsApiFollowCountResponse> {
        return this.v1UsersTargetUserIdFollowingsCountGetWithHttpInfo(targetUserId, _options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiFollowCountResponse>) => apiResponse.data));
    }

    /**
     * Get all users that user with targetUserId is following in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersTargetUserIdFollowingsGetWithHttpInfo(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersTargetUserIdFollowingsGet(targetUserId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersTargetUserIdFollowingsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all users that user with targetUserId is following in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersTargetUserIdFollowingsGet(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse> {
        return this.v1UsersTargetUserIdFollowingsGetWithHttpInfo(targetUserId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse>) => apiResponse.data));
    }

    /**
     * Deletes the following between a user and user with targetUserId
     * @param targetUserId 
     */
    public v1UsersTargetUserIdUnfollowPostWithHttpInfo(targetUserId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersTargetUserIdUnfollowPost(targetUserId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersTargetUserIdUnfollowPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the following between a user and user with targetUserId
     * @param targetUserId 
     */
    public v1UsersTargetUserIdUnfollowPost(targetUserId: number, _options?: Configuration): Observable<any> {
        return this.v1UsersTargetUserIdUnfollowPostWithHttpInfo(targetUserId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";
export class ObservableFriendsApi {
    private requestFactory: FriendsApiRequestFactory;
    private responseProcessor: FriendsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FriendsApiRequestFactory,
        responseProcessor?: FriendsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FriendsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FriendsApiResponseProcessor();
    }

    /**
     * Send a contact friend request to target user
     * @param targetContactId The target contact Id for friend request
     */
    public v1ContactsTargetContactIdRequestFriendshipPostWithHttpInfo(targetContactId: string, _options?: Configuration): Observable<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>> {
        const requestContextPromise = this.requestFactory.v1ContactsTargetContactIdRequestFriendshipPost(targetContactId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ContactsTargetContactIdRequestFriendshipPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send a contact friend request to target user
     * @param targetContactId The target contact Id for friend request
     */
    public v1ContactsTargetContactIdRequestFriendshipPost(targetContactId: string, _options?: Configuration): Observable<RobloxFriendsApiCaptchaStatusResponseModel> {
        return this.v1ContactsTargetContactIdRequestFriendshipPostWithHttpInfo(targetContactId, _options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>) => apiResponse.data));
    }

    /**
     * @param targetUserId 
     */
    public v1MetadataGetWithHttpInfo(targetUserId?: number, _options?: Configuration): Observable<HttpInfo<RobloxFriendsApiModelsResponseFriendsPageMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1MetadataGet(targetUserId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1MetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param targetUserId 
     */
    public v1MetadataGet(targetUserId?: number, _options?: Configuration): Observable<RobloxFriendsApiModelsResponseFriendsPageMetadataResponse> {
        return this.v1MetadataGetWithHttpInfo(targetUserId, _options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiModelsResponseFriendsPageMetadataResponse>) => apiResponse.data));
    }

    /**
     * Get the number of friends a user has
     */
    public v1MyFriendsCountGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxFriendsApiFriendsCountResponse>> {
        const requestContextPromise = this.requestFactory.v1MyFriendsCountGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1MyFriendsCountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the number of friends a user has
     */
    public v1MyFriendsCountGet(_options?: Configuration): Observable<RobloxFriendsApiFriendsCountResponse> {
        return this.v1MyFriendsCountGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiFriendsCountResponse>) => apiResponse.data));
    }

    /**
     * Get all users that friend requests with targetUserId using exclusive start paging
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by scoring requests based on request time, mutual friends, and request origin
     */
    public v1MyFriendsRequestsGetWithHttpInfo(limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse>> {
        const requestContextPromise = this.requestFactory.v1MyFriendsRequestsGet(limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1MyFriendsRequestsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all users that friend requests with targetUserId using exclusive start paging
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by scoring requests based on request time, mutual friends, and request origin
     */
    public v1MyFriendsRequestsGet(limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse> {
        return this.v1MyFriendsRequestsGetWithHttpInfo(limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse>) => apiResponse.data));
    }

    /**
     * Return the number of pending friend requests.
     */
    public v1UserFriendRequestsCountGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxFriendsApiPendingFriendRequestCountModel>> {
        const requestContextPromise = this.requestFactory.v1UserFriendRequestsCountGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserFriendRequestsCountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return the number of pending friend requests.
     */
    public v1UserFriendRequestsCountGet(_options?: Configuration): Observable<RobloxFriendsApiPendingFriendRequestCountModel> {
        return this.v1UserFriendRequestsCountGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiPendingFriendRequestCountModel>) => apiResponse.data));
    }

    /**
     * Decline all pending friend requests for the authenticated user.
     */
    public v1UserFriendRequestsDeclineAllPostWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse>> {
        const requestContextPromise = this.requestFactory.v1UserFriendRequestsDeclineAllPost(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserFriendRequestsDeclineAllPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Decline all pending friend requests for the authenticated user.
     */
    public v1UserFriendRequestsDeclineAllPost(_options?: Configuration): Observable<RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse> {
        return this.v1UserFriendRequestsDeclineAllPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse>) => apiResponse.data));
    }

    /**
     * Accept a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public v1UsersRequesterUserIdAcceptFriendRequestPostWithHttpInfo(requesterUserId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersRequesterUserIdAcceptFriendRequestPost(requesterUserId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersRequesterUserIdAcceptFriendRequestPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accept a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public v1UsersRequesterUserIdAcceptFriendRequestPost(requesterUserId: number, _options?: Configuration): Observable<any> {
        return this.v1UsersRequesterUserIdAcceptFriendRequestPostWithHttpInfo(requesterUserId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Decline a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public v1UsersRequesterUserIdDeclineFriendRequestPostWithHttpInfo(requesterUserId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersRequesterUserIdDeclineFriendRequestPost(requesterUserId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersRequesterUserIdDeclineFriendRequestPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Decline a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public v1UsersRequesterUserIdDeclineFriendRequestPost(requesterUserId: number, _options?: Configuration): Observable<any> {
        return this.v1UsersRequesterUserIdDeclineFriendRequestPostWithHttpInfo(requesterUserId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Accept a friend request with an Off Network Friending token.
     * @param senderUserId The user id of the sender of the off network friend request
     * @param requestModel 
     */
    public v1UsersSenderUserIdAcceptFriendRequestWithTokenPostWithHttpInfo(senderUserId: number, requestModel: RobloxFriendsApiModelsRequestFriendingTokenRequestModel, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersSenderUserIdAcceptFriendRequestWithTokenPost(senderUserId, requestModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersSenderUserIdAcceptFriendRequestWithTokenPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accept a friend request with an Off Network Friending token.
     * @param senderUserId The user id of the sender of the off network friend request
     * @param requestModel 
     */
    public v1UsersSenderUserIdAcceptFriendRequestWithTokenPost(senderUserId: number, requestModel: RobloxFriendsApiModelsRequestFriendingTokenRequestModel, _options?: Configuration): Observable<any> {
        return this.v1UsersSenderUserIdAcceptFriendRequestWithTokenPostWithHttpInfo(senderUserId, requestModel, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Send a friend request to target user
     * @param targetUserId The target user Id for friend request
     * @param friendshipRequestModel The source which the friend request originated from
     */
    public v1UsersTargetUserIdRequestFriendshipPostWithHttpInfo(targetUserId: number, friendshipRequestModel: RobloxFriendsApiFriendshipRequestModel, _options?: Configuration): Observable<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>> {
        const requestContextPromise = this.requestFactory.v1UsersTargetUserIdRequestFriendshipPost(targetUserId, friendshipRequestModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersTargetUserIdRequestFriendshipPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send a friend request to target user
     * @param targetUserId The target user Id for friend request
     * @param friendshipRequestModel The source which the friend request originated from
     */
    public v1UsersTargetUserIdRequestFriendshipPost(targetUserId: number, friendshipRequestModel: RobloxFriendsApiFriendshipRequestModel, _options?: Configuration): Observable<RobloxFriendsApiCaptchaStatusResponseModel> {
        return this.v1UsersTargetUserIdRequestFriendshipPostWithHttpInfo(targetUserId, friendshipRequestModel, _options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>) => apiResponse.data));
    }

    /**
     * Unfriend a user
     * @param targetUserId The target user id to unfriend
     */
    public v1UsersTargetUserIdUnfriendPostWithHttpInfo(targetUserId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersTargetUserIdUnfriendPost(targetUserId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersTargetUserIdUnfriendPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unfriend a user
     * @param targetUserId The target user id to unfriend
     */
    public v1UsersTargetUserIdUnfriendPost(targetUserId: number, _options?: Configuration): Observable<any> {
        return this.v1UsersTargetUserIdUnfriendPostWithHttpInfo(targetUserId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get the number of friends a user has
     * @param userId 
     */
    public v1UsersUserIdFriendsCountGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxFriendsApiFriendsCountResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdFriendsCountGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdFriendsCountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the number of friends a user has
     * @param userId 
     */
    public v1UsersUserIdFriendsCountGet(userId: number, _options?: Configuration): Observable<RobloxFriendsApiFriendsCountResponse> {
        return this.v1UsersUserIdFriendsCountGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiFriendsCountResponse>) => apiResponse.data));
    }

    /**
     * Get a paginated list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public v1UsersUserIdFriendsFindGetWithHttpInfo(userId: number, userSort?: 0 | 1 | 2, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdFriendsFindGet(userId, userSort, cursor, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdFriendsFindGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a paginated list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public v1UsersUserIdFriendsFindGet(userId: number, userSort?: 0 | 1 | 2, cursor?: string, limit?: number, _options?: Configuration): Observable<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse> {
        return this.v1UsersUserIdFriendsFindGetWithHttpInfo(userId, userSort, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse>) => apiResponse.data));
    }

    /**
     * Get list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     */
    public v1UsersUserIdFriendsGetWithHttpInfo(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdFriendsGet(userId, userSort, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdFriendsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     */
    public v1UsersUserIdFriendsGet(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse> {
        return this.v1UsersUserIdFriendsGetWithHttpInfo(userId, userSort, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse>) => apiResponse.data));
    }

    /**
     * Get list of inactive friends for the specified user.
     * @param userId The user Id to get the friends for.
     */
    public v1UsersUserIdFriendsInactiveGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdFriendsInactiveGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdFriendsInactiveGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of inactive friends for the specified user.
     * @param userId The user Id to get the friends for.
     */
    public v1UsersUserIdFriendsInactiveGet(userId: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse> {
        return this.v1UsersUserIdFriendsInactiveGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse>) => apiResponse.data));
    }

    /**
     * Get list of all online friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort 
     */
    public v1UsersUserIdFriendsOnlineGetWithHttpInfo(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdFriendsOnlineGet(userId, userSort, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdFriendsOnlineGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of all online friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort 
     */
    public v1UsersUserIdFriendsOnlineGet(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse> {
        return this.v1UsersUserIdFriendsOnlineGetWithHttpInfo(userId, userSort, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse>) => apiResponse.data));
    }

    /**
     * Search for friends by name using a text query.
     * @param userId The user Id to get the friends for.
     * @param query The string to search names of friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public v1UsersUserIdFriendsSearchGetWithHttpInfo(userId: number, query?: string, userSort?: 0, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdFriendsSearchGet(userId, query, userSort, cursor, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdFriendsSearchGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for friends by name using a text query.
     * @param userId The user Id to get the friends for.
     * @param query The string to search names of friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public v1UsersUserIdFriendsSearchGet(userId: number, query?: string, userSort?: 0, cursor?: string, limit?: number, _options?: Configuration): Observable<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse> {
        return this.v1UsersUserIdFriendsSearchGetWithHttpInfo(userId, query, userSort, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of friend statuses of specified users against the specified user.
     * @param userId The user to check the friend statuses against.
     * @param userIds 
     */
    public v1UsersUserIdFriendsStatusesGetWithHttpInfo(userId: number, userIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdFriendsStatusesGet(userId, userIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdFriendsStatusesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of friend statuses of specified users against the specified user.
     * @param userId The user to check the friend statuses against.
     * @param userIds 
     */
    public v1UsersUserIdFriendsStatusesGet(userId: number, userIds: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse> {
        return this.v1UsersUserIdFriendsStatusesGetWithHttpInfo(userId, userIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse>) => apiResponse.data));
    }

}

import { UserRecommendationsApiRequestFactory, UserRecommendationsApiResponseProcessor} from "../apis/UserRecommendationsApi";
export class ObservableUserRecommendationsApi {
    private requestFactory: UserRecommendationsApiRequestFactory;
    private responseProcessor: UserRecommendationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserRecommendationsApiRequestFactory,
        responseProcessor?: UserRecommendationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserRecommendationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserRecommendationsApiResponseProcessor();
    }

    /**
     * Return a list of Recommendations for the Authenticated User.  V1 API to just return list of existing friends for the Authenticated user.
     */
    public v1RecommendedUsersGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxFriendsApiModelsResponseUserRecommendationsResponse>> {
        const requestContextPromise = this.requestFactory.v1RecommendedUsersGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RecommendedUsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a list of Recommendations for the Authenticated User.  V1 API to just return list of existing friends for the Authenticated user.
     */
    public v1RecommendedUsersGet(_options?: Configuration): Observable<RobloxFriendsApiModelsResponseUserRecommendationsResponse> {
        return this.v1RecommendedUsersGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxFriendsApiModelsResponseUserRecommendationsResponse>) => apiResponse.data));
    }

}
