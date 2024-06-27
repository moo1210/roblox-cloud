import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

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
import { ObservableCountryRegionsApi } from './ObservableAPI';

import { CountryRegionsApiRequestFactory, CountryRegionsApiResponseProcessor} from "../apis/CountryRegionsApi";
export class PromiseCountryRegionsApi {
    private api: ObservableCountryRegionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CountryRegionsApiRequestFactory,
        responseProcessor?: CountryRegionsApiResponseProcessor
    ) {
        this.api = new ObservableCountryRegionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of country regions sorted by localized name
     * @param locale 
     */
    public v1CountryRegionsGetWithHttpInfo(locale?: string, _options?: Configuration): Promise<HttpInfo<RobloxLocaleApiCountryRegionListResponse>> {
        const result = this.api.v1CountryRegionsGetWithHttpInfo(locale, _options);
        return result.toPromise();
    }

    /**
     * Get list of country regions sorted by localized name
     * @param locale 
     */
    public v1CountryRegionsGet(locale?: string, _options?: Configuration): Promise<RobloxLocaleApiCountryRegionListResponse> {
        const result = this.api.v1CountryRegionsGet(locale, _options);
        return result.toPromise();
    }


}



import { ObservableLocaleApi } from './ObservableAPI';

import { LocaleApiRequestFactory, LocaleApiResponseProcessor} from "../apis/LocaleApi";
export class PromiseLocaleApi {
    private api: ObservableLocaleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocaleApiRequestFactory,
        responseProcessor?: LocaleApiResponseProcessor
    ) {
        this.api = new ObservableLocaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of Supported locales with user locus information.
     * @param displayValueLocale 
     */
    public v1LocalesGetWithHttpInfo(displayValueLocale?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus>> {
        const result = this.api.v1LocalesGetWithHttpInfo(displayValueLocale, _options);
        return result.toPromise();
    }

    /**
     * Get list of Supported locales with user locus information.
     * @param displayValueLocale 
     */
    public v1LocalesGet(displayValueLocale?: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus> {
        const result = this.api.v1LocalesGet(displayValueLocale, _options);
        return result.toPromise();
    }

    /**
     * Sets user\'s supported locale.  Null supported locale will clear out user\'s supported locale (set users\' supported locale to null)
     * @param userRequest Supported locale code that needs to be set for user
     */
    public v1LocalesSetUserSupportedLocalePostWithHttpInfo(userRequest: RobloxLocaleApiSetSupportedLocaleForUserRequest, _options?: Configuration): Promise<HttpInfo<RobloxLocaleApiSuccessResponse>> {
        const result = this.api.v1LocalesSetUserSupportedLocalePostWithHttpInfo(userRequest, _options);
        return result.toPromise();
    }

    /**
     * Sets user\'s supported locale.  Null supported locale will clear out user\'s supported locale (set users\' supported locale to null)
     * @param userRequest Supported locale code that needs to be set for user
     */
    public v1LocalesSetUserSupportedLocalePost(userRequest: RobloxLocaleApiSetSupportedLocaleForUserRequest, _options?: Configuration): Promise<RobloxLocaleApiSuccessResponse> {
        const result = this.api.v1LocalesSetUserSupportedLocalePost(userRequest, _options);
        return result.toPromise();
    }

    /**
     * @param displayValueLocale 
     */
    public v1LocalesSupportedLocalesForCreatorsGetWithHttpInfo(displayValueLocale?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus>> {
        const result = this.api.v1LocalesSupportedLocalesForCreatorsGetWithHttpInfo(displayValueLocale, _options);
        return result.toPromise();
    }

    /**
     * @param displayValueLocale 
     */
    public v1LocalesSupportedLocalesForCreatorsGet(displayValueLocale?: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus> {
        const result = this.api.v1LocalesSupportedLocalesForCreatorsGet(displayValueLocale, _options);
        return result.toPromise();
    }

    /**
     * Get list of supported locales sorted by the Native Name property.
     */
    public v1LocalesSupportedLocalesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxLocaleApiSupportedLocalesResponse>> {
        const result = this.api.v1LocalesSupportedLocalesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get list of supported locales sorted by the Native Name property.
     */
    public v1LocalesSupportedLocalesGet(_options?: Configuration): Promise<RobloxLocaleApiSupportedLocalesResponse> {
        const result = this.api.v1LocalesSupportedLocalesGet(_options);
        return result.toPromise();
    }

    /**
     * Gets user locale. If user is absent returns, locale from http request object.
     */
    public v1LocalesUserLocaleGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxLocaleApiUserLocaleResponse>> {
        const result = this.api.v1LocalesUserLocaleGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets user locale. If user is absent returns, locale from http request object.
     */
    public v1LocalesUserLocaleGet(_options?: Configuration): Promise<RobloxLocaleApiUserLocaleResponse> {
        const result = this.api.v1LocalesUserLocaleGet(_options);
        return result.toPromise();
    }

    /**
     * Gets each of a user\'s localization locus supported locales. A localization locus supported locale is a page (or group of pages) that  have been defined by the International team which need independent locale support.  If the user is null we will attempt to return the locales appropriate for the user\'s device language.
     */
    public v1LocalesUserLocalizationLocusSupportedLocalesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxLocaleApiUserLocalizationLocusLocalesResponse>> {
        const result = this.api.v1LocalesUserLocalizationLocusSupportedLocalesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets each of a user\'s localization locus supported locales. A localization locus supported locale is a page (or group of pages) that  have been defined by the International team which need independent locale support.  If the user is null we will attempt to return the locales appropriate for the user\'s device language.
     */
    public v1LocalesUserLocalizationLocusSupportedLocalesGet(_options?: Configuration): Promise<RobloxLocaleApiUserLocalizationLocusLocalesResponse> {
        const result = this.api.v1LocalesUserLocalizationLocusSupportedLocalesGet(_options);
        return result.toPromise();
    }


}



