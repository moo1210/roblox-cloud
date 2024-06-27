import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxWebAssetsAssetContentRepresentationSpecifier } from '../models/RobloxWebAssetsAssetContentRepresentationSpecifier';
import { RobloxWebAssetsAssetFormatLocation } from '../models/RobloxWebAssetsAssetFormatLocation';
import { RobloxWebAssetsBatchAssetRequestItem } from '../models/RobloxWebAssetsBatchAssetRequestItem';
import { RobloxWebAssetsIAssetItemError } from '../models/RobloxWebAssetsIAssetItemError';
import { RobloxWebAssetsIAssetResponseItem } from '../models/RobloxWebAssetsIAssetResponseItem';
import { RobloxWebAssetsIAssetResponseItemV2 } from '../models/RobloxWebAssetsIAssetResponseItemV2';

import { ObservableAssetFetchV2Api } from "./ObservableAPI";
import { AssetFetchV2ApiRequestFactory, AssetFetchV2ApiResponseProcessor} from "../apis/AssetFetchV2Api";

export interface AssetFetchV2ApiV2AliasAliasGetRequest {
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    alias: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AliasAliasGet
     */
    expectedAssetType?: string
}

export interface AssetFetchV2ApiV2AssetGetRequest {
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    id?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    userAssetId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    assetVersionId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    version?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    universeId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    serverplaceid?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    assetName?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    hash?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    marAssetHash?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    marCheckSum?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    expectedAssetType?: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    permissionContext?: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    doNotFallbackToBaselineRepresentation?: boolean
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetGet
     */
    contentRepresentationPriorityList?: string
}

export interface AssetFetchV2ApiV2AssetHashHashGetRequest {
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    hash: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetHashHashGet
     */
    expectedAssetType?: string
}

export interface AssetFetchV2ApiV2AssetIdAssetIdGetRequest {
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    assetId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    expectedAssetType?: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    doNotFallbackToBaselineRepresentation?: boolean
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdGet
     */
    contentRepresentationPriorityList?: string
}

export interface AssetFetchV2ApiV2AssetIdAssetIdVersionVersionGetRequest {
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    assetId: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    version: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    expectedAssetType?: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    doNotFallbackToBaselineRepresentation?: boolean
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetIdAssetIdVersionVersionGet
     */
    contentRepresentationPriorityList?: string
}

export interface AssetFetchV2ApiV2AssetVersionIdAssetVersionIdGetRequest {
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    assetVersionId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2AssetVersionIdAssetVersionIdGet
     */
    expectedAssetType?: string
}

export interface AssetFetchV2ApiV2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRequest {
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    marAssetHash: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    marCheckSum: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    expectedAssetType?: string
}

export interface AssetFetchV2ApiV2UserAssetIdUserAssetIdGetRequest {
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    userAssetId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchV2Apiv2UserAssetIdUserAssetIdGet
     */
    expectedAssetType?: string
}

export class ObjectAssetFetchV2Api {
    private api: ObservableAssetFetchV2Api

    public constructor(configuration: Configuration, requestFactory?: AssetFetchV2ApiRequestFactory, responseProcessor?: AssetFetchV2ApiResponseProcessor) {
        this.api = new ObservableAssetFetchV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public v2AliasAliasGetWithHttpInfo(param: AssetFetchV2ApiV2AliasAliasGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        return this.api.v2AliasAliasGetWithHttpInfo(param.alias, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AliasAliasGet(param: AssetFetchV2ApiV2AliasAliasGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        return this.api.v2AliasAliasGet(param.alias, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetGetWithHttpInfo(param: AssetFetchV2ApiV2AssetGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        return this.api.v2AssetGetWithHttpInfo(param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.id, param.userAssetId, param.assetVersionId, param.version, param.universeId, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.assetName, param.hash, param.marAssetHash, param.marCheckSum, param.expectedAssetType, param.skipSigningScripts, param.permissionContext, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetGet(param: AssetFetchV2ApiV2AssetGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        return this.api.v2AssetGet(param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.id, param.userAssetId, param.assetVersionId, param.version, param.universeId, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.assetName, param.hash, param.marAssetHash, param.marCheckSum, param.expectedAssetType, param.skipSigningScripts, param.permissionContext, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetHashHashGetWithHttpInfo(param: AssetFetchV2ApiV2AssetHashHashGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        return this.api.v2AssetHashHashGetWithHttpInfo(param.hash, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetHashHashGet(param: AssetFetchV2ApiV2AssetHashHashGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        return this.api.v2AssetHashHashGet(param.hash, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetIdAssetIdGetWithHttpInfo(param: AssetFetchV2ApiV2AssetIdAssetIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        return this.api.v2AssetIdAssetIdGetWithHttpInfo(param.assetId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetIdAssetIdGet(param: AssetFetchV2ApiV2AssetIdAssetIdGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        return this.api.v2AssetIdAssetIdGet(param.assetId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetIdAssetIdVersionVersionGetWithHttpInfo(param: AssetFetchV2ApiV2AssetIdAssetIdVersionVersionGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        return this.api.v2AssetIdAssetIdVersionVersionGetWithHttpInfo(param.assetId, param.version, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetIdAssetIdVersionVersionGet(param: AssetFetchV2ApiV2AssetIdAssetIdVersionVersionGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        return this.api.v2AssetIdAssetIdVersionVersionGet(param.assetId, param.version, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetVersionIdAssetVersionIdGetWithHttpInfo(param: AssetFetchV2ApiV2AssetVersionIdAssetVersionIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        return this.api.v2AssetVersionIdAssetVersionIdGetWithHttpInfo(param.assetVersionId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetVersionIdAssetVersionIdGet(param: AssetFetchV2ApiV2AssetVersionIdAssetVersionIdGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        return this.api.v2AssetVersionIdAssetVersionIdGet(param.assetVersionId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(param: AssetFetchV2ApiV2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        return this.api.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(param.marAssetHash, param.marCheckSum, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(param: AssetFetchV2ApiV2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        return this.api.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(param.marAssetHash, param.marCheckSum, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2UserAssetIdUserAssetIdGetWithHttpInfo(param: AssetFetchV2ApiV2UserAssetIdUserAssetIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        return this.api.v2UserAssetIdUserAssetIdGetWithHttpInfo(param.userAssetId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2UserAssetIdUserAssetIdGet(param: AssetFetchV2ApiV2UserAssetIdUserAssetIdGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        return this.api.v2UserAssetIdUserAssetIdGet(param.userAssetId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

}

import { ObservableBatchV2Api } from "./ObservableAPI";
import { BatchV2ApiRequestFactory, BatchV2ApiResponseProcessor} from "../apis/BatchV2Api";

export interface BatchV2ApiV2AssetsBatchPostRequest {
    /**
     * 
     * @type number
     * @memberof BatchV2Apiv2AssetsBatchPost
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof BatchV2Apiv2AssetsBatchPost
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof BatchV2Apiv2AssetsBatchPost
     */
    robloxBrowserAssetRequest: string
    /**
     * 
     * @type Array&lt;RobloxWebAssetsBatchAssetRequestItem&gt;
     * @memberof BatchV2Apiv2AssetsBatchPost
     */
    assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>
}

export class ObjectBatchV2Api {
    private api: ObservableBatchV2Api

    public constructor(configuration: Configuration, requestFactory?: BatchV2ApiRequestFactory, responseProcessor?: BatchV2ApiResponseProcessor) {
        this.api = new ObservableBatchV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public v2AssetsBatchPostWithHttpInfo(param: BatchV2ApiV2AssetsBatchPostRequest, options?: Configuration): Promise<HttpInfo<Array<RobloxWebAssetsIAssetResponseItemV2>>> {
        return this.api.v2AssetsBatchPostWithHttpInfo(param.robloxPlaceId, param.accept, param.robloxBrowserAssetRequest, param.assetRequestItems,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2AssetsBatchPost(param: BatchV2ApiV2AssetsBatchPostRequest, options?: Configuration): Promise<Array<RobloxWebAssetsIAssetResponseItemV2>> {
        return this.api.v2AssetsBatchPost(param.robloxPlaceId, param.accept, param.robloxBrowserAssetRequest, param.assetRequestItems,  options).toPromise();
    }

}
