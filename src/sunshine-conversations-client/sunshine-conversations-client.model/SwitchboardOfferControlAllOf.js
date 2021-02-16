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
import SwitchboardOfferControlAllOfPayload from './SwitchboardOfferControlAllOfPayload';

/**
 * The SwitchboardOfferControlAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOf
 * @version 9.4.3
 */
class SwitchboardOfferControlAllOf {
    /**
     * Constructs a new <code>SwitchboardOfferControlAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOf
     */
    constructor() { 
        
        SwitchboardOfferControlAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardOfferControlAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOf} The populated <code>SwitchboardOfferControlAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardOfferControlAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = SwitchboardOfferControlAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOfPayload} payload
 */
SwitchboardOfferControlAllOf.prototype['payload'] = undefined;






export default SwitchboardOfferControlAllOf;

