import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
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

import { CloudApiRequestFactory, CloudApiResponseProcessor} from "../apis/CloudApi";
export class ObservableCloudApi {
    private requestFactory: CloudApiRequestFactory;
    private responseProcessor: CloudApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudApiRequestFactory,
        responseProcessor?: CloudApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CloudApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CloudApiResponseProcessor();
    }

    /**
     * Accepts a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public cloudAcceptGroupJoinRequestWithHttpInfo(group: string, joinRequest: string, body: any, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cloudAcceptGroupJoinRequest(group, joinRequest, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudAcceptGroupJoinRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accepts a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public cloudAcceptGroupJoinRequest(group: string, joinRequest: string, body: any, _options?: Configuration): Observable<void> {
        return this.cloudAcceptGroupJoinRequestWithHttpInfo(group, joinRequest, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Accepts a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public cloudAcceptGroupJoinRequest_1WithHttpInfo(group: string, joinRequest: string, body: any, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cloudAcceptGroupJoinRequest_1(group, joinRequest, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudAcceptGroupJoinRequest_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Accepts a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public cloudAcceptGroupJoinRequest_1(group: string, joinRequest: string, body: any, _options?: Configuration): Observable<void> {
        return this.cloudAcceptGroupJoinRequest_1WithHttpInfo(group, joinRequest, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Add a Creator Store product.
     * @param creatorStoreProduct 
     */
    public cloudCreateCreatorStoreProductWithHttpInfo(creatorStoreProduct: CreatorStoreProduct, _options?: Configuration): Observable<HttpInfo<CreatorStoreProduct>> {
        const requestContextPromise = this.requestFactory.cloudCreateCreatorStoreProduct(creatorStoreProduct, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudCreateCreatorStoreProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a Creator Store product.
     * @param creatorStoreProduct 
     */
    public cloudCreateCreatorStoreProduct(creatorStoreProduct: CreatorStoreProduct, _options?: Configuration): Observable<CreatorStoreProduct> {
        return this.cloudCreateCreatorStoreProductWithHttpInfo(creatorStoreProduct, _options).pipe(map((apiResponse: HttpInfo<CreatorStoreProduct>) => apiResponse.data));
    }

    /**
     * Add a Creator Store product.
     * @param creatorStoreProduct 
     */
    public cloudCreateCreatorStoreProduct_2WithHttpInfo(creatorStoreProduct: CreatorStoreProduct, _options?: Configuration): Observable<HttpInfo<CreatorStoreProduct>> {
        const requestContextPromise = this.requestFactory.cloudCreateCreatorStoreProduct_2(creatorStoreProduct, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudCreateCreatorStoreProduct_2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a Creator Store product.
     * @param creatorStoreProduct 
     */
    public cloudCreateCreatorStoreProduct_2(creatorStoreProduct: CreatorStoreProduct, _options?: Configuration): Observable<CreatorStoreProduct> {
        return this.cloudCreateCreatorStoreProduct_2WithHttpInfo(creatorStoreProduct, _options).pipe(map((apiResponse: HttpInfo<CreatorStoreProduct>) => apiResponse.data));
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param memoryStoreQueueItem 
     */
    public cloudCreateMemoryStoreQueueItemWithHttpInfo(universe: string, queue: string, memoryStoreQueueItem: MemoryStoreQueueItem, _options?: Configuration): Observable<HttpInfo<MemoryStoreQueueItem>> {
        const requestContextPromise = this.requestFactory.cloudCreateMemoryStoreQueueItem(universe, queue, memoryStoreQueueItem, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudCreateMemoryStoreQueueItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param memoryStoreQueueItem 
     */
    public cloudCreateMemoryStoreQueueItem(universe: string, queue: string, memoryStoreQueueItem: MemoryStoreQueueItem, _options?: Configuration): Observable<MemoryStoreQueueItem> {
        return this.cloudCreateMemoryStoreQueueItemWithHttpInfo(universe, queue, memoryStoreQueueItem, _options).pipe(map((apiResponse: HttpInfo<MemoryStoreQueueItem>) => apiResponse.data));
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param memoryStoreQueueItem 
     */
    public cloudCreateMemoryStoreQueueItem_3WithHttpInfo(universe: string, queue: string, memoryStoreQueueItem: MemoryStoreQueueItem, _options?: Configuration): Observable<HttpInfo<MemoryStoreQueueItem>> {
        const requestContextPromise = this.requestFactory.cloudCreateMemoryStoreQueueItem_3(universe, queue, memoryStoreQueueItem, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudCreateMemoryStoreQueueItem_3WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param memoryStoreQueueItem 
     */
    public cloudCreateMemoryStoreQueueItem_3(universe: string, queue: string, memoryStoreQueueItem: MemoryStoreQueueItem, _options?: Configuration): Observable<MemoryStoreQueueItem> {
        return this.cloudCreateMemoryStoreQueueItem_3WithHttpInfo(universe, queue, memoryStoreQueueItem, _options).pipe(map((apiResponse: HttpInfo<MemoryStoreQueueItem>) => apiResponse.data));
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param memoryStoreSortedMapItem 
     * @param id The ID to use for the memory store sorted map item, which will become the  final component of the memory store sorted map item\&#39;s resource path.   This value should be a 1-127 character string that supports alphanumeric  and special characters. This id is case sensitive. The id must be url  encoded if it contains any url breaking special characters.
     */
    public cloudCreateMemoryStoreSortedMapItemWithHttpInfo(universe: string, sortedMap: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, id?: string, _options?: Configuration): Observable<HttpInfo<MemoryStoreSortedMapItem>> {
        const requestContextPromise = this.requestFactory.cloudCreateMemoryStoreSortedMapItem(universe, sortedMap, memoryStoreSortedMapItem, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudCreateMemoryStoreSortedMapItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param memoryStoreSortedMapItem 
     * @param id The ID to use for the memory store sorted map item, which will become the  final component of the memory store sorted map item\&#39;s resource path.   This value should be a 1-127 character string that supports alphanumeric  and special characters. This id is case sensitive. The id must be url  encoded if it contains any url breaking special characters.
     */
    public cloudCreateMemoryStoreSortedMapItem(universe: string, sortedMap: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, id?: string, _options?: Configuration): Observable<MemoryStoreSortedMapItem> {
        return this.cloudCreateMemoryStoreSortedMapItemWithHttpInfo(universe, sortedMap, memoryStoreSortedMapItem, id, _options).pipe(map((apiResponse: HttpInfo<MemoryStoreSortedMapItem>) => apiResponse.data));
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param memoryStoreSortedMapItem 
     * @param id The ID to use for the memory store sorted map item, which will become the  final component of the memory store sorted map item\&#39;s resource path.   This value should be a 1-127 character string that supports alphanumeric  and special characters. This id is case sensitive. The id must be url  encoded if it contains any url breaking special characters.
     */
    public cloudCreateMemoryStoreSortedMapItem_4WithHttpInfo(universe: string, sortedMap: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, id?: string, _options?: Configuration): Observable<HttpInfo<MemoryStoreSortedMapItem>> {
        const requestContextPromise = this.requestFactory.cloudCreateMemoryStoreSortedMapItem_4(universe, sortedMap, memoryStoreSortedMapItem, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudCreateMemoryStoreSortedMapItem_4WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param memoryStoreSortedMapItem 
     * @param id The ID to use for the memory store sorted map item, which will become the  final component of the memory store sorted map item\&#39;s resource path.   This value should be a 1-127 character string that supports alphanumeric  and special characters. This id is case sensitive. The id must be url  encoded if it contains any url breaking special characters.
     */
    public cloudCreateMemoryStoreSortedMapItem_4(universe: string, sortedMap: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, id?: string, _options?: Configuration): Observable<MemoryStoreSortedMapItem> {
        return this.cloudCreateMemoryStoreSortedMapItem_4WithHttpInfo(universe, sortedMap, memoryStoreSortedMapItem, id, _options).pipe(map((apiResponse: HttpInfo<MemoryStoreSortedMapItem>) => apiResponse.data));
    }

    /**
     * Sends a notification to a user.
     * @param user The user ID.
     * @param userNotification 
     */
    public cloudCreateUserNotificationWithHttpInfo(user: string, userNotification: UserNotification, _options?: Configuration): Observable<HttpInfo<UserNotification>> {
        const requestContextPromise = this.requestFactory.cloudCreateUserNotification(user, userNotification, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudCreateUserNotificationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sends a notification to a user.
     * @param user The user ID.
     * @param userNotification 
     */
    public cloudCreateUserNotification(user: string, userNotification: UserNotification, _options?: Configuration): Observable<UserNotification> {
        return this.cloudCreateUserNotificationWithHttpInfo(user, userNotification, _options).pipe(map((apiResponse: HttpInfo<UserNotification>) => apiResponse.data));
    }

    /**
     * Sends a notification to a user.
     * @param user The user ID.
     * @param userNotification 
     */
    public cloudCreateUserNotification_5WithHttpInfo(user: string, userNotification: UserNotification, _options?: Configuration): Observable<HttpInfo<UserNotification>> {
        const requestContextPromise = this.requestFactory.cloudCreateUserNotification_5(user, userNotification, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudCreateUserNotification_5WithHttpInfo(rsp)));
            }));
    }

    /**
     * Sends a notification to a user.
     * @param user The user ID.
     * @param userNotification 
     */
    public cloudCreateUserNotification_5(user: string, userNotification: UserNotification, _options?: Configuration): Observable<UserNotification> {
        return this.cloudCreateUserNotification_5WithHttpInfo(user, userNotification, _options).pipe(map((apiResponse: HttpInfo<UserNotification>) => apiResponse.data));
    }

    /**
     * Declines a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public cloudDeclineGroupJoinRequestWithHttpInfo(group: string, joinRequest: string, body: any, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cloudDeclineGroupJoinRequest(group, joinRequest, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudDeclineGroupJoinRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Declines a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public cloudDeclineGroupJoinRequest(group: string, joinRequest: string, body: any, _options?: Configuration): Observable<void> {
        return this.cloudDeclineGroupJoinRequestWithHttpInfo(group, joinRequest, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Declines a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public cloudDeclineGroupJoinRequest_6WithHttpInfo(group: string, joinRequest: string, body: any, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cloudDeclineGroupJoinRequest_6(group, joinRequest, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudDeclineGroupJoinRequest_6WithHttpInfo(rsp)));
            }));
    }

    /**
     * Declines a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public cloudDeclineGroupJoinRequest_6(group: string, joinRequest: string, body: any, _options?: Configuration): Observable<void> {
        return this.cloudDeclineGroupJoinRequest_6WithHttpInfo(group, joinRequest, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified item from the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public cloudDeleteMemoryStoreSortedMapItemWithHttpInfo(universe: string, sortedMap: string, item: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cloudDeleteMemoryStoreSortedMapItem(universe, sortedMap, item, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudDeleteMemoryStoreSortedMapItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified item from the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public cloudDeleteMemoryStoreSortedMapItem(universe: string, sortedMap: string, item: string, _options?: Configuration): Observable<void> {
        return this.cloudDeleteMemoryStoreSortedMapItemWithHttpInfo(universe, sortedMap, item, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified item from the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public cloudDeleteMemoryStoreSortedMapItem_7WithHttpInfo(universe: string, sortedMap: string, item: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cloudDeleteMemoryStoreSortedMapItem_7(universe, sortedMap, item, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudDeleteMemoryStoreSortedMapItem_7WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified item from the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public cloudDeleteMemoryStoreSortedMapItem_7(universe: string, sortedMap: string, item: string, _options?: Configuration): Observable<void> {
        return this.cloudDeleteMemoryStoreSortedMapItem_7WithHttpInfo(universe, sortedMap, item, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param discardMemoryStoreQueueItemsRequest 
     */
    public cloudDiscardMemoryStoreQueueItemsWithHttpInfo(universe: string, queue: string, discardMemoryStoreQueueItemsRequest: DiscardMemoryStoreQueueItemsRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cloudDiscardMemoryStoreQueueItems(universe, queue, discardMemoryStoreQueueItemsRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudDiscardMemoryStoreQueueItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param discardMemoryStoreQueueItemsRequest 
     */
    public cloudDiscardMemoryStoreQueueItems(universe: string, queue: string, discardMemoryStoreQueueItemsRequest: DiscardMemoryStoreQueueItemsRequest, _options?: Configuration): Observable<void> {
        return this.cloudDiscardMemoryStoreQueueItemsWithHttpInfo(universe, queue, discardMemoryStoreQueueItemsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param discardMemoryStoreQueueItemsRequest 
     */
    public cloudDiscardMemoryStoreQueueItems_8WithHttpInfo(universe: string, queue: string, discardMemoryStoreQueueItemsRequest: DiscardMemoryStoreQueueItemsRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cloudDiscardMemoryStoreQueueItems_8(universe, queue, discardMemoryStoreQueueItemsRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudDiscardMemoryStoreQueueItems_8WithHttpInfo(rsp)));
            }));
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param discardMemoryStoreQueueItemsRequest 
     */
    public cloudDiscardMemoryStoreQueueItems_8(universe: string, queue: string, discardMemoryStoreQueueItemsRequest: DiscardMemoryStoreQueueItemsRequest, _options?: Configuration): Observable<void> {
        return this.cloudDiscardMemoryStoreQueueItems_8WithHttpInfo(universe, queue, discardMemoryStoreQueueItemsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param universe The universe ID.
     * @param body 
     */
    public cloudFlushMemoryStoreWithHttpInfo(universe: string, body: any, _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudFlushMemoryStore(universe, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudFlushMemoryStoreWithHttpInfo(rsp)));
            }));
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param universe The universe ID.
     * @param body 
     */
    public cloudFlushMemoryStore(universe: string, body: any, _options?: Configuration): Observable<Operation> {
        return this.cloudFlushMemoryStoreWithHttpInfo(universe, body, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param universe The universe ID.
     * @param body 
     */
    public cloudFlushMemoryStore_9WithHttpInfo(universe: string, body: any, _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudFlushMemoryStore_9(universe, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudFlushMemoryStore_9WithHttpInfo(rsp)));
            }));
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param universe The universe ID.
     * @param body 
     */
    public cloudFlushMemoryStore_9(universe: string, body: any, _options?: Configuration): Observable<Operation> {
        return this.cloudFlushMemoryStore_9WithHttpInfo(universe, body, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param user The user ID.
     * @param size Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @param format Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @param shape Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     */
    public cloudGenerateUserThumbnailWithHttpInfo(user: string, size?: number, format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG', shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE', _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudGenerateUserThumbnail(user, size, format, shape, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGenerateUserThumbnailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param user The user ID.
     * @param size Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @param format Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @param shape Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     */
    public cloudGenerateUserThumbnail(user: string, size?: number, format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG', shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE', _options?: Configuration): Observable<Operation> {
        return this.cloudGenerateUserThumbnailWithHttpInfo(user, size, format, shape, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param user The user ID.
     * @param size Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @param format Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @param shape Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     */
    public cloudGenerateUserThumbnail_10WithHttpInfo(user: string, size?: number, format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG', shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE', _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudGenerateUserThumbnail_10(user, size, format, shape, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGenerateUserThumbnail_10WithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param user The user ID.
     * @param size Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @param format Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @param shape Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     */
    public cloudGenerateUserThumbnail_10(user: string, size?: number, format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG', shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE', _options?: Configuration): Observable<Operation> {
        return this.cloudGenerateUserThumbnail_10WithHttpInfo(user, size, format, shape, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * Get a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     */
    public cloudGetCreatorStoreProductWithHttpInfo(creatorStoreProduct: string, _options?: Configuration): Observable<HttpInfo<CreatorStoreProduct>> {
        const requestContextPromise = this.requestFactory.cloudGetCreatorStoreProduct(creatorStoreProduct, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetCreatorStoreProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     */
    public cloudGetCreatorStoreProduct(creatorStoreProduct: string, _options?: Configuration): Observable<CreatorStoreProduct> {
        return this.cloudGetCreatorStoreProductWithHttpInfo(creatorStoreProduct, _options).pipe(map((apiResponse: HttpInfo<CreatorStoreProduct>) => apiResponse.data));
    }

    /**
     * Get a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     */
    public cloudGetCreatorStoreProduct_11WithHttpInfo(creatorStoreProduct: string, _options?: Configuration): Observable<HttpInfo<CreatorStoreProduct>> {
        const requestContextPromise = this.requestFactory.cloudGetCreatorStoreProduct_11(creatorStoreProduct, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetCreatorStoreProduct_11WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     */
    public cloudGetCreatorStoreProduct_11(creatorStoreProduct: string, _options?: Configuration): Observable<CreatorStoreProduct> {
        return this.cloudGetCreatorStoreProduct_11WithHttpInfo(creatorStoreProduct, _options).pipe(map((apiResponse: HttpInfo<CreatorStoreProduct>) => apiResponse.data));
    }

    /**
     * Gets the specified group.
     * @param group The group ID.
     */
    public cloudGetGroupWithHttpInfo(group: string, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.cloudGetGroup(group, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the specified group.
     * @param group The group ID.
     */
    public cloudGetGroup(group: string, _options?: Configuration): Observable<Group> {
        return this.cloudGetGroupWithHttpInfo(group, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param group The group ID.
     */
    public cloudGetGroupShoutWithHttpInfo(group: string, _options?: Configuration): Observable<HttpInfo<GroupShout>> {
        const requestContextPromise = this.requestFactory.cloudGetGroupShout(group, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetGroupShoutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param group The group ID.
     */
    public cloudGetGroupShout(group: string, _options?: Configuration): Observable<GroupShout> {
        return this.cloudGetGroupShoutWithHttpInfo(group, _options).pipe(map((apiResponse: HttpInfo<GroupShout>) => apiResponse.data));
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param group The group ID.
     */
    public cloudGetGroupShout_12WithHttpInfo(group: string, _options?: Configuration): Observable<HttpInfo<GroupShout>> {
        const requestContextPromise = this.requestFactory.cloudGetGroupShout_12(group, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetGroupShout_12WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param group The group ID.
     */
    public cloudGetGroupShout_12(group: string, _options?: Configuration): Observable<GroupShout> {
        return this.cloudGetGroupShout_12WithHttpInfo(group, _options).pipe(map((apiResponse: HttpInfo<GroupShout>) => apiResponse.data));
    }

    /**
     * Gets the specified group.
     * @param group The group ID.
     */
    public cloudGetGroup_13WithHttpInfo(group: string, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.cloudGetGroup_13(group, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetGroup_13WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the specified group.
     * @param group The group ID.
     */
    public cloudGetGroup_13(group: string, _options?: Configuration): Observable<Group> {
        return this.cloudGetGroup_13WithHttpInfo(group, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     */
    public cloudGetInstanceWithHttpInfo(universe: string, place: string, instance: string, _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudGetInstance(universe, place, instance, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetInstanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     */
    public cloudGetInstance(universe: string, place: string, instance: string, _options?: Configuration): Observable<Operation> {
        return this.cloudGetInstanceWithHttpInfo(universe, place, instance, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     */
    public cloudGetInstance_14WithHttpInfo(universe: string, place: string, instance: string, _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudGetInstance_14(universe, place, instance, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetInstance_14WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     */
    public cloudGetInstance_14(universe: string, place: string, instance: string, _options?: Configuration): Observable<Operation> {
        return this.cloudGetInstance_14WithHttpInfo(universe, place, instance, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public cloudGetMemoryStoreSortedMapItemWithHttpInfo(universe: string, sortedMap: string, item: string, _options?: Configuration): Observable<HttpInfo<MemoryStoreSortedMapItem>> {
        const requestContextPromise = this.requestFactory.cloudGetMemoryStoreSortedMapItem(universe, sortedMap, item, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetMemoryStoreSortedMapItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public cloudGetMemoryStoreSortedMapItem(universe: string, sortedMap: string, item: string, _options?: Configuration): Observable<MemoryStoreSortedMapItem> {
        return this.cloudGetMemoryStoreSortedMapItemWithHttpInfo(universe, sortedMap, item, _options).pipe(map((apiResponse: HttpInfo<MemoryStoreSortedMapItem>) => apiResponse.data));
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public cloudGetMemoryStoreSortedMapItem_15WithHttpInfo(universe: string, sortedMap: string, item: string, _options?: Configuration): Observable<HttpInfo<MemoryStoreSortedMapItem>> {
        const requestContextPromise = this.requestFactory.cloudGetMemoryStoreSortedMapItem_15(universe, sortedMap, item, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetMemoryStoreSortedMapItem_15WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public cloudGetMemoryStoreSortedMapItem_15(universe: string, sortedMap: string, item: string, _options?: Configuration): Observable<MemoryStoreSortedMapItem> {
        return this.cloudGetMemoryStoreSortedMapItem_15WithHttpInfo(universe, sortedMap, item, _options).pipe(map((apiResponse: HttpInfo<MemoryStoreSortedMapItem>) => apiResponse.data));
    }

    /**
     * Gets the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     */
    public cloudGetPlaceWithHttpInfo(universe: string, place: string, _options?: Configuration): Observable<HttpInfo<Place>> {
        const requestContextPromise = this.requestFactory.cloudGetPlace(universe, place, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetPlaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     */
    public cloudGetPlace(universe: string, place: string, _options?: Configuration): Observable<Place> {
        return this.cloudGetPlaceWithHttpInfo(universe, place, _options).pipe(map((apiResponse: HttpInfo<Place>) => apiResponse.data));
    }

    /**
     * Gets the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     */
    public cloudGetPlace_16WithHttpInfo(universe: string, place: string, _options?: Configuration): Observable<HttpInfo<Place>> {
        const requestContextPromise = this.requestFactory.cloudGetPlace_16(universe, place, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetPlace_16WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     */
    public cloudGetPlace_16(universe: string, place: string, _options?: Configuration): Observable<Place> {
        return this.cloudGetPlace_16WithHttpInfo(universe, place, _options).pipe(map((apiResponse: HttpInfo<Place>) => apiResponse.data));
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param universe The universe ID.
     * @param subscriptionProduct The subscription-product ID.
     * @param subscription The subscription ID.
     * @param view The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     */
    public cloudGetSubscriptionWithHttpInfo(universe: string, subscriptionProduct: string, subscription: string, view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL', _options?: Configuration): Observable<HttpInfo<Subscription>> {
        const requestContextPromise = this.requestFactory.cloudGetSubscription(universe, subscriptionProduct, subscription, view, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param universe The universe ID.
     * @param subscriptionProduct The subscription-product ID.
     * @param subscription The subscription ID.
     * @param view The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     */
    public cloudGetSubscription(universe: string, subscriptionProduct: string, subscription: string, view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL', _options?: Configuration): Observable<Subscription> {
        return this.cloudGetSubscriptionWithHttpInfo(universe, subscriptionProduct, subscription, view, _options).pipe(map((apiResponse: HttpInfo<Subscription>) => apiResponse.data));
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param universe The universe ID.
     * @param subscriptionProduct The subscription-product ID.
     * @param subscription The subscription ID.
     * @param view The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     */
    public cloudGetSubscription_17WithHttpInfo(universe: string, subscriptionProduct: string, subscription: string, view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL', _options?: Configuration): Observable<HttpInfo<Subscription>> {
        const requestContextPromise = this.requestFactory.cloudGetSubscription_17(universe, subscriptionProduct, subscription, view, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetSubscription_17WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param universe The universe ID.
     * @param subscriptionProduct The subscription-product ID.
     * @param subscription The subscription ID.
     * @param view The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     */
    public cloudGetSubscription_17(universe: string, subscriptionProduct: string, subscription: string, view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL', _options?: Configuration): Observable<Subscription> {
        return this.cloudGetSubscription_17WithHttpInfo(universe, subscriptionProduct, subscription, view, _options).pipe(map((apiResponse: HttpInfo<Subscription>) => apiResponse.data));
    }

    /**
     * Gets the specified universe.
     * @param universe The universe ID.
     */
    public cloudGetUniverseWithHttpInfo(universe: string, _options?: Configuration): Observable<HttpInfo<Universe>> {
        const requestContextPromise = this.requestFactory.cloudGetUniverse(universe, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetUniverseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the specified universe.
     * @param universe The universe ID.
     */
    public cloudGetUniverse(universe: string, _options?: Configuration): Observable<Universe> {
        return this.cloudGetUniverseWithHttpInfo(universe, _options).pipe(map((apiResponse: HttpInfo<Universe>) => apiResponse.data));
    }

    /**
     * Gets the specified universe.
     * @param universe The universe ID.
     */
    public cloudGetUniverse_18WithHttpInfo(universe: string, _options?: Configuration): Observable<HttpInfo<Universe>> {
        const requestContextPromise = this.requestFactory.cloudGetUniverse_18(universe, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetUniverse_18WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the specified universe.
     * @param universe The universe ID.
     */
    public cloudGetUniverse_18(universe: string, _options?: Configuration): Observable<Universe> {
        return this.cloudGetUniverse_18WithHttpInfo(universe, _options).pipe(map((apiResponse: HttpInfo<Universe>) => apiResponse.data));
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param user The user ID.
     */
    public cloudGetUserWithHttpInfo(user: string, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.cloudGetUser(user, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param user The user ID.
     */
    public cloudGetUser(user: string, _options?: Configuration): Observable<User> {
        return this.cloudGetUserWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     */
    public cloudGetUserRestrictionWithHttpInfo(universe: string, place: string, userRestriction: string, _options?: Configuration): Observable<HttpInfo<UserRestriction>> {
        const requestContextPromise = this.requestFactory.cloudGetUserRestriction(universe, place, userRestriction, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetUserRestrictionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     */
    public cloudGetUserRestriction(universe: string, place: string, userRestriction: string, _options?: Configuration): Observable<UserRestriction> {
        return this.cloudGetUserRestrictionWithHttpInfo(universe, place, userRestriction, _options).pipe(map((apiResponse: HttpInfo<UserRestriction>) => apiResponse.data));
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     */
    public cloudGetUserRestriction_19WithHttpInfo(universe: string, userRestriction: string, _options?: Configuration): Observable<HttpInfo<UserRestriction>> {
        const requestContextPromise = this.requestFactory.cloudGetUserRestriction_19(universe, userRestriction, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetUserRestriction_19WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     */
    public cloudGetUserRestriction_19(universe: string, userRestriction: string, _options?: Configuration): Observable<UserRestriction> {
        return this.cloudGetUserRestriction_19WithHttpInfo(universe, userRestriction, _options).pipe(map((apiResponse: HttpInfo<UserRestriction>) => apiResponse.data));
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     */
    public cloudGetUserRestriction_20WithHttpInfo(universe: string, place: string, userRestriction: string, _options?: Configuration): Observable<HttpInfo<UserRestriction>> {
        const requestContextPromise = this.requestFactory.cloudGetUserRestriction_20(universe, place, userRestriction, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetUserRestriction_20WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     */
    public cloudGetUserRestriction_20(universe: string, place: string, userRestriction: string, _options?: Configuration): Observable<UserRestriction> {
        return this.cloudGetUserRestriction_20WithHttpInfo(universe, place, userRestriction, _options).pipe(map((apiResponse: HttpInfo<UserRestriction>) => apiResponse.data));
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     */
    public cloudGetUserRestriction_21WithHttpInfo(universe: string, userRestriction: string, _options?: Configuration): Observable<HttpInfo<UserRestriction>> {
        const requestContextPromise = this.requestFactory.cloudGetUserRestriction_21(universe, userRestriction, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetUserRestriction_21WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     */
    public cloudGetUserRestriction_21(universe: string, userRestriction: string, _options?: Configuration): Observable<UserRestriction> {
        return this.cloudGetUserRestriction_21WithHttpInfo(universe, userRestriction, _options).pipe(map((apiResponse: HttpInfo<UserRestriction>) => apiResponse.data));
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param user The user ID.
     */
    public cloudGetUser_22WithHttpInfo(user: string, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.cloudGetUser_22(user, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudGetUser_22WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param user The user ID.
     */
    public cloudGetUser_22(user: string, _options?: Configuration): Observable<User> {
        return this.cloudGetUser_22WithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * List join requests under a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     */
    public cloudListGroupJoinRequestsWithHttpInfo(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListGroupJoinRequestsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListGroupJoinRequests(group, maxPageSize, pageToken, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListGroupJoinRequestsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List join requests under a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     */
    public cloudListGroupJoinRequests(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<ListGroupJoinRequestsResponse> {
        return this.cloudListGroupJoinRequestsWithHttpInfo(group, maxPageSize, pageToken, filter, _options).pipe(map((apiResponse: HttpInfo<ListGroupJoinRequestsResponse>) => apiResponse.data));
    }

    /**
     * List join requests under a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     */
    public cloudListGroupJoinRequests_23WithHttpInfo(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListGroupJoinRequestsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListGroupJoinRequests_23(group, maxPageSize, pageToken, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListGroupJoinRequests_23WithHttpInfo(rsp)));
            }));
    }

    /**
     * List join requests under a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     */
    public cloudListGroupJoinRequests_23(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<ListGroupJoinRequestsResponse> {
        return this.cloudListGroupJoinRequests_23WithHttpInfo(group, maxPageSize, pageToken, filter, _options).pipe(map((apiResponse: HttpInfo<ListGroupJoinRequestsResponse>) => apiResponse.data));
    }

    /**
     * List group members in a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     */
    public cloudListGroupMembershipsWithHttpInfo(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListGroupMembershipsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListGroupMemberships(group, maxPageSize, pageToken, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListGroupMembershipsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List group members in a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     */
    public cloudListGroupMemberships(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<ListGroupMembershipsResponse> {
        return this.cloudListGroupMembershipsWithHttpInfo(group, maxPageSize, pageToken, filter, _options).pipe(map((apiResponse: HttpInfo<ListGroupMembershipsResponse>) => apiResponse.data));
    }

    /**
     * List group members in a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     */
    public cloudListGroupMemberships_24WithHttpInfo(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListGroupMembershipsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListGroupMemberships_24(group, maxPageSize, pageToken, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListGroupMemberships_24WithHttpInfo(rsp)));
            }));
    }

    /**
     * List group members in a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     */
    public cloudListGroupMemberships_24(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<ListGroupMembershipsResponse> {
        return this.cloudListGroupMemberships_24WithHttpInfo(group, maxPageSize, pageToken, filter, _options).pipe(map((apiResponse: HttpInfo<ListGroupMembershipsResponse>) => apiResponse.data));
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     */
    public cloudListGroupRolesWithHttpInfo(group: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListGroupRolesResponse>> {
        const requestContextPromise = this.requestFactory.cloudListGroupRoles(group, maxPageSize, pageToken, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListGroupRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     */
    public cloudListGroupRoles(group: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListGroupRolesResponse> {
        return this.cloudListGroupRolesWithHttpInfo(group, maxPageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListGroupRolesResponse>) => apiResponse.data));
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     */
    public cloudListGroupRoles_25WithHttpInfo(group: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListGroupRolesResponse>> {
        const requestContextPromise = this.requestFactory.cloudListGroupRoles_25(group, maxPageSize, pageToken, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListGroupRoles_25WithHttpInfo(rsp)));
            }));
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     */
    public cloudListGroupRoles_25(group: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListGroupRolesResponse> {
        return this.cloudListGroupRoles_25WithHttpInfo(group, maxPageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListGroupRolesResponse>) => apiResponse.data));
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param maxPageSize The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @param pageToken A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     */
    public cloudListInstanceChildrenWithHttpInfo(universe: string, place: string, instance: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudListInstanceChildren(universe, place, instance, maxPageSize, pageToken, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListInstanceChildrenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param maxPageSize The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @param pageToken A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     */
    public cloudListInstanceChildren(universe: string, place: string, instance: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Observable<Operation> {
        return this.cloudListInstanceChildrenWithHttpInfo(universe, place, instance, maxPageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param maxPageSize The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @param pageToken A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     */
    public cloudListInstanceChildren_26WithHttpInfo(universe: string, place: string, instance: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudListInstanceChildren_26(universe, place, instance, maxPageSize, pageToken, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListInstanceChildren_26WithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param maxPageSize The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @param pageToken A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     */
    public cloudListInstanceChildren_26(universe: string, place: string, instance: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Observable<Operation> {
        return this.cloudListInstanceChildren_26WithHttpInfo(universe, place, instance, maxPageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param user The user ID.
     * @param maxPageSize The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     */
    public cloudListInventoryItemsWithHttpInfo(user: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListInventoryItemsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListInventoryItems(user, maxPageSize, pageToken, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListInventoryItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param user The user ID.
     * @param maxPageSize The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     */
    public cloudListInventoryItems(user: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<ListInventoryItemsResponse> {
        return this.cloudListInventoryItemsWithHttpInfo(user, maxPageSize, pageToken, filter, _options).pipe(map((apiResponse: HttpInfo<ListInventoryItemsResponse>) => apiResponse.data));
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param user The user ID.
     * @param maxPageSize The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     */
    public cloudListInventoryItems_27WithHttpInfo(user: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListInventoryItemsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListInventoryItems_27(user, maxPageSize, pageToken, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListInventoryItems_27WithHttpInfo(rsp)));
            }));
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param user The user ID.
     * @param maxPageSize The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     */
    public cloudListInventoryItems_27(user: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<ListInventoryItemsResponse> {
        return this.cloudListInventoryItems_27WithHttpInfo(user, maxPageSize, pageToken, filter, _options).pipe(map((apiResponse: HttpInfo<ListInventoryItemsResponse>) => apiResponse.data));
    }

    /**
     * Gets and returns items in the map with a given order and filter.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param maxPageSize The maximum number of memory store sorted map items to return. The service  might return fewer than this value. If unspecified, at most 1 memory store  sorted map items are returned. The maximum value is 100 and higher values  are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param orderBy If specified, results are ordered according to the specified fields.   Values must be a comma-separated list of fields, with an optional,  per-field \&quot; desc\&quot; suffix to sort by descending rather than ascending  values. You can access subfields with a &#x60;.&#x60; operator.   Results may be ordered by the following fields: id.   Example: \&quot;id desc\&quot;
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;id&#x60;  and &#x60;sortKey&#x60; fields are supported. In terms of operators, only &#x60;&lt;&#x60;, &#x60;&gt;&#x60;  and &#x60;&amp;&amp;&#x60; are allowed\&#39;   Example: &#x60;id &gt; \&quot;key-001\&quot; &amp;&amp; id &lt; \&quot;key-100\&quot;&#x60;
     */
    public cloudListMemoryStoreSortedMapItemsWithHttpInfo(universe: string, sortedMap: string, maxPageSize?: number, pageToken?: string, orderBy?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListMemoryStoreSortedMapItemsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListMemoryStoreSortedMapItems(universe, sortedMap, maxPageSize, pageToken, orderBy, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListMemoryStoreSortedMapItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets and returns items in the map with a given order and filter.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param maxPageSize The maximum number of memory store sorted map items to return. The service  might return fewer than this value. If unspecified, at most 1 memory store  sorted map items are returned. The maximum value is 100 and higher values  are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param orderBy If specified, results are ordered according to the specified fields.   Values must be a comma-separated list of fields, with an optional,  per-field \&quot; desc\&quot; suffix to sort by descending rather than ascending  values. You can access subfields with a &#x60;.&#x60; operator.   Results may be ordered by the following fields: id.   Example: \&quot;id desc\&quot;
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;id&#x60;  and &#x60;sortKey&#x60; fields are supported. In terms of operators, only &#x60;&lt;&#x60;, &#x60;&gt;&#x60;  and &#x60;&amp;&amp;&#x60; are allowed\&#39;   Example: &#x60;id &gt; \&quot;key-001\&quot; &amp;&amp; id &lt; \&quot;key-100\&quot;&#x60;
     */
    public cloudListMemoryStoreSortedMapItems(universe: string, sortedMap: string, maxPageSize?: number, pageToken?: string, orderBy?: string, filter?: string, _options?: Configuration): Observable<ListMemoryStoreSortedMapItemsResponse> {
        return this.cloudListMemoryStoreSortedMapItemsWithHttpInfo(universe, sortedMap, maxPageSize, pageToken, orderBy, filter, _options).pipe(map((apiResponse: HttpInfo<ListMemoryStoreSortedMapItemsResponse>) => apiResponse.data));
    }

    /**
     * Gets and returns items in the map with a given order and filter.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param maxPageSize The maximum number of memory store sorted map items to return. The service  might return fewer than this value. If unspecified, at most 1 memory store  sorted map items are returned. The maximum value is 100 and higher values  are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param orderBy If specified, results are ordered according to the specified fields.   Values must be a comma-separated list of fields, with an optional,  per-field \&quot; desc\&quot; suffix to sort by descending rather than ascending  values. You can access subfields with a &#x60;.&#x60; operator.   Results may be ordered by the following fields: id.   Example: \&quot;id desc\&quot;
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;id&#x60;  and &#x60;sortKey&#x60; fields are supported. In terms of operators, only &#x60;&lt;&#x60;, &#x60;&gt;&#x60;  and &#x60;&amp;&amp;&#x60; are allowed\&#39;   Example: &#x60;id &gt; \&quot;key-001\&quot; &amp;&amp; id &lt; \&quot;key-100\&quot;&#x60;
     */
    public cloudListMemoryStoreSortedMapItems_28WithHttpInfo(universe: string, sortedMap: string, maxPageSize?: number, pageToken?: string, orderBy?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListMemoryStoreSortedMapItemsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListMemoryStoreSortedMapItems_28(universe, sortedMap, maxPageSize, pageToken, orderBy, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListMemoryStoreSortedMapItems_28WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets and returns items in the map with a given order and filter.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param maxPageSize The maximum number of memory store sorted map items to return. The service  might return fewer than this value. If unspecified, at most 1 memory store  sorted map items are returned. The maximum value is 100 and higher values  are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param orderBy If specified, results are ordered according to the specified fields.   Values must be a comma-separated list of fields, with an optional,  per-field \&quot; desc\&quot; suffix to sort by descending rather than ascending  values. You can access subfields with a &#x60;.&#x60; operator.   Results may be ordered by the following fields: id.   Example: \&quot;id desc\&quot;
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;id&#x60;  and &#x60;sortKey&#x60; fields are supported. In terms of operators, only &#x60;&lt;&#x60;, &#x60;&gt;&#x60;  and &#x60;&amp;&amp;&#x60; are allowed\&#39;   Example: &#x60;id &gt; \&quot;key-001\&quot; &amp;&amp; id &lt; \&quot;key-100\&quot;&#x60;
     */
    public cloudListMemoryStoreSortedMapItems_28(universe: string, sortedMap: string, maxPageSize?: number, pageToken?: string, orderBy?: string, filter?: string, _options?: Configuration): Observable<ListMemoryStoreSortedMapItemsResponse> {
        return this.cloudListMemoryStoreSortedMapItems_28WithHttpInfo(universe, sortedMap, maxPageSize, pageToken, orderBy, filter, _options).pipe(map((apiResponse: HttpInfo<ListMemoryStoreSortedMapItemsResponse>) => apiResponse.data));
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param universe The universe ID.
     * @param maxPageSize The maximum number of UserRestrictionLogs to return. The service may return  fewer than this value. If unspecified, at most 10 UserRestrictionLogs are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set to filter the logs returned.   The &#x60;filter&#x60; field supports a very small number of CEL:   * &#x60;user&#x60;  * &#x60;place&#x60;  * The &#x60;&#x3D;&#x3D;&#x60; comparison operator is available.  * The &#x60;&amp;&amp;&#x60; logical operator is also supported.   As an example, filtering for a user and a place takes the form  &#x60;filter&#x3D;\&quot;user &#x3D;&#x3D; \&#39;users/123\&#39;\&quot; &amp;&amp; \&quot;place &#x3D;&#x3D; \&#39;places/456\&#39;\&quot;&#x60;
     */
    public cloudListUserRestrictionLogsWithHttpInfo(universe: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListUserRestrictionLogsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListUserRestrictionLogs(universe, maxPageSize, pageToken, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListUserRestrictionLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param universe The universe ID.
     * @param maxPageSize The maximum number of UserRestrictionLogs to return. The service may return  fewer than this value. If unspecified, at most 10 UserRestrictionLogs are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set to filter the logs returned.   The &#x60;filter&#x60; field supports a very small number of CEL:   * &#x60;user&#x60;  * &#x60;place&#x60;  * The &#x60;&#x3D;&#x3D;&#x60; comparison operator is available.  * The &#x60;&amp;&amp;&#x60; logical operator is also supported.   As an example, filtering for a user and a place takes the form  &#x60;filter&#x3D;\&quot;user &#x3D;&#x3D; \&#39;users/123\&#39;\&quot; &amp;&amp; \&quot;place &#x3D;&#x3D; \&#39;places/456\&#39;\&quot;&#x60;
     */
    public cloudListUserRestrictionLogs(universe: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<ListUserRestrictionLogsResponse> {
        return this.cloudListUserRestrictionLogsWithHttpInfo(universe, maxPageSize, pageToken, filter, _options).pipe(map((apiResponse: HttpInfo<ListUserRestrictionLogsResponse>) => apiResponse.data));
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param universe The universe ID.
     * @param maxPageSize The maximum number of UserRestrictionLogs to return. The service may return  fewer than this value. If unspecified, at most 10 UserRestrictionLogs are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set to filter the logs returned.   The &#x60;filter&#x60; field supports a very small number of CEL:   * &#x60;user&#x60;  * &#x60;place&#x60;  * The &#x60;&#x3D;&#x3D;&#x60; comparison operator is available.  * The &#x60;&amp;&amp;&#x60; logical operator is also supported.   As an example, filtering for a user and a place takes the form  &#x60;filter&#x3D;\&quot;user &#x3D;&#x3D; \&#39;users/123\&#39;\&quot; &amp;&amp; \&quot;place &#x3D;&#x3D; \&#39;places/456\&#39;\&quot;&#x60;
     */
    public cloudListUserRestrictionLogs_29WithHttpInfo(universe: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<HttpInfo<ListUserRestrictionLogsResponse>> {
        const requestContextPromise = this.requestFactory.cloudListUserRestrictionLogs_29(universe, maxPageSize, pageToken, filter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudListUserRestrictionLogs_29WithHttpInfo(rsp)));
            }));
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param universe The universe ID.
     * @param maxPageSize The maximum number of UserRestrictionLogs to return. The service may return  fewer than this value. If unspecified, at most 10 UserRestrictionLogs are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set to filter the logs returned.   The &#x60;filter&#x60; field supports a very small number of CEL:   * &#x60;user&#x60;  * &#x60;place&#x60;  * The &#x60;&#x3D;&#x3D;&#x60; comparison operator is available.  * The &#x60;&amp;&amp;&#x60; logical operator is also supported.   As an example, filtering for a user and a place takes the form  &#x60;filter&#x3D;\&quot;user &#x3D;&#x3D; \&#39;users/123\&#39;\&quot; &amp;&amp; \&quot;place &#x3D;&#x3D; \&#39;places/456\&#39;\&quot;&#x60;
     */
    public cloudListUserRestrictionLogs_29(universe: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Observable<ListUserRestrictionLogsResponse> {
        return this.cloudListUserRestrictionLogs_29WithHttpInfo(universe, maxPageSize, pageToken, filter, _options).pipe(map((apiResponse: HttpInfo<ListUserRestrictionLogsResponse>) => apiResponse.data));
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param count The number of items to read from the queue  If unspecified, 1 item will be returned.  The maximum value is 200; values above 200 will be coerced to 200.
     * @param allOrNothing If &#x60;all_or_nothing&#x60; is true and the requested number of objects is not  available, will return a 404 Error.   Otherwise, will return the path and read_id of the read operation and a  list of the MemoryStoreQueue items.
     * @param invisibilityWindow Invisibility window for items read, in seconds.   Items read are invisible in subsequent reads during the invisibility  window duration.   It must be written in seconds greater than 0 and end with &#x60;s&#x60;.   Defaults to &#x60;30s&#x60;.
     */
    public cloudReadMemoryStoreQueueItemsWithHttpInfo(universe: string, queue: string, count?: number, allOrNothing?: boolean, invisibilityWindow?: string, _options?: Configuration): Observable<HttpInfo<ReadMemoryStoreQueueItemsResponse>> {
        const requestContextPromise = this.requestFactory.cloudReadMemoryStoreQueueItems(universe, queue, count, allOrNothing, invisibilityWindow, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudReadMemoryStoreQueueItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param count The number of items to read from the queue  If unspecified, 1 item will be returned.  The maximum value is 200; values above 200 will be coerced to 200.
     * @param allOrNothing If &#x60;all_or_nothing&#x60; is true and the requested number of objects is not  available, will return a 404 Error.   Otherwise, will return the path and read_id of the read operation and a  list of the MemoryStoreQueue items.
     * @param invisibilityWindow Invisibility window for items read, in seconds.   Items read are invisible in subsequent reads during the invisibility  window duration.   It must be written in seconds greater than 0 and end with &#x60;s&#x60;.   Defaults to &#x60;30s&#x60;.
     */
    public cloudReadMemoryStoreQueueItems(universe: string, queue: string, count?: number, allOrNothing?: boolean, invisibilityWindow?: string, _options?: Configuration): Observable<ReadMemoryStoreQueueItemsResponse> {
        return this.cloudReadMemoryStoreQueueItemsWithHttpInfo(universe, queue, count, allOrNothing, invisibilityWindow, _options).pipe(map((apiResponse: HttpInfo<ReadMemoryStoreQueueItemsResponse>) => apiResponse.data));
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param count The number of items to read from the queue  If unspecified, 1 item will be returned.  The maximum value is 200; values above 200 will be coerced to 200.
     * @param allOrNothing If &#x60;all_or_nothing&#x60; is true and the requested number of objects is not  available, will return a 404 Error.   Otherwise, will return the path and read_id of the read operation and a  list of the MemoryStoreQueue items.
     * @param invisibilityWindow Invisibility window for items read, in seconds.   Items read are invisible in subsequent reads during the invisibility  window duration.   It must be written in seconds greater than 0 and end with &#x60;s&#x60;.   Defaults to &#x60;30s&#x60;.
     */
    public cloudReadMemoryStoreQueueItems_30WithHttpInfo(universe: string, queue: string, count?: number, allOrNothing?: boolean, invisibilityWindow?: string, _options?: Configuration): Observable<HttpInfo<ReadMemoryStoreQueueItemsResponse>> {
        const requestContextPromise = this.requestFactory.cloudReadMemoryStoreQueueItems_30(universe, queue, count, allOrNothing, invisibilityWindow, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudReadMemoryStoreQueueItems_30WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param count The number of items to read from the queue  If unspecified, 1 item will be returned.  The maximum value is 200; values above 200 will be coerced to 200.
     * @param allOrNothing If &#x60;all_or_nothing&#x60; is true and the requested number of objects is not  available, will return a 404 Error.   Otherwise, will return the path and read_id of the read operation and a  list of the MemoryStoreQueue items.
     * @param invisibilityWindow Invisibility window for items read, in seconds.   Items read are invisible in subsequent reads during the invisibility  window duration.   It must be written in seconds greater than 0 and end with &#x60;s&#x60;.   Defaults to &#x60;30s&#x60;.
     */
    public cloudReadMemoryStoreQueueItems_30(universe: string, queue: string, count?: number, allOrNothing?: boolean, invisibilityWindow?: string, _options?: Configuration): Observable<ReadMemoryStoreQueueItemsResponse> {
        return this.cloudReadMemoryStoreQueueItems_30WithHttpInfo(universe, queue, count, allOrNothing, invisibilityWindow, _options).pipe(map((apiResponse: HttpInfo<ReadMemoryStoreQueueItemsResponse>) => apiResponse.data));
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param universe The universe ID.
     * @param body 
     */
    public cloudRestartUniverseServersWithHttpInfo(universe: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cloudRestartUniverseServers(universe, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudRestartUniverseServersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param universe The universe ID.
     * @param body 
     */
    public cloudRestartUniverseServers(universe: string, body: any, _options?: Configuration): Observable<any> {
        return this.cloudRestartUniverseServersWithHttpInfo(universe, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param universe The universe ID.
     * @param body 
     */
    public cloudRestartUniverseServers_31WithHttpInfo(universe: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cloudRestartUniverseServers_31(universe, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudRestartUniverseServers_31WithHttpInfo(rsp)));
            }));
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param universe The universe ID.
     * @param body 
     */
    public cloudRestartUniverseServers_31(universe: string, body: any, _options?: Configuration): Observable<any> {
        return this.cloudRestartUniverseServers_31WithHttpInfo(universe, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     * @param creatorStoreProduct2 
     * @param updateMask The list of fields to update.
     * @param allowMissing If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     */
    public cloudUpdateCreatorStoreProductWithHttpInfo(creatorStoreProduct: string, creatorStoreProduct2: CreatorStoreProduct, updateMask?: string, allowMissing?: boolean, _options?: Configuration): Observable<HttpInfo<CreatorStoreProduct>> {
        const requestContextPromise = this.requestFactory.cloudUpdateCreatorStoreProduct(creatorStoreProduct, creatorStoreProduct2, updateMask, allowMissing, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateCreatorStoreProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     * @param creatorStoreProduct2 
     * @param updateMask The list of fields to update.
     * @param allowMissing If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     */
    public cloudUpdateCreatorStoreProduct(creatorStoreProduct: string, creatorStoreProduct2: CreatorStoreProduct, updateMask?: string, allowMissing?: boolean, _options?: Configuration): Observable<CreatorStoreProduct> {
        return this.cloudUpdateCreatorStoreProductWithHttpInfo(creatorStoreProduct, creatorStoreProduct2, updateMask, allowMissing, _options).pipe(map((apiResponse: HttpInfo<CreatorStoreProduct>) => apiResponse.data));
    }

    /**
     * Update a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     * @param creatorStoreProduct2 
     * @param updateMask The list of fields to update.
     * @param allowMissing If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     */
    public cloudUpdateCreatorStoreProduct_32WithHttpInfo(creatorStoreProduct: string, creatorStoreProduct2: CreatorStoreProduct, updateMask?: string, allowMissing?: boolean, _options?: Configuration): Observable<HttpInfo<CreatorStoreProduct>> {
        const requestContextPromise = this.requestFactory.cloudUpdateCreatorStoreProduct_32(creatorStoreProduct, creatorStoreProduct2, updateMask, allowMissing, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateCreatorStoreProduct_32WithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     * @param creatorStoreProduct2 
     * @param updateMask The list of fields to update.
     * @param allowMissing If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     */
    public cloudUpdateCreatorStoreProduct_32(creatorStoreProduct: string, creatorStoreProduct2: CreatorStoreProduct, updateMask?: string, allowMissing?: boolean, _options?: Configuration): Observable<CreatorStoreProduct> {
        return this.cloudUpdateCreatorStoreProduct_32WithHttpInfo(creatorStoreProduct, creatorStoreProduct2, updateMask, allowMissing, _options).pipe(map((apiResponse: HttpInfo<CreatorStoreProduct>) => apiResponse.data));
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param instance2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateInstanceWithHttpInfo(universe: string, place: string, instance: string, instance2: Instance, updateMask?: string, _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudUpdateInstance(universe, place, instance, instance2, updateMask, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateInstanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param instance2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateInstance(universe: string, place: string, instance: string, instance2: Instance, updateMask?: string, _options?: Configuration): Observable<Operation> {
        return this.cloudUpdateInstanceWithHttpInfo(universe, place, instance, instance2, updateMask, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param instance2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateInstance_33WithHttpInfo(universe: string, place: string, instance: string, instance2: Instance, updateMask?: string, _options?: Configuration): Observable<HttpInfo<Operation>> {
        const requestContextPromise = this.requestFactory.cloudUpdateInstance_33(universe, place, instance, instance2, updateMask, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateInstance_33WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param instance2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateInstance_33(universe: string, place: string, instance: string, instance2: Instance, updateMask?: string, _options?: Configuration): Observable<Operation> {
        return this.cloudUpdateInstance_33WithHttpInfo(universe, place, instance, instance2, updateMask, _options).pipe(map((apiResponse: HttpInfo<Operation>) => apiResponse.data));
    }

    /**
     * Updates the specified map item.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     * @param memoryStoreSortedMapItem 
     * @param allowMissing If set to true, and the memory store sorted map item is not found, a memory  store sorted map item is created.
     */
    public cloudUpdateMemoryStoreSortedMapItemWithHttpInfo(universe: string, sortedMap: string, item: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, allowMissing?: boolean, _options?: Configuration): Observable<HttpInfo<MemoryStoreSortedMapItem>> {
        const requestContextPromise = this.requestFactory.cloudUpdateMemoryStoreSortedMapItem(universe, sortedMap, item, memoryStoreSortedMapItem, allowMissing, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateMemoryStoreSortedMapItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified map item.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     * @param memoryStoreSortedMapItem 
     * @param allowMissing If set to true, and the memory store sorted map item is not found, a memory  store sorted map item is created.
     */
    public cloudUpdateMemoryStoreSortedMapItem(universe: string, sortedMap: string, item: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, allowMissing?: boolean, _options?: Configuration): Observable<MemoryStoreSortedMapItem> {
        return this.cloudUpdateMemoryStoreSortedMapItemWithHttpInfo(universe, sortedMap, item, memoryStoreSortedMapItem, allowMissing, _options).pipe(map((apiResponse: HttpInfo<MemoryStoreSortedMapItem>) => apiResponse.data));
    }

    /**
     * Updates the specified map item.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     * @param memoryStoreSortedMapItem 
     * @param allowMissing If set to true, and the memory store sorted map item is not found, a memory  store sorted map item is created.
     */
    public cloudUpdateMemoryStoreSortedMapItem_34WithHttpInfo(universe: string, sortedMap: string, item: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, allowMissing?: boolean, _options?: Configuration): Observable<HttpInfo<MemoryStoreSortedMapItem>> {
        const requestContextPromise = this.requestFactory.cloudUpdateMemoryStoreSortedMapItem_34(universe, sortedMap, item, memoryStoreSortedMapItem, allowMissing, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateMemoryStoreSortedMapItem_34WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified map item.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     * @param memoryStoreSortedMapItem 
     * @param allowMissing If set to true, and the memory store sorted map item is not found, a memory  store sorted map item is created.
     */
    public cloudUpdateMemoryStoreSortedMapItem_34(universe: string, sortedMap: string, item: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, allowMissing?: boolean, _options?: Configuration): Observable<MemoryStoreSortedMapItem> {
        return this.cloudUpdateMemoryStoreSortedMapItem_34WithHttpInfo(universe, sortedMap, item, memoryStoreSortedMapItem, allowMissing, _options).pipe(map((apiResponse: HttpInfo<MemoryStoreSortedMapItem>) => apiResponse.data));
    }

    /**
     * Updates the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param place2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdatePlaceWithHttpInfo(universe: string, place: string, place2: Place, updateMask?: string, _options?: Configuration): Observable<HttpInfo<Place>> {
        const requestContextPromise = this.requestFactory.cloudUpdatePlace(universe, place, place2, updateMask, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdatePlaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param place2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdatePlace(universe: string, place: string, place2: Place, updateMask?: string, _options?: Configuration): Observable<Place> {
        return this.cloudUpdatePlaceWithHttpInfo(universe, place, place2, updateMask, _options).pipe(map((apiResponse: HttpInfo<Place>) => apiResponse.data));
    }

    /**
     * Updates the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param place2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdatePlace_35WithHttpInfo(universe: string, place: string, place2: Place, updateMask?: string, _options?: Configuration): Observable<HttpInfo<Place>> {
        const requestContextPromise = this.requestFactory.cloudUpdatePlace_35(universe, place, place2, updateMask, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdatePlace_35WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param place2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdatePlace_35(universe: string, place: string, place2: Place, updateMask?: string, _options?: Configuration): Observable<Place> {
        return this.cloudUpdatePlace_35WithHttpInfo(universe, place, place2, updateMask, _options).pipe(map((apiResponse: HttpInfo<Place>) => apiResponse.data));
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param universe The universe ID.
     * @param universe2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateUniverseWithHttpInfo(universe: string, universe2: Universe, updateMask?: string, _options?: Configuration): Observable<HttpInfo<Universe>> {
        const requestContextPromise = this.requestFactory.cloudUpdateUniverse(universe, universe2, updateMask, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateUniverseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param universe The universe ID.
     * @param universe2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateUniverse(universe: string, universe2: Universe, updateMask?: string, _options?: Configuration): Observable<Universe> {
        return this.cloudUpdateUniverseWithHttpInfo(universe, universe2, updateMask, _options).pipe(map((apiResponse: HttpInfo<Universe>) => apiResponse.data));
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param universe The universe ID.
     * @param universe2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateUniverse_36WithHttpInfo(universe: string, universe2: Universe, updateMask?: string, _options?: Configuration): Observable<HttpInfo<Universe>> {
        const requestContextPromise = this.requestFactory.cloudUpdateUniverse_36(universe, universe2, updateMask, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateUniverse_36WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param universe The universe ID.
     * @param universe2 
     * @param updateMask The list of fields to update.
     */
    public cloudUpdateUniverse_36(universe: string, universe2: Universe, updateMask?: string, _options?: Configuration): Observable<Universe> {
        return this.cloudUpdateUniverse_36WithHttpInfo(universe, universe2, updateMask, _options).pipe(map((apiResponse: HttpInfo<Universe>) => apiResponse.data));
    }

    /**
     * Update the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     * @param userRestriction2 
     * @param updateMask The list of fields to update.
     * @param idempotencyKeyKey The unique key to use for idempotency.  string key &#x3D; 1;
     * @param idempotencyKeyFirstSent The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     */
    public cloudUpdateUserRestrictionWithHttpInfo(universe: string, place: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Observable<HttpInfo<UserRestriction>> {
        const requestContextPromise = this.requestFactory.cloudUpdateUserRestriction(universe, place, userRestriction, userRestriction2, updateMask, idempotencyKeyKey, idempotencyKeyFirstSent, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateUserRestrictionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     * @param userRestriction2 
     * @param updateMask The list of fields to update.
     * @param idempotencyKeyKey The unique key to use for idempotency.  string key &#x3D; 1;
     * @param idempotencyKeyFirstSent The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     */
    public cloudUpdateUserRestriction(universe: string, place: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Observable<UserRestriction> {
        return this.cloudUpdateUserRestrictionWithHttpInfo(universe, place, userRestriction, userRestriction2, updateMask, idempotencyKeyKey, idempotencyKeyFirstSent, _options).pipe(map((apiResponse: HttpInfo<UserRestriction>) => apiResponse.data));
    }

    /**
     * Update the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     * @param userRestriction2 
     * @param updateMask The list of fields to update.
     * @param idempotencyKeyKey The unique key to use for idempotency.  string key &#x3D; 1;
     * @param idempotencyKeyFirstSent The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     */
    public cloudUpdateUserRestriction_37WithHttpInfo(universe: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Observable<HttpInfo<UserRestriction>> {
        const requestContextPromise = this.requestFactory.cloudUpdateUserRestriction_37(universe, userRestriction, userRestriction2, updateMask, idempotencyKeyKey, idempotencyKeyFirstSent, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateUserRestriction_37WithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     * @param userRestriction2 
     * @param updateMask The list of fields to update.
     * @param idempotencyKeyKey The unique key to use for idempotency.  string key &#x3D; 1;
     * @param idempotencyKeyFirstSent The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     */
    public cloudUpdateUserRestriction_37(universe: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Observable<UserRestriction> {
        return this.cloudUpdateUserRestriction_37WithHttpInfo(universe, userRestriction, userRestriction2, updateMask, idempotencyKeyKey, idempotencyKeyFirstSent, _options).pipe(map((apiResponse: HttpInfo<UserRestriction>) => apiResponse.data));
    }

    /**
     * Update the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     * @param userRestriction2 
     * @param updateMask The list of fields to update.
     * @param idempotencyKeyKey The unique key to use for idempotency.  string key &#x3D; 1;
     * @param idempotencyKeyFirstSent The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     */
    public cloudUpdateUserRestriction_38WithHttpInfo(universe: string, place: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Observable<HttpInfo<UserRestriction>> {
        const requestContextPromise = this.requestFactory.cloudUpdateUserRestriction_38(universe, place, userRestriction, userRestriction2, updateMask, idempotencyKeyKey, idempotencyKeyFirstSent, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateUserRestriction_38WithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     * @param userRestriction2 
     * @param updateMask The list of fields to update.
     * @param idempotencyKeyKey The unique key to use for idempotency.  string key &#x3D; 1;
     * @param idempotencyKeyFirstSent The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     */
    public cloudUpdateUserRestriction_38(universe: string, place: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Observable<UserRestriction> {
        return this.cloudUpdateUserRestriction_38WithHttpInfo(universe, place, userRestriction, userRestriction2, updateMask, idempotencyKeyKey, idempotencyKeyFirstSent, _options).pipe(map((apiResponse: HttpInfo<UserRestriction>) => apiResponse.data));
    }

    /**
     * Update the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     * @param userRestriction2 
     * @param updateMask The list of fields to update.
     * @param idempotencyKeyKey The unique key to use for idempotency.  string key &#x3D; 1;
     * @param idempotencyKeyFirstSent The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     */
    public cloudUpdateUserRestriction_39WithHttpInfo(universe: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Observable<HttpInfo<UserRestriction>> {
        const requestContextPromise = this.requestFactory.cloudUpdateUserRestriction_39(universe, userRestriction, userRestriction2, updateMask, idempotencyKeyKey, idempotencyKeyFirstSent, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloudUpdateUserRestriction_39WithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     * @param userRestriction2 
     * @param updateMask The list of fields to update.
     * @param idempotencyKeyKey The unique key to use for idempotency.  string key &#x3D; 1;
     * @param idempotencyKeyFirstSent The timestamp at which the first request was sent.   If this is further in the past than the lifetime of the idempotency key  (which *may* exceed the annotated minimum lifetime), the server *must*  return an error.
     */
    public cloudUpdateUserRestriction_39(universe: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Observable<UserRestriction> {
        return this.cloudUpdateUserRestriction_39WithHttpInfo(universe, userRestriction, userRestriction2, updateMask, idempotencyKeyKey, idempotencyKeyFirstSent, _options).pipe(map((apiResponse: HttpInfo<UserRestriction>) => apiResponse.data));
    }

}
