import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { AssetBatchGrantRevokePermissionRequest } from '../models/AssetBatchGrantRevokePermissionRequest';
import { AssetBatchPermissionItemResponse } from '../models/AssetBatchPermissionItemResponse';
import { AssetPermissionsCheckBatchAssetPermissions200Response } from '../models/AssetPermissionsCheckBatchAssetPermissions200Response';
import { AssetPermissionsCheckBatchAssetPermissionsRequest } from '../models/AssetPermissionsCheckBatchAssetPermissionsRequest';
import { AssetPermissionsCopyUniversePermissions200Response } from '../models/AssetPermissionsCopyUniversePermissions200Response';
import { AssetPermissionsCopyUniversePermissions4XXResponse } from '../models/AssetPermissionsCopyUniversePermissions4XXResponse';
import { AssetPermissionsCopyUniversePermissionsRequest } from '../models/AssetPermissionsCopyUniversePermissionsRequest';
import { AssetPermissionsListUniversePermission200Response } from '../models/AssetPermissionsListUniversePermission200Response';
import { AssetPermissionsRevokePermissionsRequest } from '../models/AssetPermissionsRevokePermissionsRequest';

/**
 * no description
 */
export class AssetPermissionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Grants permissions to the specified asset ID in batch
     * @param assetBatchGrantRevokePermissionRequest 
     */
    public async assetPermissionsBatchGrantPermissions(assetBatchGrantRevokePermissionRequest?: AssetBatchGrantRevokePermissionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/assets/permissions';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/asset-permissions-api').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetBatchGrantRevokePermissionRequest, "AssetBatchGrantRevokePermissionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Only available for certain asset types
     * Revokes permissions to the specified asset ID in batch where permitted
     * @param assetBatchGrantRevokePermissionRequest 
     */
    public async assetPermissionsBatchRevokePermissions(assetBatchGrantRevokePermissionRequest?: AssetBatchGrantRevokePermissionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/assets/permissions';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/asset-permissions-api').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetBatchGrantRevokePermissionRequest, "AssetBatchGrantRevokePermissionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Check if a batch of assets have permission
     * @param assetPermissionsCheckBatchAssetPermissionsRequest 
     */
    public async assetPermissionsCheckBatchAssetPermissions(assetPermissionsCheckBatchAssetPermissionsRequest: AssetPermissionsCheckBatchAssetPermissionsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetPermissionsCheckBatchAssetPermissionsRequest' is not null or undefined
        if (assetPermissionsCheckBatchAssetPermissionsRequest === null || assetPermissionsCheckBatchAssetPermissionsRequest === undefined) {
            throw new RequiredError("AssetPermissionsApi", "assetPermissionsCheckBatchAssetPermissions", "assetPermissionsCheckBatchAssetPermissionsRequest");
        }


        // Path Params
        const localVarPath = '/v1/assets/check-permissions';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/asset-permissions-api').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetPermissionsCheckBatchAssetPermissionsRequest, "AssetPermissionsCheckBatchAssetPermissionsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Copies another universes asset permissions into another where permitted
     * @param universeId The universe ID to copy the permissions into.
     * @param assetPermissionsCopyUniversePermissionsRequest 
     */
    public async assetPermissionsCopyUniversePermissions(universeId: string, assetPermissionsCopyUniversePermissionsRequest?: AssetPermissionsCopyUniversePermissionsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("AssetPermissionsApi", "assetPermissionsCopyUniversePermissions", "universeId");
        }



        // Path Params
        const localVarPath = '/v1/universes/{universeId}/permissions:copyInto'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/asset-permissions-api').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetPermissionsCopyUniversePermissionsRequest, "AssetPermissionsCopyUniversePermissionsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Grants permissions to the specified subject
     * @param assetId The asset ID to grant permissions to.
     * @param assetPermissionsRevokePermissionsRequest 
     */
    public async assetPermissionsGrantPermissions(assetId: string, assetPermissionsRevokePermissionsRequest?: AssetPermissionsRevokePermissionsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetPermissionsApi", "assetPermissionsGrantPermissions", "assetId");
        }



        // Path Params
        const localVarPath = '/v1/assets/{assetId}/permissions'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/asset-permissions-api').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetPermissionsRevokePermissionsRequest, "AssetPermissionsRevokePermissionsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List a universes permissions
     * @param universeId The universe ID to list the permissions of.
     * @param maxPageSize 
     * @param pageToken 
     */
    public async assetPermissionsListUniversePermission(universeId: string, maxPageSize?: string, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("AssetPermissionsApi", "assetPermissionsListUniversePermission", "universeId");
        }




        // Path Params
        const localVarPath = '/v1/universes/{universeId}/assets'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/asset-permissions-api').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "string", ""));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Only available for certain asset types
     * Revokes permissions from the specified subject where permitted
     * @param assetId The asset ID to revoke permissions to.
     * @param assetPermissionsRevokePermissionsRequest 
     */
    public async assetPermissionsRevokePermissions(assetId: string, assetPermissionsRevokePermissionsRequest?: AssetPermissionsRevokePermissionsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetPermissionsApi", "assetPermissionsRevokePermissions", "assetId");
        }



        // Path Params
        const localVarPath = '/v1/assets/{assetId}/permissions'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/asset-permissions-api').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetPermissionsRevokePermissionsRequest, "AssetPermissionsRevokePermissionsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AssetPermissionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetPermissionsBatchGrantPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetPermissionsBatchGrantPermissionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetBatchPermissionItemResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetBatchPermissionItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetBatchPermissionItemResponse", ""
            ) as AssetBatchPermissionItemResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("4XX", response.httpStatusCode)) {
            const body: AssetBatchPermissionItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetBatchPermissionItemResponse", ""
            ) as AssetBatchPermissionItemResponse;
            throw new ApiException<AssetBatchPermissionItemResponse>(response.httpStatusCode, "Invalid Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetBatchPermissionItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetBatchPermissionItemResponse", ""
            ) as AssetBatchPermissionItemResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetPermissionsBatchRevokePermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetPermissionsBatchRevokePermissionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetBatchPermissionItemResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetBatchPermissionItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetBatchPermissionItemResponse", ""
            ) as AssetBatchPermissionItemResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("4XX", response.httpStatusCode)) {
            const body: AssetBatchPermissionItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetBatchPermissionItemResponse", ""
            ) as AssetBatchPermissionItemResponse;
            throw new ApiException<AssetBatchPermissionItemResponse>(response.httpStatusCode, "Invalid Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetBatchPermissionItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetBatchPermissionItemResponse", ""
            ) as AssetBatchPermissionItemResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetPermissionsCheckBatchAssetPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetPermissionsCheckBatchAssetPermissionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetPermissionsCheckBatchAssetPermissions200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetPermissionsCheckBatchAssetPermissions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetPermissionsCheckBatchAssetPermissions200Response", ""
            ) as AssetPermissionsCheckBatchAssetPermissions200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetPermissionsCheckBatchAssetPermissions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetPermissionsCheckBatchAssetPermissions200Response", ""
            ) as AssetPermissionsCheckBatchAssetPermissions200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetPermissionsCopyUniversePermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetPermissionsCopyUniversePermissionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetPermissionsCopyUniversePermissions200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetPermissionsCopyUniversePermissions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetPermissionsCopyUniversePermissions200Response", ""
            ) as AssetPermissionsCopyUniversePermissions200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("4XX", response.httpStatusCode)) {
            const body: AssetPermissionsCopyUniversePermissions4XXResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetPermissionsCopyUniversePermissions4XXResponse", ""
            ) as AssetPermissionsCopyUniversePermissions4XXResponse;
            throw new ApiException<AssetPermissionsCopyUniversePermissions4XXResponse>(response.httpStatusCode, "Invalid Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetPermissionsCopyUniversePermissions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetPermissionsCopyUniversePermissions200Response", ""
            ) as AssetPermissionsCopyUniversePermissions200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetPermissionsGrantPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetPermissionsGrantPermissionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("4XX", response.httpStatusCode)) {
            const body: AssetPermissionsCopyUniversePermissions4XXResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetPermissionsCopyUniversePermissions4XXResponse", ""
            ) as AssetPermissionsCopyUniversePermissions4XXResponse;
            throw new ApiException<AssetPermissionsCopyUniversePermissions4XXResponse>(response.httpStatusCode, "Invalid Request", body, response.headers);
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
     * @params response Response returned by the server for a request to assetPermissionsListUniversePermission
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetPermissionsListUniversePermissionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetPermissionsListUniversePermission200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetPermissionsListUniversePermission200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetPermissionsListUniversePermission200Response", ""
            ) as AssetPermissionsListUniversePermission200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetPermissionsListUniversePermission200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetPermissionsListUniversePermission200Response", ""
            ) as AssetPermissionsListUniversePermission200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetPermissionsRevokePermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetPermissionsRevokePermissionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("4XX", response.httpStatusCode)) {
            const body: AssetPermissionsCopyUniversePermissions4XXResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetPermissionsCopyUniversePermissions4XXResponse", ""
            ) as AssetPermissionsCopyUniversePermissions4XXResponse;
            throw new ApiException<AssetPermissionsCopyUniversePermissions4XXResponse>(response.httpStatusCode, "Invalid Request", body, response.headers);
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
