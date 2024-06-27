import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGroupsApiGroupPermissionsResponse } from '../models/RobloxGroupsApiGroupPermissionsResponse';
import { RobloxGroupsApiUpdatePermissionsRequest } from '../models/RobloxGroupsApiUpdatePermissionsRequest';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse';

/**
 * no description
 */
export class PermissionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets the permissions for a group\'s guest roleset. These can be viewed by all (members and guests) users.
     * @param groupId The group id.
     */
    public async v1GroupsGroupIdRolesGuestPermissionsGet(groupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PermissionsApi", "v1GroupsGroupIdRolesGuestPermissionsGet", "groupId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/roles/guest/permissions'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets all permissions for each role
     * @param groupId The group id.
     */
    public async v1GroupsGroupIdRolesPermissionsGet(groupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PermissionsApi", "v1GroupsGroupIdRolesPermissionsGet", "groupId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/roles/permissions'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the permissions for a group\'s roleset. The authorized user must either be the group owner or the roleset being requested, except for guest roles, which can be viewed by all (members and guests).
     * @param groupId The group id.
     * @param roleSetId The group\&#39;s role set id.
     */
    public async v1GroupsGroupIdRolesRoleSetIdPermissionsGet(groupId: number, roleSetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PermissionsApi", "v1GroupsGroupIdRolesRoleSetIdPermissionsGet", "groupId");
        }


        // verify required parameter 'roleSetId' is not null or undefined
        if (roleSetId === null || roleSetId === undefined) {
            throw new RequiredError("PermissionsApi", "v1GroupsGroupIdRolesRoleSetIdPermissionsGet", "roleSetId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/roles/{roleSetId}/permissions'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'roleSetId' + '}', encodeURIComponent(String(roleSetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the permissions for a group\'s roleset. The authorized user must be the group owner.
     * @param groupId The group\&#39;s id.
     * @param roleSetId The roleset\&#39;s id.
     * @param updatePermissionsRequest The request.
     */
    public async v1GroupsGroupIdRolesRoleSetIdPermissionsPatch(groupId: number, roleSetId: number, updatePermissionsRequest: RobloxGroupsApiUpdatePermissionsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PermissionsApi", "v1GroupsGroupIdRolesRoleSetIdPermissionsPatch", "groupId");
        }


        // verify required parameter 'roleSetId' is not null or undefined
        if (roleSetId === null || roleSetId === undefined) {
            throw new RequiredError("PermissionsApi", "v1GroupsGroupIdRolesRoleSetIdPermissionsPatch", "roleSetId");
        }


        // verify required parameter 'updatePermissionsRequest' is not null or undefined
        if (updatePermissionsRequest === null || updatePermissionsRequest === undefined) {
            throw new RequiredError("PermissionsApi", "v1GroupsGroupIdRolesRoleSetIdPermissionsPatch", "updatePermissionsRequest");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/roles/{roleSetId}/permissions'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'roleSetId' + '}', encodeURIComponent(String(roleSetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updatePermissionsRequest, "RobloxGroupsApiUpdatePermissionsRequest", ""),
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

export class PermissionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRolesGuestPermissionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRolesGuestPermissionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiGroupPermissionsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiGroupPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupPermissionsResponse", ""
            ) as RobloxGroupsApiGroupPermissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group is invalid or does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiGroupPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupPermissionsResponse", ""
            ) as RobloxGroupsApiGroupPermissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRolesPermissionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRolesPermissionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiGroupPermissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRolesRoleSetIdPermissionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRolesRoleSetIdPermissionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiGroupPermissionsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiGroupPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupPermissionsResponse", ""
            ) as RobloxGroupsApiGroupPermissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group is invalid or does not exist.  2: The roleset is invalid or does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: You are not authorized to view/edit permissions for this role.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiGroupPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupPermissionsResponse", ""
            ) as RobloxGroupsApiGroupPermissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRolesRoleSetIdPermissionsPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRolesRoleSetIdPermissionsPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group is invalid or does not exist.  2: The roleset is invalid or does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  3: You are not authorized to view/edit permissions for this role.  4: This role\&#39;s permissions can not be modified.", undefined, response.headers);
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

}
