import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxFriendsApiCaptchaStatusResponseModel } from '../models/RobloxFriendsApiCaptchaStatusResponseModel';
import { RobloxFriendsApiFriendsCountResponse } from '../models/RobloxFriendsApiFriendsCountResponse';
import { RobloxFriendsApiFriendshipRequestModel } from '../models/RobloxFriendsApiFriendshipRequestModel';
import { RobloxFriendsApiModelsRequestFriendingTokenRequestModel } from '../models/RobloxFriendsApiModelsRequestFriendingTokenRequestModel';
import { RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse } from '../models/RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse';
import { RobloxFriendsApiModelsResponseFriendsPageMetadataResponse } from '../models/RobloxFriendsApiModelsResponseFriendsPageMetadataResponse';
import { RobloxFriendsApiPendingFriendRequestCountModel } from '../models/RobloxFriendsApiPendingFriendRequestCountModel';
import { RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse } from '../models/RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse';

/**
 * no description
 */
export class FriendsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Send a contact friend request to target user
     * @param targetContactId The target contact Id for friend request
     */
    public async v1ContactsTargetContactIdRequestFriendshipPost(targetContactId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetContactId' is not null or undefined
        if (targetContactId === null || targetContactId === undefined) {
            throw new RequiredError("FriendsApi", "v1ContactsTargetContactIdRequestFriendshipPost", "targetContactId");
        }


        // Path Params
        const localVarPath = '/v1/contacts/{targetContactId}/request-friendship'
            .replace('{' + 'targetContactId' + '}', encodeURIComponent(String(targetContactId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param targetUserId 
     */
    public async v1MetadataGet(targetUserId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/metadata';

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (targetUserId !== undefined) {
            requestContext.setQueryParam("targetUserId", ObjectSerializer.serialize(targetUserId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the number of friends a user has
     */
    public async v1MyFriendsCountGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/my/friends/count';

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all users that friend requests with targetUserId using exclusive start paging
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by scoring requests based on request time, mutual friends, and request origin
     */
    public async v1MyFriendsRequestsGet(limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v1/my/friends/requests';

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 18 | 25 | 50 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Return the number of pending friend requests.
     */
    public async v1UserFriendRequestsCountGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/user/friend-requests/count';

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Decline all pending friend requests for the authenticated user.
     */
    public async v1UserFriendRequestsDeclineAllPost(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/user/friend-requests/decline-all';

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Accept a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public async v1UsersRequesterUserIdAcceptFriendRequestPost(requesterUserId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'requesterUserId' is not null or undefined
        if (requesterUserId === null || requesterUserId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersRequesterUserIdAcceptFriendRequestPost", "requesterUserId");
        }


        // Path Params
        const localVarPath = '/v1/users/{requesterUserId}/accept-friend-request'
            .replace('{' + 'requesterUserId' + '}', encodeURIComponent(String(requesterUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Decline a friend request.
     * @param requesterUserId The user Id of the requester
     */
    public async v1UsersRequesterUserIdDeclineFriendRequestPost(requesterUserId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'requesterUserId' is not null or undefined
        if (requesterUserId === null || requesterUserId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersRequesterUserIdDeclineFriendRequestPost", "requesterUserId");
        }


        // Path Params
        const localVarPath = '/v1/users/{requesterUserId}/decline-friend-request'
            .replace('{' + 'requesterUserId' + '}', encodeURIComponent(String(requesterUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Accept a friend request with an Off Network Friending token.
     * @param senderUserId The user id of the sender of the off network friend request
     * @param requestModel 
     */
    public async v1UsersSenderUserIdAcceptFriendRequestWithTokenPost(senderUserId: number, requestModel: RobloxFriendsApiModelsRequestFriendingTokenRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'senderUserId' is not null or undefined
        if (senderUserId === null || senderUserId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersSenderUserIdAcceptFriendRequestWithTokenPost", "senderUserId");
        }


        // verify required parameter 'requestModel' is not null or undefined
        if (requestModel === null || requestModel === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersSenderUserIdAcceptFriendRequestWithTokenPost", "requestModel");
        }


        // Path Params
        const localVarPath = '/v1/users/{senderUserId}/accept-friend-request-with-token'
            .replace('{' + 'senderUserId' + '}', encodeURIComponent(String(senderUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestModel, "RobloxFriendsApiModelsRequestFriendingTokenRequestModel", ""),
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
     * Send a friend request to target user
     * @param targetUserId The target user Id for friend request
     * @param friendshipRequestModel The source which the friend request originated from
     */
    public async v1UsersTargetUserIdRequestFriendshipPost(targetUserId: number, friendshipRequestModel: RobloxFriendsApiFriendshipRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetUserId' is not null or undefined
        if (targetUserId === null || targetUserId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersTargetUserIdRequestFriendshipPost", "targetUserId");
        }


        // verify required parameter 'friendshipRequestModel' is not null or undefined
        if (friendshipRequestModel === null || friendshipRequestModel === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersTargetUserIdRequestFriendshipPost", "friendshipRequestModel");
        }


        // Path Params
        const localVarPath = '/v1/users/{targetUserId}/request-friendship'
            .replace('{' + 'targetUserId' + '}', encodeURIComponent(String(targetUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(friendshipRequestModel, "RobloxFriendsApiFriendshipRequestModel", ""),
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
     * Unfriend a user
     * @param targetUserId The target user id to unfriend
     */
    public async v1UsersTargetUserIdUnfriendPost(targetUserId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetUserId' is not null or undefined
        if (targetUserId === null || targetUserId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersTargetUserIdUnfriendPost", "targetUserId");
        }


        // Path Params
        const localVarPath = '/v1/users/{targetUserId}/unfriend'
            .replace('{' + 'targetUserId' + '}', encodeURIComponent(String(targetUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the number of friends a user has
     * @param userId 
     */
    public async v1UsersUserIdFriendsCountGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersUserIdFriendsCountGet", "userId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/friends/count'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a paginated list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public async v1UsersUserIdFriendsFindGet(userId: number, userSort?: 0 | 1 | 2, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersUserIdFriendsFindGet", "userId");
        }





        // Path Params
        const localVarPath = '/v1/users/{userId}/friends/find'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userSort !== undefined) {
            requestContext.setQueryParam("userSort", ObjectSerializer.serialize(userSort, "0 | 1 | 2", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get list of all friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort Specifies how to sort the returned friends.
     */
    public async v1UsersUserIdFriendsGet(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersUserIdFriendsGet", "userId");
        }



        // Path Params
        const localVarPath = '/v1/users/{userId}/friends'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userSort !== undefined) {
            requestContext.setQueryParam("userSort", ObjectSerializer.serialize(userSort, "0 | 1 | 2", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get list of inactive friends for the specified user.
     * @param userId The user Id to get the friends for.
     */
    public async v1UsersUserIdFriendsInactiveGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersUserIdFriendsInactiveGet", "userId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/friends/inactive'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get list of all online friends for the specified user.
     * @param userId The user Id to get the friends for.
     * @param userSort 
     */
    public async v1UsersUserIdFriendsOnlineGet(userId: number, userSort?: 0 | 1 | 2, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersUserIdFriendsOnlineGet", "userId");
        }



        // Path Params
        const localVarPath = '/v1/users/{userId}/friends/online'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userSort !== undefined) {
            requestContext.setQueryParam("userSort", ObjectSerializer.serialize(userSort, "0 | 1 | 2", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search for friends by name using a text query.
     * @param userId The user Id to get the friends for.
     * @param query The string to search names of friends for.
     * @param userSort Specifies how to sort the returned friends.
     * @param cursor The paging cursor for the previous or next page.
     * @param limit The number of results per request.
     */
    public async v1UsersUserIdFriendsSearchGet(userId: number, query?: string, userSort?: 0, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersUserIdFriendsSearchGet", "userId");
        }






        // Path Params
        const localVarPath = '/v1/users/{userId}/friends/search'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (userSort !== undefined) {
            requestContext.setQueryParam("userSort", ObjectSerializer.serialize(userSort, "0", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a list of friend statuses of specified users against the specified user.
     * @param userId The user to check the friend statuses against.
     * @param userIds 
     */
    public async v1UsersUserIdFriendsStatusesGet(userId: number, userIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersUserIdFriendsStatusesGet", "userId");
        }


        // verify required parameter 'userIds' is not null or undefined
        if (userIds === null || userIds === undefined) {
            throw new RequiredError("FriendsApi", "v1UsersUserIdFriendsStatusesGet", "userIds");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/friends/statuses'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userIds !== undefined) {
            requestContext.setQueryParam("userIds", ObjectSerializer.serialize(userIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FriendsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1ContactsTargetContactIdRequestFriendshipPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1ContactsTargetContactIdRequestFriendshipPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiCaptchaStatusResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiCaptchaStatusResponseModel", ""
            ) as RobloxFriendsApiCaptchaStatusResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  5: The target user is already a friend.  6: Invalid parameters.  7: The user cannot be friends with itself.  31: User with max friends sent friend request.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: The user is banned from performing operation.  3: The user is blocked from performing this action.  14: The user has not passed the captcha.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: The flood limit has been exceeded.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiCaptchaStatusResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiCaptchaStatusResponseModel", ""
            ) as RobloxFriendsApiCaptchaStatusResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1MetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1MetadataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiModelsResponseFriendsPageMetadataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiModelsResponseFriendsPageMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiModelsResponseFriendsPageMetadataResponse", ""
            ) as RobloxFriendsApiModelsResponseFriendsPageMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiModelsResponseFriendsPageMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiModelsResponseFriendsPageMetadataResponse", ""
            ) as RobloxFriendsApiModelsResponseFriendsPageMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1MyFriendsCountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1MyFriendsCountGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiFriendsCountResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiFriendsCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiFriendsCountResponse", ""
            ) as RobloxFriendsApiFriendsCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiFriendsCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiFriendsCountResponse", ""
            ) as RobloxFriendsApiFriendsCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1MyFriendsRequestsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1MyFriendsRequestsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  6: Invalid parameters.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: The user is banned from performing operation.  3: The user is blocked from performing this action.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: The flood limit has been exceeded.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiFriendRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UserFriendRequestsCountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UserFriendRequestsCountGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiPendingFriendRequestCountModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiPendingFriendRequestCountModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiPendingFriendRequestCountModel", ""
            ) as RobloxFriendsApiPendingFriendRequestCountModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiPendingFriendRequestCountModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiPendingFriendRequestCountModel", ""
            ) as RobloxFriendsApiPendingFriendRequestCountModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UserFriendRequestsDeclineAllPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UserFriendRequestsDeclineAllPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse", ""
            ) as RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse", ""
            ) as RobloxFriendsApiModelsResponseDeclineAllFriendRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersRequesterUserIdAcceptFriendRequestPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersRequesterUserIdAcceptFriendRequestPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  10: The friend request does not exist.  11: The current users friends limit has been exceeded.  12: The target users friends limit has been exceeded.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  3: The user is blocked from performing this action.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1UsersRequesterUserIdDeclineFriendRequestPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersRequesterUserIdDeclineFriendRequestPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  10: The friend request does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1UsersSenderUserIdAcceptFriendRequestWithTokenPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersSenderUserIdAcceptFriendRequestWithTokenPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  3: The user is blocked from performing this action.  5: The target user is already a friend.  6: Invalid parameters.  7: The user cannot be friends with itself.  11: The current users friends limit has been exceeded.  12: The target users friends limit has been exceeded.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1UsersTargetUserIdRequestFriendshipPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersTargetUserIdRequestFriendshipPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiCaptchaStatusResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiCaptchaStatusResponseModel", ""
            ) as RobloxFriendsApiCaptchaStatusResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  5: The target user is already a friend.  6: Invalid parameters.  7: The user cannot be friends with itself.  10: The friend request does not exist.  13: The users are not in the same game.  31: User with max friends sent friend request.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: The user is banned from performing operation.  3: The user is blocked from performing this action.  14: The user has not passed the captcha.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: The flood limit has been exceeded.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiCaptchaStatusResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiCaptchaStatusResponseModel", ""
            ) as RobloxFriendsApiCaptchaStatusResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersTargetUserIdUnfriendPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersTargetUserIdUnfriendPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1UsersUserIdFriendsCountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdFriendsCountGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiFriendsCountResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiFriendsCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiFriendsCountResponse", ""
            ) as RobloxFriendsApiFriendsCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiFriendsCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiFriendsCountResponse", ""
            ) as RobloxFriendsApiFriendsCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdFriendsFindGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdFriendsFindGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse", ""
            ) as RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  6: Invalid parameters.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse", ""
            ) as RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdFriendsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdFriendsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdFriendsInactiveGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdFriendsInactiveGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  6: Invalid parameters.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdFriendsOnlineGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdFriendsOnlineGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  6: Invalid parameters.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiModelsResponseUserPresenceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdFriendsSearchGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdFriendsSearchGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse", ""
            ) as RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  6: Invalid parameters.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse", ""
            ) as RobloxPagingCursoredPagedResultRobloxFriendsApiModelsResponseFriendResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdFriendsStatusesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdFriendsStatusesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  15: Too many ids.  16: Invalid ids.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxFriendsApiFriendStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
