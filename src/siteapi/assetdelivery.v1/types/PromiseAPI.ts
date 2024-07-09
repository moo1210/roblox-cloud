import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxWebAssetsAssetContentRepresentationSpecifier } from '../models/RobloxWebAssetsAssetContentRepresentationSpecifier';
import { RobloxWebAssetsBatchAssetRequestItem } from '../models/RobloxWebAssetsBatchAssetRequestItem';
import { RobloxWebAssetsIAssetItemError } from '../models/RobloxWebAssetsIAssetItemError';
import { RobloxWebAssetsIAssetResponseItem } from '../models/RobloxWebAssetsIAssetResponseItem';
import { ObservableAssetFetchApi } from './ObservableAPI';

import { AssetFetchApiRequestFactory, AssetFetchApiResponseProcessor} from "../apis/AssetFetchApi";
export class PromiseAssetFetchApi {
    private api: ObservableAssetFetchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetFetchApiRequestFactory,
        responseProcessor?: AssetFetchApiResponseProcessor
    ) {
        this.api = new ObservableAssetFetchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves an asset by its alias (universeID/name)
     * @param alias The alias of the asset to retrieve.
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public v1AliasAliasGetWithHttpInfo(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const result = this.api.v1AliasAliasGetWithHttpInfo(alias, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * Retrieves an asset by its alias (universeID/name)
     * @param alias The alias of the asset to retrieve.
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public v1AliasAliasGet(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        const result = this.api.v1AliasAliasGet(alias, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param id 
     * @param userAssetId 
     * @param assetVersionId 
     * @param version 
     * @param universeId 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param assetName 
     * @param hash 
     * @param marAssetHash 
     * @param marCheckSum 
     * @param expectedAssetType 
     * @param skipSigningScripts 
     * @param permissionContext 
     * @param doNotFallbackToBaselineRepresentation 
     * @param contentRepresentationPriorityList 
     */
    public v1AssetGetWithHttpInfo(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1AssetGetWithHttpInfo(acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, id, userAssetId, assetVersionId, version, universeId, clientInsert, scriptinsert, modulePlaceId, serverplaceid, assetName, hash, marAssetHash, marCheckSum, expectedAssetType, skipSigningScripts, permissionContext, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param id 
     * @param userAssetId 
     * @param assetVersionId 
     * @param version 
     * @param universeId 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param assetName 
     * @param hash 
     * @param marAssetHash 
     * @param marCheckSum 
     * @param expectedAssetType 
     * @param skipSigningScripts 
     * @param permissionContext 
     * @param doNotFallbackToBaselineRepresentation 
     * @param contentRepresentationPriorityList 
     */
    public v1AssetGet(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1AssetGet(acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, id, userAssetId, assetVersionId, version, universeId, clientInsert, scriptinsert, modulePlaceId, serverplaceid, assetName, hash, marAssetHash, marCheckSum, expectedAssetType, skipSigningScripts, permissionContext, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * Retrieves an asset by its ID
     * @param assetId The ID of the asset to retrieve.
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     * @param doNotFallbackToBaselineRepresentation 
     * @param contentRepresentationPriorityList 
     */
    public v1AssetIdAssetIdGetWithHttpInfo(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const result = this.api.v1AssetIdAssetIdGetWithHttpInfo(assetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * Retrieves an asset by its ID
     * @param assetId The ID of the asset to retrieve.
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     * @param doNotFallbackToBaselineRepresentation 
     * @param contentRepresentationPriorityList 
     */
    public v1AssetIdAssetIdGet(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        const result = this.api.v1AssetIdAssetIdGet(assetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * Retrieves an asset by its ID and its version.
     * @param assetId the ID of the asset to retrieve.
     * @param version the version of the asset to retrieve.
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     * @param doNotFallbackToBaselineRepresentation 
     * @param contentRepresentationPriorityList 
     */
    public v1AssetIdAssetIdVersionVersionGetWithHttpInfo(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const result = this.api.v1AssetIdAssetIdVersionVersionGetWithHttpInfo(assetId, version, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * Retrieves an asset by its ID and its version.
     * @param assetId the ID of the asset to retrieve.
     * @param version the version of the asset to retrieve.
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     * @param doNotFallbackToBaselineRepresentation 
     * @param contentRepresentationPriorityList 
     */
    public v1AssetIdAssetIdVersionVersionGet(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        const result = this.api.v1AssetIdAssetIdVersionVersionGet(assetId, version, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * @param assetVersionId 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public v1AssetVersionIdAssetVersionIdGetWithHttpInfo(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const result = this.api.v1AssetVersionIdAssetVersionIdGetWithHttpInfo(assetVersionId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * @param assetVersionId 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public v1AssetVersionIdAssetVersionIdGet(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        const result = this.api.v1AssetVersionIdAssetVersionIdGet(assetVersionId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * Retrieves an asset by its mar (moderation agnostic) hash and mar (moderation agnostic) checksum.
     * @param marAssetHash The mar (moderation agnostic) hash of the asset to retrieve.
     * @param marCheckSum The mar (moderation agnostic) checksum of the asset to retrieve.
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const result = this.api.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(marAssetHash, marCheckSum, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * Retrieves an asset by its mar (moderation agnostic) hash and mar (moderation agnostic) checksum.
     * @param marAssetHash The mar (moderation agnostic) hash of the asset to retrieve.
     * @param marCheckSum The mar (moderation agnostic) checksum of the asset to retrieve.
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        const result = this.api.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash, marCheckSum, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * @param userAssetId 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public v1UserAssetIdUserAssetIdGetWithHttpInfo(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const result = this.api.v1UserAssetIdUserAssetIdGetWithHttpInfo(userAssetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * @param userAssetId 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public v1UserAssetIdUserAssetIdGet(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        const result = this.api.v1UserAssetIdUserAssetIdGet(userAssetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param robloxPlaceId 
     * @param accept 
     * @param robloxBrowserAssetRequest 
     * @param assetRequestItems 
     */
    public v1AssetsBatchPostWithHttpInfo(robloxPlaceId: number, accept: string, robloxBrowserAssetRequest: string, assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>, _options?: Configuration): Promise<HttpInfo<Array<RobloxWebAssetsIAssetResponseItem>>> {
        const result = this.api.v1AssetsBatchPostWithHttpInfo(robloxPlaceId, accept, robloxBrowserAssetRequest, assetRequestItems, _options);
        return result.toPromise();
    }

    /**
     * @param robloxPlaceId 
     * @param accept 
     * @param robloxBrowserAssetRequest 
     * @param assetRequestItems 
     */
    public v1AssetsBatchPost(robloxPlaceId: number, accept: string, robloxBrowserAssetRequest: string, assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>, _options?: Configuration): Promise<Array<RobloxWebAssetsIAssetResponseItem>> {
        const result = this.api.v1AssetsBatchPost(robloxPlaceId, accept, robloxBrowserAssetRequest, assetRequestItems, _options);
        return result.toPromise();
    }


}



