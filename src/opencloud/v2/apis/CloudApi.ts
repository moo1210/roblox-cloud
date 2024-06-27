import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { AcceptGroupJoinRequestRequest } from '../models/AcceptGroupJoinRequestRequest';
import { CreatorStoreProduct } from '../models/CreatorStoreProduct';
import { DeclineGroupJoinRequestRequest } from '../models/DeclineGroupJoinRequestRequest';
import { Group } from '../models/Group';
import { GroupShout } from '../models/GroupShout';
import { Instance } from '../models/Instance';
import { ListGroupJoinRequestsResponse } from '../models/ListGroupJoinRequestsResponse';
import { ListGroupMembershipsResponse } from '../models/ListGroupMembershipsResponse';
import { ListGroupRolesResponse } from '../models/ListGroupRolesResponse';
import { ListInventoryItemsResponse } from '../models/ListInventoryItemsResponse';
import { Operation } from '../models/Operation';
import { Place } from '../models/Place';
import { RestartUniverseServersRequest } from '../models/RestartUniverseServersRequest';
import { Subscription } from '../models/Subscription';
import { Universe } from '../models/Universe';
import { User } from '../models/User';
import { UserNotification } from '../models/UserNotification';

/**
 * no description
 */
export class CloudApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Accepts a join request.
     * @param group The group ID.
     * @param joinRequest The join-request ID.
     * @param acceptGroupJoinRequestRequest 
     */
    public async cloudAcceptGroupJoinRequest(group: string, joinRequest: string, acceptGroupJoinRequestRequest: AcceptGroupJoinRequestRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudAcceptGroupJoinRequest", "group");
        }


        // verify required parameter 'joinRequest' is not null or undefined
        if (joinRequest === null || joinRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudAcceptGroupJoinRequest", "joinRequest");
        }


        // verify required parameter 'acceptGroupJoinRequestRequest' is not null or undefined
        if (acceptGroupJoinRequestRequest === null || acceptGroupJoinRequestRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudAcceptGroupJoinRequest", "acceptGroupJoinRequestRequest");
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
            ObjectSerializer.serialize(acceptGroupJoinRequestRequest, "AcceptGroupJoinRequestRequest", ""),
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
     * @param declineGroupJoinRequestRequest 
     */
    public async cloudDeclineGroupJoinRequest(group: string, joinRequest: string, declineGroupJoinRequestRequest: DeclineGroupJoinRequestRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("CloudApi", "cloudDeclineGroupJoinRequest", "group");
        }


        // verify required parameter 'joinRequest' is not null or undefined
        if (joinRequest === null || joinRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudDeclineGroupJoinRequest", "joinRequest");
        }


        // verify required parameter 'declineGroupJoinRequestRequest' is not null or undefined
        if (declineGroupJoinRequestRequest === null || declineGroupJoinRequestRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudDeclineGroupJoinRequest", "declineGroupJoinRequestRequest");
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
            ObjectSerializer.serialize(declineGroupJoinRequestRequest, "DeclineGroupJoinRequestRequest", ""),
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
     * Get a user\'s basic and advanced information.   To access a user\'s public information, no additional scopes are required.   To access a user\'s premium or verification status, you need the following  scopes:  * user.advanced.read   To access a user\'s social account information, you need the following  scopes:  * user.social.read
     * @param user The user ID.
     */
    public async cloudGetUser(user: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("CloudApi", "cloudGetUser", "user");
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
     * List inventory items in a user\'s inventory.   The inventory items returned depend on the target user’s choice under  **Settings > Privacy > Who can see my inventory?**:  * If the user granted inventory visibility to \"Everyone,\" then any API key  or OAuth2 token can be used to view the target’s inventory, no matter what  scopes it has or who created it.  * If the user has not granted inventory visibility to \"Everyone\":    * Their inventory can still be viewed with an API key created by the    target user with **Inventory: Read** permission.    * Their inventory can still be viewed with an OAuth2 token if the target    user authorizes an app requesting permissions for the    `user.inventory-item:read` scope.
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
     * Restarts all currently running servers for a given universe. Used for  releasing experience updates.
     * @param universe The universe ID.
     * @param restartUniverseServersRequest 
     */
    public async cloudRestartUniverseServers(universe: string, restartUniverseServersRequest: RestartUniverseServersRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universe' is not null or undefined
        if (universe === null || universe === undefined) {
            throw new RequiredError("CloudApi", "cloudRestartUniverseServers", "universe");
        }


        // verify required parameter 'restartUniverseServersRequest' is not null or undefined
        if (restartUniverseServersRequest === null || restartUniverseServersRequest === undefined) {
            throw new RequiredError("CloudApi", "cloudRestartUniverseServers", "restartUniverseServersRequest");
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
            ObjectSerializer.serialize(restartUniverseServersRequest, "RestartUniverseServersRequest", ""),
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

}
