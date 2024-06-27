import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxApiAvatarModelsAssetMetaModelV1 } from '../models/RobloxApiAvatarModelsAssetMetaModelV1';
import { RobloxApiAvatarModelsAssetModelV2 } from '../models/RobloxApiAvatarModelsAssetModelV2';
import { RobloxApiAvatarModelsAssetTypeModel } from '../models/RobloxApiAvatarModelsAssetTypeModel';
import { RobloxApiAvatarModelsAssetWearModel } from '../models/RobloxApiAvatarModelsAssetWearModel';
import { RobloxApiAvatarModelsAvatarApiSuccessResponse } from '../models/RobloxApiAvatarModelsAvatarApiSuccessResponse';
import { RobloxApiAvatarModelsAvatarModelV3 } from '../models/RobloxApiAvatarModelsAvatarModelV3';
import { RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsBodyColors3Model } from '../models/RobloxApiAvatarModelsBodyColors3Model';
import { RobloxApiAvatarModelsBodyColorsModel } from '../models/RobloxApiAvatarModelsBodyColorsModel';
import { RobloxApiAvatarModelsEmoteResponseModel } from '../models/RobloxApiAvatarModelsEmoteResponseModel';
import { RobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsOutfitUpdateModelV2 } from '../models/RobloxApiAvatarModelsOutfitUpdateModelV2';
import { RobloxApiAvatarModelsWearRequestModel } from '../models/RobloxApiAvatarModelsWearRequestModel';
import { RobloxApiAvatarModelsWearResponseModel } from '../models/RobloxApiAvatarModelsWearResponseModel';
import { RobloxAvatarcoreSharedV3Beta1AssetPosition } from '../models/RobloxAvatarcoreSharedV3Beta1AssetPosition';
import { RobloxAvatarcoreSharedV3Beta1AssetRotation } from '../models/RobloxAvatarcoreSharedV3Beta1AssetRotation';
import { RobloxAvatarcoreSharedV3Beta1AssetScale } from '../models/RobloxAvatarcoreSharedV3Beta1AssetScale';
import { RobloxPlatformAvatarBodyColorsModelV2 } from '../models/RobloxPlatformAvatarBodyColorsModelV2';
import { RobloxWebResponsesAvatarScaleModel } from '../models/RobloxWebResponsesAvatarScaleModel';

import { AvatarV2ApiRequestFactory, AvatarV2ApiResponseProcessor} from "../apis/AvatarV2Api";
export class ObservableAvatarV2Api {
    private requestFactory: AvatarV2ApiRequestFactory;
    private responseProcessor: AvatarV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AvatarV2ApiRequestFactory,
        responseProcessor?: AvatarV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AvatarV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AvatarV2ApiResponseProcessor();
    }

    /**
     * Returns details about the authenticated user\'s avatar
     */
    public v2AvatarAvatarGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarModelV3>> {
        const requestContextPromise = this.requestFactory.v2AvatarAvatarGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AvatarAvatarGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns details about the authenticated user\'s avatar
     */
    public v2AvatarAvatarGet(_options?: Configuration): Observable<RobloxApiAvatarModelsAvatarModelV3> {
        return this.v2AvatarAvatarGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarModelV3>) => apiResponse.data));
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param bodyColorsModel 
     */
    public v2AvatarSetBodyColorsPostWithHttpInfo(bodyColorsModel: RobloxPlatformAvatarBodyColorsModelV2, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v2AvatarSetBodyColorsPost(bodyColorsModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AvatarSetBodyColorsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param bodyColorsModel 
     */
    public v2AvatarSetBodyColorsPost(bodyColorsModel: RobloxPlatformAvatarBodyColorsModelV2, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.v2AvatarSetBodyColorsPostWithHttpInfo(bodyColorsModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list
     * @param wearRequestModel Model of assets to be worn
     */
    public v2AvatarSetWearingAssetsPostWithHttpInfo(wearRequestModel: RobloxApiAvatarModelsWearRequestModel, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsWearResponseModel>> {
        const requestContextPromise = this.requestFactory.v2AvatarSetWearingAssetsPost(wearRequestModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AvatarSetWearingAssetsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list
     * @param wearRequestModel Model of assets to be worn
     */
    public v2AvatarSetWearingAssetsPost(wearRequestModel: RobloxApiAvatarModelsWearRequestModel, _options?: Configuration): Observable<RobloxApiAvatarModelsWearResponseModel> {
        return this.v2AvatarSetWearingAssetsPostWithHttpInfo(wearRequestModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsWearResponseModel>) => apiResponse.data));
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param userId 
     */
    public v2AvatarUsersUserIdAvatarGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarModelV3>> {
        const requestContextPromise = this.requestFactory.v2AvatarUsersUserIdAvatarGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AvatarUsersUserIdAvatarGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param userId 
     */
    public v2AvatarUsersUserIdAvatarGet(userId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarModelV3> {
        return this.v2AvatarUsersUserIdAvatarGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarModelV3>) => apiResponse.data));
    }

    /**
     * Gets a list of outfits for the specified user.
     * @param userId The user id.
     * @param paginationToken The token received from the response to get the next page. For the first request, this value should be empty. Note : If no value is sent the 1st page will be returned.
     * @param outfitType The outfit type being searched for, null will return all outfitTypes
     * @param page The page number of the current page of requests, default is 1.
     * @param itemsPerPage The max number of outfits that can be returned.
     * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
     */
    public v2AvatarUsersUserIdOutfitsGetWithHttpInfo(userId: number, paginationToken?: string, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel>> {
        const requestContextPromise = this.requestFactory.v2AvatarUsersUserIdOutfitsGet(userId, paginationToken, outfitType, page, itemsPerPage, isEditable, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AvatarUsersUserIdOutfitsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of outfits for the specified user.
     * @param userId The user id.
     * @param paginationToken The token received from the response to get the next page. For the first request, this value should be empty. Note : If no value is sent the 1st page will be returned.
     * @param outfitType The outfit type being searched for, null will return all outfitTypes
     * @param page The page number of the current page of requests, default is 1.
     * @param itemsPerPage The max number of outfits that can be returned.
     * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
     */
    public v2AvatarUsersUserIdOutfitsGet(userId: number, paginationToken?: string, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Observable<RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel> {
        return this.v2AvatarUsersUserIdOutfitsGetWithHttpInfo(userId, paginationToken, outfitType, page, itemsPerPage, isEditable, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel>) => apiResponse.data));
    }

}

import { OutfitsV2ApiRequestFactory, OutfitsV2ApiResponseProcessor} from "../apis/OutfitsV2Api";
export class ObservableOutfitsV2Api {
    private requestFactory: OutfitsV2ApiRequestFactory;
    private responseProcessor: OutfitsV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OutfitsV2ApiRequestFactory,
        responseProcessor?: OutfitsV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OutfitsV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OutfitsV2ApiResponseProcessor();
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v2OutfitsCreatePostWithHttpInfo(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v2OutfitsCreatePost(outfitUpdateModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OutfitsCreatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v2OutfitsCreatePost(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Observable<any> {
        return this.v2OutfitsCreatePostWithHttpInfo(outfitUpdateModel, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v2OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        const requestContextPromise = this.requestFactory.v2OutfitsUserOutfitIdPatch(userOutfitId, outfitUpdateModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OutfitsUserOutfitIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v2OutfitsUserOutfitIdPatch(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Observable<RobloxApiAvatarModelsOutfitModel> {
        return this.v2OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId, outfitUpdateModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsOutfitModel>) => apiResponse.data));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v2OutfitsUserOutfitIdUpdatePostWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v2OutfitsUserOutfitIdUpdatePost(userOutfitId, outfitUpdateModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OutfitsUserOutfitIdUpdatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v2OutfitsUserOutfitIdUpdatePost(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Observable<any> {
        return this.v2OutfitsUserOutfitIdUpdatePostWithHttpInfo(userOutfitId, outfitUpdateModel, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
