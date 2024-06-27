import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGroupsApiGroupSearchMetadataResponse } from '../models/RobloxGroupsApiGroupSearchMetadataResponse';
import { RobloxGroupsApiGroupSearchPageResponse } from '../models/RobloxGroupsApiGroupSearchPageResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse';

/**
 * no description
 */
export class GroupSearchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Search for groups by keyword.
     * @param keyword The keyword or phrase to use as the search parameter.
     * @param prioritizeExactMatch Whether or not to prioritize the exact match for the keyword (optional, defaults to false.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public async v1GroupsSearchGet(keyword: string, prioritizeExactMatch?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'keyword' is not null or undefined
        if (keyword === null || keyword === undefined) {
            throw new RequiredError("GroupSearchApi", "v1GroupsSearchGet", "keyword");
        }





        // Path Params
        const localVarPath = '/v1/groups/search';

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (keyword !== undefined) {
            requestContext.setQueryParam("keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }

        // Query Params
        if (prioritizeExactMatch !== undefined) {
            requestContext.setQueryParam("prioritizeExactMatch", ObjectSerializer.serialize(prioritizeExactMatch, "boolean", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Should only be used for direct lookups where a user is inputting a group name, shouldn\'t be used for search pages.
     * Looks up groups by a name. Prioritizes an exact match as the first result.
     * @param groupName The group name.
     */
    public async v1GroupsSearchLookupGet(groupName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new RequiredError("GroupSearchApi", "v1GroupsSearchLookupGet", "groupName");
        }


        // Path Params
        const localVarPath = '/v1/groups/search/lookup';

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupName !== undefined) {
            requestContext.setQueryParam("groupName", ObjectSerializer.serialize(groupName, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Although there is no reason for this to require an authenticated user right now, in the future,  we will use coco to return different suggested groups based upon that user\'s request context
     * Get suggested groups and other miscellaneous information needed for the group/join page like flags
     */
    public async v1GroupsSearchMetadataGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/groups/search/metadata';

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class GroupSearchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsSearchGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsSearchGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiGroupSearchPageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiGroupSearchPageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupSearchPageResponse", ""
            ) as RobloxGroupsApiGroupSearchPageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: Search term not appropriate for Roblox.  3: Search term was left empty.  4: Search terms can be 2 to 50 characters long.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiGroupSearchPageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupSearchPageResponse", ""
            ) as RobloxGroupsApiGroupSearchPageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsSearchLookupGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsSearchLookupGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Name is missing or has invalid characters.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGroupsGroupBasicResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsSearchMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsSearchMetadataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiGroupSearchMetadataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiGroupSearchMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupSearchMetadataResponse", ""
            ) as RobloxGroupsApiGroupSearchMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: No Localized Version of group search category exists", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiGroupSearchMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupSearchMetadataResponse", ""
            ) as RobloxGroupsApiGroupSearchMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
