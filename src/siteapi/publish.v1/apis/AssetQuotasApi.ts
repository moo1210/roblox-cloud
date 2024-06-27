import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxPublishApiAssetQuotasResponse } from '../models/RobloxPublishApiAssetQuotasResponse';

/**
 * no description
 */
export class AssetQuotasApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List asset quotas of the given resource type and asset type.
     * @param resourceType Resource type of the asset quota
     * @param assetType Asset type of the asset quota
     * @param useDummyData Use dummy data for testing. This is for internal use only
     */
    public async v1AssetQuotasGet(resourceType: string, assetType: string, useDummyData?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'resourceType' is not null or undefined
        if (resourceType === null || resourceType === undefined) {
            throw new RequiredError("AssetQuotasApi", "v1AssetQuotasGet", "resourceType");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetQuotasApi", "v1AssetQuotasGet", "assetType");
        }



        // Path Params
        const localVarPath = '/v1/asset-quotas';

        // Make Request Context
        const requestContext = _config.getServer('https://publish.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (resourceType !== undefined) {
            requestContext.setQueryParam("resourceType", ObjectSerializer.serialize(resourceType, "string", ""));
        }

        // Query Params
        if (assetType !== undefined) {
            requestContext.setQueryParam("assetType", ObjectSerializer.serialize(assetType, "string", ""));
        }

        // Query Params
        if (useDummyData !== undefined) {
            requestContext.setQueryParam("useDummyData", ObjectSerializer.serialize(useDummyData, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AssetQuotasApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AssetQuotasGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetQuotasGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxPublishApiAssetQuotasResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxPublishApiAssetQuotasResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPublishApiAssetQuotasResponse", ""
            ) as RobloxPublishApiAssetQuotasResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: The asset type is not appropriate for this request.  8: The resource type is not appropriate for this request.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Reserved for base level errors. Do not use in your endpoint directly, do not document.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxPublishApiAssetQuotasResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPublishApiAssetQuotasResponse", ""
            ) as RobloxPublishApiAssetQuotasResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
