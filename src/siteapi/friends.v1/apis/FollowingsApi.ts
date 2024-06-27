import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxFriendsApiCaptchaStatusResponseModel } from '../models/RobloxFriendsApiCaptchaStatusResponseModel';
import { RobloxFriendsApiFollowCountResponse } from '../models/RobloxFriendsApiFollowCountResponse';
import { RobloxFriendsApiFollowingExistsRequestModel } from '../models/RobloxFriendsApiFollowingExistsRequestModel';
import { RobloxFriendsApiModelsResponseFollowingExistsResponseModel } from '../models/RobloxFriendsApiModelsResponseFollowingExistsResponseModel';
import { RobloxWebCaptchaModelsRequestCaptchaTokenRequest } from '../models/RobloxWebCaptchaModelsRequestCaptchaTokenRequest';
import { RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse';

/**
 * no description
 */
export class FollowingsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns whether or not the current user is following each userId in a list of userIds
     * @param requestModel The userIds potentially being followed
     */
    public async v1UserFollowingExistsPost(requestModel: RobloxFriendsApiFollowingExistsRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'requestModel' is not null or undefined
        if (requestModel === null || requestModel === undefined) {
            throw new RequiredError("FollowingsApi", "v1UserFollowingExistsPost", "requestModel");
        }


        // Path Params
        const localVarPath = '/v1/user/following-exists';

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestModel, "RobloxFriendsApiFollowingExistsRequestModel", ""),
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
     * Creates the following between a user and user with targetUserId
     * @param targetUserId 
     * @param captchaTokenRequest 
     */
    public async v1UsersTargetUserIdFollowPost(targetUserId: number, captchaTokenRequest?: RobloxWebCaptchaModelsRequestCaptchaTokenRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetUserId' is not null or undefined
        if (targetUserId === null || targetUserId === undefined) {
            throw new RequiredError("FollowingsApi", "v1UsersTargetUserIdFollowPost", "targetUserId");
        }



        // Path Params
        const localVarPath = '/v1/users/{targetUserId}/follow'
            .replace('{' + 'targetUserId' + '}', encodeURIComponent(String(targetUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(captchaTokenRequest, "RobloxWebCaptchaModelsRequestCaptchaTokenRequest", ""),
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
     * Get the number of following a user has
     * @param targetUserId 
     */
    public async v1UsersTargetUserIdFollowersCountGet(targetUserId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetUserId' is not null or undefined
        if (targetUserId === null || targetUserId === undefined) {
            throw new RequiredError("FollowingsApi", "v1UsersTargetUserIdFollowersCountGet", "targetUserId");
        }


        // Path Params
        const localVarPath = '/v1/users/{targetUserId}/followers/count'
            .replace('{' + 'targetUserId' + '}', encodeURIComponent(String(targetUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all users that follow user with targetUserId in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v1UsersTargetUserIdFollowersGet(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetUserId' is not null or undefined
        if (targetUserId === null || targetUserId === undefined) {
            throw new RequiredError("FollowingsApi", "v1UsersTargetUserIdFollowersGet", "targetUserId");
        }





        // Path Params
        const localVarPath = '/v1/users/{targetUserId}/followers'
            .replace('{' + 'targetUserId' + '}', encodeURIComponent(String(targetUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 18 | 25 | 50 | 100", "int32"));
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
     * Get the number of following a user has
     * @param targetUserId 
     */
    public async v1UsersTargetUserIdFollowingsCountGet(targetUserId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetUserId' is not null or undefined
        if (targetUserId === null || targetUserId === undefined) {
            throw new RequiredError("FollowingsApi", "v1UsersTargetUserIdFollowingsCountGet", "targetUserId");
        }


        // Path Params
        const localVarPath = '/v1/users/{targetUserId}/followings/count'
            .replace('{' + 'targetUserId' + '}', encodeURIComponent(String(targetUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all users that user with targetUserId is following in page response format
     * @param targetUserId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v1UsersTargetUserIdFollowingsGet(targetUserId: number, limit?: 10 | 18 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetUserId' is not null or undefined
        if (targetUserId === null || targetUserId === undefined) {
            throw new RequiredError("FollowingsApi", "v1UsersTargetUserIdFollowingsGet", "targetUserId");
        }





        // Path Params
        const localVarPath = '/v1/users/{targetUserId}/followings'
            .replace('{' + 'targetUserId' + '}', encodeURIComponent(String(targetUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 18 | 25 | 50 | 100", "int32"));
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
     * Deletes the following between a user and user with targetUserId
     * @param targetUserId 
     */
    public async v1UsersTargetUserIdUnfollowPost(targetUserId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetUserId' is not null or undefined
        if (targetUserId === null || targetUserId === undefined) {
            throw new RequiredError("FollowingsApi", "v1UsersTargetUserIdUnfollowPost", "targetUserId");
        }


        // Path Params
        const localVarPath = '/v1/users/{targetUserId}/unfollow'
            .replace('{' + 'targetUserId' + '}', encodeURIComponent(String(targetUserId)));

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FollowingsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UserFollowingExistsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UserFollowingExistsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiModelsResponseFollowingExistsResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiModelsResponseFollowingExistsResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiModelsResponseFollowingExistsResponseModel", ""
            ) as RobloxFriendsApiModelsResponseFollowingExistsResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: An invalid userId was passed in.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Followers are disabled at this time.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiModelsResponseFollowingExistsResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiModelsResponseFollowingExistsResponseModel", ""
            ) as RobloxFriendsApiModelsResponseFollowingExistsResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersTargetUserIdFollowPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersTargetUserIdFollowPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiCaptchaStatusResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiCaptchaStatusResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiCaptchaStatusResponseModel", ""
            ) as RobloxFriendsApiCaptchaStatusResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  6: Invalid parameters.  8: The user cannot follow itself.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: The user is banned from performing operation.  3: The user is blocked from performing this action.  14: The user has not passed the captcha.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: The flood limit has been exceeded.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiCaptchaStatusResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiCaptchaStatusResponseModel", ""
            ) as RobloxFriendsApiCaptchaStatusResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersTargetUserIdFollowersCountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersTargetUserIdFollowersCountGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiFollowCountResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiFollowCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiFollowCountResponse", ""
            ) as RobloxFriendsApiFollowCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiFollowCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiFollowCountResponse", ""
            ) as RobloxFriendsApiFollowCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersTargetUserIdFollowersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersTargetUserIdFollowersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  6: Invalid parameters.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: The user is banned from performing operation.  3: The user is blocked from performing this action.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: The flood limit has been exceeded.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersTargetUserIdFollowingsCountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersTargetUserIdFollowingsCountGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiFollowCountResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiFollowCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiFollowCountResponse", ""
            ) as RobloxFriendsApiFollowCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiFollowCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiFollowCountResponse", ""
            ) as RobloxFriendsApiFollowCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersTargetUserIdFollowingsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersTargetUserIdFollowingsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  6: Invalid parameters.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: The user is banned from performing operation.  3: The user is blocked from performing this action.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: The flood limit has been exceeded.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxFriendsApiModelsResponseUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersTargetUserIdUnfollowPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersTargetUserIdUnfollowPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The target user is invalid or does not exist.  6: Invalid parameters.  8: The user cannot follow itself.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: The user is banned from performing operation.  3: The user is blocked from performing this action.  14: The user has not passed the captcha.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: The flood limit has been exceeded.", undefined, response.headers);
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
