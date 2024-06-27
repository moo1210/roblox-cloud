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

import { ObservableGroupsV2Api } from "./ObservableAPI";
import { GroupsV2ApiRequestFactory, GroupsV2ApiResponseProcessor} from "../apis/GroupsV2Api";

export interface GroupsV2ApiV2GroupsGetRequest {
    /**
     * The group Ids.
     * @type Array&lt;number&gt;
     * @memberof GroupsV2Apiv2GroupsGet
     */
    groupIds: Array<number>
}

export interface GroupsV2ApiV2UsersUserIdGroupsRolesGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof GroupsV2Apiv2UsersUserIdGroupsRolesGet
     */
    userId: number
    /**
     * 
     * @type boolean
     * @memberof GroupsV2Apiv2UsersUserIdGroupsRolesGet
     */
    includeLocked: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupsV2Apiv2UsersUserIdGroupsRolesGet
     */
    includeNotificationPreferences: boolean
}

export class ObjectGroupsV2Api {
    private api: ObservableGroupsV2Api

    public constructor(configuration: Configuration, requestFactory?: GroupsV2ApiRequestFactory, responseProcessor?: GroupsV2ApiResponseProcessor) {
        this.api = new ObservableGroupsV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * If a group comes back as null, it will not be returned in the response.
     * Multi-get groups information by Ids.
     * @param param the request object
     */
    public v2GroupsGetWithHttpInfo(param: GroupsV2ApiV2GroupsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2>> {
        return this.api.v2GroupsGetWithHttpInfo(param.groupIds,  options).toPromise();
    }

    /**
     * If a group comes back as null, it will not be returned in the response.
     * Multi-get groups information by Ids.
     * @param param the request object
     */
    public v2GroupsGet(param: GroupsV2ApiV2GroupsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2> {
        return this.api.v2GroupsGet(param.groupIds,  options).toPromise();
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param param the request object
     */
    public v2UsersUserIdGroupsRolesGetWithHttpInfo(param: GroupsV2ApiV2UsersUserIdGroupsRolesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse>> {
        return this.api.v2UsersUserIdGroupsRolesGetWithHttpInfo(param.userId, param.includeLocked, param.includeNotificationPreferences,  options).toPromise();
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param param the request object
     */
    public v2UsersUserIdGroupsRolesGet(param: GroupsV2ApiV2UsersUserIdGroupsRolesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse> {
        return this.api.v2UsersUserIdGroupsRolesGet(param.userId, param.includeLocked, param.includeNotificationPreferences,  options).toPromise();
    }

}

import { ObservableWallV2Api } from "./ObservableAPI";
import { WallV2ApiRequestFactory, WallV2ApiResponseProcessor} from "../apis/WallV2Api";

export interface WallV2ApiV2GroupsGroupIdWallPostsGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof WallV2Apiv2GroupsGroupIdWallPostsGet
     */
    groupId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof WallV2Apiv2GroupsGroupIdWallPostsGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof WallV2Apiv2GroupsGroupIdWallPostsGet
     */
    cursor?: string
    /**
     * Sorted by group wall post Id
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof WallV2Apiv2GroupsGroupIdWallPostsGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface WallV2ApiV2GroupsGroupIdWallPostsPostRequest {
    /**
     * The group id.
     * @type number
     * @memberof WallV2Apiv2GroupsGroupIdWallPostsPost
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.CreateWallPostRequest.
     * @type RobloxGroupsApiCreateWallPostRequest
     * @memberof WallV2Apiv2GroupsGroupIdWallPostsPost
     */
    request: RobloxGroupsApiCreateWallPostRequest
}

export class ObjectWallV2Api {
    private api: ObservableWallV2Api

    public constructor(configuration: Configuration, requestFactory?: WallV2ApiRequestFactory, responseProcessor?: WallV2ApiResponseProcessor) {
        this.api = new ObservableWallV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a list of group wall posts.
     * @param param the request object
     */
    public v2GroupsGroupIdWallPostsGetWithHttpInfo(param: WallV2ApiV2GroupsGroupIdWallPostsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model>> {
        return this.api.v2GroupsGroupIdWallPostsGetWithHttpInfo(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a list of group wall posts.
     * @param param the request object
     */
    public v2GroupsGroupIdWallPostsGet(param: WallV2ApiV2GroupsGroupIdWallPostsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model> {
        return this.api.v2GroupsGroupIdWallPostsGet(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Creates a post on a group wall
     * @param param the request object
     */
    public v2GroupsGroupIdWallPostsPostWithHttpInfo(param: WallV2ApiV2GroupsGroupIdWallPostsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupWallPostV2Model>> {
        return this.api.v2GroupsGroupIdWallPostsPostWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Creates a post on a group wall
     * @param param the request object
     */
    public v2GroupsGroupIdWallPostsPost(param: WallV2ApiV2GroupsGroupIdWallPostsPostRequest, options?: Configuration): Promise<RobloxGroupsApiGroupWallPostV2Model> {
        return this.api.v2GroupsGroupIdWallPostsPost(param.groupId, param.request,  options).toPromise();
    }

}
