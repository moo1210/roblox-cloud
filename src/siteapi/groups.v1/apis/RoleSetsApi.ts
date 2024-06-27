import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGroupsApiGroupRoleResponse } from '../models/RobloxGroupsApiGroupRoleResponse';
import { RobloxGroupsApiModelsRequestCreateRoleSetRequest } from '../models/RobloxGroupsApiModelsRequestCreateRoleSetRequest';
import { RobloxGroupsApiModelsRequestUpdateRoleSetRequest } from '../models/RobloxGroupsApiModelsRequestUpdateRoleSetRequest';

/**
 * no description
 */
export class RoleSetsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates new group roleset.
     * @param groupId The group Id.
     * @param request The Roblox.Groups.Api.Models.Request.CreateRoleSetRequest.
     */
    public async v1GroupsGroupIdRolesetsCreatePost(groupId: number, request: RobloxGroupsApiModelsRequestCreateRoleSetRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RoleSetsApi", "v1GroupsGroupIdRolesetsCreatePost", "groupId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("RoleSetsApi", "v1GroupsGroupIdRolesetsCreatePost", "request");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/rolesets/create'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxGroupsApiModelsRequestCreateRoleSetRequest", ""),
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
     * Deletes existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     */
    public async v1GroupsGroupIdRolesetsRolesetIdDelete(groupId: number, rolesetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RoleSetsApi", "v1GroupsGroupIdRolesetsRolesetIdDelete", "groupId");
        }


        // verify required parameter 'rolesetId' is not null or undefined
        if (rolesetId === null || rolesetId === undefined) {
            throw new RequiredError("RoleSetsApi", "v1GroupsGroupIdRolesetsRolesetIdDelete", "rolesetId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/rolesets/{rolesetId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'rolesetId' + '}', encodeURIComponent(String(rolesetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates existing group roleset.
     * @param groupId The group Id.
     * @param rolesetId The roleset Id.
     * @param request The Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest.
     */
    public async v1GroupsGroupIdRolesetsRolesetIdPatch(groupId: number, rolesetId: number, request: RobloxGroupsApiModelsRequestUpdateRoleSetRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RoleSetsApi", "v1GroupsGroupIdRolesetsRolesetIdPatch", "groupId");
        }


        // verify required parameter 'rolesetId' is not null or undefined
        if (rolesetId === null || rolesetId === undefined) {
            throw new RequiredError("RoleSetsApi", "v1GroupsGroupIdRolesetsRolesetIdPatch", "rolesetId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("RoleSetsApi", "v1GroupsGroupIdRolesetsRolesetIdPatch", "request");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/rolesets/{rolesetId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'rolesetId' + '}', encodeURIComponent(String(rolesetId)));

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
            ObjectSerializer.serialize(request, "RobloxGroupsApiModelsRequestUpdateRoleSetRequest", ""),
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

export class RoleSetsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRolesetsCreatePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRolesetsCreatePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiGroupRoleResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiGroupRoleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupRoleResponse", ""
            ) as RobloxGroupsApiGroupRoleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Something went wrong.  3: You do not have enough funds to purchase this role.  5: Role name already exists.  6: Rank value is out of bounds.  7: The role name is too long.  8: The role description is too long.  10: This group does not exist.  11: Failed to process payment to purchase role.  12: Limit for roles have been reached on this group.  14: Role name can not be empty.  15: This role does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  9: You do not have permissions to perform this action.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiGroupRoleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupRoleResponse", ""
            ) as RobloxGroupsApiGroupRoleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRolesetsRolesetIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRolesetsRolesetIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "10: This group does not exist.  15: This role does not exist.  17: Cannot remove any more roles  18: Cannot delete this role.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  9: You do not have permissions to perform this action.  16: There are users in this role.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1GroupsGroupIdRolesetsRolesetIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRolesetsRolesetIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiGroupRoleResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiGroupRoleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupRoleResponse", ""
            ) as RobloxGroupsApiGroupRoleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: Role name already exists.  6: Rank value is out of bounds.  7: The role name is too long.  8: The role description is too long.  10: This group does not exist.  14: Role name can not be empty.  15: This role does not exist.  19: Cannot update Guest role.  20: Cannot update Owner role rank.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  9: You do not have permissions to perform this action.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiGroupRoleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupRoleResponse", ""
            ) as RobloxGroupsApiGroupRoleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
