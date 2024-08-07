import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxLocaleApiCountryRegionListResponse } from '../models/RobloxLocaleApiCountryRegionListResponse';

/**
 * no description
 */
export class CountryRegionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get list of country regions sorted by localized name
     * @param locale 
     */
    public async v1CountryRegionsGet(locale?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/country-regions';

        // Make Request Context
        const requestContext = _config.getServer('https://locale.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locale !== undefined) {
            requestContext.setQueryParam("locale", ObjectSerializer.serialize(locale, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CountryRegionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CountryRegionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CountryRegionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocaleApiCountryRegionListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocaleApiCountryRegionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiCountryRegionListResponse", ""
            ) as RobloxLocaleApiCountryRegionListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: Invalid supported locale code.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: Feature is disabled", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocaleApiCountryRegionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiCountryRegionListResponse", ""
            ) as RobloxLocaleApiCountryRegionListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
