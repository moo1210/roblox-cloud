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
import { ObservableAssetsApi } from './ObservableAPI';

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class PromiseAssetsApi {
    private api: ObservableAssetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Given a package ID, returns the list of asset IDs for that package
     * @param packageID The asset ID of the package
     */
    public v1PackagesPackageIdAssetsGetWithHttpInfo(packageID: number, _options?: Configuration): Promise<HttpInfo<RobloxInventoryApiModelsAssetIdListModel>> {
        const result = this.api.v1PackagesPackageIdAssetsGetWithHttpInfo(packageID, _options);
        return result.toPromise();
    }

    /**
     * Given a package ID, returns the list of asset IDs for that package
     * @param packageID The asset ID of the package
     */
    public v1PackagesPackageIdAssetsGet(packageID: number, _options?: Configuration): Promise<RobloxInventoryApiModelsAssetIdListModel> {
        const result = this.api.v1PackagesPackageIdAssetsGet(packageID, _options);
        return result.toPromise();
    }


}



import { ObservableCollectionsApi } from './ObservableAPI';

import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi";
export class PromiseCollectionsApi {
    private api: ObservableCollectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsApiRequestFactory,
        responseProcessor?: CollectionsApiResponseProcessor
    ) {
        this.api = new ObservableCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public v1CollectionsItemsItemTypeItemTargetIdDeleteWithHttpInfo(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1CollectionsItemsItemTypeItemTargetIdDeleteWithHttpInfo(itemType, itemTargetId, _options);
        return result.toPromise();
    }

    /**
     * Removes an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public v1CollectionsItemsItemTypeItemTargetIdDelete(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1CollectionsItemsItemTypeItemTargetIdDelete(itemType, itemTargetId, _options);
        return result.toPromise();
    }

    /**
     * Adds an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public v1CollectionsItemsItemTypeItemTargetIdPostWithHttpInfo(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1CollectionsItemsItemTypeItemTargetIdPostWithHttpInfo(itemType, itemTargetId, _options);
        return result.toPromise();
    }

    /**
     * Adds an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public v1CollectionsItemsItemTypeItemTargetIdPost(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1CollectionsItemsItemTypeItemTargetIdPost(itemType, itemTargetId, _options);
        return result.toPromise();
    }


}



import { ObservableInventoryApi } from './ObservableAPI';

import { InventoryApiRequestFactory, InventoryApiResponseProcessor} from "../apis/InventoryApi";
export class PromiseInventoryApi {
    private api: ObservableInventoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InventoryApiRequestFactory,
        responseProcessor?: InventoryApiResponseProcessor
    ) {
        this.api = new ObservableInventoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets all collectible assets owned by the specified user.
     * @param userId The userid of the owner of the collectibles.
     * @param assetType The asset type for the collectibles you\&#39;re trying to get.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by userAssetId
     */
    public v1UsersUserIdAssetsCollectiblesGetWithHttpInfo(userId: number, assetType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel>> {
        const result = this.api.v1UsersUserIdAssetsCollectiblesGetWithHttpInfo(userId, assetType, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets all collectible assets owned by the specified user.
     * @param userId The userid of the owner of the collectibles.
     * @param assetType The asset type for the collectibles you\&#39;re trying to get.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by userAssetId
     */
    public v1UsersUserIdAssetsCollectiblesGet(userId: number, assetType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel> {
        const result = this.api.v1UsersUserIdAssetsCollectiblesGet(userId, assetType, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets whether the specified user\'s inventory can be viewed.
     * @param userId The user identifier.
     */
    public v1UsersUserIdCanViewInventoryGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxInventoryApiModelsCanViewInventoryResponse>> {
        const result = this.api.v1UsersUserIdCanViewInventoryGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets whether the specified user\'s inventory can be viewed.
     * @param userId The user identifier.
     */
    public v1UsersUserIdCanViewInventoryGet(userId: number, _options?: Configuration): Promise<RobloxInventoryApiModelsCanViewInventoryResponse> {
        const result = this.api.v1UsersUserIdCanViewInventoryGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Return favorites categories for a user
     * @param userId 
     */
    public v1UsersUserIdCategoriesFavoritesGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxInventoryApiCategoriesModel>> {
        const result = this.api.v1UsersUserIdCategoriesFavoritesGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Return favorites categories for a user
     * @param userId 
     */
    public v1UsersUserIdCategoriesFavoritesGet(userId: number, _options?: Configuration): Promise<RobloxInventoryApiCategoriesModel> {
        const result = this.api.v1UsersUserIdCategoriesFavoritesGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Return inventory categories for a user
     * @param userId 
     */
    public v1UsersUserIdCategoriesGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxInventoryApiCategoriesModel>> {
        const result = this.api.v1UsersUserIdCategoriesGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Return inventory categories for a user
     * @param userId 
     */
    public v1UsersUserIdCategoriesGet(userId: number, _options?: Configuration): Promise<RobloxInventoryApiCategoriesModel> {
        const result = this.api.v1UsersUserIdCategoriesGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of assets by type for the specified user.  Note that the \'Hat\' asset type may return accessories while we are migrating.
     * @param userId The user identifier.
     * @param assetType The asset type.
     * @param pageNumber The start index.
     * @param itemsPerPage The max number of items that can be returned.
     * @param keyword Filter results for items containing this.
     */
    public v1UsersUserIdInventoryAssetTypeGetWithHttpInfo(userId: number, assetType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, pageNumber?: number, itemsPerPage?: number, keyword?: string, _options?: Configuration): Promise<HttpInfo<RobloxInventoryApiModelsInventoryPageResponse>> {
        const result = this.api.v1UsersUserIdInventoryAssetTypeGetWithHttpInfo(userId, assetType, pageNumber, itemsPerPage, keyword, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of assets by type for the specified user.  Note that the \'Hat\' asset type may return accessories while we are migrating.
     * @param userId The user identifier.
     * @param assetType The asset type.
     * @param pageNumber The start index.
     * @param itemsPerPage The max number of items that can be returned.
     * @param keyword Filter results for items containing this.
     */
    public v1UsersUserIdInventoryAssetTypeGet(userId: number, assetType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, pageNumber?: number, itemsPerPage?: number, keyword?: string, _options?: Configuration): Promise<RobloxInventoryApiModelsInventoryPageResponse> {
        const result = this.api.v1UsersUserIdInventoryAssetTypeGet(userId, assetType, pageNumber, itemsPerPage, keyword, _options);
        return result.toPromise();
    }

    /**
     * Gets owned items of the specified item type. Game Servers can make requests for any user, but can only make requests for game passes that belong to the place sending the request.  Place creators can make requests as if they were the Game Server.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdGetWithHttpInfo(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel>> {
        const result = this.api.v1UsersUserIdItemsItemTypeItemTargetIdGetWithHttpInfo(userId, itemType, itemTargetId, _options);
        return result.toPromise();
    }

    /**
     * Gets owned items of the specified item type. Game Servers can make requests for any user, but can only make requests for game passes that belong to the place sending the request.  Place creators can make requests as if they were the Game Server.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdGet(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel> {
        const result = this.api.v1UsersUserIdItemsItemTypeItemTargetIdGet(userId, itemType, itemTargetId, _options);
        return result.toPromise();
    }

    /**
     * Gets whether a user owns an item of type itemType with id itemTargetId.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetWithHttpInfo(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetWithHttpInfo(userId, itemType, itemTargetId, _options);
        return result.toPromise();
    }

    /**
     * Gets whether a user owns an item of type itemType with id itemTargetId.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Promise<boolean> {
        const result = this.api.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet(userId, itemType, itemTargetId, _options);
        return result.toPromise();
    }


}



