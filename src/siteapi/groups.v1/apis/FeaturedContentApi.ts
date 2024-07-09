import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGroupsClientGroupFeaturedContentResponse } from '../models/RobloxGroupsClientGroupFeaturedContentResponse';

/**
 * no description
 */
export class FeaturedContentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Deletes the featured event for a group
     * @param groupId The group Id.
     * @param eventId The event Id.
     */
    public async v1FeaturedContentEventDelete(groupId: number, eventId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("FeaturedContentApi", "v1FeaturedContentEventDelete", "groupId");
        }


        // verify required parameter 'eventId' is not null or undefined
        if (eventId === null || eventId === undefined) {
            throw new RequiredError("FeaturedContentApi", "v1FeaturedContentEventDelete", "eventId");
        }


        // Path Params
        const localVarPath = '/v1/featured-content/event';

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupId !== undefined) {
            requestContext.setQueryParam("groupId", ObjectSerializer.serialize(groupId, "number", "int64"));
        }

        // Query Params
        if (eventId !== undefined) {
            requestContext.setQueryParam("eventId", ObjectSerializer.serialize(eventId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the featured event for a group
     * @param groupId The group Id.
     */
    public async v1FeaturedContentEventGet(groupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("FeaturedContentApi", "v1FeaturedContentEventGet", "groupId");
        }


        // Path Params
        const localVarPath = '/v1/featured-content/event';

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupId !== undefined) {
            requestContext.setQueryParam("groupId", ObjectSerializer.serialize(groupId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sets the featured event for a group
     * @param groupId The group Id.
     * @param eventId The event Id.
     */
    public async v1FeaturedContentEventPost(groupId: number, eventId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("FeaturedContentApi", "v1FeaturedContentEventPost", "groupId");
        }


        // verify required parameter 'eventId' is not null or undefined
        if (eventId === null || eventId === undefined) {
            throw new RequiredError("FeaturedContentApi", "v1FeaturedContentEventPost", "eventId");
        }


        // Path Params
        const localVarPath = '/v1/featured-content/event';

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupId !== undefined) {
            requestContext.setQueryParam("groupId", ObjectSerializer.serialize(groupId, "number", "int64"));
        }

        // Query Params
        if (eventId !== undefined) {
            requestContext.setQueryParam("eventId", ObjectSerializer.serialize(eventId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FeaturedContentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1FeaturedContentEventDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1FeaturedContentEventDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  3: User is not authorized to set featured content for this group.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1FeaturedContentEventGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1FeaturedContentEventGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsClientGroupFeaturedContentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsClientGroupFeaturedContentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsClientGroupFeaturedContentResponse", ""
            ) as RobloxGroupsClientGroupFeaturedContentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsClientGroupFeaturedContentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsClientGroupFeaturedContentResponse", ""
            ) as RobloxGroupsClientGroupFeaturedContentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1FeaturedContentEventPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1FeaturedContentEventPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsClientGroupFeaturedContentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsClientGroupFeaturedContentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsClientGroupFeaturedContentResponse", ""
            ) as RobloxGroupsClientGroupFeaturedContentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  3: User is not authorized to set featured content for this group.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsClientGroupFeaturedContentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsClientGroupFeaturedContentResponse", ""
            ) as RobloxGroupsClientGroupFeaturedContentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
