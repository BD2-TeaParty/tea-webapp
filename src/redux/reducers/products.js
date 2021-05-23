import * as types from '../constants/productTypes';


const initialState = {
    isLoading: false,
    data: [
        {
            id: 0,
            title: 'Bi Luo Chun',
            price: 100,
            c_origin: 'Chiny',
            description: 'Dobra herbatka zielona z państwa środka. Zbiór Wiosna 2021.Dobra herbatka zielona z państwa środka. Zbiór Wiosna 2021Dobra herbatka zielona z państwa środka. Zbiór Wiosna 2021Dobra herbatka zielona z państwa środka. Zbiór Wiosna 2021',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://previews.123rf.com/images/donot6/donot61802/donot6180200073/95123713-green-tea-leaf-isolated-on-white-background-fresh-tea-leaves-on-a-white-background.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 1,
            title: 'Yunnan',
            price: 100,
            c_origin: 'Chiny',
            description: 'Dobra herbatka czarrrrrrXDDDna z państwa środka. Zbiór Zima 2020.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://static.biotea.it/1593-large_default/display-foglie-te-in-bambu.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 2,
            title: 'Yunnan',
            price: 100,
            c_origin: 'Chiny',
            description: 'Dobra herbatka czarrrrrrna z państwa środka. Zbiór Zima 2020.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://static.biotea.it/1593-large_default/display-foglie-te-in-bambu.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 3,
            title: 'Yunnan',
            price: 100,
            c_origin: 'Chiny',
            description: 'Dobra herbatka czarrrAAAAAAAAArrrna z państwa środka. Zbiór Zima 2020.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://static.biotea.it/1593-large_default/display-foglie-te-in-bambu.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 4,
            title: 'Yunnan',
            price: 100,
            c_origin: 'Chiny',
            description: 'Dobra herbatka czarrrAAAAAAAAArrrna z państwa środka. Zbiór Zima 2020.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://static.biotea.it/1593-large_default/display-foglie-te-in-bambu.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 5,
            title: 'Yunnan',
            price: 100,
            c_origin: 'Chiny',
            description: 'Dobra herbatka czarrrAAAAAAAAArrrna z państwa środka. Zbiór Zima 2020.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://static.biotea.it/1593-large_default/display-foglie-te-in-bambu.jpg?auto=compress&cs=tinysrgb&h=350'
        },
    ],
    error: false,
}

export const productReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case types.REQUEST_PRODUCTS:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case types.RECEIVE_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false,
            }
        case types.RECEIVE_PRODUCTS_ERROR: 
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        case types.RECEIVE_PRODUCTS_TEST:
            return {
                ...state,
                isLoading: false,
                error: false,
            }
        default:
            return state;
    }
}
