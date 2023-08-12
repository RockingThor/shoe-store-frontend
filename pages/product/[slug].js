import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import React from "react";

const ProductDetails = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* Left column start */}

                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel />
                    </div>

                    {/* Left column end */}
                    {/* ------------------------------------------------------ */}
                    {/* Right column start */}

                    <div className="flex-[1] py-3">
                        {/* Product title */}
                        <div className="text-[34px] font-semibold mb-2">
                            Jordan Retro 6 G
                        </div>
                        {/* Product subtitle */}
                        <div className="text-lg font-semibold mb-5">
                            Men&apos; s Golf Shoes
                        </div>
                        {/* Product Price */}
                        <div className="text-lg font-semibold">
                            MRP: $300.00
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of all taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>
                        {/* Product size start */}

                        <div className="mb-10">
                            {/* heading start */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium cursor-pointer text-blac/[0.5]">
                                    Size Guide
                                </div>
                            </div>
                            {/* heading end */}
                            {/* size selection start */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed opacity-50">
                                    UK 6
                                </div>
                                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed opacity-50">
                                    UK 6
                                </div>
                            </div>
                            {/* size selection end */}
                            {/* show error start */}
                            <div className="text-red-600 mt-1">
                                Size selection is required
                            </div>
                            {/* show error end */}
                        </div>
                        {/* Product size end */}

                        {/* Add to cart button start */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform
                        active:scale-95 mb-3 hover:opacity-75"
                        >
                            Add to Cart
                        </button>
                        <button
                            className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform
                        active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
                        >
                            Wishlist
                        </button>
                        {/* Add to cart button end */}
                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md mb-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Necessitatibus perspiciatis
                                amet cumque veniam? Hic, atque eius dignissimos
                                vero nostrum nemo exercitationem cupiditate,
                                explicabo iusto nisi eaque, minima voluptas
                                incidunt dolor? Aperiam qui quod vel sunt
                                incidunt fuga totam corrupti nulla, vero magnam
                                quae debitis accusantium nihil soluta illo
                                cumque numquam! Necessitatibus sunt a
                                praesentium distinctio debitis ullam fugiat
                                magni minus?
                            </div>
                        </div>
                    </div>

                    {/* Right column end */}
                </div>
                <RelatedProducts />
            </Wrapper>
        </div>
    );
};

export default ProductDetails;
