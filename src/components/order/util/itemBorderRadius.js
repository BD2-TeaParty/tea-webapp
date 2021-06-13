export const itemBorderRadius = (index, itemsLength) => {
    //only one item on the list
    if (itemsLength <= 1) {
        return {
            borderRadius: 5
        };
    } else {    
        //first item
        if(index === 0) {
            return {
                borderBottomWidth: 0,
                borderRadius: 0,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            }

        //last item
        } else if (index === itemsLength - 1) {
            return {
                borderRadius: 0,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            }

        //any item in between
        } else {
            return {
                borderBottomWidth: 0,
                borderRadius: 0
            }
        }
    }
}