import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem } from '../models/RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem';
import { RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem } from '../models/RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem';

/**
 * no description
 */
export class SearchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Search for avatarCatalog items
     * @param modelCategory 
     * @param modelSubcategory 
     * @param modelSortAggregation 
     * @param modelSortCurrency 
     * @param modelGenres 
     * @param modelSortType 
     * @param modelCreatorType 
     * @param modelPremiumBenefitFilterType 
     * @param modelCreatorTargetId 
     * @param modelCreatorName 
     * @param modelMaxPrice 
     * @param modelMinPrice 
     * @param modelKeyword 
     * @param modelIncludeNotForSale 
     * @param modelTagNames 
     * @param sortOrder The order the results are sorted in.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public async v1SearchItemsDetailsGet(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



















        // Path Params
        const localVarPath = '/v1/search/items/details';

        // Make Request Context
        const requestContext = _config.getServer('https://catalog.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (modelCategory !== undefined) {
            requestContext.setQueryParam("model.category", ObjectSerializer.serialize(modelCategory, "'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended'", ""));
        }

        // Query Params
        if (modelSubcategory !== undefined) {
            requestContext.setQueryParam("model.subcategory", ObjectSerializer.serialize(modelSubcategory, "'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended'", ""));
        }

        // Query Params
        if (modelSortAggregation !== undefined) {
            requestContext.setQueryParam("model.sortAggregation", ObjectSerializer.serialize(modelSortAggregation, "'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime'", ""));
        }

        // Query Params
        if (modelSortCurrency !== undefined) {
            requestContext.setQueryParam("model.sortCurrency", ObjectSerializer.serialize(modelSortCurrency, "'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'", ""));
        }

        // Query Params
        if (modelGenres !== undefined) {
            requestContext.setQueryParam("model.genres", ObjectSerializer.serialize(modelGenres, "Array<string>", ""));
        }

        // Query Params
        if (modelSortType !== undefined) {
            requestContext.setQueryParam("model.sortType", ObjectSerializer.serialize(modelSortType, "'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc'", ""));
        }

        // Query Params
        if (modelCreatorType !== undefined) {
            requestContext.setQueryParam("model.creatorType", ObjectSerializer.serialize(modelCreatorType, "'User' | 'Group'", ""));
        }

        // Query Params
        if (modelPremiumBenefitFilterType !== undefined) {
            requestContext.setQueryParam("model.premiumBenefitFilterType", ObjectSerializer.serialize(modelPremiumBenefitFilterType, "'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly'", ""));
        }

        // Query Params
        if (modelCreatorTargetId !== undefined) {
            requestContext.setQueryParam("model.creatorTargetId", ObjectSerializer.serialize(modelCreatorTargetId, "number", "int64"));
        }

        // Query Params
        if (modelCreatorName !== undefined) {
            requestContext.setQueryParam("model.creatorName", ObjectSerializer.serialize(modelCreatorName, "string", ""));
        }

        // Query Params
        if (modelMaxPrice !== undefined) {
            requestContext.setQueryParam("model.maxPrice", ObjectSerializer.serialize(modelMaxPrice, "number", "int32"));
        }

        // Query Params
        if (modelMinPrice !== undefined) {
            requestContext.setQueryParam("model.minPrice", ObjectSerializer.serialize(modelMinPrice, "number", "int32"));
        }

        // Query Params
        if (modelKeyword !== undefined) {
            requestContext.setQueryParam("model.keyword", ObjectSerializer.serialize(modelKeyword, "string", ""));
        }

        // Query Params
        if (modelIncludeNotForSale !== undefined) {
            requestContext.setQueryParam("model.includeNotForSale", ObjectSerializer.serialize(modelIncludeNotForSale, "boolean", ""));
        }

        // Query Params
        if (modelTagNames !== undefined) {
            requestContext.setQueryParam("model.tagNames", ObjectSerializer.serialize(modelTagNames, "Array<string>", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 28 | 30", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search for avatarCatalog item ids
     * @param modelCategory 
     * @param modelSubcategory 
     * @param modelSortAggregation 
     * @param modelSortCurrency 
     * @param modelGenres 
     * @param modelSortType 
     * @param modelCreatorType 
     * @param modelPremiumBenefitFilterType 
     * @param modelCreatorTargetId 
     * @param modelCreatorName 
     * @param modelMaxPrice 
     * @param modelMinPrice 
     * @param modelKeyword 
     * @param modelIncludeNotForSale 
     * @param modelTagNames 
     * @param sortOrder The order the results are sorted in.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public async v1SearchItemsGet(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30 | 50 | 60 | 100, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



















        // Path Params
        const localVarPath = '/v1/search/items';

        // Make Request Context
        const requestContext = _config.getServer('https://catalog.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (modelCategory !== undefined) {
            requestContext.setQueryParam("model.category", ObjectSerializer.serialize(modelCategory, "'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended'", ""));
        }

        // Query Params
        if (modelSubcategory !== undefined) {
            requestContext.setQueryParam("model.subcategory", ObjectSerializer.serialize(modelSubcategory, "'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended'", ""));
        }

        // Query Params
        if (modelSortAggregation !== undefined) {
            requestContext.setQueryParam("model.sortAggregation", ObjectSerializer.serialize(modelSortAggregation, "'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime'", ""));
        }

        // Query Params
        if (modelSortCurrency !== undefined) {
            requestContext.setQueryParam("model.sortCurrency", ObjectSerializer.serialize(modelSortCurrency, "'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'", ""));
        }

        // Query Params
        if (modelGenres !== undefined) {
            requestContext.setQueryParam("model.genres", ObjectSerializer.serialize(modelGenres, "Array<string>", ""));
        }

        // Query Params
        if (modelSortType !== undefined) {
            requestContext.setQueryParam("model.sortType", ObjectSerializer.serialize(modelSortType, "'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc'", ""));
        }

        // Query Params
        if (modelCreatorType !== undefined) {
            requestContext.setQueryParam("model.creatorType", ObjectSerializer.serialize(modelCreatorType, "'User' | 'Group'", ""));
        }

        // Query Params
        if (modelPremiumBenefitFilterType !== undefined) {
            requestContext.setQueryParam("model.premiumBenefitFilterType", ObjectSerializer.serialize(modelPremiumBenefitFilterType, "'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly'", ""));
        }

        // Query Params
        if (modelCreatorTargetId !== undefined) {
            requestContext.setQueryParam("model.creatorTargetId", ObjectSerializer.serialize(modelCreatorTargetId, "number", "int64"));
        }

        // Query Params
        if (modelCreatorName !== undefined) {
            requestContext.setQueryParam("model.creatorName", ObjectSerializer.serialize(modelCreatorName, "string", ""));
        }

        // Query Params
        if (modelMaxPrice !== undefined) {
            requestContext.setQueryParam("model.maxPrice", ObjectSerializer.serialize(modelMaxPrice, "number", "int32"));
        }

        // Query Params
        if (modelMinPrice !== undefined) {
            requestContext.setQueryParam("model.minPrice", ObjectSerializer.serialize(modelMinPrice, "number", "int32"));
        }

        // Query Params
        if (modelKeyword !== undefined) {
            requestContext.setQueryParam("model.keyword", ObjectSerializer.serialize(modelKeyword, "string", ""));
        }

        // Query Params
        if (modelIncludeNotForSale !== undefined) {
            requestContext.setQueryParam("model.includeNotForSale", ObjectSerializer.serialize(modelIncludeNotForSale, "boolean", ""));
        }

        // Query Params
        if (modelTagNames !== undefined) {
            requestContext.setQueryParam("model.tagNames", ObjectSerializer.serialize(modelTagNames, "Array<string>", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 28 | 30 | 50 | 60 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SearchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1SearchItemsDetailsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1SearchItemsDetailsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem", ""
            ) as RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Category subcategory selection not supported.  2: Creator id not found.  3: Creator type not found.  4: Genre not found.  5: Sort combination not supported.  6: Invalid price range.  10: StartRequest is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: User is unauthorized.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: The flood limit has been exceeded.", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "18: Search request timed out", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem", ""
            ) as RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1SearchItemsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1SearchItemsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem", ""
            ) as RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Category subcategory selection not supported.  2: Creator id not found.  3: Creator type not found.  4: Genre not found.  5: Sort combination not supported.  6: Invalid price range.  10: StartRequest is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: User is unauthorized.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "8: The flood limit has been exceeded.", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "18: Search request timed out", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem", ""
            ) as RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
