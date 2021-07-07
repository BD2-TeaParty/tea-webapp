

export const validateDiscount = (cartPrice, discountObj, validateCallback) => {

    // console.log('validating', cartPrice, discountObj, validateCallback);
    if (discountObj !== null) {
        switch (discountObj.type) {
            case 'regular':
                if (cartPrice >= discountObj.minimum) {
                    validateCallback(true);
                    return;
                }
                break;
            case 'shipping': {
                validateCallback(true);
                return;
            }
            case 'factor':
                if ( cartPrice >= discountObj.minimum ) {
                    validateCallback(true);
                    return;
                }
                break;
            default:
                break;
        }
    }

    validateCallback(false);
}