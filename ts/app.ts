/// <reference path="../node_modules/@types/jquery/index.d.ts" />

$(document).ready(() => {
    $('#calculate').on('click', () => {
        let price = $('#price').val() as number;
        let qty = $('#qty').val() as number;
        let level = $('#level').val() as string;

        let shoppingCart= new ShoppingCart();
        let result = shoppingCart.Calculate(price, qty, level);

        $('#result').text(result);
    })
});