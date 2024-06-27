import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxLocaleApiSetSupportedLocaleForUserRequest } from '../models/RobloxLocaleApiSetSupportedLocaleForUserRequest';
import { RobloxLocaleApiSuccessResponse } from '../models/RobloxLocaleApiSuccessResponse';
import { RobloxLocaleApiSupportedLocalesResponse } from '../models/RobloxLocaleApiSupportedLocalesResponse';
import { RobloxLocaleApiUserLocaleResponse } from '../models/RobloxLocaleApiUserLocaleResponse';
import { RobloxLocaleApiUserLocalizationLocusLocalesResponse } from '../models/RobloxLocaleApiUserLocalizationLocusLocalesResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus';

/**
 * no description
 */
export class LocaleApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get list of Supported locales with user locus information.
     * @param displayValueLocale 
     */
    public async v1LocalesGet(displayValueLocale?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/locales';

        // Make Request Context
        const requestContext = _config.getServer('https://locale.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (displayValueLocale !== undefined) {
            requestContext.setQueryParam("displayValueLocale", ObjectSerializer.serialize(displayValueLocale, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sets user\'s supported locale.  Null supported locale will clear out user\'s supported locale (set users\' supported locale to null)
     * @param userRequest Supported locale code that needs to be set for user
     */
    public async v1LocalesSetUserSupportedLocalePost(userRequest: RobloxLocaleApiSetSupportedLocaleForUserRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userRequest' is not null or undefined
        if (userRequest === null || userRequest === undefined) {
            throw new RequiredError("LocaleApi", "v1LocalesSetUserSupportedLocalePost", "userRequest");
        }


        // Path Params
        const localVarPath = '/v1/locales/set-user-supported-locale';

        // Make Request Context
        const requestContext = _config.getServer('https://locale.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userRequest, "RobloxLocaleApiSetSupportedLocaleForUserRequest", ""),
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
     * @param displayValueLocale 
     */
    public async v1LocalesSupportedLocalesForCreatorsGet(displayValueLocale?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/locales/supported-locales-for-creators';

        // Make Request Context
        const requestContext = _config.getServer('https://locale.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (displayValueLocale !== undefined) {
            requestContext.setQueryParam("displayValueLocale", ObjectSerializer.serialize(displayValueLocale, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get list of supported locales sorted by the Native Name property.
     */
    public async v1LocalesSupportedLocalesGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/locales/supported-locales';

        // Make Request Context
        const requestContext = _config.getServer('https://locale.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets user locale. If user is absent returns, locale from http request object.
     */
    public async v1LocalesUserLocaleGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/locales/user-locale';

        // Make Request Context
        const requestContext = _config.getServer('https://locale.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets each of a user\'s localization locus supported locales. A localization locus supported locale is a page (or group of pages) that  have been defined by the International team which need independent locale support.  If the user is null we will attempt to return the locales appropriate for the user\'s device language.
     */
    public async v1LocalesUserLocalizationLocusSupportedLocalesGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/locales/user-localization-locus-supported-locales';

        // Make Request Context
        const requestContext = _config.getServer('https://locale.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class LocaleApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Feature is turned off temporary", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalesSetUserSupportedLocalePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalesSetUserSupportedLocalePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocaleApiSuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocaleApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiSuccessResponse", ""
            ) as RobloxLocaleApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized  0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Feature is turned off temporary  0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocaleApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiSuccessResponse", ""
            ) as RobloxLocaleApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalesSupportedLocalesForCreatorsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalesSupportedLocalesForCreatorsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalesSupportedLocalesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalesSupportedLocalesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocaleApiSupportedLocalesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocaleApiSupportedLocalesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiSupportedLocalesResponse", ""
            ) as RobloxLocaleApiSupportedLocalesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Feature is turned off temporary", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocaleApiSupportedLocalesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiSupportedLocalesResponse", ""
            ) as RobloxLocaleApiSupportedLocalesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalesUserLocaleGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalesUserLocaleGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocaleApiUserLocaleResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocaleApiUserLocaleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiUserLocaleResponse", ""
            ) as RobloxLocaleApiUserLocaleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocaleApiUserLocaleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiUserLocaleResponse", ""
            ) as RobloxLocaleApiUserLocaleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalesUserLocalizationLocusSupportedLocalesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalesUserLocalizationLocusSupportedLocalesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocaleApiUserLocalizationLocusLocalesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocaleApiUserLocalizationLocusLocalesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiUserLocalizationLocusLocalesResponse", ""
            ) as RobloxLocaleApiUserLocalizationLocusLocalesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocaleApiUserLocalizationLocusLocalesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocaleApiUserLocalizationLocusLocalesResponse", ""
            ) as RobloxLocaleApiUserLocalizationLocusLocalesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
