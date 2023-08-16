export const getDiscountedPricePercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPer = (discount / originalPrice) * 100;
    return discountPer.toFixed(2);
}