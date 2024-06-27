import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxEconomyApiResaleDataResponse } from '../models/RobloxEconomyApiResaleDataResponse';
import { RobloxEconomyApiResaleTaxRateResponse } from '../models/RobloxEconomyApiResaleTaxRateResponse';
import { RobloxEconomyApiUserAssetsPatchRequest } from '../models/RobloxEconomyApiUserAssetsPatchRequest';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse';

/**
 * no description
 */
export class ResaleApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint is only valid for resellable (limited) items.
     * Gets asset resale data.
     * @param assetId The asset id.
     */
    public async v1AssetsAssetIdResaleDataGet(assetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("ResaleApi", "v1AssetsAssetIdResaleDataGet", "assetId");
        }


        // Path Params
        const localVarPath = '/v1/assets/{assetId}/resale-data'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sets copies of an asset owned by the authenticated user for sale
     * @param assetId 
     * @param userAssetId 
     * @param request 
     */
    public async v1AssetsAssetIdResellableCopiesUserAssetIdPatch(assetId: number, userAssetId: number, request: RobloxEconomyApiUserAssetsPatchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("ResaleApi", "v1AssetsAssetIdResellableCopiesUserAssetIdPatch", "assetId");
        }


        // verify required parameter 'userAssetId' is not null or undefined
        if (userAssetId === null || userAssetId === undefined) {
            throw new RequiredError("ResaleApi", "v1AssetsAssetIdResellableCopiesUserAssetIdPatch", "userAssetId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("ResaleApi", "v1AssetsAssetIdResellableCopiesUserAssetIdPatch", "request");
        }


        // Path Params
        const localVarPath = '/v1/assets/{assetId}/resellable-copies/{userAssetId}'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'userAssetId' + '}', encodeURIComponent(String(userAssetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json",
        
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxEconomyApiUserAssetsPatchRequest", ""),
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
     * Gets available resale copies of an asset.
     * @param assetId The asset id.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public async v1AssetsAssetIdResellersGet(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("ResaleApi", "v1AssetsAssetIdResellersGet", "assetId");
        }




        // Path Params
        const localVarPath = '/v1/assets/{assetId}/resellers'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Gets resellable copies of an asset owned by the authenticated user.
     * @param userId The user id.
     * @param assetId The asset id.
     */
    public async v1AssetsAssetIdUsersUserIdResellableCopiesGet(userId: number, assetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("ResaleApi", "v1AssetsAssetIdUsersUserIdResellableCopiesGet", "userId");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("ResaleApi", "v1AssetsAssetIdUsersUserIdResellableCopiesGet", "assetId");
        }


        // Path Params
        const localVarPath = '/v1/assets/{assetId}/users/{userId}/resellable-copies'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets asset resale related metadata.
     */
    public async v1ResaleTaxRateGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/resale-tax-rate';

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ResaleApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AssetsAssetIdResaleDataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetsAssetIdResaleDataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxEconomyApiResaleDataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxEconomyApiResaleDataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiResaleDataResponse", ""
            ) as RobloxEconomyApiResaleDataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: The asset id is invalid.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxEconomyApiResaleDataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiResaleDataResponse", ""
            ) as RobloxEconomyApiResaleDataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AssetsAssetIdResellableCopiesUserAssetIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetsAssetIdResellableCopiesUserAssetIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: The asset id is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.  1: The user is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  3: Insufficient permissions.  6: The price is too low  7: The price is too high  8: Asset cannot be for resale  9: The user does not own the asset", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1AssetsAssetIdResellersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetsAssetIdResellersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AssetsAssetIdUsersUserIdResellableCopiesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetsAssetIdUsersUserIdResellableCopiesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: The asset id is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Insufficient permissions.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1ResaleTaxRateGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1ResaleTaxRateGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxEconomyApiResaleTaxRateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxEconomyApiResaleTaxRateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiResaleTaxRateResponse", ""
            ) as RobloxEconomyApiResaleTaxRateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxEconomyApiResaleTaxRateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiResaleTaxRateResponse", ""
            ) as RobloxEconomyApiResaleTaxRateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
