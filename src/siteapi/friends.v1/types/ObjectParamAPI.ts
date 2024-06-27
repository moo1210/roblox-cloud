import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

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

import { ObservableFollowingsApi } from "./ObservableAPI";
import { FollowingsApiRequestFactory, FollowingsApiResponseProcessor} from "../apis/FollowingsApi";

export interface FollowingsApiV1UserFollowingExistsPostRequest {
    /**
     * The userIds potentially being followed
     * @type RobloxFriendsApiFollowingExistsRequestModel
     * @memberof FollowingsApiv1UserFollowingExistsPost
     */
    requestModel: RobloxFriendsApiFollowingExistsRequestModel
}

export interface FollowingsApiV1UsersTargetUserIdFollowPostRequest {
    /**
     * 
     * @type number
     * @memberof FollowingsApiv1UsersTargetUserIdFollowPost
     */
    targetUserId: number
    /**
     * 
     * @type RobloxWebCaptchaModelsRequestCaptchaTokenRequest
     * @memberof FollowingsApiv1UsersTargetUserIdFollowPost
     */
    captchaTokenRequest?: RobloxWebCaptchaModelsRequestCaptchaTokenRequest
}

export interface FollowingsApiV1UsersTargetUserIdFollowersCountGetRequest {
    /**
     * 
     * @type number
     * @memberof FollowingsApiv1UsersTargetUserIdFollowersCountGet
     */
    targetUserId: number
}

export interface FollowingsApiV1UsersTargetUserIdFollowersGetRequest {
    /**
     * 
     * @type number
     * @memberof FollowingsApiv1UsersTargetUserIdFollowersGet
     */
    targetUserId: number
    /**
     * The number of results per request.
     * @type 10 | 18 | 25 | 50 | 100
     * @memberof FollowingsApiv1UsersTargetUserIdFollowersGet
     */
    limit?: 10 | 18 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof FollowingsApiv1UsersTargetUserIdFollowersGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof FollowingsApiv1UsersTargetUserIdFollowersGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface FollowingsApiV1UsersTargetUserIdFollowingsCountGetRequest {
    /**
     * 
     * @type number
     * @memberof FollowingsApiv1UsersTargetUserIdFollowingsCountGet
     */
    targetUserId: number
}

export interface FollowingsApiV1UsersTargetUserIdFollowingsGetRequest {
    /**
     * 
     * @type number
     * @memberof FollowingsApiv1UsersTargetUserIdFollowingsGet
     */
    targetUserId: number
    /**
     * The number of results per request.
     * @type 10 | 18 | 25 | 50 | 100
     * @memberof FollowingsApiv1UsersTargetUserIdFollowingsGet
     */
    limit?: 10 | 18 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof FollowingsApiv1UsersTargetUserIdFollowingsGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof FollowingsApiv1UsersTargetUserIdFollowingsGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface FollowingsApiV1UsersTargetUserIdUnfollowPostRequest {
    /**
     * 
     * @type number
     * @memberof FollowingsApiv1UsersTargetUserIdUnfollowPost
     */
    targetUserId: number
}

export class ObjectFollowingsApi {
    private api: ObservableFollowingsApi

    public constructor(configuration: Configuration, requestFactory?: FollowingsApiRequestFactory, responseProcessor?: FollowingsApiResponseProcessor) {
        this.api = new ObservableFollowingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns whether or not the current user is following each userId in a list of userIds
     * @param param the request object
     */
    public v1UserFollowingExistsPostWithHttpInfo(param: FollowingsApiV1UserFollowingExistsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiModelsResponseFollowingExistsResponseModel>> {
        return this.api.v1UserFollowingExistsPostWithHttpInfo(param.requestModel,  options).toPromise();
    }

    /**
     * Returns whether or not the current user is following each userId in a list of userIds
     * @param param the request object
     */
    public v1UserFollowingExistsPost(param: FollowingsApiV1UserFollowingExistsPostRequest, options?: Configuration): Promise<RobloxFriendsApiModelsResponseFollowingExistsResponseModel> {
        return this.api.v1UserFollowingExistsPost(param.requestModel,  options).toPromise();
    }

    /**
     * Creates the following between a user and user with targetUserId
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowPostWithHttpInfo(param: FollowingsApiV1UsersTargetUserIdFollowPostRequest, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>> {
        return this.api.v1UsersTargetUserIdFollowPostWithHttpInfo(param.targetUserId, param.captchaTokenRequest,  options).toPromise();
    }

    /**
     * Creates the following between a user and user with targetUserId
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowPost(param: FollowingsApiV1UsersTargetUserIdFollowPostRequest, options?: Configuration): Promise<RobloxFriendsApiCaptchaStatusResponseModel> {
        return this.api.v1UsersTargetUserIdFollowPost(param.targetUserId, param.captchaTokenRequest,  options).toPromise();
    }

    /**
     * Get the number of following a user has
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowersCountGetWithHttpInfo(param: FollowingsApiV1UsersTargetUserIdFollowersCountGetRequest, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiFollowCountResponse>> {
        return this.api.v1UsersTargetUserIdFollowersCountGetWithHttpInfo(param.targetUserId,  options).toPromise();
    }

    /**
     * Get the number of following a user has
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowersCountGet(param: FollowingsApiV1UsersTargetUserIdFollowersCountGetRequest, options?: Configuration): Promise<RobloxFriendsApiFollowCountResponse> {
        return this.api.v1UsersTargetUserIdFollowersCountGet(param.targetUserId,  options).toPromise();
    }

    /**
     * Get all users that follow user with targetUserId in page response format
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowersGetWithHttpInfo(param: FollowingsApiV1UsersTargetUserIdFollowersGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse>> {
        return this.api.v1UsersTargetUserIdFollowersGetWithHttpInfo(param.targetUserId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Get all users that follow user with targetUserId in page response format
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowersGet(param: FollowingsApiV1UsersTargetUserIdFollowersGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse> {
        return this.api.v1UsersTargetUserIdFollowersGet(param.targetUserId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Get the number of following a user has
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowingsCountGetWithHttpInfo(param: FollowingsApiV1UsersTargetUserIdFollowingsCountGetRequest, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiFollowCountResponse>> {
        return this.api.v1UsersTargetUserIdFollowingsCountGetWithHttpInfo(param.targetUserId,  options).toPromise();
    }

    /**
     * Get the number of following a user has
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowingsCountGet(param: FollowingsApiV1UsersTargetUserIdFollowingsCountGetRequest, options?: Configuration): Promise<RobloxFriendsApiFollowCountResponse> {
        return this.api.v1UsersTargetUserIdFollowingsCountGet(param.targetUserId,  options).toPromise();
    }

    /**
     * Get all users that user with targetUserId is following in page response format
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowingsGetWithHttpInfo(param: FollowingsApiV1UsersTargetUserIdFollowingsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse>> {
        return this.api.v1UsersTargetUserIdFollowingsGetWithHttpInfo(param.targetUserId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Get all users that user with targetUserId is following in page response format
     * @param param the request object
     */
    public v1UsersTargetUserIdFollowingsGet(param: FollowingsApiV1UsersTargetUserIdFollowingsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse> {
        return this.api.v1UsersTargetUserIdFollowingsGet(param.targetUserId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Deletes the following between a user and user with targetUserId
     * @param param the request object
     */
    public v1UsersTargetUserIdUnfollowPostWithHttpInfo(param: FollowingsApiV1UsersTargetUserIdUnfollowPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersTargetUserIdUnfollowPostWithHttpInfo(param.targetUserId,  options).toPromise();
    }

    /**
     * Deletes the following between a user and user with targetUserId
     * @param param the request object
     */
    public v1UsersTargetUserIdUnfollowPost(param: FollowingsApiV1UsersTargetUserIdUnfollowPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersTargetUserIdUnfollowPost(param.targetUserId,  options).toPromise();
    }

}

import { ObservableFriendsApi } from "./ObservableAPI";
import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";

export interface FriendsApiV1ContactsTargetContactIdRequestFriendshipPostRequest {
    /**
     * The target contact Id for friend request
     * @type string
     * @memberof FriendsApiv1ContactsTargetContactIdRequestFriendshipPost
     */
    targetContactId: string
}

export interface FriendsApiV1MetadataGetRequest {
    /**
     * 
     * @type number
     * @memberof FriendsApiv1MetadataGet
     */
    targetUserId?: number
}

export interface FriendsApiV1MyFriendsCountGetRequest {
}

export interface FriendsApiV1MyFriendsRequestsGetRequest {
    /**
     * The number of results per request.
     * @type 10 | 18 | 25 | 50 | 100
     * @memberof FriendsApiv1MyFriendsRequestsGet
     */
    limit?: 10 | 18 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof FriendsApiv1MyFriendsRequestsGet
     */
    cursor?: string
    /**
     * Sorted by scoring requests based on request time, mutual friends, and request origin
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof FriendsApiv1MyFriendsRequestsGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface FriendsApiV1UserFriendRequestsCountGetRequest {
}

export interface FriendsApiV1UserFriendRequestsDeclineAllPostRequest {
}

export interface FriendsApiV1UsersRequesterUserIdAcceptFriendRequestPostRequest {
    /**
     * The user Id of the requester
     * @type number
     * @memberof FriendsApiv1UsersRequesterUserIdAcceptFriendRequestPost
     */
    requesterUserId: number
}

export interface FriendsApiV1UsersRequesterUserIdDeclineFriendRequestPostRequest {
    /**
     * The user Id of the requester
     * @type number
     * @memberof FriendsApiv1UsersRequesterUserIdDeclineFriendRequestPost
     */
    requesterUserId: number
}

export interface FriendsApiV1UsersSenderUserIdAcceptFriendRequestWithTokenPostRequest {
    /**
     * The user id of the sender of the off network friend request
     * @type number
     * @memberof FriendsApiv1UsersSenderUserIdAcceptFriendRequestWithTokenPost
     */
    senderUserId: number
    /**
     * 
     * @type RobloxFriendsApiModelsRequestFriendingTokenRequestModel
     * @memberof FriendsApiv1UsersSenderUserIdAcceptFriendRequestWithTokenPost
     */
    requestModel: RobloxFriendsApiModelsRequestFriendingTokenRequestModel
}

export interface FriendsApiV1UsersTargetUserIdRequestFriendshipPostRequest {
    /**
     * The target user Id for friend request
     * @type number
     * @memberof FriendsApiv1UsersTargetUserIdRequestFriendshipPost
     */
    targetUserId: number
    /**
     * The source which the friend request originated from
     * @type RobloxFriendsApiFriendshipRequestModel
     * @memberof FriendsApiv1UsersTargetUserIdRequestFriendshipPost
     */
    friendshipRequestModel: RobloxFriendsApiFriendshipRequestModel
}

export interface FriendsApiV1UsersTargetUserIdUnfriendPostRequest {
    /**
     * The target user id to unfriend
     * @type number
     * @memberof FriendsApiv1UsersTargetUserIdUnfriendPost
     */
    targetUserId: number
}

export interface FriendsApiV1UsersUserIdFriendsCountGetRequest {
    /**
     * 
     * @type number
     * @memberof FriendsApiv1UsersUserIdFriendsCountGet
     */
    userId: number
}

export interface FriendsApiV1UsersUserIdFriendsFindGetRequest {
    /**
     * The user Id to get the friends for.
     * @type number
     * @memberof FriendsApiv1UsersUserIdFriendsFindGet
     */
    userId: number
    /**
     * Specifies how to sort the returned friends.
     * @type 0 | 1 | 2
     * @memberof FriendsApiv1UsersUserIdFriendsFindGet
     */
    userSort?: 0 | 1 | 2
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof FriendsApiv1UsersUserIdFriendsFindGet
     */
    cursor?: string
    /**
     * The number of results per request.
     * @type number
     * @memberof FriendsApiv1UsersUserIdFriendsFindGet
     */
    limit?: number
}

export interface FriendsApiV1UsersUserIdFriendsGetRequest {
    /**
     * The user Id to get the friends for.
     * @type number
     * @memberof FriendsApiv1UsersUserIdFriendsGet
     */
    userId: number
    /**
     * Specifies how to sort the returned friends.
     * @type 0 | 1 | 2
     * @memberof FriendsApiv1UsersUserIdFriendsGet
     */
    userSort?: 0 | 1 | 2
}

export interface FriendsApiV1UsersUserIdFriendsInactiveGetRequest {
    /**
     * The user Id to get the friends for.
     * @type number
     * @memberof FriendsApiv1UsersUserIdFriendsInactiveGet
     */
    userId: number
}

export interface FriendsApiV1UsersUserIdFriendsOnlineGetRequest {
    /**
     * The user Id to get the friends for.
     * @type number
     * @memberof FriendsApiv1UsersUserIdFriendsOnlineGet
     */
    userId: number
    /**
     * 
     * @type 0 | 1 | 2
     * @memberof FriendsApiv1UsersUserIdFriendsOnlineGet
     */
    userSort?: 0 | 1 | 2
}

export interface FriendsApiV1UsersUserIdFriendsSearchGetRequest {
    /**
     * The user Id to get the friends for.
     * @type number
     * @memberof FriendsApiv1UsersUserIdFriendsSearchGet
     */
    userId: number
    /**
     * The string to search names of friends for.
     * @type string
     * @memberof FriendsApiv1UsersUserIdFriendsSearchGet
     */
    query?: string
    /**
     * Specifies how to sort the returned friends.
     * @type 0
     * @memberof FriendsApiv1UsersUserIdFriendsSearchGet
     */
    userSort?: 0
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof FriendsApiv1UsersUserIdFriendsSearchGet
     */
    cursor?: string
    /**
     * The number of results per request.
     * @type number
     * @memberof FriendsApiv1UsersUserIdFriendsSearchGet
     */
    limit?: number
}

export interface FriendsApiV1UsersUserIdFriendsStatusesGetRequest {
    /**
     * The user to check the friend statuses against.
     * @type number
     * @memberof FriendsApiv1UsersUserIdFriendsStatusesGet
     */
    userId: number
    /**
     * 
     * @type Array&lt;number&gt;
     * @memberof FriendsApiv1UsersUserIdFriendsStatusesGet
     */
    userIds: Array<number>
}

export class ObjectFriendsApi {
    private api: ObservableFriendsApi

    public constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor) {
        this.api = new ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send a contact friend request to target user
     * @param param the request object
     */
    public v1ContactsTargetContactIdRequestFriendshipPostWithHttpInfo(param: FriendsApiV1ContactsTargetContactIdRequestFriendshipPostRequest, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>> {
        return this.api.v1ContactsTargetContactIdRequestFriendshipPostWithHttpInfo(param.targetContactId,  options).toPromise();
    }

    /**
     * Send a contact friend request to target user
     * @param param the request object
     */
    public v1ContactsTargetContactIdRequestFriendshipPost(param: FriendsApiV1ContactsTargetContactIdRequestFriendshipPostRequest, options?: Configuration): Promise<RobloxFriendsApiCaptchaStatusResponseModel> {
        return this.api.v1ContactsTargetContactIdRequestFriendshipPost(param.targetContactId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1MetadataGetWithHttpInfo(param: FriendsApiV1MetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiModelsResponseFriendsPageMetadataResponse>> {
        return this.api.v1MetadataGetWithHttpInfo(param.targetUserId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1MetadataGet(param: FriendsApiV1MetadataGetRequest = {}, options?: Configuration): Promise<RobloxFriendsApiModelsResponseFriendsPageMetadataResponse> {
        return this.api.v1MetadataGet(param.targetUserId,  options).toPromise();
    }

    /**
     * Get the number of friends a user has
     * @param param the request object
     */
    public v1MyFriendsCountGetWithHttpInfo(param: FriendsApiV1MyFriendsCountGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiFriendsCountResponse>> {
        return this.api.v1MyFriendsCountGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get the number of friends a user has
     * @param param the request object
     */
    public v1MyFriendsCountGet(param: FriendsApiV1MyFriendsCountGetRequest = {}, options?: Configuration): Promise<RobloxFriendsApiFriendsCountResponse> {
        return this.api.v1MyFriendsCountGet( options).toPromise();
    }

    /**
     * Get all users that friend requests with targetUserId using exclusive start paging
     * @param param the request object
     */
    public v1MyFriendsRequestsGetWithHttpInfo(param: FriendsApiV1MyFriendsRequestsGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse>> {
        return this.api.v1MyFriendsRequestsGetWithHttpInfo(param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Get all users that friend requests with targetUserId using exclusive start paging
     * @param param the request object
     */
    public v1MyFriendsRequestsGet(param: FriendsApiV1MyFriendsRequestsGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse> {
        return this.api.v1MyFriendsRequestsGet(param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Return the number of pending friend requests.
     * @param param the request object
     */
    public v1UserFriendRequestsCountGetWithHttpInfo(param: FriendsApiV1UserFriendRequestsCountGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiPendingFriendRequestCountModel>> {
        return this.api.v1UserFriendRequestsCountGetWithHttpInfo( options).toPromise();
    }

    /**
     * Return the number of pending friend requests.
     * @param param the request object
     */
    public v1UserFriendRequestsCountGet(param: FriendsApiV1UserFriendRequestsCountGetRequest = {}, options?: Configuration): Promise<RobloxFriendsApiPendingFriendRequestCountModel> {
        return this.api.v1UserFriendRequestsCountGet( options).toPromise();
    }

    /**
     * Decline all pending friend requests for the authenticated user.
     * @param param the request object
     */
    public v1UserFriendRequestsDeclineAllPostWithHttpInfo(param: FriendsApiV1UserFriendRequestsDeclineAllPostRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse>> {
        return this.api.v1UserFriendRequestsDeclineAllPostWithHttpInfo( options).toPromise();
    }

    /**
     * Decline all pending friend requests for the authenticated user.
     * @param param the request object
     */
    public v1UserFriendRequestsDeclineAllPost(param: FriendsApiV1UserFriendRequestsDeclineAllPostRequest = {}, options?: Configuration): Promise<RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse> {
        return this.api.v1UserFriendRequestsDeclineAllPost( options).toPromise();
    }

    /**
     * Accept a friend request.
     * @param param the request object
     */
    public v1UsersRequesterUserIdAcceptFriendRequestPostWithHttpInfo(param: FriendsApiV1UsersRequesterUserIdAcceptFriendRequestPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersRequesterUserIdAcceptFriendRequestPostWithHttpInfo(param.requesterUserId,  options).toPromise();
    }

    /**
     * Accept a friend request.
     * @param param the request object
     */
    public v1UsersRequesterUserIdAcceptFriendRequestPost(param: FriendsApiV1UsersRequesterUserIdAcceptFriendRequestPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersRequesterUserIdAcceptFriendRequestPost(param.requesterUserId,  options).toPromise();
    }

    /**
     * Decline a friend request.
     * @param param the request object
     */
    public v1UsersRequesterUserIdDeclineFriendRequestPostWithHttpInfo(param: FriendsApiV1UsersRequesterUserIdDeclineFriendRequestPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersRequesterUserIdDeclineFriendRequestPostWithHttpInfo(param.requesterUserId,  options).toPromise();
    }

    /**
     * Decline a friend request.
     * @param param the request object
     */
    public v1UsersRequesterUserIdDeclineFriendRequestPost(param: FriendsApiV1UsersRequesterUserIdDeclineFriendRequestPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersRequesterUserIdDeclineFriendRequestPost(param.requesterUserId,  options).toPromise();
    }

    /**
     * Accept a friend request with an Off Network Friending token.
     * @param param the request object
     */
    public v1UsersSenderUserIdAcceptFriendRequestWithTokenPostWithHttpInfo(param: FriendsApiV1UsersSenderUserIdAcceptFriendRequestWithTokenPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersSenderUserIdAcceptFriendRequestWithTokenPostWithHttpInfo(param.senderUserId, param.requestModel,  options).toPromise();
    }

    /**
     * Accept a friend request with an Off Network Friending token.
     * @param param the request object
     */
    public v1UsersSenderUserIdAcceptFriendRequestWithTokenPost(param: FriendsApiV1UsersSenderUserIdAcceptFriendRequestWithTokenPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersSenderUserIdAcceptFriendRequestWithTokenPost(param.senderUserId, param.requestModel,  options).toPromise();
    }

    /**
     * Send a friend request to target user
     * @param param the request object
     */
    public v1UsersTargetUserIdRequestFriendshipPostWithHttpInfo(param: FriendsApiV1UsersTargetUserIdRequestFriendshipPostRequest, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>> {
        return this.api.v1UsersTargetUserIdRequestFriendshipPostWithHttpInfo(param.targetUserId, param.friendshipRequestModel,  options).toPromise();
    }

    /**
     * Send a friend request to target user
     * @param param the request object
     */
    public v1UsersTargetUserIdRequestFriendshipPost(param: FriendsApiV1UsersTargetUserIdRequestFriendshipPostRequest, options?: Configuration): Promise<RobloxFriendsApiCaptchaStatusResponseModel> {
        return this.api.v1UsersTargetUserIdRequestFriendshipPost(param.targetUserId, param.friendshipRequestModel,  options).toPromise();
    }

    /**
     * Unfriend a user
     * @param param the request object
     */
    public v1UsersTargetUserIdUnfriendPostWithHttpInfo(param: FriendsApiV1UsersTargetUserIdUnfriendPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersTargetUserIdUnfriendPostWithHttpInfo(param.targetUserId,  options).toPromise();
    }

    /**
     * Unfriend a user
     * @param param the request object
     */
    public v1UsersTargetUserIdUnfriendPost(param: FriendsApiV1UsersTargetUserIdUnfriendPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersTargetUserIdUnfriendPost(param.targetUserId,  options).toPromise();
    }

    /**
     * Get the number of friends a user has
     * @param param the request object
     */
    public v1UsersUserIdFriendsCountGetWithHttpInfo(param: FriendsApiV1UsersUserIdFriendsCountGetRequest, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiFriendsCountResponse>> {
        return this.api.v1UsersUserIdFriendsCountGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Get the number of friends a user has
     * @param param the request object
     */
    public v1UsersUserIdFriendsCountGet(param: FriendsApiV1UsersUserIdFriendsCountGetRequest, options?: Configuration): Promise<RobloxFriendsApiFriendsCountResponse> {
        return this.api.v1UsersUserIdFriendsCountGet(param.userId,  options).toPromise();
    }

    /**
     * Get a paginated list of all friends for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsFindGetWithHttpInfo(param: FriendsApiV1UsersUserIdFriendsFindGetRequest, options?: Configuration): Promise<HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse>> {
        return this.api.v1UsersUserIdFriendsFindGetWithHttpInfo(param.userId, param.userSort, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Get a paginated list of all friends for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsFindGet(param: FriendsApiV1UsersUserIdFriendsFindGetRequest, options?: Configuration): Promise<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse> {
        return this.api.v1UsersUserIdFriendsFindGet(param.userId, param.userSort, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Get list of all friends for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsGetWithHttpInfo(param: FriendsApiV1UsersUserIdFriendsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse>> {
        return this.api.v1UsersUserIdFriendsGetWithHttpInfo(param.userId, param.userSort,  options).toPromise();
    }

    /**
     * Get list of all friends for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsGet(param: FriendsApiV1UsersUserIdFriendsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse> {
        return this.api.v1UsersUserIdFriendsGet(param.userId, param.userSort,  options).toPromise();
    }

    /**
     * Get list of inactive friends for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsInactiveGetWithHttpInfo(param: FriendsApiV1UsersUserIdFriendsInactiveGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse>> {
        return this.api.v1UsersUserIdFriendsInactiveGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Get list of inactive friends for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsInactiveGet(param: FriendsApiV1UsersUserIdFriendsInactiveGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse> {
        return this.api.v1UsersUserIdFriendsInactiveGet(param.userId,  options).toPromise();
    }

    /**
     * Get list of all online friends for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsOnlineGetWithHttpInfo(param: FriendsApiV1UsersUserIdFriendsOnlineGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse>> {
        return this.api.v1UsersUserIdFriendsOnlineGetWithHttpInfo(param.userId, param.userSort,  options).toPromise();
    }

    /**
     * Get list of all online friends for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsOnlineGet(param: FriendsApiV1UsersUserIdFriendsOnlineGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse> {
        return this.api.v1UsersUserIdFriendsOnlineGet(param.userId, param.userSort,  options).toPromise();
    }

    /**
     * Search for friends by name using a text query.
     * @param param the request object
     */
    public v1UsersUserIdFriendsSearchGetWithHttpInfo(param: FriendsApiV1UsersUserIdFriendsSearchGetRequest, options?: Configuration): Promise<HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse>> {
        return this.api.v1UsersUserIdFriendsSearchGetWithHttpInfo(param.userId, param.query, param.userSort, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Search for friends by name using a text query.
     * @param param the request object
     */
    public v1UsersUserIdFriendsSearchGet(param: FriendsApiV1UsersUserIdFriendsSearchGetRequest, options?: Configuration): Promise<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse> {
        return this.api.v1UsersUserIdFriendsSearchGet(param.userId, param.query, param.userSort, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Gets a list of friend statuses of specified users against the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsStatusesGetWithHttpInfo(param: FriendsApiV1UsersUserIdFriendsStatusesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse>> {
        return this.api.v1UsersUserIdFriendsStatusesGetWithHttpInfo(param.userId, param.userIds,  options).toPromise();
    }

    /**
     * Gets a list of friend statuses of specified users against the specified user.
     * @param param the request object
     */
    public v1UsersUserIdFriendsStatusesGet(param: FriendsApiV1UsersUserIdFriendsStatusesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse> {
        return this.api.v1UsersUserIdFriendsStatusesGet(param.userId, param.userIds,  options).toPromise();
    }

}

import { ObservableUserRecommendationsApi } from "./ObservableAPI";
import { UserRecommendationsApiRequestFactory, UserRecommendationsApiResponseProcessor} from "../apis/UserRecommendationsApi";

export interface UserRecommendationsApiV1RecommendedUsersGetRequest {
}

export class ObjectUserRecommendationsApi {
    private api: ObservableUserRecommendationsApi

    public constructor(configuration: Configuration, requestFactory?: UserRecommendationsApiRequestFactory, responseProcessor?: UserRecommendationsApiResponseProcessor) {
        this.api = new ObservableUserRecommendationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a list of Recommendations for the Authenticated User.  V1 API to just return list of existing friends for the Authenticated user.
     * @param param the request object
     */
    public v1RecommendedUsersGetWithHttpInfo(param: UserRecommendationsApiV1RecommendedUsersGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxFriendsApiModelsResponseUserRecommendationsResponse>> {
        return this.api.v1RecommendedUsersGetWithHttpInfo( options).toPromise();
    }

    /**
     * Return a list of Recommendations for the Authenticated User.  V1 API to just return list of existing friends for the Authenticated user.
     * @param param the request object
     */
    public v1RecommendedUsersGet(param: UserRecommendationsApiV1RecommendedUsersGetRequest = {}, options?: Configuration): Promise<RobloxFriendsApiModelsResponseUserRecommendationsResponse> {
        return this.api.v1RecommendedUsersGet( options).toPromise();
    }

}
