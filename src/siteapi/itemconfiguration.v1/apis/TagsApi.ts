import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails';

/**
 * no description
 */
export class TagsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets the information for a list of tag Ids
     * @param tagIds 
     */
    public async v1TagsGet(tagIds: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagIds' is not null or undefined
        if (tagIds === null || tagIds === undefined) {
            throw new RequiredError("TagsApi", "v1TagsGet", "tagIds");
        }


        // Path Params
        const localVarPath = '/v1/tags';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tagIds !== undefined) {
            requestContext.setQueryParam("tagIds", ObjectSerializer.serialize(tagIds, "Array<string>", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Searches for up to numberOfResults tags based on the given prefix
     * @param prefix 
     * @param numberOfResults Must be 1, 5, 10, or 25
     */
    public async v1TagsPrefixSearchGet(prefix: string, numberOfResults: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'prefix' is not null or undefined
        if (prefix === null || prefix === undefined) {
            throw new RequiredError("TagsApi", "v1TagsPrefixSearchGet", "prefix");
        }


        // verify required parameter 'numberOfResults' is not null or undefined
        if (numberOfResults === null || numberOfResults === undefined) {
            throw new RequiredError("TagsApi", "v1TagsPrefixSearchGet", "numberOfResults");
        }


        // Path Params
        const localVarPath = '/v1/tags/prefix-search';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (prefix !== undefined) {
            requestContext.setQueryParam("prefix", ObjectSerializer.serialize(prefix, "string", ""));
        }

        // Query Params
        if (numberOfResults !== undefined) {
            requestContext.setQueryParam("numberOfResults", ObjectSerializer.serialize(numberOfResults, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TagsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1TagsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1TagsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: No tag Ids requested  2: Too many tag Ids requested", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Too many requests", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1TagsPrefixSearchGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1TagsPrefixSearchGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: The given prefix is invalid  6: The number of results requested is invalid", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "4: This endpoint is not yet enabled for the current user", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Too many requests", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
