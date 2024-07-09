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
import { ObservableFeaturedContentApi } from './ObservableAPI';

import { FeaturedContentApiRequestFactory, FeaturedContentApiResponseProcessor} from "../apis/FeaturedContentApi";
export class PromiseFeaturedContentApi {
    private api: ObservableFeaturedContentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FeaturedContentApiRequestFactory,
        responseProcessor?: FeaturedContentApiResponseProcessor
    ) {
        this.api = new ObservableFeaturedContentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes the featured event for a group
     * @param groupId The group Id.
     * @param eventId The event Id.
     */
    public v1FeaturedContentEventDeleteWithHttpInfo(groupId: number, eventId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1FeaturedContentEventDeleteWithHttpInfo(groupId, eventId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the featured event for a group
     * @param groupId The group Id.
     * @param eventId The event Id.
     */
    public v1FeaturedContentEventDelete(groupId: number, eventId: number, _options?: Configuration): Promise<void> {
        const result = this.api.v1FeaturedContentEventDelete(groupId, eventId, _options);
        return result.toPromise();
    }

    /**
     * Gets the featured event for a group
     * @param groupId The group Id.
     */
    public v1FeaturedContentEventGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsClientGroupFeaturedContentResponse>> {
        const result = this.api.v1FeaturedContentEventGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets the featured event for a group
     * @param groupId The group Id.
     */
    public v1FeaturedContentEventGet(groupId: number, _options?: Configuration): Promise<RobloxGroupsClientGroupFeaturedContentResponse> {
        const result = this.api.v1FeaturedContentEventGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Sets the featured event for a group
     * @param groupId The group Id.
     * @param eventId The event Id.
     */
    public v1FeaturedContentEventPostWithHttpInfo(groupId: number, eventId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsClientGroupFeaturedContentResponse>> {
        const result = this.api.v1FeaturedContentEventPostWithHttpInfo(groupId, eventId, _options);
        return result.toPromise();
    }

    /**
     * Sets the featured event for a group
     * @param groupId The group Id.
     * @param eventId The event Id.
     */
    public v1FeaturedContentEventPost(groupId: number, eventId: number, _options?: Configuration): Promise<RobloxGroupsClientGroupFeaturedContentResponse> {
        const result = this.api.v1FeaturedContentEventPost(groupId, eventId, _options);
        return result.toPromise();
    }


}



import { ObservableGroupSearchApi } from './ObservableAPI';

import { GroupSearchApiRequestFactory, GroupSearchApiResponseProcessor} from "../apis/GroupSearchApi";
export class PromiseGroupSearchApi {
    private api: ObservableGroupSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupSearchApiRequestFactory,
        responseProcessor?: GroupSearchApiResponseProcessor
    ) {
        this.api = new ObservableGroupSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search for groups by keyword.
     * @param keyword The keyword or phrase to use as the search parameter.
     * @param prioritizeExactMatch Whether or not to prioritize the exact match for the keyword (optional, defaults to false.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1GroupsSearchGetWithHttpInfo(keyword: string, prioritizeExactMatch?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupSearchPageResponse>> {
        const result = this.api.v1GroupsSearchGetWithHttpInfo(keyword, prioritizeExactMatch, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Search for groups by keyword.
     * @param keyword The keyword or phrase to use as the search parameter.
     * @param prioritizeExactMatch Whether or not to prioritize the exact match for the keyword (optional, defaults to false.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1GroupsSearchGet(keyword: string, prioritizeExactMatch?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RobloxGroupsApiGroupSearchPageResponse> {
        const result = this.api.v1GroupsSearchGet(keyword, prioritizeExactMatch, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Should only be used for direct lookups where a user is inputting a group name, shouldn\'t be used for search pages.
     * Looks up groups by a name. Prioritizes an exact match as the first result.
     * @param groupName The group name.
     */
    public v1GroupsSearchLookupGetWithHttpInfo(groupName: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse>> {
        const result = this.api.v1GroupsSearchLookupGetWithHttpInfo(groupName, _options);
        return result.toPromise();
    }

    /**
     * Should only be used for direct lookups where a user is inputting a group name, shouldn\'t be used for search pages.
     * Looks up groups by a name. Prioritizes an exact match as the first result.
     * @param groupName The group name.
     */
    public v1GroupsSearchLookupGet(groupName: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse> {
        const result = this.api.v1GroupsSearchLookupGet(groupName, _options);
        return result.toPromise();
    }

    /**
     * Although there is no reason for this to require an authenticated user right now, in the future,  we will use coco to return different suggested groups based upon that user\'s request context
     * Get suggested groups and other miscellaneous information needed for the group/join page like flags
     */
    public v1GroupsSearchMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupSearchMetadataResponse>> {
        const result = this.api.v1GroupsSearchMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Although there is no reason for this to require an authenticated user right now, in the future,  we will use coco to return different suggested groups based upon that user\'s request context
     * Get suggested groups and other miscellaneous information needed for the group/join page like flags
     */
    public v1GroupsSearchMetadataGet(_options?: Configuration): Promise<RobloxGroupsApiGroupSearchMetadataResponse> {
        const result = this.api.v1GroupsSearchMetadataGet(_options);
        return result.toPromise();
    }


}



import { ObservableGroupsApi } from './ObservableAPI';

import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";
export class PromiseGroupsApi {
    private api: ObservableGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsApiRequestFactory,
        responseProcessor?: GroupsApiResponseProcessor
    ) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets Group configuration contextual information
     */
    public v1GroupsConfigurationMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupConfigurationDisplayOptionsResponse>> {
        const result = this.api.v1GroupsConfigurationMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets Group configuration contextual information
     */
    public v1GroupsConfigurationMetadataGet(_options?: Configuration): Promise<RobloxGroupsApiGroupConfigurationDisplayOptionsResponse> {
        const result = this.api.v1GroupsConfigurationMetadataGet(_options);
        return result.toPromise();
    }

    /**
     * This endpoint will charge Robux for the group purchase.  Http status code 413 is thrown when the group icon file size is too large.
     * Creates a new group.
     * @param name The name of the group.
     * @param description The group description.
     * @param publicGroup Whether or not the group is open for anyone to join.
     * @param buildersClubMembersOnly Whether or not the group is only open to join for builders club members.
     * @param files 
     */
    public v1GroupsCreatePostWithHttpInfo(name?: string, description?: string, publicGroup?: boolean, buildersClubMembersOnly?: boolean, files?: HttpFile, _options?: Configuration): Promise<HttpInfo<RobloxWebResponsesGroupsGroupResponseV2>> {
        const result = this.api.v1GroupsCreatePostWithHttpInfo(name, description, publicGroup, buildersClubMembersOnly, files, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will charge Robux for the group purchase.  Http status code 413 is thrown when the group icon file size is too large.
     * Creates a new group.
     * @param name The name of the group.
     * @param description The group description.
     * @param publicGroup Whether or not the group is open for anyone to join.
     * @param buildersClubMembersOnly Whether or not the group is only open to join for builders club members.
     * @param files 
     */
    public v1GroupsCreatePost(name?: string, description?: string, publicGroup?: boolean, buildersClubMembersOnly?: boolean, files?: HttpFile, _options?: Configuration): Promise<RobloxWebResponsesGroupsGroupResponseV2> {
        const result = this.api.v1GroupsCreatePost(name, description, publicGroup, buildersClubMembersOnly, files, _options);
        return result.toPromise();
    }

    /**
     * Gets the Group\'s audit log
     * @param groupId The id of the group the user is in.
     * @param actionType 
     * @param userId Filter for specific user id
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdAuditLogGetWithHttpInfo(groupId: number, actionType?: 'DeletePost' | 'RemoveMember' | 'AcceptJoinRequest' | 'DeclineJoinRequest' | 'PostStatus' | 'ChangeRank' | 'BuyAd' | 'SendAllyRequest' | 'CreateEnemy' | 'AcceptAllyRequest' | 'DeclineAllyRequest' | 'DeleteAlly' | 'DeleteEnemy' | 'AddGroupPlace' | 'RemoveGroupPlace' | 'CreateItems' | 'ConfigureItems' | 'SpendGroupFunds' | 'ChangeOwner' | 'Delete' | 'AdjustCurrencyAmounts' | 'Abandon' | 'Claim' | 'Rename' | 'ChangeDescription' | 'InviteToClan' | 'KickFromClan' | 'CancelClanInvite' | 'BuyClan' | 'CreateGroupAsset' | 'UpdateGroupAsset' | 'ConfigureGroupAsset' | 'RevertGroupAsset' | 'CreateGroupDeveloperProduct' | 'ConfigureGroupGame' | 'CreateGroupDeveloperSubscriptionProduct' | 'Lock' | 'Unlock' | 'CreateGamePass' | 'CreateBadge' | 'ConfigureBadge' | 'SavePlace' | 'PublishPlace' | 'UpdateRolesetRank' | 'UpdateRolesetData', userId?: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupAuditLogPageResponseRobloxGroupsApiModelsResponseGroupAuditLogResponseItem>> {
        const result = this.api.v1GroupsGroupIdAuditLogGetWithHttpInfo(groupId, actionType, userId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets the Group\'s audit log
     * @param groupId The id of the group the user is in.
     * @param actionType 
     * @param userId Filter for specific user id
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdAuditLogGet(groupId: number, actionType?: 'DeletePost' | 'RemoveMember' | 'AcceptJoinRequest' | 'DeclineJoinRequest' | 'PostStatus' | 'ChangeRank' | 'BuyAd' | 'SendAllyRequest' | 'CreateEnemy' | 'AcceptAllyRequest' | 'DeclineAllyRequest' | 'DeleteAlly' | 'DeleteEnemy' | 'AddGroupPlace' | 'RemoveGroupPlace' | 'CreateItems' | 'ConfigureItems' | 'SpendGroupFunds' | 'ChangeOwner' | 'Delete' | 'AdjustCurrencyAmounts' | 'Abandon' | 'Claim' | 'Rename' | 'ChangeDescription' | 'InviteToClan' | 'KickFromClan' | 'CancelClanInvite' | 'BuyClan' | 'CreateGroupAsset' | 'UpdateGroupAsset' | 'ConfigureGroupAsset' | 'RevertGroupAsset' | 'CreateGroupDeveloperProduct' | 'ConfigureGroupGame' | 'CreateGroupDeveloperSubscriptionProduct' | 'Lock' | 'Unlock' | 'CreateGamePass' | 'CreateBadge' | 'ConfigureBadge' | 'SavePlace' | 'PublishPlace' | 'UpdateRolesetRank' | 'UpdateRolesetData', userId?: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxGroupsApiGroupAuditLogPageResponseRobloxGroupsApiModelsResponseGroupAuditLogResponseItem> {
        const result = this.api.v1GroupsGroupIdAuditLogGet(groupId, actionType, userId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Updates the groups description
     * @param groupId The id of the group the user is in.
     * @param request The Roblox.Groups.Api.UpdateGroupDescriptionRequest.
     */
    public v1GroupsGroupIdDescriptionPatchWithHttpInfo(groupId: number, request: RobloxGroupsApiUpdateGroupDescriptionRequest, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupDescriptionResponse>> {
        const result = this.api.v1GroupsGroupIdDescriptionPatchWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates the groups description
     * @param groupId The id of the group the user is in.
     * @param request The Roblox.Groups.Api.UpdateGroupDescriptionRequest.
     */
    public v1GroupsGroupIdDescriptionPatch(groupId: number, request: RobloxGroupsApiUpdateGroupDescriptionRequest, _options?: Configuration): Promise<RobloxGroupsApiGroupDescriptionResponse> {
        const result = this.api.v1GroupsGroupIdDescriptionPatch(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Gets group information
     * @param groupId The group Id.
     */
    public v1GroupsGroupIdGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupDetailResponse>> {
        const result = this.api.v1GroupsGroupIdGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets group information
     * @param groupId The group Id.
     */
    public v1GroupsGroupIdGet(groupId: number, _options?: Configuration): Promise<RobloxGroupsApiGroupDetailResponse> {
        const result = this.api.v1GroupsGroupIdGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets the Group\'s name change history.
     * @param groupId The id of the group.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdNameHistoryGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupNameHistoryResponseItem>> {
        const result = this.api.v1GroupsGroupIdNameHistoryGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets the Group\'s name change history.
     * @param groupId The id of the group.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdNameHistoryGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupNameHistoryResponseItem> {
        const result = this.api.v1GroupsGroupIdNameHistoryGet(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will charge Robux for the group rename.
     * Updates the group\'s name.
     * @param groupId The id of the group the user is in.
     * @param request The Roblox.Groups.Api.UpdateGroupNameRequest.
     */
    public v1GroupsGroupIdNamePatchWithHttpInfo(groupId: number, request: RobloxGroupsApiUpdateGroupNameRequest, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiUpdateGroupNameResponse>> {
        const result = this.api.v1GroupsGroupIdNamePatchWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will charge Robux for the group rename.
     * Updates the group\'s name.
     * @param groupId The id of the group the user is in.
     * @param request The Roblox.Groups.Api.UpdateGroupNameRequest.
     */
    public v1GroupsGroupIdNamePatch(groupId: number, request: RobloxGroupsApiUpdateGroupNameRequest, _options?: Configuration): Promise<RobloxGroupsApiUpdateGroupNameResponse> {
        const result = this.api.v1GroupsGroupIdNamePatch(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates the group\'s settings
     * @param groupId The id of the group the user is in.
     * @param request Roblox.Groups.Api.UpdateGroupSettingsRequest
     */
    public v1GroupsGroupIdNotificationPreferencePatchWithHttpInfo(groupId: number, request: RobloxGroupsApiUpdateGroupNotificationPreferenceRequest, _options?: Configuration): Promise<HttpInfo<number>> {
        const result = this.api.v1GroupsGroupIdNotificationPreferencePatchWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates the group\'s settings
     * @param groupId The id of the group the user is in.
     * @param request Roblox.Groups.Api.UpdateGroupSettingsRequest
     */
    public v1GroupsGroupIdNotificationPreferencePatch(groupId: number, request: RobloxGroupsApiUpdateGroupNotificationPreferenceRequest, _options?: Configuration): Promise<number> {
        const result = this.api.v1GroupsGroupIdNotificationPreferencePatch(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Gets the Group\'s settings
     * @param groupId The id of the group the user is in.
     */
    public v1GroupsGroupIdSettingsGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupSettingsResponse>> {
        const result = this.api.v1GroupsGroupIdSettingsGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets the Group\'s settings
     * @param groupId The id of the group the user is in.
     */
    public v1GroupsGroupIdSettingsGet(groupId: number, _options?: Configuration): Promise<RobloxGroupsApiGroupSettingsResponse> {
        const result = this.api.v1GroupsGroupIdSettingsGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Updates the group\'s settings
     * @param groupId The id of the group the user is in.
     * @param request Roblox.Groups.Api.UpdateGroupSettingsRequest
     */
    public v1GroupsGroupIdSettingsPatchWithHttpInfo(groupId: number, request: RobloxGroupsApiUpdateGroupSettingsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdSettingsPatchWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates the group\'s settings
     * @param groupId The id of the group the user is in.
     * @param request Roblox.Groups.Api.UpdateGroupSettingsRequest
     */
    public v1GroupsGroupIdSettingsPatch(groupId: number, request: RobloxGroupsApiUpdateGroupSettingsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdSettingsPatch(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Sets group status
     * @param groupId The group Id.
     * @param statusRequest The Roblox.Groups.Api.PostGroupStatusRequest.
     */
    public v1GroupsGroupIdStatusPatchWithHttpInfo(groupId: number, statusRequest: RobloxGroupsApiPostGroupStatusRequest, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiShoutResponse>> {
        const result = this.api.v1GroupsGroupIdStatusPatchWithHttpInfo(groupId, statusRequest, _options);
        return result.toPromise();
    }

    /**
     * Sets group status
     * @param groupId The group Id.
     * @param statusRequest The Roblox.Groups.Api.PostGroupStatusRequest.
     */
    public v1GroupsGroupIdStatusPatch(groupId: number, statusRequest: RobloxGroupsApiPostGroupStatusRequest, _options?: Configuration): Promise<RobloxGroupsApiShoutResponse> {
        const result = this.api.v1GroupsGroupIdStatusPatch(groupId, statusRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates the group icon.
     * @param groupId The group Id.
     * @param files 
     */
    public v1GroupsIconPatchWithHttpInfo(groupId: number, files?: HttpFile, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsIconPatchWithHttpInfo(groupId, files, _options);
        return result.toPromise();
    }

    /**
     * Updates the group icon.
     * @param groupId The group Id.
     * @param files 
     */
    public v1GroupsIconPatch(groupId: number, files?: HttpFile, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsIconPatch(groupId, files, _options);
        return result.toPromise();
    }

    /**
     * Gets Groups contextual information:  Max number of groups a user can be part of.  Current number of groups a user is a member of.  Whether to show/hide certain features based on device type.
     */
    public v1GroupsMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupsDisplayOptionsResponse>> {
        const result = this.api.v1GroupsMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets Groups contextual information:  Max number of groups a user can be part of.  Current number of groups a user is a member of.  Whether to show/hide certain features based on device type.
     */
    public v1GroupsMetadataGet(_options?: Configuration): Promise<RobloxGroupsApiGroupsDisplayOptionsResponse> {
        const result = this.api.v1GroupsMetadataGet(_options);
        return result.toPromise();
    }

    /**
     * Gets group policy info used for compliance.
     * @param groupPolicyRequest 
     */
    public v1GroupsPoliciesPostWithHttpInfo(groupPolicyRequest: RobloxGroupsApiGroupPolicyRequest, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupPoliciesResponse>> {
        const result = this.api.v1GroupsPoliciesPostWithHttpInfo(groupPolicyRequest, _options);
        return result.toPromise();
    }

    /**
     * Gets group policy info used for compliance.
     * @param groupPolicyRequest 
     */
    public v1GroupsPoliciesPost(groupPolicyRequest: RobloxGroupsApiGroupPolicyRequest, _options?: Configuration): Promise<RobloxGroupsApiGroupPoliciesResponse> {
        const result = this.api.v1GroupsPoliciesPost(groupPolicyRequest, _options);
        return result.toPromise();
    }


}



import { ObservableMembershipApi } from './ObservableAPI';

import { MembershipApiRequestFactory, MembershipApiResponseProcessor} from "../apis/MembershipApi";
export class PromiseMembershipApi {
    private api: ObservableMembershipApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MembershipApiRequestFactory,
        responseProcessor?: MembershipApiResponseProcessor
    ) {
        this.api = new ObservableMembershipApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Changes the group owner to another user.
     * @param groupId The group Id.
     * @param changeOwnerRequest The request.
     */
    public v1GroupsGroupIdChangeOwnerPostWithHttpInfo(groupId: number, changeOwnerRequest: RobloxGroupsApiChangeOwnerRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdChangeOwnerPostWithHttpInfo(groupId, changeOwnerRequest, _options);
        return result.toPromise();
    }

    /**
     * Changes the group owner to another user.
     * @param groupId The group Id.
     * @param changeOwnerRequest The request.
     */
    public v1GroupsGroupIdChangeOwnerPost(groupId: number, changeOwnerRequest: RobloxGroupsApiChangeOwnerRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdChangeOwnerPost(groupId, changeOwnerRequest, _options);
        return result.toPromise();
    }

    /**
     * Claims ownership of the group as the authenticated user
     * @param groupId The group Id.
     */
    public v1GroupsGroupIdClaimOwnershipPostWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdClaimOwnershipPostWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Claims ownership of the group as the authenticated user
     * @param groupId The group Id.
     */
    public v1GroupsGroupIdClaimOwnershipPost(groupId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdClaimOwnershipPost(groupId, _options);
        return result.toPromise();
    }

    /**
     * Batch declines group join requests
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.MembersRequest.
     */
    public v1GroupsGroupIdJoinRequestsDeleteWithHttpInfo(groupId: number, request: RobloxGroupsApiMembersRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdJoinRequestsDeleteWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Batch declines group join requests
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.MembersRequest.
     */
    public v1GroupsGroupIdJoinRequestsDelete(groupId: number, request: RobloxGroupsApiMembersRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdJoinRequestsDelete(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Gets a page of Group Join Requests for a group.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdJoinRequestsGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupJoinRequestResponse>> {
        const result = this.api.v1GroupsGroupIdJoinRequestsGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a page of Group Join Requests for a group.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdJoinRequestsGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupJoinRequestResponse> {
        const result = this.api.v1GroupsGroupIdJoinRequestsGet(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Batch accepts group join requests
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.MembersRequest.
     */
    public v1GroupsGroupIdJoinRequestsPostWithHttpInfo(groupId: number, request: RobloxGroupsApiMembersRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdJoinRequestsPostWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Batch accepts group join requests
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.MembersRequest.
     */
    public v1GroupsGroupIdJoinRequestsPost(groupId: number, request: RobloxGroupsApiMembersRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdJoinRequestsPost(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Declines/cancels a group join request.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdDeleteWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdJoinRequestsUsersUserIdDeleteWithHttpInfo(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Declines/cancels a group join request.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdDelete(groupId: number, userId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdJoinRequestsUsersUserIdDelete(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Gets a group join request by userId.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdGetWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupJoinRequestResponse>> {
        const result = this.api.v1GroupsGroupIdJoinRequestsUsersUserIdGetWithHttpInfo(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Gets a group join request by userId.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdGet(groupId: number, userId: number, _options?: Configuration): Promise<RobloxGroupsApiGroupJoinRequestResponse> {
        const result = this.api.v1GroupsGroupIdJoinRequestsUsersUserIdGet(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Accepts a group join request.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdPostWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdJoinRequestsUsersUserIdPostWithHttpInfo(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Accepts a group join request.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdPost(groupId: number, userId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdJoinRequestsUsersUserIdPost(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Gets group membership information in the context of the authenticated user
     * @param groupId The group Id.
     * @param includeNotificationPreferences 
     */
    public v1GroupsGroupIdMembershipGetWithHttpInfo(groupId: number, includeNotificationPreferences: boolean, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupMembershipMetadataResponse>> {
        const result = this.api.v1GroupsGroupIdMembershipGetWithHttpInfo(groupId, includeNotificationPreferences, _options);
        return result.toPromise();
    }

    /**
     * Gets group membership information in the context of the authenticated user
     * @param groupId The group Id.
     * @param includeNotificationPreferences 
     */
    public v1GroupsGroupIdMembershipGet(groupId: number, includeNotificationPreferences: boolean, _options?: Configuration): Promise<RobloxGroupsApiGroupMembershipMetadataResponse> {
        const result = this.api.v1GroupsGroupIdMembershipGet(groupId, includeNotificationPreferences, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of the rolesets in a group.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupAllRolesResponse>> {
        const result = this.api.v1GroupsGroupIdRolesGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of the rolesets in a group.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesGet(groupId: number, _options?: Configuration): Promise<RobloxGroupsApiGroupAllRolesResponse> {
        const result = this.api.v1GroupsGroupIdRolesGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of users in a group for a specific roleset.
     * @param groupId The group id.
     * @param roleSetId The group\&#39;s role set id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by user group join date
     */
    public v1GroupsGroupIdRolesRoleSetIdUsersGetWithHttpInfo(groupId: number, roleSetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseUserModel>> {
        const result = this.api.v1GroupsGroupIdRolesRoleSetIdUsersGetWithHttpInfo(groupId, roleSetId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of users in a group for a specific roleset.
     * @param groupId The group id.
     * @param roleSetId The group\&#39;s role set id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by user group join date
     */
    public v1GroupsGroupIdRolesRoleSetIdUsersGet(groupId: number, roleSetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseUserModel> {
        const result = this.api.v1GroupsGroupIdRolesRoleSetIdUsersGet(groupId, roleSetId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of users in a group.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdUsersGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiUserGroupRoleResponse>> {
        const result = this.api.v1GroupsGroupIdUsersGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of users in a group.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdUsersGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiUserGroupRoleResponse> {
        const result = this.api.v1GroupsGroupIdUsersGet(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Joins a group
     * @param groupId The group Id.
     * @param joinGroupModel Only supplied when captcha has been solved.
     */
    public v1GroupsGroupIdUsersPostWithHttpInfo(groupId: number, joinGroupModel: RobloxGroupsApiJoinGroupRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdUsersPostWithHttpInfo(groupId, joinGroupModel, _options);
        return result.toPromise();
    }

    /**
     * Joins a group
     * @param groupId The group Id.
     * @param joinGroupModel Only supplied when captcha has been solved.
     */
    public v1GroupsGroupIdUsersPost(groupId: number, joinGroupModel: RobloxGroupsApiJoinGroupRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdUsersPost(groupId, joinGroupModel, _options);
        return result.toPromise();
    }

    /**
     * Removes a user from a group
     * @param groupId The group Id.
     * @param userId The Id of the user being removed.
     */
    public v1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Removes a user from a group
     * @param groupId The group Id.
     * @param userId The Id of the user being removed.
     */
    public v1GroupsGroupIdUsersUserIdDelete(groupId: number, userId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdUsersUserIdDelete(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Updates a users role in a group.
     * @param groupId The id of the group the user is in.
     * @param userId The id of the user being updated.
     * @param request The Roblox.Groups.Api.UpdateUserRoleRequest.
     */
    public v1GroupsGroupIdUsersUserIdPatchWithHttpInfo(groupId: number, userId: number, request: RobloxGroupsApiUpdateUserRoleRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdUsersUserIdPatchWithHttpInfo(groupId, userId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates a users role in a group.
     * @param groupId The id of the group the user is in.
     * @param userId The id of the user being updated.
     * @param request The Roblox.Groups.Api.UpdateUserRoleRequest.
     */
    public v1GroupsGroupIdUsersUserIdPatch(groupId: number, userId: number, request: RobloxGroupsApiUpdateUserRoleRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdUsersUserIdPatch(groupId, userId, request, _options);
        return result.toPromise();
    }

    /**
     * Gets groups that the authenticated user has requested to join
     */
    public v1UserGroupsPendingGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupDetailResponse>> {
        const result = this.api.v1UserGroupsPendingGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets groups that the authenticated user has requested to join
     */
    public v1UserGroupsPendingGet(_options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupDetailResponse> {
        const result = this.api.v1UserGroupsPendingGet(_options);
        return result.toPromise();
    }

    /**
     * Gets a list of all groups the specified users\' friends are in.
     * @param userId The user id.
     */
    public v1UsersUserIdFriendsGroupsRolesGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiUserGroupMembershipResponse>> {
        const result = this.api.v1UsersUserIdFriendsGroupsRolesGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of all groups the specified users\' friends are in.
     * @param userId The user id.
     */
    public v1UsersUserIdFriendsGroupsRolesGet(userId: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiUserGroupMembershipResponse> {
        const result = this.api.v1UsersUserIdFriendsGroupsRolesGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param userId The user id.
     * @param includeLocked 
     * @param includeNotificationPreferences 
     */
    public v1UsersUserIdGroupsRolesGetWithHttpInfo(userId: number, includeLocked: boolean, includeNotificationPreferences: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipDetailResponse>> {
        const result = this.api.v1UsersUserIdGroupsRolesGetWithHttpInfo(userId, includeLocked, includeNotificationPreferences, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param userId The user id.
     * @param includeLocked 
     * @param includeNotificationPreferences 
     */
    public v1UsersUserIdGroupsRolesGet(userId: number, includeLocked: boolean, includeNotificationPreferences: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipDetailResponse> {
        const result = this.api.v1UsersUserIdGroupsRolesGet(userId, includeLocked, includeNotificationPreferences, _options);
        return result.toPromise();
    }


}



import { ObservablePermissionsApi } from './ObservableAPI';

import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";
export class PromisePermissionsApi {
    private api: ObservablePermissionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PermissionsApiRequestFactory,
        responseProcessor?: PermissionsApiResponseProcessor
    ) {
        this.api = new ObservablePermissionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the permissions for a group\'s guest roleset. These can be viewed by all (members and guests) users.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesGuestPermissionsGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupPermissionsResponse>> {
        const result = this.api.v1GroupsGroupIdRolesGuestPermissionsGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets the permissions for a group\'s guest roleset. These can be viewed by all (members and guests) users.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesGuestPermissionsGet(groupId: number, _options?: Configuration): Promise<RobloxGroupsApiGroupPermissionsResponse> {
        const result = this.api.v1GroupsGroupIdRolesGuestPermissionsGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets all permissions for each role
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesPermissionsGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse>> {
        const result = this.api.v1GroupsGroupIdRolesPermissionsGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets all permissions for each role
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesPermissionsGet(groupId: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse> {
        const result = this.api.v1GroupsGroupIdRolesPermissionsGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets the permissions for a group\'s roleset. The authorized user must either be the group owner or the roleset being requested, except for guest roles, which can be viewed by all (members and guests).
     * @param groupId The group id.
     * @param roleSetId The group\&#39;s role set id.
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsGetWithHttpInfo(groupId: number, roleSetId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupPermissionsResponse>> {
        const result = this.api.v1GroupsGroupIdRolesRoleSetIdPermissionsGetWithHttpInfo(groupId, roleSetId, _options);
        return result.toPromise();
    }

    /**
     * Gets the permissions for a group\'s roleset. The authorized user must either be the group owner or the roleset being requested, except for guest roles, which can be viewed by all (members and guests).
     * @param groupId The group id.
     * @param roleSetId The group\&#39;s role set id.
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsGet(groupId: number, roleSetId: number, _options?: Configuration): Promise<RobloxGroupsApiGroupPermissionsResponse> {
        const result = this.api.v1GroupsGroupIdRolesRoleSetIdPermissionsGet(groupId, roleSetId, _options);
        return result.toPromise();
    }

    /**
     * Updates the permissions for a group\'s roleset. The authorized user must be the group owner.
     * @param groupId The group\&#39;s id.
     * @param roleSetId The roleset\&#39;s id.
     * @param updatePermissionsRequest The request.
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsPatchWithHttpInfo(groupId: number, roleSetId: number, updatePermissionsRequest: RobloxGroupsApiUpdatePermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdRolesRoleSetIdPermissionsPatchWithHttpInfo(groupId, roleSetId, updatePermissionsRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates the permissions for a group\'s roleset. The authorized user must be the group owner.
     * @param groupId The group\&#39;s id.
     * @param roleSetId The roleset\&#39;s id.
     * @param updatePermissionsRequest The request.
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsPatch(groupId: number, roleSetId: number, updatePermissionsRequest: RobloxGroupsApiUpdatePermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdRolesRoleSetIdPermissionsPatch(groupId, roleSetId, updatePermissionsRequest, _options);
        return result.toPromise();
    }


}



import { ObservablePrimaryGroupApi } from './ObservableAPI';

import { PrimaryGroupApiRequestFactory, PrimaryGroupApiResponseProcessor} from "../apis/PrimaryGroupApi";
export class PromisePrimaryGroupApi {
    private api: ObservablePrimaryGroupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PrimaryGroupApiRequestFactory,
        responseProcessor?: PrimaryGroupApiResponseProcessor
    ) {
        this.api = new ObservablePrimaryGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the authenticated user\'s primary group
     */
    public v1UserGroupsPrimaryDeleteWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UserGroupsPrimaryDeleteWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Removes the authenticated user\'s primary group
     */
    public v1UserGroupsPrimaryDelete(_options?: Configuration): Promise<any> {
        const result = this.api.v1UserGroupsPrimaryDelete(_options);
        return result.toPromise();
    }

    /**
     * Sets the authenticated user\'s primary group
     * @param request The request body containing the group id.
     */
    public v1UserGroupsPrimaryPostWithHttpInfo(request: RobloxGroupsApiPrimaryGroupRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UserGroupsPrimaryPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Sets the authenticated user\'s primary group
     * @param request The request body containing the group id.
     */
    public v1UserGroupsPrimaryPost(request: RobloxGroupsApiPrimaryGroupRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1UserGroupsPrimaryPost(request, _options);
        return result.toPromise();
    }

    /**
     * Gets a user\'s primary group.
     * @param userId The user id.
     */
    public v1UsersUserIdGroupsPrimaryRoleGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupMembershipDetailResponse>> {
        const result = this.api.v1UsersUserIdGroupsPrimaryRoleGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets a user\'s primary group.
     * @param userId The user id.
     */
    public v1UsersUserIdGroupsPrimaryRoleGet(userId: number, _options?: Configuration): Promise<RobloxGroupsApiGroupMembershipDetailResponse> {
        const result = this.api.v1UsersUserIdGroupsPrimaryRoleGet(userId, _options);
        return result.toPromise();
    }


}



import { ObservableRelationshipsApi } from './ObservableAPI';

import { RelationshipsApiRequestFactory, RelationshipsApiResponseProcessor} from "../apis/RelationshipsApi";
export class PromiseRelationshipsApi {
    private api: ObservableRelationshipsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RelationshipsApiRequestFactory,
        responseProcessor?: RelationshipsApiResponseProcessor
    ) {
        this.api = new ObservableRelationshipsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a group\'s relationships
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeGetWithHttpInfo(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupRelationshipsResponse>> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeGetWithHttpInfo(groupId, groupRelationshipType, startRowIndex, maxRows, _options);
        return result.toPromise();
    }

    /**
     * Gets a group\'s relationships
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Promise<RobloxGroupsApiGroupRelationshipsResponse> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet(groupId, groupRelationshipType, startRowIndex, maxRows, _options);
        return result.toPromise();
    }

    /**
     * Deletes a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to delete the relationship with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteWithHttpInfo(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteWithHttpInfo(groupId, groupRelationshipType, relatedGroupId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to delete the relationship with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete(groupId, groupRelationshipType, relatedGroupId, _options);
        return result.toPromise();
    }

    /**
     * Create a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to create a relationship with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostWithHttpInfo(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostWithHttpInfo(groupId, groupRelationshipType, relatedGroupId, _options);
        return result.toPromise();
    }

    /**
     * Create a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to create a relationship with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost(groupId, groupRelationshipType, relatedGroupId, _options);
        return result.toPromise();
    }

    /**
     * Batch declines group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteWithHttpInfo(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteWithHttpInfo(groupId, groupRelationshipType, request, _options);
        return result.toPromise();
    }

    /**
     * Batch declines group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete(groupId, groupRelationshipType, request, _options);
        return result.toPromise();
    }

    /**
     * Gets a group\'s relationship requests
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type of the request, only allies are supported.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetWithHttpInfo(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupRelationshipsResponse>> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetWithHttpInfo(groupId, groupRelationshipType, startRowIndex, maxRows, _options);
        return result.toPromise();
    }

    /**
     * Gets a group\'s relationship requests
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type of the request, only allies are supported.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Promise<RobloxGroupsApiGroupRelationshipsResponse> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet(groupId, groupRelationshipType, startRowIndex, maxRows, _options);
        return result.toPromise();
    }

    /**
     * Batch accepts group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostWithHttpInfo(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostWithHttpInfo(groupId, groupRelationshipType, request, _options);
        return result.toPromise();
    }

    /**
     * Batch accepts group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost(groupId, groupRelationshipType, request, _options);
        return result.toPromise();
    }

    /**
     * Declines a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteWithHttpInfo(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteWithHttpInfo(groupId, groupRelationshipType, relatedGroupId, _options);
        return result.toPromise();
    }

    /**
     * Declines a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete(groupId, groupRelationshipType, relatedGroupId, _options);
        return result.toPromise();
    }

    /**
     * Accepts a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies, only allies are supported.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostWithHttpInfo(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostWithHttpInfo(groupId, groupRelationshipType, relatedGroupId, _options);
        return result.toPromise();
    }

    /**
     * Accepts a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies, only allies are supported.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost(groupId, groupRelationshipType, relatedGroupId, _options);
        return result.toPromise();
    }


}



import { ObservableRevenueApi } from './ObservableAPI';

import { RevenueApiRequestFactory, RevenueApiResponseProcessor} from "../apis/RevenueApi";
export class PromiseRevenueApi {
    private api: ObservableRevenueApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RevenueApiRequestFactory,
        responseProcessor?: RevenueApiResponseProcessor
    ) {
        this.api = new ObservableRevenueApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a value indicating whether the group can use payout feature
     * @param groupId The group id.
     */
    public v1GroupsGroupIdPayoutRestrictionGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupPayoutRestrictionResponse>> {
        const result = this.api.v1GroupsGroupIdPayoutRestrictionGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets a value indicating whether the group can use payout feature
     * @param groupId The group id.
     */
    public v1GroupsGroupIdPayoutRestrictionGet(groupId: number, _options?: Configuration): Promise<RobloxGroupsApiGroupPayoutRestrictionResponse> {
        const result = this.api.v1GroupsGroupIdPayoutRestrictionGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of the group payout percentages
     * @param groupId The group id.
     */
    public v1GroupsGroupIdPayoutsGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPayoutResponse>> {
        const result = this.api.v1GroupsGroupIdPayoutsGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of the group payout percentages
     * @param groupId The group id.
     */
    public v1GroupsGroupIdPayoutsGet(groupId: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPayoutResponse> {
        const result = this.api.v1GroupsGroupIdPayoutsGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Pays out a user in Robux.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.PayoutRequest.
     */
    public v1GroupsGroupIdPayoutsPostWithHttpInfo(groupId: number, request: RobloxGroupsApiPayoutRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdPayoutsPostWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Pays out a user in Robux.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.PayoutRequest.
     */
    public v1GroupsGroupIdPayoutsPost(groupId: number, request: RobloxGroupsApiPayoutRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdPayoutsPost(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will remove any recipients not sent in the request.  If a recipient in the request is not a valid member in the group they will not be added to the recurring payouts.
     * Updates recurring payouts.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.PayoutRequest.
     */
    public v1GroupsGroupIdPayoutsRecurringPostWithHttpInfo(groupId: number, request: RobloxGroupsApiPayoutRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdPayoutsRecurringPostWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will remove any recipients not sent in the request.  If a recipient in the request is not a valid member in the group they will not be added to the recurring payouts.
     * Updates recurring payouts.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.PayoutRequest.
     */
    public v1GroupsGroupIdPayoutsRecurringPost(groupId: number, request: RobloxGroupsApiPayoutRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdPayoutsRecurringPost(groupId, request, _options);
        return result.toPromise();
    }


}



import { ObservableRoleSetsApi } from './ObservableAPI';

import { RoleSetsApiRequestFactory, RoleSetsApiResponseProcessor} from "../apis/RoleSetsApi";
export class PromiseRoleSetsApi {
    private api: ObservableRoleSetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoleSetsApiRequestFactory,
        responseProcessor?: RoleSetsApiResponseProcessor
    ) {
        this.api = new ObservableRoleSetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates new group roleset.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.Models.Request.CreateRoleSetRequest.
     */
    public v1GroupsGroupIdRolesetsCreatePostWithHttpInfo(groupId: number, request: RobloxGroupsApiModelsRequestCreateRoleSetRequest, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupRoleResponse>> {
        const result = this.api.v1GroupsGroupIdRolesetsCreatePostWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Creates new group roleset.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.Models.Request.CreateRoleSetRequest.
     */
    public v1GroupsGroupIdRolesetsCreatePost(groupId: number, request: RobloxGroupsApiModelsRequestCreateRoleSetRequest, _options?: Configuration): Promise<RobloxGroupsApiGroupRoleResponse> {
        const result = this.api.v1GroupsGroupIdRolesetsCreatePost(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Deletes existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     */
    public v1GroupsGroupIdRolesetsRolesetIdDeleteWithHttpInfo(groupId: number, rolesetId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdRolesetsRolesetIdDeleteWithHttpInfo(groupId, rolesetId, _options);
        return result.toPromise();
    }

    /**
     * Deletes existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     */
    public v1GroupsGroupIdRolesetsRolesetIdDelete(groupId: number, rolesetId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdRolesetsRolesetIdDelete(groupId, rolesetId, _options);
        return result.toPromise();
    }

    /**
     * Updates existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     * @param request The Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest.
     */
    public v1GroupsGroupIdRolesetsRolesetIdPatchWithHttpInfo(groupId: number, rolesetId: number, request: RobloxGroupsApiModelsRequestUpdateRoleSetRequest, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiGroupRoleResponse>> {
        const result = this.api.v1GroupsGroupIdRolesetsRolesetIdPatchWithHttpInfo(groupId, rolesetId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     * @param request The Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest.
     */
    public v1GroupsGroupIdRolesetsRolesetIdPatch(groupId: number, rolesetId: number, request: RobloxGroupsApiModelsRequestUpdateRoleSetRequest, _options?: Configuration): Promise<RobloxGroupsApiGroupRoleResponse> {
        const result = this.api.v1GroupsGroupIdRolesetsRolesetIdPatch(groupId, rolesetId, request, _options);
        return result.toPromise();
    }


}



import { ObservableRolesApi } from './ObservableAPI';

import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";
export class PromiseRolesApi {
    private api: ObservableRolesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RolesApiRequestFactory,
        responseProcessor?: RolesApiResponseProcessor
    ) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the Roles by their ids.
     * @param ids A list of role ids
     */
    public v1RolesGetWithHttpInfo(ids: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupRoleDetailResponse>> {
        const result = this.api.v1RolesGetWithHttpInfo(ids, _options);
        return result.toPromise();
    }

    /**
     * Gets the Roles by their ids.
     * @param ids A list of role ids
     */
    public v1RolesGet(ids: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupRoleDetailResponse> {
        const result = this.api.v1RolesGet(ids, _options);
        return result.toPromise();
    }


}



import { ObservableSocialLinksApi } from './ObservableAPI';

import { SocialLinksApiRequestFactory, SocialLinksApiResponseProcessor} from "../apis/SocialLinksApi";
export class PromiseSocialLinksApi {
    private api: ObservableSocialLinksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SocialLinksApiRequestFactory,
        responseProcessor?: SocialLinksApiResponseProcessor
    ) {
        this.api = new ObservableSocialLinksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get social link data associated with a group
     * @param groupId The Id of the game
     */
    public v1GroupsGroupIdSocialLinksGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse>> {
        const result = this.api.v1GroupsGroupIdSocialLinksGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Get social link data associated with a group
     * @param groupId The Id of the game
     */
    public v1GroupsGroupIdSocialLinksGet(groupId: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse> {
        const result = this.api.v1GroupsGroupIdSocialLinksGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Posts a social links
     * @param groupId The id of the game
     * @param request The Roblox.Groups.Api.SocialLinkRequest
     */
    public v1GroupsGroupIdSocialLinksPostWithHttpInfo(groupId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiSocialLinkResponse>> {
        const result = this.api.v1GroupsGroupIdSocialLinksPostWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Posts a social links
     * @param groupId The id of the game
     * @param request The Roblox.Groups.Api.SocialLinkRequest
     */
    public v1GroupsGroupIdSocialLinksPost(groupId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Promise<RobloxGroupsApiSocialLinkResponse> {
        const result = this.api.v1GroupsGroupIdSocialLinksPost(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Deletes a social link
     * @param groupId The id of the game you are editting, required for permissions checking
     * @param socialLinkId The id of the social link
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdDeleteWithHttpInfo(groupId: number, socialLinkId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdSocialLinksSocialLinkIdDeleteWithHttpInfo(groupId, socialLinkId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a social link
     * @param groupId The id of the game you are editting, required for permissions checking
     * @param socialLinkId The id of the social link
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdDelete(groupId: number, socialLinkId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdSocialLinksSocialLinkIdDelete(groupId, socialLinkId, _options);
        return result.toPromise();
    }

    /**
     * Updates a social link
     * @param groupId The id of the universe
     * @param socialLinkId The id of the social link being updated
     * @param request The Roblox.Groups.Api.SocialLinkRequest.
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdPatchWithHttpInfo(groupId: number, socialLinkId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdSocialLinksSocialLinkIdPatchWithHttpInfo(groupId, socialLinkId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates a social link
     * @param groupId The id of the universe
     * @param socialLinkId The id of the social link being updated
     * @param request The Roblox.Groups.Api.SocialLinkRequest.
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdPatch(groupId: number, socialLinkId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdSocialLinksSocialLinkIdPatch(groupId, socialLinkId, request, _options);
        return result.toPromise();
    }


}



import { ObservableWallApi } from './ObservableAPI';

import { WallApiRequestFactory, WallApiResponseProcessor} from "../apis/WallApi";
export class PromiseWallApi {
    private api: ObservableWallApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WallApiRequestFactory,
        responseProcessor?: WallApiResponseProcessor
    ) {
        this.api = new ObservableWallApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a list of group wall posts.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by group wall post Id
     */
    public v1GroupsGroupIdWallPostsGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupWallPostModel>> {
        const result = this.api.v1GroupsGroupIdWallPostsGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of group wall posts.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by group wall post Id
     */
    public v1GroupsGroupIdWallPostsGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupWallPostModel> {
        const result = this.api.v1GroupsGroupIdWallPostsGet(groupId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Creates a post on a group wall
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.CreateWallPostRequest.
     */
    public v1GroupsGroupIdWallPostsPostWithHttpInfo(groupId: number, request: RobloxGroupsApiCreateWallPostRequest, _options?: Configuration): Promise<HttpInfo<RobloxGroupsApiModelsResponseGroupWallPostModel>> {
        const result = this.api.v1GroupsGroupIdWallPostsPostWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Creates a post on a group wall
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.CreateWallPostRequest.
     */
    public v1GroupsGroupIdWallPostsPost(groupId: number, request: RobloxGroupsApiCreateWallPostRequest, _options?: Configuration): Promise<RobloxGroupsApiModelsResponseGroupWallPostModel> {
        const result = this.api.v1GroupsGroupIdWallPostsPost(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Deletes a group wall post.
     * @param groupId The group id.
     * @param postId The group wall post id.
     */
    public v1GroupsGroupIdWallPostsPostIdDeleteWithHttpInfo(groupId: number, postId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdWallPostsPostIdDeleteWithHttpInfo(groupId, postId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a group wall post.
     * @param groupId The group id.
     * @param postId The group wall post id.
     */
    public v1GroupsGroupIdWallPostsPostIdDelete(groupId: number, postId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdWallPostsPostIdDelete(groupId, postId, _options);
        return result.toPromise();
    }

    /**
     * Subscribes the authenticated user to notifications of group wall events.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdWallSubscribePostWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1GroupsGroupIdWallSubscribePostWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Subscribes the authenticated user to notifications of group wall events.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdWallSubscribePost(groupId: number, _options?: Configuration): Promise<void> {
        const result = this.api.v1GroupsGroupIdWallSubscribePost(groupId, _options);
        return result.toPromise();
    }

    /**
     * Deletes all group wall posts made by a specific user.
     * @param groupId The group id.
     * @param userId The user id.
     */
    public v1GroupsGroupIdWallUsersUserIdPostsDeleteWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GroupsGroupIdWallUsersUserIdPostsDeleteWithHttpInfo(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Deletes all group wall posts made by a specific user.
     * @param groupId The group id.
     * @param userId The user id.
     */
    public v1GroupsGroupIdWallUsersUserIdPostsDelete(groupId: number, userId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1GroupsGroupIdWallUsersUserIdPostsDelete(groupId, userId, _options);
        return result.toPromise();
    }


}



