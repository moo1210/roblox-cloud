import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse';

/**
 * no description
 */
export class BadgeAwardsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Removes a badge from the authenticated user.
     * @param badgeId The badge Id.
     */
    public async v1UserBadgesBadgeIdDelete(badgeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'badgeId' is not null or undefined
        if (badgeId === null || badgeId === undefined) {
            throw new RequiredError("BadgeAwardsApi", "v1UserBadgesBadgeIdDelete", "badgeId");
        }


        // Path Params
        const localVarPath = '/v1/user/badges/{badgeId}'
            .replace('{' + 'badgeId' + '}', encodeURIComponent(String(badgeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://badges.roblox.com').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Removes a badge from the user.
     * @param userId 
     * @param badgeId The badge Id.
     */
    public async v1UserUserIdBadgesBadgeIdDelete(userId: number, badgeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("BadgeAwardsApi", "v1UserUserIdBadgesBadgeIdDelete", "userId");
        }


        // verify required parameter 'badgeId' is not null or undefined
        if (badgeId === null || badgeId === undefined) {
            throw new RequiredError("BadgeAwardsApi", "v1UserUserIdBadgesBadgeIdDelete", "badgeId");
        }


        // Path Params
        const localVarPath = '/v1/user/{userId}/badges/{badgeId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'badgeId' + '}', encodeURIComponent(String(badgeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://badges.roblox.com').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets timestamps for when badges were awarded to a user.
     * @param userId The user Id.
     * @param badgeIds The CSV of badge Ids.
     */
    public async v1UsersUserIdBadgesAwardedDatesGet(userId: number, badgeIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("BadgeAwardsApi", "v1UsersUserIdBadgesAwardedDatesGet", "userId");
        }


        // verify required parameter 'badgeIds' is not null or undefined
        if (badgeIds === null || badgeIds === undefined) {
            throw new RequiredError("BadgeAwardsApi", "v1UsersUserIdBadgesAwardedDatesGet", "badgeIds");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/badges/awarded-dates'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://badges.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (badgeIds !== undefined) {
            requestContext.setQueryParam("badgeIds", ObjectSerializer.serialize(badgeIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets timestamp for when a single badge was awarded to a user.
     * @param userId User id.
     * @param badgeId Badge id.
     */
    public async v1UsersUserIdBadgesBadgeIdAwardedDateGet(userId: number, badgeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("BadgeAwardsApi", "v1UsersUserIdBadgesBadgeIdAwardedDateGet", "userId");
        }


        // verify required parameter 'badgeId' is not null or undefined
        if (badgeId === null || badgeId === undefined) {
            throw new RequiredError("BadgeAwardsApi", "v1UsersUserIdBadgesBadgeIdAwardedDateGet", "badgeId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/badges/{badgeId}/awarded-date'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'badgeId' + '}', encodeURIComponent(String(badgeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://badges.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class BadgeAwardsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UserBadgesBadgeIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UserBadgesBadgeIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Badge is invalid or does not exist.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1UserUserIdBadgesBadgeIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UserUserIdBadgesBadgeIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Badge is invalid or does not exist.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1UsersUserIdBadgesAwardedDatesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdBadgesAwardedDatesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: Too many badge Ids.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "4: User is invalid or does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdBadgesBadgeIdAwardedDateGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdBadgesBadgeIdAwardedDateGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "4: User is invalid or does not exist.", undefined, response.headers);
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

}
