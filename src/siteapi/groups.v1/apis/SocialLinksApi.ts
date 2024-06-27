import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxGroupsApiSocialLinkRequest } from '../models/RobloxGroupsApiSocialLinkRequest';
import { RobloxGroupsApiSocialLinkResponse } from '../models/RobloxGroupsApiSocialLinkResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse';

/**
 * no description
 */
export class SocialLinksApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get social link data associated with a group
     * @param groupId The Id of the game
     */
    public async v1GroupsGroupIdSocialLinksGet(groupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("SocialLinksApi", "v1GroupsGroupIdSocialLinksGet", "groupId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/social-links'
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
     * Posts a social links
     * @param groupId The id of the game
     * @param request The Roblox.Groups.Api.SocialLinkRequest
     */
    public async v1GroupsGroupIdSocialLinksPost(groupId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("SocialLinksApi", "v1GroupsGroupIdSocialLinksPost", "groupId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("SocialLinksApi", "v1GroupsGroupIdSocialLinksPost", "request");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/social-links'
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
            ObjectSerializer.serialize(request, "RobloxGroupsApiSocialLinkRequest", ""),
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
     * Deletes a social link
     * @param groupId The id of the game you are editting, required for permissions checking
     * @param socialLinkId The id of the social link
     */
    public async v1GroupsGroupIdSocialLinksSocialLinkIdDelete(groupId: number, socialLinkId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("SocialLinksApi", "v1GroupsGroupIdSocialLinksSocialLinkIdDelete", "groupId");
        }


        // verify required parameter 'socialLinkId' is not null or undefined
        if (socialLinkId === null || socialLinkId === undefined) {
            throw new RequiredError("SocialLinksApi", "v1GroupsGroupIdSocialLinksSocialLinkIdDelete", "socialLinkId");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/social-links/{socialLinkId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'socialLinkId' + '}', encodeURIComponent(String(socialLinkId)));

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
     * Updates a social link
     * @param groupId The id of the universe
     * @param socialLinkId The id of the social link being updated
     * @param request The Roblox.Groups.Api.SocialLinkRequest.
     */
    public async v1GroupsGroupIdSocialLinksSocialLinkIdPatch(groupId: number, socialLinkId: number, request: RobloxGroupsApiSocialLinkRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("SocialLinksApi", "v1GroupsGroupIdSocialLinksSocialLinkIdPatch", "groupId");
        }


        // verify required parameter 'socialLinkId' is not null or undefined
        if (socialLinkId === null || socialLinkId === undefined) {
            throw new RequiredError("SocialLinksApi", "v1GroupsGroupIdSocialLinksSocialLinkIdPatch", "socialLinkId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("SocialLinksApi", "v1GroupsGroupIdSocialLinksSocialLinkIdPatch", "request");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/social-links/{socialLinkId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'socialLinkId' + '}', encodeURIComponent(String(socialLinkId)));

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
            ObjectSerializer.serialize(request, "RobloxGroupsApiSocialLinkRequest", ""),
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

export class SocialLinksApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdSocialLinksGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdSocialLinksGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group is invalid or does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "13: Only users who are over thirteen years of age may edit social links.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "11: Social links cannot be processed as this time.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxGroupsApiSocialLinkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdSocialLinksPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdSocialLinksPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxGroupsApiSocialLinkResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxGroupsApiSocialLinkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiSocialLinkResponse", ""
            ) as RobloxGroupsApiSocialLinkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: The social link title is too long.  4: The social link title cannot be empty.  5: The social link url cannot be empty.  7: The request was null.  9: The social link type is invalid.  12: The social link title was moderated.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You do not have permission to configure this social link.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: The requested group or social link was not found.", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "11: Social links cannot be processed as this time.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxGroupsApiSocialLinkResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxGroupsApiSocialLinkResponse", ""
            ) as RobloxGroupsApiSocialLinkResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdSocialLinksSocialLinkIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdSocialLinksSocialLinkIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group is invalid or does not exist.  10: The social link is not for a group.  15: The social link id doesn\&#39;t match the group id.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You do not have permission to configure this social link.  13: Only users who are over thirteen years of age may edit social links.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "11: Social links cannot be processed as this time.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1GroupsGroupIdSocialLinksSocialLinkIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdSocialLinksSocialLinkIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Group is invalid or does not exist.  3: The social link title is too long.  4: The social link title cannot be empty.  5: The social link url cannot be empty.  6: The social link url was improperly formatted.  7: The request was null.  8: The requested group or social link was not found.  9: The social link type is invalid.  10: The social link is not for a group.  12: The social link title was moderated.  16: A social link with this type already exists on this group.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You do not have permission to configure this social link.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "11: Social links cannot be processed as this time.", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "11: Social links cannot be processed as this time.", undefined, response.headers);
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
