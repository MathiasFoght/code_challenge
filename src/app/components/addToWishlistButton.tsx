'use client';

import React from 'react';
import {AddToWishlistButtonProps} from "@/types";

const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ item, itemType }) => {
    const addToWishlist = () => {
        // Check if the item is already in the wishlist
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        // Check if the item is already in the wishlist
        const itemWithType = { ...item, type: itemType };
        wishlist.push(itemWithType);
        // Save the updated wishlist to local storage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Added to wishlist!');
    };

    return (
        <button onClick={addToWishlist}>
            Add to Wishlist
        </button>
    );
};

export default AddToWishlistButton;