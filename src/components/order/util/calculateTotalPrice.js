


export const calculateTotalPrice = (cartPrice, shippingPrice, paymentPrice, discountObj) => {

    let sum = 0.0;

    sum += cartPrice;
    sum += shippingPrice;
    sum += paymentPrice;

    if (discountObj !== null) {
        switch (discountObj.type) {
            case 'regular':
                break;
            case 'shipping':
                break;
            case 'factor':
                break;
            default:
                break;
        }
    }


    return (Math.round(sum * 100) / 100);
}