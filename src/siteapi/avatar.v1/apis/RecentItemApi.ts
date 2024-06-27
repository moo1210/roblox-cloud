import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel } from '../models/RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel';

/**
 * no description
 */
export class RecentItemApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a list of recent items  Recent items can be Assets or Outfits
     * @param recentItemListType 
     */
    public async v1RecentItemsRecentItemListTypeListGet(recentItemListType: 0 | 1 | 2 | 3 | 4 | 5 | 6, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'recentItemListType' is not null or undefined
        if (recentItemListType === null || recentItemListType === undefined) {
            throw new RequiredError("RecentItemApi", "v1RecentItemsRecentItemListTypeListGet", "recentItemListType");
        }


        // Path Params
        const localVarPath = '/v1/recent-items/{recentItemListType}/list'
            .replace('{' + 'recentItemListType' + '}', encodeURIComponent(String(recentItemListType)));

        // Make Request Context
        const requestContext = _config.getServer('https://avatar.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class RecentItemApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1RecentItemsRecentItemListTypeListGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1RecentItemsRecentItemListTypeListGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel", ""
            ) as RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel", ""
            ) as RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
