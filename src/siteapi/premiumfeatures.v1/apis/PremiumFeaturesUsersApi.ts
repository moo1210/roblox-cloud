import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';



/**
 * no description
 */
export class PremiumFeaturesUsersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Premium upsell precheck
     * @param userId User ID
     * @param universeId 
     * @param placeId 
     */
    public async v1UsersUserIdPremiumUpsellPrecheckGet(userId: number, universeId: number, placeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("PremiumFeaturesUsersApi", "v1UsersUserIdPremiumUpsellPrecheckGet", "userId");
        }


        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("PremiumFeaturesUsersApi", "v1UsersUserIdPremiumUpsellPrecheckGet", "universeId");
        }


        // verify required parameter 'placeId' is not null or undefined
        if (placeId === null || placeId === undefined) {
            throw new RequiredError("PremiumFeaturesUsersApi", "v1UsersUserIdPremiumUpsellPrecheckGet", "placeId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/premium-upsell-precheck'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://premiumfeatures.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (universeId !== undefined) {
            requestContext.setQueryParam("universeId", ObjectSerializer.serialize(universeId, "number", "int64"));
        }

        // Query Params
        if (placeId !== undefined) {
            requestContext.setQueryParam("placeId", ObjectSerializer.serialize(placeId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get if a user has a Premium membership
     * @param userId User ID
     */
    public async v1UsersUserIdValidateMembershipGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("PremiumFeaturesUsersApi", "v1UsersUserIdValidateMembershipGet", "userId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/validate-membership'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://premiumfeatures.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PremiumFeaturesUsersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdPremiumUpsellPrecheckGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdPremiumUpsellPrecheckGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1UsersUserIdValidateMembershipGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdValidateMembershipGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
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
