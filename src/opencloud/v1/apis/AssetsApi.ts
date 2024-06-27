import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { Asset } from '../models/Asset';
import { AssetsRollbackAssetVersionRequest } from '../models/AssetsRollbackAssetVersionRequest';
import { Operation } from '../models/Operation';
import { Status } from '../models/Status';

/**
 * no description
 */
export class AssetsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates an asset with provided content and metadata.
     * Creates an asset with provided content and metadata.
     * @param request 
     * @param fileContent The binary asset file path and the content type. Format: &#x60;fileContent&#x3D;@\\\&quot;/filepath/{File}\\\&quot;;type&#x3D;{ContentType}&#x60;. Example: &#x60;fileContent&#x3D;@\\\&quot;/filepath/model.fbx\\\&quot;;type&#x3D;model/fbx&#x60;. See [Content Types](../../../cloud/open-cloud/usage-assets.md#supported-asset-types-and-limits).
     */
    public async assetsCreateAsset(request?: Asset, fileContent?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v1/assets';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/assets').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (request !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('request', request as any);
        }
        if (fileContent !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('fileContent', fileContent as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
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
     * Retrieve specific asset content and metadata.
     * Retrieve specific asset content. Include the `readMask` parameter for additional asset metadata.
     * @param assetId The unique identifier of the asset.
     * @param readMask Asset metadata fields to retrieve, including the description, display name, icon, and previews. Example: &#x60;description%2CdisplayName&#x60;, &#x60;previews&#x60;.
     */
    public async assetsGetAsset(assetId: Asset, readMask?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsGetAsset", "assetId");
        }



        // Path Params
        const localVarPath = '/v1/assets'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/assets').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (readMask !== undefined) {
            requestContext.setQueryParam("readMask", ObjectSerializer.serialize(readMask, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
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
     * Retrieve a specific asset version by the asset ID and the version number.
     * Get Asset Version
     * @param assetId The unique identifier of the asset.
     * @param versionNumber The version number.
     */
    public async assetsGetAssetVersion(assetId: string, versionNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsGetAssetVersion", "assetId");
        }


        // verify required parameter 'versionNumber' is not null or undefined
        if (versionNumber === null || versionNumber === undefined) {
            throw new RequiredError("AssetsApi", "assetsGetAssetVersion", "versionNumber");
        }


        // Path Params
        const localVarPath = '/v1/assets/{assetId}/versions/{versionNumber}'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'versionNumber' + '}', encodeURIComponent(String(versionNumber)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/assets').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
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
     * Get the result of an asset creation or update using the returned Operation ID. Requires **Read** for the API key permission and **asset:read** for OAuth 2.0 apps.
     * Get the result of an asset creation or update.
     */
    public async assetsGetOperation(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/operations/{operationId}';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/assets').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
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
     * Rollback an asset to a specific previous version.
     * Rollback an asset to a previous version.
     * @param assetId The unique identifier of the asset.
     * @param assetsRollbackAssetVersionRequest 
     */
    public async assetsRollbackAssetVersion(assetId: string, assetsRollbackAssetVersionRequest: AssetsRollbackAssetVersionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsRollbackAssetVersion", "assetId");
        }


        // verify required parameter 'assetsRollbackAssetVersionRequest' is not null or undefined
        if (assetsRollbackAssetVersionRequest === null || assetsRollbackAssetVersionRequest === undefined) {
            throw new RequiredError("AssetsApi", "assetsRollbackAssetVersion", "assetsRollbackAssetVersionRequest");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{assetId}/versions:rollback'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/assets').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetsRollbackAssetVersionRequest, "AssetsRollbackAssetVersionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
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
     * Updates an asset with provided content and metadata, including the description, display name, icon, and previews. Currently can only update the content body for **Models**. Icons must be **Image** assets with square dimensions. Previews must be either **Image** or **YoutubeVideo** assets.
     * Updates an asset with provided content and metadata.
     * @param updateMask Asset metadata fields to update, including the description, display name, icon, and previews. Example: &#x60;description%2CdisplayName&#x60;, &#x60;previews&#x60;.
     * @param request 
     * @param fileContent The binary asset file path and the content type. Format: &#x60;fileContent&#x3D;@\\\&quot;/filepath/{File}\\\&quot;;type&#x3D;{ContentType}&#x60;. Example: &#x60;fileContent&#x3D;@\\\&quot;/filepath/model.fbx\\\&quot;;type&#x3D;model/fbx&#x60;. See [Content Types](../../../cloud/open-cloud/usage-assets.md#supported-asset-types-and-limits).
     */
    public async assetsUpdateAsset(updateMask?: string, request?: Asset, fileContent?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v1/assets/{assetId}';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/assets').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            requestContext.setQueryParam("updateMask", ObjectSerializer.serialize(updateMask, "string", ""));
        }

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (request !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('request', request as any);
        }
        if (fileContent !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('fileContent', fileContent as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
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
     * List all versions of a specific asset, with optional pagination.
     * List Asset Versions of an Asset
     * @param assetId The unique identifier of the asset.
     * @param maxPageSize Specifies the number of asset versions to include in the response. Valid values range from 1 to 50 (inclusive). Defaults to 8 when not provided.
     * @param pageToken A token for pagination. The value is obtained from a previous request and allows for retrieving the next page of asset versions.
     */
    public async listAssetVersions(assetId: string, maxPageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "listAssetVersions", "assetId");
        }




        // Path Params
        const localVarPath = '/assets/v1/assets/{assetId}/versions'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/assets').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("maxPageSize", ObjectSerializer.serialize(maxPageSize, "number", ""));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
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

export class AssetsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsCreateAsset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsCreateAssetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Status", ""
            ) as Status;
            throw new ApiException<Status>(response.httpStatusCode, "Invalid argument. Failed to parse the request or the file.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The API key is not valid for this operation / You don\&#39;t have the authorization.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server internal error / Unknown error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsGetAsset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsGetAssetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Malformed request, likely due to an invalid read mask.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The API key is not valid for this operation / You don\&#39;t have the authorization.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Doesn\&#39;t have the required permission.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset doesn\&#39;t exist.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server internal error / Unknown error.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsGetAssetVersion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsGetAssetVersionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden - API key without Read scope or user doesn\&#39;t have access.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset or Asset Version not found.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsGetOperation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsGetOperationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Status", ""
            ) as Status;
            throw new ApiException<Status>(response.httpStatusCode, "Invalid argument. Failed to parse the request or the file.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The API key is not valid for this operation / You don\&#39;t have the authorization.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server internal error / Unknown error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsRollbackAssetVersion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsRollbackAssetVersionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request - invalid request body.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden - API key without Write scope or user doesn\&#39;t have access.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset or Asset Version not found.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsUpdateAsset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsUpdateAssetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Operation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Status", ""
            ) as Status;
            throw new ApiException<Status>(response.httpStatusCode, "Invalid argument. Failed to parse the request or the file.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The API key is not valid for this operation / You don\&#39;t have the authorization.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server internal error / Unknown error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Operation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Operation", ""
            ) as Operation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAssetVersions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAssetVersionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request - invalid parameters.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden - API key without Read scope or user doesn\&#39;t have access.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset not found.", undefined, response.headers);
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
