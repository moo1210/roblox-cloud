import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxWebAssetsAssetContentRepresentationSpecifier } from '../models/RobloxWebAssetsAssetContentRepresentationSpecifier';
import { RobloxWebAssetsAssetFormatLocation } from '../models/RobloxWebAssetsAssetFormatLocation';
import { RobloxWebAssetsBatchAssetRequestItem } from '../models/RobloxWebAssetsBatchAssetRequestItem';
import { RobloxWebAssetsIAssetItemError } from '../models/RobloxWebAssetsIAssetItemError';
import { RobloxWebAssetsIAssetResponseItem } from '../models/RobloxWebAssetsIAssetResponseItem';
import { RobloxWebAssetsIAssetResponseItemV2 } from '../models/RobloxWebAssetsIAssetResponseItemV2';
import { ObservableAssetFetchV2Api } from './ObservableAPI';

import { AssetFetchV2ApiRequestFactory, AssetFetchV2ApiResponseProcessor} from "../apis/AssetFetchV2Api";
export class PromiseAssetFetchV2Api {
    private api: ObservableAssetFetchV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetFetchV2ApiRequestFactory,
        responseProcessor?: AssetFetchV2ApiResponseProcessor
    ) {
        this.api = new ObservableAssetFetchV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param alias 
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
    public v2AliasAliasGetWithHttpInfo(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const result = this.api.v2AliasAliasGetWithHttpInfo(alias, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * @param alias 
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
    public v2AliasAliasGet(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        const result = this.api.v2AliasAliasGet(alias, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
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
    public v2AssetGetWithHttpInfo(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const result = this.api.v2AssetGetWithHttpInfo(acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, id, userAssetId, assetVersionId, version, universeId, clientInsert, scriptinsert, modulePlaceId, serverplaceid, assetName, hash, marAssetHash, marCheckSum, expectedAssetType, skipSigningScripts, permissionContext, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
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
    public v2AssetGet(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        const result = this.api.v2AssetGet(acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, id, userAssetId, assetVersionId, version, universeId, clientInsert, scriptinsert, modulePlaceId, serverplaceid, assetName, hash, marAssetHash, marCheckSum, expectedAssetType, skipSigningScripts, permissionContext, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * @param assetId 
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
    public v2AssetIdAssetIdGetWithHttpInfo(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const result = this.api.v2AssetIdAssetIdGetWithHttpInfo(assetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * @param assetId 
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
    public v2AssetIdAssetIdGet(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        const result = this.api.v2AssetIdAssetIdGet(assetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * @param assetId 
     * @param version 
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
    public v2AssetIdAssetIdVersionVersionGetWithHttpInfo(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const result = this.api.v2AssetIdAssetIdVersionVersionGetWithHttpInfo(assetId, version, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
        return result.toPromise();
    }

    /**
     * @param assetId 
     * @param version 
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
    public v2AssetIdAssetIdVersionVersionGet(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        const result = this.api.v2AssetIdAssetIdVersionVersionGet(assetId, version, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);
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
    public v2AssetVersionIdAssetVersionIdGetWithHttpInfo(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const result = this.api.v2AssetVersionIdAssetVersionIdGetWithHttpInfo(assetVersionId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
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
    public v2AssetVersionIdAssetVersionIdGet(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        const result = this.api.v2AssetVersionIdAssetVersionIdGet(assetVersionId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * @param marAssetHash 
     * @param marCheckSum 
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
    public v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const result = this.api.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(marAssetHash, marCheckSum, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }

    /**
     * @param marAssetHash 
     * @param marCheckSum 
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
    public v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItem> {
        const result = this.api.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash, marCheckSum, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
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
    public v2UserAssetIdUserAssetIdGetWithHttpInfo(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const result = this.api.v2UserAssetIdUserAssetIdGetWithHttpInfo(userAssetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
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
    public v2UserAssetIdUserAssetIdGet(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RobloxWebAssetsIAssetResponseItemV2> {
        const result = this.api.v2UserAssetIdUserAssetIdGet(userAssetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);
        return result.toPromise();
    }


}



import { ObservableBatchV2Api } from './ObservableAPI';

import { BatchV2ApiRequestFactory, BatchV2ApiResponseProcessor} from "../apis/BatchV2Api";
export class PromiseBatchV2Api {
    private api: ObservableBatchV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchV2ApiRequestFactory,
        responseProcessor?: BatchV2ApiResponseProcessor
    ) {
        this.api = new ObservableBatchV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param robloxPlaceId 
     * @param accept 
     * @param robloxBrowserAssetRequest 
     * @param assetRequestItems 
     */
    public v2AssetsBatchPostWithHttpInfo(robloxPlaceId: number, accept: string, robloxBrowserAssetRequest: string, assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>, _options?: Configuration): Promise<HttpInfo<Array<RobloxWebAssetsIAssetResponseItemV2>>> {
        const result = this.api.v2AssetsBatchPostWithHttpInfo(robloxPlaceId, accept, robloxBrowserAssetRequest, assetRequestItems, _options);
        return result.toPromise();
    }

    /**
     * @param robloxPlaceId 
     * @param accept 
     * @param robloxBrowserAssetRequest 
     * @param assetRequestItems 
     */
    public v2AssetsBatchPost(robloxPlaceId: number, accept: string, robloxBrowserAssetRequest: string, assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>, _options?: Configuration): Promise<Array<RobloxWebAssetsIAssetResponseItemV2>> {
        const result = this.api.v2AssetsBatchPost(robloxPlaceId, accept, robloxBrowserAssetRequest, assetRequestItems, _options);
        return result.toPromise();
    }


}



