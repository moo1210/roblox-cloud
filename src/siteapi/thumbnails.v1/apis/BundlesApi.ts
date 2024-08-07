import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse';

/**
 * no description
 */
export class BundlesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get bundle thumbnails for the given CSV of bundle ids
     * @param bundleIds CSV for the bundle ids to get bundle thumbnails
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public async v1BundlesThumbnailsGet(bundleIds: Array<number>, size?: '150x150' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bundleIds' is not null or undefined
        if (bundleIds === null || bundleIds === undefined) {
            throw new RequiredError("BundlesApi", "v1BundlesThumbnailsGet", "bundleIds");
        }





        // Path Params
        const localVarPath = '/v1/bundles/thumbnails';

        // Make Request Context
        const requestContext = _config.getServer('https://thumbnails.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (bundleIds !== undefined) {
            requestContext.setQueryParam("bundleIds", ObjectSerializer.serialize(bundleIds, "Array<number>", "int64"));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "'150x150' | '420x420'", ""));
        }

        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam("format", ObjectSerializer.serialize(format, "'Png' | 'Webp'", ""));
        }

        // Query Params
        if (isCircular !== undefined) {
            requestContext.setQueryParam("isCircular", ObjectSerializer.serialize(isCircular, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class BundlesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1BundlesThumbnailsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1BundlesThumbnailsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: There are too many requested Ids.  2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.  3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.  4: The requested Ids are invalid, of an invalid type or missing.  10: Circular thumbnail requests are not allowed", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
