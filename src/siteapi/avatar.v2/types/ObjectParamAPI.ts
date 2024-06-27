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

import { ObservableAvatarV2Api } from "./ObservableAPI";
import { AvatarV2ApiRequestFactory, AvatarV2ApiResponseProcessor} from "../apis/AvatarV2Api";

export interface AvatarV2ApiV2AvatarAvatarGetRequest {
}

export interface AvatarV2ApiV2AvatarSetBodyColorsPostRequest {
    /**
     * 
     * @type RobloxPlatformAvatarBodyColorsModelV2
     * @memberof AvatarV2Apiv2AvatarSetBodyColorsPost
     */
    bodyColorsModel: RobloxPlatformAvatarBodyColorsModelV2
}

export interface AvatarV2ApiV2AvatarSetWearingAssetsPostRequest {
    /**
     * Model of assets to be worn
     * @type RobloxApiAvatarModelsWearRequestModel
     * @memberof AvatarV2Apiv2AvatarSetWearingAssetsPost
     */
    wearRequestModel: RobloxApiAvatarModelsWearRequestModel
}

export interface AvatarV2ApiV2AvatarUsersUserIdAvatarGetRequest {
    /**
     * 
     * @type number
     * @memberof AvatarV2Apiv2AvatarUsersUserIdAvatarGet
     */
    userId: number
}

export interface AvatarV2ApiV2AvatarUsersUserIdOutfitsGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof AvatarV2Apiv2AvatarUsersUserIdOutfitsGet
     */
    userId: number
    /**
     * The token received from the response to get the next page. For the first request, this value should be empty. Note : If no value is sent the 1st page will be returned.
     * @type string
     * @memberof AvatarV2Apiv2AvatarUsersUserIdOutfitsGet
     */
    paginationToken?: string
    /**
     * The outfit type being searched for, null will return all outfitTypes
     * @type string
     * @memberof AvatarV2Apiv2AvatarUsersUserIdOutfitsGet
     */
    outfitType?: string
    /**
     * The page number of the current page of requests, default is 1.
     * @type number
     * @memberof AvatarV2Apiv2AvatarUsersUserIdOutfitsGet
     */
    page?: number
    /**
     * The max number of outfits that can be returned.
     * @type number
     * @memberof AvatarV2Apiv2AvatarUsersUserIdOutfitsGet
     */
    itemsPerPage?: number
    /**
     * Whether the outfits are editable. A null value will lead to no filtering.
     * @type boolean
     * @memberof AvatarV2Apiv2AvatarUsersUserIdOutfitsGet
     */
    isEditable?: boolean
}

export class ObjectAvatarV2Api {
    private api: ObservableAvatarV2Api

    public constructor(configuration: Configuration, requestFactory?: AvatarV2ApiRequestFactory, responseProcessor?: AvatarV2ApiResponseProcessor) {
        this.api = new ObservableAvatarV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns details about the authenticated user\'s avatar
     * @param param the request object
     */
    public v2AvatarAvatarGetWithHttpInfo(param: AvatarV2ApiV2AvatarAvatarGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV3>> {
        return this.api.v2AvatarAvatarGetWithHttpInfo( options).toPromise();
    }

    /**
     * Returns details about the authenticated user\'s avatar
     * @param param the request object
     */
    public v2AvatarAvatarGet(param: AvatarV2ApiV2AvatarAvatarGetRequest = {}, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarModelV3> {
        return this.api.v2AvatarAvatarGet( options).toPromise();
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param param the request object
     */
    public v2AvatarSetBodyColorsPostWithHttpInfo(param: AvatarV2ApiV2AvatarSetBodyColorsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        return this.api.v2AvatarSetBodyColorsPostWithHttpInfo(param.bodyColorsModel,  options).toPromise();
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param param the request object
     */
    public v2AvatarSetBodyColorsPost(param: AvatarV2ApiV2AvatarSetBodyColorsPostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.api.v2AvatarSetBodyColorsPost(param.bodyColorsModel,  options).toPromise();
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list
     * @param param the request object
     */
    public v2AvatarSetWearingAssetsPostWithHttpInfo(param: AvatarV2ApiV2AvatarSetWearingAssetsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsWearResponseModel>> {
        return this.api.v2AvatarSetWearingAssetsPostWithHttpInfo(param.wearRequestModel,  options).toPromise();
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list
     * @param param the request object
     */
    public v2AvatarSetWearingAssetsPost(param: AvatarV2ApiV2AvatarSetWearingAssetsPostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsWearResponseModel> {
        return this.api.v2AvatarSetWearingAssetsPost(param.wearRequestModel,  options).toPromise();
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param param the request object
     */
    public v2AvatarUsersUserIdAvatarGetWithHttpInfo(param: AvatarV2ApiV2AvatarUsersUserIdAvatarGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV3>> {
        return this.api.v2AvatarUsersUserIdAvatarGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param param the request object
     */
    public v2AvatarUsersUserIdAvatarGet(param: AvatarV2ApiV2AvatarUsersUserIdAvatarGetRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarModelV3> {
        return this.api.v2AvatarUsersUserIdAvatarGet(param.userId,  options).toPromise();
    }

    /**
     * Gets a list of outfits for the specified user.
     * @param param the request object
     */
    public v2AvatarUsersUserIdOutfitsGetWithHttpInfo(param: AvatarV2ApiV2AvatarUsersUserIdOutfitsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel>> {
        return this.api.v2AvatarUsersUserIdOutfitsGetWithHttpInfo(param.userId, param.paginationToken, param.outfitType, param.page, param.itemsPerPage, param.isEditable,  options).toPromise();
    }

    /**
     * Gets a list of outfits for the specified user.
     * @param param the request object
     */
    public v2AvatarUsersUserIdOutfitsGet(param: AvatarV2ApiV2AvatarUsersUserIdOutfitsGetRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel> {
        return this.api.v2AvatarUsersUserIdOutfitsGet(param.userId, param.paginationToken, param.outfitType, param.page, param.itemsPerPage, param.isEditable,  options).toPromise();
    }

}

import { ObservableOutfitsV2Api } from "./ObservableAPI";
import { OutfitsV2ApiRequestFactory, OutfitsV2ApiResponseProcessor} from "../apis/OutfitsV2Api";

export interface OutfitsV2ApiV2OutfitsCreatePostRequest {
    /**
     * The new outfit
     * @type RobloxApiAvatarModelsOutfitUpdateModelV2
     * @memberof OutfitsV2Apiv2OutfitsCreatePost
     */
    outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2
}

export interface OutfitsV2ApiV2OutfitsUserOutfitIdPatchRequest {
    /**
     * The user outfit id.
     * @type number
     * @memberof OutfitsV2Apiv2OutfitsUserOutfitIdPatch
     */
    userOutfitId: number
    /**
     * The updated outfit
     * @type RobloxApiAvatarModelsOutfitUpdateModelV2
     * @memberof OutfitsV2Apiv2OutfitsUserOutfitIdPatch
     */
    outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2
}

export interface OutfitsV2ApiV2OutfitsUserOutfitIdUpdatePostRequest {
    /**
     * The user outfit id.
     * @type number
     * @memberof OutfitsV2Apiv2OutfitsUserOutfitIdUpdatePost
     */
    userOutfitId: number
    /**
     * The updated outfit
     * @type RobloxApiAvatarModelsOutfitUpdateModelV2
     * @memberof OutfitsV2Apiv2OutfitsUserOutfitIdUpdatePost
     */
    outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV2
}

export class ObjectOutfitsV2Api {
    private api: ObservableOutfitsV2Api

    public constructor(configuration: Configuration, requestFactory?: OutfitsV2ApiRequestFactory, responseProcessor?: OutfitsV2ApiResponseProcessor) {
        this.api = new ObservableOutfitsV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param param the request object
     */
    public v2OutfitsCreatePostWithHttpInfo(param: OutfitsV2ApiV2OutfitsCreatePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v2OutfitsCreatePostWithHttpInfo(param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param param the request object
     */
    public v2OutfitsCreatePost(param: OutfitsV2ApiV2OutfitsCreatePostRequest, options?: Configuration): Promise<any> {
        return this.api.v2OutfitsCreatePost(param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param param the request object
     */
    public v2OutfitsUserOutfitIdPatchWithHttpInfo(param: OutfitsV2ApiV2OutfitsUserOutfitIdPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        return this.api.v2OutfitsUserOutfitIdPatchWithHttpInfo(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param param the request object
     */
    public v2OutfitsUserOutfitIdPatch(param: OutfitsV2ApiV2OutfitsUserOutfitIdPatchRequest, options?: Configuration): Promise<RobloxApiAvatarModelsOutfitModel> {
        return this.api.v2OutfitsUserOutfitIdPatch(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit.
     * @param param the request object
     */
    public v2OutfitsUserOutfitIdUpdatePostWithHttpInfo(param: OutfitsV2ApiV2OutfitsUserOutfitIdUpdatePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v2OutfitsUserOutfitIdUpdatePostWithHttpInfo(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit.
     * @param param the request object
     */
    public v2OutfitsUserOutfitIdUpdatePost(param: OutfitsV2ApiV2OutfitsUserOutfitIdUpdatePostRequest, options?: Configuration): Promise<any> {
        return this.api.v2OutfitsUserOutfitIdUpdatePost(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

}
