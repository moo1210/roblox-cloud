import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebAssetsBatchAssetRequestItem } from '../models/RobloxWebAssetsBatchAssetRequestItem';
import { RobloxWebAssetsIAssetResponseItemV2 } from '../models/RobloxWebAssetsIAssetResponseItemV2';

/**
 * no description
 */
export class BatchV2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param robloxPlaceId 
     * @param accept 
     * @param robloxBrowserAssetRequest 
     * @param assetRequestItems 
     */
    public async v2AssetsBatchPost(robloxPlaceId: number, accept: string, robloxBrowserAssetRequest: string, assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("BatchV2Api", "v2AssetsBatchPost", "robloxPlaceId");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("BatchV2Api", "v2AssetsBatchPost", "accept");
        }


        // verify required parameter 'robloxBrowserAssetRequest' is not null or undefined
        if (robloxBrowserAssetRequest === null || robloxBrowserAssetRequest === undefined) {
            throw new RequiredError("BatchV2Api", "v2AssetsBatchPost", "robloxBrowserAssetRequest");
        }


        // verify required parameter 'assetRequestItems' is not null or undefined
        if (assetRequestItems === null || assetRequestItems === undefined) {
            throw new RequiredError("BatchV2Api", "v2AssetsBatchPost", "assetRequestItems");
        }


        // Path Params
        const localVarPath = '/v2/assets/batch';

        // Make Request Context
        const requestContext = _config.getServer('https://assetdelivery.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));

        // Header Params
        requestContext.setHeaderParam("Accept", ObjectSerializer.serialize(accept, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-Browser-Asset-Request", ObjectSerializer.serialize(robloxBrowserAssetRequest, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetRequestItems, "Array<RobloxWebAssetsBatchAssetRequestItem>", ""),
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

export class BatchV2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AssetsBatchPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AssetsBatchPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RobloxWebAssetsIAssetResponseItemV2> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RobloxWebAssetsIAssetResponseItemV2> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxWebAssetsIAssetResponseItemV2>", ""
            ) as Array<RobloxWebAssetsIAssetResponseItemV2>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RobloxWebAssetsIAssetResponseItemV2> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RobloxWebAssetsIAssetResponseItemV2>", ""
            ) as Array<RobloxWebAssetsIAssetResponseItemV2>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
