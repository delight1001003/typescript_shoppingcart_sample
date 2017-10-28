class ShoppingCart {
    Calculate(price: number, qty: number, level: string): number {
        let discounter = DiscounterFactory.GetDiscounter(level);
        let totalPrice = discounter.Calculate(price, qty);

        return totalPrice;
    }
}