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
import { ObservableOutfitsV3Api } from './ObservableAPI';

import { OutfitsV3ApiRequestFactory, OutfitsV3ApiResponseProcessor} from "../apis/OutfitsV3Api";
export class PromiseOutfitsV3Api {
    private api: ObservableOutfitsV3Api

    public constructor(
        configuration: Configuration,
        requestFactory?: OutfitsV3ApiRequestFactory,
        responseProcessor?: OutfitsV3ApiResponseProcessor
    ) {
        this.api = new ObservableOutfitsV3Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v3OutfitsCreatePostWithHttpInfo(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        const result = this.api.v3OutfitsCreatePostWithHttpInfo(outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v3OutfitsCreatePost(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Promise<RobloxApiAvatarModelsOutfitModel> {
        const result = this.api.v3OutfitsCreatePost(outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Gets details about the contents of an outfit.
     * @param userOutfitId The user outfit id.
     */
    public v3OutfitsUserOutfitIdDetailsGetWithHttpInfo(userOutfitId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitDetailsModelV2>> {
        const result = this.api.v3OutfitsUserOutfitIdDetailsGetWithHttpInfo(userOutfitId, _options);
        return result.toPromise();
    }

    /**
     * Gets details about the contents of an outfit.
     * @param userOutfitId The user outfit id.
     */
    public v3OutfitsUserOutfitIdDetailsGet(userOutfitId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsOutfitDetailsModelV2> {
        const result = this.api.v3OutfitsUserOutfitIdDetailsGet(userOutfitId, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v3OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        const result = this.api.v3OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v3OutfitsUserOutfitIdPatch(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Promise<RobloxApiAvatarModelsOutfitModel> {
        const result = this.api.v3OutfitsUserOutfitIdPatch(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }


}



