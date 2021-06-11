

export const selectIdsFromWishlist = (state) => {

    return state.userReducer.wishlist.map(obj => obj.id);
}