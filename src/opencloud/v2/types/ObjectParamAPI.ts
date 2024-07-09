import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { AvatarAsset } from '../models/AvatarAsset';
import { AvatarAssetAssetPosition } from '../models/AvatarAssetAssetPosition';
import { AvatarAssetAssetRotation } from '../models/AvatarAssetAssetRotation';
import { AvatarAssetAssetScale } from '../models/AvatarAssetAssetScale';
import { AvatarAssetMeta } from '../models/AvatarAssetMeta';
import { AvatarBody } from '../models/AvatarBody';
import { AvatarCreation } from '../models/AvatarCreation';
import { AvatarCreationAvatarAsset } from '../models/AvatarCreationAvatarAsset';
import { AvatarCreationBody } from '../models/AvatarCreationBody';
import { AvatarCreationBodyAssets } from '../models/AvatarCreationBodyAssets';
import { AvatarCreationHead } from '../models/AvatarCreationHead';
import { AvatarCreationHeadAssets } from '../models/AvatarCreationHeadAssets';
import { AvatarMarketplaceOrder } from '../models/AvatarMarketplaceOrder';
import { AvatarMarketplaceOrderContext } from '../models/AvatarMarketplaceOrderContext';
import { AvatarMarketplaceOrderFulfillmentGroup } from '../models/AvatarMarketplaceOrderFulfillmentGroup';
import { AvatarMarketplaceOrderLineItem } from '../models/AvatarMarketplaceOrderLineItem';
import { AvatarMarketplaceOrderReceipt } from '../models/AvatarMarketplaceOrderReceipt';
import { BodyAssets } from '../models/BodyAssets';
import { BodyColors } from '../models/BodyColors';
import { BodyScale } from '../models/BodyScale';
import { CreatorStoreProduct } from '../models/CreatorStoreProduct';
import { DataStore } from '../models/DataStore';
import { DataStoreEntry } from '../models/DataStoreEntry';
import { DataStoreScope } from '../models/DataStoreScope';
import { Decimal } from '../models/Decimal';
import { DeveloperProduct } from '../models/DeveloperProduct';
import { DiscardMemoryStoreQueueItemsRequest } from '../models/DiscardMemoryStoreQueueItemsRequest';
import { DynamicHead } from '../models/DynamicHead';
import { GamePass } from '../models/GamePass';
import { GamePassSalesStats } from '../models/GamePassSalesStats';
import { GenerateUserThumbnailResponse } from '../models/GenerateUserThumbnailResponse';
import { GoogleProtobufAny } from '../models/GoogleProtobufAny';
import { Group } from '../models/Group';
import { GroupJoinRequest } from '../models/GroupJoinRequest';
import { GroupMembership } from '../models/GroupMembership';
import { GroupRole } from '../models/GroupRole';
import { GroupRoleRolePermissions } from '../models/GroupRoleRolePermissions';
import { GroupShout } from '../models/GroupShout';
import { Instance } from '../models/Instance';
import { Interval } from '../models/Interval';
import { InventoryItem } from '../models/InventoryItem';
import { InventoryItemAssetDetails } from '../models/InventoryItemAssetDetails';
import { InventoryItemBadgeDetails } from '../models/InventoryItemBadgeDetails';
import { InventoryItemCollectibleDetails } from '../models/InventoryItemCollectibleDetails';
import { InventoryItemGamePassDetails } from '../models/InventoryItemGamePassDetails';
import { InventoryItemPrivateServerDetails } from '../models/InventoryItemPrivateServerDetails';
import { ListGroupJoinRequestsResponse } from '../models/ListGroupJoinRequestsResponse';
import { ListGroupMembershipsResponse } from '../models/ListGroupMembershipsResponse';
import { ListGroupRolesResponse } from '../models/ListGroupRolesResponse';
import { ListInstanceChildrenResponse } from '../models/ListInstanceChildrenResponse';
import { ListInventoryItemsResponse } from '../models/ListInventoryItemsResponse';
import { ListMemoryStoreSortedMapItemsResponse } from '../models/ListMemoryStoreSortedMapItemsResponse';
import { ListUserRestrictionLogsResponse } from '../models/ListUserRestrictionLogsResponse';
import { MemoryStore } from '../models/MemoryStore';
import { MemoryStoreQueue } from '../models/MemoryStoreQueue';
import { MemoryStoreQueueItem } from '../models/MemoryStoreQueueItem';
import { MemoryStoreSortedMap } from '../models/MemoryStoreSortedMap';
import { MemoryStoreSortedMapItem } from '../models/MemoryStoreSortedMapItem';
import { Money } from '../models/Money';
import { Operation } from '../models/Operation';
import { OrderedDataStore } from '../models/OrderedDataStore';
import { OrderedDataStoreEntry } from '../models/OrderedDataStoreEntry';
import { OrderedDataStoreScope } from '../models/OrderedDataStoreScope';
import { Place } from '../models/Place';
import { ReadMemoryStoreQueueItemsResponse } from '../models/ReadMemoryStoreQueueItemsResponse';
import { RobloxEngineInstance } from '../models/RobloxEngineInstance';
import { RobloxEngineInstanceDetails } from '../models/RobloxEngineInstanceDetails';
import { RobloxEngineLocalScript } from '../models/RobloxEngineLocalScript';
import { RobloxEngineModuleScript } from '../models/RobloxEngineModuleScript';
import { RobloxEngineScript } from '../models/RobloxEngineScript';
import { Secret } from '../models/Secret';
import { Status } from '../models/Status';
import { Subscription } from '../models/Subscription';
import { SubscriptionExpirationDetails } from '../models/SubscriptionExpirationDetails';
import { SubscriptionProduct } from '../models/SubscriptionProduct';
import { Universe } from '../models/Universe';
import { UniverseBadge } from '../models/UniverseBadge';
import { UniverseBadgeCreationCost } from '../models/UniverseBadgeCreationCost';
import { UniverseBadgeStatistics } from '../models/UniverseBadgeStatistics';
import { UniverseEvent } from '../models/UniverseEvent';
import { UniverseEventCategory } from '../models/UniverseEventCategory';
import { UniverseSocialLink } from '../models/UniverseSocialLink';
import { User } from '../models/User';
import { UserNotification } from '../models/UserNotification';
import { UserNotificationPayload } from '../models/UserNotificationPayload';
import { UserNotificationPayloadAnalyticsData } from '../models/UserNotificationPayloadAnalyticsData';
import { UserNotificationPayloadJoinExperience } from '../models/UserNotificationPayloadJoinExperience';
import { UserNotificationPayloadParameterValue } from '../models/UserNotificationPayloadParameterValue';
import { UserNotificationSource } from '../models/UserNotificationSource';
import { UserRestriction } from '../models/UserRestriction';
import { UserRestrictionGameJoinRestriction } from '../models/UserRestrictionGameJoinRestriction';
import { UserRestrictionLog } from '../models/UserRestrictionLog';
import { UserRestrictionLogModerator } from '../models/UserRestrictionLogModerator';
import { UserRestrictionLogRestrictionType } from '../models/UserRestrictionLogRestrictionType';
import { UserSocialNetworkProfiles } from '../models/UserSocialNetworkProfiles';

import { ObservableCloudApi } from "./ObservableAPI";
import { CloudApiRequestFactory, CloudApiResponseProcessor} from "../apis/CloudApi";

export interface CloudApiCloudAcceptGroupJoinRequestRequest {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudAcceptGroupJoinRequest
     */
    group: string
    /**
     * The join-request ID.
     * @type string
     * @memberof CloudApicloudAcceptGroupJoinRequest
     */
    joinRequest: string
    /**
     * 
     * @type any
     * @memberof CloudApicloudAcceptGroupJoinRequest
     */
    body: any
}

export interface CloudApiCloudAcceptGroupJoinRequest0Request {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudAcceptGroupJoinRequest_1
     */
    group: string
    /**
     * The join-request ID.
     * @type string
     * @memberof CloudApicloudAcceptGroupJoinRequest_1
     */
    joinRequest: string
    /**
     * 
     * @type any
     * @memberof CloudApicloudAcceptGroupJoinRequest_1
     */
    body: any
}

export interface CloudApiCloudCreateCreatorStoreProductRequest {
    /**
     * 
     * @type CreatorStoreProduct
     * @memberof CloudApicloudCreateCreatorStoreProduct
     */
    creatorStoreProduct: CreatorStoreProduct
}

export interface CloudApiCloudCreateCreatorStoreProduct0Request {
    /**
     * 
     * @type CreatorStoreProduct
     * @memberof CloudApicloudCreateCreatorStoreProduct_2
     */
    creatorStoreProduct: CreatorStoreProduct
}

export interface CloudApiCloudCreateMemoryStoreQueueItemRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreQueueItem
     */
    universe: string
    /**
     * The queue ID.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreQueueItem
     */
    queue: string
    /**
     * 
     * @type MemoryStoreQueueItem
     * @memberof CloudApicloudCreateMemoryStoreQueueItem
     */
    memoryStoreQueueItem: MemoryStoreQueueItem
}

export interface CloudApiCloudCreateMemoryStoreQueueItem0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreQueueItem_3
     */
    universe: string
    /**
     * The queue ID.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreQueueItem_3
     */
    queue: string
    /**
     * 
     * @type MemoryStoreQueueItem
     * @memberof CloudApicloudCreateMemoryStoreQueueItem_3
     */
    memoryStoreQueueItem: MemoryStoreQueueItem
}

export interface CloudApiCloudCreateMemoryStoreSortedMapItemRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreSortedMapItem
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreSortedMapItem
     */
    sortedMap: string
    /**
     * 
     * @type MemoryStoreSortedMapItem
     * @memberof CloudApicloudCreateMemoryStoreSortedMapItem
     */
    memoryStoreSortedMapItem: MemoryStoreSortedMapItem
    /**
     * The ID to use for the memory store sorted map item, which will become the  final component of the memory store sorted map item\&#39;s resource path.   This value should be a 1-127 character string that supports alphanumeric  and special characters. This id is case sensitive. The id must be url  encoded if it contains any url breaking special characters.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreSortedMapItem
     */
    id?: string
}

export interface CloudApiCloudCreateMemoryStoreSortedMapItem0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreSortedMapItem_4
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreSortedMapItem_4
     */
    sortedMap: string
    /**
     * 
     * @type MemoryStoreSortedMapItem
     * @memberof CloudApicloudCreateMemoryStoreSortedMapItem_4
     */
    memoryStoreSortedMapItem: MemoryStoreSortedMapItem
    /**
     * The ID to use for the memory store sorted map item, which will become the  final component of the memory store sorted map item\&#39;s resource path.   This value should be a 1-127 character string that supports alphanumeric  and special characters. This id is case sensitive. The id must be url  encoded if it contains any url breaking special characters.
     * @type string
     * @memberof CloudApicloudCreateMemoryStoreSortedMapItem_4
     */
    id?: string
}

export interface CloudApiCloudCreateUserNotificationRequest {
    /**
     * The user ID.
     * @type string
     * @memberof CloudApicloudCreateUserNotification
     */
    user: string
    /**
     * 
     * @type UserNotification
     * @memberof CloudApicloudCreateUserNotification
     */
    userNotification: UserNotification
}

export interface CloudApiCloudCreateUserNotification0Request {
    /**
     * The user ID.
     * @type string
     * @memberof CloudApicloudCreateUserNotification_5
     */
    user: string
    /**
     * 
     * @type UserNotification
     * @memberof CloudApicloudCreateUserNotification_5
     */
    userNotification: UserNotification
}

export interface CloudApiCloudDeclineGroupJoinRequestRequest {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudDeclineGroupJoinRequest
     */
    group: string
    /**
     * The join-request ID.
     * @type string
     * @memberof CloudApicloudDeclineGroupJoinRequest
     */
    joinRequest: string
    /**
     * 
     * @type any
     * @memberof CloudApicloudDeclineGroupJoinRequest
     */
    body: any
}

export interface CloudApiCloudDeclineGroupJoinRequest0Request {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudDeclineGroupJoinRequest_6
     */
    group: string
    /**
     * The join-request ID.
     * @type string
     * @memberof CloudApicloudDeclineGroupJoinRequest_6
     */
    joinRequest: string
    /**
     * 
     * @type any
     * @memberof CloudApicloudDeclineGroupJoinRequest_6
     */
    body: any
}

export interface CloudApiCloudDeleteMemoryStoreSortedMapItemRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudDeleteMemoryStoreSortedMapItem
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudDeleteMemoryStoreSortedMapItem
     */
    sortedMap: string
    /**
     * The item ID.
     * @type string
     * @memberof CloudApicloudDeleteMemoryStoreSortedMapItem
     */
    item: string
}

export interface CloudApiCloudDeleteMemoryStoreSortedMapItem0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudDeleteMemoryStoreSortedMapItem_7
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudDeleteMemoryStoreSortedMapItem_7
     */
    sortedMap: string
    /**
     * The item ID.
     * @type string
     * @memberof CloudApicloudDeleteMemoryStoreSortedMapItem_7
     */
    item: string
}

export interface CloudApiCloudDiscardMemoryStoreQueueItemsRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudDiscardMemoryStoreQueueItems
     */
    universe: string
    /**
     * The queue ID.
     * @type string
     * @memberof CloudApicloudDiscardMemoryStoreQueueItems
     */
    queue: string
    /**
     * 
     * @type DiscardMemoryStoreQueueItemsRequest
     * @memberof CloudApicloudDiscardMemoryStoreQueueItems
     */
    discardMemoryStoreQueueItemsRequest: DiscardMemoryStoreQueueItemsRequest
}

export interface CloudApiCloudDiscardMemoryStoreQueueItems0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudDiscardMemoryStoreQueueItems_8
     */
    universe: string
    /**
     * The queue ID.
     * @type string
     * @memberof CloudApicloudDiscardMemoryStoreQueueItems_8
     */
    queue: string
    /**
     * 
     * @type DiscardMemoryStoreQueueItemsRequest
     * @memberof CloudApicloudDiscardMemoryStoreQueueItems_8
     */
    discardMemoryStoreQueueItemsRequest: DiscardMemoryStoreQueueItemsRequest
}

export interface CloudApiCloudFlushMemoryStoreRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudFlushMemoryStore
     */
    universe: string
    /**
     * 
     * @type any
     * @memberof CloudApicloudFlushMemoryStore
     */
    body: any
}

export interface CloudApiCloudFlushMemoryStore0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudFlushMemoryStore_9
     */
    universe: string
    /**
     * 
     * @type any
     * @memberof CloudApicloudFlushMemoryStore_9
     */
    body: any
}

export interface CloudApiCloudGenerateUserThumbnailRequest {
    /**
     * The user ID.
     * @type string
     * @memberof CloudApicloudGenerateUserThumbnail
     */
    user: string
    /**
     * Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @type number
     * @memberof CloudApicloudGenerateUserThumbnail
     */
    size?: number
    /**
     * Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @type &#39;FORMAT_UNSPECIFIED&#39; | &#39;PNG&#39; | &#39;JPEG&#39;
     * @memberof CloudApicloudGenerateUserThumbnail
     */
    format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG'
    /**
     * Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     * @type &#39;SHAPE_UNSPECIFIED&#39; | &#39;ROUND&#39; | &#39;SQUARE&#39;
     * @memberof CloudApicloudGenerateUserThumbnail
     */
    shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE'
}

export interface CloudApiCloudGenerateUserThumbnail0Request {
    /**
     * The user ID.
     * @type string
     * @memberof CloudApicloudGenerateUserThumbnail_10
     */
    user: string
    /**
     * Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @type number
     * @memberof CloudApicloudGenerateUserThumbnail_10
     */
    size?: number
    /**
     * Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @type &#39;FORMAT_UNSPECIFIED&#39; | &#39;PNG&#39; | &#39;JPEG&#39;
     * @memberof CloudApicloudGenerateUserThumbnail_10
     */
    format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG'
    /**
     * Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     * @type &#39;SHAPE_UNSPECIFIED&#39; | &#39;ROUND&#39; | &#39;SQUARE&#39;
     * @memberof CloudApicloudGenerateUserThumbnail_10
     */
    shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE'
}

export interface CloudApiCloudGetCreatorStoreProductRequest {
    /**
     * The creator-store-product ID.
     * @type string
     * @memberof CloudApicloudGetCreatorStoreProduct
     */
    creatorStoreProduct: string
}

export interface CloudApiCloudGetCreatorStoreProduct0Request {
    /**
     * The creator-store-product ID.
     * @type string
     * @memberof CloudApicloudGetCreatorStoreProduct_11
     */
    creatorStoreProduct: string
}

export interface CloudApiCloudGetGroupRequest {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudGetGroup
     */
    group: string
}

export interface CloudApiCloudGetGroupShoutRequest {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudGetGroupShout
     */
    group: string
}

export interface CloudApiCloudGetGroupShout0Request {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudGetGroupShout_12
     */
    group: string
}

export interface CloudApiCloudGetGroup0Request {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudGetGroup_13
     */
    group: string
}

export interface CloudApiCloudGetInstanceRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetInstance
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudGetInstance
     */
    place: string
    /**
     * The instance ID.
     * @type string
     * @memberof CloudApicloudGetInstance
     */
    instance: string
}

export interface CloudApiCloudGetInstance0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetInstance_14
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudGetInstance_14
     */
    place: string
    /**
     * The instance ID.
     * @type string
     * @memberof CloudApicloudGetInstance_14
     */
    instance: string
}

export interface CloudApiCloudGetMemoryStoreSortedMapItemRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetMemoryStoreSortedMapItem
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudGetMemoryStoreSortedMapItem
     */
    sortedMap: string
    /**
     * The item ID.
     * @type string
     * @memberof CloudApicloudGetMemoryStoreSortedMapItem
     */
    item: string
}

export interface CloudApiCloudGetMemoryStoreSortedMapItem0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetMemoryStoreSortedMapItem_15
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudGetMemoryStoreSortedMapItem_15
     */
    sortedMap: string
    /**
     * The item ID.
     * @type string
     * @memberof CloudApicloudGetMemoryStoreSortedMapItem_15
     */
    item: string
}

export interface CloudApiCloudGetPlaceRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetPlace
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudGetPlace
     */
    place: string
}

export interface CloudApiCloudGetPlace0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetPlace_16
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudGetPlace_16
     */
    place: string
}

export interface CloudApiCloudGetSubscriptionRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetSubscription
     */
    universe: string
    /**
     * The subscription-product ID.
     * @type string
     * @memberof CloudApicloudGetSubscription
     */
    subscriptionProduct: string
    /**
     * The subscription ID.
     * @type string
     * @memberof CloudApicloudGetSubscription
     */
    subscription: string
    /**
     * The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     * @type &#39;VIEW_UNSPECIFIED&#39; | &#39;BASIC&#39; | &#39;FULL&#39;
     * @memberof CloudApicloudGetSubscription
     */
    view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL'
}

export interface CloudApiCloudGetSubscription0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetSubscription_17
     */
    universe: string
    /**
     * The subscription-product ID.
     * @type string
     * @memberof CloudApicloudGetSubscription_17
     */
    subscriptionProduct: string
    /**
     * The subscription ID.
     * @type string
     * @memberof CloudApicloudGetSubscription_17
     */
    subscription: string
    /**
     * The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     * @type &#39;VIEW_UNSPECIFIED&#39; | &#39;BASIC&#39; | &#39;FULL&#39;
     * @memberof CloudApicloudGetSubscription_17
     */
    view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL'
}

export interface CloudApiCloudGetUniverseRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetUniverse
     */
    universe: string
}

export interface CloudApiCloudGetUniverse0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetUniverse_18
     */
    universe: string
}

export interface CloudApiCloudGetUserRequest {
    /**
     * The user ID.
     * @type string
     * @memberof CloudApicloudGetUser
     */
    user: string
}

export interface CloudApiCloudGetUserRestrictionRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction
     */
    place: string
    /**
     * The user-restriction ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction
     */
    userRestriction: string
}

export interface CloudApiCloudGetUserRestriction0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction_19
     */
    universe: string
    /**
     * The user-restriction ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction_19
     */
    userRestriction: string
}

export interface CloudApiCloudGetUserRestriction1Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction_20
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction_20
     */
    place: string
    /**
     * The user-restriction ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction_20
     */
    userRestriction: string
}

export interface CloudApiCloudGetUserRestriction2Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction_21
     */
    universe: string
    /**
     * The user-restriction ID.
     * @type string
     * @memberof CloudApicloudGetUserRestriction_21
     */
    userRestriction: string
}

export interface CloudApiCloudGetUser0Request {
    /**
     * The user ID.
     * @type string
     * @memberof CloudApicloudGetUser_22
     */
    user: string
}

export interface CloudApiCloudListGroupJoinRequestsRequest {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudListGroupJoinRequests
     */
    group: string
    /**
     * The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @type number
     * @memberof CloudApicloudListGroupJoinRequests
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListGroupJoinRequests
     */
    pageToken?: string
    /**
     * This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     * @type string
     * @memberof CloudApicloudListGroupJoinRequests
     */
    filter?: string
}

export interface CloudApiCloudListGroupJoinRequests0Request {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudListGroupJoinRequests_23
     */
    group: string
    /**
     * The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @type number
     * @memberof CloudApicloudListGroupJoinRequests_23
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListGroupJoinRequests_23
     */
    pageToken?: string
    /**
     * This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     * @type string
     * @memberof CloudApicloudListGroupJoinRequests_23
     */
    filter?: string
}

export interface CloudApiCloudListGroupMembershipsRequest {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudListGroupMemberships
     */
    group: string
    /**
     * The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @type number
     * @memberof CloudApicloudListGroupMemberships
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListGroupMemberships
     */
    pageToken?: string
    /**
     * This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     * @type string
     * @memberof CloudApicloudListGroupMemberships
     */
    filter?: string
}

export interface CloudApiCloudListGroupMemberships0Request {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudListGroupMemberships_24
     */
    group: string
    /**
     * The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @type number
     * @memberof CloudApicloudListGroupMemberships_24
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListGroupMemberships_24
     */
    pageToken?: string
    /**
     * This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     * @type string
     * @memberof CloudApicloudListGroupMemberships_24
     */
    filter?: string
}

export interface CloudApiCloudListGroupRolesRequest {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudListGroupRoles
     */
    group: string
    /**
     * The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @type number
     * @memberof CloudApicloudListGroupRoles
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListGroupRoles
     */
    pageToken?: string
}

export interface CloudApiCloudListGroupRoles0Request {
    /**
     * The group ID.
     * @type string
     * @memberof CloudApicloudListGroupRoles_25
     */
    group: string
    /**
     * The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @type number
     * @memberof CloudApicloudListGroupRoles_25
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListGroupRoles_25
     */
    pageToken?: string
}

export interface CloudApiCloudListInstanceChildrenRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudListInstanceChildren
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudListInstanceChildren
     */
    place: string
    /**
     * The instance ID.
     * @type string
     * @memberof CloudApicloudListInstanceChildren
     */
    instance: string
    /**
     * The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @type number
     * @memberof CloudApicloudListInstanceChildren
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     * @type string
     * @memberof CloudApicloudListInstanceChildren
     */
    pageToken?: string
}

export interface CloudApiCloudListInstanceChildren0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudListInstanceChildren_26
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudListInstanceChildren_26
     */
    place: string
    /**
     * The instance ID.
     * @type string
     * @memberof CloudApicloudListInstanceChildren_26
     */
    instance: string
    /**
     * The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @type number
     * @memberof CloudApicloudListInstanceChildren_26
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     * @type string
     * @memberof CloudApicloudListInstanceChildren_26
     */
    pageToken?: string
}

export interface CloudApiCloudListInventoryItemsRequest {
    /**
     * The user ID.
     * @type string
     * @memberof CloudApicloudListInventoryItems
     */
    user: string
    /**
     * The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @type number
     * @memberof CloudApicloudListInventoryItems
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListInventoryItems
     */
    pageToken?: string
    /**
     * This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     * @type string
     * @memberof CloudApicloudListInventoryItems
     */
    filter?: string
}

export interface CloudApiCloudListInventoryItems0Request {
    /**
     * The user ID.
     * @type string
     * @memberof CloudApicloudListInventoryItems_27
     */
    user: string
    /**
     * The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @type number
     * @memberof CloudApicloudListInventoryItems_27
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListInventoryItems_27
     */
    pageToken?: string
    /**
     * This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     * @type string
     * @memberof CloudApicloudListInventoryItems_27
     */
    filter?: string
}

export interface CloudApiCloudListMemoryStoreSortedMapItemsRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems
     */
    sortedMap: string
    /**
     * The maximum number of memory store sorted map items to return. The service  might return fewer than this value. If unspecified, at most 1 memory store  sorted map items are returned. The maximum value is 100 and higher values  are set to 100.
     * @type number
     * @memberof CloudApicloudListMemoryStoreSortedMapItems
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems
     */
    pageToken?: string
    /**
     * If specified, results are ordered according to the specified fields.   Values must be a comma-separated list of fields, with an optional,  per-field \&quot; desc\&quot; suffix to sort by descending rather than ascending  values. You can access subfields with a &#x60;.&#x60; operator.   Results may be ordered by the following fields: id.   Example: \&quot;id desc\&quot;
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems
     */
    orderBy?: string
    /**
     * This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;id&#x60;  and &#x60;sortKey&#x60; fields are supported. In terms of operators, only &#x60;&lt;&#x60;, &#x60;&gt;&#x60;  and &#x60;&amp;&amp;&#x60; are allowed\&#39;   Example: &#x60;id &gt; \&quot;key-001\&quot; &amp;&amp; id &lt; \&quot;key-100\&quot;&#x60;
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems
     */
    filter?: string
}

export interface CloudApiCloudListMemoryStoreSortedMapItems0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems_28
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems_28
     */
    sortedMap: string
    /**
     * The maximum number of memory store sorted map items to return. The service  might return fewer than this value. If unspecified, at most 1 memory store  sorted map items are returned. The maximum value is 100 and higher values  are set to 100.
     * @type number
     * @memberof CloudApicloudListMemoryStoreSortedMapItems_28
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems_28
     */
    pageToken?: string
    /**
     * If specified, results are ordered according to the specified fields.   Values must be a comma-separated list of fields, with an optional,  per-field \&quot; desc\&quot; suffix to sort by descending rather than ascending  values. You can access subfields with a &#x60;.&#x60; operator.   Results may be ordered by the following fields: id.   Example: \&quot;id desc\&quot;
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems_28
     */
    orderBy?: string
    /**
     * This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;id&#x60;  and &#x60;sortKey&#x60; fields are supported. In terms of operators, only &#x60;&lt;&#x60;, &#x60;&gt;&#x60;  and &#x60;&amp;&amp;&#x60; are allowed\&#39;   Example: &#x60;id &gt; \&quot;key-001\&quot; &amp;&amp; id &lt; \&quot;key-100\&quot;&#x60;
     * @type string
     * @memberof CloudApicloudListMemoryStoreSortedMapItems_28
     */
    filter?: string
}

export interface CloudApiCloudListUserRestrictionLogsRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudListUserRestrictionLogs
     */
    universe: string
    /**
     * The maximum number of UserRestrictionLogs to return. The service may return  fewer than this value. If unspecified, at most 10 UserRestrictionLogs are  returned. The maximum value is 100 and higher values are set to 100.
     * @type number
     * @memberof CloudApicloudListUserRestrictionLogs
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListUserRestrictionLogs
     */
    pageToken?: string
    /**
     * This field may be set to filter the logs returned.   The &#x60;filter&#x60; field supports a very small number of CEL:   * &#x60;user&#x60;  * &#x60;place&#x60;  * The &#x60;&#x3D;&#x3D;&#x60; comparison operator is available.  * The &#x60;&amp;&amp;&#x60; logical operator is also supported.   As an example, filtering for a user and a place takes the form  &#x60;filter&#x3D;\&quot;user &#x3D;&#x3D; \&#39;users/123\&#39;\&quot; &amp;&amp; \&quot;place &#x3D;&#x3D; \&#39;places/456\&#39;\&quot;&#x60;
     * @type string
     * @memberof CloudApicloudListUserRestrictionLogs
     */
    filter?: string
}

export interface CloudApiCloudListUserRestrictionLogs0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudListUserRestrictionLogs_29
     */
    universe: string
    /**
     * The maximum number of UserRestrictionLogs to return. The service may return  fewer than this value. If unspecified, at most 10 UserRestrictionLogs are  returned. The maximum value is 100 and higher values are set to 100.
     * @type number
     * @memberof CloudApicloudListUserRestrictionLogs_29
     */
    maxPageSize?: number
    /**
     * A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @type string
     * @memberof CloudApicloudListUserRestrictionLogs_29
     */
    pageToken?: string
    /**
     * This field may be set to filter the logs returned.   The &#x60;filter&#x60; field supports a very small number of CEL:   * &#x60;user&#x60;  * &#x60;place&#x60;  * The &#x60;&#x3D;&#x3D;&#x60; comparison operator is available.  * The &#x60;&amp;&amp;&#x60; logical operator is also supported.   As an example, filtering for a user and a place takes the form  &#x60;filter&#x3D;\&quot;user &#x3D;&#x3D; \&#39;users/123\&#39;\&quot; &amp;&amp; \&quot;place &#x3D;&#x3D; \&#39;places/456\&#39;\&quot;&#x60;
     * @type string
     * @memberof CloudApicloudListUserRestrictionLogs_29
     */
    filter?: string
}

export interface CloudApiCloudReadMemoryStoreQueueItemsRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudReadMemoryStoreQueueItems
     */
    universe: string
    /**
     * The queue ID.
     * @type string
     * @memberof CloudApicloudReadMemoryStoreQueueItems
     */
    queue: string
    /**
     * The number of items to read from the queue  If unspecified, 1 item will be returned.  The maximum value is 200; values above 200 will be coerced to 200.
     * @type number
     * @memberof CloudApicloudReadMemoryStoreQueueItems
     */
    count?: number
    /**
     * If &#x60;all_or_nothing&#x60; is true and the requested number of objects is not  available, will return a 404 Error.   Otherwise, will return the path and read_id of the read operation and a  list of the MemoryStoreQueue items.
     * @type boolean
     * @memberof CloudApicloudReadMemoryStoreQueueItems
     */
    allOrNothing?: boolean
    /**
     * Invisibility window for items read, in seconds.   Items read are invisible in subsequent reads during the invisibility  window duration.   It must be written in seconds greater than 0 and end with &#x60;s&#x60;.   Defaults to &#x60;30s&#x60;.
     * @type string
     * @memberof CloudApicloudReadMemoryStoreQueueItems
     */
    invisibilityWindow?: string
}

export interface CloudApiCloudReadMemoryStoreQueueItems0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudReadMemoryStoreQueueItems_30
     */
    universe: string
    /**
     * The queue ID.
     * @type string
     * @memberof CloudApicloudReadMemoryStoreQueueItems_30
     */
    queue: string
    /**
     * The number of items to read from the queue  If unspecified, 1 item will be returned.  The maximum value is 200; values above 200 will be coerced to 200.
     * @type number
     * @memberof CloudApicloudReadMemoryStoreQueueItems_30
     */
    count?: number
    /**
     * If &#x60;all_or_nothing&#x60; is true and the requested number of objects is not  available, will return a 404 Error.   Otherwise, will return the path and read_id of the read operation and a  list of the MemoryStoreQueue items.
     * @type boolean
     * @memberof CloudApicloudReadMemoryStoreQueueItems_30
     */
    allOrNothing?: boolean
    /**
     * Invisibility window for items read, in seconds.   Items read are invisible in subsequent reads during the invisibility  window duration.   It must be written in seconds greater than 0 and end with &#x60;s&#x60;.   Defaults to &#x60;30s&#x60;.
     * @type string
     * @memberof CloudApicloudReadMemoryStoreQueueItems_30
     */
    invisibilityWindow?: string
}

export interface CloudApiCloudRestartUniverseServersRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudRestartUniverseServers
     */
    universe: string
    /**
     * 
     * @type any
     * @memberof CloudApicloudRestartUniverseServers
     */
    body: any
}

export interface CloudApiCloudRestartUniverseServers0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudRestartUniverseServers_31
     */
    universe: string
    /**
     * 
     * @type any
     * @memberof CloudApicloudRestartUniverseServers_31
     */
    body: any
}

export interface CloudApiCloudUpdateCreatorStoreProductRequest {
    /**
     * The creator-store-product ID.
     * @type string
     * @memberof CloudApicloudUpdateCreatorStoreProduct
     */
    creatorStoreProduct: string
    /**
     * 
     * @type CreatorStoreProduct
     * @memberof CloudApicloudUpdateCreatorStoreProduct
     */
    creatorStoreProduct2: CreatorStoreProduct
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateCreatorStoreProduct
     */
    updateMask?: string
    /**
     * If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     * @type boolean
     * @memberof CloudApicloudUpdateCreatorStoreProduct
     */
    allowMissing?: boolean
}

export interface CloudApiCloudUpdateCreatorStoreProduct0Request {
    /**
     * The creator-store-product ID.
     * @type string
     * @memberof CloudApicloudUpdateCreatorStoreProduct_32
     */
    creatorStoreProduct: string
    /**
     * 
     * @type CreatorStoreProduct
     * @memberof CloudApicloudUpdateCreatorStoreProduct_32
     */
    creatorStoreProduct2: CreatorStoreProduct
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateCreatorStoreProduct_32
     */
    updateMask?: string
    /**
     * If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     * @type boolean
     * @memberof CloudApicloudUpdateCreatorStoreProduct_32
     */
    allowMissing?: boolean
}

export interface CloudApiCloudUpdateInstanceRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateInstance
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudUpdateInstance
     */
    place: string
    /**
     * The instance ID.
     * @type string
     * @memberof CloudApicloudUpdateInstance
     */
    instance: string
    /**
     * 
     * @type Instance
     * @memberof CloudApicloudUpdateInstance
     */
    instance2: Instance
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateInstance
     */
    updateMask?: string
}

export interface CloudApiCloudUpdateInstance0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateInstance_33
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudUpdateInstance_33
     */
    place: string
    /**
     * The instance ID.
     * @type string
     * @memberof CloudApicloudUpdateInstance_33
     */
    instance: string
    /**
     * 
     * @type Instance
     * @memberof CloudApicloudUpdateInstance_33
     */
    instance2: Instance
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateInstance_33
     */
    updateMask?: string
}

export interface CloudApiCloudUpdateMemoryStoreSortedMapItemRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem
     */
    sortedMap: string
    /**
     * The item ID.
     * @type string
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem
     */
    item: string
    /**
     * 
     * @type MemoryStoreSortedMapItem
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem
     */
    memoryStoreSortedMapItem: MemoryStoreSortedMapItem
    /**
     * If set to true, and the memory store sorted map item is not found, a memory  store sorted map item is created.
     * @type boolean
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem
     */
    allowMissing?: boolean
}

export interface CloudApiCloudUpdateMemoryStoreSortedMapItem0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem_34
     */
    universe: string
    /**
     * The sorted-map ID.
     * @type string
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem_34
     */
    sortedMap: string
    /**
     * The item ID.
     * @type string
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem_34
     */
    item: string
    /**
     * 
     * @type MemoryStoreSortedMapItem
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem_34
     */
    memoryStoreSortedMapItem: MemoryStoreSortedMapItem
    /**
     * If set to true, and the memory store sorted map item is not found, a memory  store sorted map item is created.
     * @type boolean
     * @memberof CloudApicloudUpdateMemoryStoreSortedMapItem_34
     */
    allowMissing?: boolean
}

export interface CloudApiCloudUpdatePlaceRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdatePlace
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudUpdatePlace
     */
    place: string
    /**
     * 
     * @type Place
     * @memberof CloudApicloudUpdatePlace
     */
    place2: Place
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdatePlace
     */
    updateMask?: string
}

export interface CloudApiCloudUpdatePlace0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdatePlace_35
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudUpdatePlace_35
     */
    place: string
    /**
     * 
     * @type Place
     * @memberof CloudApicloudUpdatePlace_35
     */
    place2: Place
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdatePlace_35
     */
    updateMask?: string
}

export interface CloudApiCloudUpdateUniverseRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateUniverse
     */
    universe: string
    /**
     * 
     * @type Universe
     * @memberof CloudApicloudUpdateUniverse
     */
    universe2: Universe
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateUniverse
     */
    updateMask?: string
}

export interface CloudApiCloudUpdateUniverse0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateUniverse_36
     */
    universe: string
    /**
     * 
     * @type Universe
     * @memberof CloudApicloudUpdateUniverse_36
     */
    universe2: Universe
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateUniverse_36
     */
    updateMask?: string
}

export interface CloudApiCloudUpdateUserRestrictionRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction
     */
    place: string
    /**
     * The user-restriction ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction
     */
    userRestriction: string
    /**
     * 
     * @type UserRestriction
     * @memberof CloudApicloudUpdateUserRestriction
     */
    userRestriction2: UserRestriction
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction
     */
    updateMask?: string
    /**
     * The unique key to use for idempotency.  string key &#x3D; 1;
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction
     */
    idempotencyKeyKey?: string
    /**
     * The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     * @type Date
     * @memberof CloudApicloudUpdateUserRestriction
     */
    idempotencyKeyFirstSent?: Date
}

export interface CloudApiCloudUpdateUserRestriction0Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_37
     */
    universe: string
    /**
     * The user-restriction ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_37
     */
    userRestriction: string
    /**
     * 
     * @type UserRestriction
     * @memberof CloudApicloudUpdateUserRestriction_37
     */
    userRestriction2: UserRestriction
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_37
     */
    updateMask?: string
    /**
     * The unique key to use for idempotency.  string key &#x3D; 1;
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_37
     */
    idempotencyKeyKey?: string
    /**
     * The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     * @type Date
     * @memberof CloudApicloudUpdateUserRestriction_37
     */
    idempotencyKeyFirstSent?: Date
}

export interface CloudApiCloudUpdateUserRestriction1Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_38
     */
    universe: string
    /**
     * The place ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_38
     */
    place: string
    /**
     * The user-restriction ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_38
     */
    userRestriction: string
    /**
     * 
     * @type UserRestriction
     * @memberof CloudApicloudUpdateUserRestriction_38
     */
    userRestriction2: UserRestriction
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_38
     */
    updateMask?: string
    /**
     * The unique key to use for idempotency.  string key &#x3D; 1;
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_38
     */
    idempotencyKeyKey?: string
    /**
     * The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     * @type Date
     * @memberof CloudApicloudUpdateUserRestriction_38
     */
    idempotencyKeyFirstSent?: Date
}

export interface CloudApiCloudUpdateUserRestriction2Request {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_39
     */
    universe: string
    /**
     * The user-restriction ID.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_39
     */
    userRestriction: string
    /**
     * 
     * @type UserRestriction
     * @memberof CloudApicloudUpdateUserRestriction_39
     */
    userRestriction2: UserRestriction
    /**
     * The list of fields to update.
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_39
     */
    updateMask?: string
    /**
     * The unique key to use for idempotency.  string key &#x3D; 1;
     * @type string
     * @memberof CloudApicloudUpdateUserRestriction_39
     */
    idempotencyKeyKey?: string
    /**
     * The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     * @type Date
     * @memberof CloudApicloudUpdateUserRestriction_39
     */
    idempotencyKeyFirstSent?: Date
}

export class ObjectCloudApi {
    private api: ObservableCloudApi

    public constructor(configuration: Configuration, requestFactory?: CloudApiRequestFactory, responseProcessor?: CloudApiResponseProcessor) {
        this.api = new ObservableCloudApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accepts a join request.
     * @param param the request object
     */
    public cloudAcceptGroupJoinRequestWithHttpInfo(param: CloudApiCloudAcceptGroupJoinRequestRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cloudAcceptGroupJoinRequestWithHttpInfo(param.group, param.joinRequest, param.body,  options).toPromise();
    }

    /**
     * Accepts a join request.
     * @param param the request object
     */
    public cloudAcceptGroupJoinRequest(param: CloudApiCloudAcceptGroupJoinRequestRequest, options?: Configuration): Promise<void> {
        return this.api.cloudAcceptGroupJoinRequest(param.group, param.joinRequest, param.body,  options).toPromise();
    }

    /**
     * Accepts a join request.
     * @param param the request object
     */
    public cloudAcceptGroupJoinRequest_1WithHttpInfo(param: CloudApiCloudAcceptGroupJoinRequest0Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cloudAcceptGroupJoinRequest_1WithHttpInfo(param.group, param.joinRequest, param.body,  options).toPromise();
    }

    /**
     * Accepts a join request.
     * @param param the request object
     */
    public cloudAcceptGroupJoinRequest_1(param: CloudApiCloudAcceptGroupJoinRequest0Request, options?: Configuration): Promise<void> {
        return this.api.cloudAcceptGroupJoinRequest_1(param.group, param.joinRequest, param.body,  options).toPromise();
    }

    /**
     * Add a Creator Store product.
     * @param param the request object
     */
    public cloudCreateCreatorStoreProductWithHttpInfo(param: CloudApiCloudCreateCreatorStoreProductRequest, options?: Configuration): Promise<HttpInfo<CreatorStoreProduct>> {
        return this.api.cloudCreateCreatorStoreProductWithHttpInfo(param.creatorStoreProduct,  options).toPromise();
    }

    /**
     * Add a Creator Store product.
     * @param param the request object
     */
    public cloudCreateCreatorStoreProduct(param: CloudApiCloudCreateCreatorStoreProductRequest, options?: Configuration): Promise<CreatorStoreProduct> {
        return this.api.cloudCreateCreatorStoreProduct(param.creatorStoreProduct,  options).toPromise();
    }

    /**
     * Add a Creator Store product.
     * @param param the request object
     */
    public cloudCreateCreatorStoreProduct_2WithHttpInfo(param: CloudApiCloudCreateCreatorStoreProduct0Request, options?: Configuration): Promise<HttpInfo<CreatorStoreProduct>> {
        return this.api.cloudCreateCreatorStoreProduct_2WithHttpInfo(param.creatorStoreProduct,  options).toPromise();
    }

    /**
     * Add a Creator Store product.
     * @param param the request object
     */
    public cloudCreateCreatorStoreProduct_2(param: CloudApiCloudCreateCreatorStoreProduct0Request, options?: Configuration): Promise<CreatorStoreProduct> {
        return this.api.cloudCreateCreatorStoreProduct_2(param.creatorStoreProduct,  options).toPromise();
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param param the request object
     */
    public cloudCreateMemoryStoreQueueItemWithHttpInfo(param: CloudApiCloudCreateMemoryStoreQueueItemRequest, options?: Configuration): Promise<HttpInfo<MemoryStoreQueueItem>> {
        return this.api.cloudCreateMemoryStoreQueueItemWithHttpInfo(param.universe, param.queue, param.memoryStoreQueueItem,  options).toPromise();
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param param the request object
     */
    public cloudCreateMemoryStoreQueueItem(param: CloudApiCloudCreateMemoryStoreQueueItemRequest, options?: Configuration): Promise<MemoryStoreQueueItem> {
        return this.api.cloudCreateMemoryStoreQueueItem(param.universe, param.queue, param.memoryStoreQueueItem,  options).toPromise();
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param param the request object
     */
    public cloudCreateMemoryStoreQueueItem_3WithHttpInfo(param: CloudApiCloudCreateMemoryStoreQueueItem0Request, options?: Configuration): Promise<HttpInfo<MemoryStoreQueueItem>> {
        return this.api.cloudCreateMemoryStoreQueueItem_3WithHttpInfo(param.universe, param.queue, param.memoryStoreQueueItem,  options).toPromise();
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param param the request object
     */
    public cloudCreateMemoryStoreQueueItem_3(param: CloudApiCloudCreateMemoryStoreQueueItem0Request, options?: Configuration): Promise<MemoryStoreQueueItem> {
        return this.api.cloudCreateMemoryStoreQueueItem_3(param.universe, param.queue, param.memoryStoreQueueItem,  options).toPromise();
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param param the request object
     */
    public cloudCreateMemoryStoreSortedMapItemWithHttpInfo(param: CloudApiCloudCreateMemoryStoreSortedMapItemRequest, options?: Configuration): Promise<HttpInfo<MemoryStoreSortedMapItem>> {
        return this.api.cloudCreateMemoryStoreSortedMapItemWithHttpInfo(param.universe, param.sortedMap, param.memoryStoreSortedMapItem, param.id,  options).toPromise();
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param param the request object
     */
    public cloudCreateMemoryStoreSortedMapItem(param: CloudApiCloudCreateMemoryStoreSortedMapItemRequest, options?: Configuration): Promise<MemoryStoreSortedMapItem> {
        return this.api.cloudCreateMemoryStoreSortedMapItem(param.universe, param.sortedMap, param.memoryStoreSortedMapItem, param.id,  options).toPromise();
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param param the request object
     */
    public cloudCreateMemoryStoreSortedMapItem_4WithHttpInfo(param: CloudApiCloudCreateMemoryStoreSortedMapItem0Request, options?: Configuration): Promise<HttpInfo<MemoryStoreSortedMapItem>> {
        return this.api.cloudCreateMemoryStoreSortedMapItem_4WithHttpInfo(param.universe, param.sortedMap, param.memoryStoreSortedMapItem, param.id,  options).toPromise();
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param param the request object
     */
    public cloudCreateMemoryStoreSortedMapItem_4(param: CloudApiCloudCreateMemoryStoreSortedMapItem0Request, options?: Configuration): Promise<MemoryStoreSortedMapItem> {
        return this.api.cloudCreateMemoryStoreSortedMapItem_4(param.universe, param.sortedMap, param.memoryStoreSortedMapItem, param.id,  options).toPromise();
    }

    /**
     * Sends a notification to a user.
     * @param param the request object
     */
    public cloudCreateUserNotificationWithHttpInfo(param: CloudApiCloudCreateUserNotificationRequest, options?: Configuration): Promise<HttpInfo<UserNotification>> {
        return this.api.cloudCreateUserNotificationWithHttpInfo(param.user, param.userNotification,  options).toPromise();
    }

    /**
     * Sends a notification to a user.
     * @param param the request object
     */
    public cloudCreateUserNotification(param: CloudApiCloudCreateUserNotificationRequest, options?: Configuration): Promise<UserNotification> {
        return this.api.cloudCreateUserNotification(param.user, param.userNotification,  options).toPromise();
    }

    /**
     * Sends a notification to a user.
     * @param param the request object
     */
    public cloudCreateUserNotification_5WithHttpInfo(param: CloudApiCloudCreateUserNotification0Request, options?: Configuration): Promise<HttpInfo<UserNotification>> {
        return this.api.cloudCreateUserNotification_5WithHttpInfo(param.user, param.userNotification,  options).toPromise();
    }

    /**
     * Sends a notification to a user.
     * @param param the request object
     */
    public cloudCreateUserNotification_5(param: CloudApiCloudCreateUserNotification0Request, options?: Configuration): Promise<UserNotification> {
        return this.api.cloudCreateUserNotification_5(param.user, param.userNotification,  options).toPromise();
    }

    /**
     * Declines a join request.
     * @param param the request object
     */
    public cloudDeclineGroupJoinRequestWithHttpInfo(param: CloudApiCloudDeclineGroupJoinRequestRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cloudDeclineGroupJoinRequestWithHttpInfo(param.group, param.joinRequest, param.body,  options).toPromise();
    }

    /**
     * Declines a join request.
     * @param param the request object
     */
    public cloudDeclineGroupJoinRequest(param: CloudApiCloudDeclineGroupJoinRequestRequest, options?: Configuration): Promise<void> {
        return this.api.cloudDeclineGroupJoinRequest(param.group, param.joinRequest, param.body,  options).toPromise();
    }

    /**
     * Declines a join request.
     * @param param the request object
     */
    public cloudDeclineGroupJoinRequest_6WithHttpInfo(param: CloudApiCloudDeclineGroupJoinRequest0Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cloudDeclineGroupJoinRequest_6WithHttpInfo(param.group, param.joinRequest, param.body,  options).toPromise();
    }

    /**
     * Declines a join request.
     * @param param the request object
     */
    public cloudDeclineGroupJoinRequest_6(param: CloudApiCloudDeclineGroupJoinRequest0Request, options?: Configuration): Promise<void> {
        return this.api.cloudDeclineGroupJoinRequest_6(param.group, param.joinRequest, param.body,  options).toPromise();
    }

    /**
     * Deletes the specified item from the map.
     * @param param the request object
     */
    public cloudDeleteMemoryStoreSortedMapItemWithHttpInfo(param: CloudApiCloudDeleteMemoryStoreSortedMapItemRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cloudDeleteMemoryStoreSortedMapItemWithHttpInfo(param.universe, param.sortedMap, param.item,  options).toPromise();
    }

    /**
     * Deletes the specified item from the map.
     * @param param the request object
     */
    public cloudDeleteMemoryStoreSortedMapItem(param: CloudApiCloudDeleteMemoryStoreSortedMapItemRequest, options?: Configuration): Promise<void> {
        return this.api.cloudDeleteMemoryStoreSortedMapItem(param.universe, param.sortedMap, param.item,  options).toPromise();
    }

    /**
     * Deletes the specified item from the map.
     * @param param the request object
     */
    public cloudDeleteMemoryStoreSortedMapItem_7WithHttpInfo(param: CloudApiCloudDeleteMemoryStoreSortedMapItem0Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cloudDeleteMemoryStoreSortedMapItem_7WithHttpInfo(param.universe, param.sortedMap, param.item,  options).toPromise();
    }

    /**
     * Deletes the specified item from the map.
     * @param param the request object
     */
    public cloudDeleteMemoryStoreSortedMapItem_7(param: CloudApiCloudDeleteMemoryStoreSortedMapItem0Request, options?: Configuration): Promise<void> {
        return this.api.cloudDeleteMemoryStoreSortedMapItem_7(param.universe, param.sortedMap, param.item,  options).toPromise();
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param param the request object
     */
    public cloudDiscardMemoryStoreQueueItemsWithHttpInfo(param: CloudApiCloudDiscardMemoryStoreQueueItemsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cloudDiscardMemoryStoreQueueItemsWithHttpInfo(param.universe, param.queue, param.discardMemoryStoreQueueItemsRequest,  options).toPromise();
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param param the request object
     */
    public cloudDiscardMemoryStoreQueueItems(param: CloudApiCloudDiscardMemoryStoreQueueItemsRequest, options?: Configuration): Promise<void> {
        return this.api.cloudDiscardMemoryStoreQueueItems(param.universe, param.queue, param.discardMemoryStoreQueueItemsRequest,  options).toPromise();
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param param the request object
     */
    public cloudDiscardMemoryStoreQueueItems_8WithHttpInfo(param: CloudApiCloudDiscardMemoryStoreQueueItems0Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cloudDiscardMemoryStoreQueueItems_8WithHttpInfo(param.universe, param.queue, param.discardMemoryStoreQueueItemsRequest,  options).toPromise();
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param param the request object
     */
    public cloudDiscardMemoryStoreQueueItems_8(param: CloudApiCloudDiscardMemoryStoreQueueItems0Request, options?: Configuration): Promise<void> {
        return this.api.cloudDiscardMemoryStoreQueueItems_8(param.universe, param.queue, param.discardMemoryStoreQueueItemsRequest,  options).toPromise();
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param param the request object
     */
    public cloudFlushMemoryStoreWithHttpInfo(param: CloudApiCloudFlushMemoryStoreRequest, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudFlushMemoryStoreWithHttpInfo(param.universe, param.body,  options).toPromise();
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param param the request object
     */
    public cloudFlushMemoryStore(param: CloudApiCloudFlushMemoryStoreRequest, options?: Configuration): Promise<Operation> {
        return this.api.cloudFlushMemoryStore(param.universe, param.body,  options).toPromise();
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param param the request object
     */
    public cloudFlushMemoryStore_9WithHttpInfo(param: CloudApiCloudFlushMemoryStore0Request, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudFlushMemoryStore_9WithHttpInfo(param.universe, param.body,  options).toPromise();
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param param the request object
     */
    public cloudFlushMemoryStore_9(param: CloudApiCloudFlushMemoryStore0Request, options?: Configuration): Promise<Operation> {
        return this.api.cloudFlushMemoryStore_9(param.universe, param.body,  options).toPromise();
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param param the request object
     */
    public cloudGenerateUserThumbnailWithHttpInfo(param: CloudApiCloudGenerateUserThumbnailRequest, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudGenerateUserThumbnailWithHttpInfo(param.user, param.size, param.format, param.shape,  options).toPromise();
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param param the request object
     */
    public cloudGenerateUserThumbnail(param: CloudApiCloudGenerateUserThumbnailRequest, options?: Configuration): Promise<Operation> {
        return this.api.cloudGenerateUserThumbnail(param.user, param.size, param.format, param.shape,  options).toPromise();
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param param the request object
     */
    public cloudGenerateUserThumbnail_10WithHttpInfo(param: CloudApiCloudGenerateUserThumbnail0Request, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudGenerateUserThumbnail_10WithHttpInfo(param.user, param.size, param.format, param.shape,  options).toPromise();
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param param the request object
     */
    public cloudGenerateUserThumbnail_10(param: CloudApiCloudGenerateUserThumbnail0Request, options?: Configuration): Promise<Operation> {
        return this.api.cloudGenerateUserThumbnail_10(param.user, param.size, param.format, param.shape,  options).toPromise();
    }

    /**
     * Get a Creator Store product.
     * @param param the request object
     */
    public cloudGetCreatorStoreProductWithHttpInfo(param: CloudApiCloudGetCreatorStoreProductRequest, options?: Configuration): Promise<HttpInfo<CreatorStoreProduct>> {
        return this.api.cloudGetCreatorStoreProductWithHttpInfo(param.creatorStoreProduct,  options).toPromise();
    }

    /**
     * Get a Creator Store product.
     * @param param the request object
     */
    public cloudGetCreatorStoreProduct(param: CloudApiCloudGetCreatorStoreProductRequest, options?: Configuration): Promise<CreatorStoreProduct> {
        return this.api.cloudGetCreatorStoreProduct(param.creatorStoreProduct,  options).toPromise();
    }

    /**
     * Get a Creator Store product.
     * @param param the request object
     */
    public cloudGetCreatorStoreProduct_11WithHttpInfo(param: CloudApiCloudGetCreatorStoreProduct0Request, options?: Configuration): Promise<HttpInfo<CreatorStoreProduct>> {
        return this.api.cloudGetCreatorStoreProduct_11WithHttpInfo(param.creatorStoreProduct,  options).toPromise();
    }

    /**
     * Get a Creator Store product.
     * @param param the request object
     */
    public cloudGetCreatorStoreProduct_11(param: CloudApiCloudGetCreatorStoreProduct0Request, options?: Configuration): Promise<CreatorStoreProduct> {
        return this.api.cloudGetCreatorStoreProduct_11(param.creatorStoreProduct,  options).toPromise();
    }

    /**
     * Gets the specified group.
     * @param param the request object
     */
    public cloudGetGroupWithHttpInfo(param: CloudApiCloudGetGroupRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.cloudGetGroupWithHttpInfo(param.group,  options).toPromise();
    }

    /**
     * Gets the specified group.
     * @param param the request object
     */
    public cloudGetGroup(param: CloudApiCloudGetGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.cloudGetGroup(param.group,  options).toPromise();
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param param the request object
     */
    public cloudGetGroupShoutWithHttpInfo(param: CloudApiCloudGetGroupShoutRequest, options?: Configuration): Promise<HttpInfo<GroupShout>> {
        return this.api.cloudGetGroupShoutWithHttpInfo(param.group,  options).toPromise();
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param param the request object
     */
    public cloudGetGroupShout(param: CloudApiCloudGetGroupShoutRequest, options?: Configuration): Promise<GroupShout> {
        return this.api.cloudGetGroupShout(param.group,  options).toPromise();
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param param the request object
     */
    public cloudGetGroupShout_12WithHttpInfo(param: CloudApiCloudGetGroupShout0Request, options?: Configuration): Promise<HttpInfo<GroupShout>> {
        return this.api.cloudGetGroupShout_12WithHttpInfo(param.group,  options).toPromise();
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param param the request object
     */
    public cloudGetGroupShout_12(param: CloudApiCloudGetGroupShout0Request, options?: Configuration): Promise<GroupShout> {
        return this.api.cloudGetGroupShout_12(param.group,  options).toPromise();
    }

    /**
     * Gets the specified group.
     * @param param the request object
     */
    public cloudGetGroup_13WithHttpInfo(param: CloudApiCloudGetGroup0Request, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.cloudGetGroup_13WithHttpInfo(param.group,  options).toPromise();
    }

    /**
     * Gets the specified group.
     * @param param the request object
     */
    public cloudGetGroup_13(param: CloudApiCloudGetGroup0Request, options?: Configuration): Promise<Group> {
        return this.api.cloudGetGroup_13(param.group,  options).toPromise();
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param param the request object
     */
    public cloudGetInstanceWithHttpInfo(param: CloudApiCloudGetInstanceRequest, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudGetInstanceWithHttpInfo(param.universe, param.place, param.instance,  options).toPromise();
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param param the request object
     */
    public cloudGetInstance(param: CloudApiCloudGetInstanceRequest, options?: Configuration): Promise<Operation> {
        return this.api.cloudGetInstance(param.universe, param.place, param.instance,  options).toPromise();
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param param the request object
     */
    public cloudGetInstance_14WithHttpInfo(param: CloudApiCloudGetInstance0Request, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudGetInstance_14WithHttpInfo(param.universe, param.place, param.instance,  options).toPromise();
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param param the request object
     */
    public cloudGetInstance_14(param: CloudApiCloudGetInstance0Request, options?: Configuration): Promise<Operation> {
        return this.api.cloudGetInstance_14(param.universe, param.place, param.instance,  options).toPromise();
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param param the request object
     */
    public cloudGetMemoryStoreSortedMapItemWithHttpInfo(param: CloudApiCloudGetMemoryStoreSortedMapItemRequest, options?: Configuration): Promise<HttpInfo<MemoryStoreSortedMapItem>> {
        return this.api.cloudGetMemoryStoreSortedMapItemWithHttpInfo(param.universe, param.sortedMap, param.item,  options).toPromise();
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param param the request object
     */
    public cloudGetMemoryStoreSortedMapItem(param: CloudApiCloudGetMemoryStoreSortedMapItemRequest, options?: Configuration): Promise<MemoryStoreSortedMapItem> {
        return this.api.cloudGetMemoryStoreSortedMapItem(param.universe, param.sortedMap, param.item,  options).toPromise();
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param param the request object
     */
    public cloudGetMemoryStoreSortedMapItem_15WithHttpInfo(param: CloudApiCloudGetMemoryStoreSortedMapItem0Request, options?: Configuration): Promise<HttpInfo<MemoryStoreSortedMapItem>> {
        return this.api.cloudGetMemoryStoreSortedMapItem_15WithHttpInfo(param.universe, param.sortedMap, param.item,  options).toPromise();
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param param the request object
     */
    public cloudGetMemoryStoreSortedMapItem_15(param: CloudApiCloudGetMemoryStoreSortedMapItem0Request, options?: Configuration): Promise<MemoryStoreSortedMapItem> {
        return this.api.cloudGetMemoryStoreSortedMapItem_15(param.universe, param.sortedMap, param.item,  options).toPromise();
    }

    /**
     * Gets the specified place.
     * @param param the request object
     */
    public cloudGetPlaceWithHttpInfo(param: CloudApiCloudGetPlaceRequest, options?: Configuration): Promise<HttpInfo<Place>> {
        return this.api.cloudGetPlaceWithHttpInfo(param.universe, param.place,  options).toPromise();
    }

    /**
     * Gets the specified place.
     * @param param the request object
     */
    public cloudGetPlace(param: CloudApiCloudGetPlaceRequest, options?: Configuration): Promise<Place> {
        return this.api.cloudGetPlace(param.universe, param.place,  options).toPromise();
    }

    /**
     * Gets the specified place.
     * @param param the request object
     */
    public cloudGetPlace_16WithHttpInfo(param: CloudApiCloudGetPlace0Request, options?: Configuration): Promise<HttpInfo<Place>> {
        return this.api.cloudGetPlace_16WithHttpInfo(param.universe, param.place,  options).toPromise();
    }

    /**
     * Gets the specified place.
     * @param param the request object
     */
    public cloudGetPlace_16(param: CloudApiCloudGetPlace0Request, options?: Configuration): Promise<Place> {
        return this.api.cloudGetPlace_16(param.universe, param.place,  options).toPromise();
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param param the request object
     */
    public cloudGetSubscriptionWithHttpInfo(param: CloudApiCloudGetSubscriptionRequest, options?: Configuration): Promise<HttpInfo<Subscription>> {
        return this.api.cloudGetSubscriptionWithHttpInfo(param.universe, param.subscriptionProduct, param.subscription, param.view,  options).toPromise();
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param param the request object
     */
    public cloudGetSubscription(param: CloudApiCloudGetSubscriptionRequest, options?: Configuration): Promise<Subscription> {
        return this.api.cloudGetSubscription(param.universe, param.subscriptionProduct, param.subscription, param.view,  options).toPromise();
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param param the request object
     */
    public cloudGetSubscription_17WithHttpInfo(param: CloudApiCloudGetSubscription0Request, options?: Configuration): Promise<HttpInfo<Subscription>> {
        return this.api.cloudGetSubscription_17WithHttpInfo(param.universe, param.subscriptionProduct, param.subscription, param.view,  options).toPromise();
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param param the request object
     */
    public cloudGetSubscription_17(param: CloudApiCloudGetSubscription0Request, options?: Configuration): Promise<Subscription> {
        return this.api.cloudGetSubscription_17(param.universe, param.subscriptionProduct, param.subscription, param.view,  options).toPromise();
    }

    /**
     * Gets the specified universe.
     * @param param the request object
     */
    public cloudGetUniverseWithHttpInfo(param: CloudApiCloudGetUniverseRequest, options?: Configuration): Promise<HttpInfo<Universe>> {
        return this.api.cloudGetUniverseWithHttpInfo(param.universe,  options).toPromise();
    }

    /**
     * Gets the specified universe.
     * @param param the request object
     */
    public cloudGetUniverse(param: CloudApiCloudGetUniverseRequest, options?: Configuration): Promise<Universe> {
        return this.api.cloudGetUniverse(param.universe,  options).toPromise();
    }

    /**
     * Gets the specified universe.
     * @param param the request object
     */
    public cloudGetUniverse_18WithHttpInfo(param: CloudApiCloudGetUniverse0Request, options?: Configuration): Promise<HttpInfo<Universe>> {
        return this.api.cloudGetUniverse_18WithHttpInfo(param.universe,  options).toPromise();
    }

    /**
     * Gets the specified universe.
     * @param param the request object
     */
    public cloudGetUniverse_18(param: CloudApiCloudGetUniverse0Request, options?: Configuration): Promise<Universe> {
        return this.api.cloudGetUniverse_18(param.universe,  options).toPromise();
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param param the request object
     */
    public cloudGetUserWithHttpInfo(param: CloudApiCloudGetUserRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.cloudGetUserWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param param the request object
     */
    public cloudGetUser(param: CloudApiCloudGetUserRequest, options?: Configuration): Promise<User> {
        return this.api.cloudGetUser(param.user,  options).toPromise();
    }

    /**
     * Get the user restriction.
     * @param param the request object
     */
    public cloudGetUserRestrictionWithHttpInfo(param: CloudApiCloudGetUserRestrictionRequest, options?: Configuration): Promise<HttpInfo<UserRestriction>> {
        return this.api.cloudGetUserRestrictionWithHttpInfo(param.universe, param.place, param.userRestriction,  options).toPromise();
    }

    /**
     * Get the user restriction.
     * @param param the request object
     */
    public cloudGetUserRestriction(param: CloudApiCloudGetUserRestrictionRequest, options?: Configuration): Promise<UserRestriction> {
        return this.api.cloudGetUserRestriction(param.universe, param.place, param.userRestriction,  options).toPromise();
    }

    /**
     * Get the user restriction.
     * @param param the request object
     */
    public cloudGetUserRestriction_19WithHttpInfo(param: CloudApiCloudGetUserRestriction0Request, options?: Configuration): Promise<HttpInfo<UserRestriction>> {
        return this.api.cloudGetUserRestriction_19WithHttpInfo(param.universe, param.userRestriction,  options).toPromise();
    }

    /**
     * Get the user restriction.
     * @param param the request object
     */
    public cloudGetUserRestriction_19(param: CloudApiCloudGetUserRestriction0Request, options?: Configuration): Promise<UserRestriction> {
        return this.api.cloudGetUserRestriction_19(param.universe, param.userRestriction,  options).toPromise();
    }

    /**
     * Get the user restriction.
     * @param param the request object
     */
    public cloudGetUserRestriction_20WithHttpInfo(param: CloudApiCloudGetUserRestriction1Request, options?: Configuration): Promise<HttpInfo<UserRestriction>> {
        return this.api.cloudGetUserRestriction_20WithHttpInfo(param.universe, param.place, param.userRestriction,  options).toPromise();
    }

    /**
     * Get the user restriction.
     * @param param the request object
     */
    public cloudGetUserRestriction_20(param: CloudApiCloudGetUserRestriction1Request, options?: Configuration): Promise<UserRestriction> {
        return this.api.cloudGetUserRestriction_20(param.universe, param.place, param.userRestriction,  options).toPromise();
    }

    /**
     * Get the user restriction.
     * @param param the request object
     */
    public cloudGetUserRestriction_21WithHttpInfo(param: CloudApiCloudGetUserRestriction2Request, options?: Configuration): Promise<HttpInfo<UserRestriction>> {
        return this.api.cloudGetUserRestriction_21WithHttpInfo(param.universe, param.userRestriction,  options).toPromise();
    }

    /**
     * Get the user restriction.
     * @param param the request object
     */
    public cloudGetUserRestriction_21(param: CloudApiCloudGetUserRestriction2Request, options?: Configuration): Promise<UserRestriction> {
        return this.api.cloudGetUserRestriction_21(param.universe, param.userRestriction,  options).toPromise();
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param param the request object
     */
    public cloudGetUser_22WithHttpInfo(param: CloudApiCloudGetUser0Request, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.cloudGetUser_22WithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param param the request object
     */
    public cloudGetUser_22(param: CloudApiCloudGetUser0Request, options?: Configuration): Promise<User> {
        return this.api.cloudGetUser_22(param.user,  options).toPromise();
    }

    /**
     * List join requests under a group.
     * @param param the request object
     */
    public cloudListGroupJoinRequestsWithHttpInfo(param: CloudApiCloudListGroupJoinRequestsRequest, options?: Configuration): Promise<HttpInfo<ListGroupJoinRequestsResponse>> {
        return this.api.cloudListGroupJoinRequestsWithHttpInfo(param.group, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List join requests under a group.
     * @param param the request object
     */
    public cloudListGroupJoinRequests(param: CloudApiCloudListGroupJoinRequestsRequest, options?: Configuration): Promise<ListGroupJoinRequestsResponse> {
        return this.api.cloudListGroupJoinRequests(param.group, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List join requests under a group.
     * @param param the request object
     */
    public cloudListGroupJoinRequests_23WithHttpInfo(param: CloudApiCloudListGroupJoinRequests0Request, options?: Configuration): Promise<HttpInfo<ListGroupJoinRequestsResponse>> {
        return this.api.cloudListGroupJoinRequests_23WithHttpInfo(param.group, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List join requests under a group.
     * @param param the request object
     */
    public cloudListGroupJoinRequests_23(param: CloudApiCloudListGroupJoinRequests0Request, options?: Configuration): Promise<ListGroupJoinRequestsResponse> {
        return this.api.cloudListGroupJoinRequests_23(param.group, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List group members in a group.
     * @param param the request object
     */
    public cloudListGroupMembershipsWithHttpInfo(param: CloudApiCloudListGroupMembershipsRequest, options?: Configuration): Promise<HttpInfo<ListGroupMembershipsResponse>> {
        return this.api.cloudListGroupMembershipsWithHttpInfo(param.group, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List group members in a group.
     * @param param the request object
     */
    public cloudListGroupMemberships(param: CloudApiCloudListGroupMembershipsRequest, options?: Configuration): Promise<ListGroupMembershipsResponse> {
        return this.api.cloudListGroupMemberships(param.group, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List group members in a group.
     * @param param the request object
     */
    public cloudListGroupMemberships_24WithHttpInfo(param: CloudApiCloudListGroupMemberships0Request, options?: Configuration): Promise<HttpInfo<ListGroupMembershipsResponse>> {
        return this.api.cloudListGroupMemberships_24WithHttpInfo(param.group, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List group members in a group.
     * @param param the request object
     */
    public cloudListGroupMemberships_24(param: CloudApiCloudListGroupMemberships0Request, options?: Configuration): Promise<ListGroupMembershipsResponse> {
        return this.api.cloudListGroupMemberships_24(param.group, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param param the request object
     */
    public cloudListGroupRolesWithHttpInfo(param: CloudApiCloudListGroupRolesRequest, options?: Configuration): Promise<HttpInfo<ListGroupRolesResponse>> {
        return this.api.cloudListGroupRolesWithHttpInfo(param.group, param.maxPageSize, param.pageToken,  options).toPromise();
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param param the request object
     */
    public cloudListGroupRoles(param: CloudApiCloudListGroupRolesRequest, options?: Configuration): Promise<ListGroupRolesResponse> {
        return this.api.cloudListGroupRoles(param.group, param.maxPageSize, param.pageToken,  options).toPromise();
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param param the request object
     */
    public cloudListGroupRoles_25WithHttpInfo(param: CloudApiCloudListGroupRoles0Request, options?: Configuration): Promise<HttpInfo<ListGroupRolesResponse>> {
        return this.api.cloudListGroupRoles_25WithHttpInfo(param.group, param.maxPageSize, param.pageToken,  options).toPromise();
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param param the request object
     */
    public cloudListGroupRoles_25(param: CloudApiCloudListGroupRoles0Request, options?: Configuration): Promise<ListGroupRolesResponse> {
        return this.api.cloudListGroupRoles_25(param.group, param.maxPageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param param the request object
     */
    public cloudListInstanceChildrenWithHttpInfo(param: CloudApiCloudListInstanceChildrenRequest, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudListInstanceChildrenWithHttpInfo(param.universe, param.place, param.instance, param.maxPageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param param the request object
     */
    public cloudListInstanceChildren(param: CloudApiCloudListInstanceChildrenRequest, options?: Configuration): Promise<Operation> {
        return this.api.cloudListInstanceChildren(param.universe, param.place, param.instance, param.maxPageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param param the request object
     */
    public cloudListInstanceChildren_26WithHttpInfo(param: CloudApiCloudListInstanceChildren0Request, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudListInstanceChildren_26WithHttpInfo(param.universe, param.place, param.instance, param.maxPageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param param the request object
     */
    public cloudListInstanceChildren_26(param: CloudApiCloudListInstanceChildren0Request, options?: Configuration): Promise<Operation> {
        return this.api.cloudListInstanceChildren_26(param.universe, param.place, param.instance, param.maxPageSize, param.pageToken,  options).toPromise();
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param param the request object
     */
    public cloudListInventoryItemsWithHttpInfo(param: CloudApiCloudListInventoryItemsRequest, options?: Configuration): Promise<HttpInfo<ListInventoryItemsResponse>> {
        return this.api.cloudListInventoryItemsWithHttpInfo(param.user, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param param the request object
     */
    public cloudListInventoryItems(param: CloudApiCloudListInventoryItemsRequest, options?: Configuration): Promise<ListInventoryItemsResponse> {
        return this.api.cloudListInventoryItems(param.user, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param param the request object
     */
    public cloudListInventoryItems_27WithHttpInfo(param: CloudApiCloudListInventoryItems0Request, options?: Configuration): Promise<HttpInfo<ListInventoryItemsResponse>> {
        return this.api.cloudListInventoryItems_27WithHttpInfo(param.user, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param param the request object
     */
    public cloudListInventoryItems_27(param: CloudApiCloudListInventoryItems0Request, options?: Configuration): Promise<ListInventoryItemsResponse> {
        return this.api.cloudListInventoryItems_27(param.user, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * Gets and returns items in the map with a given order and filter.
     * @param param the request object
     */
    public cloudListMemoryStoreSortedMapItemsWithHttpInfo(param: CloudApiCloudListMemoryStoreSortedMapItemsRequest, options?: Configuration): Promise<HttpInfo<ListMemoryStoreSortedMapItemsResponse>> {
        return this.api.cloudListMemoryStoreSortedMapItemsWithHttpInfo(param.universe, param.sortedMap, param.maxPageSize, param.pageToken, param.orderBy, param.filter,  options).toPromise();
    }

    /**
     * Gets and returns items in the map with a given order and filter.
     * @param param the request object
     */
    public cloudListMemoryStoreSortedMapItems(param: CloudApiCloudListMemoryStoreSortedMapItemsRequest, options?: Configuration): Promise<ListMemoryStoreSortedMapItemsResponse> {
        return this.api.cloudListMemoryStoreSortedMapItems(param.universe, param.sortedMap, param.maxPageSize, param.pageToken, param.orderBy, param.filter,  options).toPromise();
    }

    /**
     * Gets and returns items in the map with a given order and filter.
     * @param param the request object
     */
    public cloudListMemoryStoreSortedMapItems_28WithHttpInfo(param: CloudApiCloudListMemoryStoreSortedMapItems0Request, options?: Configuration): Promise<HttpInfo<ListMemoryStoreSortedMapItemsResponse>> {
        return this.api.cloudListMemoryStoreSortedMapItems_28WithHttpInfo(param.universe, param.sortedMap, param.maxPageSize, param.pageToken, param.orderBy, param.filter,  options).toPromise();
    }

    /**
     * Gets and returns items in the map with a given order and filter.
     * @param param the request object
     */
    public cloudListMemoryStoreSortedMapItems_28(param: CloudApiCloudListMemoryStoreSortedMapItems0Request, options?: Configuration): Promise<ListMemoryStoreSortedMapItemsResponse> {
        return this.api.cloudListMemoryStoreSortedMapItems_28(param.universe, param.sortedMap, param.maxPageSize, param.pageToken, param.orderBy, param.filter,  options).toPromise();
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param param the request object
     */
    public cloudListUserRestrictionLogsWithHttpInfo(param: CloudApiCloudListUserRestrictionLogsRequest, options?: Configuration): Promise<HttpInfo<ListUserRestrictionLogsResponse>> {
        return this.api.cloudListUserRestrictionLogsWithHttpInfo(param.universe, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param param the request object
     */
    public cloudListUserRestrictionLogs(param: CloudApiCloudListUserRestrictionLogsRequest, options?: Configuration): Promise<ListUserRestrictionLogsResponse> {
        return this.api.cloudListUserRestrictionLogs(param.universe, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param param the request object
     */
    public cloudListUserRestrictionLogs_29WithHttpInfo(param: CloudApiCloudListUserRestrictionLogs0Request, options?: Configuration): Promise<HttpInfo<ListUserRestrictionLogsResponse>> {
        return this.api.cloudListUserRestrictionLogs_29WithHttpInfo(param.universe, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param param the request object
     */
    public cloudListUserRestrictionLogs_29(param: CloudApiCloudListUserRestrictionLogs0Request, options?: Configuration): Promise<ListUserRestrictionLogsResponse> {
        return this.api.cloudListUserRestrictionLogs_29(param.universe, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param param the request object
     */
    public cloudReadMemoryStoreQueueItemsWithHttpInfo(param: CloudApiCloudReadMemoryStoreQueueItemsRequest, options?: Configuration): Promise<HttpInfo<ReadMemoryStoreQueueItemsResponse>> {
        return this.api.cloudReadMemoryStoreQueueItemsWithHttpInfo(param.universe, param.queue, param.count, param.allOrNothing, param.invisibilityWindow,  options).toPromise();
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param param the request object
     */
    public cloudReadMemoryStoreQueueItems(param: CloudApiCloudReadMemoryStoreQueueItemsRequest, options?: Configuration): Promise<ReadMemoryStoreQueueItemsResponse> {
        return this.api.cloudReadMemoryStoreQueueItems(param.universe, param.queue, param.count, param.allOrNothing, param.invisibilityWindow,  options).toPromise();
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param param the request object
     */
    public cloudReadMemoryStoreQueueItems_30WithHttpInfo(param: CloudApiCloudReadMemoryStoreQueueItems0Request, options?: Configuration): Promise<HttpInfo<ReadMemoryStoreQueueItemsResponse>> {
        return this.api.cloudReadMemoryStoreQueueItems_30WithHttpInfo(param.universe, param.queue, param.count, param.allOrNothing, param.invisibilityWindow,  options).toPromise();
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param param the request object
     */
    public cloudReadMemoryStoreQueueItems_30(param: CloudApiCloudReadMemoryStoreQueueItems0Request, options?: Configuration): Promise<ReadMemoryStoreQueueItemsResponse> {
        return this.api.cloudReadMemoryStoreQueueItems_30(param.universe, param.queue, param.count, param.allOrNothing, param.invisibilityWindow,  options).toPromise();
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param param the request object
     */
    public cloudRestartUniverseServersWithHttpInfo(param: CloudApiCloudRestartUniverseServersRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cloudRestartUniverseServersWithHttpInfo(param.universe, param.body,  options).toPromise();
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param param the request object
     */
    public cloudRestartUniverseServers(param: CloudApiCloudRestartUniverseServersRequest, options?: Configuration): Promise<any> {
        return this.api.cloudRestartUniverseServers(param.universe, param.body,  options).toPromise();
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param param the request object
     */
    public cloudRestartUniverseServers_31WithHttpInfo(param: CloudApiCloudRestartUniverseServers0Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cloudRestartUniverseServers_31WithHttpInfo(param.universe, param.body,  options).toPromise();
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param param the request object
     */
    public cloudRestartUniverseServers_31(param: CloudApiCloudRestartUniverseServers0Request, options?: Configuration): Promise<any> {
        return this.api.cloudRestartUniverseServers_31(param.universe, param.body,  options).toPromise();
    }

    /**
     * Update a Creator Store product.
     * @param param the request object
     */
    public cloudUpdateCreatorStoreProductWithHttpInfo(param: CloudApiCloudUpdateCreatorStoreProductRequest, options?: Configuration): Promise<HttpInfo<CreatorStoreProduct>> {
        return this.api.cloudUpdateCreatorStoreProductWithHttpInfo(param.creatorStoreProduct, param.creatorStoreProduct2, param.updateMask, param.allowMissing,  options).toPromise();
    }

    /**
     * Update a Creator Store product.
     * @param param the request object
     */
    public cloudUpdateCreatorStoreProduct(param: CloudApiCloudUpdateCreatorStoreProductRequest, options?: Configuration): Promise<CreatorStoreProduct> {
        return this.api.cloudUpdateCreatorStoreProduct(param.creatorStoreProduct, param.creatorStoreProduct2, param.updateMask, param.allowMissing,  options).toPromise();
    }

    /**
     * Update a Creator Store product.
     * @param param the request object
     */
    public cloudUpdateCreatorStoreProduct_32WithHttpInfo(param: CloudApiCloudUpdateCreatorStoreProduct0Request, options?: Configuration): Promise<HttpInfo<CreatorStoreProduct>> {
        return this.api.cloudUpdateCreatorStoreProduct_32WithHttpInfo(param.creatorStoreProduct, param.creatorStoreProduct2, param.updateMask, param.allowMissing,  options).toPromise();
    }

    /**
     * Update a Creator Store product.
     * @param param the request object
     */
    public cloudUpdateCreatorStoreProduct_32(param: CloudApiCloudUpdateCreatorStoreProduct0Request, options?: Configuration): Promise<CreatorStoreProduct> {
        return this.api.cloudUpdateCreatorStoreProduct_32(param.creatorStoreProduct, param.creatorStoreProduct2, param.updateMask, param.allowMissing,  options).toPromise();
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param param the request object
     */
    public cloudUpdateInstanceWithHttpInfo(param: CloudApiCloudUpdateInstanceRequest, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudUpdateInstanceWithHttpInfo(param.universe, param.place, param.instance, param.instance2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param param the request object
     */
    public cloudUpdateInstance(param: CloudApiCloudUpdateInstanceRequest, options?: Configuration): Promise<Operation> {
        return this.api.cloudUpdateInstance(param.universe, param.place, param.instance, param.instance2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param param the request object
     */
    public cloudUpdateInstance_33WithHttpInfo(param: CloudApiCloudUpdateInstance0Request, options?: Configuration): Promise<HttpInfo<Operation>> {
        return this.api.cloudUpdateInstance_33WithHttpInfo(param.universe, param.place, param.instance, param.instance2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param param the request object
     */
    public cloudUpdateInstance_33(param: CloudApiCloudUpdateInstance0Request, options?: Configuration): Promise<Operation> {
        return this.api.cloudUpdateInstance_33(param.universe, param.place, param.instance, param.instance2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the specified map item.
     * @param param the request object
     */
    public cloudUpdateMemoryStoreSortedMapItemWithHttpInfo(param: CloudApiCloudUpdateMemoryStoreSortedMapItemRequest, options?: Configuration): Promise<HttpInfo<MemoryStoreSortedMapItem>> {
        return this.api.cloudUpdateMemoryStoreSortedMapItemWithHttpInfo(param.universe, param.sortedMap, param.item, param.memoryStoreSortedMapItem, param.allowMissing,  options).toPromise();
    }

    /**
     * Updates the specified map item.
     * @param param the request object
     */
    public cloudUpdateMemoryStoreSortedMapItem(param: CloudApiCloudUpdateMemoryStoreSortedMapItemRequest, options?: Configuration): Promise<MemoryStoreSortedMapItem> {
        return this.api.cloudUpdateMemoryStoreSortedMapItem(param.universe, param.sortedMap, param.item, param.memoryStoreSortedMapItem, param.allowMissing,  options).toPromise();
    }

    /**
     * Updates the specified map item.
     * @param param the request object
     */
    public cloudUpdateMemoryStoreSortedMapItem_34WithHttpInfo(param: CloudApiCloudUpdateMemoryStoreSortedMapItem0Request, options?: Configuration): Promise<HttpInfo<MemoryStoreSortedMapItem>> {
        return this.api.cloudUpdateMemoryStoreSortedMapItem_34WithHttpInfo(param.universe, param.sortedMap, param.item, param.memoryStoreSortedMapItem, param.allowMissing,  options).toPromise();
    }

    /**
     * Updates the specified map item.
     * @param param the request object
     */
    public cloudUpdateMemoryStoreSortedMapItem_34(param: CloudApiCloudUpdateMemoryStoreSortedMapItem0Request, options?: Configuration): Promise<MemoryStoreSortedMapItem> {
        return this.api.cloudUpdateMemoryStoreSortedMapItem_34(param.universe, param.sortedMap, param.item, param.memoryStoreSortedMapItem, param.allowMissing,  options).toPromise();
    }

    /**
     * Updates the specified place.
     * @param param the request object
     */
    public cloudUpdatePlaceWithHttpInfo(param: CloudApiCloudUpdatePlaceRequest, options?: Configuration): Promise<HttpInfo<Place>> {
        return this.api.cloudUpdatePlaceWithHttpInfo(param.universe, param.place, param.place2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the specified place.
     * @param param the request object
     */
    public cloudUpdatePlace(param: CloudApiCloudUpdatePlaceRequest, options?: Configuration): Promise<Place> {
        return this.api.cloudUpdatePlace(param.universe, param.place, param.place2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the specified place.
     * @param param the request object
     */
    public cloudUpdatePlace_35WithHttpInfo(param: CloudApiCloudUpdatePlace0Request, options?: Configuration): Promise<HttpInfo<Place>> {
        return this.api.cloudUpdatePlace_35WithHttpInfo(param.universe, param.place, param.place2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the specified place.
     * @param param the request object
     */
    public cloudUpdatePlace_35(param: CloudApiCloudUpdatePlace0Request, options?: Configuration): Promise<Place> {
        return this.api.cloudUpdatePlace_35(param.universe, param.place, param.place2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param param the request object
     */
    public cloudUpdateUniverseWithHttpInfo(param: CloudApiCloudUpdateUniverseRequest, options?: Configuration): Promise<HttpInfo<Universe>> {
        return this.api.cloudUpdateUniverseWithHttpInfo(param.universe, param.universe2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param param the request object
     */
    public cloudUpdateUniverse(param: CloudApiCloudUpdateUniverseRequest, options?: Configuration): Promise<Universe> {
        return this.api.cloudUpdateUniverse(param.universe, param.universe2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param param the request object
     */
    public cloudUpdateUniverse_36WithHttpInfo(param: CloudApiCloudUpdateUniverse0Request, options?: Configuration): Promise<HttpInfo<Universe>> {
        return this.api.cloudUpdateUniverse_36WithHttpInfo(param.universe, param.universe2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param param the request object
     */
    public cloudUpdateUniverse_36(param: CloudApiCloudUpdateUniverse0Request, options?: Configuration): Promise<Universe> {
        return this.api.cloudUpdateUniverse_36(param.universe, param.universe2, param.updateMask,  options).toPromise();
    }

    /**
     * Update the user restriction.
     * @param param the request object
     */
    public cloudUpdateUserRestrictionWithHttpInfo(param: CloudApiCloudUpdateUserRestrictionRequest, options?: Configuration): Promise<HttpInfo<UserRestriction>> {
        return this.api.cloudUpdateUserRestrictionWithHttpInfo(param.universe, param.place, param.userRestriction, param.userRestriction2, param.updateMask, param.idempotencyKeyKey, param.idempotencyKeyFirstSent,  options).toPromise();
    }

    /**
     * Update the user restriction.
     * @param param the request object
     */
    public cloudUpdateUserRestriction(param: CloudApiCloudUpdateUserRestrictionRequest, options?: Configuration): Promise<UserRestriction> {
        return this.api.cloudUpdateUserRestriction(param.universe, param.place, param.userRestriction, param.userRestriction2, param.updateMask, param.idempotencyKeyKey, param.idempotencyKeyFirstSent,  options).toPromise();
    }

    /**
     * Update the user restriction.
     * @param param the request object
     */
    public cloudUpdateUserRestriction_37WithHttpInfo(param: CloudApiCloudUpdateUserRestriction0Request, options?: Configuration): Promise<HttpInfo<UserRestriction>> {
        return this.api.cloudUpdateUserRestriction_37WithHttpInfo(param.universe, param.userRestriction, param.userRestriction2, param.updateMask, param.idempotencyKeyKey, param.idempotencyKeyFirstSent,  options).toPromise();
    }

    /**
     * Update the user restriction.
     * @param param the request object
     */
    public cloudUpdateUserRestriction_37(param: CloudApiCloudUpdateUserRestriction0Request, options?: Configuration): Promise<UserRestriction> {
        return this.api.cloudUpdateUserRestriction_37(param.universe, param.userRestriction, param.userRestriction2, param.updateMask, param.idempotencyKeyKey, param.idempotencyKeyFirstSent,  options).toPromise();
    }

    /**
     * Update the user restriction.
     * @param param the request object
     */
    public cloudUpdateUserRestriction_38WithHttpInfo(param: CloudApiCloudUpdateUserRestriction1Request, options?: Configuration): Promise<HttpInfo<UserRestriction>> {
        return this.api.cloudUpdateUserRestriction_38WithHttpInfo(param.universe, param.place, param.userRestriction, param.userRestriction2, param.updateMask, param.idempotencyKeyKey, param.idempotencyKeyFirstSent,  options).toPromise();
    }

    /**
     * Update the user restriction.
     * @param param the request object
     */
    public cloudUpdateUserRestriction_38(param: CloudApiCloudUpdateUserRestriction1Request, options?: Configuration): Promise<UserRestriction> {
        return this.api.cloudUpdateUserRestriction_38(param.universe, param.place, param.userRestriction, param.userRestriction2, param.updateMask, param.idempotencyKeyKey, param.idempotencyKeyFirstSent,  options).toPromise();
    }

    /**
     * Update the user restriction.
     * @param param the request object
     */
    public cloudUpdateUserRestriction_39WithHttpInfo(param: CloudApiCloudUpdateUserRestriction2Request, options?: Configuration): Promise<HttpInfo<UserRestriction>> {
        return this.api.cloudUpdateUserRestriction_39WithHttpInfo(param.universe, param.userRestriction, param.userRestriction2, param.updateMask, param.idempotencyKeyKey, param.idempotencyKeyFirstSent,  options).toPromise();
    }

    /**
     * Update the user restriction.
     * @param param the request object
     */
    public cloudUpdateUserRestriction_39(param: CloudApiCloudUpdateUserRestriction2Request, options?: Configuration): Promise<UserRestriction> {
        return this.api.cloudUpdateUserRestriction_39(param.universe, param.userRestriction, param.userRestriction2, param.updateMask, param.idempotencyKeyKey, param.idempotencyKeyFirstSent,  options).toPromise();
    }

}
