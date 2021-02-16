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
import ApiClient from '../ApiClient';

/**
 * The AndroidAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf
 * @version 9.4.3
 */
class AndroidAllOf {
    /**
     * Constructs a new <code>AndroidAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf
     */
    constructor() { 
        
        AndroidAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AndroidAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf} The populated <code>AndroidAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AndroidAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('serverKey')) {
                obj['serverKey'] = ApiClient.convertToType(data['serverKey'], 'String');
            }
            if (data.hasOwnProperty('senderId')) {
                obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
     * @param {String} type To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Your server key from the fcm console.
     * @return {String}
     */
    getServerKey() {
        return this.serverKey;
    }

    /**
     * Sets Your server key from the fcm console.
     * @param {String} serverKey Your server key from the fcm console.
     */
    setServerKey(serverKey) {
        this['serverKey'] = serverKey;
    }
/**
     * Returns Your sender id from the fcm console.
     * @return {String}
     */
    getSenderId() {
        return this.senderId;
    }

    /**
     * Sets Your sender id from the fcm console.
     * @param {String} senderId Your sender id from the fcm console.
     */
    setSenderId(senderId) {
        this['senderId'] = senderId;
    }
/**
     * Returns Allows users to create more than one conversation on the android integration.
     * @return {Boolean}
     */
    getCanUserCreateMoreConversations() {
        return this.canUserCreateMoreConversations;
    }

    /**
     * Sets Allows users to create more than one conversation on the android integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the android integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations) {
        this['canUserCreateMoreConversations'] = canUserCreateMoreConversations;
    }

}

/**
 * To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
 * @member {String} type
 * @default 'android'
 */
AndroidAllOf.prototype['type'] = 'android';

/**
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
AndroidAllOf.prototype['serverKey'] = undefined;

/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
AndroidAllOf.prototype['senderId'] = undefined;

/**
 * Allows users to create more than one conversation on the android integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
AndroidAllOf.prototype['canUserCreateMoreConversations'] = undefined;






export default AndroidAllOf;

