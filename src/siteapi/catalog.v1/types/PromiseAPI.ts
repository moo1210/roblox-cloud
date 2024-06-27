import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxAvatarCatalogSearchClientElasticsearchDebugInfo } from '../models/RobloxAvatarCatalogSearchClientElasticsearchDebugInfo';
import { RobloxCatalogApiAssetFavoriteModel } from '../models/RobloxCatalogApiAssetFavoriteModel';
import { RobloxCatalogApiBundleCreatorModel } from '../models/RobloxCatalogApiBundleCreatorModel';
import { RobloxCatalogApiBundleDetailsModel } from '../models/RobloxCatalogApiBundleDetailsModel';
import { RobloxCatalogApiBundleFavoriteModel } from '../models/RobloxCatalogApiBundleFavoriteModel';
import { RobloxCatalogApiBundleItemDetailModel } from '../models/RobloxCatalogApiBundleItemDetailModel';
import { RobloxCatalogApiBundleProductModel } from '../models/RobloxCatalogApiBundleProductModel';
import { RobloxCatalogApiCatalogSearchDetailedResponseItem } from '../models/RobloxCatalogApiCatalogSearchDetailedResponseItem';
import { RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem } from '../models/RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem';
import { RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem } from '../models/RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem';
import { RobloxCatalogApiCatalogSearchResponseItem } from '../models/RobloxCatalogApiCatalogSearchResponseItem';
import { RobloxCatalogApiCatalogSortModel } from '../models/RobloxCatalogApiCatalogSortModel';
import { RobloxCatalogApiCatalogSortsResponseModel } from '../models/RobloxCatalogApiCatalogSortsResponseModel';
import { RobloxCatalogApiCollectibleItemDetail } from '../models/RobloxCatalogApiCollectibleItemDetail';
import { RobloxCatalogApiFavoriteBundlesResponse } from '../models/RobloxCatalogApiFavoriteBundlesResponse';
import { RobloxCatalogApiMultigetItemDetailsRequestItem } from '../models/RobloxCatalogApiMultigetItemDetailsRequestItem';
import { RobloxCatalogApiMultigetItemDetailsRequestModel } from '../models/RobloxCatalogApiMultigetItemDetailsRequestModel';
import { RobloxCatalogApiOwnedBundleModel } from '../models/RobloxCatalogApiOwnedBundleModel';
import { RobloxCatalogApiPremiumPricingModel } from '../models/RobloxCatalogApiPremiumPricingModel';
import { RobloxCatalogApiSaleLocation } from '../models/RobloxCatalogApiSaleLocation';
import { RobloxCatalogApiTopicsTopicModel } from '../models/RobloxCatalogApiTopicsTopicModel';
import { RobloxCatalogApiTopicsTopicRequestModel } from '../models/RobloxCatalogApiTopicsTopicRequestModel';
import { RobloxCatalogApiTopicsTopicResponse } from '../models/RobloxCatalogApiTopicsTopicResponse';
import { RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1AvatarItem } from '../models/RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1AvatarItem';
import { RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1Error } from '../models/RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1Error';
import { RobloxPagingExclusiveStartKeyCursorSystemNullableSystemInt64 } from '../models/RobloxPagingExclusiveStartKeyCursorSystemNullableSystemInt64';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoRobloxPlatformBundlesCoreIBundleInstance } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoRobloxPlatformBundlesCoreIBundleInstance';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { RobloxWebWebAPIExclusiveStartRequestRobloxPlatformBundlesCoreIBundleInstance } from '../models/RobloxWebWebAPIExclusiveStartRequestRobloxPlatformBundlesCoreIBundleInstance';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem';
import { RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel';
import { RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel';
import { ObservableBundleApi } from './ObservableAPI';

import { BundleApiRequestFactory, BundleApiResponseProcessor} from "../apis/BundleApi";
export class PromiseBundleApi {
    private api: ObservableBundleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BundleApiRequestFactory,
        responseProcessor?: BundleApiResponseProcessor
    ) {
        this.api = new ObservableBundleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists the bundles a particular asset belongs to. Use the Id of the last bundle in the response to get the next page.
     * @param assetId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1AssetsAssetIdBundlesGetWithHttpInfo(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel>> {
        const result = this.api.v1AssetsAssetIdBundlesGetWithHttpInfo(assetId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Lists the bundles a particular asset belongs to. Use the Id of the last bundle in the response to get the next page.
     * @param assetId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1AssetsAssetIdBundlesGet(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel> {
        const result = this.api.v1AssetsAssetIdBundlesGet(assetId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the given bundleId.
     * @param bundleId 
     */
    public v1BundlesBundleIdDetailsGetWithHttpInfo(bundleId: number, _options?: Configuration): Promise<HttpInfo<RobloxCatalogApiBundleDetailsModel>> {
        const result = this.api.v1BundlesBundleIdDetailsGetWithHttpInfo(bundleId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the given bundleId.
     * @param bundleId 
     */
    public v1BundlesBundleIdDetailsGet(bundleId: number, _options?: Configuration): Promise<RobloxCatalogApiBundleDetailsModel> {
        const result = this.api.v1BundlesBundleIdDetailsGet(bundleId, _options);
        return result.toPromise();
    }

    /**
     * Gets recommendations for a given bundle, bundleId of 0 returns randomized bundles  - Accepts both public and authenticated users
     * @param bundleId 
     * @param numItems The number of recommended items to return.
     */
    public v1BundlesBundleIdRecommendationsGetWithHttpInfo(bundleId: number, numItems?: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel>> {
        const result = this.api.v1BundlesBundleIdRecommendationsGetWithHttpInfo(bundleId, numItems, _options);
        return result.toPromise();
    }

    /**
     * Gets recommendations for a given bundle, bundleId of 0 returns randomized bundles  - Accepts both public and authenticated users
     * @param bundleId 
     * @param numItems The number of recommended items to return.
     */
    public v1BundlesBundleIdRecommendationsGet(bundleId: number, numItems?: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel> {
        const result = this.api.v1BundlesBundleIdRecommendationsGet(bundleId, numItems, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the given bundleIds.
     * @param bundleIds 
     */
    public v1BundlesDetailsGetWithHttpInfo(bundleIds: Array<number>, _options?: Configuration): Promise<HttpInfo<Array<RobloxCatalogApiBundleDetailsModel>>> {
        const result = this.api.v1BundlesDetailsGetWithHttpInfo(bundleIds, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the given bundleIds.
     * @param bundleIds 
     */
    public v1BundlesDetailsGet(bundleIds: Array<number>, _options?: Configuration): Promise<Array<RobloxCatalogApiBundleDetailsModel>> {
        const result = this.api.v1BundlesDetailsGet(bundleIds, _options);
        return result.toPromise();
    }

    /**
     * @param userId 
     * @param bundleType 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdBundlesBundleTypeGetWithHttpInfo(userId: number, bundleType: 1 | 2 | 3 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel>> {
        const result = this.api.v1UsersUserIdBundlesBundleTypeGetWithHttpInfo(userId, bundleType, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * @param userId 
     * @param bundleType 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdBundlesBundleTypeGet(userId: number, bundleType: 1 | 2 | 3 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel> {
        const result = this.api.v1UsersUserIdBundlesBundleTypeGet(userId, bundleType, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Lists the bundles owned by a given user.
     * @param userId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by bundle
     */
    public v1UsersUserIdBundlesGetWithHttpInfo(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel>> {
        const result = this.api.v1UsersUserIdBundlesGetWithHttpInfo(userId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Lists the bundles owned by a given user.
     * @param userId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by bundle
     */
    public v1UsersUserIdBundlesGet(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel> {
        const result = this.api.v1UsersUserIdBundlesGet(userId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }


}



import { ObservableCatalogApi } from './ObservableAPI';

import { CatalogApiRequestFactory, CatalogApiResponseProcessor} from "../apis/CatalogApi";
export class PromiseCatalogApi {
    private api: ObservableCatalogApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CatalogApiRequestFactory,
        responseProcessor?: CatalogApiResponseProcessor
    ) {
        this.api = new ObservableCatalogApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns list of item details.
     * @param model Roblox.Catalog.Api.MultigetItemDetailsRequestModel
     */
    public v1CatalogItemsDetailsPostWithHttpInfo(model: RobloxCatalogApiMultigetItemDetailsRequestModel, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem>> {
        const result = this.api.v1CatalogItemsDetailsPostWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * Returns list of item details.
     * @param model Roblox.Catalog.Api.MultigetItemDetailsRequestModel
     */
    public v1CatalogItemsDetailsPost(model: RobloxCatalogApiMultigetItemDetailsRequestModel, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem> {
        const result = this.api.v1CatalogItemsDetailsPost(model, _options);
        return result.toPromise();
    }


}



import { ObservableCategoryApi } from './ObservableAPI';

import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";
export class PromiseCategoryApi {
    private api: ObservableCategoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryApiRequestFactory,
        responseProcessor?: CategoryApiResponseProcessor
    ) {
        this.api = new ObservableCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists a mapping for assets to category IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     */
    public v1AssetToCategoryGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        const result = this.api.v1AssetToCategoryGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Lists a mapping for assets to category IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     */
    public v1AssetToCategoryGet(_options?: Configuration): Promise<{ [key: string]: number; }> {
        const result = this.api.v1AssetToCategoryGet(_options);
        return result.toPromise();
    }

    /**
     * Lists a mapping for assets to subcategory IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     */
    public v1AssetToSubcategoryGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        const result = this.api.v1AssetToSubcategoryGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Lists a mapping for assets to subcategory IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     */
    public v1AssetToSubcategoryGet(_options?: Configuration): Promise<{ [key: string]: number; }> {
        const result = this.api.v1AssetToSubcategoryGet(_options);
        return result.toPromise();
    }

    /**
     * Lists Category Names and their Ids
     */
    public v1CategoriesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        const result = this.api.v1CategoriesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Lists Category Names and their Ids
     */
    public v1CategoriesGet(_options?: Configuration): Promise<{ [key: string]: number; }> {
        const result = this.api.v1CategoriesGet(_options);
        return result.toPromise();
    }

    /**
     * Lists Subcategory Names and their Ids
     */
    public v1SubcategoriesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        const result = this.api.v1SubcategoriesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Lists Subcategory Names and their Ids
     */
    public v1SubcategoriesGet(_options?: Configuration): Promise<{ [key: string]: number; }> {
        const result = this.api.v1SubcategoriesGet(_options);
        return result.toPromise();
    }


}



import { ObservableFavoritesApi } from './ObservableAPI';

import { FavoritesApiRequestFactory, FavoritesApiResponseProcessor} from "../apis/FavoritesApi";
export class PromiseFavoritesApi {
    private api: ObservableFavoritesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FavoritesApiRequestFactory,
        responseProcessor?: FavoritesApiResponseProcessor
    ) {
        this.api = new ObservableFavoritesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the favorite count for the given asset Id.
     * @param assetId 
     */
    public v1FavoritesAssetsAssetIdCountGetWithHttpInfo(assetId: number, _options?: Configuration): Promise<HttpInfo<number>> {
        const result = this.api.v1FavoritesAssetsAssetIdCountGetWithHttpInfo(assetId, _options);
        return result.toPromise();
    }

    /**
     * Gets the favorite count for the given asset Id.
     * @param assetId 
     */
    public v1FavoritesAssetsAssetIdCountGet(assetId: number, _options?: Configuration): Promise<number> {
        const result = this.api.v1FavoritesAssetsAssetIdCountGet(assetId, _options);
        return result.toPromise();
    }

    /**
     * Gets the favorite count for the given bundle Id.
     * @param bundleId 
     */
    public v1FavoritesBundlesBundleIdCountGetWithHttpInfo(bundleId: number, _options?: Configuration): Promise<HttpInfo<number>> {
        const result = this.api.v1FavoritesBundlesBundleIdCountGetWithHttpInfo(bundleId, _options);
        return result.toPromise();
    }

    /**
     * Gets the favorite count for the given bundle Id.
     * @param bundleId 
     */
    public v1FavoritesBundlesBundleIdCountGet(bundleId: number, _options?: Configuration): Promise<number> {
        const result = this.api.v1FavoritesBundlesBundleIdCountGet(bundleId, _options);
        return result.toPromise();
    }

    /**
     * Delete a favorite for an asset by the authenticated user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteWithHttpInfo(userId, assetId, _options);
        return result.toPromise();
    }

    /**
     * Delete a favorite for an asset by the authenticated user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(userId: number, assetId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(userId, assetId, _options);
        return result.toPromise();
    }

    /**
     * Gets the favorite model for the asset and user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteGetWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Promise<HttpInfo<RobloxCatalogApiAssetFavoriteModel>> {
        const result = this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoriteGetWithHttpInfo(userId, assetId, _options);
        return result.toPromise();
    }

    /**
     * Gets the favorite model for the asset and user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(userId: number, assetId: number, _options?: Configuration): Promise<RobloxCatalogApiAssetFavoriteModel> {
        const result = this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(userId, assetId, _options);
        return result.toPromise();
    }

    /**
     * Create a favorite for an asset by the authenticated user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoritePostWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoritePostWithHttpInfo(userId, assetId, _options);
        return result.toPromise();
    }

    /**
     * Create a favorite for an asset by the authenticated user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(userId: number, assetId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(userId, assetId, _options);
        return result.toPromise();
    }

    /**
     * Delete favorite for the bundle by the authenticated user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteWithHttpInfo(userId: number, bundleId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteWithHttpInfo(userId, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Delete favorite for the bundle by the authenticated user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(userId: number, bundleId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(userId, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Gets the favorite model for the bundle and user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteGetWithHttpInfo(userId: number, bundleId: number, _options?: Configuration): Promise<HttpInfo<RobloxCatalogApiBundleFavoriteModel>> {
        const result = this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoriteGetWithHttpInfo(userId, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Gets the favorite model for the bundle and user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(userId: number, bundleId: number, _options?: Configuration): Promise<RobloxCatalogApiBundleFavoriteModel> {
        const result = this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(userId, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Create a favorite for the bundle by the authenticated user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoritePostWithHttpInfo(userId: number, bundleId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoritePostWithHttpInfo(userId, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Create a favorite for the bundle by the authenticated user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(userId: number, bundleId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(userId, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Lists the bundles favorited by a given user with the given bundle subtypeId.  After 5/31/2024, only cursor based pagination will be supported.
     * @param userId 
     * @param subtypeId 
     * @param pageNumber 
     * @param itemsPerPage 
     * @param cursor 
     * @param isPrevious 
     */
    public v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetWithHttpInfo(userId: number, subtypeId: number, pageNumber?: number, itemsPerPage?: number, cursor?: string, isPrevious?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxCatalogApiFavoriteBundlesResponse>> {
        const result = this.api.v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetWithHttpInfo(userId, subtypeId, pageNumber, itemsPerPage, cursor, isPrevious, _options);
        return result.toPromise();
    }

    /**
     * Lists the bundles favorited by a given user with the given bundle subtypeId.  After 5/31/2024, only cursor based pagination will be supported.
     * @param userId 
     * @param subtypeId 
     * @param pageNumber 
     * @param itemsPerPage 
     * @param cursor 
     * @param isPrevious 
     */
    public v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet(userId: number, subtypeId: number, pageNumber?: number, itemsPerPage?: number, cursor?: string, isPrevious?: boolean, _options?: Configuration): Promise<RobloxCatalogApiFavoriteBundlesResponse> {
        const result = this.api.v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet(userId, subtypeId, pageNumber, itemsPerPage, cursor, isPrevious, _options);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

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
    public v1SearchItemsDetailsGetWithHttpInfo(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem>> {
        const result = this.api.v1SearchItemsDetailsGetWithHttpInfo(modelCategory, modelSubcategory, modelSortAggregation, modelSortCurrency, modelGenres, modelSortType, modelCreatorType, modelPremiumBenefitFilterType, modelCreatorTargetId, modelCreatorName, modelMaxPrice, modelMinPrice, modelKeyword, modelIncludeNotForSale, modelTagNames, sortOrder, limit, cursor, _options);
        return result.toPromise();
    }

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
    public v1SearchItemsDetailsGet(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30, cursor?: string, _options?: Configuration): Promise<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem> {
        const result = this.api.v1SearchItemsDetailsGet(modelCategory, modelSubcategory, modelSortAggregation, modelSortCurrency, modelGenres, modelSortType, modelCreatorType, modelPremiumBenefitFilterType, modelCreatorTargetId, modelCreatorName, modelMaxPrice, modelMinPrice, modelKeyword, modelIncludeNotForSale, modelTagNames, sortOrder, limit, cursor, _options);
        return result.toPromise();
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
    public v1SearchItemsGetWithHttpInfo(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30 | 50 | 60 | 100, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem>> {
        const result = this.api.v1SearchItemsGetWithHttpInfo(modelCategory, modelSubcategory, modelSortAggregation, modelSortCurrency, modelGenres, modelSortType, modelCreatorType, modelPremiumBenefitFilterType, modelCreatorTargetId, modelCreatorName, modelMaxPrice, modelMinPrice, modelKeyword, modelIncludeNotForSale, modelTagNames, sortOrder, limit, cursor, _options);
        return result.toPromise();
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
    public v1SearchItemsGet(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30 | 50 | 60 | 100, cursor?: string, _options?: Configuration): Promise<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem> {
        const result = this.api.v1SearchItemsGet(modelCategory, modelSubcategory, modelSortAggregation, modelSortCurrency, modelGenres, modelSortType, modelCreatorType, modelPremiumBenefitFilterType, modelCreatorTargetId, modelCreatorName, modelMaxPrice, modelMinPrice, modelKeyword, modelIncludeNotForSale, modelTagNames, sortOrder, limit, cursor, _options);
        return result.toPromise();
    }


}



import { ObservableTopicDiscoveryApi } from './ObservableAPI';

import { TopicDiscoveryApiRequestFactory, TopicDiscoveryApiResponseProcessor} from "../apis/TopicDiscoveryApi";
export class PromiseTopicDiscoveryApi {
    private api: ObservableTopicDiscoveryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TopicDiscoveryApiRequestFactory,
        responseProcessor?: TopicDiscoveryApiResponseProcessor
    ) {
        this.api = new ObservableTopicDiscoveryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param model 
     */
    public v1TopicGetTopicsPostWithHttpInfo(model: RobloxCatalogApiTopicsTopicRequestModel, _options?: Configuration): Promise<HttpInfo<RobloxCatalogApiTopicsTopicResponse>> {
        const result = this.api.v1TopicGetTopicsPostWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * @param model 
     */
    public v1TopicGetTopicsPost(model: RobloxCatalogApiTopicsTopicRequestModel, _options?: Configuration): Promise<RobloxCatalogApiTopicsTopicResponse> {
        const result = this.api.v1TopicGetTopicsPost(model, _options);
        return result.toPromise();
    }


}



