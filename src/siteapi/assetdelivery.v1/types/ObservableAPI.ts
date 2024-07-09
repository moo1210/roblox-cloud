import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxWebAssetsAssetContentRepresentationSpecifier } from '../models/RobloxWebAssetsAssetContentRepresentationSpecifier';
import { RobloxWebAssetsBatchAssetRequestItem } from '../models/RobloxWebAssetsBatchAssetRequestItem';
import { RobloxWebAssetsIAssetItemError } from '../models/RobloxWebAssetsIAssetItemError';
import { RobloxWebAssetsIAssetResponseItem } from '../models/RobloxWebAssetsIAssetResponseItem';

import { AssetFetchApiRequestFactory, AssetFetchApiResponseProcessor} from "../apis/AssetFetchApi";
export class ObservableAssetFetchApi {
    private requestFactory: AssetFetchApiRequestFactory;
    private responseProcessor: AssetFetchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetFetchApiRequestFactory,
        responseProcessor?: AssetFetchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetFetchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetFetchApiResponseProcessor();
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
    public v1AliasAliasGetWithHttpInfo(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const requestContextPromise = this.requestFactory.v1AliasAliasGet(alias, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AliasAliasGetWithHttpInfo(rsp)));
            }));
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
    public v1AliasAliasGet(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItem> {
        return this.v1AliasAliasGetWithHttpInfo(alias, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItem>) => apiResponse.data));
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
    public v1AssetGetWithHttpInfo(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v1AssetGet(acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, id, userAssetId, assetVersionId, version, universeId, clientInsert, scriptinsert, modulePlaceId, serverplaceid, assetName, hash, marAssetHash, marCheckSum, expectedAssetType, skipSigningScripts, permissionContext, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetGetWithHttpInfo(rsp)));
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
    public v1AssetGet(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<void> {
        return this.v1AssetGetWithHttpInfo(acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, id, userAssetId, assetVersionId, version, universeId, clientInsert, scriptinsert, modulePlaceId, serverplaceid, assetName, hash, marAssetHash, marCheckSum, expectedAssetType, skipSigningScripts, permissionContext, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public v1AssetIdAssetIdGetWithHttpInfo(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const requestContextPromise = this.requestFactory.v1AssetIdAssetIdGet(assetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetIdAssetIdGetWithHttpInfo(rsp)));
            }));
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
    public v1AssetIdAssetIdGet(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItem> {
        return this.v1AssetIdAssetIdGetWithHttpInfo(assetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItem>) => apiResponse.data));
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
    public v1AssetIdAssetIdVersionVersionGetWithHttpInfo(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const requestContextPromise = this.requestFactory.v1AssetIdAssetIdVersionVersionGet(assetId, version, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetIdAssetIdVersionVersionGetWithHttpInfo(rsp)));
            }));
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
    public v1AssetIdAssetIdVersionVersionGet(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItem> {
        return this.v1AssetIdAssetIdVersionVersionGetWithHttpInfo(assetId, version, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, doNotFallbackToBaselineRepresentation, contentRepresentationPriorityList, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItem>) => apiResponse.data));
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
    public v1AssetVersionIdAssetVersionIdGetWithHttpInfo(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const requestContextPromise = this.requestFactory.v1AssetVersionIdAssetVersionIdGet(assetVersionId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetVersionIdAssetVersionIdGetWithHttpInfo(rsp)));
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
    public v1AssetVersionIdAssetVersionIdGet(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItem> {
        return this.v1AssetVersionIdAssetVersionIdGetWithHttpInfo(assetVersionId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItem>) => apiResponse.data));
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
    public v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const requestContextPromise = this.requestFactory.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash, marCheckSum, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(rsp)));
            }));
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
    public v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItem> {
        return this.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(marAssetHash, marCheckSum, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItem>) => apiResponse.data));
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
    public v1UserAssetIdUserAssetIdGetWithHttpInfo(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebAssetsIAssetResponseItem>> {
        const requestContextPromise = this.requestFactory.v1UserAssetIdUserAssetIdGet(userAssetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserAssetIdUserAssetIdGetWithHttpInfo(rsp)));
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
    public v1UserAssetIdUserAssetIdGet(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Observable<RobloxWebAssetsIAssetResponseItem> {
        return this.v1UserAssetIdUserAssetIdGetWithHttpInfo(userAssetId, acceptEncoding, robloxPlaceId, assetType, accept, assetFormat, robloxAssetFormat, skipSigningScripts, clientInsert, scriptinsert, modulePlaceId, serverplaceid, expectedAssetType, _options).pipe(map((apiResponse: HttpInfo<RobloxWebAssetsIAssetResponseItem>) => apiResponse.data));
    }

}

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * @param robloxPlaceId 
     * @param accept 
     * @param robloxBrowserAssetRequest 
     * @param assetRequestItems 
     */
    public v1AssetsBatchPostWithHttpInfo(robloxPlaceId: number, accept: string, robloxBrowserAssetRequest: string, assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>, _options?: Configuration): Observable<HttpInfo<Array<RobloxWebAssetsIAssetResponseItem>>> {
        const requestContextPromise = this.requestFactory.v1AssetsBatchPost(robloxPlaceId, accept, robloxBrowserAssetRequest, assetRequestItems, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetsBatchPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param robloxPlaceId 
     * @param accept 
     * @param robloxBrowserAssetRequest 
     * @param assetRequestItems 
     */
    public v1AssetsBatchPost(robloxPlaceId: number, accept: string, robloxBrowserAssetRequest: string, assetRequestItems: Array<RobloxWebAssetsBatchAssetRequestItem>, _options?: Configuration): Observable<Array<RobloxWebAssetsIAssetResponseItem>> {
        return this.v1AssetsBatchPostWithHttpInfo(robloxPlaceId, accept, robloxBrowserAssetRequest, assetRequestItems, _options).pipe(map((apiResponse: HttpInfo<Array<RobloxWebAssetsIAssetResponseItem>>) => apiResponse.data));
    }

}
