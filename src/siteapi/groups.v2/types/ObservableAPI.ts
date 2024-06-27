import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxGroupsApiCreateWallPostRequest } from '../models/RobloxGroupsApiCreateWallPostRequest';
import { RobloxGroupsApiGroupMembershipResponse } from '../models/RobloxGroupsApiGroupMembershipResponse';
import { RobloxGroupsApiGroupRoleResponse } from '../models/RobloxGroupsApiGroupRoleResponse';
import { RobloxGroupsApiGroupWallPostV2Model } from '../models/RobloxGroupsApiGroupWallPostV2Model';
import { RobloxGroupsApiModelsResponseUserModel } from '../models/RobloxGroupsApiModelsResponseUserModel';
import { RobloxGroupsApiUserGroupRoleResponse } from '../models/RobloxGroupsApiUserGroupRoleResponse';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { RobloxWebResponsesGroupsGroupBasicResponse } from '../models/RobloxWebResponsesGroupsGroupBasicResponse';
import { RobloxWebResponsesGroupsGroupResponseV2 } from '../models/RobloxWebResponsesGroupsGroupResponseV2';
import { RobloxWebResponsesGroupsGroupRoleBasicResponse } from '../models/RobloxWebResponsesGroupsGroupRoleBasicResponse';
import { RobloxWebResponsesRelatedEntityTypeResponseRobloxWebResponsesGroupsGroupOwnerType } from '../models/RobloxWebResponsesRelatedEntityTypeResponseRobloxWebResponsesGroupsGroupOwnerType';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2 } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2';
import { RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model';

import { GroupsV2ApiRequestFactory, GroupsV2ApiResponseProcessor} from "../apis/GroupsV2Api";
export class ObservableGroupsV2Api {
    private requestFactory: GroupsV2ApiRequestFactory;
    private responseProcessor: GroupsV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsV2ApiRequestFactory,
        responseProcessor?: GroupsV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupsV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupsV2ApiResponseProcessor();
    }

    /**
     * If a group comes back as null, it will not be returned in the response.
     * Multi-get groups information by Ids.
     * @param groupIds The group Ids.
     */
    public v2GroupsGetWithHttpInfo(groupIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2>> {
        const requestContextPromise = this.requestFactory.v2GroupsGet(groupIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GroupsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * If a group comes back as null, it will not be returned in the response.
     * Multi-get groups information by Ids.
     * @param groupIds The group Ids.
     */
    public v2GroupsGet(groupIds: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2> {
        return this.v2GroupsGetWithHttpInfo(groupIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2>) => apiResponse.data));
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param userId The user id.
     * @param includeLocked 
     * @param includeNotificationPreferences 
     */
    public v2UsersUserIdGroupsRolesGetWithHttpInfo(userId: number, includeLocked: boolean, includeNotificationPreferences: boolean, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse>> {
        const requestContextPromise = this.requestFactory.v2UsersUserIdGroupsRolesGet(userId, includeLocked, includeNotificationPreferences, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UsersUserIdGroupsRolesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param userId The user id.
     * @param includeLocked 
     * @param includeNotificationPreferences 
     */
    public v2UsersUserIdGroupsRolesGet(userId: number, includeLocked: boolean, includeNotificationPreferences: boolean, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse> {
        return this.v2UsersUserIdGroupsRolesGetWithHttpInfo(userId, includeLocked, includeNotificationPreferences, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse>) => apiResponse.data));
    }

}

import { WallV2ApiRequestFactory, WallV2ApiResponseProcessor} from "../apis/WallV2Api";
export class ObservableWallV2Api {
    private requestFactory: WallV2ApiRequestFactory;
    private responseProcessor: WallV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WallV2ApiRequestFactory,
        responseProcessor?: WallV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WallV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WallV2ApiResponseProcessor();
    }

    /**
     * Gets a list of group wall posts.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by group wall post Id
     */
    public v2GroupsGroupIdWallPostsGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model>> {
        const requestContextPromise = this.requestFactory.v2GroupsGroupIdWallPostsGet(groupId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GroupsGroupIdWallPostsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of group wall posts.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by group wall post Id
     */
    public v2GroupsGroupIdWallPostsGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model> {
        return this.v2GroupsGroupIdWallPostsGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model>) => apiResponse.data));
    }

    /**
     * Creates a post on a group wall
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.CreateWallPostRequest.
     */
    public v2GroupsGroupIdWallPostsPostWithHttpInfo(groupId: number, request: RobloxGroupsApiCreateWallPostRequest, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupWallPostV2Model>> {
        const requestContextPromise = this.requestFactory.v2GroupsGroupIdWallPostsPost(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GroupsGroupIdWallPostsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a post on a group wall
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.CreateWallPostRequest.
     */
    public v2GroupsGroupIdWallPostsPost(groupId: number, request: RobloxGroupsApiCreateWallPostRequest, _options?: Configuration): Observable<RobloxGroupsApiGroupWallPostV2Model> {
        return this.v2GroupsGroupIdWallPostsPostWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupWallPostV2Model>) => apiResponse.data));
    }

}
