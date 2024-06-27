import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxItemConfigurationApiAssetCreationsDetailsRequest } from '../models/RobloxItemConfigurationApiAssetCreationsDetailsRequest';
import { RobloxItemConfigurationApiAssetCreationsDetailsResponse } from '../models/RobloxItemConfigurationApiAssetCreationsDetailsResponse';
import { RobloxItemConfigurationApiBundleItemResponse } from '../models/RobloxItemConfigurationApiBundleItemResponse';
import { RobloxItemConfigurationApiCollectibleCommissionRatesResponse } from '../models/RobloxItemConfigurationApiCollectibleCommissionRatesResponse';
import { RobloxItemConfigurationApiCommissionRatesResponse } from '../models/RobloxItemConfigurationApiCommissionRatesResponse';
import { RobloxItemConfigurationApiItemMetadataResponse } from '../models/RobloxItemConfigurationApiItemMetadataResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse';

/**
 * no description
 */
export class ItemApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets the bundles details
     * @param bundleId 
     */
    public async v1BundlesBundleIdGet(bundleId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bundleId' is not null or undefined
        if (bundleId === null || bundleId === undefined) {
            throw new RequiredError("ItemApi", "v1BundlesBundleIdGet", "bundleId");
        }


        // Path Params
        const localVarPath = '/v1/bundles/{bundleId}'
            .replace('{' + 'bundleId' + '}', encodeURIComponent(String(bundleId)));

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the metadata related to bundles
     */
    public async v1BundlesMetadataGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/bundles/metadata';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the collectibles commission rate
     */
    public async v1CollectiblesCommissionRatesGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/collectibles/commission-rates';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the metadata related to collectibles
     */
    public async v1CollectiblesMetadataGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/collectibles/metadata';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the asset status and other configuration details for the given assetIds list
     * @param request 
     */
    public async v1CreationsGetAssetDetailsPost(request: RobloxItemConfigurationApiAssetCreationsDetailsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("ItemApi", "v1CreationsGetAssetDetailsPost", "request");
        }


        // Path Params
        const localVarPath = '/v1/creations/get-asset-details';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxItemConfigurationApiAssetCreationsDetailsRequest", ""),
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
     * Gets the user created asset information filtered by the given asset type
     * @param assetType 
     * @param isArchived 
     * @param groupId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public async v1CreationsGetAssetsGet(assetType: string, isArchived?: boolean, groupId?: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("ItemApi", "v1CreationsGetAssetsGet", "assetType");
        }






        // Path Params
        const localVarPath = '/v1/creations/get-assets';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (assetType !== undefined) {
            requestContext.setQueryParam("assetType", ObjectSerializer.serialize(assetType, "string", ""));
        }

        // Query Params
        if (isArchived !== undefined) {
            requestContext.setQueryParam("isArchived", ObjectSerializer.serialize(isArchived, "boolean", ""));
        }

        // Query Params
        if (groupId !== undefined) {
            requestContext.setQueryParam("groupId", ObjectSerializer.serialize(groupId, "number", "int64"));
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
     * Gets the commission rates related to assetTypes
     */
    public async v1GetCommissionRatesGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/get-commission-rates';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the metadata related to assets and bundles
     */
    public async v1MetadataGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/metadata';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ItemApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1BundlesBundleIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1BundlesBundleIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxItemConfigurationApiBundleItemResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxItemConfigurationApiBundleItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiBundleItemResponse", ""
            ) as RobloxItemConfigurationApiBundleItemResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxItemConfigurationApiBundleItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiBundleItemResponse", ""
            ) as RobloxItemConfigurationApiBundleItemResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1BundlesMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1BundlesMetadataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxItemConfigurationApiItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemMetadataResponse", ""
            ) as RobloxItemConfigurationApiItemMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxItemConfigurationApiItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemMetadataResponse", ""
            ) as RobloxItemConfigurationApiItemMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CollectiblesCommissionRatesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CollectiblesCommissionRatesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>", ""
            ) as Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "6: Service Unavailable", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>", ""
            ) as Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CollectiblesMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CollectiblesMetadataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxItemConfigurationApiItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemMetadataResponse", ""
            ) as RobloxItemConfigurationApiItemMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxItemConfigurationApiItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemMetadataResponse", ""
            ) as RobloxItemConfigurationApiItemMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CreationsGetAssetDetailsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CreationsGetAssetDetailsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>", ""
            ) as Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Missing AssetIds parameters  2: Invalid asset Ids", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("414", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Too many asset Ids", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: Flood Limit Exceeded", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "6: Service Unavailable", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>", ""
            ) as Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CreationsGetAssetsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CreationsGetAssetsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: Invalid assetType  10: Invalid Asset Category", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: User does not have necessary permissions for group  8: Asset type does not have necessary permissions for group", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: Flood Limit Exceeded", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "6: Service Unavailable", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GetCommissionRatesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GetCommissionRatesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RobloxItemConfigurationApiCommissionRatesResponse> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RobloxItemConfigurationApiCommissionRatesResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxItemConfigurationApiCommissionRatesResponse>", ""
            ) as Array<RobloxItemConfigurationApiCommissionRatesResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "6: Service Unavailable", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RobloxItemConfigurationApiCommissionRatesResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxItemConfigurationApiCommissionRatesResponse>", ""
            ) as Array<RobloxItemConfigurationApiCommissionRatesResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1MetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1MetadataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxItemConfigurationApiItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemMetadataResponse", ""
            ) as RobloxItemConfigurationApiItemMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxItemConfigurationApiItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemMetadataResponse", ""
            ) as RobloxItemConfigurationApiItemMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
