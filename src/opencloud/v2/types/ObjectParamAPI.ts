import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { AcceptGroupJoinRequestRequest } from '../models/AcceptGroupJoinRequestRequest';
import { AvatarAsset } from '../models/AvatarAsset';
import { AvatarAssetAssetPosition } from '../models/AvatarAssetAssetPosition';
import { AvatarAssetAssetRotation } from '../models/AvatarAssetAssetRotation';
import { AvatarAssetAssetScale } from '../models/AvatarAssetAssetScale';
import { AvatarAssetMeta } from '../models/AvatarAssetMeta';
import { AvatarBody } from '../models/AvatarBody';
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
import { DeclineGroupJoinRequestRequest } from '../models/DeclineGroupJoinRequestRequest';
import { DynamicHead } from '../models/DynamicHead';
import { GenerateUserThumbnailResponse } from '../models/GenerateUserThumbnailResponse';
import { GoogleProtobufAny } from '../models/GoogleProtobufAny';
import { Group } from '../models/Group';
import { GroupJoinRequest } from '../models/GroupJoinRequest';
import { GroupMembership } from '../models/GroupMembership';
import { GroupRole } from '../models/GroupRole';
import { GroupRoleRolePermissions } from '../models/GroupRoleRolePermissions';
import { GroupShout } from '../models/GroupShout';
import { Instance } from '../models/Instance';
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
import { RestartUniverseServersRequest } from '../models/RestartUniverseServersRequest';
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
     * @type AcceptGroupJoinRequestRequest
     * @memberof CloudApicloudAcceptGroupJoinRequest
     */
    acceptGroupJoinRequestRequest: AcceptGroupJoinRequestRequest
}

export interface CloudApiCloudCreateCreatorStoreProductRequest {
    /**
     * 
     * @type CreatorStoreProduct
     * @memberof CloudApicloudCreateCreatorStoreProduct
     */
    creatorStoreProduct: CreatorStoreProduct
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
     * @type DeclineGroupJoinRequestRequest
     * @memberof CloudApicloudDeclineGroupJoinRequest
     */
    declineGroupJoinRequestRequest: DeclineGroupJoinRequestRequest
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

export interface CloudApiCloudGetCreatorStoreProductRequest {
    /**
     * The creator-store-product ID.
     * @type string
     * @memberof CloudApicloudGetCreatorStoreProduct
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

export interface CloudApiCloudGetUniverseRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudGetUniverse
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

export interface CloudApiCloudRestartUniverseServersRequest {
    /**
     * The universe ID.
     * @type string
     * @memberof CloudApicloudRestartUniverseServers
     */
    universe: string
    /**
     * 
     * @type RestartUniverseServersRequest
     * @memberof CloudApicloudRestartUniverseServers
     */
    restartUniverseServersRequest: RestartUniverseServersRequest
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
        return this.api.cloudAcceptGroupJoinRequestWithHttpInfo(param.group, param.joinRequest, param.acceptGroupJoinRequestRequest,  options).toPromise();
    }

    /**
     * Accepts a join request.
     * @param param the request object
     */
    public cloudAcceptGroupJoinRequest(param: CloudApiCloudAcceptGroupJoinRequestRequest, options?: Configuration): Promise<void> {
        return this.api.cloudAcceptGroupJoinRequest(param.group, param.joinRequest, param.acceptGroupJoinRequestRequest,  options).toPromise();
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
     * Declines a join request.
     * @param param the request object
     */
    public cloudDeclineGroupJoinRequestWithHttpInfo(param: CloudApiCloudDeclineGroupJoinRequestRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cloudDeclineGroupJoinRequestWithHttpInfo(param.group, param.joinRequest, param.declineGroupJoinRequestRequest,  options).toPromise();
    }

    /**
     * Declines a join request.
     * @param param the request object
     */
    public cloudDeclineGroupJoinRequest(param: CloudApiCloudDeclineGroupJoinRequestRequest, options?: Configuration): Promise<void> {
        return this.api.cloudDeclineGroupJoinRequest(param.group, param.joinRequest, param.declineGroupJoinRequestRequest,  options).toPromise();
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
     * Get a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param param the request object
     */
    public cloudGetUserWithHttpInfo(param: CloudApiCloudGetUserRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.cloudGetUserWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * Get a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param param the request object
     */
    public cloudGetUser(param: CloudApiCloudGetUserRequest, options?: Configuration): Promise<User> {
        return this.api.cloudGetUser(param.user,  options).toPromise();
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
     * List inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param param the request object
     */
    public cloudListInventoryItemsWithHttpInfo(param: CloudApiCloudListInventoryItemsRequest, options?: Configuration): Promise<HttpInfo<ListInventoryItemsResponse>> {
        return this.api.cloudListInventoryItemsWithHttpInfo(param.user, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * List inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param param the request object
     */
    public cloudListInventoryItems(param: CloudApiCloudListInventoryItemsRequest, options?: Configuration): Promise<ListInventoryItemsResponse> {
        return this.api.cloudListInventoryItems(param.user, param.maxPageSize, param.pageToken, param.filter,  options).toPromise();
    }

    /**
     * Restarts all currently running servers for a given universe. Used for  releasing experience updates.
     * @param param the request object
     */
    public cloudRestartUniverseServersWithHttpInfo(param: CloudApiCloudRestartUniverseServersRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cloudRestartUniverseServersWithHttpInfo(param.universe, param.restartUniverseServersRequest,  options).toPromise();
    }

    /**
     * Restarts all currently running servers for a given universe. Used for  releasing experience updates.
     * @param param the request object
     */
    public cloudRestartUniverseServers(param: CloudApiCloudRestartUniverseServersRequest, options?: Configuration): Promise<any> {
        return this.api.cloudRestartUniverseServers(param.universe, param.restartUniverseServersRequest,  options).toPromise();
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

}
