import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxCatalogApiBundleDetailsModel } from '../models/RobloxCatalogApiBundleDetailsModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel';
import { RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel';
import { RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel';

/**
 * no description
 */
export class BundleApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Lists the bundles a particular asset belongs to. Use the Id of the last bundle in the response to get the next page.
     * @param assetId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v1AssetsAssetIdBundlesGet(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("BundleApi", "v1AssetsAssetIdBundlesGet", "assetId");
        }





        // Path Params
        const localVarPath = '/v1/assets/{assetId}/bundles'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://catalog.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Returns details about the given bundleId.
     * @param bundleId 
     */
    public async v1BundlesBundleIdDetailsGet(bundleId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bundleId' is not null or undefined
        if (bundleId === null || bundleId === undefined) {
            throw new RequiredError("BundleApi", "v1BundlesBundleIdDetailsGet", "bundleId");
        }


        // Path Params
        const localVarPath = '/v1/bundles/{bundleId}/details'
            .replace('{' + 'bundleId' + '}', encodeURIComponent(String(bundleId)));

        // Make Request Context
        const requestContext = _config.getServer('https://catalog.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets recommendations for a given bundle, bundleId of 0 returns randomized bundles  - Accepts both public and authenticated users
     * @param bundleId 
     * @param numItems The number of recommended items to return.
     */
    public async v1BundlesBundleIdRecommendationsGet(bundleId: number, numItems?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bundleId' is not null or undefined
        if (bundleId === null || bundleId === undefined) {
            throw new RequiredError("BundleApi", "v1BundlesBundleIdRecommendationsGet", "bundleId");
        }



        // Path Params
        const localVarPath = '/v1/bundles/{bundleId}/recommendations'
            .replace('{' + 'bundleId' + '}', encodeURIComponent(String(bundleId)));

        // Make Request Context
        const requestContext = _config.getServer('https://catalog.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (numItems !== undefined) {
            requestContext.setQueryParam("numItems", ObjectSerializer.serialize(numItems, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns details about the given bundleIds.
     * @param bundleIds 
     */
    public async v1BundlesDetailsGet(bundleIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bundleIds' is not null or undefined
        if (bundleIds === null || bundleIds === undefined) {
            throw new RequiredError("BundleApi", "v1BundlesDetailsGet", "bundleIds");
        }


        // Path Params
        const localVarPath = '/v1/bundles/details';

        // Make Request Context
        const requestContext = _config.getServer('https://catalog.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (bundleIds !== undefined) {
            requestContext.setQueryParam("bundleIds", ObjectSerializer.serialize(bundleIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param userId 
     * @param bundleType 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v1UsersUserIdBundlesBundleTypeGet(userId: number, bundleType: 1 | 2 | 3 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("BundleApi", "v1UsersUserIdBundlesBundleTypeGet", "userId");
        }


        // verify required parameter 'bundleType' is not null or undefined
        if (bundleType === null || bundleType === undefined) {
            throw new RequiredError("BundleApi", "v1UsersUserIdBundlesBundleTypeGet", "bundleType");
        }





        // Path Params
        const localVarPath = '/v1/users/{userId}/bundles/{bundleType}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'bundleType' + '}', encodeURIComponent(String(bundleType)));

        // Make Request Context
        const requestContext = _config.getServer('https://catalog.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Lists the bundles owned by a given user.
     * @param userId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by bundle
     */
    public async v1UsersUserIdBundlesGet(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("BundleApi", "v1UsersUserIdBundlesGet", "userId");
        }





        // Path Params
        const localVarPath = '/v1/users/{userId}/bundles'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://catalog.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
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

}

export class BundleApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AssetsAssetIdBundlesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetsAssetIdBundlesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Invalid assetId  4: Invalid Cursor.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1BundlesBundleIdDetailsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1BundlesBundleIdDetailsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxCatalogApiBundleDetailsModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxCatalogApiBundleDetailsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxCatalogApiBundleDetailsModel", ""
            ) as RobloxCatalogApiBundleDetailsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Invalid bundle", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxCatalogApiBundleDetailsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxCatalogApiBundleDetailsModel", ""
            ) as RobloxCatalogApiBundleDetailsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1BundlesBundleIdRecommendationsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1BundlesBundleIdRecommendationsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Invalid bundle  2: Error retrieving bundles  3: Error getting bundle recommendations  4: NumItems exceed maximum", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1BundlesDetailsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1BundlesDetailsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RobloxCatalogApiBundleDetailsModel> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RobloxCatalogApiBundleDetailsModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxCatalogApiBundleDetailsModel>", ""
            ) as Array<RobloxCatalogApiBundleDetailsModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: Invalid collection of bundleIds  3: Cannot request so many bundles at once.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RobloxCatalogApiBundleDetailsModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxCatalogApiBundleDetailsModel>", ""
            ) as Array<RobloxCatalogApiBundleDetailsModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdBundlesBundleTypeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdBundlesBundleTypeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdBundlesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdBundlesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Invalid bundle", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
