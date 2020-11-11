/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import Integration from './Integration';
import Status from './Status';
import WhatsappAllOf from './WhatsappAllOf';

/**
 * The Whatsapp model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp
 * @version 9.1.0
 */
class Whatsapp {
    /**
     * Constructs a new <code>Whatsapp</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsappAllOf
     * @param type {String} The type of integration.
     * @param deploymentId {String} The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     */
    constructor(type, deploymentId) { 
        Integration.initialize(this, type);WhatsappAllOf.initialize(this, deploymentId);
        Whatsapp.initialize(this, type, deploymentId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, deploymentId) { 
        obj['deploymentId'] = deploymentId;
    }

    /**
     * Constructs a <code>Whatsapp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp} The populated <code>Whatsapp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Whatsapp();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            WhatsappAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('deploymentId')) {
                obj['deploymentId'] = ApiClient.convertToType(data['deploymentId'], 'String');
            }
            if (data.hasOwnProperty('hsmFallbackLanguage')) {
                obj['hsmFallbackLanguage'] = ApiClient.convertToType(data['hsmFallbackLanguage'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('accountManagementAccessToken')) {
                obj['accountManagementAccessToken'] = ApiClient.convertToType(data['accountManagementAccessToken'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The type of integration.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of integration.
     * @param {String} type The type of integration.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     * @return {String}
     */
    getDeploymentId() {
        return this.deploymentId;
    }

    /**
     * Sets The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     * @param {String} deploymentId The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     */
    setDeploymentId(deploymentId) {
        this['deploymentId'] = deploymentId;
    }
/**
     * Returns Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     * @return {String}
     */
    getHsmFallbackLanguage() {
        return this.hsmFallbackLanguage;
    }

    /**
     * Sets Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     * @param {String} hsmFallbackLanguage Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     */
    setHsmFallbackLanguage(hsmFallbackLanguage) {
        this['hsmFallbackLanguage'] = hsmFallbackLanguage;
    }
/**
     * Returns The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     * @return {String}
     */
    getAccountId() {
        return this.accountId;
    }

    /**
     * Sets The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     * @param {String} accountId The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     */
    setAccountId(accountId) {
        this['accountId'] = accountId;
    }
/**
     * Returns An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     * @return {String}
     */
    getAccountManagementAccessToken() {
        return this.accountManagementAccessToken;
    }

    /**
     * Sets An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     * @param {String} accountManagementAccessToken An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     */
    setAccountManagementAccessToken(accountManagementAccessToken) {
        this['accountManagementAccessToken'] = accountManagementAccessToken;
    }

}

/**
 * The type of integration.
 * @member {String} type
 * @default 'whatsapp'
 */
Whatsapp.prototype['type'] = 'whatsapp';

/**
 * The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
 * @member {String} deploymentId
 */
Whatsapp.prototype['deploymentId'] = undefined;

/**
 * Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
 * @member {String} hsmFallbackLanguage
 * @default 'en_US'
 */
Whatsapp.prototype['hsmFallbackLanguage'] = 'en_US';

/**
 * The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
 * @member {String} accountId
 */
Whatsapp.prototype['accountId'] = undefined;

/**
 * An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
 * @member {String} accountManagementAccessToken
 */
Whatsapp.prototype['accountManagementAccessToken'] = undefined;


// Implement Integration interface:
/**
 * The unique ID of the integration.
 * @member {String} id
 */
Integration.prototype['id'] = undefined;
/**
 * The type of integration.
 * @member {String} type
 */
Integration.prototype['type'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} status
 */
Integration.prototype['status'] = undefined;
/**
 * A human-friendly name used to identify the integration.
 * @member {String} displayName
 */
Integration.prototype['displayName'] = undefined;
// Implement WhatsappAllOf interface:
/**
 * The type of integration.
 * @member {String} type
 * @default 'whatsapp'
 */
WhatsappAllOf.prototype['type'] = 'whatsapp';
/**
 * The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
 * @member {String} deploymentId
 */
WhatsappAllOf.prototype['deploymentId'] = undefined;
/**
 * Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
 * @member {String} hsmFallbackLanguage
 * @default 'en_US'
 */
WhatsappAllOf.prototype['hsmFallbackLanguage'] = 'en_US';
/**
 * The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
 * @member {String} accountId
 */
WhatsappAllOf.prototype['accountId'] = undefined;
/**
 * An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
 * @member {String} accountManagementAccessToken
 */
WhatsappAllOf.prototype['accountManagementAccessToken'] = undefined;




export default Whatsapp;

