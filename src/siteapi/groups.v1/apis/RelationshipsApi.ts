import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGroupsApiGroupRelationshipsResponse } from '../models/RobloxGroupsApiGroupRelationshipsResponse';
import { RobloxGroupsApiRelationshipsRequest } from '../models/RobloxGroupsApiRelationshipsRequest';

/**
 * no description
 */
export class RelationshipsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets a group\'s relationships
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet", "groupId");
        }


        // verify required parameter 'groupRelationshipType' is not null or undefined
        if (groupRelationshipType === null || groupRelationshipType === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet", "groupRelationshipType");
        }


        // verify required parameter 'startRowIndex' is not null or undefined
        if (startRowIndex === null || startRowIndex === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet", "startRowIndex");
        }


        // verify required parameter 'maxRows' is not null or undefined
        if (maxRows === null || maxRows === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet", "maxRows");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/relationships/{groupRelationshipType}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'groupRelationshipType' + '}', encodeURIComponent(String(groupRelationshipType)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startRowIndex !== undefined) {
            requestContext.setQueryParam("StartRowIndex", ObjectSerializer.serialize(startRowIndex, "number", "int32"));
        }

        // Query Params
        if (maxRows !== undefined) {
            requestContext.setQueryParam("MaxRows", ObjectSerializer.serialize(maxRows, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to delete the relationship with.
     */
    public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete", "groupId");
        }


        // verify required parameter 'groupRelationshipType' is not null or undefined
        if (groupRelationshipType === null || groupRelationshipType === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete", "groupRelationshipType");
        }


        // verify required parameter 'relatedGroupId' is not null or undefined
        if (relatedGroupId === null || relatedGroupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete", "relatedGroupId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/relationships/{groupRelationshipType}/{relatedGroupId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'groupRelationshipType' + '}', encodeURIComponent(String(groupRelationshipType)))
            .replace('{' + 'relatedGroupId' + '}', encodeURIComponent(String(relatedGroupId)));

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
     * Create a group relationship.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to create a relationship with.
     */
    public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost", "groupId");
        }


        // verify required parameter 'groupRelationshipType' is not null or undefined
        if (groupRelationshipType === null || groupRelationshipType === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost", "groupRelationshipType");
        }


        // verify required parameter 'relatedGroupId' is not null or undefined
        if (relatedGroupId === null || relatedGroupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost", "relatedGroupId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/relationships/{groupRelationshipType}/{relatedGroupId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'groupRelationshipType' + '}', encodeURIComponent(String(groupRelationshipType)))
            .replace('{' + 'relatedGroupId' + '}', encodeURIComponent(String(relatedGroupId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Batch declines group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete", "groupId");
        }


        // verify required parameter 'groupRelationshipType' is not null or undefined
        if (groupRelationshipType === null || groupRelationshipType === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete", "groupRelationshipType");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete", "request");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/relationships/{groupRelationshipType}/requests'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'groupRelationshipType' + '}', encodeURIComponent(String(groupRelationshipType)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxGroupsApiRelationshipsRequest", ""),
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
     * Gets a group\'s relationship requests
     * @param groupId The group Id.
     * @param groupRelationshipType The group relationship type of the request, only allies are supported.
     * @param startRowIndex The start index of the page request
     * @param maxRows The maximum number of rows for the page request, should be at least 1.
     */
    public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet(groupId: number, groupRelationshipType: string, startRowIndex: number, maxRows: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet", "groupId");
        }


        // verify required parameter 'groupRelationshipType' is not null or undefined
        if (groupRelationshipType === null || groupRelationshipType === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet", "groupRelationshipType");
        }


        // verify required parameter 'startRowIndex' is not null or undefined
        if (startRowIndex === null || startRowIndex === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet", "startRowIndex");
        }


        // verify required parameter 'maxRows' is not null or undefined
        if (maxRows === null || maxRows === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet", "maxRows");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/relationships/{groupRelationshipType}/requests'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'groupRelationshipType' + '}', encodeURIComponent(String(groupRelationshipType)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startRowIndex !== undefined) {
            requestContext.setQueryParam("StartRowIndex", ObjectSerializer.serialize(startRowIndex, "number", "int32"));
        }

        // Query Params
        if (maxRows !== undefined) {
            requestContext.setQueryParam("MaxRows", ObjectSerializer.serialize(maxRows, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Batch accepts group affiliate requests
     * @param groupId The group id.
     * @param groupRelationshipType The type of group relationship being made
     * @param request The Roblox.Groups.Api.RelationshipsRequest.
     */
    public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost(groupId: number, groupRelationshipType: string, request: RobloxGroupsApiRelationshipsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost", "groupId");
        }


        // verify required parameter 'groupRelationshipType' is not null or undefined
        if (groupRelationshipType === null || groupRelationshipType === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost", "groupRelationshipType");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost", "request");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/relationships/{groupRelationshipType}/requests'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'groupRelationshipType' + '}', encodeURIComponent(String(groupRelationshipType)));

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
            ObjectSerializer.serialize(request, "RobloxGroupsApiRelationshipsRequest", ""),
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
     * Declines a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete", "groupId");
        }


        // verify required parameter 'groupRelationshipType' is not null or undefined
        if (groupRelationshipType === null || groupRelationshipType === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete", "groupRelationshipType");
        }


        // verify required parameter 'relatedGroupId' is not null or undefined
        if (relatedGroupId === null || relatedGroupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete", "relatedGroupId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/relationships/{groupRelationshipType}/requests/{relatedGroupId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'groupRelationshipType' + '}', encodeURIComponent(String(groupRelationshipType)))
            .replace('{' + 'relatedGroupId' + '}', encodeURIComponent(String(relatedGroupId)));

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
     * Accepts a group relationship request.
     * @param groupId The group id.
     * @param groupRelationshipType The group relationship type, enemies or allies, only allies are supported.
     * @param relatedGroupId The id of the group you want to accept the relationship request with.
     */
    public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost(groupId: number, groupRelationshipType: string, relatedGroupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost", "groupId");
        }


        // verify required parameter 'groupRelationshipType' is not null or undefined
        if (groupRelationshipType === null || groupRelationshipType === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost", "groupRelationshipType");
        }


        // verify required parameter 'relatedGroupId' is not null or undefined
        if (relatedGroupId === null || relatedGroupId === undefined) {
            throw new RequiredError("RelationshipsApi", "v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost", "relatedGroupId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/relationships/{groupRelationshipType}/requests/{relatedGroupId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'groupRelationshipType' + '}', encodeURIComponent(String(groupRelationshipType)))
            .replace('{' + 'relatedGroupId' + '}', encodeURIComponent(String(relatedGroupId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class RelationshipsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRelationshipsGroupRelationshipTypeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiGroupRelationshipsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiGroupRelationshipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupRelationshipsResponse", ""
            ) as RobloxGroupsApiGroupRelationshipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group is invalid or does not exist.  4: Group relationship type or request type is invalid.  8: Invalid or missing pagination parameters", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiGroupRelationshipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupRelationshipsResponse", ""
            ) as RobloxGroupsApiGroupRelationshipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: Invalid group.  3: Target group is invalid or does not exist.  11: Relationship does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  8: You are blocked from communicating with this user.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRelatedGroupIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group relationship type or request type is invalid.  2: Invalid group.  3: Target group is invalid or does not exist.  4: Your group cannot establish a relationship with itself.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  5: Your group does not allow enemy declarations.  6: Other group does not allow enemy declarations.  7: Your group already has a relationship with the target group.  8: You are blocked from communicating with this user.  9: Insufficient permissions.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiGroupRelationshipsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiGroupRelationshipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupRelationshipsResponse", ""
            ) as RobloxGroupsApiGroupRelationshipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group is invalid or does not exist.  4: Group relationship type or request type is invalid.  8: Invalid or missing pagination parameters", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: You don\&#39;t have permission to manage this group\&#39;s relationships.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiGroupRelationshipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupRelationshipsResponse", ""
            ) as RobloxGroupsApiGroupRelationshipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group relationship type or request type is invalid.  2: Invalid group.  3: Target group is invalid or does not exist.  10: Relationship request does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  9: Insufficient permissions.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRelationshipsGroupRelationshipTypeRequestsRelatedGroupIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group relationship type or request type is invalid.  2: Invalid group.  3: Target group is invalid or does not exist.  10: Relationship request does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  9: Insufficient permissions.", undefined, response.headers);
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
