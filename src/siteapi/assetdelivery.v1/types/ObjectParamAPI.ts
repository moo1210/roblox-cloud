import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxWebAssetsAssetContentRepresentationSpecifier } from '../models/RobloxWebAssetsAssetContentRepresentationSpecifier';
import { RobloxWebAssetsBatchAssetRequestItem } from '../models/RobloxWebAssetsBatchAssetRequestItem';
import { RobloxWebAssetsIAssetItemError } from '../models/RobloxWebAssetsIAssetItemError';
import { RobloxWebAssetsIAssetResponseItem } from '../models/RobloxWebAssetsIAssetResponseItem';

import { ObservableAssetFetchApi } from "./ObservableAPI";
import { AssetFetchApiRequestFactory, AssetFetchApiResponseProcessor} from "../apis/AssetFetchApi";

export interface AssetFetchApiV1AliasAliasGetRequest {
    /**
     * The alias of the asset to retrieve.
     * @type string
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    alias: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AliasAliasGet
     */
    expectedAssetType?: string
}

export interface AssetFetchApiV1AssetGetRequest {
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetGet
     */
    id?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetGet
     */
    userAssetId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetGet
     */
    assetVersionId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetGet
     */
    version?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetGet
     */
    universeId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    serverplaceid?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    assetName?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    hash?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    marAssetHash?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    marCheckSum?: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    expectedAssetType?: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1AssetGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    permissionContext?: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1AssetGet
     */
    doNotFallbackToBaselineRepresentation?: boolean
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetGet
     */
    contentRepresentationPriorityList?: string
}

export interface AssetFetchApiV1AssetHashHashGetRequest {
    /**
     * the hash of the asset to retrieve.
     * @type string
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    hash: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetHashHashGet
     */
    expectedAssetType?: string
}

export interface AssetFetchApiV1AssetIdAssetIdGetRequest {
    /**
     * The ID of the asset to retrieve.
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    assetId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    expectedAssetType?: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    doNotFallbackToBaselineRepresentation?: boolean
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdGet
     */
    contentRepresentationPriorityList?: string
}

export interface AssetFetchApiV1AssetIdAssetIdVersionVersionGetRequest {
    /**
     * the ID of the asset to retrieve.
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    assetId: number
    /**
     * the version of the asset to retrieve.
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    version: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    expectedAssetType?: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    doNotFallbackToBaselineRepresentation?: boolean
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetIdAssetIdVersionVersionGet
     */
    contentRepresentationPriorityList?: string
}

export interface AssetFetchApiV1AssetVersionIdAssetVersionIdGetRequest {
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    assetVersionId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1AssetVersionIdAssetVersionIdGet
     */
    expectedAssetType?: string
}

export interface AssetFetchApiV1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRequest {
    /**
     * The mar (moderation agnostic) hash of the asset to retrieve.
     * @type string
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    marAssetHash: string
    /**
     * The mar (moderation agnostic) checksum of the asset to retrieve.
     * @type string
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    marCheckSum: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     */
    expectedAssetType?: string
}

export interface AssetFetchApiV1UserAssetIdUserAssetIdGetRequest {
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    userAssetId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    acceptEncoding: string
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    assetType: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    assetFormat: string
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    robloxAssetFormat: string
    /**
     * 
     * @type boolean
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    skipSigningScripts?: boolean
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    clientInsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    scriptinsert?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    modulePlaceId?: number
    /**
     * 
     * @type number
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    serverplaceid?: number
    /**
     * 
     * @type string
     * @memberof AssetFetchApiv1UserAssetIdUserAssetIdGet
     */
    expectedAssetType?: string
}

export class ObjectAssetFetchApi {
    private api: ObservableAssetFetchApi

    public constructor(configuration: Configuration, requestFactory?: AssetFetchApiRequestFactory, responseProcessor?: AssetFetchApiResponseProcessor) {
        this.api = new ObservableAssetFetchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves an asset by its alias (universeID/name)
     * @param param the request object
     */
    public v1AliasAliasGetWithHttpInfo(param: AssetFetchApiV1AliasAliasGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        return this.api.v1AliasAliasGetWithHttpInfo(param.alias, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * Retrieves an asset by its alias (universeID/name)
     * @param param the request object
     */
    public v1AliasAliasGet(param: AssetFetchApiV1AliasAliasGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        return this.api.v1AliasAliasGet(param.alias, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AssetGetWithHttpInfo(param: AssetFetchApiV1AssetGetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.v1AssetGetWithHttpInfo(param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.id, param.userAssetId, param.assetVersionId, param.version, param.universeId, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.assetName, param.hash, param.marAssetHash, param.marCheckSum, param.expectedAssetType, param.skipSigningScripts, param.permissionContext, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AssetGet(param: AssetFetchApiV1AssetGetRequest, options?: Configuration): Promise<void> {
        return this.api.v1AssetGet(param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.id, param.userAssetId, param.assetVersionId, param.version, param.universeId, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.assetName, param.hash, param.marAssetHash, param.marCheckSum, param.expectedAssetType, param.skipSigningScripts, param.permissionContext, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * Retrieves an asset by its hash.
     * @param param the request object
     */
    public v1AssetHashHashGetWithHttpInfo(param: AssetFetchApiV1AssetHashHashGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        return this.api.v1AssetHashHashGetWithHttpInfo(param.hash, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * Retrieves an asset by its hash.
     * @param param the request object
     */
    public v1AssetHashHashGet(param: AssetFetchApiV1AssetHashHashGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        return this.api.v1AssetHashHashGet(param.hash, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * Retrieves an asset by its ID
     * @param param the request object
     */
    public v1AssetIdAssetIdGetWithHttpInfo(param: AssetFetchApiV1AssetIdAssetIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        return this.api.v1AssetIdAssetIdGetWithHttpInfo(param.assetId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * Retrieves an asset by its ID
     * @param param the request object
     */
    public v1AssetIdAssetIdGet(param: AssetFetchApiV1AssetIdAssetIdGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        return this.api.v1AssetIdAssetIdGet(param.assetId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * Retrieves an asset by its ID and its version.
     * @param param the request object
     */
    public v1AssetIdAssetIdVersionVersionGetWithHttpInfo(param: AssetFetchApiV1AssetIdAssetIdVersionVersionGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        return this.api.v1AssetIdAssetIdVersionVersionGetWithHttpInfo(param.assetId, param.version, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * Retrieves an asset by its ID and its version.
     * @param param the request object
     */
    public v1AssetIdAssetIdVersionVersionGet(param: AssetFetchApiV1AssetIdAssetIdVersionVersionGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        return this.api.v1AssetIdAssetIdVersionVersionGet(param.assetId, param.version, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType, param.doNotFallbackToBaselineRepresentation, param.contentRepresentationPriorityList,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AssetVersionIdAssetVersionIdGetWithHttpInfo(param: AssetFetchApiV1AssetVersionIdAssetVersionIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        return this.api.v1AssetVersionIdAssetVersionIdGetWithHttpInfo(param.assetVersionId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AssetVersionIdAssetVersionIdGet(param: AssetFetchApiV1AssetVersionIdAssetVersionIdGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        return this.api.v1AssetVersionIdAssetVersionIdGet(param.assetVersionId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * Retrieves an asset by its mar (moderation agnostic) hash and mar (moderation agnostic) checksum.
     * @param param the request object
     */
    public v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(param: AssetFetchApiV1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        return this.api.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(param.marAssetHash, param.marCheckSum, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * Retrieves an asset by its mar (moderation agnostic) hash and mar (moderation agnostic) checksum.
     * @param param the request object
     */
    public v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(param: AssetFetchApiV1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        return this.api.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(param.marAssetHash, param.marCheckSum, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1UserAssetIdUserAssetIdGetWithHttpInfo(param: AssetFetchApiV1UserAssetIdUserAssetIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        return this.api.v1UserAssetIdUserAssetIdGetWithHttpInfo(param.userAssetId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1UserAssetIdUserAssetIdGet(param: AssetFetchApiV1UserAssetIdUserAssetIdGetRequest, options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        return this.api.v1UserAssetIdUserAssetIdGet(param.userAssetId, param.acceptEncoding, param.robloxPlaceId, param.assetType, param.accept, param.assetFormat, param.robloxAssetFormat, param.skipSigningScripts, param.clientInsert, param.scriptinsert, param.modulePlaceId, param.serverplaceid, param.expectedAssetType,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiV1AssetsBatchPostRequest {
    /**
     * 
     * @type number
     * @memberof BatchApiv1AssetsBatchPost
     */
    robloxPlaceId: number
    /**
     * 
     * @type string
     * @memberof BatchApiv1AssetsBatchPost
     */
    accept: string
    /**
     * 
     * @type string
     * @memberof BatchApiv1AssetsBatchPost
     */
    robloxBrowserAssetRequest: string
    /**
     * 
     * @type Array&lt;RobloxWebAssetsBatchAssetRequestItem&gt;
     * @memberof BatchApiv1AssetsBatchPost
     */
    assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public v1AssetsBatchPostWithHttpInfo(param: BatchApiV1AssetsBatchPostRequest, options?: Configuration): Promise<HttpInfo<Array<RobloxWebAssetsIAssetResponseItem>>> {
        return this.api.v1AssetsBatchPostWithHttpInfo(param.robloxPlaceId, param.accept, param.robloxBrowserAssetRequest, param.assetRequestItems,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AssetsBatchPost(param: BatchApiV1AssetsBatchPostRequest, options?: Configuration): Promise<Array<RobloxWebAssetsIAssetResponseItem>> {
        return this.api.v1AssetsBatchPost(param.robloxPlaceId, param.accept, param.robloxBrowserAssetRequest, param.assetRequestItems,  options).toPromise();
    }

}
