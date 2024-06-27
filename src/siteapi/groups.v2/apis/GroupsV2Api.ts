import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2 } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2';

/**
 * no description
 */
export class GroupsV2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * If a group comes back as null, it will not be returned in the response.
     * Multi-get groups information by Ids.
     * @param groupIds The group Ids.
     */
    public async v2GroupsGet(groupIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupIds' is not null or undefined
        if (groupIds === null || groupIds === undefined) {
            throw new RequiredError("GroupsV2Api", "v2GroupsGet", "groupIds");
        }


        // Path Params
        const localVarPath = '/v2/groups';

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupIds !== undefined) {
            requestContext.setQueryParam("groupIds", ObjectSerializer.serialize(groupIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a list of all group roles for groups the specified user is in.
     * @param userId The user id.
     * @param includeLocked 
     * @param includeNotificationPreferences 
     */
    public async v2UsersUserIdGroupsRolesGet(userId: number, includeLocked: boolean, includeNotificationPreferences: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("GroupsV2Api", "v2UsersUserIdGroupsRolesGet", "userId");
        }


        // verify required parameter 'includeLocked' is not null or undefined
        if (includeLocked === null || includeLocked === undefined) {
            throw new RequiredError("GroupsV2Api", "v2UsersUserIdGroupsRolesGet", "includeLocked");
        }


        // verify required parameter 'includeNotificationPreferences' is not null or undefined
        if (includeNotificationPreferences === null || includeNotificationPreferences === undefined) {
            throw new RequiredError("GroupsV2Api", "v2UsersUserIdGroupsRolesGet", "includeNotificationPreferences");
        }


        // Path Params
        const localVarPath = '/v2/users/{userId}/groups/roles'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeLocked !== undefined) {
            requestContext.setQueryParam("includeLocked", ObjectSerializer.serialize(includeLocked, "boolean", ""));
        }

        // Query Params
        if (includeNotificationPreferences !== undefined) {
            requestContext.setQueryParam("includeNotificationPreferences", ObjectSerializer.serialize(includeNotificationPreferences, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class GroupsV2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2GroupsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2GroupsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: Too many ids in request.  3: Ids could not be parsed from request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UsersUserIdGroupsRolesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UsersUserIdGroupsRolesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: The user is invalid or does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupMembershipResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
