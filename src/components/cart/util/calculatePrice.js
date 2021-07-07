

export const calculatePrice = (items) => {

    // console.log('calculating for', items);

    let price = 0.0;
    for (let obj of items) {
        price += obj.quantity * obj.item.price;
    }

    // console.log('got price:', price);
    const decimalIndex = price.toString().indexOf('.');
    if (decimalIndex > 0)
        return price.toPrecision(decimalIndex + 2);
    else
        return price;
}