import { useSelector } from "react-redux";

const Products = () => {
    const products = useSelector((state) => state.products.products);

    console.log("products: ", products);

    return <div>Products will be here</div>;
};

export default Products;