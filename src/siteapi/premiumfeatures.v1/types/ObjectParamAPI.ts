import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'


import { ObservablePremiumFeaturesUsersApi } from "./ObservableAPI";
import { PremiumFeaturesUsersApiRequestFactory, PremiumFeaturesUsersApiResponseProcessor} from "../apis/PremiumFeaturesUsersApi";

export interface PremiumFeaturesUsersApiV1UsersUserIdPremiumUpsellPrecheckGetRequest {
    /**
     * User ID
     * @type number
     * @memberof PremiumFeaturesUsersApiv1UsersUserIdPremiumUpsellPrecheckGet
     */
    userId: number
    /**
     * 
     * @type number
     * @memberof PremiumFeaturesUsersApiv1UsersUserIdPremiumUpsellPrecheckGet
     */
    universeId: number
    /**
     * 
     * @type number
     * @memberof PremiumFeaturesUsersApiv1UsersUserIdPremiumUpsellPrecheckGet
     */
    placeId: number
}

export interface PremiumFeaturesUsersApiV1UsersUserIdValidateMembershipGetRequest {
    /**
     * User ID
     * @type number
     * @memberof PremiumFeaturesUsersApiv1UsersUserIdValidateMembershipGet
     */
    userId: number
}

export class ObjectPremiumFeaturesUsersApi {
    private api: ObservablePremiumFeaturesUsersApi

    public constructor(configuration: Configuration, requestFactory?: PremiumFeaturesUsersApiRequestFactory, responseProcessor?: PremiumFeaturesUsersApiResponseProcessor) {
        this.api = new ObservablePremiumFeaturesUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Premium upsell precheck
     * @param param the request object
     */
    public v1UsersUserIdPremiumUpsellPrecheckGetWithHttpInfo(param: PremiumFeaturesUsersApiV1UsersUserIdPremiumUpsellPrecheckGetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.v1UsersUserIdPremiumUpsellPrecheckGetWithHttpInfo(param.userId, param.universeId, param.placeId,  options).toPromise();
    }

    /**
     * Premium upsell precheck
     * @param param the request object
     */
    public v1UsersUserIdPremiumUpsellPrecheckGet(param: PremiumFeaturesUsersApiV1UsersUserIdPremiumUpsellPrecheckGetRequest, options?: Configuration): Promise<void> {
        return this.api.v1UsersUserIdPremiumUpsellPrecheckGet(param.userId, param.universeId, param.placeId,  options).toPromise();
    }

    /**
     * Get if a user has a Premium membership
     * @param param the request object
     */
    public v1UsersUserIdValidateMembershipGetWithHttpInfo(param: PremiumFeaturesUsersApiV1UsersUserIdValidateMembershipGetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.v1UsersUserIdValidateMembershipGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Get if a user has a Premium membership
     * @param param the request object
     */
    public v1UsersUserIdValidateMembershipGet(param: PremiumFeaturesUsersApiV1UsersUserIdValidateMembershipGetRequest, options?: Configuration): Promise<void> {
        return this.api.v1UsersUserIdValidateMembershipGet(param.userId,  options).toPromise();
    }

}
