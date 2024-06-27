import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxLocaleApiCountryRegion } from '../models/RobloxLocaleApiCountryRegion';
import { RobloxLocaleApiCountryRegionListResponse } from '../models/RobloxLocaleApiCountryRegionListResponse';
import { RobloxLocaleApiLanguage } from '../models/RobloxLocaleApiLanguage';
import { RobloxLocaleApiSetSupportedLocaleForUserRequest } from '../models/RobloxLocaleApiSetSupportedLocaleForUserRequest';
import { RobloxLocaleApiSuccessResponse } from '../models/RobloxLocaleApiSuccessResponse';
import { RobloxLocaleApiSupportedLocale } from '../models/RobloxLocaleApiSupportedLocale';
import { RobloxLocaleApiSupportedLocaleLocus } from '../models/RobloxLocaleApiSupportedLocaleLocus';
import { RobloxLocaleApiSupportedLocalesResponse } from '../models/RobloxLocaleApiSupportedLocalesResponse';
import { RobloxLocaleApiUserLocaleResponse } from '../models/RobloxLocaleApiUserLocaleResponse';
import { RobloxLocaleApiUserLocalizationLocusLocalesResponse } from '../models/RobloxLocaleApiUserLocalizationLocusLocalesResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus';

import { CountryRegionsApiRequestFactory, CountryRegionsApiResponseProcessor} from "../apis/CountryRegionsApi";
export class ObservableCountryRegionsApi {
    private requestFactory: CountryRegionsApiRequestFactory;
    private responseProcessor: CountryRegionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CountryRegionsApiRequestFactory,
        responseProcessor?: CountryRegionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CountryRegionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CountryRegionsApiResponseProcessor();
    }

    /**
     * Get list of country regions sorted by localized name
     * @param locale 
     */
    public v1CountryRegionsGetWithHttpInfo(locale?: string, _options?: Configuration): Observable<HttpInfo<RobloxLocaleApiCountryRegionListResponse>> {
        const requestContextPromise = this.requestFactory.v1CountryRegionsGet(locale, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CountryRegionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of country regions sorted by localized name
     * @param locale 
     */
    public v1CountryRegionsGet(locale?: string, _options?: Configuration): Observable<RobloxLocaleApiCountryRegionListResponse> {
        return this.v1CountryRegionsGetWithHttpInfo(locale, _options).pipe(map((apiResponse: HttpInfo<RobloxLocaleApiCountryRegionListResponse>) => apiResponse.data));
    }

}

import { LocaleApiRequestFactory, LocaleApiResponseProcessor} from "../apis/LocaleApi";
export class ObservableLocaleApi {
    private requestFactory: LocaleApiRequestFactory;
    private responseProcessor: LocaleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocaleApiRequestFactory,
        responseProcessor?: LocaleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocaleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocaleApiResponseProcessor();
    }

    /**
     * Get list of Supported locales with user locus information.
     * @param displayValueLocale 
     */
    public v1LocalesGetWithHttpInfo(displayValueLocale?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus>> {
        const requestContextPromise = this.requestFactory.v1LocalesGet(displayValueLocale, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of Supported locales with user locus information.
     * @param displayValueLocale 
     */
    public v1LocalesGet(displayValueLocale?: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus> {
        return this.v1LocalesGetWithHttpInfo(displayValueLocale, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus>) => apiResponse.data));
    }

    /**
     * Sets user\'s supported locale.  Null supported locale will clear out user\'s supported locale (set users\' supported locale to null)
     * @param userRequest Supported locale code that needs to be set for user
     */
    public v1LocalesSetUserSupportedLocalePostWithHttpInfo(userRequest: RobloxLocaleApiSetSupportedLocaleForUserRequest, _options?: Configuration): Observable<HttpInfo<RobloxLocaleApiSuccessResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalesSetUserSupportedLocalePost(userRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalesSetUserSupportedLocalePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets user\'s supported locale.  Null supported locale will clear out user\'s supported locale (set users\' supported locale to null)
     * @param userRequest Supported locale code that needs to be set for user
     */
    public v1LocalesSetUserSupportedLocalePost(userRequest: RobloxLocaleApiSetSupportedLocaleForUserRequest, _options?: Configuration): Observable<RobloxLocaleApiSuccessResponse> {
        return this.v1LocalesSetUserSupportedLocalePostWithHttpInfo(userRequest, _options).pipe(map((apiResponse: HttpInfo<RobloxLocaleApiSuccessResponse>) => apiResponse.data));
    }

    /**
     * @param displayValueLocale 
     */
    public v1LocalesSupportedLocalesForCreatorsGetWithHttpInfo(displayValueLocale?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus>> {
        const requestContextPromise = this.requestFactory.v1LocalesSupportedLocalesForCreatorsGet(displayValueLocale, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalesSupportedLocalesForCreatorsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param displayValueLocale 
     */
    public v1LocalesSupportedLocalesForCreatorsGet(displayValueLocale?: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus> {
        return this.v1LocalesSupportedLocalesForCreatorsGetWithHttpInfo(displayValueLocale, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus>) => apiResponse.data));
    }

    /**
     * Get list of supported locales sorted by the Native Name property.
     */
    public v1LocalesSupportedLocalesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxLocaleApiSupportedLocalesResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalesSupportedLocalesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalesSupportedLocalesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of supported locales sorted by the Native Name property.
     */
    public v1LocalesSupportedLocalesGet(_options?: Configuration): Observable<RobloxLocaleApiSupportedLocalesResponse> {
        return this.v1LocalesSupportedLocalesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxLocaleApiSupportedLocalesResponse>) => apiResponse.data));
    }

    /**
     * Gets user locale. If user is absent returns, locale from http request object.
     */
    public v1LocalesUserLocaleGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxLocaleApiUserLocaleResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalesUserLocaleGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalesUserLocaleGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets user locale. If user is absent returns, locale from http request object.
     */
    public v1LocalesUserLocaleGet(_options?: Configuration): Observable<RobloxLocaleApiUserLocaleResponse> {
        return this.v1LocalesUserLocaleGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxLocaleApiUserLocaleResponse>) => apiResponse.data));
    }

    /**
     * Gets each of a user\'s localization locus supported locales. A localization locus supported locale is a page (or group of pages) that  have been defined by the International team which need independent locale support.  If the user is null we will attempt to return the locales appropriate for the user\'s device language.
     */
    public v1LocalesUserLocalizationLocusSupportedLocalesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxLocaleApiUserLocalizationLocusLocalesResponse>> {
        const requestContextPromise = this.requestFactory.v1LocalesUserLocalizationLocusSupportedLocalesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LocalesUserLocalizationLocusSupportedLocalesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets each of a user\'s localization locus supported locales. A localization locus supported locale is a page (or group of pages) that  have been defined by the International team which need independent locale support.  If the user is null we will attempt to return the locales appropriate for the user\'s device language.
     */
    public v1LocalesUserLocalizationLocusSupportedLocalesGet(_options?: Configuration): Observable<RobloxLocaleApiUserLocalizationLocusLocalesResponse> {
        return this.v1LocalesUserLocalizationLocusSupportedLocalesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxLocaleApiUserLocalizationLocusLocalesResponse>) => apiResponse.data));
    }

}
