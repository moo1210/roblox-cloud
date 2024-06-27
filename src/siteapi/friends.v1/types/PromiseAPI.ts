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
import { ObservableFollowingsApi } from './ObservableAPI';

import { FollowingsApiRequestFactory, FollowingsApiResponseProcessor} from "../apis/FollowingsApi";
export class PromiseFollowingsApi {
    private api: ObservableFollowingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FollowingsApiRequestFactory,
        responseProcessor?: FollowingsApiResponseProcessor
    ) {
        this.api = new ObservableFollowingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns whether or not the current user is following each userId in a list of userIds
     * @param requestModel The userIds potentially being followed
     */
    public v1UserFollowingExistsPostWithHttpInfo(requestModel: RobloxFriendsApiFollowingExistsRequestModel, _options?: Configuration): Promise<HttpInfo<RobloxFriendsApiModelsResponseFollowingExistsResponseModel>> {
        const result = this.api.v1UserFollowingExistsPostWithHttpInfo(requestModel, _options);
        return result.toPromise();
    }

    /**
     * Returns whether or not the current user is following each userId in a list of userIds
     * @param requestModel The userIds potentially being followed
     */
    public v1UserFollowingExistsPost(requestModel: RobloxFriendsApiFollowingExistsRequestModel, _options?: Configuration): Promise<RobloxFriendsApiModelsResponseFollowingExistsResponseModel> {
        const result = this.api.v1UserFollowingExistsPost(requestModel, _options);
        return result.toPromise();
    }

    /**
     * Creates the following between a user and user with targetUserId
     * @param targetUserId 
     * @param captchaTokenRequest 
     */
    public v1UsersTargetUserIdFollowPostWithHttpInfo(targetUserId: number, captchaTokenRequest?: RobloxWebCaptchaModelsRequestCaptchaTokenRequest, _options?: Configuration): Promise<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>> {
        const result = this.api.v1UsersTargetUserIdFollowPostWithHttpInfo(targetUserId, captchaTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates the following between a user and user with targetUserId
     * @param targetUserId 
     * @param captchaTokenRequest 
     */
    public v1UsersTargetUserIdFollowPost(targetUserId: number, captchaTokenRequest?: RobloxWebCaptchaModelsRequestCaptchaTokenRequest, _options?: Configuration): Promise<RobloxFriendsApiCaptchaStatusResponseModel> {
        const result = this.api.v1UsersTargetUserIdFollowPost(targetUserId, captchaTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * Get the number of following a user has
     * @param targetUserId 
     */
    public v1UsersTargetUserIdFollowersCountGetWithHttpInfo(targetUserId: number, _options?: Configuration): Promise<HttpInfo<RobloxFriendsApiFollowCountResponse>> {
        const result = this.api.v1UsersTargetUserIdFollowersCountGetWithHttpInfo(targetUserId, _options);
        return result.toPromise();
    }

    /**
     * Get the number of following a user has
     * @param targetUserId 
     */
    public v1UsersTargetUserIdFollowersCountGet(targetUserId: number, _options?: Configuration): Promise<RobloxFriendsApiFollowCountResponse> {
        const result = this.api.v1UsersTargetUserIdFollowersCountGet(targetUserId, _options);
        return result.toPromise();
    }

    /**
     * Get all users that follow user with targetUserId in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersTargetUserIdFollowersGetWithHttpInfo(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse>> {
        const result = this.api.v1UsersTargetUserIdFollowersGetWithHttpInfo(targetUserId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Get all users that follow user with targetUserId in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersTargetUserIdFollowersGet(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse> {
        const result = this.api.v1UsersTargetUserIdFollowersGet(targetUserId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Get the number of following a user has
     * @param targetUserId 
     */
    public v1UsersTargetUserIdFollowingsCountGetWithHttpInfo(targetUserId: number, _options?: Configuration): Promise<HttpInfo<RobloxFriendsApiFollowCountResponse>> {
        const result = this.api.v1UsersTargetUserIdFollowingsCountGetWithHttpInfo(targetUserId, _options);
        return result.toPromise();
    }

    /**
     * Get the number of following a user has
     * @param targetUserId 
     */
    public v1UsersTargetUserIdFollowingsCountGet(targetUserId: number, _options?: Configuration): Promise<RobloxFriendsApiFollowCountResponse> {
        const result = this.api.v1UsersTargetUserIdFollowingsCountGet(targetUserId, _options);
        return result.toPromise();
    }

    /**
     * Get all users that user with targetUserId is following in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersTargetUserIdFollowingsGetWithHttpInfo(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse>> {
        const result = this.api.v1UsersTargetUserIdFollowingsGetWithHttpInfo(targetUserId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Get all users that user with targetUserId is following in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersTargetUserIdFollowingsGet(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse> {
        const result = this.api.v1UsersTargetUserIdFollowingsGet(targetUserId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Deletes the following between a user and user with targetUserId
     * @param targetUserId 
     */
    public v1UsersTargetUserIdUnfollowPostWithHttpInfo(targetUserId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersTargetUserIdUnfollowPostWithHttpInfo(targetUserId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the following between a user and user with targetUserId
     * @param targetUserId 
     */
    public v1UsersTargetUserIdUnfollowPost(targetUserId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersTargetUserIdUnfollowPost(targetUserId, _options);
        return result.toPromise();
    }


}



import { ObservableFriendsApi } from './ObservableAPI';

import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";
export class PromiseFriendsApi {
    private api: ObservableFriendsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FriendsApiRequestFactory,
        responseProcessor?: FriendsApiResponseProcessor
    ) {
        this.api = new ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send a contact friend request to target user
     * @param targetContactId The target contact Id for friend request
     */
    public v1ContactsTargetContactIdRequestFriendshipPostWithHttpInfo(targetContactId: string, _options?: Configuration): Promise<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>> {
        const result = this.api.v1ContactsTargetContactIdRequestFriendshipPostWithHttpInfo(targetContactId, _options);
        return result.toPromise();
    }

    /**
     * Send a contact friend request to target user
     * @param targetContactId The target contact Id for friend request
     */
    public v1ContactsTargetContactIdRequestFriendshipPost(targetContactId: string, _options?: Configuration): Promise<RobloxFriendsApiCaptchaStatusResponseModel> {
        const result = this.api.v1ContactsTargetContactIdRequestFriendshipPost(targetContactId, _options);
        return result.toPromise();
    }

    /**
     * @param targetUserId 
     */
    public v1MetadataGetWithHttpInfo(targetUserId?: number, _options?: Configuration): Promise<HttpInfo<RobloxFriendsApiModelsResponseFriendsPageMetadataResponse>> {
        const result = this.api.v1MetadataGetWithHttpInfo(targetUserId, _options);
        return result.toPromise();
    }

    /**
     * @param targetUserId 
     */
    public v1MetadataGet(targetUserId?: number, _options?: Configuration): Promise<RobloxFriendsApiModelsResponseFriendsPageMetadataResponse> {
        const result = this.api.v1MetadataGet(targetUserId, _options);
        return result.toPromise();
    }

    /**
     * Get the number of friends a user has
     */
    public v1MyFriendsCountGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxFriendsApiFriendsCountResponse>> {
        const result = this.api.v1MyFriendsCountGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the number of friends a user has
     */
    public v1MyFriendsCountGet(_options?: Configuration): Promise<RobloxFriendsApiFriendsCountResponse> {
        const result = this.api.v1MyFriendsCountGet(_options);
        return result.toPromise();
    }

    /**
     * Get all users that friend requests with targetUserId using exclusive start paging
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by scoring requests based on request time, mutual friends, and request origin
     */
    public v1MyFriendsRequestsGetWithHttpInfo(limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse>> {
        const result = this.api.v1MyFriendsRequestsGetWithHttpInfo(limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Get all users that friend requests with targetUserId using exclusive start paging
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by scoring requests based on request time, mutual friends, and request origin
     */
    public v1MyFriendsRequestsGet(limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse> {
        const result = this.api.v1MyFriendsRequestsGet(limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Return the number of pending friend requests.
     */
    public v1UserFriendRequestsCountGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxFriendsApiPendingFriendRequestCountModel>> {
        const result = this.api.v1UserFriendRequestsCountGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Return the number of pending friend requests.
     */
    public v1UserFriendRequestsCountGet(_options?: Configuration): Promise<RobloxFriendsApiPendingFriendRequestCountModel> {
        const result = this.api.v1UserFriendRequestsCountGet(_options);
        return result.toPromise();
    }

    /**
     * Decline all pending friend requests for the authenticated user.
     */
    public v1UserFriendRequestsDeclineAllPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse>> {
        const result = this.api.v1UserFriendRequestsDeclineAllPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Decline all pending friend requests for the authenticated user.
     */
    public v1UserFriendRequestsDeclineAllPost(_options?: Configuration): Promise<RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse> {
        const result = this.api.v1UserFriendRequestsDeclineAllPost(_options);
        return result.toPromise();
    }

    /**
     * Accept a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public v1UsersRequesterUserIdAcceptFriendRequestPostWithHttpInfo(requesterUserId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersRequesterUserIdAcceptFriendRequestPostWithHttpInfo(requesterUserId, _options);
        return result.toPromise();
    }

    /**
     * Accept a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public v1UsersRequesterUserIdAcceptFriendRequestPost(requesterUserId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersRequesterUserIdAcceptFriendRequestPost(requesterUserId, _options);
        return result.toPromise();
    }

    /**
     * Decline a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public v1UsersRequesterUserIdDeclineFriendRequestPostWithHttpInfo(requesterUserId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersRequesterUserIdDeclineFriendRequestPostWithHttpInfo(requesterUserId, _options);
        return result.toPromise();
    }

    /**
     * Decline a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public v1UsersRequesterUserIdDeclineFriendRequestPost(requesterUserId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersRequesterUserIdDeclineFriendRequestPost(requesterUserId, _options);
        return result.toPromise();
    }

    /**
     * Accept a friend request with an Off Network Friending token.
     * @param senderUserId The user id of the sender of the off network friend request
     * @param requestModel 
     */
    public v1UsersSenderUserIdAcceptFriendRequestWithTokenPostWithHttpInfo(senderUserId: number, requestModel: RobloxFriendsApiModelsRequestFriendingTokenRequestModel, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersSenderUserIdAcceptFriendRequestWithTokenPostWithHttpInfo(senderUserId, requestModel, _options);
        return result.toPromise();
    }

    /**
     * Accept a friend request with an Off Network Friending token.
     * @param senderUserId The user id of the sender of the off network friend request
     * @param requestModel 
     */
    public v1UsersSenderUserIdAcceptFriendRequestWithTokenPost(senderUserId: number, requestModel: RobloxFriendsApiModelsRequestFriendingTokenRequestModel, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersSenderUserIdAcceptFriendRequestWithTokenPost(senderUserId, requestModel, _options);
        return result.toPromise();
    }

    /**
     * Send a friend request to target user
     * @param targetUserId The target user Id for friend request
     * @param friendshipRequestModel The source which the friend request originated from
     */
    public v1UsersTargetUserIdRequestFriendshipPostWithHttpInfo(targetUserId: number, friendshipRequestModel: RobloxFriendsApiFriendshipRequestModel, _options?: Configuration): Promise<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel>> {
        const result = this.api.v1UsersTargetUserIdRequestFriendshipPostWithHttpInfo(targetUserId, friendshipRequestModel, _options);
        return result.toPromise();
    }

    /**
     * Send a friend request to target user
     * @param targetUserId The target user Id for friend request
     * @param friendshipRequestModel The source which the friend request originated from
     */
    public v1UsersTargetUserIdRequestFriendshipPost(targetUserId: number, friendshipRequestModel: RobloxFriendsApiFriendshipRequestModel, _options?: Configuration): Promise<RobloxFriendsApiCaptchaStatusResponseModel> {
        const result = this.api.v1UsersTargetUserIdRequestFriendshipPost(targetUserId, friendshipRequestModel, _options);
        return result.toPromise();
    }

    /**
     * Unfriend a user
     * @param targetUserId The target user id to unfriend
     */
    public v1UsersTargetUserIdUnfriendPostWithHttpInfo(targetUserId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersTargetUserIdUnfriendPostWithHttpInfo(targetUserId, _options);
        return result.toPromise();
    }

    /**
     * Unfriend a user
     * @param targetUserId The target user id to unfriend
     */
    public v1UsersTargetUserIdUnfriendPost(targetUserId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersTargetUserIdUnfriendPost(targetUserId, _options);
        return result.toPromise();
    }

    /**
     * Get the number of friends a user has
     * @param userId 
     */
    public v1UsersUserIdFriendsCountGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxFriendsApiFriendsCountResponse>> {
        const result = this.api.v1UsersUserIdFriendsCountGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Get the number of friends a user has
     * @param userId 
     */
    public v1UsersUserIdFriendsCountGet(userId: number, _options?: Configuration): Promise<RobloxFriendsApiFriendsCountResponse> {
        const result = this.api.v1UsersUserIdFriendsCountGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Get a paginated list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public v1UsersUserIdFriendsFindGetWithHttpInfo(userId: number, userSort?: 0 | 1 | 2, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse>> {
        const result = this.api.v1UsersUserIdFriendsFindGetWithHttpInfo(userId, userSort, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Get a paginated list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public v1UsersUserIdFriendsFindGet(userId: number, userSort?: 0 | 1 | 2, cursor?: string, limit?: number, _options?: Configuration): Promise<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse> {
        const result = this.api.v1UsersUserIdFriendsFindGet(userId, userSort, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Get list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     */
    public v1UsersUserIdFriendsGetWithHttpInfo(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse>> {
        const result = this.api.v1UsersUserIdFriendsGetWithHttpInfo(userId, userSort, _options);
        return result.toPromise();
    }

    /**
     * Get list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     */
    public v1UsersUserIdFriendsGet(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse> {
        const result = this.api.v1UsersUserIdFriendsGet(userId, userSort, _options);
        return result.toPromise();
    }

    /**
     * Get list of inactive friends for the specified user.
     * @param userId The user Id to get the friends for.
     */
    public v1UsersUserIdFriendsInactiveGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse>> {
        const result = this.api.v1UsersUserIdFriendsInactiveGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Get list of inactive friends for the specified user.
     * @param userId The user Id to get the friends for.
     */
    public v1UsersUserIdFriendsInactiveGet(userId: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse> {
        const result = this.api.v1UsersUserIdFriendsInactiveGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Get list of all online friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort 
     */
    public v1UsersUserIdFriendsOnlineGetWithHttpInfo(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse>> {
        const result = this.api.v1UsersUserIdFriendsOnlineGetWithHttpInfo(userId, userSort, _options);
        return result.toPromise();
    }

    /**
     * Get list of all online friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort 
     */
    public v1UsersUserIdFriendsOnlineGet(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse> {
        const result = this.api.v1UsersUserIdFriendsOnlineGet(userId, userSort, _options);
        return result.toPromise();
    }

    /**
     * Search for friends by name using a text query.
     * @param userId The user Id to get the friends for.
     * @param query The string to search names of friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public v1UsersUserIdFriendsSearchGetWithHttpInfo(userId: number, query?: string, userSort?: 0, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse>> {
        const result = this.api.v1UsersUserIdFriendsSearchGetWithHttpInfo(userId, query, userSort, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Search for friends by name using a text query.
     * @param userId The user Id to get the friends for.
     * @param query The string to search names of friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public v1UsersUserIdFriendsSearchGet(userId: number, query?: string, userSort?: 0, cursor?: string, limit?: number, _options?: Configuration): Promise<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse> {
        const result = this.api.v1UsersUserIdFriendsSearchGet(userId, query, userSort, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of friend statuses of specified users against the specified user.
     * @param userId The user to check the friend statuses against.
     * @param userIds 
     */
    public v1UsersUserIdFriendsStatusesGetWithHttpInfo(userId: number, userIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse>> {
        const result = this.api.v1UsersUserIdFriendsStatusesGetWithHttpInfo(userId, userIds, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of friend statuses of specified users against the specified user.
     * @param userId The user to check the friend statuses against.
     * @param userIds 
     */
    public v1UsersUserIdFriendsStatusesGet(userId: number, userIds: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse> {
        const result = this.api.v1UsersUserIdFriendsStatusesGet(userId, userIds, _options);
        return result.toPromise();
    }


}



import { ObservableUserRecommendationsApi } from './ObservableAPI';

import { UserRecommendationsApiRequestFactory, UserRecommendationsApiResponseProcessor} from "../apis/UserRecommendationsApi";
export class PromiseUserRecommendationsApi {
    private api: ObservableUserRecommendationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserRecommendationsApiRequestFactory,
        responseProcessor?: UserRecommendationsApiResponseProcessor
    ) {
        this.api = new ObservableUserRecommendationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a list of Recommendations for the Authenticated User.  V1 API to just return list of existing friends for the Authenticated user.
     */
    public v1RecommendedUsersGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxFriendsApiModelsResponseUserRecommendationsResponse>> {
        const result = this.api.v1RecommendedUsersGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Return a list of Recommendations for the Authenticated User.  V1 API to just return list of existing friends for the Authenticated user.
     */
    public v1RecommendedUsersGet(_options?: Configuration): Promise<RobloxFriendsApiModelsResponseUserRecommendationsResponse> {
        const result = this.api.v1RecommendedUsersGet(_options);
        return result.toPromise();
    }


}



