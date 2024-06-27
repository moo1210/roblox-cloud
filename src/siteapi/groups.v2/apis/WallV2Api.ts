import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGroupsApiCreateWallPostRequest } from '../models/RobloxGroupsApiCreateWallPostRequest';
import { RobloxGroupsApiGroupWallPostV2Model } from '../models/RobloxGroupsApiGroupWallPostV2Model';
import { RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model';

/**
 * no description
 */
export class WallV2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets a list of group wall posts.
     * @param groupId The group id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by group wall post Id
     */
    public async v2GroupsGroupIdWallPostsGet(groupId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("WallV2Api", "v2GroupsGroupIdWallPostsGet", "groupId");
        }





        // Path Params
        const localVarPath = '/v2/groups/{groupId}/wall/posts'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.getServer('https://groups.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a post on a group wall
     * @param groupId The group id.
     * @param request The Roblox.Groups.Api.CreateWallPostRequest.
     */
    public async v2GroupsGroupIdWallPostsPost(groupId: number, request: RobloxGroupsApiCreateWallPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("WallV2Api", "v2GroupsGroupIdWallPostsPost", "groupId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("WallV2Api", "v2GroupsGroupIdWallPostsPost", "request");
        }


        // Path Params
        const localVarPath = '/v2/groups/{groupId}/wall/posts'
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
            ObjectSerializer.serialize(request, "RobloxGroupsApiCreateWallPostRequest", ""),
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

export class WallV2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2GroupsGroupIdWallPostsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2GroupsGroupIdWallPostsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The group is invalid or does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: You do not have permission to access this group wall.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxGroupsApiGroupWallPostV2Model;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2GroupsGroupIdWallPostsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2GroupsGroupIdWallPostsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiGroupWallPostV2Model >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiGroupWallPostV2Model = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupWallPostV2Model", ""
            ) as RobloxGroupsApiGroupWallPostV2Model;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The group is invalid or does not exist.  5: Your post was empty, white space, or more than 500 characters.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You do not have permission to access this group wall.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "4: You are posting too fast, please try again in a few minutes.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiGroupWallPostV2Model = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiGroupWallPostV2Model", ""
            ) as RobloxGroupsApiGroupWallPostV2Model;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
