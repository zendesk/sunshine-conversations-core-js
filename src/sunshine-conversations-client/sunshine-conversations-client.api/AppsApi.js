/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.3
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import AppCreateBody from '../sunshine-conversations-client.model/AppCreateBody';
import AppListFilter from '../sunshine-conversations-client.model/AppListFilter';
import AppListResponse from '../sunshine-conversations-client.model/AppListResponse';
import AppResponse from '../sunshine-conversations-client.model/AppResponse';
import AppUpdateBody from '../sunshine-conversations-client.model/AppUpdateBody';
import Page from '../sunshine-conversations-client.model/Page';

/**
* Apps service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/AppsApi
* @version 9.4.3
*/
export default class AppsApi {

    /**
    * Constructs a new AppsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/AppsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create App
     * Creates a new app. When using [service account](#service-accounts) credentials, the service account is automatically granted access to the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppCreateBody} appCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} and HTTP response
     */
    createAppWithHttpInfo(appCreateBody) {
      let postBody = appCreateBody;
      // verify the required parameter 'appCreateBody' is set
      if (appCreateBody === undefined || appCreateBody === null) {
        throw new Error("Missing the required parameter 'appCreateBody' when calling createApp");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AppResponse;
      return this.apiClient.callApi(
        '/v2/apps', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create App
     * Creates a new app. When using [service account](#service-accounts) credentials, the service account is automatically granted access to the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppCreateBody} appCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse}
     */
    createApp(appCreateBody) {
      return this.createAppWithHttpInfo(appCreateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete App
     * Removes the specified app, including all its enabled integrations.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteAppWithHttpInfo(appId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteApp");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete App
     * Removes the specified app, including all its enabled integrations.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteApp(appId) {
      return this.deleteAppWithHttpInfo(appId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get App
     * Fetches an individual app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} and HTTP response
     */
    getAppWithHttpInfo(appId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getApp");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AppResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get App
     * Fetches an individual app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse}
     */
    getApp(appId) {
      return this.getAppWithHttpInfo(appId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Apps
     * Lists all apps that a user is part of. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps?page[after]=5e1606762556d93e9c176f69&page[size]=10 ``` 
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter} opts.filter Contains parameters for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppListResponse} and HTTP response
     */
    listAppsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AppListResponse;
      return this.apiClient.callApi(
        '/v2/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Apps
     * Lists all apps that a user is part of. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps?page[after]=5e1606762556d93e9c176f69&page[size]=10 ``` 
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter} opts.filter Contains parameters for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppListResponse}
     */
    listApps(opts) {
      return this.listAppsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update App
     * Updates an app.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppUpdateBody} appUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} and HTTP response
     */
    updateAppWithHttpInfo(appId, appUpdateBody) {
      let postBody = appUpdateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateApp");
      }
      // verify the required parameter 'appUpdateBody' is set
      if (appUpdateBody === undefined || appUpdateBody === null) {
        throw new Error("Missing the required parameter 'appUpdateBody' when calling updateApp");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AppResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update App
     * Updates an app.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppUpdateBody} appUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse}
     */
    updateApp(appId, appUpdateBody) {
      return this.updateAppWithHttpInfo(appId, appUpdateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
