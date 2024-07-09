import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxGroupsApiChangeOwnerRequest } from '../models/RobloxGroupsApiChangeOwnerRequest';
import { RobloxGroupsApiCreateWallPostRequest } from '../models/RobloxGroupsApiCreateWallPostRequest';
import { RobloxGroupsApiGroupAllRolesResponse } from '../models/RobloxGroupsApiGroupAllRolesResponse';
import { RobloxGroupsApiGroupAuditLogPageResponseRobloxGroupsApiModelsResponseGroupAuditLogResponseItem } from '../models/RobloxGroupsApiGroupAuditLogPageResponseRobloxGroupsApiModelsResponseGroupAuditLogResponseItem';
import { RobloxGroupsApiGroupConfigurationDisplayOptionsResponse } from '../models/RobloxGroupsApiGroupConfigurationDisplayOptionsResponse';
import { RobloxGroupsApiGroupConfigurationResponse } from '../models/RobloxGroupsApiGroupConfigurationResponse';
import { RobloxGroupsApiGroupDescriptionResponse } from '../models/RobloxGroupsApiGroupDescriptionResponse';
import { RobloxGroupsApiGroupDetailResponse } from '../models/RobloxGroupsApiGroupDetailResponse';
import { RobloxGroupsApiGroupEconomyPermissionsModel } from '../models/RobloxGroupsApiGroupEconomyPermissionsModel';
import { RobloxGroupsApiGroupJoinRequestResponse } from '../models/RobloxGroupsApiGroupJoinRequestResponse';
import { RobloxGroupsApiGroupManagementPermissionsModel } from '../models/RobloxGroupsApiGroupManagementPermissionsModel';
import { RobloxGroupsApiGroupMembershipDetailResponse } from '../models/RobloxGroupsApiGroupMembershipDetailResponse';
import { RobloxGroupsApiGroupMembershipMetadataResponse } from '../models/RobloxGroupsApiGroupMembershipMetadataResponse';
import { RobloxGroupsApiGroupMembershipPermissionsModel } from '../models/RobloxGroupsApiGroupMembershipPermissionsModel';
import { RobloxGroupsApiGroupNameChangeConfigurationResponse } from '../models/RobloxGroupsApiGroupNameChangeConfigurationResponse';
import { RobloxGroupsApiGroupOpenCloudPermissionsModel } from '../models/RobloxGroupsApiGroupOpenCloudPermissionsModel';
import { RobloxGroupsApiGroupPayoutResponse } from '../models/RobloxGroupsApiGroupPayoutResponse';
import { RobloxGroupsApiGroupPayoutRestrictionResponse } from '../models/RobloxGroupsApiGroupPayoutRestrictionResponse';
import { RobloxGroupsApiGroupPermissionsModel } from '../models/RobloxGroupsApiGroupPermissionsModel';
import { RobloxGroupsApiGroupPermissionsResponse } from '../models/RobloxGroupsApiGroupPermissionsResponse';
import { RobloxGroupsApiGroupPoliciesResponse } from '../models/RobloxGroupsApiGroupPoliciesResponse';
import { RobloxGroupsApiGroupPolicyRequest } from '../models/RobloxGroupsApiGroupPolicyRequest';
import { RobloxGroupsApiGroupPolicyResponse } from '../models/RobloxGroupsApiGroupPolicyResponse';
import { RobloxGroupsApiGroupPostsPermissionsModel } from '../models/RobloxGroupsApiGroupPostsPermissionsModel';
import { RobloxGroupsApiGroupRelationshipsResponse } from '../models/RobloxGroupsApiGroupRelationshipsResponse';
import { RobloxGroupsApiGroupRoleDetailResponse } from '../models/RobloxGroupsApiGroupRoleDetailResponse';
import { RobloxGroupsApiGroupRoleResponse } from '../models/RobloxGroupsApiGroupRoleResponse';
import { RobloxGroupsApiGroupSearchMetadataResponse } from '../models/RobloxGroupsApiGroupSearchMetadataResponse';
import { RobloxGroupsApiGroupSearchPageResponse } from '../models/RobloxGroupsApiGroupSearchPageResponse';
import { RobloxGroupsApiGroupSearchResponseItem } from '../models/RobloxGroupsApiGroupSearchResponseItem';
import { RobloxGroupsApiGroupSettingsResponse } from '../models/RobloxGroupsApiGroupSettingsResponse';
import { RobloxGroupsApiGroupsDisplayOptionsResponse } from '../models/RobloxGroupsApiGroupsDisplayOptionsResponse';
import { RobloxGroupsApiJoinGroupRequest } from '../models/RobloxGroupsApiJoinGroupRequest';
import { RobloxGroupsApiMembersRequest } from '../models/RobloxGroupsApiMembersRequest';
import { RobloxGroupsApiModelsRequestCreateRoleSetRequest } from '../models/RobloxGroupsApiModelsRequestCreateRoleSetRequest';
import { RobloxGroupsApiModelsRequestUpdateRoleSetRequest } from '../models/RobloxGroupsApiModelsRequestUpdateRoleSetRequest';
import { RobloxGroupsApiModelsResponseGroupAuditLogResponseItem } from '../models/RobloxGroupsApiModelsResponseGroupAuditLogResponseItem';
import { RobloxGroupsApiModelsResponseGroupNameHistoryResponseItem } from '../models/RobloxGroupsApiModelsResponseGroupNameHistoryResponseItem';
import { RobloxGroupsApiModelsResponseGroupWallPostModel } from '../models/RobloxGroupsApiModelsResponseGroupWallPostModel';
import { RobloxGroupsApiModelsResponseUserModel } from '../models/RobloxGroupsApiModelsResponseUserModel';
import { RobloxGroupsApiPayoutRecipientRequest } from '../models/RobloxGroupsApiPayoutRecipientRequest';
import { RobloxGroupsApiPayoutRequest } from '../models/RobloxGroupsApiPayoutRequest';
import { RobloxGroupsApiPostGroupStatusRequest } from '../models/RobloxGroupsApiPostGroupStatusRequest';
import { RobloxGroupsApiPrimaryGroupRequest } from '../models/RobloxGroupsApiPrimaryGroupRequest';
import { RobloxGroupsApiRecurringPayoutsConfigurationResponse } from '../models/RobloxGroupsApiRecurringPayoutsConfigurationResponse';
import { RobloxGroupsApiRelationshipsRequest } from '../models/RobloxGroupsApiRelationshipsRequest';
import { RobloxGroupsApiRoleConfigurationResponse } from '../models/RobloxGroupsApiRoleConfigurationResponse';
import { RobloxGroupsApiShoutResponse } from '../models/RobloxGroupsApiShoutResponse';
import { RobloxGroupsApiSocialLinkRequest } from '../models/RobloxGroupsApiSocialLinkRequest';
import { RobloxGroupsApiSocialLinkResponse } from '../models/RobloxGroupsApiSocialLinkResponse';
import { RobloxGroupsApiUpdateGroupDescriptionRequest } from '../models/RobloxGroupsApiUpdateGroupDescriptionRequest';
import { RobloxGroupsApiUpdateGroupNameRequest } from '../models/RobloxGroupsApiUpdateGroupNameRequest';
import { RobloxGroupsApiUpdateGroupNameResponse } from '../models/RobloxGroupsApiUpdateGroupNameResponse';
import { RobloxGroupsApiUpdateGroupNotificationPreferenceRequest } from '../models/RobloxGroupsApiUpdateGroupNotificationPreferenceRequest';
import { RobloxGroupsApiUpdateGroupSettingsRequest } from '../models/RobloxGroupsApiUpdateGroupSettingsRequest';
import { RobloxGroupsApiUpdatePermissionsRequest } from '../models/RobloxGroupsApiUpdatePermissionsRequest';
import { RobloxGroupsApiUpdatePermissionsRequestPermissions } from '../models/RobloxGroupsApiUpdatePermissionsRequestPermissions';
import { RobloxGroupsApiUpdateUserRoleRequest } from '../models/RobloxGroupsApiUpdateUserRoleRequest';
import { RobloxGroupsApiUserGroupMembershipResponse } from '../models/RobloxGroupsApiUserGroupMembershipResponse';
import { RobloxGroupsApiUserGroupRoleResponse } from '../models/RobloxGroupsApiUserGroupRoleResponse';
import { RobloxGroupsClientGroupFeaturedContentResponse } from '../models/RobloxGroupsClientGroupFeaturedContentResponse';
import { RobloxPagingExclusiveStartKeyCursorSystemString } from '../models/RobloxPagingExclusiveStartKeyCursorSystemString';
import { RobloxPagingStartIndexCursor } from '../models/RobloxPagingStartIndexCursor';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { RobloxWebResponsesGroupsGroupBasicResponse } from '../models/RobloxWebResponsesGroupsGroupBasicResponse';
import { RobloxWebResponsesGroupsGroupResponseV2 } from '../models/RobloxWebResponsesGroupsGroupResponseV2';
import { RobloxWebResponsesRelatedEntityTypeResponseRobloxWebResponsesGroupsGroupOwnerType } from '../models/RobloxWebResponsesRelatedEntityTypeResponseRobloxWebResponsesGroupsGroupOwnerType';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt32 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt32';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupDetailResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupDetailResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipDetailResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipDetailResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPayoutResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPayoutResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupRoleDetailResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupRoleDetailResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiUserGroupMembershipResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiUserGroupMembershipResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupJoinRequestResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupJoinRequestResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupNameHistoryResponseItem } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupNameHistoryResponseItem';
import { RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupWallPostModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupWallPostModel';
import { RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseUserModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseUserModel';
import { RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiUserGroupRoleResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiUserGroupRoleResponse';
import { SystemIOStream } from '../models/SystemIOStream';
import { SystemValueTupleRobloxWebWebAPIExclusiveStartRequestSystemInt64RobloxPagingExclusiveStartKeyCursorSystemString } from '../models/SystemValueTupleRobloxWebWebAPIExclusiveStartRequestSystemInt64RobloxPagingExclusiveStartKeyCursorSystemString';

import { ObservableFeaturedContentApi } from "./ObservableAPI";
import { FeaturedContentApiRequestFactory, FeaturedContentApiResponseProcessor} from "../apis/FeaturedContentApi";

export interface FeaturedContentApiV1FeaturedContentEventDeleteRequest {
    /**
     * The group Id.
     * @type number
     * @memberof FeaturedContentApiv1FeaturedContentEventDelete
     */
    groupId: number
    /**
     * The event Id.
     * @type number
     * @memberof FeaturedContentApiv1FeaturedContentEventDelete
     */
    eventId: number
}

export interface FeaturedContentApiV1FeaturedContentEventGetRequest {
    /**
     * The group Id.
     * @type number
     * @memberof FeaturedContentApiv1FeaturedContentEventGet
     */
    groupId: number
}

export interface FeaturedContentApiV1FeaturedContentEventPostRequest {
    /**
     * The group Id.
     * @type number
     * @memberof FeaturedContentApiv1FeaturedContentEventPost
     */
    groupId: number
    /**
     * The event Id.
     * @type number
     * @memberof FeaturedContentApiv1FeaturedContentEventPost
     */
    eventId: number
}

export class ObjectFeaturedContentApi {
    private api: ObservableFeaturedContentApi

    public constructor(configuration: Configuration, requestFactory?: FeaturedContentApiRequestFactory, responseProcessor?: FeaturedContentApiResponseProcessor) {
        this.api = new ObservableFeaturedContentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes the featured event for a group
     * @param param the request object
     */
    public v1FeaturedContentEventDeleteWithHttpInfo(param: FeaturedContentApiV1FeaturedContentEventDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.v1FeaturedContentEventDeleteWithHttpInfo(param.groupId, param.eventId,  options).toPromise();
    }

    /**
     * Deletes the featured event for a group
     * @param param the request object
     */
    public v1FeaturedContentEventDelete(param: FeaturedContentApiV1FeaturedContentEventDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.v1FeaturedContentEventDelete(param.groupId, param.eventId,  options).toPromise();
    }

    /**
     * Gets the featured event for a group
     * @param param the request object
     */
    public v1FeaturedContentEventGetWithHttpInfo(param: FeaturedContentApiV1FeaturedContentEventGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsClientGroupFeaturedContentResponse>> {
        return this.api.v1FeaturedContentEventGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Gets the featured event for a group
     * @param param the request object
     */
    public v1FeaturedContentEventGet(param: FeaturedContentApiV1FeaturedContentEventGetRequest, options?: Configuration): Promise<RobloxGroupsClientGroupFeaturedContentResponse> {
        return this.api.v1FeaturedContentEventGet(param.groupId,  options).toPromise();
    }

    /**
     * Sets the featured event for a group
     * @param param the request object
     */
    public v1FeaturedContentEventPostWithHttpInfo(param: FeaturedContentApiV1FeaturedContentEventPostRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsClientGroupFeaturedContentResponse>> {
        return this.api.v1FeaturedContentEventPostWithHttpInfo(param.groupId, param.eventId,  options).toPromise();
    }

    /**
     * Sets the featured event for a group
     * @param param the request object
     */
    public v1FeaturedContentEventPost(param: FeaturedContentApiV1FeaturedContentEventPostRequest, options?: Configuration): Promise<RobloxGroupsClientGroupFeaturedContentResponse> {
        return this.api.v1FeaturedContentEventPost(param.groupId, param.eventId,  options).toPromise();
    }

}

import { ObservableGroupSearchApi } from "./ObservableAPI";
import { GroupSearchApiRequestFactory, GroupSearchApiResponseProcessor} from "../apis/GroupSearchApi";

export interface GroupSearchApiV1GroupsSearchGetRequest {
    /**
     * The keyword or phrase to use as the search parameter.
     * @type string
     * @memberof GroupSearchApiv1GroupsSearchGet
     */
    keyword: string
    /**
     * Whether or not to prioritize the exact match for the keyword (optional, defaults to false.
     * @type boolean
     * @memberof GroupSearchApiv1GroupsSearchGet
     */
    prioritizeExactMatch?: boolean
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof GroupSearchApiv1GroupsSearchGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GroupSearchApiv1GroupsSearchGet
     */
    cursor?: string
}

export interface GroupSearchApiV1GroupsSearchLookupGetRequest {
    /**
     * The group name.
     * @type string
     * @memberof GroupSearchApiv1GroupsSearchLookupGet
     */
    groupName: string
}

export interface GroupSearchApiV1GroupsSearchMetadataGetRequest {
}

export class ObjectGroupSearchApi {
    private api: ObservableGroupSearchApi

    public constructor(configuration: Configuration, requestFactory?: GroupSearchApiRequestFactory, responseProcessor?: GroupSearchApiResponseProcessor) {
        this.api = new ObservableGroupSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search for groups by keyword.
     * @param param the request object
     */
    public v1GroupsSearchGetWithHttpInfo(param: GroupSearchApiV1GroupsSearchGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupSearchPageResponse>> {
        return this.api.v1GroupsSearchGetWithHttpInfo(param.keyword, param.prioritizeExactMatch, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Search for groups by keyword.
     * @param param the request object
     */
    public v1GroupsSearchGet(param: GroupSearchApiV1GroupsSearchGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupSearchPageResponse> {
        return this.api.v1GroupsSearchGet(param.keyword, param.prioritizeExactMatch, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Should only be used for direct lookups where a user is inputting a group name, shouldn\'t be used for search pages.
     * Looks up groups by a name. Prioritizes an exact match as the first result.
     * @param param the request object
     */
    public v1GroupsSearchLookupGetWithHttpInfo(param: GroupSearchApiV1GroupsSearchLookupGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse>> {
        return this.api.v1GroupsSearchLookupGetWithHttpInfo(param.groupName,  options).toPromise();
    }

    /**
     * Should only be used for direct lookups where a user is inputting a group name, shouldn\'t be used for search pages.
     * Looks up groups by a name. Prioritizes an exact match as the first result.
     * @param param the request object
     */
    public v1GroupsSearchLookupGet(param: GroupSearchApiV1GroupsSearchLookupGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse> {
        return this.api.v1GroupsSearchLookupGet(param.groupName,  options).toPromise();
    }

    /**
     * Although there is no reason for this to require an authenticated user right now, in the future,  we will use coco to return different suggested groups based upon that user\'s request context
     * Get suggested groups and other miscellaneous information needed for the group/join page like flags
     * @param param the request object
     */
    public v1GroupsSearchMetadataGetWithHttpInfo(param: GroupSearchApiV1GroupsSearchMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupSearchMetadataResponse>> {
        return this.api.v1GroupsSearchMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Although there is no reason for this to require an authenticated user right now, in the future,  we will use coco to return different suggested groups based upon that user\'s request context
     * Get suggested groups and other miscellaneous information needed for the group/join page like flags
     * @param param the request object
     */
    public v1GroupsSearchMetadataGet(param: GroupSearchApiV1GroupsSearchMetadataGetRequest = {}, options?: Configuration): Promise<RobloxGroupsApiGroupSearchMetadataResponse> {
        return this.api.v1GroupsSearchMetadataGet( options).toPromise();
    }

}

import { ObservableGroupsApi } from "./ObservableAPI";
import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";

export interface GroupsApiV1GroupsConfigurationMetadataGetRequest {
}

export interface GroupsApiV1GroupsCreatePostRequest {
    /**
     * The name of the group.
     * @type string
     * @memberof GroupsApiv1GroupsCreatePost
     */
    name?: string
    /**
     * The group description.
     * @type string
     * @memberof GroupsApiv1GroupsCreatePost
     */
    description?: string
    /**
     * Whether or not the group is open for anyone to join.
     * @type boolean
     * @memberof GroupsApiv1GroupsCreatePost
     */
    publicGroup?: boolean
    /**
     * Whether or not the group is only open to join for builders club members.
     * @type boolean
     * @memberof GroupsApiv1GroupsCreatePost
     */
    buildersClubMembersOnly?: boolean
    /**
     * 
     * @type HttpFile
     * @memberof GroupsApiv1GroupsCreatePost
     */
    files?: HttpFile
}

export interface GroupsApiV1GroupsGroupIdAuditLogGetRequest {
    /**
     * The id of the group the user is in.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdAuditLogGet
     */
    groupId: number
    /**
     * 
     * @type &#39;DeletePost&#39; | &#39;RemoveMember&#39; | &#39;AcceptJoinRequest&#39; | &#39;DeclineJoinRequest&#39; | &#39;PostStatus&#39; | &#39;ChangeRank&#39; | &#39;BuyAd&#39; | &#39;SendAllyRequest&#39; | &#39;CreateEnemy&#39; | &#39;AcceptAllyRequest&#39; | &#39;DeclineAllyRequest&#39; | &#39;DeleteAlly&#39; | &#39;DeleteEnemy&#39; | &#39;AddGroupPlace&#39; | &#39;RemoveGroupPlace&#39; | &#39;CreateItems&#39; | &#39;ConfigureItems&#39; | &#39;SpendGroupFunds&#39; | &#39;ChangeOwner&#39; | &#39;Delete&#39; | &#39;AdjustCurrencyAmounts&#39; | &#39;Abandon&#39; | &#39;Claim&#39; | &#39;Rename&#39; | &#39;ChangeDescription&#39; | &#39;InviteToClan&#39; | &#39;KickFromClan&#39; | &#39;CancelClanInvite&#39; | &#39;BuyClan&#39; | &#39;CreateGroupAsset&#39; | &#39;UpdateGroupAsset&#39; | &#39;ConfigureGroupAsset&#39; | &#39;RevertGroupAsset&#39; | &#39;CreateGroupDeveloperProduct&#39; | &#39;ConfigureGroupGame&#39; | &#39;CreateGroupDeveloperSubscriptionProduct&#39; | &#39;Lock&#39; | &#39;Unlock&#39; | &#39;CreateGamePass&#39; | &#39;CreateBadge&#39; | &#39;ConfigureBadge&#39; | &#39;SavePlace&#39; | &#39;PublishPlace&#39; | &#39;UpdateRolesetRank&#39; | &#39;UpdateRolesetData&#39;
     * @memberof GroupsApiv1GroupsGroupIdAuditLogGet
     */
    actionType?: 'DeletePost' | 'RemoveMember' | 'AcceptJoinRequest' | 'DeclineJoinRequest' | 'PostStatus' | 'ChangeRank' | 'BuyAd' | 'SendAllyRequest' | 'CreateEnemy' | 'AcceptAllyRequest' | 'DeclineAllyRequest' | 'DeleteAlly' | 'DeleteEnemy' | 'AddGroupPlace' | 'RemoveGroupPlace' | 'CreateItems' | 'ConfigureItems' | 'SpendGroupFunds' | 'ChangeOwner' | 'Delete' | 'AdjustCurrencyAmounts' | 'Abandon' | 'Claim' | 'Rename' | 'ChangeDescription' | 'InviteToClan' | 'KickFromClan' | 'CancelClanInvite' | 'BuyClan' | 'CreateGroupAsset' | 'UpdateGroupAsset' | 'ConfigureGroupAsset' | 'RevertGroupAsset' | 'CreateGroupDeveloperProduct' | 'ConfigureGroupGame' | 'CreateGroupDeveloperSubscriptionProduct' | 'Lock' | 'Unlock' | 'CreateGamePass' | 'CreateBadge' | 'ConfigureBadge' | 'SavePlace' | 'PublishPlace' | 'UpdateRolesetRank' | 'UpdateRolesetData'
    /**
     * Filter for specific user id
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdAuditLogGet
     */
    userId?: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof GroupsApiv1GroupsGroupIdAuditLogGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GroupsApiv1GroupsGroupIdAuditLogGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof GroupsApiv1GroupsGroupIdAuditLogGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface GroupsApiV1GroupsGroupIdDescriptionPatchRequest {
    /**
     * The id of the group the user is in.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdDescriptionPatch
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.UpdateGroupDescriptionRequest.
     * @type RobloxGroupsApiUpdateGroupDescriptionRequest
     * @memberof GroupsApiv1GroupsGroupIdDescriptionPatch
     */
    request: RobloxGroupsApiUpdateGroupDescriptionRequest
}

export interface GroupsApiV1GroupsGroupIdGetRequest {
    /**
     * The group Id.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdGet
     */
    groupId: number
}

export interface GroupsApiV1GroupsGroupIdNameHistoryGetRequest {
    /**
     * The id of the group.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdNameHistoryGet
     */
    groupId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof GroupsApiv1GroupsGroupIdNameHistoryGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GroupsApiv1GroupsGroupIdNameHistoryGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof GroupsApiv1GroupsGroupIdNameHistoryGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface GroupsApiV1GroupsGroupIdNamePatchRequest {
    /**
     * The id of the group the user is in.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdNamePatch
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.UpdateGroupNameRequest.
     * @type RobloxGroupsApiUpdateGroupNameRequest
     * @memberof GroupsApiv1GroupsGroupIdNamePatch
     */
    request: RobloxGroupsApiUpdateGroupNameRequest
}

export interface GroupsApiV1GroupsGroupIdNotificationPreferencePatchRequest {
    /**
     * The id of the group the user is in.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdNotificationPreferencePatch
     */
    groupId: number
    /**
     * Roblox.Groups.Api.UpdateGroupSettingsRequest
     * @type RobloxGroupsApiUpdateGroupNotificationPreferenceRequest
     * @memberof GroupsApiv1GroupsGroupIdNotificationPreferencePatch
     */
    request: RobloxGroupsApiUpdateGroupNotificationPreferenceRequest
}

export interface GroupsApiV1GroupsGroupIdSettingsGetRequest {
    /**
     * The id of the group the user is in.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdSettingsGet
     */
    groupId: number
}

export interface GroupsApiV1GroupsGroupIdSettingsPatchRequest {
    /**
     * The id of the group the user is in.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdSettingsPatch
     */
    groupId: number
    /**
     * Roblox.Groups.Api.UpdateGroupSettingsRequest
     * @type RobloxGroupsApiUpdateGroupSettingsRequest
     * @memberof GroupsApiv1GroupsGroupIdSettingsPatch
     */
    request: RobloxGroupsApiUpdateGroupSettingsRequest
}

export interface GroupsApiV1GroupsGroupIdStatusPatchRequest {
    /**
     * The group Id.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdStatusPatch
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.PostGroupStatusRequest.
     * @type RobloxGroupsApiPostGroupStatusRequest
     * @memberof GroupsApiv1GroupsGroupIdStatusPatch
     */
    statusRequest: RobloxGroupsApiPostGroupStatusRequest
}

export interface GroupsApiV1GroupsIconPatchRequest {
    /**
     * The group Id.
     * @type number
     * @memberof GroupsApiv1GroupsIconPatch
     */
    groupId: number
    /**
     * 
     * @type HttpFile
     * @memberof GroupsApiv1GroupsIconPatch
     */
    files?: HttpFile
}

export interface GroupsApiV1GroupsMetadataGetRequest {
}

export interface GroupsApiV1GroupsPoliciesPostRequest {
    /**
     * 
     * @type RobloxGroupsApiGroupPolicyRequest
     * @memberof GroupsApiv1GroupsPoliciesPost
     */
    groupPolicyRequest: RobloxGroupsApiGroupPolicyRequest
}

export class ObjectGroupsApi {
    private api: ObservableGroupsApi

    public constructor(configuration: Configuration, requestFactory?: GroupsApiRequestFactory, responseProcessor?: GroupsApiResponseProcessor) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets Group configuration contextual information
     * @param param the request object
     */
    public v1GroupsConfigurationMetadataGetWithHttpInfo(param: GroupsApiV1GroupsConfigurationMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupConfigurationDisplayOptionsResponse>> {
        return this.api.v1GroupsConfigurationMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets Group configuration contextual information
     * @param param the request object
     */
    public v1GroupsConfigurationMetadataGet(param: GroupsApiV1GroupsConfigurationMetadataGetRequest = {}, options?: Configuration): Promise<RobloxGroupsApiGroupConfigurationDisplayOptionsResponse> {
        return this.api.v1GroupsConfigurationMetadataGet( options).toPromise();
    }

    /**
     * This endpoint will charge Robux for the group purchase.  Http status code 413 is thrown when the group icon file size is too large.
     * Creates a new group.
     * @param param the request object
     */
    public v1GroupsCreatePostWithHttpInfo(param: GroupsApiV1GroupsCreatePostRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebResponsesGroupsGroupResponseV2>> {
        return this.api.v1GroupsCreatePostWithHttpInfo(param.name, param.description, param.publicGroup, param.buildersClubMembersOnly, param.files,  options).toPromise();
    }

    /**
     * This endpoint will charge Robux for the group purchase.  Http status code 413 is thrown when the group icon file size is too large.
     * Creates a new group.
     * @param param the request object
     */
    public v1GroupsCreatePost(param: GroupsApiV1GroupsCreatePostRequest = {}, options?: Configuration): Promise<RobloxWebResponsesGroupsGroupResponseV2> {
        return this.api.v1GroupsCreatePost(param.name, param.description, param.publicGroup, param.buildersClubMembersOnly, param.files,  options).toPromise();
    }

    /**
     * Gets the Group\'s audit log
     * @param param the request object
     */
    public v1GroupsGroupIdAuditLogGetWithHttpInfo(param: GroupsApiV1GroupsGroupIdAuditLogGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupAuditLogPageResponseRobloxGroupsApiModelsResponseGroupAuditLogResponseItem>> {
        return this.api.v1GroupsGroupIdAuditLogGetWithHttpInfo(param.groupId, param.actionType, param.userId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets the Group\'s audit log
     * @param param the request object
     */
    public v1GroupsGroupIdAuditLogGet(param: GroupsApiV1GroupsGroupIdAuditLogGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupAuditLogPageResponseRobloxGroupsApiModelsResponseGroupAuditLogResponseItem> {
        return this.api.v1GroupsGroupIdAuditLogGet(param.groupId, param.actionType, param.userId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Updates the groups description
     * @param param the request object
     */
    public v1GroupsGroupIdDescriptionPatchWithHttpInfo(param: GroupsApiV1GroupsGroupIdDescriptionPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupDescriptionResponse>> {
        return this.api.v1GroupsGroupIdDescriptionPatchWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Updates the groups description
     * @param param the request object
     */
    public v1GroupsGroupIdDescriptionPatch(param: GroupsApiV1GroupsGroupIdDescriptionPatchRequest, options?: Configuration): Promise<RobloxGroupsApiGroupDescriptionResponse> {
        return this.api.v1GroupsGroupIdDescriptionPatch(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Gets group information
     * @param param the request object
     */
    public v1GroupsGroupIdGetWithHttpInfo(param: GroupsApiV1GroupsGroupIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupDetailResponse>> {
        return this.api.v1GroupsGroupIdGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Gets group information
     * @param param the request object
     */
    public v1GroupsGroupIdGet(param: GroupsApiV1GroupsGroupIdGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupDetailResponse> {
        return this.api.v1GroupsGroupIdGet(param.groupId,  options).toPromise();
    }

    /**
     * Gets the Group\'s name change history.
     * @param param the request object
     */
    public v1GroupsGroupIdNameHistoryGetWithHttpInfo(param: GroupsApiV1GroupsGroupIdNameHistoryGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupNameHistoryResponseItem>> {
        return this.api.v1GroupsGroupIdNameHistoryGetWithHttpInfo(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets the Group\'s name change history.
     * @param param the request object
     */
    public v1GroupsGroupIdNameHistoryGet(param: GroupsApiV1GroupsGroupIdNameHistoryGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupNameHistoryResponseItem> {
        return this.api.v1GroupsGroupIdNameHistoryGet(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * This endpoint will charge Robux for the group rename.
     * Updates the group\'s name.
     * @param param the request object
     */
    public v1GroupsGroupIdNamePatchWithHttpInfo(param: GroupsApiV1GroupsGroupIdNamePatchRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiUpdateGroupNameResponse>> {
        return this.api.v1GroupsGroupIdNamePatchWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * This endpoint will charge Robux for the group rename.
     * Updates the group\'s name.
     * @param param the request object
     */
    public v1GroupsGroupIdNamePatch(param: GroupsApiV1GroupsGroupIdNamePatchRequest, options?: Configuration): Promise<RobloxGroupsApiUpdateGroupNameResponse> {
        return this.api.v1GroupsGroupIdNamePatch(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Updates the group\'s settings
     * @param param the request object
     */
    public v1GroupsGroupIdNotificationPreferencePatchWithHttpInfo(param: GroupsApiV1GroupsGroupIdNotificationPreferencePatchRequest, options?: Configuration): Promise<HttpInfo<number>> {
        return this.api.v1GroupsGroupIdNotificationPreferencePatchWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Updates the group\'s settings
     * @param param the request object
     */
    public v1GroupsGroupIdNotificationPreferencePatch(param: GroupsApiV1GroupsGroupIdNotificationPreferencePatchRequest, options?: Configuration): Promise<number> {
        return this.api.v1GroupsGroupIdNotificationPreferencePatch(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Gets the Group\'s settings
     * @param param the request object
     */
    public v1GroupsGroupIdSettingsGetWithHttpInfo(param: GroupsApiV1GroupsGroupIdSettingsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupSettingsResponse>> {
        return this.api.v1GroupsGroupIdSettingsGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Gets the Group\'s settings
     * @param param the request object
     */
    public v1GroupsGroupIdSettingsGet(param: GroupsApiV1GroupsGroupIdSettingsGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupSettingsResponse> {
        return this.api.v1GroupsGroupIdSettingsGet(param.groupId,  options).toPromise();
    }

    /**
     * Updates the group\'s settings
     * @param param the request object
     */
    public v1GroupsGroupIdSettingsPatchWithHttpInfo(param: GroupsApiV1GroupsGroupIdSettingsPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdSettingsPatchWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Updates the group\'s settings
     * @param param the request object
     */
    public v1GroupsGroupIdSettingsPatch(param: GroupsApiV1GroupsGroupIdSettingsPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdSettingsPatch(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Sets group status
     * @param param the request object
     */
    public v1GroupsGroupIdStatusPatchWithHttpInfo(param: GroupsApiV1GroupsGroupIdStatusPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiShoutResponse>> {
        return this.api.v1GroupsGroupIdStatusPatchWithHttpInfo(param.groupId, param.statusRequest,  options).toPromise();
    }

    /**
     * Sets group status
     * @param param the request object
     */
    public v1GroupsGroupIdStatusPatch(param: GroupsApiV1GroupsGroupIdStatusPatchRequest, options?: Configuration): Promise<RobloxGroupsApiShoutResponse> {
        return this.api.v1GroupsGroupIdStatusPatch(param.groupId, param.statusRequest,  options).toPromise();
    }

    /**
     * Updates the group icon.
     * @param param the request object
     */
    public v1GroupsIconPatchWithHttpInfo(param: GroupsApiV1GroupsIconPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsIconPatchWithHttpInfo(param.groupId, param.files,  options).toPromise();
    }

    /**
     * Updates the group icon.
     * @param param the request object
     */
    public v1GroupsIconPatch(param: GroupsApiV1GroupsIconPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsIconPatch(param.groupId, param.files,  options).toPromise();
    }

    /**
     * Gets Groups contextual information:  Max number of groups a user can be part of.  Current number of groups a user is a member of.  Whether to show/hide certain features based on device type.
     * @param param the request object
     */
    public v1GroupsMetadataGetWithHttpInfo(param: GroupsApiV1GroupsMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupsDisplayOptionsResponse>> {
        return this.api.v1GroupsMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets Groups contextual information:  Max number of groups a user can be part of.  Current number of groups a user is a member of.  Whether to show/hide certain features based on device type.
     * @param param the request object
     */
    public v1GroupsMetadataGet(param: GroupsApiV1GroupsMetadataGetRequest = {}, options?: Configuration): Promise<RobloxGroupsApiGroupsDisplayOptionsResponse> {
        return this.api.v1GroupsMetadataGet( options).toPromise();
    }

    /**
     * Gets group policy info used for compliance.
     * @param param the request object
     */
    public v1GroupsPoliciesPostWithHttpInfo(param: GroupsApiV1GroupsPoliciesPostRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupPoliciesResponse>> {
        return this.api.v1GroupsPoliciesPostWithHttpInfo(param.groupPolicyRequest,  options).toPromise();
    }

    /**
     * Gets group policy info used for compliance.
     * @param param the request object
     */
    public v1GroupsPoliciesPost(param: GroupsApiV1GroupsPoliciesPostRequest, options?: Configuration): Promise<RobloxGroupsApiGroupPoliciesResponse> {
        return this.api.v1GroupsPoliciesPost(param.groupPolicyRequest,  options).toPromise();
    }

}

import { ObservableMembershipApi } from "./ObservableAPI";
import { MembershipApiRequestFactory, MembershipApiResponseProcessor} from "../apis/MembershipApi";

export interface MembershipApiV1GroupsGroupIdChangeOwnerPostRequest {
    /**
     * The group Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdChangeOwnerPost
     */
    groupId: number
    /**
     * The request.
     * @type RobloxGroupsApiChangeOwnerRequest
     * @memberof MembershipApiv1GroupsGroupIdChangeOwnerPost
     */
    changeOwnerRequest: RobloxGroupsApiChangeOwnerRequest
}

export interface MembershipApiV1GroupsGroupIdClaimOwnershipPostRequest {
    /**
     * The group Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdClaimOwnershipPost
     */
    groupId: number
}

export interface MembershipApiV1GroupsGroupIdJoinRequestsDeleteRequest {
    /**
     * The group id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsDelete
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.MembersRequest.
     * @type RobloxGroupsApiMembersRequest
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsDelete
     */
    request: RobloxGroupsApiMembersRequest
}

export interface MembershipApiV1GroupsGroupIdJoinRequestsGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsGet
     */
    groupId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface MembershipApiV1GroupsGroupIdJoinRequestsPostRequest {
    /**
     * The group id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsPost
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.MembersRequest.
     * @type RobloxGroupsApiMembersRequest
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsPost
     */
    request: RobloxGroupsApiMembersRequest
}

export interface MembershipApiV1GroupsGroupIdJoinRequestsUsersUserIdDeleteRequest {
    /**
     * The group Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsUsersUserIdDelete
     */
    groupId: number
    /**
     * The user Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsUsersUserIdDelete
     */
    userId: number
}

export interface MembershipApiV1GroupsGroupIdJoinRequestsUsersUserIdGetRequest {
    /**
     * The group Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsUsersUserIdGet
     */
    groupId: number
    /**
     * The user Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsUsersUserIdGet
     */
    userId: number
}

export interface MembershipApiV1GroupsGroupIdJoinRequestsUsersUserIdPostRequest {
    /**
     * The group Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsUsersUserIdPost
     */
    groupId: number
    /**
     * The user Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdJoinRequestsUsersUserIdPost
     */
    userId: number
}

export interface MembershipApiV1GroupsGroupIdMembershipGetRequest {
    /**
     * The group Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdMembershipGet
     */
    groupId: number
    /**
     * 
     * @type boolean
     * @memberof MembershipApiv1GroupsGroupIdMembershipGet
     */
    includeNotificationPreferences: boolean
}

export interface MembershipApiV1GroupsGroupIdRolesGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdRolesGet
     */
    groupId: number
}

export interface MembershipApiV1GroupsGroupIdRolesRoleSetIdUsersGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdRolesRoleSetIdUsersGet
     */
    groupId: number
    /**
     * The group\&#39;s role set id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdRolesRoleSetIdUsersGet
     */
    roleSetId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof MembershipApiv1GroupsGroupIdRolesRoleSetIdUsersGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof MembershipApiv1GroupsGroupIdRolesRoleSetIdUsersGet
     */
    cursor?: string
    /**
     * Sorted by user group join date
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof MembershipApiv1GroupsGroupIdRolesRoleSetIdUsersGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface MembershipApiV1GroupsGroupIdUsersGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdUsersGet
     */
    groupId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof MembershipApiv1GroupsGroupIdUsersGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof MembershipApiv1GroupsGroupIdUsersGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof MembershipApiv1GroupsGroupIdUsersGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface MembershipApiV1GroupsGroupIdUsersPostRequest {
    /**
     * The group Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdUsersPost
     */
    groupId: number
    /**
     * Only supplied when captcha has been solved.
     * @type RobloxGroupsApiJoinGroupRequest
     * @memberof MembershipApiv1GroupsGroupIdUsersPost
     */
    joinGroupModel: RobloxGroupsApiJoinGroupRequest
}

export interface MembershipApiV1GroupsGroupIdUsersUserIdDeleteRequest {
    /**
     * The group Id.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdUsersUserIdDelete
     */
    groupId: number
    /**
     * The Id of the user being removed.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdUsersUserIdDelete
     */
    userId: number
}

export interface MembershipApiV1GroupsGroupIdUsersUserIdPatchRequest {
    /**
     * The id of the group the user is in.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdUsersUserIdPatch
     */
    groupId: number
    /**
     * The id of the user being updated.
     * @type number
     * @memberof MembershipApiv1GroupsGroupIdUsersUserIdPatch
     */
    userId: number
    /**
     * The Roblox.Groups.Api.UpdateUserRoleRequest.
     * @type RobloxGroupsApiUpdateUserRoleRequest
     * @memberof MembershipApiv1GroupsGroupIdUsersUserIdPatch
     */
    request: RobloxGroupsApiUpdateUserRoleRequest
}

export interface MembershipApiV1UserGroupsPendingGetRequest {
}

export interface MembershipApiV1UsersUserIdFriendsGroupsRolesGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof MembershipApiv1UsersUserIdFriendsGroupsRolesGet
     */
    userId: number
}

export interface MembershipApiV1UsersUserIdGroupsRolesGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof MembershipApiv1UsersUserIdGroupsRolesGet
     */
    userId: number
    /**
     * 
     * @type boolean
     * @memberof MembershipApiv1UsersUserIdGroupsRolesGet
     */
    includeLocked: boolean
    /**
     * 
     * @type boolean
     * @memberof MembershipApiv1UsersUserIdGroupsRolesGet
     */
    includeNotificationPreferences: boolean
}

export class ObjectMembershipApi {
    private api: ObservableMembershipApi

    public constructor(configuration: Configuration, requestFactory?: MembershipApiRequestFactory, responseProcessor?: MembershipApiResponseProcessor) {
        this.api = new ObservableMembershipApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Changes the group owner to another user.
     * @param param the request object
     */
    public v1GroupsGroupIdChangeOwnerPostWithHttpInfo(param: MembershipApiV1GroupsGroupIdChangeOwnerPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdChangeOwnerPostWithHttpInfo(param.groupId, param.changeOwnerRequest,  options).toPromise();
    }

    /**
     * Changes the group owner to another user.
     * @param param the request object
     */
    public v1GroupsGroupIdChangeOwnerPost(param: MembershipApiV1GroupsGroupIdChangeOwnerPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdChangeOwnerPost(param.groupId, param.changeOwnerRequest,  options).toPromise();
    }

    /**
     * Claims ownership of the group as the authenticated user
     * @param param the request object
     */
    public v1GroupsGroupIdClaimOwnershipPostWithHttpInfo(param: MembershipApiV1GroupsGroupIdClaimOwnershipPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdClaimOwnershipPostWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Claims ownership of the group as the authenticated user
     * @param param the request object
     */
    public v1GroupsGroupIdClaimOwnershipPost(param: MembershipApiV1GroupsGroupIdClaimOwnershipPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdClaimOwnershipPost(param.groupId,  options).toPromise();
    }

    /**
     * Batch declines group join requests
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsDeleteWithHttpInfo(param: MembershipApiV1GroupsGroupIdJoinRequestsDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdJoinRequestsDeleteWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Batch declines group join requests
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsDelete(param: MembershipApiV1GroupsGroupIdJoinRequestsDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdJoinRequestsDelete(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Gets a page of Group Join Requests for a group.
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsGetWithHttpInfo(param: MembershipApiV1GroupsGroupIdJoinRequestsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupJoinRequestResponse>> {
        return this.api.v1GroupsGroupIdJoinRequestsGetWithHttpInfo(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a page of Group Join Requests for a group.
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsGet(param: MembershipApiV1GroupsGroupIdJoinRequestsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupJoinRequestResponse> {
        return this.api.v1GroupsGroupIdJoinRequestsGet(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Batch accepts group join requests
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsPostWithHttpInfo(param: MembershipApiV1GroupsGroupIdJoinRequestsPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdJoinRequestsPostWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Batch accepts group join requests
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsPost(param: MembershipApiV1GroupsGroupIdJoinRequestsPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdJoinRequestsPost(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Declines/cancels a group join request.
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdDeleteWithHttpInfo(param: MembershipApiV1GroupsGroupIdJoinRequestsUsersUserIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdJoinRequestsUsersUserIdDeleteWithHttpInfo(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Declines/cancels a group join request.
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdDelete(param: MembershipApiV1GroupsGroupIdJoinRequestsUsersUserIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdJoinRequestsUsersUserIdDelete(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Gets a group join request by userId.
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdGetWithHttpInfo(param: MembershipApiV1GroupsGroupIdJoinRequestsUsersUserIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupJoinRequestResponse>> {
        return this.api.v1GroupsGroupIdJoinRequestsUsersUserIdGetWithHttpInfo(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Gets a group join request by userId.
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdGet(param: MembershipApiV1GroupsGroupIdJoinRequestsUsersUserIdGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupJoinRequestResponse> {
        return this.api.v1GroupsGroupIdJoinRequestsUsersUserIdGet(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Accepts a group join request.
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdPostWithHttpInfo(param: MembershipApiV1GroupsGroupIdJoinRequestsUsersUserIdPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdJoinRequestsUsersUserIdPostWithHttpInfo(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Accepts a group join request.
     * @param param the request object
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdPost(param: MembershipApiV1GroupsGroupIdJoinRequestsUsersUserIdPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdJoinRequestsUsersUserIdPost(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Gets group membership information in the context of the authenticated user
     * @param param the request object
     */
    public v1GroupsGroupIdMembershipGetWithHttpInfo(param: MembershipApiV1GroupsGroupIdMembershipGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupMembershipMetadataResponse>> {
        return this.api.v1GroupsGroupIdMembershipGetWithHttpInfo(param.groupId, param.includeNotificationPreferences,  options).toPromise();
    }

    /**
     * Gets group membership information in the context of the authenticated user
     * @param param the request object
     */
    public v1GroupsGroupIdMembershipGet(param: MembershipApiV1GroupsGroupIdMembershipGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupMembershipMetadataResponse> {
        return this.api.v1GroupsGroupIdMembershipGet(param.groupId, param.includeNotificationPreferences,  options).toPromise();
    }

    /**
     * Gets a list of the rolesets in a group.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesGetWithHttpInfo(param: MembershipApiV1GroupsGroupIdRolesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupAllRolesResponse>> {
        return this.api.v1GroupsGroupIdRolesGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Gets a list of the rolesets in a group.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesGet(param: MembershipApiV1GroupsGroupIdRolesGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupAllRolesResponse> {
        return this.api.v1GroupsGroupIdRolesGet(param.groupId,  options).toPromise();
    }

    /**
     * Gets a list of users in a group for a specific roleset.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesRoleSetIdUsersGetWithHttpInfo(param: MembershipApiV1GroupsGroupIdRolesRoleSetIdUsersGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseUserModel>> {
        return this.api.v1GroupsGroupIdRolesRoleSetIdUsersGetWithHttpInfo(param.groupId, param.roleSetId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a list of users in a group for a specific roleset.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesRoleSetIdUsersGet(param: MembershipApiV1GroupsGroupIdRolesRoleSetIdUsersGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseUserModel> {
        return this.api.v1GroupsGroupIdRolesRoleSetIdUsersGet(param.groupId, param.roleSetId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a list of users in a group.
     * @param param the request object
     */
    public v1GroupsGroupIdUsersGetWithHttpInfo(param: MembershipApiV1GroupsGroupIdUsersGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiUserGroupRoleResponse>> {
        return this.api.v1GroupsGroupIdUsersGetWithHttpInfo(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a list of users in a group.
     * @param param the request object
     */
    public v1GroupsGroupIdUsersGet(param: MembershipApiV1GroupsGroupIdUsersGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiUserGroupRoleResponse> {
        return this.api.v1GroupsGroupIdUsersGet(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Joins a group
     * @param param the request object
     */
    public v1GroupsGroupIdUsersPostWithHttpInfo(param: MembershipApiV1GroupsGroupIdUsersPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdUsersPostWithHttpInfo(param.groupId, param.joinGroupModel,  options).toPromise();
    }

    /**
     * Joins a group
     * @param param the request object
     */
    public v1GroupsGroupIdUsersPost(param: MembershipApiV1GroupsGroupIdUsersPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdUsersPost(param.groupId, param.joinGroupModel,  options).toPromise();
    }

    /**
     * Removes a user from a group
     * @param param the request object
     */
    public v1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(param: MembershipApiV1GroupsGroupIdUsersUserIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Removes a user from a group
     * @param param the request object
     */
    public v1GroupsGroupIdUsersUserIdDelete(param: MembershipApiV1GroupsGroupIdUsersUserIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdUsersUserIdDelete(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Updates a users role in a group.
     * @param param the request object
     */
    public v1GroupsGroupIdUsersUserIdPatchWithHttpInfo(param: MembershipApiV1GroupsGroupIdUsersUserIdPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdUsersUserIdPatchWithHttpInfo(param.groupId, param.userId, param.request,  options).toPromise();
    }

    /**
     * Updates a users role in a group.
     * @param param the request object
     */
    public v1GroupsGroupIdUsersUserIdPatch(param: MembershipApiV1GroupsGroupIdUsersUserIdPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdUsersUserIdPatch(param.groupId, param.userId, param.request,  options).toPromise();
    }

    /**
     * Gets groups that the authenticated user has requested to join
     * @param param the request object
     */
    public v1UserGroupsPendingGetWithHttpInfo(param: MembershipApiV1UserGroupsPendingGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupDetailResponse>> {
        return this.api.v1UserGroupsPendingGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets groups that the authenticated user has requested to join
     * @param param the request object
     */
    public v1UserGroupsPendingGet(param: MembershipApiV1UserGroupsPendingGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupDetailResponse> {
        return this.api.v1UserGroupsPendingGet( options).toPromise();
    }

    /**
     * Gets a list of all groups the specified users\' friends are in.
     * @param param the request object
     */
    public v1UsersUserIdFriendsGroupsRolesGetWithHttpInfo(param: MembershipApiV1UsersUserIdFriendsGroupsRolesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiUserGroupMembershipResponse>> {
        return this.api.v1UsersUserIdFriendsGroupsRolesGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Gets a list of all groups the specified users\' friends are in.
     * @param param the request object
     */
    public v1UsersUserIdFriendsGroupsRolesGet(param: MembershipApiV1UsersUserIdFriendsGroupsRolesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiUserGroupMembershipResponse> {
        return this.api.v1UsersUserIdFriendsGroupsRolesGet(param.userId,  options).toPromise();
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param param the request object
     */
    public v1UsersUserIdGroupsRolesGetWithHttpInfo(param: MembershipApiV1UsersUserIdGroupsRolesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipDetailResponse>> {
        return this.api.v1UsersUserIdGroupsRolesGetWithHttpInfo(param.userId, param.includeLocked, param.includeNotificationPreferences,  options).toPromise();
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param param the request object
     */
    public v1UsersUserIdGroupsRolesGet(param: MembershipApiV1UsersUserIdGroupsRolesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipDetailResponse> {
        return this.api.v1UsersUserIdGroupsRolesGet(param.userId, param.includeLocked, param.includeNotificationPreferences,  options).toPromise();
    }

}

import { ObservablePermissionsApi } from "./ObservableAPI";
import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";

export interface PermissionsApiV1GroupsGroupIdRolesGuestPermissionsGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof PermissionsApiv1GroupsGroupIdRolesGuestPermissionsGet
     */
    groupId: number
}

export interface PermissionsApiV1GroupsGroupIdRolesPermissionsGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof PermissionsApiv1GroupsGroupIdRolesPermissionsGet
     */
    groupId: number
}

export interface PermissionsApiV1GroupsGroupIdRolesRoleSetIdPermissionsGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof PermissionsApiv1GroupsGroupIdRolesRoleSetIdPermissionsGet
     */
    groupId: number
    /**
     * The group\&#39;s role set id.
     * @type number
     * @memberof PermissionsApiv1GroupsGroupIdRolesRoleSetIdPermissionsGet
     */
    roleSetId: number
}

export interface PermissionsApiV1GroupsGroupIdRolesRoleSetIdPermissionsPatchRequest {
    /**
     * The group\&#39;s id.
     * @type number
     * @memberof PermissionsApiv1GroupsGroupIdRolesRoleSetIdPermissionsPatch
     */
    groupId: number
    /**
     * The roleset\&#39;s id.
     * @type number
     * @memberof PermissionsApiv1GroupsGroupIdRolesRoleSetIdPermissionsPatch
     */
    roleSetId: number
    /**
     * The request.
     * @type RobloxGroupsApiUpdatePermissionsRequest
     * @memberof PermissionsApiv1GroupsGroupIdRolesRoleSetIdPermissionsPatch
     */
    updatePermissionsRequest: RobloxGroupsApiUpdatePermissionsRequest
}

export class ObjectPermissionsApi {
    private api: ObservablePermissionsApi

    public constructor(configuration: Configuration, requestFactory?: PermissionsApiRequestFactory, responseProcessor?: PermissionsApiResponseProcessor) {
        this.api = new ObservablePermissionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the permissions for a group\'s guest roleset. These can be viewed by all (members and guests) users.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesGuestPermissionsGetWithHttpInfo(param: PermissionsApiV1GroupsGroupIdRolesGuestPermissionsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupPermissionsResponse>> {
        return this.api.v1GroupsGroupIdRolesGuestPermissionsGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Gets the permissions for a group\'s guest roleset. These can be viewed by all (members and guests) users.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesGuestPermissionsGet(param: PermissionsApiV1GroupsGroupIdRolesGuestPermissionsGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupPermissionsResponse> {
        return this.api.v1GroupsGroupIdRolesGuestPermissionsGet(param.groupId,  options).toPromise();
    }

    /**
     * Gets all permissions for each role
     * @param param the request object
     */
    public v1GroupsGroupIdRolesPermissionsGetWithHttpInfo(param: PermissionsApiV1GroupsGroupIdRolesPermissionsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse>> {
        return this.api.v1GroupsGroupIdRolesPermissionsGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Gets all permissions for each role
     * @param param the request object
     */
    public v1GroupsGroupIdRolesPermissionsGet(param: PermissionsApiV1GroupsGroupIdRolesPermissionsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse> {
        return this.api.v1GroupsGroupIdRolesPermissionsGet(param.groupId,  options).toPromise();
    }

    /**
     * Gets the permissions for a group\'s roleset. The authorized user must either be the group owner or the roleset being requested, except for guest roles, which can be viewed by all (members and guests).
     * @param param the request object
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsGetWithHttpInfo(param: PermissionsApiV1GroupsGroupIdRolesRoleSetIdPermissionsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupPermissionsResponse>> {
        return this.api.v1GroupsGroupIdRolesRoleSetIdPermissionsGetWithHttpInfo(param.groupId, param.roleSetId,  options).toPromise();
    }

    /**
     * Gets the permissions for a group\'s roleset. The authorized user must either be the group owner or the roleset being requested, except for guest roles, which can be viewed by all (members and guests).
     * @param param the request object
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsGet(param: PermissionsApiV1GroupsGroupIdRolesRoleSetIdPermissionsGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupPermissionsResponse> {
        return this.api.v1GroupsGroupIdRolesRoleSetIdPermissionsGet(param.groupId, param.roleSetId,  options).toPromise();
    }

    /**
     * Updates the permissions for a group\'s roleset. The authorized user must be the group owner.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsPatchWithHttpInfo(param: PermissionsApiV1GroupsGroupIdRolesRoleSetIdPermissionsPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdRolesRoleSetIdPermissionsPatchWithHttpInfo(param.groupId, param.roleSetId, param.updatePermissionsRequest,  options).toPromise();
    }

    /**
     * Updates the permissions for a group\'s roleset. The authorized user must be the group owner.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsPatch(param: PermissionsApiV1GroupsGroupIdRolesRoleSetIdPermissionsPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdRolesRoleSetIdPermissionsPatch(param.groupId, param.roleSetId, param.updatePermissionsRequest,  options).toPromise();
    }

}

import { ObservablePrimaryGroupApi } from "./ObservableAPI";
import { PrimaryGroupApiRequestFactory, PrimaryGroupApiResponseProcessor} from "../apis/PrimaryGroupApi";

export interface PrimaryGroupApiV1UserGroupsPrimaryDeleteRequest {
}

export interface PrimaryGroupApiV1UserGroupsPrimaryPostRequest {
    /**
     * The request body containing the group id.
     * @type RobloxGroupsApiPrimaryGroupRequest
     * @memberof PrimaryGroupApiv1UserGroupsPrimaryPost
     */
    request: RobloxGroupsApiPrimaryGroupRequest
}

export interface PrimaryGroupApiV1UsersUserIdGroupsPrimaryRoleGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof PrimaryGroupApiv1UsersUserIdGroupsPrimaryRoleGet
     */
    userId: number
}

export class ObjectPrimaryGroupApi {
    private api: ObservablePrimaryGroupApi

    public constructor(configuration: Configuration, requestFactory?: PrimaryGroupApiRequestFactory, responseProcessor?: PrimaryGroupApiResponseProcessor) {
        this.api = new ObservablePrimaryGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the authenticated user\'s primary group
     * @param param the request object
     */
    public v1UserGroupsPrimaryDeleteWithHttpInfo(param: PrimaryGroupApiV1UserGroupsPrimaryDeleteRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UserGroupsPrimaryDeleteWithHttpInfo( options).toPromise();
    }

    /**
     * Removes the authenticated user\'s primary group
     * @param param the request object
     */
    public v1UserGroupsPrimaryDelete(param: PrimaryGroupApiV1UserGroupsPrimaryDeleteRequest = {}, options?: Configuration): Promise<any> {
        return this.api.v1UserGroupsPrimaryDelete( options).toPromise();
    }

    /**
     * Sets the authenticated user\'s primary group
     * @param param the request object
     */
    public v1UserGroupsPrimaryPostWithHttpInfo(param: PrimaryGroupApiV1UserGroupsPrimaryPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UserGroupsPrimaryPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Sets the authenticated user\'s primary group
     * @param param the request object
     */
    public v1UserGroupsPrimaryPost(param: PrimaryGroupApiV1UserGroupsPrimaryPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UserGroupsPrimaryPost(param.request,  options).toPromise();
    }

    /**
     * Gets a user\'s primary group.
     * @param param the request object
     */
    public v1UsersUserIdGroupsPrimaryRoleGetWithHttpInfo(param: PrimaryGroupApiV1UsersUserIdGroupsPrimaryRoleGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupMembershipDetailResponse>> {
        return this.api.v1UsersUserIdGroupsPrimaryRoleGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Gets a user\'s primary group.
     * @param param the request object
     */
    public v1UsersUserIdGroupsPrimaryRoleGet(param: PrimaryGroupApiV1UsersUserIdGroupsPrimaryRoleGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupMembershipDetailResponse> {
        return this.api.v1UsersUserIdGroupsPrimaryRoleGet(param.userId,  options).toPromise();
    }

}

import { ObservableRelationshipsApi } from "./ObservableAPI";
import { RelationshipsApiRequestFactory, RelationshipsApiResponseProcessor} from "../apis/RelationshipsApi";

export interface RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeGetRequest {
    /**
     * The group Id.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeGet
     */
    groupId: number
    /**
     * The group relationship type, enemies or allies.
     * @type string
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeGet
     */
    groupRelationshipType: string
    /**
     * The start index of the page request
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeGet
     */
    startRowIndex: number
    /**
     * The maximum number of rows for the page request, should be at least 1.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeGet
     */
    maxRows: number
}

export interface RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteRequest {
    /**
     * The group id.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete
     */
    groupId: number
    /**
     * The group relationship type, enemies or allies.
     * @type string
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete
     */
    groupRelationshipType: string
    /**
     * The id of the group you want to delete the relationship with.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete
     */
    relatedGroupId: number
}

export interface RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostRequest {
    /**
     * The group id.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost
     */
    groupId: number
    /**
     * The group relationship type, enemies or allies.
     * @type string
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost
     */
    groupRelationshipType: string
    /**
     * The id of the group you want to create a relationship with.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost
     */
    relatedGroupId: number
}

export interface RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteRequest {
    /**
     * The group id.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete
     */
    groupId: number
    /**
     * The type of group relationship being made
     * @type string
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete
     */
    groupRelationshipType: string
    /**
     * The Roblox.Groups.Api.RelationshipsRequest.
     * @type RobloxGroupsApiRelationshipsRequest
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete
     */
    request: RobloxGroupsApiRelationshipsRequest
}

export interface RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetRequest {
    /**
     * The group Id.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet
     */
    groupId: number
    /**
     * The group relationship type of the request, only allies are supported.
     * @type string
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet
     */
    groupRelationshipType: string
    /**
     * The start index of the page request
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet
     */
    startRowIndex: number
    /**
     * The maximum number of rows for the page request, should be at least 1.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet
     */
    maxRows: number
}

export interface RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostRequest {
    /**
     * The group id.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost
     */
    groupId: number
    /**
     * The type of group relationship being made
     * @type string
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost
     */
    groupRelationshipType: string
    /**
     * The Roblox.Groups.Api.RelationshipsRequest.
     * @type RobloxGroupsApiRelationshipsRequest
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost
     */
    request: RobloxGroupsApiRelationshipsRequest
}

export interface RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteRequest {
    /**
     * The group id.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete
     */
    groupId: number
    /**
     * The group relationship type, enemies or allies.
     * @type string
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete
     */
    groupRelationshipType: string
    /**
     * The id of the group you want to accept the relationship request with.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete
     */
    relatedGroupId: number
}

export interface RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostRequest {
    /**
     * The group id.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost
     */
    groupId: number
    /**
     * The group relationship type, enemies or allies, only allies are supported.
     * @type string
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost
     */
    groupRelationshipType: string
    /**
     * The id of the group you want to accept the relationship request with.
     * @type number
     * @memberof RelationshipsApiv1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost
     */
    relatedGroupId: number
}

export class ObjectRelationshipsApi {
    private api: ObservableRelationshipsApi

    public constructor(configuration: Configuration, requestFactory?: RelationshipsApiRequestFactory, responseProcessor?: RelationshipsApiResponseProcessor) {
        this.api = new ObservableRelationshipsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a group\'s relationships
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeGetWithHttpInfo(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupRelationshipsResponse>> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeGetWithHttpInfo(param.groupId, param.groupRelationshipType, param.startRowIndex, param.maxRows,  options).toPromise();
    }

    /**
     * Gets a group\'s relationships
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupRelationshipsResponse> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet(param.groupId, param.groupRelationshipType, param.startRowIndex, param.maxRows,  options).toPromise();
    }

    /**
     * Deletes a group relationship.
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteWithHttpInfo(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteWithHttpInfo(param.groupId, param.groupRelationshipType, param.relatedGroupId,  options).toPromise();
    }

    /**
     * Deletes a group relationship.
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete(param.groupId, param.groupRelationshipType, param.relatedGroupId,  options).toPromise();
    }

    /**
     * Create a group relationship.
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostWithHttpInfo(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostWithHttpInfo(param.groupId, param.groupRelationshipType, param.relatedGroupId,  options).toPromise();
    }

    /**
     * Create a group relationship.
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost(param.groupId, param.groupRelationshipType, param.relatedGroupId,  options).toPromise();
    }

    /**
     * Batch declines group affiliate requests
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteWithHttpInfo(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteWithHttpInfo(param.groupId, param.groupRelationshipType, param.request,  options).toPromise();
    }

    /**
     * Batch declines group affiliate requests
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete(param.groupId, param.groupRelationshipType, param.request,  options).toPromise();
    }

    /**
     * Gets a group\'s relationship requests
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetWithHttpInfo(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupRelationshipsResponse>> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetWithHttpInfo(param.groupId, param.groupRelationshipType, param.startRowIndex, param.maxRows,  options).toPromise();
    }

    /**
     * Gets a group\'s relationship requests
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupRelationshipsResponse> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet(param.groupId, param.groupRelationshipType, param.startRowIndex, param.maxRows,  options).toPromise();
    }

    /**
     * Batch accepts group affiliate requests
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostWithHttpInfo(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostWithHttpInfo(param.groupId, param.groupRelationshipType, param.request,  options).toPromise();
    }

    /**
     * Batch accepts group affiliate requests
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost(param.groupId, param.groupRelationshipType, param.request,  options).toPromise();
    }

    /**
     * Declines a group relationship request.
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteWithHttpInfo(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteWithHttpInfo(param.groupId, param.groupRelationshipType, param.relatedGroupId,  options).toPromise();
    }

    /**
     * Declines a group relationship request.
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete(param.groupId, param.groupRelationshipType, param.relatedGroupId,  options).toPromise();
    }

    /**
     * Accepts a group relationship request.
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostWithHttpInfo(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostWithHttpInfo(param.groupId, param.groupRelationshipType, param.relatedGroupId,  options).toPromise();
    }

    /**
     * Accepts a group relationship request.
     * @param param the request object
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost(param: RelationshipsApiV1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost(param.groupId, param.groupRelationshipType, param.relatedGroupId,  options).toPromise();
    }

}

import { ObservableRevenueApi } from "./ObservableAPI";
import { RevenueApiRequestFactory, RevenueApiResponseProcessor} from "../apis/RevenueApi";

export interface RevenueApiV1GroupsGroupIdPayoutRestrictionGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof RevenueApiv1GroupsGroupIdPayoutRestrictionGet
     */
    groupId: number
}

export interface RevenueApiV1GroupsGroupIdPayoutsGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof RevenueApiv1GroupsGroupIdPayoutsGet
     */
    groupId: number
}

export interface RevenueApiV1GroupsGroupIdPayoutsPostRequest {
    /**
     * The group Id.
     * @type number
     * @memberof RevenueApiv1GroupsGroupIdPayoutsPost
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.PayoutRequest.
     * @type RobloxGroupsApiPayoutRequest
     * @memberof RevenueApiv1GroupsGroupIdPayoutsPost
     */
    request: RobloxGroupsApiPayoutRequest
}

export interface RevenueApiV1GroupsGroupIdPayoutsRecurringPostRequest {
    /**
     * The group Id.
     * @type number
     * @memberof RevenueApiv1GroupsGroupIdPayoutsRecurringPost
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.PayoutRequest.
     * @type RobloxGroupsApiPayoutRequest
     * @memberof RevenueApiv1GroupsGroupIdPayoutsRecurringPost
     */
    request: RobloxGroupsApiPayoutRequest
}

export class ObjectRevenueApi {
    private api: ObservableRevenueApi

    public constructor(configuration: Configuration, requestFactory?: RevenueApiRequestFactory, responseProcessor?: RevenueApiResponseProcessor) {
        this.api = new ObservableRevenueApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a value indicating whether the group can use payout feature
     * @param param the request object
     */
    public v1GroupsGroupIdPayoutRestrictionGetWithHttpInfo(param: RevenueApiV1GroupsGroupIdPayoutRestrictionGetRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupPayoutRestrictionResponse>> {
        return this.api.v1GroupsGroupIdPayoutRestrictionGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Gets a value indicating whether the group can use payout feature
     * @param param the request object
     */
    public v1GroupsGroupIdPayoutRestrictionGet(param: RevenueApiV1GroupsGroupIdPayoutRestrictionGetRequest, options?: Configuration): Promise<RobloxGroupsApiGroupPayoutRestrictionResponse> {
        return this.api.v1GroupsGroupIdPayoutRestrictionGet(param.groupId,  options).toPromise();
    }

    /**
     * Gets a list of the group payout percentages
     * @param param the request object
     */
    public v1GroupsGroupIdPayoutsGetWithHttpInfo(param: RevenueApiV1GroupsGroupIdPayoutsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPayoutResponse>> {
        return this.api.v1GroupsGroupIdPayoutsGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Gets a list of the group payout percentages
     * @param param the request object
     */
    public v1GroupsGroupIdPayoutsGet(param: RevenueApiV1GroupsGroupIdPayoutsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPayoutResponse> {
        return this.api.v1GroupsGroupIdPayoutsGet(param.groupId,  options).toPromise();
    }

    /**
     * Pays out a user in Robux.
     * @param param the request object
     */
    public v1GroupsGroupIdPayoutsPostWithHttpInfo(param: RevenueApiV1GroupsGroupIdPayoutsPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdPayoutsPostWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Pays out a user in Robux.
     * @param param the request object
     */
    public v1GroupsGroupIdPayoutsPost(param: RevenueApiV1GroupsGroupIdPayoutsPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdPayoutsPost(param.groupId, param.request,  options).toPromise();
    }

    /**
     * This endpoint will remove any recipients not sent in the request.  If a recipient in the request is not a valid member in the group they will not be added to the recurring payouts.
     * Updates recurring payouts.
     * @param param the request object
     */
    public v1GroupsGroupIdPayoutsRecurringPostWithHttpInfo(param: RevenueApiV1GroupsGroupIdPayoutsRecurringPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdPayoutsRecurringPostWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * This endpoint will remove any recipients not sent in the request.  If a recipient in the request is not a valid member in the group they will not be added to the recurring payouts.
     * Updates recurring payouts.
     * @param param the request object
     */
    public v1GroupsGroupIdPayoutsRecurringPost(param: RevenueApiV1GroupsGroupIdPayoutsRecurringPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdPayoutsRecurringPost(param.groupId, param.request,  options).toPromise();
    }

}

import { ObservableRoleSetsApi } from "./ObservableAPI";
import { RoleSetsApiRequestFactory, RoleSetsApiResponseProcessor} from "../apis/RoleSetsApi";

export interface RoleSetsApiV1GroupsGroupIdRolesetsCreatePostRequest {
    /**
     * The group Id.
     * @type number
     * @memberof RoleSetsApiv1GroupsGroupIdRolesetsCreatePost
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.Models.Request.CreateRoleSetRequest.
     * @type RobloxGroupsApiModelsRequestCreateRoleSetRequest
     * @memberof RoleSetsApiv1GroupsGroupIdRolesetsCreatePost
     */
    request: RobloxGroupsApiModelsRequestCreateRoleSetRequest
}

export interface RoleSetsApiV1GroupsGroupIdRolesetsRolesetIdDeleteRequest {
    /**
     * The group Id.
     * @type number
     * @memberof RoleSetsApiv1GroupsGroupIdRolesetsRolesetIdDelete
     */
    groupId: number
    /**
     * The roleset Id.
     * @type number
     * @memberof RoleSetsApiv1GroupsGroupIdRolesetsRolesetIdDelete
     */
    rolesetId: number
}

export interface RoleSetsApiV1GroupsGroupIdRolesetsRolesetIdPatchRequest {
    /**
     * The group Id.
     * @type number
     * @memberof RoleSetsApiv1GroupsGroupIdRolesetsRolesetIdPatch
     */
    groupId: number
    /**
     * The roleset Id.
     * @type number
     * @memberof RoleSetsApiv1GroupsGroupIdRolesetsRolesetIdPatch
     */
    rolesetId: number
    /**
     * The Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest.
     * @type RobloxGroupsApiModelsRequestUpdateRoleSetRequest
     * @memberof RoleSetsApiv1GroupsGroupIdRolesetsRolesetIdPatch
     */
    request: RobloxGroupsApiModelsRequestUpdateRoleSetRequest
}

export class ObjectRoleSetsApi {
    private api: ObservableRoleSetsApi

    public constructor(configuration: Configuration, requestFactory?: RoleSetsApiRequestFactory, responseProcessor?: RoleSetsApiResponseProcessor) {
        this.api = new ObservableRoleSetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates new group roleset.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesetsCreatePostWithHttpInfo(param: RoleSetsApiV1GroupsGroupIdRolesetsCreatePostRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupRoleResponse>> {
        return this.api.v1GroupsGroupIdRolesetsCreatePostWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Creates new group roleset.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesetsCreatePost(param: RoleSetsApiV1GroupsGroupIdRolesetsCreatePostRequest, options?: Configuration): Promise<RobloxGroupsApiGroupRoleResponse> {
        return this.api.v1GroupsGroupIdRolesetsCreatePost(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Deletes existing group roleset.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesetsRolesetIdDeleteWithHttpInfo(param: RoleSetsApiV1GroupsGroupIdRolesetsRolesetIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdRolesetsRolesetIdDeleteWithHttpInfo(param.groupId, param.rolesetId,  options).toPromise();
    }

    /**
     * Deletes existing group roleset.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesetsRolesetIdDelete(param: RoleSetsApiV1GroupsGroupIdRolesetsRolesetIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdRolesetsRolesetIdDelete(param.groupId, param.rolesetId,  options).toPromise();
    }

    /**
     * Updates existing group roleset.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesetsRolesetIdPatchWithHttpInfo(param: RoleSetsApiV1GroupsGroupIdRolesetsRolesetIdPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupRoleResponse>> {
        return this.api.v1GroupsGroupIdRolesetsRolesetIdPatchWithHttpInfo(param.groupId, param.rolesetId, param.request,  options).toPromise();
    }

    /**
     * Updates existing group roleset.
     * @param param the request object
     */
    public v1GroupsGroupIdRolesetsRolesetIdPatch(param: RoleSetsApiV1GroupsGroupIdRolesetsRolesetIdPatchRequest, options?: Configuration): Promise<RobloxGroupsApiGroupRoleResponse> {
        return this.api.v1GroupsGroupIdRolesetsRolesetIdPatch(param.groupId, param.rolesetId, param.request,  options).toPromise();
    }

}

import { ObservableRolesApi } from "./ObservableAPI";
import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";

export interface RolesApiV1RolesGetRequest {
    /**
     * A list of role ids
     * @type Array&lt;number&gt;
     * @memberof RolesApiv1RolesGet
     */
    ids: Array<number>
}

export class ObjectRolesApi {
    private api: ObservableRolesApi

    public constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the Roles by their ids.
     * @param param the request object
     */
    public v1RolesGetWithHttpInfo(param: RolesApiV1RolesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupRoleDetailResponse>> {
        return this.api.v1RolesGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * Gets the Roles by their ids.
     * @param param the request object
     */
    public v1RolesGet(param: RolesApiV1RolesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupRoleDetailResponse> {
        return this.api.v1RolesGet(param.ids,  options).toPromise();
    }

}

import { ObservableSocialLinksApi } from "./ObservableAPI";
import { SocialLinksApiRequestFactory, SocialLinksApiResponseProcessor} from "../apis/SocialLinksApi";

export interface SocialLinksApiV1GroupsGroupIdSocialLinksGetRequest {
    /**
     * The Id of the game
     * @type number
     * @memberof SocialLinksApiv1GroupsGroupIdSocialLinksGet
     */
    groupId: number
}

export interface SocialLinksApiV1GroupsGroupIdSocialLinksPostRequest {
    /**
     * The id of the game
     * @type number
     * @memberof SocialLinksApiv1GroupsGroupIdSocialLinksPost
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.SocialLinkRequest
     * @type RobloxGroupsApiSocialLinkRequest
     * @memberof SocialLinksApiv1GroupsGroupIdSocialLinksPost
     */
    request: RobloxGroupsApiSocialLinkRequest
}

export interface SocialLinksApiV1GroupsGroupIdSocialLinksSocialLinkIdDeleteRequest {
    /**
     * The id of the game you are editting, required for permissions checking
     * @type number
     * @memberof SocialLinksApiv1GroupsGroupIdSocialLinksSocialLinkIdDelete
     */
    groupId: number
    /**
     * The id of the social link
     * @type number
     * @memberof SocialLinksApiv1GroupsGroupIdSocialLinksSocialLinkIdDelete
     */
    socialLinkId: number
}

export interface SocialLinksApiV1GroupsGroupIdSocialLinksSocialLinkIdPatchRequest {
    /**
     * The id of the universe
     * @type number
     * @memberof SocialLinksApiv1GroupsGroupIdSocialLinksSocialLinkIdPatch
     */
    groupId: number
    /**
     * The id of the social link being updated
     * @type number
     * @memberof SocialLinksApiv1GroupsGroupIdSocialLinksSocialLinkIdPatch
     */
    socialLinkId: number
    /**
     * The Roblox.Groups.Api.SocialLinkRequest.
     * @type RobloxGroupsApiSocialLinkRequest
     * @memberof SocialLinksApiv1GroupsGroupIdSocialLinksSocialLinkIdPatch
     */
    request: RobloxGroupsApiSocialLinkRequest
}

export class ObjectSocialLinksApi {
    private api: ObservableSocialLinksApi

    public constructor(configuration: Configuration, requestFactory?: SocialLinksApiRequestFactory, responseProcessor?: SocialLinksApiResponseProcessor) {
        this.api = new ObservableSocialLinksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get social link data associated with a group
     * @param param the request object
     */
    public v1GroupsGroupIdSocialLinksGetWithHttpInfo(param: SocialLinksApiV1GroupsGroupIdSocialLinksGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse>> {
        return this.api.v1GroupsGroupIdSocialLinksGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Get social link data associated with a group
     * @param param the request object
     */
    public v1GroupsGroupIdSocialLinksGet(param: SocialLinksApiV1GroupsGroupIdSocialLinksGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse> {
        return this.api.v1GroupsGroupIdSocialLinksGet(param.groupId,  options).toPromise();
    }

    /**
     * Posts a social links
     * @param param the request object
     */
    public v1GroupsGroupIdSocialLinksPostWithHttpInfo(param: SocialLinksApiV1GroupsGroupIdSocialLinksPostRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiSocialLinkResponse>> {
        return this.api.v1GroupsGroupIdSocialLinksPostWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Posts a social links
     * @param param the request object
     */
    public v1GroupsGroupIdSocialLinksPost(param: SocialLinksApiV1GroupsGroupIdSocialLinksPostRequest, options?: Configuration): Promise<RobloxGroupsApiSocialLinkResponse> {
        return this.api.v1GroupsGroupIdSocialLinksPost(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Deletes a social link
     * @param param the request object
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdDeleteWithHttpInfo(param: SocialLinksApiV1GroupsGroupIdSocialLinksSocialLinkIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdSocialLinksSocialLinkIdDeleteWithHttpInfo(param.groupId, param.socialLinkId,  options).toPromise();
    }

    /**
     * Deletes a social link
     * @param param the request object
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdDelete(param: SocialLinksApiV1GroupsGroupIdSocialLinksSocialLinkIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdSocialLinksSocialLinkIdDelete(param.groupId, param.socialLinkId,  options).toPromise();
    }

    /**
     * Updates a social link
     * @param param the request object
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdPatchWithHttpInfo(param: SocialLinksApiV1GroupsGroupIdSocialLinksSocialLinkIdPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdSocialLinksSocialLinkIdPatchWithHttpInfo(param.groupId, param.socialLinkId, param.request,  options).toPromise();
    }

    /**
     * Updates a social link
     * @param param the request object
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdPatch(param: SocialLinksApiV1GroupsGroupIdSocialLinksSocialLinkIdPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdSocialLinksSocialLinkIdPatch(param.groupId, param.socialLinkId, param.request,  options).toPromise();
    }

}

import { ObservableWallApi } from "./ObservableAPI";
import { WallApiRequestFactory, WallApiResponseProcessor} from "../apis/WallApi";

export interface WallApiV1GroupsGroupIdWallPostsGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof WallApiv1GroupsGroupIdWallPostsGet
     */
    groupId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof WallApiv1GroupsGroupIdWallPostsGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof WallApiv1GroupsGroupIdWallPostsGet
     */
    cursor?: string
    /**
     * Sorted by group wall post Id
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof WallApiv1GroupsGroupIdWallPostsGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface WallApiV1GroupsGroupIdWallPostsPostRequest {
    /**
     * The group id.
     * @type number
     * @memberof WallApiv1GroupsGroupIdWallPostsPost
     */
    groupId: number
    /**
     * The Roblox.Groups.Api.CreateWallPostRequest.
     * @type RobloxGroupsApiCreateWallPostRequest
     * @memberof WallApiv1GroupsGroupIdWallPostsPost
     */
    request: RobloxGroupsApiCreateWallPostRequest
}

export interface WallApiV1GroupsGroupIdWallPostsPostIdDeleteRequest {
    /**
     * The group id.
     * @type number
     * @memberof WallApiv1GroupsGroupIdWallPostsPostIdDelete
     */
    groupId: number
    /**
     * The group wall post id.
     * @type number
     * @memberof WallApiv1GroupsGroupIdWallPostsPostIdDelete
     */
    postId: number
}

export interface WallApiV1GroupsGroupIdWallSubscribePostRequest {
    /**
     * The group id.
     * @type number
     * @memberof WallApiv1GroupsGroupIdWallSubscribePost
     */
    groupId: number
}

export interface WallApiV1GroupsGroupIdWallUsersUserIdPostsDeleteRequest {
    /**
     * The group id.
     * @type number
     * @memberof WallApiv1GroupsGroupIdWallUsersUserIdPostsDelete
     */
    groupId: number
    /**
     * The user id.
     * @type number
     * @memberof WallApiv1GroupsGroupIdWallUsersUserIdPostsDelete
     */
    userId: number
}

export class ObjectWallApi {
    private api: ObservableWallApi

    public constructor(configuration: Configuration, requestFactory?: WallApiRequestFactory, responseProcessor?: WallApiResponseProcessor) {
        this.api = new ObservableWallApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a list of group wall posts.
     * @param param the request object
     */
    public v1GroupsGroupIdWallPostsGetWithHttpInfo(param: WallApiV1GroupsGroupIdWallPostsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupWallPostModel>> {
        return this.api.v1GroupsGroupIdWallPostsGetWithHttpInfo(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a list of group wall posts.
     * @param param the request object
     */
    public v1GroupsGroupIdWallPostsGet(param: WallApiV1GroupsGroupIdWallPostsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupWallPostModel> {
        return this.api.v1GroupsGroupIdWallPostsGet(param.groupId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Creates a post on a group wall
     * @param param the request object
     */
    public v1GroupsGroupIdWallPostsPostWithHttpInfo(param: WallApiV1GroupsGroupIdWallPostsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxGroupsApiModelsResponseGroupWallPostModel>> {
        return this.api.v1GroupsGroupIdWallPostsPostWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Creates a post on a group wall
     * @param param the request object
     */
    public v1GroupsGroupIdWallPostsPost(param: WallApiV1GroupsGroupIdWallPostsPostRequest, options?: Configuration): Promise<RobloxGroupsApiModelsResponseGroupWallPostModel> {
        return this.api.v1GroupsGroupIdWallPostsPost(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Deletes a group wall post.
     * @param param the request object
     */
    public v1GroupsGroupIdWallPostsPostIdDeleteWithHttpInfo(param: WallApiV1GroupsGroupIdWallPostsPostIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdWallPostsPostIdDeleteWithHttpInfo(param.groupId, param.postId,  options).toPromise();
    }

    /**
     * Deletes a group wall post.
     * @param param the request object
     */
    public v1GroupsGroupIdWallPostsPostIdDelete(param: WallApiV1GroupsGroupIdWallPostsPostIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdWallPostsPostIdDelete(param.groupId, param.postId,  options).toPromise();
    }

    /**
     * Subscribes the authenticated user to notifications of group wall events.
     * @param param the request object
     */
    public v1GroupsGroupIdWallSubscribePostWithHttpInfo(param: WallApiV1GroupsGroupIdWallSubscribePostRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.v1GroupsGroupIdWallSubscribePostWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Subscribes the authenticated user to notifications of group wall events.
     * @param param the request object
     */
    public v1GroupsGroupIdWallSubscribePost(param: WallApiV1GroupsGroupIdWallSubscribePostRequest, options?: Configuration): Promise<void> {
        return this.api.v1GroupsGroupIdWallSubscribePost(param.groupId,  options).toPromise();
    }

    /**
     * Deletes all group wall posts made by a specific user.
     * @param param the request object
     */
    public v1GroupsGroupIdWallUsersUserIdPostsDeleteWithHttpInfo(param: WallApiV1GroupsGroupIdWallUsersUserIdPostsDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GroupsGroupIdWallUsersUserIdPostsDeleteWithHttpInfo(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Deletes all group wall posts made by a specific user.
     * @param param the request object
     */
    public v1GroupsGroupIdWallUsersUserIdPostsDelete(param: WallApiV1GroupsGroupIdWallUsersUserIdPostsDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1GroupsGroupIdWallUsersUserIdPostsDelete(param.groupId, param.userId,  options).toPromise();
    }

}
