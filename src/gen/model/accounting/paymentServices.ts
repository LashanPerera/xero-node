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

import { PaymentService } from './paymentService';

export class PaymentServices {
    'paymentServices'?: Array<PaymentService>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentServices",
            "baseName": "PaymentServices",
            "type": "Array<PaymentService>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentServices.attributeTypeMap;
    }
}

