import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxInventoryApiAssetsExplorerCategoryItemModel } from '../models/RobloxInventoryApiAssetsExplorerCategoryItemModel';
import { RobloxInventoryApiAssetsExplorerCategoryModel } from '../models/RobloxInventoryApiAssetsExplorerCategoryModel';
import { RobloxInventoryApiCategoriesModel } from '../models/RobloxInventoryApiCategoriesModel';
import { RobloxInventoryApiModelsAssetIdListModel } from '../models/RobloxInventoryApiModelsAssetIdListModel';
import { RobloxInventoryApiModelsCanViewInventoryResponse } from '../models/RobloxInventoryApiModelsCanViewInventoryResponse';
import { RobloxInventoryApiModelsCollectibleUserAssetModel } from '../models/RobloxInventoryApiModelsCollectibleUserAssetModel';
import { RobloxInventoryApiModelsIItemModel } from '../models/RobloxInventoryApiModelsIItemModel';
import { RobloxInventoryApiModelsInventoryPageResponse } from '../models/RobloxInventoryApiModelsInventoryPageResponse';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel';
import { RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel';

import { ObservableAssetsApi } from "./ObservableAPI";
import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";

export interface AssetsApiV1PackagesPackageIdAssetsGetRequest {
    /**
     * The asset ID of the package
     * @type number
     * @memberof AssetsApiv1PackagesPackageIdAssetsGet
     */
    packageID: number
}

export class ObjectAssetsApi {
    private api: ObservableAssetsApi

    public constructor(configuration: Configuration, requestFactory?: AssetsApiRequestFactory, responseProcessor?: AssetsApiResponseProcessor) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Given a package ID, returns the list of asset IDs for that package
     * @param param the request object
     */
    public v1PackagesPackageIdAssetsGetWithHttpInfo(param: AssetsApiV1PackagesPackageIdAssetsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxInventoryApiModelsAssetIdListModel>> {
        return this.api.v1PackagesPackageIdAssetsGetWithHttpInfo(param.packageID,  options).toPromise();
    }

    /**
     * Given a package ID, returns the list of asset IDs for that package
     * @param param the request object
     */
    public v1PackagesPackageIdAssetsGet(param: AssetsApiV1PackagesPackageIdAssetsGetRequest, options?: Configuration): Promise<RobloxInventoryApiModelsAssetIdListModel> {
        return this.api.v1PackagesPackageIdAssetsGet(param.packageID,  options).toPromise();
    }

}

import { ObservableCollectionsApi } from "./ObservableAPI";
import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi";

export interface CollectionsApiV1CollectionsItemsItemTypeItemTargetIdDeleteRequest {
    /**
     * Type of the item (ie. Asset, Bundle)
     * @type 0 | 1 | 2 | 3
     * @memberof CollectionsApiv1CollectionsItemsItemTypeItemTargetIdDelete
     */
    itemType: 0 | 1 | 2 | 3
    /**
     * ID of the item
     * @type number
     * @memberof CollectionsApiv1CollectionsItemsItemTypeItemTargetIdDelete
     */
    itemTargetId: number
}

export interface CollectionsApiV1CollectionsItemsItemTypeItemTargetIdPostRequest {
    /**
     * Type of the item (ie. Asset, Bundle)
     * @type 0 | 1 | 2 | 3
     * @memberof CollectionsApiv1CollectionsItemsItemTypeItemTargetIdPost
     */
    itemType: 0 | 1 | 2 | 3
    /**
     * ID of the item
     * @type number
     * @memberof CollectionsApiv1CollectionsItemsItemTypeItemTargetIdPost
     */
    itemTargetId: number
}

export class ObjectCollectionsApi {
    private api: ObservableCollectionsApi

    public constructor(configuration: Configuration, requestFactory?: CollectionsApiRequestFactory, responseProcessor?: CollectionsApiResponseProcessor) {
        this.api = new ObservableCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes an item to the appropriate collection
     * @param param the request object
     */
    public v1CollectionsItemsItemTypeItemTargetIdDeleteWithHttpInfo(param: CollectionsApiV1CollectionsItemsItemTypeItemTargetIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1CollectionsItemsItemTypeItemTargetIdDeleteWithHttpInfo(param.itemType, param.itemTargetId,  options).toPromise();
    }

    /**
     * Removes an item to the appropriate collection
     * @param param the request object
     */
    public v1CollectionsItemsItemTypeItemTargetIdDelete(param: CollectionsApiV1CollectionsItemsItemTypeItemTargetIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1CollectionsItemsItemTypeItemTargetIdDelete(param.itemType, param.itemTargetId,  options).toPromise();
    }

    /**
     * Adds an item to the appropriate collection
     * @param param the request object
     */
    public v1CollectionsItemsItemTypeItemTargetIdPostWithHttpInfo(param: CollectionsApiV1CollectionsItemsItemTypeItemTargetIdPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1CollectionsItemsItemTypeItemTargetIdPostWithHttpInfo(param.itemType, param.itemTargetId,  options).toPromise();
    }

    /**
     * Adds an item to the appropriate collection
     * @param param the request object
     */
    public v1CollectionsItemsItemTypeItemTargetIdPost(param: CollectionsApiV1CollectionsItemsItemTypeItemTargetIdPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1CollectionsItemsItemTypeItemTargetIdPost(param.itemType, param.itemTargetId,  options).toPromise();
    }

}

import { ObservableInventoryApi } from "./ObservableAPI";
import { InventoryApiRequestFactory, InventoryApiResponseProcessor} from "../apis/InventoryApi";

export interface InventoryApiV1UsersUserIdAssetsCollectiblesGetRequest {
    /**
     * The userid of the owner of the collectibles.
     * @type number
     * @memberof InventoryApiv1UsersUserIdAssetsCollectiblesGet
     */
    userId: number
    /**
     * The asset type for the collectibles you\&#39;re trying to get.
     * @type 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82
     * @memberof InventoryApiv1UsersUserIdAssetsCollectiblesGet
     */
    assetType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof InventoryApiv1UsersUserIdAssetsCollectiblesGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof InventoryApiv1UsersUserIdAssetsCollectiblesGet
     */
    cursor?: string
    /**
     * Sorted by userAssetId
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof InventoryApiv1UsersUserIdAssetsCollectiblesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface InventoryApiV1UsersUserIdCanViewInventoryGetRequest {
    /**
     * The user identifier.
     * @type number
     * @memberof InventoryApiv1UsersUserIdCanViewInventoryGet
     */
    userId: number
}

export interface InventoryApiV1UsersUserIdCategoriesFavoritesGetRequest {
    /**
     * 
     * @type number
     * @memberof InventoryApiv1UsersUserIdCategoriesFavoritesGet
     */
    userId: number
}

export interface InventoryApiV1UsersUserIdCategoriesGetRequest {
    /**
     * 
     * @type number
     * @memberof InventoryApiv1UsersUserIdCategoriesGet
     */
    userId: number
}

export interface InventoryApiV1UsersUserIdInventoryAssetTypeGetRequest {
    /**
     * The user identifier.
     * @type number
     * @memberof InventoryApiv1UsersUserIdInventoryAssetTypeGet
     */
    userId: number
    /**
     * The asset type.
     * @type 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82
     * @memberof InventoryApiv1UsersUserIdInventoryAssetTypeGet
     */
    assetType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82
    /**
     * The start index.
     * @type number
     * @memberof InventoryApiv1UsersUserIdInventoryAssetTypeGet
     */
    pageNumber?: number
    /**
     * The max number of items that can be returned.
     * @type number
     * @memberof InventoryApiv1UsersUserIdInventoryAssetTypeGet
     */
    itemsPerPage?: number
    /**
     * Filter results for items containing this.
     * @type string
     * @memberof InventoryApiv1UsersUserIdInventoryAssetTypeGet
     */
    keyword?: string
}

export interface InventoryApiV1UsersUserIdItemsItemTypeItemTargetIdGetRequest {
    /**
     * ID of the user in question
     * @type number
     * @memberof InventoryApiv1UsersUserIdItemsItemTypeItemTargetIdGet
     */
    userId: number
    /**
     * Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @type 0 | 1 | 2 | 3
     * @memberof InventoryApiv1UsersUserIdItemsItemTypeItemTargetIdGet
     */
    itemType: 0 | 1 | 2 | 3
    /**
     * ID of the item in question
     * @type number
     * @memberof InventoryApiv1UsersUserIdItemsItemTypeItemTargetIdGet
     */
    itemTargetId: number
}

export interface InventoryApiV1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetRequest {
    /**
     * ID of the user in question
     * @type number
     * @memberof InventoryApiv1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet
     */
    userId: number
    /**
     * Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @type 0 | 1 | 2 | 3
     * @memberof InventoryApiv1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet
     */
    itemType: 0 | 1 | 2 | 3
    /**
     * ID of the item in question
     * @type number
     * @memberof InventoryApiv1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet
     */
    itemTargetId: number
}

export class ObjectInventoryApi {
    private api: ObservableInventoryApi

    public constructor(configuration: Configuration, requestFactory?: InventoryApiRequestFactory, responseProcessor?: InventoryApiResponseProcessor) {
        this.api = new ObservableInventoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets all collectible assets owned by the specified user.
     * @param param the request object
     */
    public v1UsersUserIdAssetsCollectiblesGetWithHttpInfo(param: InventoryApiV1UsersUserIdAssetsCollectiblesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel>> {
        return this.api.v1UsersUserIdAssetsCollectiblesGetWithHttpInfo(param.userId, param.assetType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets all collectible assets owned by the specified user.
     * @param param the request object
     */
    public v1UsersUserIdAssetsCollectiblesGet(param: InventoryApiV1UsersUserIdAssetsCollectiblesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel> {
        return this.api.v1UsersUserIdAssetsCollectiblesGet(param.userId, param.assetType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets whether the specified user\'s inventory can be viewed.
     * @param param the request object
     */
    public v1UsersUserIdCanViewInventoryGetWithHttpInfo(param: InventoryApiV1UsersUserIdCanViewInventoryGetRequest, options?: Configuration): Promise<HttpInfo<RobloxInventoryApiModelsCanViewInventoryResponse>> {
        return this.api.v1UsersUserIdCanViewInventoryGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Gets whether the specified user\'s inventory can be viewed.
     * @param param the request object
     */
    public v1UsersUserIdCanViewInventoryGet(param: InventoryApiV1UsersUserIdCanViewInventoryGetRequest, options?: Configuration): Promise<RobloxInventoryApiModelsCanViewInventoryResponse> {
        return this.api.v1UsersUserIdCanViewInventoryGet(param.userId,  options).toPromise();
    }

    /**
     * Return favorites categories for a user
     * @param param the request object
     */
    public v1UsersUserIdCategoriesFavoritesGetWithHttpInfo(param: InventoryApiV1UsersUserIdCategoriesFavoritesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxInventoryApiCategoriesModel>> {
        return this.api.v1UsersUserIdCategoriesFavoritesGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Return favorites categories for a user
     * @param param the request object
     */
    public v1UsersUserIdCategoriesFavoritesGet(param: InventoryApiV1UsersUserIdCategoriesFavoritesGetRequest, options?: Configuration): Promise<RobloxInventoryApiCategoriesModel> {
        return this.api.v1UsersUserIdCategoriesFavoritesGet(param.userId,  options).toPromise();
    }

    /**
     * Return inventory categories for a user
     * @param param the request object
     */
    public v1UsersUserIdCategoriesGetWithHttpInfo(param: InventoryApiV1UsersUserIdCategoriesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxInventoryApiCategoriesModel>> {
        return this.api.v1UsersUserIdCategoriesGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Return inventory categories for a user
     * @param param the request object
     */
    public v1UsersUserIdCategoriesGet(param: InventoryApiV1UsersUserIdCategoriesGetRequest, options?: Configuration): Promise<RobloxInventoryApiCategoriesModel> {
        return this.api.v1UsersUserIdCategoriesGet(param.userId,  options).toPromise();
    }

    /**
     * Gets a list of assets by type for the specified user.  Note that the \'Hat\' asset type may return accessories while we are migrating.
     * @param param the request object
     */
    public v1UsersUserIdInventoryAssetTypeGetWithHttpInfo(param: InventoryApiV1UsersUserIdInventoryAssetTypeGetRequest, options?: Configuration): Promise<HttpInfo<RobloxInventoryApiModelsInventoryPageResponse>> {
        return this.api.v1UsersUserIdInventoryAssetTypeGetWithHttpInfo(param.userId, param.assetType, param.pageNumber, param.itemsPerPage, param.keyword,  options).toPromise();
    }

    /**
     * Gets a list of assets by type for the specified user.  Note that the \'Hat\' asset type may return accessories while we are migrating.
     * @param param the request object
     */
    public v1UsersUserIdInventoryAssetTypeGet(param: InventoryApiV1UsersUserIdInventoryAssetTypeGetRequest, options?: Configuration): Promise<RobloxInventoryApiModelsInventoryPageResponse> {
        return this.api.v1UsersUserIdInventoryAssetTypeGet(param.userId, param.assetType, param.pageNumber, param.itemsPerPage, param.keyword,  options).toPromise();
    }

    /**
     * Gets owned items of the specified item type. Game Servers can make requests for any user, but can only make requests for game passes that belong to the place sending the request.  Place creators can make requests as if they were the Game Server.
     * @param param the request object
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdGetWithHttpInfo(param: InventoryApiV1UsersUserIdItemsItemTypeItemTargetIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel>> {
        return this.api.v1UsersUserIdItemsItemTypeItemTargetIdGetWithHttpInfo(param.userId, param.itemType, param.itemTargetId,  options).toPromise();
    }

    /**
     * Gets owned items of the specified item type. Game Servers can make requests for any user, but can only make requests for game passes that belong to the place sending the request.  Place creators can make requests as if they were the Game Server.
     * @param param the request object
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdGet(param: InventoryApiV1UsersUserIdItemsItemTypeItemTargetIdGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel> {
        return this.api.v1UsersUserIdItemsItemTypeItemTargetIdGet(param.userId, param.itemType, param.itemTargetId,  options).toPromise();
    }

    /**
     * Gets whether a user owns an item of type itemType with id itemTargetId.
     * @param param the request object
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetWithHttpInfo(param: InventoryApiV1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetWithHttpInfo(param.userId, param.itemType, param.itemTargetId,  options).toPromise();
    }

    /**
     * Gets whether a user owns an item of type itemType with id itemTargetId.
     * @param param the request object
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet(param: InventoryApiV1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetRequest, options?: Configuration): Promise<boolean> {
        return this.api.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet(param.userId, param.itemType, param.itemTargetId,  options).toPromise();
    }

}
