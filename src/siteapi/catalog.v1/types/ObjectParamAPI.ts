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

import { ObservableBundleApi } from "./ObservableAPI";
import { BundleApiRequestFactory, BundleApiResponseProcessor} from "../apis/BundleApi";

export interface BundleApiV1AssetsAssetIdBundlesGetRequest {
    /**
     * 
     * @type number
     * @memberof BundleApiv1AssetsAssetIdBundlesGet
     */
    assetId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof BundleApiv1AssetsAssetIdBundlesGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof BundleApiv1AssetsAssetIdBundlesGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof BundleApiv1AssetsAssetIdBundlesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface BundleApiV1BundlesBundleIdDetailsGetRequest {
    /**
     * 
     * @type number
     * @memberof BundleApiv1BundlesBundleIdDetailsGet
     */
    bundleId: number
}

export interface BundleApiV1BundlesBundleIdRecommendationsGetRequest {
    /**
     * 
     * @type number
     * @memberof BundleApiv1BundlesBundleIdRecommendationsGet
     */
    bundleId: number
    /**
     * The number of recommended items to return.
     * @type number
     * @memberof BundleApiv1BundlesBundleIdRecommendationsGet
     */
    numItems?: number
}

export interface BundleApiV1BundlesDetailsGetRequest {
    /**
     * 
     * @type Array&lt;number&gt;
     * @memberof BundleApiv1BundlesDetailsGet
     */
    bundleIds: Array<number>
}

export interface BundleApiV1UsersUserIdBundlesBundleTypeGetRequest {
    /**
     * 
     * @type number
     * @memberof BundleApiv1UsersUserIdBundlesBundleTypeGet
     */
    userId: number
    /**
     * 
     * @type 1 | 2 | 3 | 4
     * @memberof BundleApiv1UsersUserIdBundlesBundleTypeGet
     */
    bundleType: 1 | 2 | 3 | 4
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof BundleApiv1UsersUserIdBundlesBundleTypeGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof BundleApiv1UsersUserIdBundlesBundleTypeGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof BundleApiv1UsersUserIdBundlesBundleTypeGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface BundleApiV1UsersUserIdBundlesGetRequest {
    /**
     * 
     * @type number
     * @memberof BundleApiv1UsersUserIdBundlesGet
     */
    userId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof BundleApiv1UsersUserIdBundlesGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof BundleApiv1UsersUserIdBundlesGet
     */
    cursor?: string
    /**
     * Sorted by bundle
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof BundleApiv1UsersUserIdBundlesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export class ObjectBundleApi {
    private api: ObservableBundleApi

    public constructor(configuration: Configuration, requestFactory?: BundleApiRequestFactory, responseProcessor?: BundleApiResponseProcessor) {
        this.api = new ObservableBundleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists the bundles a particular asset belongs to. Use the Id of the last bundle in the response to get the next page.
     * @param param the request object
     */
    public v1AssetsAssetIdBundlesGetWithHttpInfo(param: BundleApiV1AssetsAssetIdBundlesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel>> {
        return this.api.v1AssetsAssetIdBundlesGetWithHttpInfo(param.assetId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Lists the bundles a particular asset belongs to. Use the Id of the last bundle in the response to get the next page.
     * @param param the request object
     */
    public v1AssetsAssetIdBundlesGet(param: BundleApiV1AssetsAssetIdBundlesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel> {
        return this.api.v1AssetsAssetIdBundlesGet(param.assetId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Returns details about the given bundleId.
     * @param param the request object
     */
    public v1BundlesBundleIdDetailsGetWithHttpInfo(param: BundleApiV1BundlesBundleIdDetailsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxCatalogApiBundleDetailsModel>> {
        return this.api.v1BundlesBundleIdDetailsGetWithHttpInfo(param.bundleId,  options).toPromise();
    }

    /**
     * Returns details about the given bundleId.
     * @param param the request object
     */
    public v1BundlesBundleIdDetailsGet(param: BundleApiV1BundlesBundleIdDetailsGetRequest, options?: Configuration): Promise<RobloxCatalogApiBundleDetailsModel> {
        return this.api.v1BundlesBundleIdDetailsGet(param.bundleId,  options).toPromise();
    }

    /**
     * Gets recommendations for a given bundle, bundleId of 0 returns randomized bundles  - Accepts both public and authenticated users
     * @param param the request object
     */
    public v1BundlesBundleIdRecommendationsGetWithHttpInfo(param: BundleApiV1BundlesBundleIdRecommendationsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel>> {
        return this.api.v1BundlesBundleIdRecommendationsGetWithHttpInfo(param.bundleId, param.numItems,  options).toPromise();
    }

    /**
     * Gets recommendations for a given bundle, bundleId of 0 returns randomized bundles  - Accepts both public and authenticated users
     * @param param the request object
     */
    public v1BundlesBundleIdRecommendationsGet(param: BundleApiV1BundlesBundleIdRecommendationsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel> {
        return this.api.v1BundlesBundleIdRecommendationsGet(param.bundleId, param.numItems,  options).toPromise();
    }

    /**
     * Returns details about the given bundleIds.
     * @param param the request object
     */
    public v1BundlesDetailsGetWithHttpInfo(param: BundleApiV1BundlesDetailsGetRequest, options?: Configuration): Promise<HttpInfo<Array<RobloxCatalogApiBundleDetailsModel>>> {
        return this.api.v1BundlesDetailsGetWithHttpInfo(param.bundleIds,  options).toPromise();
    }

    /**
     * Returns details about the given bundleIds.
     * @param param the request object
     */
    public v1BundlesDetailsGet(param: BundleApiV1BundlesDetailsGetRequest, options?: Configuration): Promise<Array<RobloxCatalogApiBundleDetailsModel>> {
        return this.api.v1BundlesDetailsGet(param.bundleIds,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1UsersUserIdBundlesBundleTypeGetWithHttpInfo(param: BundleApiV1UsersUserIdBundlesBundleTypeGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel>> {
        return this.api.v1UsersUserIdBundlesBundleTypeGetWithHttpInfo(param.userId, param.bundleType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1UsersUserIdBundlesBundleTypeGet(param: BundleApiV1UsersUserIdBundlesBundleTypeGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel> {
        return this.api.v1UsersUserIdBundlesBundleTypeGet(param.userId, param.bundleType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Lists the bundles owned by a given user.
     * @param param the request object
     */
    public v1UsersUserIdBundlesGetWithHttpInfo(param: BundleApiV1UsersUserIdBundlesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel>> {
        return this.api.v1UsersUserIdBundlesGetWithHttpInfo(param.userId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Lists the bundles owned by a given user.
     * @param param the request object
     */
    public v1UsersUserIdBundlesGet(param: BundleApiV1UsersUserIdBundlesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel> {
        return this.api.v1UsersUserIdBundlesGet(param.userId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

}

import { ObservableCatalogApi } from "./ObservableAPI";
import { CatalogApiRequestFactory, CatalogApiResponseProcessor} from "../apis/CatalogApi";

export interface CatalogApiV1CatalogItemsDetailsPostRequest {
    /**
     * Roblox.Catalog.Api.MultigetItemDetailsRequestModel
     * @type RobloxCatalogApiMultigetItemDetailsRequestModel
     * @memberof CatalogApiv1CatalogItemsDetailsPost
     */
    model: RobloxCatalogApiMultigetItemDetailsRequestModel
}

export class ObjectCatalogApi {
    private api: ObservableCatalogApi

    public constructor(configuration: Configuration, requestFactory?: CatalogApiRequestFactory, responseProcessor?: CatalogApiResponseProcessor) {
        this.api = new ObservableCatalogApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns list of item details.
     * @param param the request object
     */
    public v1CatalogItemsDetailsPostWithHttpInfo(param: CatalogApiV1CatalogItemsDetailsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem>> {
        return this.api.v1CatalogItemsDetailsPostWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * Returns list of item details.
     * @param param the request object
     */
    public v1CatalogItemsDetailsPost(param: CatalogApiV1CatalogItemsDetailsPostRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem> {
        return this.api.v1CatalogItemsDetailsPost(param.model,  options).toPromise();
    }

}

import { ObservableCategoryApi } from "./ObservableAPI";
import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";

export interface CategoryApiV1AssetToCategoryGetRequest {
}

export interface CategoryApiV1AssetToSubcategoryGetRequest {
}

export interface CategoryApiV1CategoriesGetRequest {
}

export interface CategoryApiV1SubcategoriesGetRequest {
}

export class ObjectCategoryApi {
    private api: ObservableCategoryApi

    public constructor(configuration: Configuration, requestFactory?: CategoryApiRequestFactory, responseProcessor?: CategoryApiResponseProcessor) {
        this.api = new ObservableCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists a mapping for assets to category IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     * @param param the request object
     */
    public v1AssetToCategoryGetWithHttpInfo(param: CategoryApiV1AssetToCategoryGetRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        return this.api.v1AssetToCategoryGetWithHttpInfo( options).toPromise();
    }

    /**
     * Lists a mapping for assets to category IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     * @param param the request object
     */
    public v1AssetToCategoryGet(param: CategoryApiV1AssetToCategoryGetRequest = {}, options?: Configuration): Promise<{ [key: string]: number; }> {
        return this.api.v1AssetToCategoryGet( options).toPromise();
    }

    /**
     * Lists a mapping for assets to subcategory IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     * @param param the request object
     */
    public v1AssetToSubcategoryGetWithHttpInfo(param: CategoryApiV1AssetToSubcategoryGetRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        return this.api.v1AssetToSubcategoryGetWithHttpInfo( options).toPromise();
    }

    /**
     * Lists a mapping for assets to subcategory IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     * @param param the request object
     */
    public v1AssetToSubcategoryGet(param: CategoryApiV1AssetToSubcategoryGetRequest = {}, options?: Configuration): Promise<{ [key: string]: number; }> {
        return this.api.v1AssetToSubcategoryGet( options).toPromise();
    }

    /**
     * Lists Category Names and their Ids
     * @param param the request object
     */
    public v1CategoriesGetWithHttpInfo(param: CategoryApiV1CategoriesGetRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        return this.api.v1CategoriesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Lists Category Names and their Ids
     * @param param the request object
     */
    public v1CategoriesGet(param: CategoryApiV1CategoriesGetRequest = {}, options?: Configuration): Promise<{ [key: string]: number; }> {
        return this.api.v1CategoriesGet( options).toPromise();
    }

    /**
     * Lists Subcategory Names and their Ids
     * @param param the request object
     */
    public v1SubcategoriesGetWithHttpInfo(param: CategoryApiV1SubcategoriesGetRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        return this.api.v1SubcategoriesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Lists Subcategory Names and their Ids
     * @param param the request object
     */
    public v1SubcategoriesGet(param: CategoryApiV1SubcategoriesGetRequest = {}, options?: Configuration): Promise<{ [key: string]: number; }> {
        return this.api.v1SubcategoriesGet( options).toPromise();
    }

}

import { ObservableFavoritesApi } from "./ObservableAPI";
import { FavoritesApiRequestFactory, FavoritesApiResponseProcessor} from "../apis/FavoritesApi";

export interface FavoritesApiV1FavoritesAssetsAssetIdCountGetRequest {
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesAssetsAssetIdCountGet
     */
    assetId: number
}

export interface FavoritesApiV1FavoritesBundlesBundleIdCountGetRequest {
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesBundlesBundleIdCountGet
     */
    bundleId: number
}

export interface FavoritesApiV1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteRequest {
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete
     */
    userId: number
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete
     */
    assetId: number
}

export interface FavoritesApiV1FavoritesUsersUserIdAssetsAssetIdFavoriteGetRequest {
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdAssetsAssetIdFavoriteGet
     */
    userId: number
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdAssetsAssetIdFavoriteGet
     */
    assetId: number
}

export interface FavoritesApiV1FavoritesUsersUserIdAssetsAssetIdFavoritePostRequest {
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdAssetsAssetIdFavoritePost
     */
    userId: number
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdAssetsAssetIdFavoritePost
     */
    assetId: number
}

export interface FavoritesApiV1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteRequest {
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete
     */
    userId: number
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete
     */
    bundleId: number
}

export interface FavoritesApiV1FavoritesUsersUserIdBundlesBundleIdFavoriteGetRequest {
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdBundlesBundleIdFavoriteGet
     */
    userId: number
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdBundlesBundleIdFavoriteGet
     */
    bundleId: number
}

export interface FavoritesApiV1FavoritesUsersUserIdBundlesBundleIdFavoritePostRequest {
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdBundlesBundleIdFavoritePost
     */
    userId: number
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdBundlesBundleIdFavoritePost
     */
    bundleId: number
}

export interface FavoritesApiV1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetRequest {
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet
     */
    userId: number
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet
     */
    subtypeId: number
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet
     */
    pageNumber?: number
    /**
     * 
     * @type number
     * @memberof FavoritesApiv1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet
     */
    itemsPerPage?: number
    /**
     * 
     * @type string
     * @memberof FavoritesApiv1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet
     */
    cursor?: string
    /**
     * 
     * @type boolean
     * @memberof FavoritesApiv1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet
     */
    isPrevious?: boolean
}

export class ObjectFavoritesApi {
    private api: ObservableFavoritesApi

    public constructor(configuration: Configuration, requestFactory?: FavoritesApiRequestFactory, responseProcessor?: FavoritesApiResponseProcessor) {
        this.api = new ObservableFavoritesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the favorite count for the given asset Id.
     * @param param the request object
     */
    public v1FavoritesAssetsAssetIdCountGetWithHttpInfo(param: FavoritesApiV1FavoritesAssetsAssetIdCountGetRequest, options?: Configuration): Promise<HttpInfo<number>> {
        return this.api.v1FavoritesAssetsAssetIdCountGetWithHttpInfo(param.assetId,  options).toPromise();
    }

    /**
     * Gets the favorite count for the given asset Id.
     * @param param the request object
     */
    public v1FavoritesAssetsAssetIdCountGet(param: FavoritesApiV1FavoritesAssetsAssetIdCountGetRequest, options?: Configuration): Promise<number> {
        return this.api.v1FavoritesAssetsAssetIdCountGet(param.assetId,  options).toPromise();
    }

    /**
     * Gets the favorite count for the given bundle Id.
     * @param param the request object
     */
    public v1FavoritesBundlesBundleIdCountGetWithHttpInfo(param: FavoritesApiV1FavoritesBundlesBundleIdCountGetRequest, options?: Configuration): Promise<HttpInfo<number>> {
        return this.api.v1FavoritesBundlesBundleIdCountGetWithHttpInfo(param.bundleId,  options).toPromise();
    }

    /**
     * Gets the favorite count for the given bundle Id.
     * @param param the request object
     */
    public v1FavoritesBundlesBundleIdCountGet(param: FavoritesApiV1FavoritesBundlesBundleIdCountGetRequest, options?: Configuration): Promise<number> {
        return this.api.v1FavoritesBundlesBundleIdCountGet(param.bundleId,  options).toPromise();
    }

    /**
     * Delete a favorite for an asset by the authenticated user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteWithHttpInfo(param: FavoritesApiV1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteWithHttpInfo(param.userId, param.assetId,  options).toPromise();
    }

    /**
     * Delete a favorite for an asset by the authenticated user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(param: FavoritesApiV1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(param.userId, param.assetId,  options).toPromise();
    }

    /**
     * Gets the favorite model for the asset and user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteGetWithHttpInfo(param: FavoritesApiV1FavoritesUsersUserIdAssetsAssetIdFavoriteGetRequest, options?: Configuration): Promise<HttpInfo<RobloxCatalogApiAssetFavoriteModel>> {
        return this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoriteGetWithHttpInfo(param.userId, param.assetId,  options).toPromise();
    }

    /**
     * Gets the favorite model for the asset and user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(param: FavoritesApiV1FavoritesUsersUserIdAssetsAssetIdFavoriteGetRequest, options?: Configuration): Promise<RobloxCatalogApiAssetFavoriteModel> {
        return this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(param.userId, param.assetId,  options).toPromise();
    }

    /**
     * Create a favorite for an asset by the authenticated user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoritePostWithHttpInfo(param: FavoritesApiV1FavoritesUsersUserIdAssetsAssetIdFavoritePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoritePostWithHttpInfo(param.userId, param.assetId,  options).toPromise();
    }

    /**
     * Create a favorite for an asset by the authenticated user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(param: FavoritesApiV1FavoritesUsersUserIdAssetsAssetIdFavoritePostRequest, options?: Configuration): Promise<any> {
        return this.api.v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(param.userId, param.assetId,  options).toPromise();
    }

    /**
     * Delete favorite for the bundle by the authenticated user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteWithHttpInfo(param: FavoritesApiV1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteWithHttpInfo(param.userId, param.bundleId,  options).toPromise();
    }

    /**
     * Delete favorite for the bundle by the authenticated user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(param: FavoritesApiV1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(param.userId, param.bundleId,  options).toPromise();
    }

    /**
     * Gets the favorite model for the bundle and user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteGetWithHttpInfo(param: FavoritesApiV1FavoritesUsersUserIdBundlesBundleIdFavoriteGetRequest, options?: Configuration): Promise<HttpInfo<RobloxCatalogApiBundleFavoriteModel>> {
        return this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoriteGetWithHttpInfo(param.userId, param.bundleId,  options).toPromise();
    }

    /**
     * Gets the favorite model for the bundle and user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(param: FavoritesApiV1FavoritesUsersUserIdBundlesBundleIdFavoriteGetRequest, options?: Configuration): Promise<RobloxCatalogApiBundleFavoriteModel> {
        return this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(param.userId, param.bundleId,  options).toPromise();
    }

    /**
     * Create a favorite for the bundle by the authenticated user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoritePostWithHttpInfo(param: FavoritesApiV1FavoritesUsersUserIdBundlesBundleIdFavoritePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoritePostWithHttpInfo(param.userId, param.bundleId,  options).toPromise();
    }

    /**
     * Create a favorite for the bundle by the authenticated user.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(param: FavoritesApiV1FavoritesUsersUserIdBundlesBundleIdFavoritePostRequest, options?: Configuration): Promise<any> {
        return this.api.v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(param.userId, param.bundleId,  options).toPromise();
    }

    /**
     * Lists the bundles favorited by a given user with the given bundle subtypeId.  After 5/31/2024, only cursor based pagination will be supported.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetWithHttpInfo(param: FavoritesApiV1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxCatalogApiFavoriteBundlesResponse>> {
        return this.api.v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetWithHttpInfo(param.userId, param.subtypeId, param.pageNumber, param.itemsPerPage, param.cursor, param.isPrevious,  options).toPromise();
    }

    /**
     * Lists the bundles favorited by a given user with the given bundle subtypeId.  After 5/31/2024, only cursor based pagination will be supported.
     * @param param the request object
     */
    public v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet(param: FavoritesApiV1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetRequest, options?: Configuration): Promise<RobloxCatalogApiFavoriteBundlesResponse> {
        return this.api.v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet(param.userId, param.subtypeId, param.pageNumber, param.itemsPerPage, param.cursor, param.isPrevious,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiV1SearchItemsDetailsGetRequest {
    /**
     * 
     * @type &#39;Accessories&#39; | &#39;All&#39; | &#39;AvatarAnimations&#39; | &#39;BodyParts&#39; | &#39;Clothing&#39; | &#39;Collectibles&#39; | &#39;Featured&#39; | &#39;Gear&#39; | &#39;CommunityCreations&#39; | &#39;Premium&#39; | &#39;Recommended&#39;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended'
    /**
     * 
     * @type &#39;Accessories&#39; | &#39;All&#39; | &#39;AvatarAnimations&#39; | &#39;BackAccessories&#39; | &#39;BodyParts&#39; | &#39;Clothing&#39; | &#39;Collectibles&#39; | &#39;FaceAccessories&#39; | &#39;Faces&#39; | &#39;Featured&#39; | &#39;FrontAccessories&#39; | &#39;Gear&#39; | &#39;HairAccessories&#39; | &#39;Hats&#39; | &#39;Heads&#39; | &#39;NeckAccessories&#39; | &#39;Pants&#39; | &#39;Shirts&#39; | &#39;ShoulderAccessories&#39; | &#39;Tshirts&#39; | &#39;WaistAccessories&#39; | &#39;Bundles&#39; | &#39;AnimationBundles&#39; | &#39;EmoteAnimations&#39; | &#39;CommunityCreations&#39; | &#39;Melee&#39; | &#39;Ranged&#39; | &#39;Explosive&#39; | &#39;PowerUp&#39; | &#39;Navigation&#39; | &#39;Musical&#39; | &#39;Social&#39; | &#39;Building&#39; | &#39;Transport&#39; | &#39;Premium&#39; | &#39;Recommended&#39;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended'
    /**
     * 
     * @type &#39;Past12Hours&#39; | &#39;PastDay&#39; | &#39;Past3Days&#39; | &#39;PastWeek&#39; | &#39;PastMonth&#39; | &#39;AllTime&#39;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime'
    /**
     * 
     * @type &#39;All&#39; | &#39;Robux&#39; | &#39;Tickets&#39; | &#39;CustomRobux&#39; | &#39;CustomTickets&#39; | &#39;Free&#39;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelGenres?: Array<string>
    /**
     * 
     * @type &#39;Relevance&#39; | &#39;Favorited&#39; | &#39;Sales&#39; | &#39;Updated&#39; | &#39;PriceAsc&#39; | &#39;PriceDesc&#39;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc'
    /**
     * 
     * @type &#39;User&#39; | &#39;Group&#39;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelCreatorType?: 'User' | 'Group'
    /**
     * 
     * @type &#39;None&#39; | &#39;PremiumDiscountedOnly&#39; | &#39;PremiumExclusiveOnly&#39;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly'
    /**
     * 
     * @type number
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelCreatorTargetId?: number
    /**
     * 
     * @type string
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelCreatorName?: string
    /**
     * 
     * @type number
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelMaxPrice?: number
    /**
     * 
     * @type number
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelMinPrice?: number
    /**
     * 
     * @type string
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelKeyword?: string
    /**
     * 
     * @type boolean
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelIncludeNotForSale?: boolean
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    modelTagNames?: Array<string>
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    sortOrder?: 'Asc' | 'Desc'
    /**
     * The amount of results per request.
     * @type 10 | 28 | 30
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    limit?: 10 | 28 | 30
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof SearchApiv1SearchItemsDetailsGet
     */
    cursor?: string
}

export interface SearchApiV1SearchItemsGetRequest {
    /**
     * 
     * @type &#39;Accessories&#39; | &#39;All&#39; | &#39;AvatarAnimations&#39; | &#39;BodyParts&#39; | &#39;Clothing&#39; | &#39;Collectibles&#39; | &#39;Featured&#39; | &#39;Gear&#39; | &#39;CommunityCreations&#39; | &#39;Premium&#39; | &#39;Recommended&#39;
     * @memberof SearchApiv1SearchItemsGet
     */
    modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended'
    /**
     * 
     * @type &#39;Accessories&#39; | &#39;All&#39; | &#39;AvatarAnimations&#39; | &#39;BackAccessories&#39; | &#39;BodyParts&#39; | &#39;Clothing&#39; | &#39;Collectibles&#39; | &#39;FaceAccessories&#39; | &#39;Faces&#39; | &#39;Featured&#39; | &#39;FrontAccessories&#39; | &#39;Gear&#39; | &#39;HairAccessories&#39; | &#39;Hats&#39; | &#39;Heads&#39; | &#39;NeckAccessories&#39; | &#39;Pants&#39; | &#39;Shirts&#39; | &#39;ShoulderAccessories&#39; | &#39;Tshirts&#39; | &#39;WaistAccessories&#39; | &#39;Bundles&#39; | &#39;AnimationBundles&#39; | &#39;EmoteAnimations&#39; | &#39;CommunityCreations&#39; | &#39;Melee&#39; | &#39;Ranged&#39; | &#39;Explosive&#39; | &#39;PowerUp&#39; | &#39;Navigation&#39; | &#39;Musical&#39; | &#39;Social&#39; | &#39;Building&#39; | &#39;Transport&#39; | &#39;Premium&#39; | &#39;Recommended&#39;
     * @memberof SearchApiv1SearchItemsGet
     */
    modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended'
    /**
     * 
     * @type &#39;Past12Hours&#39; | &#39;PastDay&#39; | &#39;Past3Days&#39; | &#39;PastWeek&#39; | &#39;PastMonth&#39; | &#39;AllTime&#39;
     * @memberof SearchApiv1SearchItemsGet
     */
    modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime'
    /**
     * 
     * @type &#39;All&#39; | &#39;Robux&#39; | &#39;Tickets&#39; | &#39;CustomRobux&#39; | &#39;CustomTickets&#39; | &#39;Free&#39;
     * @memberof SearchApiv1SearchItemsGet
     */
    modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof SearchApiv1SearchItemsGet
     */
    modelGenres?: Array<string>
    /**
     * 
     * @type &#39;Relevance&#39; | &#39;Favorited&#39; | &#39;Sales&#39; | &#39;Updated&#39; | &#39;PriceAsc&#39; | &#39;PriceDesc&#39;
     * @memberof SearchApiv1SearchItemsGet
     */
    modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc'
    /**
     * 
     * @type &#39;User&#39; | &#39;Group&#39;
     * @memberof SearchApiv1SearchItemsGet
     */
    modelCreatorType?: 'User' | 'Group'
    /**
     * 
     * @type &#39;None&#39; | &#39;PremiumDiscountedOnly&#39; | &#39;PremiumExclusiveOnly&#39;
     * @memberof SearchApiv1SearchItemsGet
     */
    modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly'
    /**
     * 
     * @type number
     * @memberof SearchApiv1SearchItemsGet
     */
    modelCreatorTargetId?: number
    /**
     * 
     * @type string
     * @memberof SearchApiv1SearchItemsGet
     */
    modelCreatorName?: string
    /**
     * 
     * @type number
     * @memberof SearchApiv1SearchItemsGet
     */
    modelMaxPrice?: number
    /**
     * 
     * @type number
     * @memberof SearchApiv1SearchItemsGet
     */
    modelMinPrice?: number
    /**
     * 
     * @type string
     * @memberof SearchApiv1SearchItemsGet
     */
    modelKeyword?: string
    /**
     * 
     * @type boolean
     * @memberof SearchApiv1SearchItemsGet
     */
    modelIncludeNotForSale?: boolean
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof SearchApiv1SearchItemsGet
     */
    modelTagNames?: Array<string>
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof SearchApiv1SearchItemsGet
     */
    sortOrder?: 'Asc' | 'Desc'
    /**
     * The amount of results per request.
     * @type 10 | 28 | 30 | 50 | 60 | 100
     * @memberof SearchApiv1SearchItemsGet
     */
    limit?: 10 | 28 | 30 | 50 | 60 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof SearchApiv1SearchItemsGet
     */
    cursor?: string
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search for avatarCatalog items
     * @param param the request object
     */
    public v1SearchItemsDetailsGetWithHttpInfo(param: SearchApiV1SearchItemsDetailsGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem>> {
        return this.api.v1SearchItemsDetailsGetWithHttpInfo(param.modelCategory, param.modelSubcategory, param.modelSortAggregation, param.modelSortCurrency, param.modelGenres, param.modelSortType, param.modelCreatorType, param.modelPremiumBenefitFilterType, param.modelCreatorTargetId, param.modelCreatorName, param.modelMaxPrice, param.modelMinPrice, param.modelKeyword, param.modelIncludeNotForSale, param.modelTagNames, param.sortOrder, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Search for avatarCatalog items
     * @param param the request object
     */
    public v1SearchItemsDetailsGet(param: SearchApiV1SearchItemsDetailsGetRequest = {}, options?: Configuration): Promise<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem> {
        return this.api.v1SearchItemsDetailsGet(param.modelCategory, param.modelSubcategory, param.modelSortAggregation, param.modelSortCurrency, param.modelGenres, param.modelSortType, param.modelCreatorType, param.modelPremiumBenefitFilterType, param.modelCreatorTargetId, param.modelCreatorName, param.modelMaxPrice, param.modelMinPrice, param.modelKeyword, param.modelIncludeNotForSale, param.modelTagNames, param.sortOrder, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Search for avatarCatalog item ids
     * @param param the request object
     */
    public v1SearchItemsGetWithHttpInfo(param: SearchApiV1SearchItemsGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem>> {
        return this.api.v1SearchItemsGetWithHttpInfo(param.modelCategory, param.modelSubcategory, param.modelSortAggregation, param.modelSortCurrency, param.modelGenres, param.modelSortType, param.modelCreatorType, param.modelPremiumBenefitFilterType, param.modelCreatorTargetId, param.modelCreatorName, param.modelMaxPrice, param.modelMinPrice, param.modelKeyword, param.modelIncludeNotForSale, param.modelTagNames, param.sortOrder, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Search for avatarCatalog item ids
     * @param param the request object
     */
    public v1SearchItemsGet(param: SearchApiV1SearchItemsGetRequest = {}, options?: Configuration): Promise<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem> {
        return this.api.v1SearchItemsGet(param.modelCategory, param.modelSubcategory, param.modelSortAggregation, param.modelSortCurrency, param.modelGenres, param.modelSortType, param.modelCreatorType, param.modelPremiumBenefitFilterType, param.modelCreatorTargetId, param.modelCreatorName, param.modelMaxPrice, param.modelMinPrice, param.modelKeyword, param.modelIncludeNotForSale, param.modelTagNames, param.sortOrder, param.limit, param.cursor,  options).toPromise();
    }

}

import { ObservableTopicDiscoveryApi } from "./ObservableAPI";
import { TopicDiscoveryApiRequestFactory, TopicDiscoveryApiResponseProcessor} from "../apis/TopicDiscoveryApi";

export interface TopicDiscoveryApiV1TopicGetTopicsPostRequest {
    /**
     * 
     * @type RobloxCatalogApiTopicsTopicRequestModel
     * @memberof TopicDiscoveryApiv1TopicGetTopicsPost
     */
    model: RobloxCatalogApiTopicsTopicRequestModel
}

export class ObjectTopicDiscoveryApi {
    private api: ObservableTopicDiscoveryApi

    public constructor(configuration: Configuration, requestFactory?: TopicDiscoveryApiRequestFactory, responseProcessor?: TopicDiscoveryApiResponseProcessor) {
        this.api = new ObservableTopicDiscoveryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public v1TopicGetTopicsPostWithHttpInfo(param: TopicDiscoveryApiV1TopicGetTopicsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxCatalogApiTopicsTopicResponse>> {
        return this.api.v1TopicGetTopicsPostWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1TopicGetTopicsPost(param: TopicDiscoveryApiV1TopicGetTopicsPostRequest, options?: Configuration): Promise<RobloxCatalogApiTopicsTopicResponse> {
        return this.api.v1TopicGetTopicsPost(param.model,  options).toPromise();
    }

}
