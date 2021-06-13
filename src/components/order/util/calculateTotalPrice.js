


export const calculateTotalPrice = (cartPrice, shippingPrice, paymentPrice, discountValidated, discountObj) => {

    let sum = 0.0;

    sum += cartPrice;
    sum += shippingPrice;
    sum += paymentPrice;

    if (discountValidated) {
        switch (discountObj.type) {
            case 'regular':
                sum -= discountObj.value;
                break;
            case 'shipping':
                sum -= discountObj.factor * shippingPrice;
                break;
            case 'factor':
                sum *= (1 - discountObj.factor);
                break;
            default:
                break;
        }
    }


    return (Math.round(sum * 100) / 100);
}