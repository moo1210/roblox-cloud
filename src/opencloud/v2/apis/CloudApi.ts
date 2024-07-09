import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { CreatorStoreProduct } from '../models/CreatorStoreProduct';
import { DiscardMemoryStoreQueueItemsRequest } from '../models/DiscardMemoryStoreQueueItemsRequest';
import { Group } from '../models/Group';
import { GroupShout } from '../models/GroupShout';
import { Instance } from '../models/Instance';
import { ListGroupJoinRequestsResponse } from '../models/ListGroupJoinRequestsResponse';
import { ListGroupMembershipsResponse } from '../models/ListGroupMembershipsResponse';
import { ListGroupRolesResponse } from '../models/ListGroupRolesResponse';
import { ListInventoryItemsResponse } from '../models/ListInventoryItemsResponse';
import { ListMemoryStoreSortedMapItemsResponse } from '../models/ListMemoryStoreSortedMapItemsResponse';
import { ListUserRestrictionLogsResponse } from '../models/ListUserRestrictionLogsResponse';
import { MemoryStoreQueueItem } from '../models/MemoryStoreQueueItem';
import { MemoryStoreSortedMapItem } from '../models/MemoryStoreSortedMapItem';
import { Operation } from '../models/Operation';
import { Place } from '../models/Place';
import { ReadMemoryStoreQueueItemsResponse } from '../models/ReadMemoryStoreQueueItemsResponse';
import { Subscription } from '../models/Subscription';
import { Universe } from '../models/Universe';
import { User } from '../models/User';
import { UserNotification } from '../models/UserNotification';
import { UserRestriction } from '../models/UserRestriction';

/**
 * no description
 */
export class CloudApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Accepts a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public async cloudAcceptGroupJoinRequest(group: string, joinRequest: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudAcceptGroupJoinRequest", "group");
        }


        // verify required parameter 'joinRequest' is not null or undefined
        if (joinRequest === null || joinRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudAcceptGroupJoinRequest", "joinRequest");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("CloudApi", "cloudAcceptGroupJoinRequest", "body");
        }


        // Path Params
        const localVarPath = '/cloud/v2/groups/{group}/join-requests/{join-request}:accept'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)))
            .replace('{' + 'join-request' + '}', encodeURIComponent(String(joinRequest)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Accepts a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public async cloudAcceptGroupJoinRequest_1(group: string, joinRequest: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudAcceptGroupJoinRequest_1", "group");
        }


        // verify required parameter 'joinRequest' is not null or undefined
        if (joinRequest === null || joinRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudAcceptGroupJoinRequest_1", "joinRequest");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("CloudApi", "cloudAcceptGroupJoinRequest_1", "body");
        }


        // Path Params
        const localVarPath = '/v2/groups/{group}/join-requests/{join-request}:accept'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)))
            .replace('{' + 'join-request' + '}', encodeURIComponent(String(joinRequest)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add a Creator Store product.
     * @param creatorStoreProduct 
     */
    public async cloudCreateCreatorStoreProduct(creatorStoreProduct: CreatorStoreProduct, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'creatorStoreProduct' is not null or undefined
        if (creatorStoreProduct === null || creatorStoreProduct === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateCreatorStoreProduct", "creatorStoreProduct");
        }


        // Path Params
        const localVarPath = '/cloud/v2/creator-store-products';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(creatorStoreProduct, "CreatorStoreProduct", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add a Creator Store product.
     * @param creatorStoreProduct 
     */
    public async cloudCreateCreatorStoreProduct_2(creatorStoreProduct: CreatorStoreProduct, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'creatorStoreProduct' is not null or undefined
        if (creatorStoreProduct === null || creatorStoreProduct === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateCreatorStoreProduct_2", "creatorStoreProduct");
        }


        // Path Params
        const localVarPath = '/v2/creator-store-products';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(creatorStoreProduct, "CreatorStoreProduct", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param memoryStoreQueueItem 
     */
    public async cloudCreateMemoryStoreQueueItem(universe: string, queue: string, memoryStoreQueueItem: MemoryStoreQueueItem, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreQueueItem", "universe");
        }


        // verify required parameter 'queue' is not null or undefined
        if (queue === null || queue === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreQueueItem", "queue");
        }


        // verify required parameter 'memoryStoreQueueItem' is not null or undefined
        if (memoryStoreQueueItem === null || memoryStoreQueueItem === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreQueueItem", "memoryStoreQueueItem");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/memory-store/queues/{queue}/items'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'queue' + '}', encodeURIComponent(String(queue)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(memoryStoreQueueItem, "MemoryStoreQueueItem", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new queue item.   If `ttl` is set, the item will automatically be removed from the queue  after the time interval specified.   If a numerical `priority` is set, the item will be inserted into the queue  based on the priority value. The higher the value, the closer to the front  of the queue the item will be. If priority values are the same then the  item will be inserted after existing values with the same priority.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param memoryStoreQueueItem 
     */
    public async cloudCreateMemoryStoreQueueItem_3(universe: string, queue: string, memoryStoreQueueItem: MemoryStoreQueueItem, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreQueueItem_3", "universe");
        }


        // verify required parameter 'queue' is not null or undefined
        if (queue === null || queue === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreQueueItem_3", "queue");
        }


        // verify required parameter 'memoryStoreQueueItem' is not null or undefined
        if (memoryStoreQueueItem === null || memoryStoreQueueItem === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreQueueItem_3", "memoryStoreQueueItem");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}/memory-store/queues/{queue}/items'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'queue' + '}', encodeURIComponent(String(queue)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(memoryStoreQueueItem, "MemoryStoreQueueItem", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param memoryStoreSortedMapItem 
     * @param id The ID to use for the memory store sorted map item, which will become the  final component of the memory store sorted map item\&#39;s resource path.   This value should be a 1-127 character string that supports alphanumeric  and special characters. This id is case sensitive. The id must be url  encoded if it contains any url breaking special characters.
     */
    public async cloudCreateMemoryStoreSortedMapItem(universe: string, sortedMap: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, id?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreSortedMapItem", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreSortedMapItem", "sortedMap");
        }


        // verify required parameter 'memoryStoreSortedMapItem' is not null or undefined
        if (memoryStoreSortedMapItem === null || memoryStoreSortedMapItem === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreSortedMapItem", "memoryStoreSortedMapItem");
        }



        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(memoryStoreSortedMapItem, "MemoryStoreSortedMapItem", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates the specified map item if it doesn\'t exist.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param memoryStoreSortedMapItem 
     * @param id The ID to use for the memory store sorted map item, which will become the  final component of the memory store sorted map item\&#39;s resource path.   This value should be a 1-127 character string that supports alphanumeric  and special characters. This id is case sensitive. The id must be url  encoded if it contains any url breaking special characters.
     */
    public async cloudCreateMemoryStoreSortedMapItem_4(universe: string, sortedMap: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, id?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreSortedMapItem_4", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreSortedMapItem_4", "sortedMap");
        }


        // verify required parameter 'memoryStoreSortedMapItem' is not null or undefined
        if (memoryStoreSortedMapItem === null || memoryStoreSortedMapItem === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateMemoryStoreSortedMapItem_4", "memoryStoreSortedMapItem");
        }



        // Path Params
        const localVarPath = '/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(memoryStoreSortedMapItem, "MemoryStoreSortedMapItem", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sends a notification to a user.
     * @param user The user ID.
     * @param userNotification 
     */
    public async cloudCreateUserNotification(user: string, userNotification: UserNotification, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateUserNotification", "user");
        }


        // verify required parameter 'userNotification' is not null or undefined
        if (userNotification === null || userNotification === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateUserNotification", "userNotification");
        }


        // Path Params
        const localVarPath = '/cloud/v2/users/{user}/notifications'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userNotification, "UserNotification", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sends a notification to a user.
     * @param user The user ID.
     * @param userNotification 
     */
    public async cloudCreateUserNotification_5(user: string, userNotification: UserNotification, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateUserNotification_5", "user");
        }


        // verify required parameter 'userNotification' is not null or undefined
        if (userNotification === null || userNotification === undefined) {
            throw new RequiredError("CloudApi", "cloudCreateUserNotification_5", "userNotification");
        }


        // Path Params
        const localVarPath = '/v2/users/{user}/notifications'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userNotification, "UserNotification", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Declines a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public async cloudDeclineGroupJoinRequest(group: string, joinRequest: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudDeclineGroupJoinRequest", "group");
        }


        // verify required parameter 'joinRequest' is not null or undefined
        if (joinRequest === null || joinRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudDeclineGroupJoinRequest", "joinRequest");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("CloudApi", "cloudDeclineGroupJoinRequest", "body");
        }


        // Path Params
        const localVarPath = '/cloud/v2/groups/{group}/join-requests/{join-request}:decline'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)))
            .replace('{' + 'join-request' + '}', encodeURIComponent(String(joinRequest)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Declines a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param body 
     */
    public async cloudDeclineGroupJoinRequest_6(group: string, joinRequest: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudDeclineGroupJoinRequest_6", "group");
        }


        // verify required parameter 'joinRequest' is not null or undefined
        if (joinRequest === null || joinRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudDeclineGroupJoinRequest_6", "joinRequest");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("CloudApi", "cloudDeclineGroupJoinRequest_6", "body");
        }


        // Path Params
        const localVarPath = '/v2/groups/{group}/join-requests/{join-request}:decline'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)))
            .replace('{' + 'join-request' + '}', encodeURIComponent(String(joinRequest)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes the specified item from the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public async cloudDeleteMemoryStoreSortedMapItem(universe: string, sortedMap: string, item: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudDeleteMemoryStoreSortedMapItem", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudDeleteMemoryStoreSortedMapItem", "sortedMap");
        }


        // verify required parameter 'item' is not null or undefined
        if (item === null || item === undefined) {
            throw new RequiredError("CloudApi", "cloudDeleteMemoryStoreSortedMapItem", "item");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items/{item}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)))
            .replace('{' + 'item' + '}', encodeURIComponent(String(item)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes the specified item from the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public async cloudDeleteMemoryStoreSortedMapItem_7(universe: string, sortedMap: string, item: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudDeleteMemoryStoreSortedMapItem_7", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudDeleteMemoryStoreSortedMapItem_7", "sortedMap");
        }


        // verify required parameter 'item' is not null or undefined
        if (item === null || item === undefined) {
            throw new RequiredError("CloudApi", "cloudDeleteMemoryStoreSortedMapItem_7", "item");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items/{item}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)))
            .replace('{' + 'item' + '}', encodeURIComponent(String(item)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param discardMemoryStoreQueueItemsRequest 
     */
    public async cloudDiscardMemoryStoreQueueItems(universe: string, queue: string, discardMemoryStoreQueueItemsRequest: DiscardMemoryStoreQueueItemsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudDiscardMemoryStoreQueueItems", "universe");
        }


        // verify required parameter 'queue' is not null or undefined
        if (queue === null || queue === undefined) {
            throw new RequiredError("CloudApi", "cloudDiscardMemoryStoreQueueItems", "queue");
        }


        // verify required parameter 'discardMemoryStoreQueueItemsRequest' is not null or undefined
        if (discardMemoryStoreQueueItemsRequest === null || discardMemoryStoreQueueItemsRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudDiscardMemoryStoreQueueItems", "discardMemoryStoreQueueItemsRequest");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/memory-store/queues/{queue}/items:discard'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'queue' + '}', encodeURIComponent(String(queue)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(discardMemoryStoreQueueItemsRequest, "DiscardMemoryStoreQueueItemsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Discards read items from the front of the queue.   Takes a `readId` from a previous `Read` operation.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param discardMemoryStoreQueueItemsRequest 
     */
    public async cloudDiscardMemoryStoreQueueItems_8(universe: string, queue: string, discardMemoryStoreQueueItemsRequest: DiscardMemoryStoreQueueItemsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudDiscardMemoryStoreQueueItems_8", "universe");
        }


        // verify required parameter 'queue' is not null or undefined
        if (queue === null || queue === undefined) {
            throw new RequiredError("CloudApi", "cloudDiscardMemoryStoreQueueItems_8", "queue");
        }


        // verify required parameter 'discardMemoryStoreQueueItemsRequest' is not null or undefined
        if (discardMemoryStoreQueueItemsRequest === null || discardMemoryStoreQueueItemsRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudDiscardMemoryStoreQueueItems_8", "discardMemoryStoreQueueItemsRequest");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}/memory-store/queues/{queue}/items:discard'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'queue' + '}', encodeURIComponent(String(queue)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(discardMemoryStoreQueueItemsRequest, "DiscardMemoryStoreQueueItemsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param universe The universe ID.
     * @param body 
     */
    public async cloudFlushMemoryStore(universe: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudFlushMemoryStore", "universe");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("CloudApi", "cloudFlushMemoryStore", "body");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/memory-store:flush'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Asynchronously flush all data structures in the universe.
     * @param universe The universe ID.
     * @param body 
     */
    public async cloudFlushMemoryStore_9(universe: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudFlushMemoryStore_9", "universe");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("CloudApi", "cloudFlushMemoryStore_9", "body");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}/memory-store:flush'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param user The user ID.
     * @param size Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @param format Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @param shape Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     */
    public async cloudGenerateUserThumbnail(user: string, size?: number, format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG', shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("CloudApi", "cloudGenerateUserThumbnail", "user");
        }





        // Path Params
        const localVarPath = '/cloud/v2/users/{user}:generateThumbnail'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }

        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam("format", ObjectSerializer.serialize(format, "'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG'", "enum"));
        }

        // Query Params
        if (shape !== undefined) {
            requestContext.setQueryParam("shape", ObjectSerializer.serialize(shape, "'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE'", "enum"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generates and returns the URL for the user\'s avatar thumbnail.
     * @param user The user ID.
     * @param size Size of the generated thumbnail. The generated thumbnail will have &#x60;size *  size&#x60; dimension.   Currently supported values:  48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720  Default is 420.
     * @param format Specify the format of the generated thumbnail. Default is &#x60;PNG&#x60;.
     * @param shape Specify the shape of the thumbnail. Default is &#x60;ROUND&#x60; (circular).
     */
    public async cloudGenerateUserThumbnail_10(user: string, size?: number, format?: 'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG', shape?: 'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("CloudApi", "cloudGenerateUserThumbnail_10", "user");
        }





        // Path Params
        const localVarPath = '/v2/users/{user}:generateThumbnail'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }

        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam("format", ObjectSerializer.serialize(format, "'FORMAT_UNSPECIFIED' | 'PNG' | 'JPEG'", "enum"));
        }

        // Query Params
        if (shape !== undefined) {
            requestContext.setQueryParam("shape", ObjectSerializer.serialize(shape, "'SHAPE_UNSPECIFIED' | 'ROUND' | 'SQUARE'", "enum"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     */
    public async cloudGetCreatorStoreProduct(creatorStoreProduct: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'creatorStoreProduct' is not null or undefined
        if (creatorStoreProduct === null || creatorStoreProduct === undefined) {
            throw new RequiredError("CloudApi", "cloudGetCreatorStoreProduct", "creatorStoreProduct");
        }


        // Path Params
        const localVarPath = '/cloud/v2/creator-store-products/{creator-store-product}'
            .replace('{' + 'creator-store-product' + '}', encodeURIComponent(String(creatorStoreProduct)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     */
    public async cloudGetCreatorStoreProduct_11(creatorStoreProduct: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'creatorStoreProduct' is not null or undefined
        if (creatorStoreProduct === null || creatorStoreProduct === undefined) {
            throw new RequiredError("CloudApi", "cloudGetCreatorStoreProduct_11", "creatorStoreProduct");
        }


        // Path Params
        const localVarPath = '/v2/creator-store-products/{creator-store-product}'
            .replace('{' + 'creator-store-product' + '}', encodeURIComponent(String(creatorStoreProduct)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the specified group.
     * @param group The group ID.
     */
    public async cloudGetGroup(group: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudGetGroup", "group");
        }


        // Path Params
        const localVarPath = '/cloud/v2/groups/{group}'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param group The group ID.
     */
    public async cloudGetGroupShout(group: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudGetGroupShout", "group");
        }


        // Path Params
        const localVarPath = '/cloud/v2/groups/{group}/shout'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the group shout.   If a guest can view the group shout, this is always retrievable.   If a guest cannot, a member who has the permissions to view the group  shout, along with the `group:read` scope, will be able to read the group  shout.
     * @param group The group ID.
     */
    public async cloudGetGroupShout_12(group: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudGetGroupShout_12", "group");
        }


        // Path Params
        const localVarPath = '/v2/groups/{group}/shout'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the specified group.
     * @param group The group ID.
     */
    public async cloudGetGroup_13(group: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudGetGroup_13", "group");
        }


        // Path Params
        const localVarPath = '/v2/groups/{group}'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     */
    public async cloudGetInstance(universe: string, place: string, instance: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetInstance", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudGetInstance", "place");
        }


        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new RequiredError("CloudApi", "cloudGetInstance", "instance");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/places/{place}/instances/{instance}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'instance' + '}', encodeURIComponent(String(instance)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets an instance and its property data.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     */
    public async cloudGetInstance_14(universe: string, place: string, instance: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetInstance_14", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudGetInstance_14", "place");
        }


        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new RequiredError("CloudApi", "cloudGetInstance_14", "instance");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}/places/{place}/instances/{instance}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'instance' + '}', encodeURIComponent(String(instance)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public async cloudGetMemoryStoreSortedMapItem(universe: string, sortedMap: string, item: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetMemoryStoreSortedMapItem", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudGetMemoryStoreSortedMapItem", "sortedMap");
        }


        // verify required parameter 'item' is not null or undefined
        if (item === null || item === undefined) {
            throw new RequiredError("CloudApi", "cloudGetMemoryStoreSortedMapItem", "item");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items/{item}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)))
            .replace('{' + 'item' + '}', encodeURIComponent(String(item)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets and returns the value of the given key in the map.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     */
    public async cloudGetMemoryStoreSortedMapItem_15(universe: string, sortedMap: string, item: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetMemoryStoreSortedMapItem_15", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudGetMemoryStoreSortedMapItem_15", "sortedMap");
        }


        // verify required parameter 'item' is not null or undefined
        if (item === null || item === undefined) {
            throw new RequiredError("CloudApi", "cloudGetMemoryStoreSortedMapItem_15", "item");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items/{item}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)))
            .replace('{' + 'item' + '}', encodeURIComponent(String(item)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     */
    public async cloudGetPlace(universe: string, place: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetPlace", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudGetPlace", "place");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/places/{place}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     */
    public async cloudGetPlace_16(universe: string, place: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetPlace_16", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudGetPlace_16", "place");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}/places/{place}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param universe The universe ID.
     * @param subscriptionProduct The subscription-product ID.
     * @param subscription The subscription ID.
     * @param view The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     */
    public async cloudGetSubscription(universe: string, subscriptionProduct: string, subscription: string, view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetSubscription", "universe");
        }


        // verify required parameter 'subscriptionProduct' is not null or undefined
        if (subscriptionProduct === null || subscriptionProduct === undefined) {
            throw new RequiredError("CloudApi", "cloudGetSubscription", "subscriptionProduct");
        }


        // verify required parameter 'subscription' is not null or undefined
        if (subscription === null || subscription === undefined) {
            throw new RequiredError("CloudApi", "cloudGetSubscription", "subscription");
        }



        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/subscription-products/{subscription-product}/subscriptions/{subscription}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'subscription-product' + '}', encodeURIComponent(String(subscriptionProduct)))
            .replace('{' + 'subscription' + '}', encodeURIComponent(String(subscription)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (view !== undefined) {
            requestContext.setQueryParam("view", ObjectSerializer.serialize(view, "'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL'", "enum"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the subscription.   The `universe.subscription-product.subscription:read` scope only allows  you to get your own subscriptions—or rather, the subscription ID must  match the user ID that makes the request—so its best use case is with  OAuth 2.0 authentication rather than an API key. To read all  subscriptions for a universe, use the `universe:write` scope.
     * @param universe The universe ID.
     * @param subscriptionProduct The subscription-product ID.
     * @param subscription The subscription ID.
     * @param view The view in which to retrieve the subscription.   Supports BASIC and FULL.   Defaults to BASIC.
     */
    public async cloudGetSubscription_17(universe: string, subscriptionProduct: string, subscription: string, view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetSubscription_17", "universe");
        }


        // verify required parameter 'subscriptionProduct' is not null or undefined
        if (subscriptionProduct === null || subscriptionProduct === undefined) {
            throw new RequiredError("CloudApi", "cloudGetSubscription_17", "subscriptionProduct");
        }


        // verify required parameter 'subscription' is not null or undefined
        if (subscription === null || subscription === undefined) {
            throw new RequiredError("CloudApi", "cloudGetSubscription_17", "subscription");
        }



        // Path Params
        const localVarPath = '/v2/universes/{universe}/subscription-products/{subscription-product}/subscriptions/{subscription}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'subscription-product' + '}', encodeURIComponent(String(subscriptionProduct)))
            .replace('{' + 'subscription' + '}', encodeURIComponent(String(subscription)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (view !== undefined) {
            requestContext.setQueryParam("view", ObjectSerializer.serialize(view, "'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL'", "enum"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the specified universe.
     * @param universe The universe ID.
     */
    public async cloudGetUniverse(universe: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUniverse", "universe");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the specified universe.
     * @param universe The universe ID.
     */
    public async cloudGetUniverse_18(universe: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUniverse_18", "universe");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param user The user ID.
     */
    public async cloudGetUser(user: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUser", "user");
        }


        // Path Params
        const localVarPath = '/cloud/v2/users/{user}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     */
    public async cloudGetUserRestriction(universe: string, place: string, userRestriction: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction", "place");
        }


        // verify required parameter 'userRestriction' is not null or undefined
        if (userRestriction === null || userRestriction === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction", "userRestriction");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/places/{place}/user-restrictions/{user-restriction}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'user-restriction' + '}', encodeURIComponent(String(userRestriction)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     */
    public async cloudGetUserRestriction_19(universe: string, userRestriction: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction_19", "universe");
        }


        // verify required parameter 'userRestriction' is not null or undefined
        if (userRestriction === null || userRestriction === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction_19", "userRestriction");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/user-restrictions/{user-restriction}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'user-restriction' + '}', encodeURIComponent(String(userRestriction)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param userRestriction The user-restriction ID.
     */
    public async cloudGetUserRestriction_20(universe: string, place: string, userRestriction: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction_20", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction_20", "place");
        }


        // verify required parameter 'userRestriction' is not null or undefined
        if (userRestriction === null || userRestriction === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction_20", "userRestriction");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}/places/{place}/user-restrictions/{user-restriction}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'user-restriction' + '}', encodeURIComponent(String(userRestriction)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the user restriction.
     * @param universe The universe ID.
     * @param userRestriction The user-restriction ID.
     */
    public async cloudGetUserRestriction_21(universe: string, userRestriction: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction_21", "universe");
        }


        // verify required parameter 'userRestriction' is not null or undefined
        if (userRestriction === null || userRestriction === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUserRestriction_21", "userRestriction");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}/user-restrictions/{user-restriction}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'user-restriction' + '}', encodeURIComponent(String(userRestriction)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param user The user ID.
     */
    public async cloudGetUser_22(user: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUser_22", "user");
        }


        // Path Params
        const localVarPath = '/v2/users/{user}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List join requests under a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     */
    public async cloudListGroupJoinRequests(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudListGroupJoinRequests", "group");
        }





        // Path Params
        const localVarPath = '/cloud/v2/groups/{group}/join-requests'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List join requests under a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group join requests to return. The service might  return fewer than this value. If unspecified, at most 10 group join  requests are returned. The maximum value is 20 and higher values are set  to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   Filtering conforms to Common Expression Language (CEL). Only the &#x60;user&#x60;  field and &#x60;&#x3D;&#x3D;&#x60; operator are supported.    Example: &#x60;\&quot;user &#x3D;&#x3D; \&#39;users/156\&#39;\&quot;&#x60;
     */
    public async cloudListGroupJoinRequests_23(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudListGroupJoinRequests_23", "group");
        }





        // Path Params
        const localVarPath = '/v2/groups/{group}/join-requests'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List group members in a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     */
    public async cloudListGroupMemberships(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudListGroupMemberships", "group");
        }





        // Path Params
        const localVarPath = '/cloud/v2/groups/{group}/memberships'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List group members in a group.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group memberships to return. The service might return  fewer than this value. If unspecified, at most 10 group memberships are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-group-memberships)  documentation for more information.
     */
    public async cloudListGroupMemberships_24(group: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudListGroupMemberships_24", "group");
        }





        // Path Params
        const localVarPath = '/v2/groups/{group}/memberships'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     */
    public async cloudListGroupRoles(group: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudListGroupRoles", "group");
        }




        // Path Params
        const localVarPath = '/cloud/v2/groups/{group}/roles'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List roles in a group.   The permissions field for roles is viewable based on the requester\'s access  and scopes.   Permissions for the guest role are always visible - a scope is not needed.   If the requester is a member of the group and has the `group:read` scope,  permissions in their role are visible.   If the requester is the owner of the group and has the `group:read` scope,  permissions in all roles are visible.
     * @param group The group ID.
     * @param maxPageSize The maximum number of group roles to return. The service might return fewer  than this value. If unspecified, at most 10 group roles are returned. The  maximum value is 20 and higher values are set to 20.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     */
    public async cloudListGroupRoles_25(group: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudListGroupRoles_25", "group");
        }




        // Path Params
        const localVarPath = '/v2/groups/{group}/roles'
            .replace('{' + 'group' + '}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param maxPageSize The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @param pageToken A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     */
    public async cloudListInstanceChildren(universe: string, place: string, instance: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudListInstanceChildren", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudListInstanceChildren", "place");
        }


        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new RequiredError("CloudApi", "cloudListInstanceChildren", "instance");
        }




        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/places/{place}/instances/{instance}:listChildren'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'instance' + '}', encodeURIComponent(String(instance)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists an instance\'s children.   The maximum supported response data size is 500,000 bytes. If this limit is  exceeded, the returned `Operation` will be completed with an error result  that has an error code of `422`.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param maxPageSize The maximum number of child instance to return. The service may return  fewer than this value. If unspecified, at most 200 children will be  returned. The maximum value is 200; values above 200 will be coerced to  200.
     * @param pageToken A page token, received from a previous &#x60;ListInstanceChildrenRequest&#x60; call.  Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to  &#x60;ListInstanceChildrenRequest&#x60; must match the call that provided the page  token.
     */
    public async cloudListInstanceChildren_26(universe: string, place: string, instance: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudListInstanceChildren_26", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudListInstanceChildren_26", "place");
        }


        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new RequiredError("CloudApi", "cloudListInstanceChildren_26", "instance");
        }




        // Path Params
        const localVarPath = '/v2/universes/{universe}/places/{place}/instances/{instance}:listChildren'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'instance' + '}', encodeURIComponent(String(instance)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param user The user ID.
     * @param maxPageSize The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     */
    public async cloudListInventoryItems(user: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("CloudApi", "cloudListInventoryItems", "user");
        }





        // Path Params
        const localVarPath = '/cloud/v2/users/{user}/inventory-items'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List the inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
     * @param user The user ID.
     * @param maxPageSize The maximum number of inventory items to return. The service might return  fewer than this value. If unspecified, at most 10 inventory items are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set in order to filter the resources returned.   See the  [filtering](/cloud/reference/patterns#list-inventory-items)  documentation for more information.
     */
    public async cloudListInventoryItems_27(user: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("CloudApi", "cloudListInventoryItems_27", "user");
        }





        // Path Params
        const localVarPath = '/v2/users/{user}/inventory-items'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async cloudListMemoryStoreSortedMapItems(universe: string, sortedMap: string, maxPageSize?: number, pageToken?: string, orderBy?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudListMemoryStoreSortedMapItems", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudListMemoryStoreSortedMapItems", "sortedMap");
        }






        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("orderBy", ObjectSerializer.serialize(orderBy, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async cloudListMemoryStoreSortedMapItems_28(universe: string, sortedMap: string, maxPageSize?: number, pageToken?: string, orderBy?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudListMemoryStoreSortedMapItems_28", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudListMemoryStoreSortedMapItems_28", "sortedMap");
        }






        // Path Params
        const localVarPath = '/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("orderBy", ObjectSerializer.serialize(orderBy, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param universe The universe ID.
     * @param maxPageSize The maximum number of UserRestrictionLogs to return. The service may return  fewer than this value. If unspecified, at most 10 UserRestrictionLogs are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set to filter the logs returned.   The &#x60;filter&#x60; field supports a very small number of CEL:   * &#x60;user&#x60;  * &#x60;place&#x60;  * The &#x60;&#x3D;&#x3D;&#x60; comparison operator is available.  * The &#x60;&amp;&amp;&#x60; logical operator is also supported.   As an example, filtering for a user and a place takes the form  &#x60;filter&#x3D;\&quot;user &#x3D;&#x3D; \&#39;users/123\&#39;\&quot; &amp;&amp; \&quot;place &#x3D;&#x3D; \&#39;places/456\&#39;\&quot;&#x60;
     */
    public async cloudListUserRestrictionLogs(universe: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudListUserRestrictionLogs", "universe");
        }





        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/user-restrictions:listLogs'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List changes to UserRestriction resources within a given universe.  This includes both universe-level and place-level restrictions.   For universe-level restriction logs, the `place` field will be empty.
     * @param universe The universe ID.
     * @param maxPageSize The maximum number of UserRestrictionLogs to return. The service may return  fewer than this value. If unspecified, at most 10 UserRestrictionLogs are  returned. The maximum value is 100 and higher values are set to 100.
     * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.   When paginating, all other parameters provided to the subsequent call must  match the call that provided the page token.
     * @param filter This field may be set to filter the logs returned.   The &#x60;filter&#x60; field supports a very small number of CEL:   * &#x60;user&#x60;  * &#x60;place&#x60;  * The &#x60;&#x3D;&#x3D;&#x60; comparison operator is available.  * The &#x60;&amp;&amp;&#x60; logical operator is also supported.   As an example, filtering for a user and a place takes the form  &#x60;filter&#x3D;\&quot;user &#x3D;&#x3D; \&#39;users/123\&#39;\&quot; &amp;&amp; \&quot;place &#x3D;&#x3D; \&#39;places/456\&#39;\&quot;&#x60;
     */
    public async cloudListUserRestrictionLogs_29(universe: string, maxPageSize?: number, pageToken?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudListUserRestrictionLogs_29", "universe");
        }





        // Path Params
        const localVarPath = '/v2/universes/{universe}/user-restrictions:listLogs'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param count The number of items to read from the queue  If unspecified, 1 item will be returned.  The maximum value is 200; values above 200 will be coerced to 200.
     * @param allOrNothing If &#x60;all_or_nothing&#x60; is true and the requested number of objects is not  available, will return a 404 Error.   Otherwise, will return the path and read_id of the read operation and a  list of the MemoryStoreQueue items.
     * @param invisibilityWindow Invisibility window for items read, in seconds.   Items read are invisible in subsequent reads during the invisibility  window duration.   It must be written in seconds greater than 0 and end with &#x60;s&#x60;.   Defaults to &#x60;30s&#x60;.
     */
    public async cloudReadMemoryStoreQueueItems(universe: string, queue: string, count?: number, allOrNothing?: boolean, invisibilityWindow?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudReadMemoryStoreQueueItems", "universe");
        }


        // verify required parameter 'queue' is not null or undefined
        if (queue === null || queue === undefined) {
            throw new RequiredError("CloudApi", "cloudReadMemoryStoreQueueItems", "queue");
        }





        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/memory-store/queues/{queue}/items:read'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'queue' + '}', encodeURIComponent(String(queue)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", "int64"));
        }

        // Query Params
        if (allOrNothing !== undefined) {
            requestContext.setQueryParam("allOrNothing", ObjectSerializer.serialize(allOrNothing, "boolean", ""));
        }

        // Query Params
        if (invisibilityWindow !== undefined) {
            requestContext.setQueryParam("invisibilityWindow", ObjectSerializer.serialize(invisibilityWindow, "string", "duration"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the specified number of items at the front of the queue.
     * @param universe The universe ID.
     * @param queue The queue ID.
     * @param count The number of items to read from the queue  If unspecified, 1 item will be returned.  The maximum value is 200; values above 200 will be coerced to 200.
     * @param allOrNothing If &#x60;all_or_nothing&#x60; is true and the requested number of objects is not  available, will return a 404 Error.   Otherwise, will return the path and read_id of the read operation and a  list of the MemoryStoreQueue items.
     * @param invisibilityWindow Invisibility window for items read, in seconds.   Items read are invisible in subsequent reads during the invisibility  window duration.   It must be written in seconds greater than 0 and end with &#x60;s&#x60;.   Defaults to &#x60;30s&#x60;.
     */
    public async cloudReadMemoryStoreQueueItems_30(universe: string, queue: string, count?: number, allOrNothing?: boolean, invisibilityWindow?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudReadMemoryStoreQueueItems_30", "universe");
        }


        // verify required parameter 'queue' is not null or undefined
        if (queue === null || queue === undefined) {
            throw new RequiredError("CloudApi", "cloudReadMemoryStoreQueueItems_30", "queue");
        }





        // Path Params
        const localVarPath = '/v2/universes/{universe}/memory-store/queues/{queue}/items:read'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'queue' + '}', encodeURIComponent(String(queue)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", "int64"));
        }

        // Query Params
        if (allOrNothing !== undefined) {
            requestContext.setQueryParam("allOrNothing", ObjectSerializer.serialize(allOrNothing, "boolean", ""));
        }

        // Query Params
        if (invisibilityWindow !== undefined) {
            requestContext.setQueryParam("invisibilityWindow", ObjectSerializer.serialize(invisibilityWindow, "string", "duration"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param universe The universe ID.
     * @param body 
     */
    public async cloudRestartUniverseServers(universe: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudRestartUniverseServers", "universe");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("CloudApi", "cloudRestartUniverseServers", "body");
        }


        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}:restartServers'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Restarts all active servers for a specific universe if and only if a new  version of the experience has been published. Used for releasing experience  updates.
     * @param universe The universe ID.
     * @param body 
     */
    public async cloudRestartUniverseServers_31(universe: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudRestartUniverseServers_31", "universe");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("CloudApi", "cloudRestartUniverseServers_31", "body");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universe}:restartServers'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     * @param creatorStoreProduct2 
     * @param updateMask The list of fields to update.
     * @param allowMissing If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     */
    public async cloudUpdateCreatorStoreProduct(creatorStoreProduct: string, creatorStoreProduct2: CreatorStoreProduct, updateMask?: string, allowMissing?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'creatorStoreProduct' is not null or undefined
        if (creatorStoreProduct === null || creatorStoreProduct === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateCreatorStoreProduct", "creatorStoreProduct");
        }


        // verify required parameter 'creatorStoreProduct2' is not null or undefined
        if (creatorStoreProduct2 === null || creatorStoreProduct2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateCreatorStoreProduct", "creatorStoreProduct2");
        }




        // Path Params
        const localVarPath = '/cloud/v2/creator-store-products/{creator-store-product}'
            .replace('{' + 'creator-store-product' + '}', encodeURIComponent(String(creatorStoreProduct)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }

        // Query Params
        if (allowMissing !== undefined) {
            requestContext.setQueryParam("allowMissing", ObjectSerializer.serialize(allowMissing, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(creatorStoreProduct2, "CreatorStoreProduct", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a Creator Store product.
     * @param creatorStoreProduct The creator-store-product ID.
     * @param creatorStoreProduct2 
     * @param updateMask The list of fields to update.
     * @param allowMissing If set to true, and the creator store product is not found, a creator store  product is created. In this situation, &#x60;update_mask&#x60; is ignored.
     */
    public async cloudUpdateCreatorStoreProduct_32(creatorStoreProduct: string, creatorStoreProduct2: CreatorStoreProduct, updateMask?: string, allowMissing?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'creatorStoreProduct' is not null or undefined
        if (creatorStoreProduct === null || creatorStoreProduct === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateCreatorStoreProduct_32", "creatorStoreProduct");
        }


        // verify required parameter 'creatorStoreProduct2' is not null or undefined
        if (creatorStoreProduct2 === null || creatorStoreProduct2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateCreatorStoreProduct_32", "creatorStoreProduct2");
        }




        // Path Params
        const localVarPath = '/v2/creator-store-products/{creator-store-product}'
            .replace('{' + 'creator-store-product' + '}', encodeURIComponent(String(creatorStoreProduct)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }

        // Query Params
        if (allowMissing !== undefined) {
            requestContext.setQueryParam("allowMissing", ObjectSerializer.serialize(allowMissing, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(creatorStoreProduct2, "CreatorStoreProduct", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param instance2 
     * @param updateMask The list of fields to update.
     */
    public async cloudUpdateInstance(universe: string, place: string, instance: string, instance2: Instance, updateMask?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateInstance", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateInstance", "place");
        }


        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateInstance", "instance");
        }


        // verify required parameter 'instance2' is not null or undefined
        if (instance2 === null || instance2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateInstance", "instance2");
        }



        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/places/{place}/instances/{instance}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'instance' + '}', encodeURIComponent(String(instance)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(instance2, "Instance", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates an instance\'s property data.   When updating a `Script` instance\'s source property, the maximum supported  property size is 200,000 bytes after UTF-8 encoding.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param instance The instance ID.
     * @param instance2 
     * @param updateMask The list of fields to update.
     */
    public async cloudUpdateInstance_33(universe: string, place: string, instance: string, instance2: Instance, updateMask?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateInstance_33", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateInstance_33", "place");
        }


        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateInstance_33", "instance");
        }


        // verify required parameter 'instance2' is not null or undefined
        if (instance2 === null || instance2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateInstance_33", "instance2");
        }



        // Path Params
        const localVarPath = '/v2/universes/{universe}/places/{place}/instances/{instance}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'instance' + '}', encodeURIComponent(String(instance)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(instance2, "Instance", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the specified map item.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     * @param memoryStoreSortedMapItem 
     * @param allowMissing If set to true, and the memory store sorted map item is not found, a memory  store sorted map item is created.
     */
    public async cloudUpdateMemoryStoreSortedMapItem(universe: string, sortedMap: string, item: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, allowMissing?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateMemoryStoreSortedMapItem", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateMemoryStoreSortedMapItem", "sortedMap");
        }


        // verify required parameter 'item' is not null or undefined
        if (item === null || item === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateMemoryStoreSortedMapItem", "item");
        }


        // verify required parameter 'memoryStoreSortedMapItem' is not null or undefined
        if (memoryStoreSortedMapItem === null || memoryStoreSortedMapItem === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateMemoryStoreSortedMapItem", "memoryStoreSortedMapItem");
        }



        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items/{item}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)))
            .replace('{' + 'item' + '}', encodeURIComponent(String(item)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (allowMissing !== undefined) {
            requestContext.setQueryParam("allowMissing", ObjectSerializer.serialize(allowMissing, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(memoryStoreSortedMapItem, "MemoryStoreSortedMapItem", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the specified map item.
     * @param universe The universe ID.
     * @param sortedMap The sorted-map ID.
     * @param item The item ID.
     * @param memoryStoreSortedMapItem 
     * @param allowMissing If set to true, and the memory store sorted map item is not found, a memory  store sorted map item is created.
     */
    public async cloudUpdateMemoryStoreSortedMapItem_34(universe: string, sortedMap: string, item: string, memoryStoreSortedMapItem: MemoryStoreSortedMapItem, allowMissing?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateMemoryStoreSortedMapItem_34", "universe");
        }


        // verify required parameter 'sortedMap' is not null or undefined
        if (sortedMap === null || sortedMap === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateMemoryStoreSortedMapItem_34", "sortedMap");
        }


        // verify required parameter 'item' is not null or undefined
        if (item === null || item === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateMemoryStoreSortedMapItem_34", "item");
        }


        // verify required parameter 'memoryStoreSortedMapItem' is not null or undefined
        if (memoryStoreSortedMapItem === null || memoryStoreSortedMapItem === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateMemoryStoreSortedMapItem_34", "memoryStoreSortedMapItem");
        }



        // Path Params
        const localVarPath = '/v2/universes/{universe}/memory-store/sorted-maps/{sorted-map}/items/{item}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'sorted-map' + '}', encodeURIComponent(String(sortedMap)))
            .replace('{' + 'item' + '}', encodeURIComponent(String(item)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (allowMissing !== undefined) {
            requestContext.setQueryParam("allowMissing", ObjectSerializer.serialize(allowMissing, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(memoryStoreSortedMapItem, "MemoryStoreSortedMapItem", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param place2 
     * @param updateMask The list of fields to update.
     */
    public async cloudUpdatePlace(universe: string, place: string, place2: Place, updateMask?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdatePlace", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdatePlace", "place");
        }


        // verify required parameter 'place2' is not null or undefined
        if (place2 === null || place2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdatePlace", "place2");
        }



        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/places/{place}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(place2, "Place", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the specified place.
     * @param universe The universe ID.
     * @param place The place ID.
     * @param place2 
     * @param updateMask The list of fields to update.
     */
    public async cloudUpdatePlace_35(universe: string, place: string, place2: Place, updateMask?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdatePlace_35", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdatePlace_35", "place");
        }


        // verify required parameter 'place2' is not null or undefined
        if (place2 === null || place2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdatePlace_35", "place2");
        }



        // Path Params
        const localVarPath = '/v2/universes/{universe}/places/{place}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(place2, "Place", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param universe The universe ID.
     * @param universe2 
     * @param updateMask The list of fields to update.
     */
    public async cloudUpdateUniverse(universe: string, universe2: Universe, updateMask?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUniverse", "universe");
        }


        // verify required parameter 'universe2' is not null or undefined
        if (universe2 === null || universe2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUniverse", "universe2");
        }



        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(universe2, "Universe", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the specified universe.   This method is guaranteed to return all updated fields.  This method may additionally return the full resource.
     * @param universe The universe ID.
     * @param universe2 
     * @param updateMask The list of fields to update.
     */
    public async cloudUpdateUniverse_36(universe: string, universe2: Universe, updateMask?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUniverse_36", "universe");
        }


        // verify required parameter 'universe2' is not null or undefined
        if (universe2 === null || universe2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUniverse_36", "universe2");
        }



        // Path Params
        const localVarPath = '/v2/universes/{universe}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(universe2, "Universe", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async cloudUpdateUserRestriction(universe: string, place: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction", "place");
        }


        // verify required parameter 'userRestriction' is not null or undefined
        if (userRestriction === null || userRestriction === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction", "userRestriction");
        }


        // verify required parameter 'userRestriction2' is not null or undefined
        if (userRestriction2 === null || userRestriction2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction", "userRestriction2");
        }





        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/places/{place}/user-restrictions/{user-restriction}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'user-restriction' + '}', encodeURIComponent(String(userRestriction)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }

        // Query Params
        if (idempotencyKeyKey !== undefined) {
            requestContext.setQueryParam("idempotencyKey.key", ObjectSerializer.serialize(idempotencyKeyKey, "string", ""));
        }

        // Query Params
        if (idempotencyKeyFirstSent !== undefined) {
            requestContext.setQueryParam("idempotencyKey.firstSent", ObjectSerializer.serialize(idempotencyKeyFirstSent, "Date", "date-time"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userRestriction2, "UserRestriction", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async cloudUpdateUserRestriction_37(universe: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_37", "universe");
        }


        // verify required parameter 'userRestriction' is not null or undefined
        if (userRestriction === null || userRestriction === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_37", "userRestriction");
        }


        // verify required parameter 'userRestriction2' is not null or undefined
        if (userRestriction2 === null || userRestriction2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_37", "userRestriction2");
        }





        // Path Params
        const localVarPath = '/cloud/v2/universes/{universe}/user-restrictions/{user-restriction}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'user-restriction' + '}', encodeURIComponent(String(userRestriction)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }

        // Query Params
        if (idempotencyKeyKey !== undefined) {
            requestContext.setQueryParam("idempotencyKey.key", ObjectSerializer.serialize(idempotencyKeyKey, "string", ""));
        }

        // Query Params
        if (idempotencyKeyFirstSent !== undefined) {
            requestContext.setQueryParam("idempotencyKey.firstSent", ObjectSerializer.serialize(idempotencyKeyFirstSent, "Date", "date-time"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userRestriction2, "UserRestriction", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async cloudUpdateUserRestriction_38(universe: string, place: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_38", "universe");
        }


        // verify required parameter 'place' is not null or undefined
        if (place === null || place === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_38", "place");
        }


        // verify required parameter 'userRestriction' is not null or undefined
        if (userRestriction === null || userRestriction === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_38", "userRestriction");
        }


        // verify required parameter 'userRestriction2' is not null or undefined
        if (userRestriction2 === null || userRestriction2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_38", "userRestriction2");
        }





        // Path Params
        const localVarPath = '/v2/universes/{universe}/places/{place}/user-restrictions/{user-restriction}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'place' + '}', encodeURIComponent(String(place)))
            .replace('{' + 'user-restriction' + '}', encodeURIComponent(String(userRestriction)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }

        // Query Params
        if (idempotencyKeyKey !== undefined) {
            requestContext.setQueryParam("idempotencyKey.key", ObjectSerializer.serialize(idempotencyKeyKey, "string", ""));
        }

        // Query Params
        if (idempotencyKeyFirstSent !== undefined) {
            requestContext.setQueryParam("idempotencyKey.firstSent", ObjectSerializer.serialize(idempotencyKeyFirstSent, "Date", "date-time"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userRestriction2, "UserRestriction", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async cloudUpdateUserRestriction_39(universe: string, userRestriction: string, userRestriction2: UserRestriction, updateMask?: string, idempotencyKeyKey?: string, idempotencyKeyFirstSent?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_39", "universe");
        }


        // verify required parameter 'userRestriction' is not null or undefined
        if (userRestriction === null || userRestriction === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_39", "userRestriction");
        }


        // verify required parameter 'userRestriction2' is not null or undefined
        if (userRestriction2 === null || userRestriction2 === undefined) {
            throw new RequiredError("CloudApi", "cloudUpdateUserRestriction_39", "userRestriction2");
        }





        // Path Params
        const localVarPath = '/v2/universes/{universe}/user-restrictions/{user-restriction}'
            .replace('{' + 'universe' + '}', encodeURIComponent(String(universe)))
            .replace('{' + 'user-restriction' + '}', encodeURIComponent(String(userRestriction)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/cloud').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", "field-mask"));
        }

        // Query Params
        if (idempotencyKeyKey !== undefined) {
            requestContext.setQueryParam("idempotencyKey.key", ObjectSerializer.serialize(idempotencyKeyKey, "string", ""));
        }

        // Query Params
        if (idempotencyKeyFirstSent !== undefined) {
            requestContext.setQueryParam("idempotencyKey.firstSent", ObjectSerializer.serialize(idempotencyKeyFirstSent, "Date", "date-time"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userRestriction2, "UserRestriction", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CloudApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudAcceptGroupJoinRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudAcceptGroupJoinRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudAcceptGroupJoinRequest_1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudAcceptGroupJoinRequest_1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudCreateCreatorStoreProduct
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudCreateCreatorStoreProductWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreatorStoreProduct >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudCreateCreatorStoreProduct_2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudCreateCreatorStoreProduct_2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreatorStoreProduct >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudCreateMemoryStoreQueueItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudCreateMemoryStoreQueueItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MemoryStoreQueueItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MemoryStoreQueueItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreQueueItem", ""
            ) as MemoryStoreQueueItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MemoryStoreQueueItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreQueueItem", ""
            ) as MemoryStoreQueueItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudCreateMemoryStoreQueueItem_3
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudCreateMemoryStoreQueueItem_3WithHttpInfo(response: ResponseContext): Promise<HttpInfo<MemoryStoreQueueItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MemoryStoreQueueItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreQueueItem", ""
            ) as MemoryStoreQueueItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MemoryStoreQueueItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreQueueItem", ""
            ) as MemoryStoreQueueItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudCreateMemoryStoreSortedMapItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudCreateMemoryStoreSortedMapItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MemoryStoreSortedMapItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudCreateMemoryStoreSortedMapItem_4
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudCreateMemoryStoreSortedMapItem_4WithHttpInfo(response: ResponseContext): Promise<HttpInfo<MemoryStoreSortedMapItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudCreateUserNotification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudCreateUserNotificationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserNotification >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserNotification = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserNotification", ""
            ) as UserNotification;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserNotification = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserNotification", ""
            ) as UserNotification;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudCreateUserNotification_5
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudCreateUserNotification_5WithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserNotification >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserNotification = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserNotification", ""
            ) as UserNotification;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserNotification = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserNotification", ""
            ) as UserNotification;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudDeclineGroupJoinRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudDeclineGroupJoinRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudDeclineGroupJoinRequest_6
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudDeclineGroupJoinRequest_6WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudDeleteMemoryStoreSortedMapItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudDeleteMemoryStoreSortedMapItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudDeleteMemoryStoreSortedMapItem_7
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudDeleteMemoryStoreSortedMapItem_7WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudDiscardMemoryStoreQueueItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudDiscardMemoryStoreQueueItemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudDiscardMemoryStoreQueueItems_8
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudDiscardMemoryStoreQueueItems_8WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudFlushMemoryStore
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudFlushMemoryStoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudFlushMemoryStore_9
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudFlushMemoryStore_9WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGenerateUserThumbnail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGenerateUserThumbnailWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGenerateUserThumbnail_10
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGenerateUserThumbnail_10WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetCreatorStoreProduct
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetCreatorStoreProductWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreatorStoreProduct >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetCreatorStoreProduct_11
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetCreatorStoreProduct_11WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreatorStoreProduct >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Group >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Group = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Group", ""
            ) as Group;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Group = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Group", ""
            ) as Group;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetGroupShout
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetGroupShoutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GroupShout >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GroupShout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupShout", ""
            ) as GroupShout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GroupShout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupShout", ""
            ) as GroupShout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetGroupShout_12
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetGroupShout_12WithHttpInfo(response: ResponseContext): Promise<HttpInfo<GroupShout >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GroupShout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupShout", ""
            ) as GroupShout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GroupShout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupShout", ""
            ) as GroupShout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetGroup_13
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetGroup_13WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Group >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Group = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Group", ""
            ) as Group;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Group = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Group", ""
            ) as Group;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetInstance_14
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetInstance_14WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetMemoryStoreSortedMapItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetMemoryStoreSortedMapItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MemoryStoreSortedMapItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetMemoryStoreSortedMapItem_15
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetMemoryStoreSortedMapItem_15WithHttpInfo(response: ResponseContext): Promise<HttpInfo<MemoryStoreSortedMapItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetPlace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetPlaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Place >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Place = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Place", ""
            ) as Place;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Place = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Place", ""
            ) as Place;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetPlace_16
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetPlace_16WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Place >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Place = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Place", ""
            ) as Place;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Place = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Place", ""
            ) as Place;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetSubscriptionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Subscription >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Subscription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Subscription", ""
            ) as Subscription;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Subscription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Subscription", ""
            ) as Subscription;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetSubscription_17
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetSubscription_17WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Subscription >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Subscription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Subscription", ""
            ) as Subscription;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Subscription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Subscription", ""
            ) as Subscription;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetUniverse
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetUniverseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Universe >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Universe = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Universe", ""
            ) as Universe;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Universe = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Universe", ""
            ) as Universe;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetUniverse_18
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetUniverse_18WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Universe >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Universe = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Universe", ""
            ) as Universe;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Universe = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Universe", ""
            ) as Universe;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<User >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetUserRestriction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetUserRestrictionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserRestriction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetUserRestriction_19
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetUserRestriction_19WithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserRestriction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetUserRestriction_20
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetUserRestriction_20WithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserRestriction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetUserRestriction_21
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetUserRestriction_21WithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserRestriction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudGetUser_22
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudGetUser_22WithHttpInfo(response: ResponseContext): Promise<HttpInfo<User >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListGroupJoinRequests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListGroupJoinRequestsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListGroupJoinRequestsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListGroupJoinRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupJoinRequestsResponse", ""
            ) as ListGroupJoinRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListGroupJoinRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupJoinRequestsResponse", ""
            ) as ListGroupJoinRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListGroupJoinRequests_23
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListGroupJoinRequests_23WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListGroupJoinRequestsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListGroupJoinRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupJoinRequestsResponse", ""
            ) as ListGroupJoinRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListGroupJoinRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupJoinRequestsResponse", ""
            ) as ListGroupJoinRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListGroupMemberships
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListGroupMembershipsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListGroupMembershipsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListGroupMembershipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupMembershipsResponse", ""
            ) as ListGroupMembershipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListGroupMembershipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupMembershipsResponse", ""
            ) as ListGroupMembershipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListGroupMemberships_24
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListGroupMemberships_24WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListGroupMembershipsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListGroupMembershipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupMembershipsResponse", ""
            ) as ListGroupMembershipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListGroupMembershipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupMembershipsResponse", ""
            ) as ListGroupMembershipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListGroupRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListGroupRolesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListGroupRolesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListGroupRolesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupRolesResponse", ""
            ) as ListGroupRolesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListGroupRolesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupRolesResponse", ""
            ) as ListGroupRolesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListGroupRoles_25
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListGroupRoles_25WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListGroupRolesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListGroupRolesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupRolesResponse", ""
            ) as ListGroupRolesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListGroupRolesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGroupRolesResponse", ""
            ) as ListGroupRolesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListInstanceChildren
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListInstanceChildrenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListInstanceChildren_26
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListInstanceChildren_26WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListInventoryItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListInventoryItemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListInventoryItemsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListInventoryItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListInventoryItemsResponse", ""
            ) as ListInventoryItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListInventoryItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListInventoryItemsResponse", ""
            ) as ListInventoryItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListInventoryItems_27
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListInventoryItems_27WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListInventoryItemsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListInventoryItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListInventoryItemsResponse", ""
            ) as ListInventoryItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListInventoryItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListInventoryItemsResponse", ""
            ) as ListInventoryItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListMemoryStoreSortedMapItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListMemoryStoreSortedMapItemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListMemoryStoreSortedMapItemsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListMemoryStoreSortedMapItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMemoryStoreSortedMapItemsResponse", ""
            ) as ListMemoryStoreSortedMapItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListMemoryStoreSortedMapItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMemoryStoreSortedMapItemsResponse", ""
            ) as ListMemoryStoreSortedMapItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListMemoryStoreSortedMapItems_28
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListMemoryStoreSortedMapItems_28WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListMemoryStoreSortedMapItemsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListMemoryStoreSortedMapItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMemoryStoreSortedMapItemsResponse", ""
            ) as ListMemoryStoreSortedMapItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListMemoryStoreSortedMapItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMemoryStoreSortedMapItemsResponse", ""
            ) as ListMemoryStoreSortedMapItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListUserRestrictionLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListUserRestrictionLogsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListUserRestrictionLogsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListUserRestrictionLogsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUserRestrictionLogsResponse", ""
            ) as ListUserRestrictionLogsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListUserRestrictionLogsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUserRestrictionLogsResponse", ""
            ) as ListUserRestrictionLogsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudListUserRestrictionLogs_29
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudListUserRestrictionLogs_29WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListUserRestrictionLogsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListUserRestrictionLogsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUserRestrictionLogsResponse", ""
            ) as ListUserRestrictionLogsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListUserRestrictionLogsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUserRestrictionLogsResponse", ""
            ) as ListUserRestrictionLogsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudReadMemoryStoreQueueItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudReadMemoryStoreQueueItemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReadMemoryStoreQueueItemsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReadMemoryStoreQueueItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReadMemoryStoreQueueItemsResponse", ""
            ) as ReadMemoryStoreQueueItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReadMemoryStoreQueueItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReadMemoryStoreQueueItemsResponse", ""
            ) as ReadMemoryStoreQueueItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudReadMemoryStoreQueueItems_30
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudReadMemoryStoreQueueItems_30WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReadMemoryStoreQueueItemsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReadMemoryStoreQueueItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReadMemoryStoreQueueItemsResponse", ""
            ) as ReadMemoryStoreQueueItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReadMemoryStoreQueueItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReadMemoryStoreQueueItemsResponse", ""
            ) as ReadMemoryStoreQueueItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudRestartUniverseServers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudRestartUniverseServersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudRestartUniverseServers_31
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudRestartUniverseServers_31WithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateCreatorStoreProduct
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateCreatorStoreProductWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreatorStoreProduct >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateCreatorStoreProduct_32
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateCreatorStoreProduct_32WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreatorStoreProduct >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatorStoreProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatorStoreProduct", ""
            ) as CreatorStoreProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateInstance_33
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateInstance_33WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateMemoryStoreSortedMapItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateMemoryStoreSortedMapItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MemoryStoreSortedMapItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateMemoryStoreSortedMapItem_34
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateMemoryStoreSortedMapItem_34WithHttpInfo(response: ResponseContext): Promise<HttpInfo<MemoryStoreSortedMapItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MemoryStoreSortedMapItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MemoryStoreSortedMapItem", ""
            ) as MemoryStoreSortedMapItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdatePlace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdatePlaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Place >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Place = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Place", ""
            ) as Place;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Place = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Place", ""
            ) as Place;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdatePlace_35
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdatePlace_35WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Place >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Place = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Place", ""
            ) as Place;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Place = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Place", ""
            ) as Place;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateUniverse
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateUniverseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Universe >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Universe = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Universe", ""
            ) as Universe;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Universe = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Universe", ""
            ) as Universe;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateUniverse_36
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateUniverse_36WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Universe >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Universe = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Universe", ""
            ) as Universe;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Universe = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Universe", ""
            ) as Universe;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateUserRestriction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateUserRestrictionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserRestriction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateUserRestriction_37
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateUserRestriction_37WithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserRestriction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateUserRestriction_38
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateUserRestriction_38WithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserRestriction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloudUpdateUserRestriction_39
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloudUpdateUserRestriction_39WithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserRestriction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserRestriction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserRestriction", ""
            ) as UserRestriction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
