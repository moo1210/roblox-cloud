import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion';

/**
 * no description
 */
export class AssetsV2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves asset information for the specified asset ID. The authenticated user must be able to manage the asset  or granted by package permission.
     * @param id The ID of the asset.Roblox.Platform.Assets.IAsset
     * @param robloxPlaceId The ID of the place.Roblox.Platform.Assets.IPlace
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sort by version number, default is desc.
     */
    public async v2AssetsIdVersionsGet(id: number, robloxPlaceId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AssetsV2Api", "v2AssetsIdVersionsGet", "id");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetsV2Api", "v2AssetsIdVersionsGet", "robloxPlaceId");
        }





        // Path Params
        const localVarPath = '/v2/assets/{id}/versions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
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

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AssetsV2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AssetsIdVersionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AssetsIdVersionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
