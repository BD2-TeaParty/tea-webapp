import * as types from '../constants/productTypes';


const initialState = {
    isLoading: false,
    data: [
        {
            id: 0,
            title: 'Bi Luo Chun',
            price: 19.99,
            c_origin: 'Chiny',
            description: 'Zielona herbata pochodząca z Dongting w prowincji Jiangsu w Chinach. Herbata wytrwarzana jest z młodych, świeżych pączków herbacianych, które zrywane są wczesną wiosną. ',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://cdn.czasnaherbate.net/2138-large_default/bi-luo-chun.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 1,
            title: 'Yunnan Gold',
            price: 9.99,
            c_origin: 'Chiny',
            description: 'Yunnan Gold swoją nazwę zawdzięcza dużej ilości złotych "tipsów", dzięki którym uzyskiwany susz ma niespotykany złocisto-bursztynowy odcień. Uzyskany napar jest mocny i aromatyczny, a smak wytrawny doceniany przez smakoszy.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://cdn.czasnaherbate.net/2165-large_default/golden-yunnan.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 2,
            title: 'Yunnan Pure Gold',
            price: 23.99,
            c_origin: 'Chiny',
            description: 'Yunnan Pure Gold swoją nazwę zawdzięcza bardzo dużej ilości złotych "tipsów", dzięki którym uzyskiwany susz ma niespotykany złocisto-bursztynowy odcień. Uzyskany napar jest mocny i aromatyczny, a smak wytrawny doceniany przez smakoszy.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://cdn.czasnaherbate.net/2126-large_default/yunnan-golden-buds.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 3,
            title: 'Jin Jun Mei',
            price: 35.99,
            c_origin: 'Chiny',
            description: 'Czarna herbata z chińskich gór Wuyi w prowincji Fujian. Odmiana stworzona w 2006 roku. Robiona bezwzględnie z wczesnych wiosennych zbiorów.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Jin_Jun_Mei.jpg/600px-Jin_Jun_Mei.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 4,
            title: 'Yunnan',
            price: 100,
            c_origin: 'Chiny',
            description: 'Herbata ta pochodzi z górskiej prowincji Yunnan położonej w Chinach przy granicy z Wietnamem, Birmą i Laosem. Krzewy herbaciane charakteryzują się szerokimi i mięsistymi liśćmi o połyskującej powierzchni.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://cdn.czasnaherbate.net/33-large_default/yunnan-black-premium.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 5,
            title: 'Zielony Yunnan OP',
            price: 100,
            c_origin: 'Chiny',
            description: 'Zielona herbata z prowincji Yunnan. Liście tej herbaty mają regularny kształt i zielonkawy kolor. Daje bardzo smaczny napar o wyrafinowanym smaku i aromacie.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://cdn.czasnaherbate.net/2130-large_default/zielony-yunnan-op.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 6,
            title: 'Assam Dikom',
            price: 100,
            c_origin: 'Indie',
            description: 'Prowincja Assam to region na północnym wschodzie Indii, gdzie uprawia się odmianę herbaty o nazwie Camellia assamica, której liście ze względu na wysoką jakość są często stosowane do uszlachetniania mieszanek gorszego gatunku.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://cdn.czasnaherbate.net/2112-large_default/assam-dikom-stgfopi.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 7,
            title: 'Assam Satrupa Organic',
            price: 100,
            c_origin: 'Indie',
            description: 'Herbata czarna o łagodnym, klasycznym smaku i delikatnym słodowym aromacie z kakaowymi nutami.Idealna herbata do śniadania, również z dodatkiem mleka.',
            weight: [0.1, 0.25, 0.5, 1], //zalozenie ze wszystko znormalizowane do KG
            img: 'https://cdn.czasnaherbate.net/2113-large_default/assam-satrupa-organic.jpg?auto=compress&cs=tinysrgb&h=350'
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
