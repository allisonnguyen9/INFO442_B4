import React from 'react';
import ReactDOM from 'react-dom/client';

export function Footer () {
    return (
        <div class="container">
            <p><a href="mailto:contactus@snackswap.com"><span class="material-icons">email</span> contactus@snackswap.com</a></p>
            <p><a href="tel:425-223-4444"><span class="material-icons">phone</span>425-223-4444</a></p>
            <p>&copy; snackSwap 2023</p>
        </div>
    );
}