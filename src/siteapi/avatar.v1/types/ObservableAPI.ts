import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxApiAvatarModelsAssetIdListModel } from '../models/RobloxApiAvatarModelsAssetIdListModel';
import { RobloxApiAvatarModelsAssetMetaModelV1 } from '../models/RobloxApiAvatarModelsAssetMetaModelV1';
import { RobloxApiAvatarModelsAssetModelV2 } from '../models/RobloxApiAvatarModelsAssetModelV2';
import { RobloxApiAvatarModelsAssetTypeModel } from '../models/RobloxApiAvatarModelsAssetTypeModel';
import { RobloxApiAvatarModelsAssetTypeRulesModel } from '../models/RobloxApiAvatarModelsAssetTypeRulesModel';
import { RobloxApiAvatarModelsAvatarApiSuccessResponse } from '../models/RobloxApiAvatarModelsAvatarApiSuccessResponse';
import { RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsAvatarMetadataModel } from '../models/RobloxApiAvatarModelsAvatarMetadataModel';
import { RobloxApiAvatarModelsAvatarModelV2 } from '../models/RobloxApiAvatarModelsAvatarModelV2';
import { RobloxApiAvatarModelsAvatarRulesModel } from '../models/RobloxApiAvatarModelsAvatarRulesModel';
import { RobloxApiAvatarModelsAvatarRulesModelAccessoryRefinementLowerBounds } from '../models/RobloxApiAvatarModelsAvatarRulesModelAccessoryRefinementLowerBounds';
import { RobloxApiAvatarModelsBodyColorModel } from '../models/RobloxApiAvatarModelsBodyColorModel';
import { RobloxApiAvatarModelsBodyColorsModel } from '../models/RobloxApiAvatarModelsBodyColorsModel';
import { RobloxApiAvatarModelsDefaultClothingAssets } from '../models/RobloxApiAvatarModelsDefaultClothingAssets';
import { RobloxApiAvatarModelsEmoteResponseModel } from '../models/RobloxApiAvatarModelsEmoteResponseModel';
import { RobloxApiAvatarModelsGameStartInfoResponse } from '../models/RobloxApiAvatarModelsGameStartInfoResponse';
import { RobloxApiAvatarModelsOutfitDetailsModel } from '../models/RobloxApiAvatarModelsOutfitDetailsModel';
import { RobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsOutfitUpdateModelV1 } from '../models/RobloxApiAvatarModelsOutfitUpdateModelV1';
import { RobloxApiAvatarModelsPlayerAvatarTypeModel } from '../models/RobloxApiAvatarModelsPlayerAvatarTypeModel';
import { RobloxApiAvatarModelsRecentItemModel } from '../models/RobloxApiAvatarModelsRecentItemModel';
import { RobloxApiAvatarModelsScaleRulesModel } from '../models/RobloxApiAvatarModelsScaleRulesModel';
import { RobloxApiAvatarModelsUniverseAvatarAssetOverrideResponseModel } from '../models/RobloxApiAvatarModelsUniverseAvatarAssetOverrideResponseModel';
import { RobloxApiAvatarModelsWearResponseModel } from '../models/RobloxApiAvatarModelsWearResponseModel';
import { RobloxAvatarcoreCommonModelsAccessoryPositionModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryPositionModel';
import { RobloxAvatarcoreCommonModelsAccessoryRefinementModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryRefinementModel';
import { RobloxAvatarcoreCommonModelsAccessoryRotationModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryRotationModel';
import { RobloxAvatarcoreCommonModelsAccessoryScaleModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryScaleModel';
import { RobloxAvatarcoreSharedV3Beta1AssetPosition } from '../models/RobloxAvatarcoreSharedV3Beta1AssetPosition';
import { RobloxAvatarcoreSharedV3Beta1AssetRotation } from '../models/RobloxAvatarcoreSharedV3Beta1AssetRotation';
import { RobloxAvatarcoreSharedV3Beta1AssetScale } from '../models/RobloxAvatarcoreSharedV3Beta1AssetScale';
import { RobloxWebResponsesAvatarScaleModel } from '../models/RobloxWebResponsesAvatarScaleModel';
import { RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel } from '../models/RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel';

import { AvatarApiRequestFactory, AvatarApiResponseProcessor} from "../apis/AvatarApi";
export class ObservableAvatarApi {
    private requestFactory: AvatarApiRequestFactory;
    private responseProcessor: AvatarApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AvatarApiRequestFactory,
        responseProcessor?: AvatarApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AvatarApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AvatarApiResponseProcessor();
    }

    /**
     * Removes the asset from the authenticated user\'s avatar.
     * @param assetId The asset id.
     */
    public v1AvatarAssetsAssetIdRemovePostWithHttpInfo(assetId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v1AvatarAssetsAssetIdRemovePost(assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarAssetsAssetIdRemovePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes the asset from the authenticated user\'s avatar.
     * @param assetId The asset id.
     */
    public v1AvatarAssetsAssetIdRemovePost(assetId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.v1AvatarAssetsAssetIdRemovePostWithHttpInfo(assetId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * Puts the asset on the authenticated user\'s avatar.  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetId The asset id.
     */
    public v1AvatarAssetsAssetIdWearPostWithHttpInfo(assetId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v1AvatarAssetsAssetIdWearPost(assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarAssetsAssetIdWearPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Puts the asset on the authenticated user\'s avatar.  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetId The asset id.
     */
    public v1AvatarAssetsAssetIdWearPost(assetId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.v1AvatarAssetsAssetIdWearPostWithHttpInfo(assetId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * Returns details about the authenticated user\'s avatar
     */
    public v1AvatarGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarModelV2>> {
        const requestContextPromise = this.requestFactory.v1AvatarGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns details about the authenticated user\'s avatar
     */
    public v1AvatarGet(_options?: Configuration): Observable<RobloxApiAvatarModelsAvatarModelV2> {
        return this.v1AvatarGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarModelV2>) => apiResponse.data));
    }

    /**
     * Returns metadata used by the avatar page of the website
     */
    public v1AvatarMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarMetadataModel>> {
        const requestContextPromise = this.requestFactory.v1AvatarMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata used by the avatar page of the website
     */
    public v1AvatarMetadataGet(_options?: Configuration): Observable<RobloxApiAvatarModelsAvatarMetadataModel> {
        return this.v1AvatarMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarMetadataModel>) => apiResponse.data));
    }

    /**
     * Requests the authenticated user\'s thumbnail be redrawn
     */
    public v1AvatarRedrawThumbnailPostWithHttpInfo(_options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1AvatarRedrawThumbnailPost(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarRedrawThumbnailPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Requests the authenticated user\'s thumbnail be redrawn
     */
    public v1AvatarRedrawThumbnailPost(_options?: Configuration): Observable<any> {
        return this.v1AvatarRedrawThumbnailPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * BodyColorsPalette is a list of valid brickColors you can choose for your avatar.  WearableAssetTypes contains a list of asset types with names, ids, and the maximum number that you can wear at a time.  Does not include packages because they cannot be worn on your avatar directly.  PlayerAvatarTypes are the types of avatars you can choose between.
     * Returns the business rules related to avatars
     */
    public v1AvatarRulesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarRulesModel>> {
        const requestContextPromise = this.requestFactory.v1AvatarRulesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarRulesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * BodyColorsPalette is a list of valid brickColors you can choose for your avatar.  WearableAssetTypes contains a list of asset types with names, ids, and the maximum number that you can wear at a time.  Does not include packages because they cannot be worn on your avatar directly.  PlayerAvatarTypes are the types of avatars you can choose between.
     * Returns the business rules related to avatars
     */
    public v1AvatarRulesGet(_options?: Configuration): Observable<RobloxApiAvatarModelsAvatarRulesModel> {
        return this.v1AvatarRulesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarRulesModel>) => apiResponse.data));
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param bodyColorsModel 
     */
    public v1AvatarSetBodyColorsPostWithHttpInfo(bodyColorsModel: RobloxApiAvatarModelsBodyColorsModel, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v1AvatarSetBodyColorsPost(bodyColorsModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarSetBodyColorsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param bodyColorsModel 
     */
    public v1AvatarSetBodyColorsPost(bodyColorsModel: RobloxApiAvatarModelsBodyColorsModel, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.v1AvatarSetBodyColorsPostWithHttpInfo(bodyColorsModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.
     * Sets the authenticated user\'s player avatar type (e.g. R6 or R15).
     * @param playerAvatarTypeModel R6 or R15
     */
    public v1AvatarSetPlayerAvatarTypePostWithHttpInfo(playerAvatarTypeModel: RobloxApiAvatarModelsPlayerAvatarTypeModel, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v1AvatarSetPlayerAvatarTypePost(playerAvatarTypeModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarSetPlayerAvatarTypePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.
     * Sets the authenticated user\'s player avatar type (e.g. R6 or R15).
     * @param playerAvatarTypeModel R6 or R15
     */
    public v1AvatarSetPlayerAvatarTypePost(playerAvatarTypeModel: RobloxApiAvatarModelsPlayerAvatarTypeModel, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.v1AvatarSetPlayerAvatarTypePostWithHttpInfo(playerAvatarTypeModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * Sets the authenticated user\'s scales
     * @param scalesModel 
     */
    public v1AvatarSetScalesPostWithHttpInfo(scalesModel: RobloxWebResponsesAvatarScaleModel, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v1AvatarSetScalesPost(scalesModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarSetScalesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the authenticated user\'s scales
     * @param scalesModel 
     */
    public v1AvatarSetScalesPost(scalesModel: RobloxWebResponsesAvatarScaleModel, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.v1AvatarSetScalesPostWithHttpInfo(scalesModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetIdsModel The list of asset IDs
     */
    public v1AvatarSetWearingAssetsPostWithHttpInfo(assetIdsModel: RobloxApiAvatarModelsAssetIdListModel, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsWearResponseModel>> {
        const requestContextPromise = this.requestFactory.v1AvatarSetWearingAssetsPost(assetIdsModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AvatarSetWearingAssetsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetIdsModel The list of asset IDs
     */
    public v1AvatarSetWearingAssetsPost(assetIdsModel: RobloxApiAvatarModelsAssetIdListModel, _options?: Configuration): Observable<RobloxApiAvatarModelsWearResponseModel> {
        return this.v1AvatarSetWearingAssetsPostWithHttpInfo(assetIdsModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsWearResponseModel>) => apiResponse.data));
    }

    /**
     * The server will call this on game server start to request general information about the universe  This is version 1.1, which returns an entry from the UniverseAvatarType enum.  During mixed mode this may return unreliable results.
     * @param universeId 
     */
    public v1GameStartInfoGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsGameStartInfoResponse>> {
        const requestContextPromise = this.requestFactory.v1GameStartInfoGet(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GameStartInfoGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * The server will call this on game server start to request general information about the universe  This is version 1.1, which returns an entry from the UniverseAvatarType enum.  During mixed mode this may return unreliable results.
     * @param universeId 
     */
    public v1GameStartInfoGet(universeId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsGameStartInfoResponse> {
        return this.v1GameStartInfoGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsGameStartInfoResponse>) => apiResponse.data));
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param userId 
     */
    public v1UsersUserIdAvatarGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarModelV2>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdAvatarGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdAvatarGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param userId 
     */
    public v1UsersUserIdAvatarGet(userId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarModelV2> {
        return this.v1UsersUserIdAvatarGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarModelV2>) => apiResponse.data));
    }

    /**
     * Gets a list of asset ids that the user is currently wearing
     * @param userId The user id.
     */
    public v1UsersUserIdCurrentlyWearingGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAssetIdListModel>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdCurrentlyWearingGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdCurrentlyWearingGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of asset ids that the user is currently wearing
     * @param userId The user id.
     */
    public v1UsersUserIdCurrentlyWearingGet(userId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsAssetIdListModel> {
        return this.v1UsersUserIdCurrentlyWearingGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAssetIdListModel>) => apiResponse.data));
    }

    /**
     * Deprecated, user v2.  Gets a list of outfits for the specified user.
     * @param userId The user id.
     * @param outfitType The outfit type being searched for, null will return all outfitTypes
     * @param page The page number of the current page of requests, default is 1.
     * @param itemsPerPage The max number of outfits that can be returned.
     * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
     */
    public v1UsersUserIdOutfitsGetWithHttpInfo(userId: number, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdOutfitsGet(userId, outfitType, page, itemsPerPage, isEditable, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdOutfitsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated, user v2.  Gets a list of outfits for the specified user.
     * @param userId The user id.
     * @param outfitType The outfit type being searched for, null will return all outfitTypes
     * @param page The page number of the current page of requests, default is 1.
     * @param itemsPerPage The max number of outfits that can be returned.
     * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
     */
    public v1UsersUserIdOutfitsGet(userId: number, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel> {
        return this.v1UsersUserIdOutfitsGetWithHttpInfo(userId, outfitType, page, itemsPerPage, isEditable, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel>) => apiResponse.data));
    }

}

import { OutfitsApiRequestFactory, OutfitsApiResponseProcessor} from "../apis/OutfitsApi";
export class ObservableOutfitsApi {
    private requestFactory: OutfitsApiRequestFactory;
    private responseProcessor: OutfitsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OutfitsApiRequestFactory,
        responseProcessor?: OutfitsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OutfitsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OutfitsApiResponseProcessor();
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v1OutfitsCreatePostWithHttpInfo(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v1OutfitsCreatePost(outfitUpdateModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OutfitsCreatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v1OutfitsCreatePost(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.v1OutfitsCreatePostWithHttpInfo(outfitUpdateModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * You are only allowed to delete outfits you created.
     * Deletes the outfit
     * @param userOutfitId The user outfit id
     */
    public v1OutfitsUserOutfitIdDeletePostWithHttpInfo(userOutfitId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v1OutfitsUserOutfitIdDeletePost(userOutfitId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OutfitsUserOutfitIdDeletePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * You are only allowed to delete outfits you created.
     * Deletes the outfit
     * @param userOutfitId The user outfit id
     */
    public v1OutfitsUserOutfitIdDeletePost(userOutfitId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.v1OutfitsUserOutfitIdDeletePostWithHttpInfo(userOutfitId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * @param userOutfitId 
     */
    public v1OutfitsUserOutfitIdDetailsGetWithHttpInfo(userOutfitId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsOutfitDetailsModel>> {
        const requestContextPromise = this.requestFactory.v1OutfitsUserOutfitIdDetailsGet(userOutfitId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OutfitsUserOutfitIdDetailsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userOutfitId 
     */
    public v1OutfitsUserOutfitIdDetailsGet(userOutfitId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsOutfitDetailsModel> {
        return this.v1OutfitsUserOutfitIdDetailsGetWithHttpInfo(userOutfitId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsOutfitDetailsModel>) => apiResponse.data));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types. Accepts partial updates.
     * Updates the contents of an outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v1OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        const requestContextPromise = this.requestFactory.v1OutfitsUserOutfitIdPatch(userOutfitId, outfitUpdateModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OutfitsUserOutfitIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types. Accepts partial updates.
     * Updates the contents of an outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v1OutfitsUserOutfitIdPatch(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Observable<RobloxApiAvatarModelsOutfitModel> {
        return this.v1OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId, outfitUpdateModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsOutfitModel>) => apiResponse.data));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v1OutfitsUserOutfitIdUpdatePostWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v1OutfitsUserOutfitIdUpdatePost(userOutfitId, outfitUpdateModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OutfitsUserOutfitIdUpdatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v1OutfitsUserOutfitIdUpdatePost(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.v1OutfitsUserOutfitIdUpdatePostWithHttpInfo(userOutfitId, outfitUpdateModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * Applies the outfit\'s appearance to your avatar  If the user no longer owns one or more of the assets, invalidAssetIds will be populated with the unwearable assets.
     * Wears the outfit
     * @param userOutfitId The user outfit id
     */
    public v1OutfitsUserOutfitIdWearPostWithHttpInfo(userOutfitId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsWearResponseModel>> {
        const requestContextPromise = this.requestFactory.v1OutfitsUserOutfitIdWearPost(userOutfitId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OutfitsUserOutfitIdWearPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies the outfit\'s appearance to your avatar  If the user no longer owns one or more of the assets, invalidAssetIds will be populated with the unwearable assets.
     * Wears the outfit
     * @param userOutfitId The user outfit id
     */
    public v1OutfitsUserOutfitIdWearPost(userOutfitId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsWearResponseModel> {
        return this.v1OutfitsUserOutfitIdWearPostWithHttpInfo(userOutfitId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsWearResponseModel>) => apiResponse.data));
    }

}

import { RecentItemApiRequestFactory, RecentItemApiResponseProcessor} from "../apis/RecentItemApi";
export class ObservableRecentItemApi {
    private requestFactory: RecentItemApiRequestFactory;
    private responseProcessor: RecentItemApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RecentItemApiRequestFactory,
        responseProcessor?: RecentItemApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RecentItemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RecentItemApiResponseProcessor();
    }

    /**
     * Returns a list of recent items  Recent items can be Assets or Outfits
     * @param recentItemListType 
     */
    public v1RecentItemsRecentItemListTypeListGetWithHttpInfo(recentItemListType: 0 | 1 | 2 | 3 | 4 | 5 | 6, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel>> {
        const requestContextPromise = this.requestFactory.v1RecentItemsRecentItemListTypeListGet(recentItemListType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RecentItemsRecentItemListTypeListGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of recent items  Recent items can be Assets or Outfits
     * @param recentItemListType 
     */
    public v1RecentItemsRecentItemListTypeListGet(recentItemListType: 0 | 1 | 2 | 3 | 4 | 5 | 6, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel> {
        return this.v1RecentItemsRecentItemListTypeListGetWithHttpInfo(recentItemListType, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel>) => apiResponse.data));
    }

}
