import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';



/**
 * no description
 */
export class CollectionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Removes an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public async v1CollectionsItemsItemTypeItemTargetIdDelete(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemType' is not null or undefined
        if (itemType === null || itemType === undefined) {
            throw new RequiredError("CollectionsApi", "v1CollectionsItemsItemTypeItemTargetIdDelete", "itemType");
        }


        // verify required parameter 'itemTargetId' is not null or undefined
        if (itemTargetId === null || itemTargetId === undefined) {
            throw new RequiredError("CollectionsApi", "v1CollectionsItemsItemTypeItemTargetIdDelete", "itemTargetId");
        }


        // Path Params
        const localVarPath = '/v1/collections/items/{itemType}/{itemTargetId}'
            .replace('{' + 'itemType' + '}', encodeURIComponent(String(itemType)))
            .replace('{' + 'itemTargetId' + '}', encodeURIComponent(String(itemTargetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Adds an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public async v1CollectionsItemsItemTypeItemTargetIdPost(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemType' is not null or undefined
        if (itemType === null || itemType === undefined) {
            throw new RequiredError("CollectionsApi", "v1CollectionsItemsItemTypeItemTargetIdPost", "itemType");
        }


        // verify required parameter 'itemTargetId' is not null or undefined
        if (itemTargetId === null || itemTargetId === undefined) {
            throw new RequiredError("CollectionsApi", "v1CollectionsItemsItemTypeItemTargetIdPost", "itemTargetId");
        }


        // Path Params
        const localVarPath = '/v1/collections/items/{itemType}/{itemTargetId}'
            .replace('{' + 'itemType' + '}', encodeURIComponent(String(itemType)))
            .replace('{' + 'itemTargetId' + '}', encodeURIComponent(String(itemTargetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CollectionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CollectionsItemsItemTypeItemTargetIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CollectionsItemsItemTypeItemTargetIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The item type does not exist.  2: The asset does not exist.  3: The bundle does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  8: The item is not in the collection.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1CollectionsItemsItemTypeItemTargetIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CollectionsItemsItemTypeItemTargetIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The item type does not exist.  2: The asset does not exist.  3: The bundle does not exist.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  4: You don\&#39;t own the specified item.  5: Assets of this type are not allowed in collections.  6: Items of this type are not allowed in collections.  7: The item is already in the collection.  9: The collection is full.", undefined, response.headers);
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

}
