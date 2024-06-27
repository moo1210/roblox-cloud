import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

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
import { ObservableGroupsV2Api } from './ObservableAPI';

import { GroupsV2ApiRequestFactory, GroupsV2ApiResponseProcessor} from "../apis/GroupsV2Api";
export class PromiseGroupsV2Api {
    private api: ObservableGroupsV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsV2ApiRequestFactory,
        responseProcessor?: GroupsV2ApiResponseProcessor
    ) {
        this.api = new ObservableGroupsV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * If a group comes back as null, it will not be returned in the response.
     * Multi-get groups information by Ids.
     * @param groupIds The group Ids.
     */
    public v2GroupsGetWithHttpInfo(groupIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2>> {
        const result = this.api.v2GroupsGetWithHttpInfo(groupIds, _options);
        return result.toPromise();
    }

    /**
     * If a group comes back as null, it will not be returned in the response.
     * Multi-get groups information by Ids.
     * @param groupIds The group Ids.
     */
    public v2GroupsGet(groupIds: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2> {
        const result = this.api.v2GroupsGet(groupIds, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param userId The user id.
     * @param includeLocked 
     * @param includeNotificationPreferences 
     */
    public v2UsersUserIdGroupsRolesGetWithHttpInfo(userId: number, includeLocked: boolean, includeNotificationPreferences: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse>> {
        const result = this.api.v2UsersUserIdGroupsRolesGetWithHttpInfo(userId, includeLocked, includeNotificationPreferences, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param userId The user id.
     * @param includeLocked 
     * @param includeNotificationPreferences 
     */
    public v2UsersUserIdGroupsRolesGet(userId: number, includeLocked: boolean, includeNotificationPreferences: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse> {
        const result = this.api.v2UsersUserIdGroupsRolesGet(userId, includeLocked, includeNotificationPreferences, _options);
        return result.toPromise();
    }


}



import { ObservableWallV2Api } from './ObservableAPI';

import { WallV2ApiRequestFactory, WallV2ApiResponseProcessor} from "../apis/WallV2Api";
export class PromiseWallV2Api {
    private api: ObservableWallV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: WallV2ApiRequestFactory,
        responseProcessor?: WallV2ApiResponseProcessor
    ) {
        this.api = new ObservableWallV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a list of group wall posts.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by group wall post Id
     */
    public v2GroupsGroupIdWallPostsGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model>> {
        const result = this.api.v2GroupsGroupIdWallPostsGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of group wall posts.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by group wall post Id
     */
    public v2GroupsGroupIdWallPostsGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model> {
        const result = this.api.v2GroupsGroupIdWallPostsGet(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Creates a post on a group wall
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.CreateWallPostRequest.
     */
    public v2GroupsGroupIdWallPostsPostWithHttpInfo(groupId: number, request: RobloxGroupsApiCreateWallPostRequest, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupWallPostV2Model>> {
        const result = this.api.v2GroupsGroupIdWallPostsPostWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Creates a post on a group wall
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.CreateWallPostRequest.
     */
    public v2GroupsGroupIdWallPostsPost(groupId: number, request: RobloxGroupsApiCreateWallPostRequest, _options?: Configuration): Promise<RobloxGroupsApiGroupWallPostV2Model> {
        const result = this.api.v2GroupsGroupIdWallPostsPost(groupId, request, _options);
        return result.toPromise();
    }


}



