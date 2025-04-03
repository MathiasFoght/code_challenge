'use client';

import React from 'react';
import {AddToWishlistButtonProps} from "@/types";

const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ item, itemType }) => {
    const addToWishlist = () => {
        // Retrieve the wishlist from local storage
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        // Create an item with type
        const itemWithType = { ...item, type: itemType };
        // Check if the item is already in the wishlist
        const itemExist = wishlist.some((wishlistItem: any) =>
            wishlistItem.id === itemWithType.id && wishlistItem.type === itemWithType.type
        );

        if (itemExist) {
            alert('Already in wishlist!');
            return;
        }

        // Add the item to the wishlist
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