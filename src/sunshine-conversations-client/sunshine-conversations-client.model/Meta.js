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
 * The Meta model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Meta
 * @version 9.4.3
 */
class Meta {
    /**
     * Constructs a new <code>Meta</code>.
     * Response metadata.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Meta
     */
    constructor() { 
        
        Meta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} The populated <code>Meta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Meta();

            if (data.hasOwnProperty('hasMore')) {
                obj['hasMore'] = ApiClient.convertToType(data['hasMore'], 'Boolean');
            }
            if (data.hasOwnProperty('afterCursor')) {
                obj['afterCursor'] = ApiClient.convertToType(data['afterCursor'], 'String');
            }
            if (data.hasOwnProperty('beforeCursor')) {
                obj['beforeCursor'] = ApiClient.convertToType(data['beforeCursor'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns A flag that indicates if there are more records that can be fetched.
     * @return {Boolean}
     */
    getHasMore() {
        return this.hasMore;
    }

    /**
     * Sets A flag that indicates if there are more records that can be fetched.
     * @param {Boolean} hasMore A flag that indicates if there are more records that can be fetched.
     */
    setHasMore(hasMore) {
        this['hasMore'] = hasMore;
    }
/**
     * Returns A record id that can be used as a `page[after]` parameter in a new request to get the next page.  Not specified if there are no subsequent pages. 
     * @return {String}
     */
    getAfterCursor() {
        return this.afterCursor;
    }

    /**
     * Sets A record id that can be used as a `page[after]` parameter in a new request to get the next page.  Not specified if there are no subsequent pages. 
     * @param {String} afterCursor A record id that can be used as a `page[after]` parameter in a new request to get the next page.  Not specified if there are no subsequent pages. 
     */
    setAfterCursor(afterCursor) {
        this['afterCursor'] = afterCursor;
    }
/**
     * Returns A record id that can be used as a `page[before]` parameter in a new request to get the previous page.  Not specified if there are no previous pages. 
     * @return {String}
     */
    getBeforeCursor() {
        return this.beforeCursor;
    }

    /**
     * Sets A record id that can be used as a `page[before]` parameter in a new request to get the previous page.  Not specified if there are no previous pages. 
     * @param {String} beforeCursor A record id that can be used as a `page[before]` parameter in a new request to get the previous page.  Not specified if there are no previous pages. 
     */
    setBeforeCursor(beforeCursor) {
        this['beforeCursor'] = beforeCursor;
    }

}

/**
 * A flag that indicates if there are more records that can be fetched.
 * @member {Boolean} hasMore
 */
Meta.prototype['hasMore'] = undefined;

/**
 * A record id that can be used as a `page[after]` parameter in a new request to get the next page.  Not specified if there are no subsequent pages. 
 * @member {String} afterCursor
 */
Meta.prototype['afterCursor'] = undefined;

/**
 * A record id that can be used as a `page[before]` parameter in a new request to get the previous page.  Not specified if there are no previous pages. 
 * @member {String} beforeCursor
 */
Meta.prototype['beforeCursor'] = undefined;






export default Meta;

