import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
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

import { GroupSearchApiRequestFactory, GroupSearchApiResponseProcessor} from "../apis/GroupSearchApi";
export class ObservableGroupSearchApi {
    private requestFactory: GroupSearchApiRequestFactory;
    private responseProcessor: GroupSearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupSearchApiRequestFactory,
        responseProcessor?: GroupSearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupSearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupSearchApiResponseProcessor();
    }

    /**
     * Search for groups by keyword.
     * @param keyword The keyword or phrase to use as the search parameter.
     * @param prioritizeExactMatch Whether or not to prioritize the exact match for the keyword (optional, defaults to false.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1GroupsSearchGetWithHttpInfo(keyword: string, prioritizeExactMatch?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupSearchPageResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsSearchGet(keyword, prioritizeExactMatch, limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsSearchGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for groups by keyword.
     * @param keyword The keyword or phrase to use as the search parameter.
     * @param prioritizeExactMatch Whether or not to prioritize the exact match for the keyword (optional, defaults to false.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1GroupsSearchGet(keyword: string, prioritizeExactMatch?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<RobloxGroupsApiGroupSearchPageResponse> {
        return this.v1GroupsSearchGetWithHttpInfo(keyword, prioritizeExactMatch, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupSearchPageResponse>) => apiResponse.data));
    }

    /**
     * Should only be used for direct lookups where a user is inputting a group name, shouldn\'t be used for search pages.
     * Looks up groups by a name. Prioritizes an exact match as the first result.
     * @param groupName The group name.
     */
    public v1GroupsSearchLookupGetWithHttpInfo(groupName: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsSearchLookupGet(groupName, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsSearchLookupGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Should only be used for direct lookups where a user is inputting a group name, shouldn\'t be used for search pages.
     * Looks up groups by a name. Prioritizes an exact match as the first result.
     * @param groupName The group name.
     */
    public v1GroupsSearchLookupGet(groupName: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse> {
        return this.v1GroupsSearchLookupGetWithHttpInfo(groupName, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse>) => apiResponse.data));
    }

    /**
     * Although there is no reason for this to require an authenticated user right now, in the future,  we will use coco to return different suggested groups based upon that user\'s request context
     * Get suggested groups and other miscellaneous information needed for the group/join page like flags
     */
    public v1GroupsSearchMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupSearchMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsSearchMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsSearchMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Although there is no reason for this to require an authenticated user right now, in the future,  we will use coco to return different suggested groups based upon that user\'s request context
     * Get suggested groups and other miscellaneous information needed for the group/join page like flags
     */
    public v1GroupsSearchMetadataGet(_options?: Configuration): Observable<RobloxGroupsApiGroupSearchMetadataResponse> {
        return this.v1GroupsSearchMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupSearchMetadataResponse>) => apiResponse.data));
    }

}

import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";
export class ObservableGroupsApi {
    private requestFactory: GroupsApiRequestFactory;
    private responseProcessor: GroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsApiRequestFactory,
        responseProcessor?: GroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupsApiResponseProcessor();
    }

    /**
     * Gets Group configuration contextual information
     */
    public v1GroupsConfigurationMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupConfigurationDisplayOptionsResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsConfigurationMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsConfigurationMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets Group configuration contextual information
     */
    public v1GroupsConfigurationMetadataGet(_options?: Configuration): Observable<RobloxGroupsApiGroupConfigurationDisplayOptionsResponse> {
        return this.v1GroupsConfigurationMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupConfigurationDisplayOptionsResponse>) => apiResponse.data));
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
    public v1GroupsCreatePostWithHttpInfo(name?: string, description?: string, publicGroup?: boolean, buildersClubMembersOnly?: boolean, files?: HttpFile, _options?: Configuration): Observable<HttpInfo<RobloxWebResponsesGroupsGroupResponseV2>> {
        const requestContextPromise = this.requestFactory.v1GroupsCreatePost(name, description, publicGroup, buildersClubMembersOnly, files, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsCreatePostWithHttpInfo(rsp)));
            }));
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
    public v1GroupsCreatePost(name?: string, description?: string, publicGroup?: boolean, buildersClubMembersOnly?: boolean, files?: HttpFile, _options?: Configuration): Observable<RobloxWebResponsesGroupsGroupResponseV2> {
        return this.v1GroupsCreatePostWithHttpInfo(name, description, publicGroup, buildersClubMembersOnly, files, _options).pipe(map((apiResponse: HttpInfo<RobloxWebResponsesGroupsGroupResponseV2>) => apiResponse.data));
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
    public v1GroupsGroupIdAuditLogGetWithHttpInfo(groupId: number, actionType?: 'DeletePost' | 'RemoveMember' | 'AcceptJoinRequest' | 'DeclineJoinRequest' | 'PostStatus' | 'ChangeRank' | 'BuyAd' | 'SendAllyRequest' | 'CreateEnemy' | 'AcceptAllyRequest' | 'DeclineAllyRequest' | 'DeleteAlly' | 'DeleteEnemy' | 'AddGroupPlace' | 'RemoveGroupPlace' | 'CreateItems' | 'ConfigureItems' | 'SpendGroupFunds' | 'ChangeOwner' | 'Delete' | 'AdjustCurrencyAmounts' | 'Abandon' | 'Claim' | 'Rename' | 'ChangeDescription' | 'InviteToClan' | 'KickFromClan' | 'CancelClanInvite' | 'BuyClan' | 'CreateGroupAsset' | 'UpdateGroupAsset' | 'ConfigureGroupAsset' | 'RevertGroupAsset' | 'CreateGroupDeveloperProduct' | 'ConfigureGroupGame' | 'CreateGroupDeveloperSubscriptionProduct' | 'Lock' | 'Unlock' | 'CreateGamePass' | 'CreateBadge' | 'ConfigureBadge' | 'SavePlace' | 'PublishPlace' | 'UpdateRolesetRank' | 'UpdateRolesetData', userId?: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupAuditLogPageResponseRobloxGroupsApiModelsResponseGroupAuditLogResponseItem>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdAuditLogGet(groupId, actionType, userId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdAuditLogGetWithHttpInfo(rsp)));
            }));
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
    public v1GroupsGroupIdAuditLogGet(groupId: number, actionType?: 'DeletePost' | 'RemoveMember' | 'AcceptJoinRequest' | 'DeclineJoinRequest' | 'PostStatus' | 'ChangeRank' | 'BuyAd' | 'SendAllyRequest' | 'CreateEnemy' | 'AcceptAllyRequest' | 'DeclineAllyRequest' | 'DeleteAlly' | 'DeleteEnemy' | 'AddGroupPlace' | 'RemoveGroupPlace' | 'CreateItems' | 'ConfigureItems' | 'SpendGroupFunds' | 'ChangeOwner' | 'Delete' | 'AdjustCurrencyAmounts' | 'Abandon' | 'Claim' | 'Rename' | 'ChangeDescription' | 'InviteToClan' | 'KickFromClan' | 'CancelClanInvite' | 'BuyClan' | 'CreateGroupAsset' | 'UpdateGroupAsset' | 'ConfigureGroupAsset' | 'RevertGroupAsset' | 'CreateGroupDeveloperProduct' | 'ConfigureGroupGame' | 'CreateGroupDeveloperSubscriptionProduct' | 'Lock' | 'Unlock' | 'CreateGamePass' | 'CreateBadge' | 'ConfigureBadge' | 'SavePlace' | 'PublishPlace' | 'UpdateRolesetRank' | 'UpdateRolesetData', userId?: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxGroupsApiGroupAuditLogPageResponseRobloxGroupsApiModelsResponseGroupAuditLogResponseItem> {
        return this.v1GroupsGroupIdAuditLogGetWithHttpInfo(groupId, actionType, userId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupAuditLogPageResponseRobloxGroupsApiModelsResponseGroupAuditLogResponseItem>) => apiResponse.data));
    }

    /**
     * Updates the groups description
     * @param groupId The id of the group the user is in.
     * @param request The Roblox.Groups.Api.UpdateGroupDescriptionRequest.
     */
    public v1GroupsGroupIdDescriptionPatchWithHttpInfo(groupId: number, request: RobloxGroupsApiUpdateGroupDescriptionRequest, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupDescriptionResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdDescriptionPatch(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdDescriptionPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the groups description
     * @param groupId The id of the group the user is in.
     * @param request The Roblox.Groups.Api.UpdateGroupDescriptionRequest.
     */
    public v1GroupsGroupIdDescriptionPatch(groupId: number, request: RobloxGroupsApiUpdateGroupDescriptionRequest, _options?: Configuration): Observable<RobloxGroupsApiGroupDescriptionResponse> {
        return this.v1GroupsGroupIdDescriptionPatchWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupDescriptionResponse>) => apiResponse.data));
    }

    /**
     * Gets group information
     * @param groupId The group Id.
     */
    public v1GroupsGroupIdGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupDetailResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets group information
     * @param groupId The group Id.
     */
    public v1GroupsGroupIdGet(groupId: number, _options?: Configuration): Observable<RobloxGroupsApiGroupDetailResponse> {
        return this.v1GroupsGroupIdGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupDetailResponse>) => apiResponse.data));
    }

    /**
     * Gets the Group\'s name change history.
     * @param groupId The id of the group.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdNameHistoryGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupNameHistoryResponseItem>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdNameHistoryGet(groupId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdNameHistoryGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the Group\'s name change history.
     * @param groupId The id of the group.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdNameHistoryGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupNameHistoryResponseItem> {
        return this.v1GroupsGroupIdNameHistoryGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupNameHistoryResponseItem>) => apiResponse.data));
    }

    /**
     * This endpoint will charge Robux for the group rename.
     * Updates the group\'s name.
     * @param groupId The id of the group the user is in.
     * @param request The Roblox.Groups.Api.UpdateGroupNameRequest.
     */
    public v1GroupsGroupIdNamePatchWithHttpInfo(groupId: number, request: RobloxGroupsApiUpdateGroupNameRequest, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiUpdateGroupNameResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdNamePatch(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdNamePatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint will charge Robux for the group rename.
     * Updates the group\'s name.
     * @param groupId The id of the group the user is in.
     * @param request The Roblox.Groups.Api.UpdateGroupNameRequest.
     */
    public v1GroupsGroupIdNamePatch(groupId: number, request: RobloxGroupsApiUpdateGroupNameRequest, _options?: Configuration): Observable<RobloxGroupsApiUpdateGroupNameResponse> {
        return this.v1GroupsGroupIdNamePatchWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiUpdateGroupNameResponse>) => apiResponse.data));
    }

    /**
     * Updates the group\'s settings
     * @param groupId The id of the group the user is in.
     * @param request Roblox.Groups.Api.UpdateGroupSettingsRequest
     */
    public v1GroupsGroupIdNotificationPreferencePatchWithHttpInfo(groupId: number, request: RobloxGroupsApiUpdateGroupNotificationPreferenceRequest, _options?: Configuration): Observable<HttpInfo<number>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdNotificationPreferencePatch(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdNotificationPreferencePatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the group\'s settings
     * @param groupId The id of the group the user is in.
     * @param request Roblox.Groups.Api.UpdateGroupSettingsRequest
     */
    public v1GroupsGroupIdNotificationPreferencePatch(groupId: number, request: RobloxGroupsApiUpdateGroupNotificationPreferenceRequest, _options?: Configuration): Observable<number> {
        return this.v1GroupsGroupIdNotificationPreferencePatchWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<number>) => apiResponse.data));
    }

    /**
     * Gets the Group\'s settings
     * @param groupId The id of the group the user is in.
     */
    public v1GroupsGroupIdSettingsGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupSettingsResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdSettingsGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdSettingsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the Group\'s settings
     * @param groupId The id of the group the user is in.
     */
    public v1GroupsGroupIdSettingsGet(groupId: number, _options?: Configuration): Observable<RobloxGroupsApiGroupSettingsResponse> {
        return this.v1GroupsGroupIdSettingsGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupSettingsResponse>) => apiResponse.data));
    }

    /**
     * Updates the group\'s settings
     * @param groupId The id of the group the user is in.
     * @param request Roblox.Groups.Api.UpdateGroupSettingsRequest
     */
    public v1GroupsGroupIdSettingsPatchWithHttpInfo(groupId: number, request: RobloxGroupsApiUpdateGroupSettingsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdSettingsPatch(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdSettingsPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the group\'s settings
     * @param groupId The id of the group the user is in.
     * @param request Roblox.Groups.Api.UpdateGroupSettingsRequest
     */
    public v1GroupsGroupIdSettingsPatch(groupId: number, request: RobloxGroupsApiUpdateGroupSettingsRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdSettingsPatchWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Sets group status
     * @param groupId The group Id.
     * @param statusRequest The Roblox.Groups.Api.PostGroupStatusRequest.
     */
    public v1GroupsGroupIdStatusPatchWithHttpInfo(groupId: number, statusRequest: RobloxGroupsApiPostGroupStatusRequest, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiShoutResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdStatusPatch(groupId, statusRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdStatusPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets group status
     * @param groupId The group Id.
     * @param statusRequest The Roblox.Groups.Api.PostGroupStatusRequest.
     */
    public v1GroupsGroupIdStatusPatch(groupId: number, statusRequest: RobloxGroupsApiPostGroupStatusRequest, _options?: Configuration): Observable<RobloxGroupsApiShoutResponse> {
        return this.v1GroupsGroupIdStatusPatchWithHttpInfo(groupId, statusRequest, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiShoutResponse>) => apiResponse.data));
    }

    /**
     * Updates the group icon.
     * @param groupId The group Id.
     * @param files 
     */
    public v1GroupsIconPatchWithHttpInfo(groupId: number, files?: HttpFile, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsIconPatch(groupId, files, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsIconPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the group icon.
     * @param groupId The group Id.
     * @param files 
     */
    public v1GroupsIconPatch(groupId: number, files?: HttpFile, _options?: Configuration): Observable<any> {
        return this.v1GroupsIconPatchWithHttpInfo(groupId, files, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets Groups contextual information:  Max number of groups a user can be part of.  Current number of groups a user is a member of.  Whether to show/hide certain features based on device type.
     */
    public v1GroupsMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupsDisplayOptionsResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets Groups contextual information:  Max number of groups a user can be part of.  Current number of groups a user is a member of.  Whether to show/hide certain features based on device type.
     */
    public v1GroupsMetadataGet(_options?: Configuration): Observable<RobloxGroupsApiGroupsDisplayOptionsResponse> {
        return this.v1GroupsMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupsDisplayOptionsResponse>) => apiResponse.data));
    }

    /**
     * Gets group policy info used for compliance.
     * @param groupPolicyRequest 
     */
    public v1GroupsPoliciesPostWithHttpInfo(groupPolicyRequest: RobloxGroupsApiGroupPolicyRequest, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupPoliciesResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsPoliciesPost(groupPolicyRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsPoliciesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets group policy info used for compliance.
     * @param groupPolicyRequest 
     */
    public v1GroupsPoliciesPost(groupPolicyRequest: RobloxGroupsApiGroupPolicyRequest, _options?: Configuration): Observable<RobloxGroupsApiGroupPoliciesResponse> {
        return this.v1GroupsPoliciesPostWithHttpInfo(groupPolicyRequest, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupPoliciesResponse>) => apiResponse.data));
    }

}

import { MembershipApiRequestFactory, MembershipApiResponseProcessor} from "../apis/MembershipApi";
export class ObservableMembershipApi {
    private requestFactory: MembershipApiRequestFactory;
    private responseProcessor: MembershipApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MembershipApiRequestFactory,
        responseProcessor?: MembershipApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MembershipApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MembershipApiResponseProcessor();
    }

    /**
     * Changes the group owner to another user.
     * @param groupId The group Id.
     * @param changeOwnerRequest The request.
     */
    public v1GroupsGroupIdChangeOwnerPostWithHttpInfo(groupId: number, changeOwnerRequest: RobloxGroupsApiChangeOwnerRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdChangeOwnerPost(groupId, changeOwnerRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdChangeOwnerPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Changes the group owner to another user.
     * @param groupId The group Id.
     * @param changeOwnerRequest The request.
     */
    public v1GroupsGroupIdChangeOwnerPost(groupId: number, changeOwnerRequest: RobloxGroupsApiChangeOwnerRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdChangeOwnerPostWithHttpInfo(groupId, changeOwnerRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Claims ownership of the group as the authenticated user
     * @param groupId The group Id.
     */
    public v1GroupsGroupIdClaimOwnershipPostWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdClaimOwnershipPost(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdClaimOwnershipPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Claims ownership of the group as the authenticated user
     * @param groupId The group Id.
     */
    public v1GroupsGroupIdClaimOwnershipPost(groupId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdClaimOwnershipPostWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Batch declines group join requests
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.MembersRequest.
     */
    public v1GroupsGroupIdJoinRequestsDeleteWithHttpInfo(groupId: number, request: RobloxGroupsApiMembersRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdJoinRequestsDelete(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdJoinRequestsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch declines group join requests
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.MembersRequest.
     */
    public v1GroupsGroupIdJoinRequestsDelete(groupId: number, request: RobloxGroupsApiMembersRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdJoinRequestsDeleteWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets a page of Group Join Requests for a group.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdJoinRequestsGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupJoinRequestResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdJoinRequestsGet(groupId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdJoinRequestsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a page of Group Join Requests for a group.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdJoinRequestsGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupJoinRequestResponse> {
        return this.v1GroupsGroupIdJoinRequestsGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupJoinRequestResponse>) => apiResponse.data));
    }

    /**
     * Batch accepts group join requests
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.MembersRequest.
     */
    public v1GroupsGroupIdJoinRequestsPostWithHttpInfo(groupId: number, request: RobloxGroupsApiMembersRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdJoinRequestsPost(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdJoinRequestsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch accepts group join requests
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.MembersRequest.
     */
    public v1GroupsGroupIdJoinRequestsPost(groupId: number, request: RobloxGroupsApiMembersRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdJoinRequestsPostWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Declines/cancels a group join request.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdDeleteWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdJoinRequestsUsersUserIdDelete(groupId, userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdJoinRequestsUsersUserIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Declines/cancels a group join request.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdDelete(groupId: number, userId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdJoinRequestsUsersUserIdDeleteWithHttpInfo(groupId, userId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets a group join request by userId.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdGetWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupJoinRequestResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdJoinRequestsUsersUserIdGet(groupId, userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdJoinRequestsUsersUserIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a group join request by userId.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdGet(groupId: number, userId: number, _options?: Configuration): Observable<RobloxGroupsApiGroupJoinRequestResponse> {
        return this.v1GroupsGroupIdJoinRequestsUsersUserIdGetWithHttpInfo(groupId, userId, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupJoinRequestResponse>) => apiResponse.data));
    }

    /**
     * Accepts a group join request.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdPostWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdJoinRequestsUsersUserIdPost(groupId, userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdJoinRequestsUsersUserIdPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accepts a group join request.
     * @param groupId The group Id.
     * @param userId The user Id.
     */
    public v1GroupsGroupIdJoinRequestsUsersUserIdPost(groupId: number, userId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdJoinRequestsUsersUserIdPostWithHttpInfo(groupId, userId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets group membership information in the context of the authenticated user
     * @param groupId The group Id.
     * @param includeNotificationPreferences 
     */
    public v1GroupsGroupIdMembershipGetWithHttpInfo(groupId: number, includeNotificationPreferences: boolean, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupMembershipMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdMembershipGet(groupId, includeNotificationPreferences, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdMembershipGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets group membership information in the context of the authenticated user
     * @param groupId The group Id.
     * @param includeNotificationPreferences 
     */
    public v1GroupsGroupIdMembershipGet(groupId: number, includeNotificationPreferences: boolean, _options?: Configuration): Observable<RobloxGroupsApiGroupMembershipMetadataResponse> {
        return this.v1GroupsGroupIdMembershipGetWithHttpInfo(groupId, includeNotificationPreferences, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupMembershipMetadataResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of the rolesets in a group.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupAllRolesResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRolesGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRolesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of the rolesets in a group.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesGet(groupId: number, _options?: Configuration): Observable<RobloxGroupsApiGroupAllRolesResponse> {
        return this.v1GroupsGroupIdRolesGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupAllRolesResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of users in a group for a specific roleset.
     * @param groupId The group id.
     * @param roleSetId The group\&#39;s role set id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by user group join date
     */
    public v1GroupsGroupIdRolesRoleSetIdUsersGetWithHttpInfo(groupId: number, roleSetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseUserModel>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRolesRoleSetIdUsersGet(groupId, roleSetId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRolesRoleSetIdUsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of users in a group for a specific roleset.
     * @param groupId The group id.
     * @param roleSetId The group\&#39;s role set id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by user group join date
     */
    public v1GroupsGroupIdRolesRoleSetIdUsersGet(groupId: number, roleSetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseUserModel> {
        return this.v1GroupsGroupIdRolesRoleSetIdUsersGetWithHttpInfo(groupId, roleSetId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseUserModel>) => apiResponse.data));
    }

    /**
     * Gets a list of users in a group.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdUsersGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiUserGroupRoleResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdUsersGet(groupId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdUsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of users in a group.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1GroupsGroupIdUsersGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiUserGroupRoleResponse> {
        return this.v1GroupsGroupIdUsersGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiUserGroupRoleResponse>) => apiResponse.data));
    }

    /**
     * Joins a group
     * @param groupId The group Id.
     * @param joinGroupModel Only supplied when captcha has been solved.
     */
    public v1GroupsGroupIdUsersPostWithHttpInfo(groupId: number, joinGroupModel: RobloxGroupsApiJoinGroupRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdUsersPost(groupId, joinGroupModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdUsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Joins a group
     * @param groupId The group Id.
     * @param joinGroupModel Only supplied when captcha has been solved.
     */
    public v1GroupsGroupIdUsersPost(groupId: number, joinGroupModel: RobloxGroupsApiJoinGroupRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdUsersPostWithHttpInfo(groupId, joinGroupModel, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Removes a user from a group
     * @param groupId The group Id.
     * @param userId The Id of the user being removed.
     */
    public v1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdUsersUserIdDelete(groupId, userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a user from a group
     * @param groupId The group Id.
     * @param userId The Id of the user being removed.
     */
    public v1GroupsGroupIdUsersUserIdDelete(groupId: number, userId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(groupId, userId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Updates a users role in a group.
     * @param groupId The id of the group the user is in.
     * @param userId The id of the user being updated.
     * @param request The Roblox.Groups.Api.UpdateUserRoleRequest.
     */
    public v1GroupsGroupIdUsersUserIdPatchWithHttpInfo(groupId: number, userId: number, request: RobloxGroupsApiUpdateUserRoleRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdUsersUserIdPatch(groupId, userId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdUsersUserIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a users role in a group.
     * @param groupId The id of the group the user is in.
     * @param userId The id of the user being updated.
     * @param request The Roblox.Groups.Api.UpdateUserRoleRequest.
     */
    public v1GroupsGroupIdUsersUserIdPatch(groupId: number, userId: number, request: RobloxGroupsApiUpdateUserRoleRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdUsersUserIdPatchWithHttpInfo(groupId, userId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets groups that the authenticated user has requested to join
     */
    public v1UserGroupsPendingGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupDetailResponse>> {
        const requestContextPromise = this.requestFactory.v1UserGroupsPendingGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserGroupsPendingGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets groups that the authenticated user has requested to join
     */
    public v1UserGroupsPendingGet(_options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupDetailResponse> {
        return this.v1UserGroupsPendingGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupDetailResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of all groups the specified users\' friends are in.
     * @param userId The user id.
     */
    public v1UsersUserIdFriendsGroupsRolesGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiUserGroupMembershipResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdFriendsGroupsRolesGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdFriendsGroupsRolesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of all groups the specified users\' friends are in.
     * @param userId The user id.
     */
    public v1UsersUserIdFriendsGroupsRolesGet(userId: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiUserGroupMembershipResponse> {
        return this.v1UsersUserIdFriendsGroupsRolesGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiUserGroupMembershipResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param userId The user id.
     * @param includeLocked 
     * @param includeNotificationPreferences 
     */
    public v1UsersUserIdGroupsRolesGetWithHttpInfo(userId: number, includeLocked: boolean, includeNotificationPreferences: boolean, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipDetailResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdGroupsRolesGet(userId, includeLocked, includeNotificationPreferences, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdGroupsRolesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param userId The user id.
     * @param includeLocked 
     * @param includeNotificationPreferences 
     */
    public v1UsersUserIdGroupsRolesGet(userId: number, includeLocked: boolean, includeNotificationPreferences: boolean, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipDetailResponse> {
        return this.v1UsersUserIdGroupsRolesGetWithHttpInfo(userId, includeLocked, includeNotificationPreferences, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipDetailResponse>) => apiResponse.data));
    }

}

import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";
export class ObservablePermissionsApi {
    private requestFactory: PermissionsApiRequestFactory;
    private responseProcessor: PermissionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PermissionsApiRequestFactory,
        responseProcessor?: PermissionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PermissionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PermissionsApiResponseProcessor();
    }

    /**
     * Gets the permissions for a group\'s guest roleset. These can be viewed by all (members and guests) users.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesGuestPermissionsGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupPermissionsResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRolesGuestPermissionsGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRolesGuestPermissionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the permissions for a group\'s guest roleset. These can be viewed by all (members and guests) users.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesGuestPermissionsGet(groupId: number, _options?: Configuration): Observable<RobloxGroupsApiGroupPermissionsResponse> {
        return this.v1GroupsGroupIdRolesGuestPermissionsGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupPermissionsResponse>) => apiResponse.data));
    }

    /**
     * Gets all permissions for each role
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesPermissionsGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRolesPermissionsGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRolesPermissionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all permissions for each role
     * @param groupId The group id.
     */
    public v1GroupsGroupIdRolesPermissionsGet(groupId: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse> {
        return this.v1GroupsGroupIdRolesPermissionsGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse>) => apiResponse.data));
    }

    /**
     * Gets the permissions for a group\'s roleset. The authorized user must either be the group owner or the roleset being requested, except for guest roles, which can be viewed by all (members and guests).
     * @param groupId The group id.
     * @param roleSetId The group\&#39;s role set id.
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsGetWithHttpInfo(groupId: number, roleSetId: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupPermissionsResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRolesRoleSetIdPermissionsGet(groupId, roleSetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRolesRoleSetIdPermissionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the permissions for a group\'s roleset. The authorized user must either be the group owner or the roleset being requested, except for guest roles, which can be viewed by all (members and guests).
     * @param groupId The group id.
     * @param roleSetId The group\&#39;s role set id.
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsGet(groupId: number, roleSetId: number, _options?: Configuration): Observable<RobloxGroupsApiGroupPermissionsResponse> {
        return this.v1GroupsGroupIdRolesRoleSetIdPermissionsGetWithHttpInfo(groupId, roleSetId, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupPermissionsResponse>) => apiResponse.data));
    }

    /**
     * Updates the permissions for a group\'s roleset. The authorized user must be the group owner.
     * @param groupId The group\&#39;s id.
     * @param roleSetId The roleset\&#39;s id.
     * @param updatePermissionsRequest The request.
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsPatchWithHttpInfo(groupId: number, roleSetId: number, updatePermissionsRequest: RobloxGroupsApiUpdatePermissionsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRolesRoleSetIdPermissionsPatch(groupId, roleSetId, updatePermissionsRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRolesRoleSetIdPermissionsPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the permissions for a group\'s roleset. The authorized user must be the group owner.
     * @param groupId The group\&#39;s id.
     * @param roleSetId The roleset\&#39;s id.
     * @param updatePermissionsRequest The request.
     */
    public v1GroupsGroupIdRolesRoleSetIdPermissionsPatch(groupId: number, roleSetId: number, updatePermissionsRequest: RobloxGroupsApiUpdatePermissionsRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdRolesRoleSetIdPermissionsPatchWithHttpInfo(groupId, roleSetId, updatePermissionsRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { PrimaryGroupApiRequestFactory, PrimaryGroupApiResponseProcessor} from "../apis/PrimaryGroupApi";
export class ObservablePrimaryGroupApi {
    private requestFactory: PrimaryGroupApiRequestFactory;
    private responseProcessor: PrimaryGroupApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PrimaryGroupApiRequestFactory,
        responseProcessor?: PrimaryGroupApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PrimaryGroupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PrimaryGroupApiResponseProcessor();
    }

    /**
     * Removes the authenticated user\'s primary group
     */
    public v1UserGroupsPrimaryDeleteWithHttpInfo(_options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UserGroupsPrimaryDelete(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserGroupsPrimaryDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes the authenticated user\'s primary group
     */
    public v1UserGroupsPrimaryDelete(_options?: Configuration): Observable<any> {
        return this.v1UserGroupsPrimaryDeleteWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Sets the authenticated user\'s primary group
     * @param request The request body containing the group id.
     */
    public v1UserGroupsPrimaryPostWithHttpInfo(request: RobloxGroupsApiPrimaryGroupRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UserGroupsPrimaryPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserGroupsPrimaryPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the authenticated user\'s primary group
     * @param request The request body containing the group id.
     */
    public v1UserGroupsPrimaryPost(request: RobloxGroupsApiPrimaryGroupRequest, _options?: Configuration): Observable<any> {
        return this.v1UserGroupsPrimaryPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets a user\'s primary group.
     * @param userId The user id.
     */
    public v1UsersUserIdGroupsPrimaryRoleGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupMembershipDetailResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdGroupsPrimaryRoleGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdGroupsPrimaryRoleGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a user\'s primary group.
     * @param userId The user id.
     */
    public v1UsersUserIdGroupsPrimaryRoleGet(userId: number, _options?: Configuration): Observable<RobloxGroupsApiGroupMembershipDetailResponse> {
        return this.v1UsersUserIdGroupsPrimaryRoleGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupMembershipDetailResponse>) => apiResponse.data));
    }

}

import { RelationshipsApiRequestFactory, RelationshipsApiResponseProcessor} from "../apis/RelationshipsApi";
export class ObservableRelationshipsApi {
    private requestFactory: RelationshipsApiRequestFactory;
    private responseProcessor: RelationshipsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RelationshipsApiRequestFactory,
        responseProcessor?: RelationshipsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RelationshipsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RelationshipsApiResponseProcessor();
    }

    /**
     * Gets a group\'s relationships
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeGetWithHttpInfo(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupRelationshipsResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet(groupId, groupRelationshipType, startRowIndex, maxRows, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRelationshipsGroupRelationshipTypeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a group\'s relationships
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Observable<RobloxGroupsApiGroupRelationshipsResponse> {
        return this.v1GroupsGroupIdRelationshipsGroupRelationshipTypeGetWithHttpInfo(groupId, groupRelationshipType, startRowIndex, maxRows, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupRelationshipsResponse>) => apiResponse.data));
    }

    /**
     * Deletes a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to delete the relationship with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteWithHttpInfo(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete(groupId, groupRelationshipType, relatedGroupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to delete the relationship with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteWithHttpInfo(groupId, groupRelationshipType, relatedGroupId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Create a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to create a relationship with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostWithHttpInfo(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost(groupId, groupRelationshipType, relatedGroupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to create a relationship with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostWithHttpInfo(groupId, groupRelationshipType, relatedGroupId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Batch declines group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteWithHttpInfo(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete(groupId, groupRelationshipType, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch declines group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteWithHttpInfo(groupId, groupRelationshipType, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets a group\'s relationship requests
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type of the request, only allies are supported.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetWithHttpInfo(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupRelationshipsResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet(groupId, groupRelationshipType, startRowIndex, maxRows, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a group\'s relationship requests
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type of the request, only allies are supported.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Observable<RobloxGroupsApiGroupRelationshipsResponse> {
        return this.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetWithHttpInfo(groupId, groupRelationshipType, startRowIndex, maxRows, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupRelationshipsResponse>) => apiResponse.data));
    }

    /**
     * Batch accepts group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostWithHttpInfo(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost(groupId, groupRelationshipType, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch accepts group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostWithHttpInfo(groupId, groupRelationshipType, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Declines a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteWithHttpInfo(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete(groupId, groupRelationshipType, relatedGroupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Declines a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteWithHttpInfo(groupId, groupRelationshipType, relatedGroupId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Accepts a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies, only allies are supported.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostWithHttpInfo(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost(groupId, groupRelationshipType, relatedGroupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accepts a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies, only allies are supported.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostWithHttpInfo(groupId, groupRelationshipType, relatedGroupId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { RevenueApiRequestFactory, RevenueApiResponseProcessor} from "../apis/RevenueApi";
export class ObservableRevenueApi {
    private requestFactory: RevenueApiRequestFactory;
    private responseProcessor: RevenueApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RevenueApiRequestFactory,
        responseProcessor?: RevenueApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RevenueApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RevenueApiResponseProcessor();
    }

    /**
     * Gets a value indicating whether the group can use payout feature
     * @param groupId The group id.
     */
    public v1GroupsGroupIdPayoutRestrictionGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupPayoutRestrictionResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdPayoutRestrictionGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdPayoutRestrictionGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a value indicating whether the group can use payout feature
     * @param groupId The group id.
     */
    public v1GroupsGroupIdPayoutRestrictionGet(groupId: number, _options?: Configuration): Observable<RobloxGroupsApiGroupPayoutRestrictionResponse> {
        return this.v1GroupsGroupIdPayoutRestrictionGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupPayoutRestrictionResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of the group payout percentages
     * @param groupId The group id.
     */
    public v1GroupsGroupIdPayoutsGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPayoutResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdPayoutsGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdPayoutsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of the group payout percentages
     * @param groupId The group id.
     */
    public v1GroupsGroupIdPayoutsGet(groupId: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPayoutResponse> {
        return this.v1GroupsGroupIdPayoutsGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPayoutResponse>) => apiResponse.data));
    }

    /**
     * Pays out a user in Robux.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.PayoutRequest.
     */
    public v1GroupsGroupIdPayoutsPostWithHttpInfo(groupId: number, request: RobloxGroupsApiPayoutRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdPayoutsPost(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdPayoutsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Pays out a user in Robux.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.PayoutRequest.
     */
    public v1GroupsGroupIdPayoutsPost(groupId: number, request: RobloxGroupsApiPayoutRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdPayoutsPostWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * This endpoint will remove any recipients not sent in the request.  If a recipient in the request is not a valid member in the group they will not be added to the recurring payouts.
     * Updates recurring payouts.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.PayoutRequest.
     */
    public v1GroupsGroupIdPayoutsRecurringPostWithHttpInfo(groupId: number, request: RobloxGroupsApiPayoutRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdPayoutsRecurringPost(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdPayoutsRecurringPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint will remove any recipients not sent in the request.  If a recipient in the request is not a valid member in the group they will not be added to the recurring payouts.
     * Updates recurring payouts.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.PayoutRequest.
     */
    public v1GroupsGroupIdPayoutsRecurringPost(groupId: number, request: RobloxGroupsApiPayoutRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdPayoutsRecurringPostWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { RoleSetsApiRequestFactory, RoleSetsApiResponseProcessor} from "../apis/RoleSetsApi";
export class ObservableRoleSetsApi {
    private requestFactory: RoleSetsApiRequestFactory;
    private responseProcessor: RoleSetsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RoleSetsApiRequestFactory,
        responseProcessor?: RoleSetsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RoleSetsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RoleSetsApiResponseProcessor();
    }

    /**
     * Creates new group roleset.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.Models.Request.CreateRoleSetRequest.
     */
    public v1GroupsGroupIdRolesetsCreatePostWithHttpInfo(groupId: number, request: RobloxGroupsApiModelsRequestCreateRoleSetRequest, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupRoleResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRolesetsCreatePost(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRolesetsCreatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates new group roleset.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.Models.Request.CreateRoleSetRequest.
     */
    public v1GroupsGroupIdRolesetsCreatePost(groupId: number, request: RobloxGroupsApiModelsRequestCreateRoleSetRequest, _options?: Configuration): Observable<RobloxGroupsApiGroupRoleResponse> {
        return this.v1GroupsGroupIdRolesetsCreatePostWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupRoleResponse>) => apiResponse.data));
    }

    /**
     * Deletes existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     */
    public v1GroupsGroupIdRolesetsRolesetIdDeleteWithHttpInfo(groupId: number, rolesetId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRolesetsRolesetIdDelete(groupId, rolesetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRolesetsRolesetIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     */
    public v1GroupsGroupIdRolesetsRolesetIdDelete(groupId: number, rolesetId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdRolesetsRolesetIdDeleteWithHttpInfo(groupId, rolesetId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Updates existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     * @param request The Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest.
     */
    public v1GroupsGroupIdRolesetsRolesetIdPatchWithHttpInfo(groupId: number, rolesetId: number, request: RobloxGroupsApiModelsRequestUpdateRoleSetRequest, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiGroupRoleResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRolesetsRolesetIdPatch(groupId, rolesetId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRolesetsRolesetIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     * @param request The Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest.
     */
    public v1GroupsGroupIdRolesetsRolesetIdPatch(groupId: number, rolesetId: number, request: RobloxGroupsApiModelsRequestUpdateRoleSetRequest, _options?: Configuration): Observable<RobloxGroupsApiGroupRoleResponse> {
        return this.v1GroupsGroupIdRolesetsRolesetIdPatchWithHttpInfo(groupId, rolesetId, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiGroupRoleResponse>) => apiResponse.data));
    }

}

import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";
export class ObservableRolesApi {
    private requestFactory: RolesApiRequestFactory;
    private responseProcessor: RolesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RolesApiRequestFactory,
        responseProcessor?: RolesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RolesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RolesApiResponseProcessor();
    }

    /**
     * Gets the Roles by their ids.
     * @param ids A list of role ids
     */
    public v1RolesGetWithHttpInfo(ids: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupRoleDetailResponse>> {
        const requestContextPromise = this.requestFactory.v1RolesGet(ids, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RolesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the Roles by their ids.
     * @param ids A list of role ids
     */
    public v1RolesGet(ids: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupRoleDetailResponse> {
        return this.v1RolesGetWithHttpInfo(ids, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupRoleDetailResponse>) => apiResponse.data));
    }

}

import { SocialLinksApiRequestFactory, SocialLinksApiResponseProcessor} from "../apis/SocialLinksApi";
export class ObservableSocialLinksApi {
    private requestFactory: SocialLinksApiRequestFactory;
    private responseProcessor: SocialLinksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SocialLinksApiRequestFactory,
        responseProcessor?: SocialLinksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SocialLinksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SocialLinksApiResponseProcessor();
    }

    /**
     * Get social link data associated with a group
     * @param groupId The Id of the game
     */
    public v1GroupsGroupIdSocialLinksGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdSocialLinksGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdSocialLinksGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get social link data associated with a group
     * @param groupId The Id of the game
     */
    public v1GroupsGroupIdSocialLinksGet(groupId: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse> {
        return this.v1GroupsGroupIdSocialLinksGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse>) => apiResponse.data));
    }

    /**
     * Posts a social links
     * @param groupId The id of the game
     * @param request The Roblox.Groups.Api.SocialLinkRequest
     */
    public v1GroupsGroupIdSocialLinksPostWithHttpInfo(groupId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiSocialLinkResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdSocialLinksPost(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdSocialLinksPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Posts a social links
     * @param groupId The id of the game
     * @param request The Roblox.Groups.Api.SocialLinkRequest
     */
    public v1GroupsGroupIdSocialLinksPost(groupId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Observable<RobloxGroupsApiSocialLinkResponse> {
        return this.v1GroupsGroupIdSocialLinksPostWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiSocialLinkResponse>) => apiResponse.data));
    }

    /**
     * Deletes a social link
     * @param groupId The id of the game you are editting, required for permissions checking
     * @param socialLinkId The id of the social link
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdDeleteWithHttpInfo(groupId: number, socialLinkId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdSocialLinksSocialLinkIdDelete(groupId, socialLinkId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdSocialLinksSocialLinkIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a social link
     * @param groupId The id of the game you are editting, required for permissions checking
     * @param socialLinkId The id of the social link
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdDelete(groupId: number, socialLinkId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdSocialLinksSocialLinkIdDeleteWithHttpInfo(groupId, socialLinkId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Updates a social link
     * @param groupId The id of the universe
     * @param socialLinkId The id of the social link being updated
     * @param request The Roblox.Groups.Api.SocialLinkRequest.
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdPatchWithHttpInfo(groupId: number, socialLinkId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdSocialLinksSocialLinkIdPatch(groupId, socialLinkId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdSocialLinksSocialLinkIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a social link
     * @param groupId The id of the universe
     * @param socialLinkId The id of the social link being updated
     * @param request The Roblox.Groups.Api.SocialLinkRequest.
     */
    public v1GroupsGroupIdSocialLinksSocialLinkIdPatch(groupId: number, socialLinkId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdSocialLinksSocialLinkIdPatchWithHttpInfo(groupId, socialLinkId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { WallApiRequestFactory, WallApiResponseProcessor} from "../apis/WallApi";
export class ObservableWallApi {
    private requestFactory: WallApiRequestFactory;
    private responseProcessor: WallApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WallApiRequestFactory,
        responseProcessor?: WallApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WallApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WallApiResponseProcessor();
    }

    /**
     * Gets a list of group wall posts.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by group wall post Id
     */
    public v1GroupsGroupIdWallPostsGetWithHttpInfo(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupWallPostModel>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdWallPostsGet(groupId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdWallPostsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of group wall posts.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by group wall post Id
     */
    public v1GroupsGroupIdWallPostsGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupWallPostModel> {
        return this.v1GroupsGroupIdWallPostsGetWithHttpInfo(groupId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiModelsResponseGroupWallPostModel>) => apiResponse.data));
    }

    /**
     * Creates a post on a group wall
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.CreateWallPostRequest.
     */
    public v1GroupsGroupIdWallPostsPostWithHttpInfo(groupId: number, request: RobloxGroupsApiCreateWallPostRequest, _options?: Configuration): Observable<HttpInfo<RobloxGroupsApiModelsResponseGroupWallPostModel>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdWallPostsPost(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdWallPostsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a post on a group wall
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.CreateWallPostRequest.
     */
    public v1GroupsGroupIdWallPostsPost(groupId: number, request: RobloxGroupsApiCreateWallPostRequest, _options?: Configuration): Observable<RobloxGroupsApiModelsResponseGroupWallPostModel> {
        return this.v1GroupsGroupIdWallPostsPostWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<RobloxGroupsApiModelsResponseGroupWallPostModel>) => apiResponse.data));
    }

    /**
     * Deletes a group wall post.
     * @param groupId The group id.
     * @param postId The group wall post id.
     */
    public v1GroupsGroupIdWallPostsPostIdDeleteWithHttpInfo(groupId: number, postId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdWallPostsPostIdDelete(groupId, postId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdWallPostsPostIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a group wall post.
     * @param groupId The group id.
     * @param postId The group wall post id.
     */
    public v1GroupsGroupIdWallPostsPostIdDelete(groupId: number, postId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdWallPostsPostIdDeleteWithHttpInfo(groupId, postId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Subscribes the authenticated user to notifications of group wall events.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdWallSubscribePostWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdWallSubscribePost(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdWallSubscribePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Subscribes the authenticated user to notifications of group wall events.
     * @param groupId The group id.
     */
    public v1GroupsGroupIdWallSubscribePost(groupId: number, _options?: Configuration): Observable<void> {
        return this.v1GroupsGroupIdWallSubscribePostWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes all group wall posts made by a specific user.
     * @param groupId The group id.
     * @param userId The user id.
     */
    public v1GroupsGroupIdWallUsersUserIdPostsDeleteWithHttpInfo(groupId: number, userId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdWallUsersUserIdPostsDelete(groupId, userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdWallUsersUserIdPostsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes all group wall posts made by a specific user.
     * @param groupId The group id.
     * @param userId The user id.
     */
    public v1GroupsGroupIdWallUsersUserIdPostsDelete(groupId: number, userId: number, _options?: Configuration): Observable<any> {
        return this.v1GroupsGroupIdWallUsersUserIdPostsDeleteWithHttpInfo(groupId, userId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
