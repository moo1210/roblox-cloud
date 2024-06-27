import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxItemConfigurationApiCreateItemTagRequest } from '../models/RobloxItemConfigurationApiCreateItemTagRequest';
import { RobloxItemConfigurationApiItemTagDetails } from '../models/RobloxItemConfigurationApiItemTagDetails';
import { RobloxItemConfigurationApiItemTagsMetadataResponse } from '../models/RobloxItemConfigurationApiItemTagsMetadataResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags';

/**
 * no description
 */
export class ItemTagsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets all related item tags for each item id listed
     * @param itemIds 
     */
    public async v1ItemTagsGet(itemIds: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemIds' is not null or undefined
        if (itemIds === null || itemIds === undefined) {
            throw new RequiredError("ItemTagsApi", "v1ItemTagsGet", "itemIds");
        }


        // Path Params
        const localVarPath = '/v1/item-tags';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (itemIds !== undefined) {
            requestContext.setQueryParam("itemIds", ObjectSerializer.serialize(itemIds, "Array<string>", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes an item tag from an item
     * @param itemTagId 
     */
    public async v1ItemTagsItemTagIdDelete(itemTagId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemTagId' is not null or undefined
        if (itemTagId === null || itemTagId === undefined) {
            throw new RequiredError("ItemTagsApi", "v1ItemTagsItemTagIdDelete", "itemTagId");
        }


        // Path Params
        const localVarPath = '/v1/item-tags/{itemTagId}'
            .replace('{' + 'itemTagId' + '}', encodeURIComponent(String(itemTagId)));

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the metadata related to item tags
     */
    public async v1ItemTagsMetadataGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/item-tags/metadata';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new item tag
     * @param request 
     */
    public async v1ItemTagsPost(request: RobloxItemConfigurationApiCreateItemTagRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("ItemTagsApi", "v1ItemTagsPost", "request");
        }


        // Path Params
        const localVarPath = '/v1/item-tags';

        // Make Request Context
        const requestContext = _config.getServer('https://itemconfiguration.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxItemConfigurationApiCreateItemTagRequest", ""),
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

export class ItemTagsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1ItemTagsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1ItemTagsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: No item tag Ids requested  2: Too many item tag Ids requested  3: Invalid item id  6: Invalid item namespace", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: Too many requests", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1ItemTagsItemTagIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1ItemTagsItemTagIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  5: The current user is missing permissions for the endpoint", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: Too many requests", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1ItemTagsMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1ItemTagsMetadataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxItemConfigurationApiItemTagsMetadataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxItemConfigurationApiItemTagsMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemTagsMetadataResponse", ""
            ) as RobloxItemConfigurationApiItemTagsMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxItemConfigurationApiItemTagsMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemTagsMetadataResponse", ""
            ) as RobloxItemConfigurationApiItemTagsMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1ItemTagsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1ItemTagsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxItemConfigurationApiItemTagDetails >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxItemConfigurationApiItemTagDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemTagDetails", ""
            ) as RobloxItemConfigurationApiItemTagDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid item id  4: Invalid tag id  6: Invalid item namespace  8: The given item is ineligible for item tags  9: The given item has already reached its maximum item tag count", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  5: The current user is missing permissions for the endpoint", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: Too many requests", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxItemConfigurationApiItemTagDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxItemConfigurationApiItemTagDetails", ""
            ) as RobloxItemConfigurationApiItemTagDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
