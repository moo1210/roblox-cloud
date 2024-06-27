import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { ToolBoxServiceAssetTypes } from '../models/ToolBoxServiceAssetTypes';
import { ToolBoxServiceError } from '../models/ToolBoxServiceError';
import { ToolBoxServiceSearchV1Result } from '../models/ToolBoxServiceSearchV1Result';
import { ToolBoxServiceSearchV1ResultItem } from '../models/ToolBoxServiceSearchV1ResultItem';
import { ToolBoxServiceSearchV1ResultQueryFacets } from '../models/ToolBoxServiceSearchV1ResultQueryFacets';
import { ToolBoxServiceSearchV1ResultSpellCheckerResult } from '../models/ToolBoxServiceSearchV1ResultSpellCheckerResult';
import { ToolboxServiceGetHomePageAssetsForSection200Response } from '../models/ToolboxServiceGetHomePageAssetsForSection200Response';

import { ToolBoxServiceApiRequestFactory, ToolBoxServiceApiResponseProcessor} from "../apis/ToolBoxServiceApi";
export class ObservableToolBoxServiceApi {
    private requestFactory: ToolBoxServiceApiRequestFactory;
    private responseProcessor: ToolBoxServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ToolBoxServiceApiRequestFactory,
        responseProcessor?: ToolBoxServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ToolBoxServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ToolBoxServiceApiResponseProcessor();
    }

    /**
     * Get group creations
     * @param ownerId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     */
    public toolboxServiceGetGroupCreationsWithHttpInfo(ownerId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, _options?: Configuration): Observable<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const requestContextPromise = this.requestFactory.toolboxServiceGetGroupCreations(ownerId, assetType, limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceGetGroupCreationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get group creations
     * @param ownerId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     */
    public toolboxServiceGetGroupCreations(ownerId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, _options?: Configuration): Observable<ToolBoxServiceSearchV1Result> {
        return this.toolboxServiceGetGroupCreationsWithHttpInfo(ownerId, assetType, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<ToolBoxServiceSearchV1Result>) => apiResponse.data));
    }

    /**
     * Get home page assets for section
     * @param assetType 
     * @param section 
     * @param includeOnlyVerifiedCreators 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     * @param assetsInCameraVicinity 
     * @param assetsInCameraViewport 
     * @param minPriceInCents 
     * @param maxPriceInCents 
     * @param qualityFilter 
     */
    public toolboxServiceGetHomePageAssetsForSectionWithHttpInfo(assetType: ToolBoxServiceAssetTypes, section: string, includeOnlyVerifiedCreators?: string, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, locale?: string, placeId?: number, developerSegment?: string, assetsInCameraVicinity?: number, assetsInCameraViewport?: number, minPriceInCents?: number, maxPriceInCents?: number, qualityFilter?: string, _options?: Configuration): Observable<HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response>> {
        const requestContextPromise = this.requestFactory.toolboxServiceGetHomePageAssetsForSection(assetType, section, includeOnlyVerifiedCreators, sortOrder, limit, cursor, pageNumber, locale, placeId, developerSegment, assetsInCameraVicinity, assetsInCameraViewport, minPriceInCents, maxPriceInCents, qualityFilter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceGetHomePageAssetsForSectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get home page assets for section
     * @param assetType 
     * @param section 
     * @param includeOnlyVerifiedCreators 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     * @param assetsInCameraVicinity 
     * @param assetsInCameraViewport 
     * @param minPriceInCents 
     * @param maxPriceInCents 
     * @param qualityFilter 
     */
    public toolboxServiceGetHomePageAssetsForSection(assetType: ToolBoxServiceAssetTypes, section: string, includeOnlyVerifiedCreators?: string, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, locale?: string, placeId?: number, developerSegment?: string, assetsInCameraVicinity?: number, assetsInCameraViewport?: number, minPriceInCents?: number, maxPriceInCents?: number, qualityFilter?: string, _options?: Configuration): Observable<ToolboxServiceGetHomePageAssetsForSection200Response> {
        return this.toolboxServiceGetHomePageAssetsForSectionWithHttpInfo(assetType, section, includeOnlyVerifiedCreators, sortOrder, limit, cursor, pageNumber, locale, placeId, developerSegment, assetsInCameraVicinity, assetsInCameraViewport, minPriceInCents, maxPriceInCents, qualityFilter, _options).pipe(map((apiResponse: HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response>) => apiResponse.data));
    }

    /**
     * Get home page configuration for asset type
     * @param assetType 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     */
    public toolboxServiceGetHomePageConfigurationWithHttpInfo(assetType: ToolBoxServiceAssetTypes, locale?: string, placeId?: number, developerSegment?: string, _options?: Configuration): Observable<HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response>> {
        const requestContextPromise = this.requestFactory.toolboxServiceGetHomePageConfiguration(assetType, locale, placeId, developerSegment, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceGetHomePageConfigurationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get home page configuration for asset type
     * @param assetType 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     */
    public toolboxServiceGetHomePageConfiguration(assetType: ToolBoxServiceAssetTypes, locale?: string, placeId?: number, developerSegment?: string, _options?: Configuration): Observable<ToolboxServiceGetHomePageAssetsForSection200Response> {
        return this.toolboxServiceGetHomePageConfigurationWithHttpInfo(assetType, locale, placeId, developerSegment, _options).pipe(map((apiResponse: HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response>) => apiResponse.data));
    }

    /**
     * Get user creations
     * @param userId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     * @param separateModelsAndPackages 
     */
    public toolboxServiceGetUserCreationsWithHttpInfo(userId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, separateModelsAndPackages?: boolean, _options?: Configuration): Observable<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const requestContextPromise = this.requestFactory.toolboxServiceGetUserCreations(userId, assetType, limit, cursor, separateModelsAndPackages, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceGetUserCreationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get user creations
     * @param userId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     * @param separateModelsAndPackages 
     */
    public toolboxServiceGetUserCreations(userId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, separateModelsAndPackages?: boolean, _options?: Configuration): Observable<ToolBoxServiceSearchV1Result> {
        return this.toolboxServiceGetUserCreationsWithHttpInfo(userId, assetType, limit, cursor, separateModelsAndPackages, _options).pipe(map((apiResponse: HttpInfo<ToolBoxServiceSearchV1Result>) => apiResponse.data));
    }

    /**
     * Search for audios
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchAudiosWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const requestContextPromise = this.requestFactory.toolboxServiceSearchAudios(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceSearchAudiosWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for audios
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchAudios(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<ToolBoxServiceSearchV1Result> {
        return this.toolboxServiceSearchAudiosWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options).pipe(map((apiResponse: HttpInfo<ToolBoxServiceSearchV1Result>) => apiResponse.data));
    }

    /**
     * Search for decals
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchDecalsWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const requestContextPromise = this.requestFactory.toolboxServiceSearchDecals(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceSearchDecalsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for decals
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchDecals(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<ToolBoxServiceSearchV1Result> {
        return this.toolboxServiceSearchDecalsWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options).pipe(map((apiResponse: HttpInfo<ToolBoxServiceSearchV1Result>) => apiResponse.data));
    }

    /**
     * Search for assets
     * @param assetType 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param assetSubTypes 
     * @param excludeAssetSubTypes 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param searchSource 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     * @param qualityFilter 
     * @param robloxPlaceId 
     */
    public toolboxServiceSearchGetAssetsWithHttpInfo(assetType: ToolBoxServiceAssetTypes, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, assetSubTypes?: string, excludeAssetSubTypes?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, searchSource?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, qualityFilter?: string, robloxPlaceId?: number, _options?: Configuration): Observable<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const requestContextPromise = this.requestFactory.toolboxServiceSearchGetAssets(assetType, sortOrder, limit, cursor, pageNumber, keyword, assetSubTypes, excludeAssetSubTypes, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, searchSource, querySource, originalUserQuery, originalCorrection, qualityFilter, robloxPlaceId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceSearchGetAssetsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for assets
     * @param assetType 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param assetSubTypes 
     * @param excludeAssetSubTypes 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param searchSource 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     * @param qualityFilter 
     * @param robloxPlaceId 
     */
    public toolboxServiceSearchGetAssets(assetType: ToolBoxServiceAssetTypes, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, assetSubTypes?: string, excludeAssetSubTypes?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, searchSource?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, qualityFilter?: string, robloxPlaceId?: number, _options?: Configuration): Observable<ToolBoxServiceSearchV1Result> {
        return this.toolboxServiceSearchGetAssetsWithHttpInfo(assetType, sortOrder, limit, cursor, pageNumber, keyword, assetSubTypes, excludeAssetSubTypes, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, searchSource, querySource, originalUserQuery, originalCorrection, qualityFilter, robloxPlaceId, _options).pipe(map((apiResponse: HttpInfo<ToolBoxServiceSearchV1Result>) => apiResponse.data));
    }

    /**
     * Search for meshes
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchMeshesWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const requestContextPromise = this.requestFactory.toolboxServiceSearchMeshes(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceSearchMeshesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for meshes
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchMeshes(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<ToolBoxServiceSearchV1Result> {
        return this.toolboxServiceSearchMeshesWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options).pipe(map((apiResponse: HttpInfo<ToolBoxServiceSearchV1Result>) => apiResponse.data));
    }

    /**
     * Search for plugins
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchPluginsWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const requestContextPromise = this.requestFactory.toolboxServiceSearchPlugins(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceSearchPluginsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for plugins
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchPlugins(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<ToolBoxServiceSearchV1Result> {
        return this.toolboxServiceSearchPluginsWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options).pipe(map((apiResponse: HttpInfo<ToolBoxServiceSearchV1Result>) => apiResponse.data));
    }

    /**
     * Search for videos
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchVideosWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const requestContextPromise = this.requestFactory.toolboxServiceSearchVideos(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toolboxServiceSearchVideosWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for videos
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchVideos(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Observable<ToolBoxServiceSearchV1Result> {
        return this.toolboxServiceSearchVideosWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options).pipe(map((apiResponse: HttpInfo<ToolBoxServiceSearchV1Result>) => apiResponse.data));
    }

}
