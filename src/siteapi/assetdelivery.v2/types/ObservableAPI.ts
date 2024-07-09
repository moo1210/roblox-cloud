import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxWebAssetsAssetContentRepresentationSpecifier } from '../models/RobloxWebAssetsAssetContentRepresentationSpecifier';
import { RobloxWebAssetsAssetFormatLocation } from '../models/RobloxWebAssetsAssetFormatLocation';
import { RobloxWebAssetsBatchAssetRequestItem } from '../models/RobloxWebAssetsBatchAssetRequestItem';
import { RobloxWebAssetsIAssetItemError } from '../models/RobloxWebAssetsIAssetItemError';
import { RobloxWebAssetsIAssetResponseItem } from '../models/RobloxWebAssetsIAssetResponseItem';
import { RobloxWebAssetsIAssetResponseItemV2 } from '../models/RobloxWebAssetsIAssetResponseItemV2';

import { AssetFetchV2ApiRequestFactory, AssetFetchV2ApiResponseProcessor} from "../apis/AssetFetchV2Api";
export class ObservableAssetFetchV2Api {
    private requestFactory: AssetFetchV2ApiRequestFactory;
    private responseProcessor: AssetFetchV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetFetchV2ApiRequestFactory,
        responseProcessor?: AssetFetchV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetFetchV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetFetchV2ApiResponseProcessor();
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
    public v2AliasAliasGetWithHttpInfo(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const requestContextPromise = this.requestFactory.v2AliasAliasGet(alias, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AliasAliasGetWithHttpInfo(rsp)));
            }));
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
    public v2AliasAliasGet(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItemV2> {
        return this.v2AliasAliasGetWithHttpInfo(alias, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItemV2>) => apiResponse.data));
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
    public v2AssetGetWithHttpInfo(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const requestContextPromise = this.requestFactory.v2AssetGet(acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, id, userAssetId, assetVersionId, version, universeId, clientInsert, scriptinsert, modulePlaceId, serverplaceid, assetName, hash, marAssetHash, marCheckSum, expectedAssetType, skipSigningScripts, permissionContext, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AssetGetWithHttpInfo(rsp)));
            }));
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
    public v2AssetGet(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItemV2> {
        return this.v2AssetGetWithHttpInfo(acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, id, userAssetId, assetVersionId, version, universeId, clientInsert, scriptinsert, modulePlaceId, serverplaceid, assetName, hash, marAssetHash, marCheckSum, expectedAssetType, skipSigningScripts, permissionContext, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItemV2>) => apiResponse.data));
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
    public v2AssetIdAssetIdGetWithHttpInfo(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const requestContextPromise = this.requestFactory.v2AssetIdAssetIdGet(assetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AssetIdAssetIdGetWithHttpInfo(rsp)));
            }));
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
    public v2AssetIdAssetIdGet(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItemV2> {
        return this.v2AssetIdAssetIdGetWithHttpInfo(assetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItemV2>) => apiResponse.data));
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
    public v2AssetIdAssetIdVersionVersionGetWithHttpInfo(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const requestContextPromise = this.requestFactory.v2AssetIdAssetIdVersionVersionGet(assetId, version, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AssetIdAssetIdVersionVersionGetWithHttpInfo(rsp)));
            }));
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
    public v2AssetIdAssetIdVersionVersionGet(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItemV2> {
        return this.v2AssetIdAssetIdVersionVersionGetWithHttpInfo(assetId, version, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItemV2>) => apiResponse.data));
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
    public v2AssetVersionIdAssetVersionIdGetWithHttpInfo(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const requestContextPromise = this.requestFactory.v2AssetVersionIdAssetVersionIdGet(assetVersionId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AssetVersionIdAssetVersionIdGetWithHttpInfo(rsp)));
            }));
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
    public v2AssetVersionIdAssetVersionIdGet(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItemV2> {
        return this.v2AssetVersionIdAssetVersionIdGetWithHttpInfo(assetVersionId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItemV2>) => apiResponse.data));
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
    public v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const requestContextPromise = this.requestFactory.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash, marCheckSum, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(rsp)));
            }));
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
    public v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItem> {
        return this.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(marAssetHash, marCheckSum, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItem>) => apiResponse.data));
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
    public v2UserAssetIdUserAssetIdGetWithHttpInfo(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItemV2>> {
        const requestContextPromise = this.requestFactory.v2UserAssetIdUserAssetIdGet(userAssetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UserAssetIdUserAssetIdGetWithHttpInfo(rsp)));
            }));
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
    public v2UserAssetIdUserAssetIdGet(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItemV2> {
        return this.v2UserAssetIdUserAssetIdGetWithHttpInfo(userAssetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItemV2>) => apiResponse.data));
    }

}

import { BatchV2ApiRequestFactory, BatchV2ApiResponseProcessor} from "../apis/BatchV2Api";
export class ObservableBatchV2Api {
    private requestFactory: BatchV2ApiRequestFactory;
    private responseProcessor: BatchV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchV2ApiRequestFactory,
        responseProcessor?: BatchV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchV2ApiResponseProcessor();
    }

    /**
     * @param robloxPlaceId 
     * @param accept 
     * @param robloxBrowserAssetRequest 
     * @param assetRequestItems 
     */
    public v2AssetsBatchPostWithHttpInfo(robloxPlaceId: number, accept: string, robloxBrowserAssetRequest: string, assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>, _options?: Configuration): Observable<HttpInfo<Array<RobloxWebAssetsIAssetResponseItemV2>>> {
        const requestContextPromise = this.requestFactory.v2AssetsBatchPost(robloxPlaceId, accept, robloxBrowserAssetRequest, assetRequestItems, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AssetsBatchPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param robloxPlaceId 
     * @param accept 
     * @param robloxBrowserAssetRequest 
     * @param assetRequestItems 
     */
    public v2AssetsBatchPost(robloxPlaceId: number, accept: string, robloxBrowserAssetRequest: string, assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>, _options?: Configuration): Observable<Array<RobloxWebAssetsIAssetResponseItemV2>> {
        return this.v2AssetsBatchPostWithHttpInfo(robloxPlaceId, accept, robloxBrowserAssetRequest, assetRequestItems, _options).pipe(map((apiResponse: HttpInfo<Array<RobloxWebAssetsIAssetResponseItemV2>>) => apiResponse.data));
    }

}
