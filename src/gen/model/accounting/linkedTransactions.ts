/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.5
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LinkedTransaction } from './linkedTransaction';

export class LinkedTransactions {
    'linkedTransactions'?: Array<LinkedTransaction>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "linkedTransactions",
            "baseName": "LinkedTransactions",
            "type": "Array<LinkedTransaction>"
        }    ];

    static getAttributeTypeMap() {
        return LinkedTransactions.attributeTypeMap;
    }
}

