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
import { ObservableCloudApi } from './ObservableAPI';

import { CloudApiRequestFactory, CloudApiResponseProcessor} from "../apis/CloudApi";
export class PromiseCloudApi {
    private api: ObservableCloudApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudApiRequestFactory,
        responseProcessor?: CloudApiResponseProcessor
    ) {
        this.api = new ObservableCloudApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accepts a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param acceptGroupJoinRequestRequest 
     */
    public cloudAcceptGroupJoinRequestWithHttpInfo(group: string, joinRequest: string, acceptGroupJoinRequestRequest: AcceptGroupJoinRequestRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.cloudAcceptGroupJoinRequestWithHttpInfo(group, joinRequest, acceptGroupJoinRequestRequest, _options);
        return result.toPromise();
    }

    /**
     * Accepts a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param acceptGroupJoinRequestRequest 
     */
    public cloudAcceptGroupJoinRequest(group: string, joinRequest: string, acceptGroupJoinRequestRequest: AcceptGroupJoinRequestRequest, _options?: Configuration): Promise<void> {
        const result = this.api.cloudAcceptGroupJoinRequest(group, joinRequest, acceptGroupJoinRequestRequest, _options);
        return result.toPromise();
    }

    /**
     * Add a Creator Store product.
     * @param creatorStoreProduct 
     */
    public cloudCreateCreatorStoreProductWithHttpInfo(creatorStoreProduct: CreatorStoreProduct, _options?: Configuration): Promise<HttpInfo<CreatorStoreProduct>> {
        const result = this.api.cloudCreateCreatorStoreProductWithHttpInfo(creatorStoreProduct, _options);
        return result.toPromise();
    }

    /**
     * Add a Creator Store product.
     * @param creatorStoreProduct 
     */
    public cloudCreateCreatorStoreProduct(creatorStoreProduct: CreatorStoreProduct, _options?: Configuration): Promise<CreatorStoreProduct> {
        const result = this.api.cloudCreateCreatorStoreProduct(creatorStoreProduct, _options);
        return result.toPromise();
    }

    /**
     * Sends a notification to a user.
     * @param user The user ID.
     * @param userNotification 
     */
    public cloudCreateUserNotificationWithHttpInfo(user: string, userNotification: UserNotification, _options?: Configuration): Promise<HttpInfo<UserNotification>> {
        const result = this.api.cloudCreateUserNotificationWithHttpInfo(user, userNotification, _options);
        return result.toPromise();
    }

    /**
     * Sends a notification to a user.
     * @param user The user ID.
     * @param userNotification 
     */
    public cloudCreateUserNotification(user: string, userNotification: UserNotification, _options?: Configuration): Promise<UserNotification> {
        const result = this.api.cloudCreateUserNotification(user, userNotification, _options);
        return result.toPromise();
    }

    /**
     * Declines a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param declineGroupJoinRequestRequest 
     */
    public cloudDeclineGroupJoinRequestWithHttpInfo(group: string, joinRequest: string, declineGroupJoinRequestRequest: DeclineGroupJoinRequestRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.cloudDeclineGroupJoinRequestWithHttpInfo(group, joinRequest, declineGroupJoinRequestRequest, _options);
        return result.toPromise();
    }

    /**
     * Declines a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param declineGroupJoinRequestRequest 
     */
    public cloudDeclineGroupJoinRequest(group: string, joinRequest: string, declineGroupJoinRequestRequest: DeclineGroupJoinRequestRequest, _options?: Configuration): Promise<void> {
        const result = this.api.cloudDeclineGroupJoinRequest(group, joinRequest, declineGroupJoinRequestRequest, _options);
        return result.toPromise();
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param user The user ID.
     * @param size Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @param format Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @param shape Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     */
    public cloudGenerateUserThumbnailWithHttpInfo(user: string, size?: number, format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG', shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE', _options?: Configuration): Promise<HttpInfo<Operation>> {
        const result = this.api.cloudGenerateUserThumbnailWithHttpInfo(user, size, format, shape, _options);
        return result.toPromise();
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param user The user ID.
     * @param size Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @param format Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @param shape Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     */
    public cloudGenerateUserThumbnail(user: string, size?: number, format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG', shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE', _options?: Configuration): Promise<Operation> {
        const result = this.api.cloudGenerateUserThumbnail(user, size, format, shape, _options);
        return result.toPromise();
    }

    /**
     * Get a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     */
    public cloudGetCreatorStoreProductWithHttpInfo(creatorStoreProduct: string, _options?: Configuration): Promise<HttpInfo<CreatorStoreProduct>> {
        const result = this.api.cloudGetCreatorStoreProductWithHttpInfo(creatorStoreProduct, _options);
        return result.toPromise();
    }

    /**
     * Get a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     */
    public cloudGetCreatorStoreProduct(creatorStoreProduct: string, _options?: Configuration): Promise<CreatorStoreProduct> {
        const result = this.api.cloudGetCreatorStoreProduct(creatorStoreProduct, _options);
        return result.toPromise();
    }

    /**
     * Gets the specified group.
     * @param group The group ID.
     */
    public cloudGetGroupWithHttpInfo(group: string, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.cloudGetGroupWithHttpInfo(group, _options);
        return result.toPromise();
    }

    /**
     * Gets the specified group.
     * @param group The group ID.
     */
    public cloudGetGroup(group: string, _options?: Configuration): Promise<Group> {
        const result = this.api.cloudGetGroup(group, _options);
        return result.toPromise();
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param group The group ID.
     */
    public cloudGetGroupShoutWithHttpInfo(group: string, _options?: Configuration): Promise<HttpInfo<GroupShout>> {
        const result = this.api.cloudGetGroupShoutWithHttpInfo(group, _options);
        return result.toPromise();
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param group The group ID.
     */
    public cloudGetGroupShout(group: string, _options?: Configuration): Promise<GroupShout> {
        const result = this.api.cloudGetGroupShout(group, _options);
        return result.toPromise();
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     */
    public cloudGetInstanceWithHttpInfo(universe: string, place: string, instance: string, _options?: Configuration): Promise<HttpInfo<Operation>> {
        const result = this.api.cloudGetInstanceWithHttpInfo(universe, place, instance, _options);
        return result.toPromise();
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     */
    public cloudGetInstance(universe: string, place: string, instance: string, _options?: Configuration): Promise<Operation> {
        const result = this.api.cloudGetInstance(universe, place, instance, _options);
        return result.toPromise();
    }

    /**
     * Gets the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     */
    public cloudGetPlaceWithHttpInfo(universe: string, place: string, _options?: Configuration): Promise<HttpInfo<Place>> {
        const result = this.api.cloudGetPlaceWithHttpInfo(universe, place, _options);
        return result.toPromise();
    }

    /**
     * Gets the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     */
    public cloudGetPlace(universe: string, place: string, _options?: Configuration): Promise<Place> {
        const result = this.api.cloudGetPlace(universe, place, _options);
        return result.toPromise();
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param universe The universe ID.
     * @param subscriptionProduct The subscription-product ID.
     * @param subscription The subscription ID.
     * @param view The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     */
    public cloudGetSubscriptionWithHttpInfo(universe: string, subscriptionProduct: string, subscription: string, view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL', _options?: Configuration): Promise<HttpInfo<Subscription>> {
        const result = this.api.cloudGetSubscriptionWithHttpInfo(universe, subscriptionProduct, subscription, view, _options);
        return result.toPromise();
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param universe The universe ID.
     * @param subscriptionProduct The subscription-product ID.
     * @param subscription The subscription ID.
     * @param view The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     */
    public cloudGetSubscription(universe: string, subscriptionProduct: string, subscription: string, view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL', _options?: Configuration): Promise<Subscription> {
        const result = this.api.cloudGetSubscription(universe, subscriptionProduct, subscription, view, _options);
        return result.toPromise();
    }

    /**
     * Gets the specified universe.
     * @param universe The universe ID.
     */
    public cloudGetUniverseWithHttpInfo(universe: string, _options?: Configuration): Promise<HttpInfo<Universe>> {
        const result = this.api.cloudGetUniverseWithHttpInfo(universe, _options);
        return result.toPromise();
    }

    /**
     * Gets the specified universe.
     * @param universe The universe ID.
     */
    public cloudGetUniverse(universe: string, _options?: Configuration): Promise<Universe> {
        const result = this.api.cloudGetUniverse(universe, _options);
        return result.toPromise();
    }

    /**
     * Get a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param user The user ID.
     */
    public cloudGetUserWithHttpInfo(user: string, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.cloudGetUserWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * Get a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param user The user ID.
     */
    public cloudGetUser(user: string, _options?: Configuration): Promise<User> {
        const result = this.api.cloudGetUser(user, _options);
        return result.toPromise();
    }

    /**
     * List join requests under a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     */
    public cloudListGroupJoinRequestsWithHttpInfo(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<ListGroupJoinRequestsResponse>> {
        const result = this.api.cloudListGroupJoinRequestsWithHttpInfo(group, maxPageSize, pageToken, filter, _options);
        return result.toPromise();
    }

    /**
     * List join requests under a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     */
    public cloudListGroupJoinRequests(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<ListGroupJoinRequestsResponse> {
        const result = this.api.cloudListGroupJoinRequests(group, maxPageSize, pageToken, filter, _options);
        return result.toPromise();
    }

    /**
     * List group members in a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     */
    public cloudListGroupMembershipsWithHttpInfo(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<ListGroupMembershipsResponse>> {
        const result = this.api.cloudListGroupMembershipsWithHttpInfo(group, maxPageSize, pageToken, filter, _options);
        return result.toPromise();
    }

    /**
     * List group members in a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     */
    public cloudListGroupMemberships(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<ListGroupMembershipsResponse> {
        const result = this.api.cloudListGroupMemberships(group, maxPageSize, pageToken, filter, _options);
        return result.toPromise();
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     */
    public cloudListGroupRolesWithHttpInfo(group: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListGroupRolesResponse>> {
        const result = this.api.cloudListGroupRolesWithHttpInfo(group, maxPageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     */
    public cloudListGroupRoles(group: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListGroupRolesResponse> {
        const result = this.api.cloudListGroupRoles(group, maxPageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param maxPageSize The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @param pageToken A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     */
    public cloudListInstanceChildrenWithHttpInfo(universe: string, place: string, instance: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<Operation>> {
        const result = this.api.cloudListInstanceChildrenWithHttpInfo(universe, place, instance, maxPageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param maxPageSize The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @param pageToken A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     */
    public cloudListInstanceChildren(universe: string, place: string, instance: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Promise<Operation> {
        const result = this.api.cloudListInstanceChildren(universe, place, instance, maxPageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * List inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param user The user ID.
     * @param maxPageSize The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     */
    public cloudListInventoryItemsWithHttpInfo(user: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<ListInventoryItemsResponse>> {
        const result = this.api.cloudListInventoryItemsWithHttpInfo(user, maxPageSize, pageToken, filter, _options);
        return result.toPromise();
    }

    /**
     * List inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param user The user ID.
     * @param maxPageSize The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     */
    public cloudListInventoryItems(user: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<ListInventoryItemsResponse> {
        const result = this.api.cloudListInventoryItems(user, maxPageSize, pageToken, filter, _options);
        return result.toPromise();
    }

    /**
     * Restarts all currently running servers for a given universe. Used for  releasing experience updates.
     * @param universe The universe ID.
     * @param restartUniverseServersRequest 
     */
    public cloudRestartUniverseServersWithHttpInfo(universe: string, restartUniverseServersRequest: RestartUniverseServersRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.cloudRestartUniverseServersWithHttpInfo(universe, restartUniverseServersRequest, _options);
        return result.toPromise();
    }

    /**
     * Restarts all currently running servers for a given universe. Used for  releasing experience updates.
     * @param universe The universe ID.
     * @param restartUniverseServersRequest 
     */
    public cloudRestartUniverseServers(universe: string, restartUniverseServersRequest: RestartUniverseServersRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cloudRestartUniverseServers(universe, restartUniverseServersRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     * @param creatorStoreProduct2 
     * @param updateMask The list of fields to update.
     * @param allowMissing If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     */
    public cloudUpdateCreatorStoreProductWithHttpInfo(creatorStoreProduct: string, creatorStoreProduct2: CreatorStoreProduct, updateMask?: string, allowMissing?: boolean, _options?: Configuration): Promise<HttpInfo<CreatorStoreProduct>> {
        const result = this.api.cloudUpdateCreatorStoreProductWithHttpInfo(creatorStoreProduct, creatorStoreProduct2, updateMask, allowMissing, _options);
        return result.toPromise();
    }

    /**
     * Update a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     * @param creatorStoreProduct2 
     * @param updateMask The list of fields to update.
     * @param allowMissing If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     */
    public cloudUpdateCreatorStoreProduct(creatorStoreProduct: string, creatorStoreProduct2: CreatorStoreProduct, updateMask?: string, allowMissing?: boolean, _options?: Configuration): Promise<CreatorStoreProduct> {
        const result = this.api.cloudUpdateCreatorStoreProduct(creatorStoreProduct, creatorStoreProduct2, updateMask, allowMissing, _options);
        return result.toPromise();
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param instance2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateInstanceWithHttpInfo(universe: string, place: string, instance: string, instance2: Instance, updateMask?: string, _options?: Configuration): Promise<HttpInfo<Operation>> {
        const result = this.api.cloudUpdateInstanceWithHttpInfo(universe, place, instance, instance2, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param instance2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateInstance(universe: string, place: string, instance: string, instance2: Instance, updateMask?: string, _options?: Configuration): Promise<Operation> {
        const result = this.api.cloudUpdateInstance(universe, place, instance, instance2, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param place2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdatePlaceWithHttpInfo(universe: string, place: string, place2: Place, updateMask?: string, _options?: Configuration): Promise<HttpInfo<Place>> {
        const result = this.api.cloudUpdatePlaceWithHttpInfo(universe, place, place2, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param place2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdatePlace(universe: string, place: string, place2: Place, updateMask?: string, _options?: Configuration): Promise<Place> {
        const result = this.api.cloudUpdatePlace(universe, place, place2, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param universe The universe ID.
     * @param universe2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateUniverseWithHttpInfo(universe: string, universe2: Universe, updateMask?: string, _options?: Configuration): Promise<HttpInfo<Universe>> {
        const result = this.api.cloudUpdateUniverseWithHttpInfo(universe, universe2, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param universe The universe ID.
     * @param universe2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateUniverse(universe: string, universe2: Universe, updateMask?: string, _options?: Configuration): Promise<Universe> {
        const result = this.api.cloudUpdateUniverse(universe, universe2, updateMask, _options);
        return result.toPromise();
    }


}



