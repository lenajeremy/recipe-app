export function generateRandomRecipePrice() {
    return ((Math.random() * 50) + 50).toFixed(2)
}

export function formatCurrency(amount: number, isNaira: boolean) {
    return Intl.NumberFormat("en-US", {
        currency: isNaira ? "NGN" : "USD",
        style: "currency",
    }).format(amount)
}