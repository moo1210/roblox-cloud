import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

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

import { ObservableOutfitsV3Api } from "./ObservableAPI";
import { OutfitsV3ApiRequestFactory, OutfitsV3ApiResponseProcessor} from "../apis/OutfitsV3Api";

export interface OutfitsV3ApiV3OutfitsCreatePostRequest {
    /**
     * The new outfit
     * @type RobloxApiAvatarModelsOutfitUpdateModelV3
     * @memberof OutfitsV3Apiv3OutfitsCreatePost
     */
    outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3
}

export interface OutfitsV3ApiV3OutfitsUserOutfitIdDetailsGetRequest {
    /**
     * The user outfit id.
     * @type number
     * @memberof OutfitsV3Apiv3OutfitsUserOutfitIdDetailsGet
     */
    userOutfitId: number
}

export interface OutfitsV3ApiV3OutfitsUserOutfitIdPatchRequest {
    /**
     * The user outfit id.
     * @type number
     * @memberof OutfitsV3Apiv3OutfitsUserOutfitIdPatch
     */
    userOutfitId: number
    /**
     * The updated outfit
     * @type RobloxApiAvatarModelsOutfitUpdateModelV3
     * @memberof OutfitsV3Apiv3OutfitsUserOutfitIdPatch
     */
    outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3
}

export class ObjectOutfitsV3Api {
    private api: ObservableOutfitsV3Api

    public constructor(configuration: Configuration, requestFactory?: OutfitsV3ApiRequestFactory, responseProcessor?: OutfitsV3ApiResponseProcessor) {
        this.api = new ObservableOutfitsV3Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param param the request object
     */
    public v3OutfitsCreatePostWithHttpInfo(param: OutfitsV3ApiV3OutfitsCreatePostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        return this.api.v3OutfitsCreatePostWithHttpInfo(param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param param the request object
     */
    public v3OutfitsCreatePost(param: OutfitsV3ApiV3OutfitsCreatePostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsOutfitModel> {
        return this.api.v3OutfitsCreatePost(param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Gets details about the contents of an outfit.
     * @param param the request object
     */
    public v3OutfitsUserOutfitIdDetailsGetWithHttpInfo(param: OutfitsV3ApiV3OutfitsUserOutfitIdDetailsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitDetailsModelV2>> {
        return this.api.v3OutfitsUserOutfitIdDetailsGetWithHttpInfo(param.userOutfitId,  options).toPromise();
    }

    /**
     * Gets details about the contents of an outfit.
     * @param param the request object
     */
    public v3OutfitsUserOutfitIdDetailsGet(param: OutfitsV3ApiV3OutfitsUserOutfitIdDetailsGetRequest, options?: Configuration): Promise<RobloxApiAvatarModelsOutfitDetailsModelV2> {
        return this.api.v3OutfitsUserOutfitIdDetailsGet(param.userOutfitId,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param param the request object
     */
    public v3OutfitsUserOutfitIdPatchWithHttpInfo(param: OutfitsV3ApiV3OutfitsUserOutfitIdPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        return this.api.v3OutfitsUserOutfitIdPatchWithHttpInfo(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param param the request object
     */
    public v3OutfitsUserOutfitIdPatch(param: OutfitsV3ApiV3OutfitsUserOutfitIdPatchRequest, options?: Configuration): Promise<RobloxApiAvatarModelsOutfitModel> {
        return this.api.v3OutfitsUserOutfitIdPatch(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

}
