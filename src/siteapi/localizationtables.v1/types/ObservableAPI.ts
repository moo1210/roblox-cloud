import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxInGameContentTablesClientGameLocation } from '../models/RobloxInGameContentTablesClientGameLocation';
import { RobloxLocalizationTablesApiAutoLocalizationMetadataResponse } from '../models/RobloxLocalizationTablesApiAutoLocalizationMetadataResponse';
import { RobloxLocalizationTablesApiCreateTableRequest } from '../models/RobloxLocalizationTablesApiCreateTableRequest';
import { RobloxLocalizationTablesApiCreateTableResponse } from '../models/RobloxLocalizationTablesApiCreateTableResponse';
import { RobloxLocalizationTablesApiCursorEntryIdentifier } from '../models/RobloxLocalizationTablesApiCursorEntryIdentifier';
import { RobloxLocalizationTablesApiEntry } from '../models/RobloxLocalizationTablesApiEntry';
import { RobloxLocalizationTablesApiEntryIdentifier } from '../models/RobloxLocalizationTablesApiEntryIdentifier';
import { RobloxLocalizationTablesApiEntryIdentifierWithTranslation } from '../models/RobloxLocalizationTablesApiEntryIdentifierWithTranslation';
import { RobloxLocalizationTablesApiEntryMetadata } from '../models/RobloxLocalizationTablesApiEntryMetadata';
import { RobloxLocalizationTablesApiEntryOperationLimits } from '../models/RobloxLocalizationTablesApiEntryOperationLimits';
import { RobloxLocalizationTablesApiEntryTranslationFeedback } from '../models/RobloxLocalizationTablesApiEntryTranslationFeedback';
import { RobloxLocalizationTablesApiEntryTranslationHistoryPaged } from '../models/RobloxLocalizationTablesApiEntryTranslationHistoryPaged';
import { RobloxLocalizationTablesApiError } from '../models/RobloxLocalizationTablesApiError';
import { RobloxLocalizationTablesApiFailedEntry } from '../models/RobloxLocalizationTablesApiFailedEntry';
import { RobloxLocalizationTablesApiFailedEntryTranslationHistoryPaged } from '../models/RobloxLocalizationTablesApiFailedEntryTranslationHistoryPaged';
import { RobloxLocalizationTablesApiGameAutolocalizationInformationResponse } from '../models/RobloxLocalizationTablesApiGameAutolocalizationInformationResponse';
import { RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse } from '../models/RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse';
import { RobloxLocalizationTablesApiGetLimitsResponse } from '../models/RobloxLocalizationTablesApiGetLimitsResponse';
import { RobloxLocalizationTablesApiGetTableEntriesPagedResponse } from '../models/RobloxLocalizationTablesApiGetTableEntriesPagedResponse';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse';
import { RobloxLocalizationTablesApiGetTableEntryCountResponse } from '../models/RobloxLocalizationTablesApiGetTableEntryCountResponse';
import { RobloxLocalizationTablesApiGetTableResponse } from '../models/RobloxLocalizationTablesApiGetTableResponse';
import { RobloxLocalizationTablesApiLanguage } from '../models/RobloxLocalizationTablesApiLanguage';
import { RobloxLocalizationTablesApiLanguageTranslationCount } from '../models/RobloxLocalizationTablesApiLanguageTranslationCount';
import { RobloxLocalizationTablesApiLocalizationTablesMetadataResponse } from '../models/RobloxLocalizationTablesApiLocalizationTablesMetadataResponse';
import { RobloxLocalizationTablesApiModifiedEntry } from '../models/RobloxLocalizationTablesApiModifiedEntry';
import { RobloxLocalizationTablesApiPatchEntry } from '../models/RobloxLocalizationTablesApiPatchEntry';
import { RobloxLocalizationTablesApiPatchTranslation } from '../models/RobloxLocalizationTablesApiPatchTranslation';
import { RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest } from '../models/RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest';
import { RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest } from '../models/RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest';
import { RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest } from '../models/RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest';
import { RobloxLocalizationTablesApiTableOperationLimits } from '../models/RobloxLocalizationTablesApiTableOperationLimits';
import { RobloxLocalizationTablesApiTranslation } from '../models/RobloxLocalizationTablesApiTranslation';
import { RobloxLocalizationTablesApiTranslationHistory } from '../models/RobloxLocalizationTablesApiTranslationHistory';
import { RobloxLocalizationTablesApiTranslator } from '../models/RobloxLocalizationTablesApiTranslator';
import { RobloxLocalizationTablesApiUpdateTableContentsRequest } from '../models/RobloxLocalizationTablesApiUpdateTableContentsRequest';
import { RobloxLocalizationTablesApiUpdateTableContentsResponse } from '../models/RobloxLocalizationTablesApiUpdateTableContentsResponse';
import { RobloxLocalizationtablesLocalizationtablesV1ChangeAgent } from '../models/RobloxLocalizationtablesLocalizationtablesV1ChangeAgent';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage';

import { AutoLocalizationTableApiRequestFactory, AutoLocalizationTableApiResponseProcessor} from "../apis/AutoLocalizationTableApi";
export class ObservableAutoLocalizationTableApi {
    private requestFactory: AutoLocalizationTableApiRequestFactory;
    private responseProcessor: AutoLocalizationTableApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AutoLocalizationTableApiRequestFactory,
        responseProcessor?: AutoLocalizationTableApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutoLocalizationTableApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutoLocalizationTableApiResponseProcessor();
    }

    /**
     * Generates localization asset of a game.
     * @param gameId The game id.
     */
    public v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostWithHttpInfo(gameId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost(gameId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates localization asset of a game.
     * @param gameId The game id.
     */
    public v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost(gameId: number, _options?: Configuration): Observable<any> {
        return this.v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostWithHttpInfo(gameId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Enqueues an event to flush the auto scraped entries which doesn\'t have translations.
     * @param gameId The id of the game.
     * @param request 
     */
    public v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostWithHttpInfo(gameId: number, request: RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost(gameId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enqueues an event to flush the auto scraped entries which doesn\'t have translations.
     * @param gameId The id of the game.
     * @param request 
     */
    public v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost(gameId: number, request: RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest, _options?: Configuration): Observable<any> {
        return this.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostWithHttpInfo(gameId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { AutolocalizationApiRequestFactory, AutolocalizationApiResponseProcessor} from "../apis/AutolocalizationApi";
export class ObservableAutolocalizationApi {
    private requestFactory: AutolocalizationApiRequestFactory;
    private responseProcessor: AutolocalizationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AutolocalizationApiRequestFactory,
        responseProcessor?: AutolocalizationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutolocalizationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutolocalizationApiResponseProcessor();
    }

    /**
     * @param gameId 
     * @param request 
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePatchWithHttpInfo(gameId: number, request: RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1AutolocalizationGamesGameIdAutolocalizationtablePatch(gameId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AutolocalizationGamesGameIdAutolocalizationtablePatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param gameId 
     * @param request 
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePatch(gameId: number, request: RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest, _options?: Configuration): Observable<any> {
        return this.v1AutolocalizationGamesGameIdAutolocalizationtablePatchWithHttpInfo(gameId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param gameId 
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePostWithHttpInfo(gameId: number, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiGameAutolocalizationInformationResponse>> {
        const requestContextPromise = this.requestFactory.v1AutolocalizationGamesGameIdAutolocalizationtablePost(gameId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AutolocalizationGamesGameIdAutolocalizationtablePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param gameId 
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePost(gameId: number, _options?: Configuration): Observable<RobloxLocalizationTablesApiGameAutolocalizationInformationResponse> {
        return this.v1AutolocalizationGamesGameIdAutolocalizationtablePostWithHttpInfo(gameId, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiGameAutolocalizationInformationResponse>) => apiResponse.data));
    }

    /**
     * Sets a game\'s auto-localization related settings
     * @param gameId The id of the game.
     * @param request The request body.
     */
    public v1AutolocalizationGamesGameIdSettingsPatchWithHttpInfo(gameId: number, request: RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1AutolocalizationGamesGameIdSettingsPatch(gameId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AutolocalizationGamesGameIdSettingsPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets a game\'s auto-localization related settings
     * @param gameId The id of the game.
     * @param request The request body.
     */
    public v1AutolocalizationGamesGameIdSettingsPatch(gameId: number, request: RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest, _options?: Configuration): Observable<any> {
        return this.v1AutolocalizationGamesGameIdSettingsPatchWithHttpInfo(gameId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Metadata for AutoLocalization Configuration
     */
    public v1AutolocalizationMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiAutoLocalizationMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1AutolocalizationMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AutolocalizationMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Metadata for AutoLocalization Configuration
     */
    public v1AutolocalizationMetadataGet(_options?: Configuration): Observable<RobloxLocalizationTablesApiAutoLocalizationMetadataResponse> {
        return this.v1AutolocalizationMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiAutoLocalizationMetadataResponse>) => apiResponse.data));
    }

}

import { LocalizationTableApiRequestFactory, LocalizationTableApiResponseProcessor} from "../apis/LocalizationTableApi";
export class ObservableLocalizationTableApi {
    private requestFactory: LocalizationTableApiRequestFactory;
    private responseProcessor: LocalizationTableApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocalizationTableApiRequestFactory,
        responseProcessor?: LocalizationTableApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocalizationTableApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocalizationTableApiResponseProcessor();
    }

    /**
     * Gets the supported language codes that can be used by localization tables.
     */
    public v1LocalizationTableAvailableLanguagesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableAvailableLanguagesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableAvailableLanguagesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the supported language codes that can be used by localization tables.
     */
    public v1LocalizationTableAvailableLanguagesGet(_options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage> {
        return this.v1LocalizationTableAvailableLanguagesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage>) => apiResponse.data));
    }

    /**
     * Get limits for translation table entries operations
     */
    public v1LocalizationTableLimitsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiGetLimitsResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableLimitsGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableLimitsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get limits for translation table entries operations
     */
    public v1LocalizationTableLimitsGet(_options?: Configuration): Observable<RobloxLocalizationTablesApiGetLimitsResponse> {
        return this.v1LocalizationTableLimitsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiGetLimitsResponse>) => apiResponse.data));
    }

    /**
     * Get metadata for localization UI
     */
    public v1LocalizationTableMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiLocalizationTablesMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get metadata for localization UI
     */
    public v1LocalizationTableMetadataGet(_options?: Configuration): Observable<RobloxLocalizationTablesApiLocalizationTablesMetadataResponse> {
        return this.v1LocalizationTableMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiLocalizationTablesMetadataResponse>) => apiResponse.data));
    }

    /**
     * Get table information by the assetId of the table.
     * @param assetId The asset id associated with the table.
     */
    public v1LocalizationTableTablesAssetIdGetWithHttpInfo(assetId: number, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiGetTableResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableTablesAssetIdGet(assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableTablesAssetIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get table information by the assetId of the table.
     * @param assetId The asset id associated with the table.
     */
    public v1LocalizationTableTablesAssetIdGet(assetId: number, _options?: Configuration): Observable<RobloxLocalizationTablesApiGetTableResponse> {
        return this.v1LocalizationTableTablesAssetIdGetWithHttpInfo(assetId, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiGetTableResponse>) => apiResponse.data));
    }

    /**
     * Creates a Localization Table with the given data.
     * @param request 
     */
    public v1LocalizationTableTablesPostWithHttpInfo(request: RobloxLocalizationTablesApiCreateTableRequest, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiCreateTableResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableTablesPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableTablesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Localization Table with the given data.
     * @param request 
     */
    public v1LocalizationTableTablesPost(request: RobloxLocalizationTablesApiCreateTableRequest, _options?: Configuration): Observable<RobloxLocalizationTablesApiCreateTableResponse> {
        return this.v1LocalizationTableTablesPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiCreateTableResponse>) => apiResponse.data));
    }

    /**
     * Gets a batch of entries for a table.
     * @param tableId 
     * @param cursor If null, there are no more entries in the table and you\&#39;ve reached the last page.
     * @param gameId 
     */
    public v1LocalizationTableTablesTableIdEntriesGetWithHttpInfo(tableId: string, cursor?: string, gameId?: number, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesPagedResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableTablesTableIdEntriesGet(tableId, cursor, gameId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableTablesTableIdEntriesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a batch of entries for a table.
     * @param tableId 
     * @param cursor If null, there are no more entries in the table and you\&#39;ve reached the last page.
     * @param gameId 
     */
    public v1LocalizationTableTablesTableIdEntriesGet(tableId: string, cursor?: string, gameId?: number, _options?: Configuration): Observable<RobloxLocalizationTablesApiGetTableEntriesPagedResponse> {
        return this.v1LocalizationTableTablesTableIdEntriesGetWithHttpInfo(tableId, cursor, gameId, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiGetTableEntriesPagedResponse>) => apiResponse.data));
    }

    /**
     * Gets the translation feedback for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry translation feedback lookup.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostWithHttpInfo(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest, gameId?: number, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost(tableId, request, gameId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the translation feedback for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry translation feedback lookup.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest, gameId?: number, _options?: Configuration): Observable<RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse> {
        return this.v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostWithHttpInfo(tableId, request, gameId, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse>) => apiResponse.data));
    }

    /**
     * Gets the translation history for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry history lookup.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationHistoryPostWithHttpInfo(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest, gameId?: number, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost(tableId, request, gameId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableTablesTableIdEntriesTranslationHistoryPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the translation history for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry history lookup.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest, gameId?: number, _options?: Configuration): Observable<RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse> {
        return this.v1LocalizationTableTablesTableIdEntriesTranslationHistoryPostWithHttpInfo(tableId, request, gameId, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse>) => apiResponse.data));
    }

    /**
     * Gets the number of entries in the specified table
     * @param tableId The table id
     * @param gameId The game id
     */
    public v1LocalizationTableTablesTableIdEntryCountGetWithHttpInfo(tableId: string, gameId?: number, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiGetTableEntryCountResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableTablesTableIdEntryCountGet(tableId, gameId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableTablesTableIdEntryCountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the number of entries in the specified table
     * @param tableId The table id
     * @param gameId The game id
     */
    public v1LocalizationTableTablesTableIdEntryCountGet(tableId: string, gameId?: number, _options?: Configuration): Observable<RobloxLocalizationTablesApiGetTableEntryCountResponse> {
        return this.v1LocalizationTableTablesTableIdEntryCountGetWithHttpInfo(tableId, gameId, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiGetTableEntryCountResponse>) => apiResponse.data));
    }

    /**
     * Get table information by the id of the table.
     * @param tableId 
     */
    public v1LocalizationTableTablesTableIdGetWithHttpInfo(tableId: string, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiGetTableResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableTablesTableIdGet(tableId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableTablesTableIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get table information by the id of the table.
     * @param tableId 
     */
    public v1LocalizationTableTablesTableIdGet(tableId: string, _options?: Configuration): Observable<RobloxLocalizationTablesApiGetTableResponse> {
        return this.v1LocalizationTableTablesTableIdGetWithHttpInfo(tableId, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiGetTableResponse>) => apiResponse.data));
    }

    /**
     * Gets the language translation counts for the specified table.  The languages to retrieve must be provided.
     * @param tableId The table id
     * @param locales The locales corresponding to the language translation counts to retrieve. This will return 0 for the translation count of locales that do not exist for the given table.
     * @param gameId The game id
     */
    public v1LocalizationTableTablesTableIdLanguageTranslationCountsGetWithHttpInfo(tableId: string, locales: Array<string>, gameId?: number, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableTablesTableIdLanguageTranslationCountsGet(tableId, locales, gameId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableTablesTableIdLanguageTranslationCountsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the language translation counts for the specified table.  The languages to retrieve must be provided.
     * @param tableId The table id
     * @param locales The locales corresponding to the language translation counts to retrieve. This will return 0 for the translation count of locales that do not exist for the given table.
     * @param gameId The game id
     */
    public v1LocalizationTableTablesTableIdLanguageTranslationCountsGet(tableId: string, locales: Array<string>, gameId?: number, _options?: Configuration): Observable<RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse> {
        return this.v1LocalizationTableTablesTableIdLanguageTranslationCountsGetWithHttpInfo(tableId, locales, gameId, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse>) => apiResponse.data));
    }

    /**
     * Updates the tables contents based on what is provided.
     * @param tableId The table guid for the table to update.
     * @param request The metadata object is optional.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdPatchWithHttpInfo(tableId: string, request: RobloxLocalizationTablesApiUpdateTableContentsRequest, gameId?: number, _options?: Configuration): Observable<HttpInfo<RobloxLocalizationTablesApiUpdateTableContentsResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalizationTableTablesTableIdPatch(tableId, request, gameId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalizationTableTablesTableIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the tables contents based on what is provided.
     * @param tableId The table guid for the table to update.
     * @param request The metadata object is optional.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdPatch(tableId: string, request: RobloxLocalizationTablesApiUpdateTableContentsRequest, gameId?: number, _options?: Configuration): Observable<RobloxLocalizationTablesApiUpdateTableContentsResponse> {
        return this.v1LocalizationTableTablesTableIdPatchWithHttpInfo(tableId, request, gameId, _options).pipe(map((apiResponse: HttpInfo<RobloxLocalizationTablesApiUpdateTableContentsResponse>) => apiResponse.data));
    }

}
