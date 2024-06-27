import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
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

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class ObservableAssetsApi {
    private requestFactory: AssetsApiRequestFactory;
    private responseProcessor: AssetsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetsApiResponseProcessor();
    }

    /**
     * Given a package ID, returns the list of asset IDs for that package
     * @param packageID The asset ID of the package
     */
    public v1PackagesPackageIdAssetsGetWithHttpInfo(packageID: number, _options?: Configuration): Observable<HttpInfo<RobloxInventoryApiModelsAssetIdListModel>> {
        const requestContextPromise = this.requestFactory.v1PackagesPackageIdAssetsGet(packageID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PackagesPackageIdAssetsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Given a package ID, returns the list of asset IDs for that package
     * @param packageID The asset ID of the package
     */
    public v1PackagesPackageIdAssetsGet(packageID: number, _options?: Configuration): Observable<RobloxInventoryApiModelsAssetIdListModel> {
        return this.v1PackagesPackageIdAssetsGetWithHttpInfo(packageID, _options).pipe(map((apiResponse: HttpInfo<RobloxInventoryApiModelsAssetIdListModel>) => apiResponse.data));
    }

}

import { CollectionsApiRequestFactory, CollectionsApiResponseProcessor} from "../apis/CollectionsApi";
export class ObservableCollectionsApi {
    private requestFactory: CollectionsApiRequestFactory;
    private responseProcessor: CollectionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsApiRequestFactory,
        responseProcessor?: CollectionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CollectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CollectionsApiResponseProcessor();
    }

    /**
     * Removes an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public v1CollectionsItemsItemTypeItemTargetIdDeleteWithHttpInfo(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1CollectionsItemsItemTypeItemTargetIdDelete(itemType, itemTargetId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CollectionsItemsItemTypeItemTargetIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public v1CollectionsItemsItemTypeItemTargetIdDelete(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Observable<any> {
        return this.v1CollectionsItemsItemTypeItemTargetIdDeleteWithHttpInfo(itemType, itemTargetId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Adds an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public v1CollectionsItemsItemTypeItemTargetIdPostWithHttpInfo(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1CollectionsItemsItemTypeItemTargetIdPost(itemType, itemTargetId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CollectionsItemsItemTypeItemTargetIdPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds an item to the appropriate collection
     * @param itemType Type of the item (ie. Asset, Bundle)
     * @param itemTargetId ID of the item
     */
    public v1CollectionsItemsItemTypeItemTargetIdPost(itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Observable<any> {
        return this.v1CollectionsItemsItemTypeItemTargetIdPostWithHttpInfo(itemType, itemTargetId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { InventoryApiRequestFactory, InventoryApiResponseProcessor} from "../apis/InventoryApi";
export class ObservableInventoryApi {
    private requestFactory: InventoryApiRequestFactory;
    private responseProcessor: InventoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InventoryApiRequestFactory,
        responseProcessor?: InventoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InventoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InventoryApiResponseProcessor();
    }

    /**
     * Gets all collectible assets owned by the specified user.
     * @param userId The userid of the owner of the collectibles.
     * @param assetType The asset type for the collectibles you\&#39;re trying to get.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by userAssetId
     */
    public v1UsersUserIdAssetsCollectiblesGetWithHttpInfo(userId: number, assetType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdAssetsCollectiblesGet(userId, assetType, limit, cursor, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdAssetsCollectiblesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all collectible assets owned by the specified user.
     * @param userId The userid of the owner of the collectibles.
     * @param assetType The asset type for the collectibles you\&#39;re trying to get.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by userAssetId
     */
    public v1UsersUserIdAssetsCollectiblesGet(userId: number, assetType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel> {
        return this.v1UsersUserIdAssetsCollectiblesGetWithHttpInfo(userId, assetType, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel>) => apiResponse.data));
    }

    /**
     * Gets whether the specified user\'s inventory can be viewed.
     * @param userId The user identifier.
     */
    public v1UsersUserIdCanViewInventoryGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxInventoryApiModelsCanViewInventoryResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdCanViewInventoryGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdCanViewInventoryGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets whether the specified user\'s inventory can be viewed.
     * @param userId The user identifier.
     */
    public v1UsersUserIdCanViewInventoryGet(userId: number, _options?: Configuration): Observable<RobloxInventoryApiModelsCanViewInventoryResponse> {
        return this.v1UsersUserIdCanViewInventoryGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxInventoryApiModelsCanViewInventoryResponse>) => apiResponse.data));
    }

    /**
     * Return favorites categories for a user
     * @param userId 
     */
    public v1UsersUserIdCategoriesFavoritesGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxInventoryApiCategoriesModel>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdCategoriesFavoritesGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdCategoriesFavoritesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return favorites categories for a user
     * @param userId 
     */
    public v1UsersUserIdCategoriesFavoritesGet(userId: number, _options?: Configuration): Observable<RobloxInventoryApiCategoriesModel> {
        return this.v1UsersUserIdCategoriesFavoritesGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxInventoryApiCategoriesModel>) => apiResponse.data));
    }

    /**
     * Return inventory categories for a user
     * @param userId 
     */
    public v1UsersUserIdCategoriesGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxInventoryApiCategoriesModel>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdCategoriesGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdCategoriesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return inventory categories for a user
     * @param userId 
     */
    public v1UsersUserIdCategoriesGet(userId: number, _options?: Configuration): Observable<RobloxInventoryApiCategoriesModel> {
        return this.v1UsersUserIdCategoriesGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxInventoryApiCategoriesModel>) => apiResponse.data));
    }

    /**
     * Gets a list of assets by type for the specified user.  Note that the \'Hat\' asset type may return accessories while we are migrating.
     * @param userId The user identifier.
     * @param assetType The asset type.
     * @param pageNumber The start index.
     * @param itemsPerPage The max number of items that can be returned.
     * @param keyword Filter results for items containing this.
     */
    public v1UsersUserIdInventoryAssetTypeGetWithHttpInfo(userId: number, assetType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, pageNumber?: number, itemsPerPage?: number, keyword?: string, _options?: Configuration): Observable<HttpInfo<RobloxInventoryApiModelsInventoryPageResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdInventoryAssetTypeGet(userId, assetType, pageNumber, itemsPerPage, keyword, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdInventoryAssetTypeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of assets by type for the specified user.  Note that the \'Hat\' asset type may return accessories while we are migrating.
     * @param userId The user identifier.
     * @param assetType The asset type.
     * @param pageNumber The start index.
     * @param itemsPerPage The max number of items that can be returned.
     * @param keyword Filter results for items containing this.
     */
    public v1UsersUserIdInventoryAssetTypeGet(userId: number, assetType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 16 | 17 | 18 | 19 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82, pageNumber?: number, itemsPerPage?: number, keyword?: string, _options?: Configuration): Observable<RobloxInventoryApiModelsInventoryPageResponse> {
        return this.v1UsersUserIdInventoryAssetTypeGetWithHttpInfo(userId, assetType, pageNumber, itemsPerPage, keyword, _options).pipe(map((apiResponse: HttpInfo<RobloxInventoryApiModelsInventoryPageResponse>) => apiResponse.data));
    }

    /**
     * Gets owned items of the specified item type. Game Servers can make requests for any user, but can only make requests for game passes that belong to the place sending the request.  Place creators can make requests as if they were the Game Server.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdGetWithHttpInfo(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdItemsItemTypeItemTargetIdGet(userId, itemType, itemTargetId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdItemsItemTypeItemTargetIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets owned items of the specified item type. Game Servers can make requests for any user, but can only make requests for game passes that belong to the place sending the request.  Place creators can make requests as if they were the Game Server.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdGet(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel> {
        return this.v1UsersUserIdItemsItemTypeItemTargetIdGetWithHttpInfo(userId, itemType, itemTargetId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsIItemModel>) => apiResponse.data));
    }

    /**
     * Gets whether a user owns an item of type itemType with id itemTargetId.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetWithHttpInfo(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet(userId, itemType, itemTargetId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets whether a user owns an item of type itemType with id itemTargetId.
     * @param userId ID of the user in question
     * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
     * @param itemTargetId ID of the item in question
     */
    public v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet(userId: number, itemType: 0 | 1 | 2 | 3, itemTargetId: number, _options?: Configuration): Observable<boolean> {
        return this.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetWithHttpInfo(userId, itemType, itemTargetId, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

}
