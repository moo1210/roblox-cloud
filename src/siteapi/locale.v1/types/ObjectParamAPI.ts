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

import { ObservableCountryRegionsApi } from "./ObservableAPI";
import { CountryRegionsApiRequestFactory, CountryRegionsApiResponseProcessor} from "../apis/CountryRegionsApi";

export interface CountryRegionsApiV1CountryRegionsGetRequest {
    /**
     * 
     * @type string
     * @memberof CountryRegionsApiv1CountryRegionsGet
     */
    locale?: string
}

export class ObjectCountryRegionsApi {
    private api: ObservableCountryRegionsApi

    public constructor(configuration: Configuration, requestFactory?: CountryRegionsApiRequestFactory, responseProcessor?: CountryRegionsApiResponseProcessor) {
        this.api = new ObservableCountryRegionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of country regions sorted by localized name
     * @param param the request object
     */
    public v1CountryRegionsGetWithHttpInfo(param: CountryRegionsApiV1CountryRegionsGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxLocaleApiCountryRegionListResponse>> {
        return this.api.v1CountryRegionsGetWithHttpInfo(param.locale,  options).toPromise();
    }

    /**
     * Get list of country regions sorted by localized name
     * @param param the request object
     */
    public v1CountryRegionsGet(param: CountryRegionsApiV1CountryRegionsGetRequest = {}, options?: Configuration): Promise<RobloxLocaleApiCountryRegionListResponse> {
        return this.api.v1CountryRegionsGet(param.locale,  options).toPromise();
    }

}

import { ObservableLocaleApi } from "./ObservableAPI";
import { LocaleApiRequestFactory, LocaleApiResponseProcessor} from "../apis/LocaleApi";

export interface LocaleApiV1LocalesGetRequest {
    /**
     * 
     * @type string
     * @memberof LocaleApiv1LocalesGet
     */
    displayValueLocale?: string
}

export interface LocaleApiV1LocalesSetUserSupportedLocalePostRequest {
    /**
     * Supported locale code that needs to be set for user
     * @type RobloxLocaleApiSetSupportedLocaleForUserRequest
     * @memberof LocaleApiv1LocalesSetUserSupportedLocalePost
     */
    userRequest: RobloxLocaleApiSetSupportedLocaleForUserRequest
}

export interface LocaleApiV1LocalesSupportedLocalesForCreatorsGetRequest {
    /**
     * 
     * @type string
     * @memberof LocaleApiv1LocalesSupportedLocalesForCreatorsGet
     */
    displayValueLocale?: string
}

export interface LocaleApiV1LocalesSupportedLocalesGetRequest {
}

export interface LocaleApiV1LocalesUserLocaleGetRequest {
}

export interface LocaleApiV1LocalesUserLocalizationLocusSupportedLocalesGetRequest {
}

export class ObjectLocaleApi {
    private api: ObservableLocaleApi

    public constructor(configuration: Configuration, requestFactory?: LocaleApiRequestFactory, responseProcessor?: LocaleApiResponseProcessor) {
        this.api = new ObservableLocaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of Supported locales with user locus information.
     * @param param the request object
     */
    public v1LocalesGetWithHttpInfo(param: LocaleApiV1LocalesGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus>> {
        return this.api.v1LocalesGetWithHttpInfo(param.displayValueLocale,  options).toPromise();
    }

    /**
     * Get list of Supported locales with user locus information.
     * @param param the request object
     */
    public v1LocalesGet(param: LocaleApiV1LocalesGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus> {
        return this.api.v1LocalesGet(param.displayValueLocale,  options).toPromise();
    }

    /**
     * Sets user\'s supported locale.  Null supported locale will clear out user\'s supported locale (set users\' supported locale to null)
     * @param param the request object
     */
    public v1LocalesSetUserSupportedLocalePostWithHttpInfo(param: LocaleApiV1LocalesSetUserSupportedLocalePostRequest, options?: Configuration): Promise<HttpInfo<RobloxLocaleApiSuccessResponse>> {
        return this.api.v1LocalesSetUserSupportedLocalePostWithHttpInfo(param.userRequest,  options).toPromise();
    }

    /**
     * Sets user\'s supported locale.  Null supported locale will clear out user\'s supported locale (set users\' supported locale to null)
     * @param param the request object
     */
    public v1LocalesSetUserSupportedLocalePost(param: LocaleApiV1LocalesSetUserSupportedLocalePostRequest, options?: Configuration): Promise<RobloxLocaleApiSuccessResponse> {
        return this.api.v1LocalesSetUserSupportedLocalePost(param.userRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1LocalesSupportedLocalesForCreatorsGetWithHttpInfo(param: LocaleApiV1LocalesSupportedLocalesForCreatorsGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus>> {
        return this.api.v1LocalesSupportedLocalesForCreatorsGetWithHttpInfo(param.displayValueLocale,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1LocalesSupportedLocalesForCreatorsGet(param: LocaleApiV1LocalesSupportedLocalesForCreatorsGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus> {
        return this.api.v1LocalesSupportedLocalesForCreatorsGet(param.displayValueLocale,  options).toPromise();
    }

    /**
     * Get list of supported locales sorted by the Native Name property.
     * @param param the request object
     */
    public v1LocalesSupportedLocalesGetWithHttpInfo(param: LocaleApiV1LocalesSupportedLocalesGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxLocaleApiSupportedLocalesResponse>> {
        return this.api.v1LocalesSupportedLocalesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get list of supported locales sorted by the Native Name property.
     * @param param the request object
     */
    public v1LocalesSupportedLocalesGet(param: LocaleApiV1LocalesSupportedLocalesGetRequest = {}, options?: Configuration): Promise<RobloxLocaleApiSupportedLocalesResponse> {
        return this.api.v1LocalesSupportedLocalesGet( options).toPromise();
    }

    /**
     * Gets user locale. If user is absent returns, locale from http request object.
     * @param param the request object
     */
    public v1LocalesUserLocaleGetWithHttpInfo(param: LocaleApiV1LocalesUserLocaleGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxLocaleApiUserLocaleResponse>> {
        return this.api.v1LocalesUserLocaleGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets user locale. If user is absent returns, locale from http request object.
     * @param param the request object
     */
    public v1LocalesUserLocaleGet(param: LocaleApiV1LocalesUserLocaleGetRequest = {}, options?: Configuration): Promise<RobloxLocaleApiUserLocaleResponse> {
        return this.api.v1LocalesUserLocaleGet( options).toPromise();
    }

    /**
     * Gets each of a user\'s localization locus supported locales. A localization locus supported locale is a page (or group of pages) that  have been defined by the International team which need independent locale support.  If the user is null we will attempt to return the locales appropriate for the user\'s device language.
     * @param param the request object
     */
    public v1LocalesUserLocalizationLocusSupportedLocalesGetWithHttpInfo(param: LocaleApiV1LocalesUserLocalizationLocusSupportedLocalesGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxLocaleApiUserLocalizationLocusLocalesResponse>> {
        return this.api.v1LocalesUserLocalizationLocusSupportedLocalesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets each of a user\'s localization locus supported locales. A localization locus supported locale is a page (or group of pages) that  have been defined by the International team which need independent locale support.  If the user is null we will attempt to return the locales appropriate for the user\'s device language.
     * @param param the request object
     */
    public v1LocalesUserLocalizationLocusSupportedLocalesGet(param: LocaleApiV1LocalesUserLocalizationLocusSupportedLocalesGetRequest = {}, options?: Configuration): Promise<RobloxLocaleApiUserLocalizationLocusLocalesResponse> {
        return this.api.v1LocalesUserLocalizationLocusSupportedLocalesGet( options).toPromise();
    }

}
