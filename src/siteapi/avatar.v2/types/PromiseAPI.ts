import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

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
import { ObservableAvatarV2Api } from './ObservableAPI';

import { AvatarV2ApiRequestFactory, AvatarV2ApiResponseProcessor} from "../apis/AvatarV2Api";
export class PromiseAvatarV2Api {
    private api: ObservableAvatarV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: AvatarV2ApiRequestFactory,
        responseProcessor?: AvatarV2ApiResponseProcessor
    ) {
        this.api = new ObservableAvatarV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns details about the authenticated user\'s avatar
     */
    public v2AvatarAvatarGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV3>> {
        const result = this.api.v2AvatarAvatarGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns details about the authenticated user\'s avatar
     */
    public v2AvatarAvatarGet(_options?: Configuration): Promise<RobloxApiAvatarModelsAvatarModelV3> {
        const result = this.api.v2AvatarAvatarGet(_options);
        return result.toPromise();
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param bodyColorsModel 
     */
    public v2AvatarSetBodyColorsPostWithHttpInfo(bodyColorsModel: RobloxPlatformAvatarBodyColorsModelV2, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const result = this.api.v2AvatarSetBodyColorsPostWithHttpInfo(bodyColorsModel, _options);
        return result.toPromise();
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param bodyColorsModel 
     */
    public v2AvatarSetBodyColorsPost(bodyColorsModel: RobloxPlatformAvatarBodyColorsModelV2, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        const result = this.api.v2AvatarSetBodyColorsPost(bodyColorsModel, _options);
        return result.toPromise();
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list
     * @param wearRequestModel Model of assets to be worn
     */
    public v2AvatarSetWearingAssetsPostWithHttpInfo(wearRequestModel: RobloxApiAvatarModelsWearRequestModel, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsWearResponseModel>> {
        const result = this.api.v2AvatarSetWearingAssetsPostWithHttpInfo(wearRequestModel, _options);
        return result.toPromise();
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list
     * @param wearRequestModel Model of assets to be worn
     */
    public v2AvatarSetWearingAssetsPost(wearRequestModel: RobloxApiAvatarModelsWearRequestModel, _options?: Configuration): Promise<RobloxApiAvatarModelsWearResponseModel> {
        const result = this.api.v2AvatarSetWearingAssetsPost(wearRequestModel, _options);
        return result.toPromise();
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param userId 
     */
    public v2AvatarUsersUserIdAvatarGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV3>> {
        const result = this.api.v2AvatarUsersUserIdAvatarGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param userId 
     */
    public v2AvatarUsersUserIdAvatarGet(userId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarModelV3> {
        const result = this.api.v2AvatarUsersUserIdAvatarGet(userId, _options);
        return result.toPromise();
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
    public v2AvatarUsersUserIdOutfitsGetWithHttpInfo(userId: number, paginationToken?: string, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel>> {
        const result = this.api.v2AvatarUsersUserIdOutfitsGetWithHttpInfo(userId, paginationToken, outfitType, page, itemsPerPage, isEditable, _options);
        return result.toPromise();
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
    public v2AvatarUsersUserIdOutfitsGet(userId: number, paginationToken?: string, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel> {
        const result = this.api.v2AvatarUsersUserIdOutfitsGet(userId, paginationToken, outfitType, page, itemsPerPage, isEditable, _options);
        return result.toPromise();
    }


}



import { ObservableOutfitsV2Api } from './ObservableAPI';

import { OutfitsV2ApiRequestFactory, OutfitsV2ApiResponseProcessor} from "../apis/OutfitsV2Api";
export class PromiseOutfitsV2Api {
    private api: ObservableOutfitsV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: OutfitsV2ApiRequestFactory,
        responseProcessor?: OutfitsV2ApiResponseProcessor
    ) {
        this.api = new ObservableOutfitsV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v2OutfitsCreatePostWithHttpInfo(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v2OutfitsCreatePostWithHttpInfo(outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v2OutfitsCreatePost(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Promise<any> {
        const result = this.api.v2OutfitsCreatePost(outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v2OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        const result = this.api.v2OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v2OutfitsUserOutfitIdPatch(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Promise<RobloxApiAvatarModelsOutfitModel> {
        const result = this.api.v2OutfitsUserOutfitIdPatch(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v2OutfitsUserOutfitIdUpdatePostWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v2OutfitsUserOutfitIdUpdatePostWithHttpInfo(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v2OutfitsUserOutfitIdUpdatePost(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2, _options?: Configuration): Promise<any> {
        const result = this.api.v2OutfitsUserOutfitIdUpdatePost(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }


}



