import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxInventoryApiCategoriesModel } from '../models/RobloxInventoryApiCategoriesModel';
import { RobloxInventoryApiModelsCanViewInventoryResponse } from '../models/RobloxInventoryApiModelsCanViewInventoryResponse';
import { RobloxInventoryApiModelsInventoryPageResponse } from '../models/RobloxInventoryApiModelsInventoryPageResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel';
import { RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel';

/**
 * no description
 */
export class InventoryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets all collectible assets owned by the specified user.
     * @param userId The userid of the owner of the collectibles.
     * @param assetType The asset type for the collectibles you\&#39;re trying to get.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by userAssetId
     */
    public async v1UsersUserIdAssetsCollectiblesGet(userId: number, assetType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdAssetsCollectiblesGet", "userId");
        }






        // Path Params
        const localVarPath = '/v1/users/{userId}/assets/collectibles'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (assetType !== undefined) {
            requestContext.setQueryParam("assetType", ObjectSerializer.serialize(assetType, "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82", "int32"));
        }

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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets whether the specified user\'s inventory can be viewed.
     * @param userId The user identifier.
     */
    public async v1UsersUserIdCanViewInventoryGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdCanViewInventoryGet", "userId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/can-view-inventory'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Return favorites categories for a user
     * @param userId 
     */
    public async v1UsersUserIdCategoriesFavoritesGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdCategoriesFavoritesGet", "userId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/categories/favorites'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Return inventory categories for a user
     * @param userId 
     */
    public async v1UsersUserIdCategoriesGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdCategoriesGet", "userId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/categories'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a list of assets by type for the specified user.  Note that the \'Hat\' asset type may return accessories while we are migrating.
     * @param userId The user identifier.
     * @param assetType The asset type.
     * @param pageNumber The start index.
     * @param itemsPerPage The max number of items that can be returned.
     * @param keyword Filter results for items containing this.
     */
    public async v1UsersUserIdInventoryAssetTypeGet(userId: number, assetType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, pageNumber?: number, itemsPerPage?: number, keyword?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdInventoryAssetTypeGet", "userId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdInventoryAssetTypeGet", "assetType");
        }





        // Path Params
        const localVarPath = '/v1/users/{userId}/inventory/{assetType}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'assetType' + '}', encodeURIComponent(String(assetType)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", "int32"));
        }

        // Query Params
        if (itemsPerPage !== undefined) {
            requestContext.setQueryParam("itemsPerPage", ObjectSerializer.serialize(itemsPerPage, "number", "int32"));
        }

        // Query Params
        if (keyword !== undefined) {
            requestContext.setQueryParam("keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets owned items of the specified item type. Game Servers can make requests for any user, but can only make requests for game passes that belong to the place sending the request.  Place creators can make requests as if they were the Game Server.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public async v1UsersUserIdItemsItemTypeItemTargetIdGet(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdItemsItemTypeItemTargetIdGet", "userId");
        }


        // verify required parameter 'itemType' is not null or undefined
        if (itemType === null || itemType === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdItemsItemTypeItemTargetIdGet", "itemType");
        }


        // verify required parameter 'itemTargetId' is not null or undefined
        if (itemTargetId === null || itemTargetId === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdItemsItemTypeItemTargetIdGet", "itemTargetId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/items/{itemType}/{itemTargetId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'itemType' + '}', encodeURIComponent(String(itemType)))
            .replace('{' + 'itemTargetId' + '}', encodeURIComponent(String(itemTargetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets whether a user owns an item of type itemType with id itemTargetId.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public async v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet", "userId");
        }


        // verify required parameter 'itemType' is not null or undefined
        if (itemType === null || itemType === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet", "itemType");
        }


        // verify required parameter 'itemTargetId' is not null or undefined
        if (itemTargetId === null || itemTargetId === undefined) {
            throw new RequiredError("InventoryApi", "v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet", "itemTargetId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/items/{itemType}/{itemTargetId}/is-owned'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'itemType' + '}', encodeURIComponent(String(itemType)))
            .replace('{' + 'itemTargetId' + '}', encodeURIComponent(String(itemTargetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class InventoryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdAssetsCollectiblesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdAssetsCollectiblesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The specified asset type(s) are invalid.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The specified user\&#39;s inventory is hidden.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdCanViewInventoryGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdCanViewInventoryGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxInventoryApiModelsCanViewInventoryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxInventoryApiModelsCanViewInventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiModelsCanViewInventoryResponse", ""
            ) as RobloxInventoryApiModelsCanViewInventoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist!", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxInventoryApiModelsCanViewInventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiModelsCanViewInventoryResponse", ""
            ) as RobloxInventoryApiModelsCanViewInventoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdCategoriesFavoritesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdCategoriesFavoritesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxInventoryApiCategoriesModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxInventoryApiCategoriesModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiCategoriesModel", ""
            ) as RobloxInventoryApiCategoriesModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxInventoryApiCategoriesModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiCategoriesModel", ""
            ) as RobloxInventoryApiCategoriesModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdCategoriesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdCategoriesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxInventoryApiCategoriesModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxInventoryApiCategoriesModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiCategoriesModel", ""
            ) as RobloxInventoryApiCategoriesModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxInventoryApiCategoriesModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiCategoriesModel", ""
            ) as RobloxInventoryApiCategoriesModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdInventoryAssetTypeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdInventoryAssetTypeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxInventoryApiModelsInventoryPageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxInventoryApiModelsInventoryPageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiModelsInventoryPageResponse", ""
            ) as RobloxInventoryApiModelsInventoryPageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist!  3: Specified asset type is invalid!", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist!  11: You don\&#39;t have permissions to view the specified user\&#39;s inventory.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxInventoryApiModelsInventoryPageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiModelsInventoryPageResponse", ""
            ) as RobloxInventoryApiModelsInventoryPageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdItemsItemTypeItemTargetIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdItemsItemTypeItemTargetIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist!  5: The specified game pass does not exist! Are you using the new game pass ID?  6: The specified item type does not exist.  7: The specified Asset does not exist!  10: The specified asset is not a badge!  12: The specified bundle does not exist!", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<boolean >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist!  5: The specified game pass does not exist! Are you using the new game pass ID?  6: The specified item type does not exist.  7: The specified Asset does not exist!  10: The specified asset is not a badge!  12: The specified bundle does not exist!", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
