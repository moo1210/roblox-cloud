import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { ObservablePremiumFeaturesUsersApi } from './ObservableAPI';

import { PremiumFeaturesUsersApiRequestFactory, PremiumFeaturesUsersApiResponseProcessor} from "../apis/PremiumFeaturesUsersApi";
export class PromisePremiumFeaturesUsersApi {
    private api: ObservablePremiumFeaturesUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PremiumFeaturesUsersApiRequestFactory,
        responseProcessor?: PremiumFeaturesUsersApiResponseProcessor
    ) {
        this.api = new ObservablePremiumFeaturesUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Premium upsell precheck
     * @param userId User ID
     * @param universeId 
     * @param placeId 
     */
    public v1UsersUserIdPremiumUpsellPrecheckGetWithHttpInfo(userId: number, universeId: number, placeId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1UsersUserIdPremiumUpsellPrecheckGetWithHttpInfo(userId, universeId, placeId, _options);
        return result.toPromise();
    }

    /**
     * Premium upsell precheck
     * @param userId User ID
     * @param universeId 
     * @param placeId 
     */
    public v1UsersUserIdPremiumUpsellPrecheckGet(userId: number, universeId: number, placeId: number, _options?: Configuration): Promise<void> {
        const result = this.api.v1UsersUserIdPremiumUpsellPrecheckGet(userId, universeId, placeId, _options);
        return result.toPromise();
    }

    /**
     * Get if a user has a Premium membership
     * @param userId User ID
     */
    public v1UsersUserIdValidateMembershipGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1UsersUserIdValidateMembershipGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Get if a user has a Premium membership
     * @param userId User ID
     */
    public v1UsersUserIdValidateMembershipGet(userId: number, _options?: Configuration): Promise<void> {
        const result = this.api.v1UsersUserIdValidateMembershipGet(userId, _options);
        return result.toPromise();
    }


}



