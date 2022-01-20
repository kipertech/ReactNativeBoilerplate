import {
    handleFirstResponse,
    checkErrorExist,
    convertError
} from "../utils/util_api_response_helpers";

const GLOBAL = require('../configs/config_global');

// region API Wrapper
export function apiWrapper(link, method = 'POST', functionName = '', body = null, completeFunc = () => {}, customAuthorizationKey = null)
{
    return new Promise((resolve, reject) => {
        let hasPagination = link.toLowerCase().includes('page') || link.toLowerCase().includes('per_page');

        fetch((link.startsWith('http') ? '' : GLOBAL.FATHER_LINK) + link, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + (customAuthorizationKey || GLOBAL.DATA.USER_TOKEN)
            },
            body
        })
            .then((response) => handleFirstResponse(response))
            .then((response) =>
            {
                if (!checkErrorExist(response))
                {
                    console.log(`[SUCCESS] ${functionName.toUpperCase()}`, response);
                    completeFunc(response);
                    resolve(
                        hasPagination ?
                            {
                                data: response.data,
                                currentPage: (response['meta'] || response)["current_page"],
                                lastPage: (response['meta'] || response)["last_page"],
                                totalResult: (response['meta'] || response)["total"],
                                meta: response['meta'] || {}
                            }
                            :
                            response
                    );
                }
                else
                {
                    console.log(`[FAILED] ${functionName.toUpperCase()}`, response);
                    reject(convertError(response.errors || response.error));
                }
            })
            .catch((error) =>
            {
                console.log(`[FAILED] ${functionName.toUpperCase()}`, error);
                reject(error.message);
            });
    });
}
// endregion

// TODO: Export all APIs from sub-modules, example showed below
// export * from './api_social';
// export * from './api_user';
