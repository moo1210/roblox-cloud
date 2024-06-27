import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxApiAvatarModelsAssetMetaModelV1 } from '../models/RobloxApiAvatarModelsAssetMetaModelV1';
import { RobloxApiAvatarModelsAssetModelV2 } from '../models/RobloxApiAvatarModelsAssetModelV2';
import { RobloxApiAvatarModelsAssetTypeModel } from '../models/RobloxApiAvatarModelsAssetTypeModel';
import { RobloxApiAvatarModelsAssetWearModel } from '../models/RobloxApiAvatarModelsAssetWearModel';
import { RobloxApiAvatarModelsBodyColors3Model } from '../models/RobloxApiAvatarModelsBodyColors3Model';
import { RobloxApiAvatarModelsOutfitDetailsModelV2 } from '../models/RobloxApiAvatarModelsOutfitDetailsModelV2';
import { RobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsOutfitUpdateModelV3 } from '../models/RobloxApiAvatarModelsOutfitUpdateModelV3';
import { RobloxAvatarcoreSharedV3Beta1AssetPosition } from '../models/RobloxAvatarcoreSharedV3Beta1AssetPosition';
import { RobloxAvatarcoreSharedV3Beta1AssetRotation } from '../models/RobloxAvatarcoreSharedV3Beta1AssetRotation';
import { RobloxAvatarcoreSharedV3Beta1AssetScale } from '../models/RobloxAvatarcoreSharedV3Beta1AssetScale';
import { RobloxPlatformAvatarBodyColorsModelV2 } from '../models/RobloxPlatformAvatarBodyColorsModelV2';
import { RobloxWebResponsesAvatarScaleModel } from '../models/RobloxWebResponsesAvatarScaleModel';

import { OutfitsV3ApiRequestFactory, OutfitsV3ApiResponseProcessor} from "../apis/OutfitsV3Api";
export class ObservableOutfitsV3Api {
    private requestFactory: OutfitsV3ApiRequestFactory;
    private responseProcessor: OutfitsV3ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OutfitsV3ApiRequestFactory,
        responseProcessor?: OutfitsV3ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OutfitsV3ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OutfitsV3ApiResponseProcessor();
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v3OutfitsCreatePostWithHttpInfo(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        const requestContextPromise = this.requestFactory.v3OutfitsCreatePost(outfitUpdateModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3OutfitsCreatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v3OutfitsCreatePost(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Observable<RobloxApiAvatarModelsOutfitModel> {
        return this.v3OutfitsCreatePostWithHttpInfo(outfitUpdateModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsOutfitModel>) => apiResponse.data));
    }

    /**
     * Gets details about the contents of an outfit.
     * @param userOutfitId The user outfit id.
     */
    public v3OutfitsUserOutfitIdDetailsGetWithHttpInfo(userOutfitId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsOutfitDetailsModelV2>> {
        const requestContextPromise = this.requestFactory.v3OutfitsUserOutfitIdDetailsGet(userOutfitId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3OutfitsUserOutfitIdDetailsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets details about the contents of an outfit.
     * @param userOutfitId The user outfit id.
     */
    public v3OutfitsUserOutfitIdDetailsGet(userOutfitId: number, _options?: Configuration): Observable<RobloxApiAvatarModelsOutfitDetailsModelV2> {
        return this.v3OutfitsUserOutfitIdDetailsGetWithHttpInfo(userOutfitId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsOutfitDetailsModelV2>) => apiResponse.data));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v3OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Observable<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        const requestContextPromise = this.requestFactory.v3OutfitsUserOutfitIdPatch(userOutfitId, outfitUpdateModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v3OutfitsUserOutfitIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v3OutfitsUserOutfitIdPatch(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Observable<RobloxApiAvatarModelsOutfitModel> {
        return this.v3OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId, outfitUpdateModel, _options).pipe(map((apiResponse: HttpInfo<RobloxApiAvatarModelsOutfitModel>) => apiResponse.data));
    }

}
