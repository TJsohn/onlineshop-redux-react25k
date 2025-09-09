import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { fetchProducts } from "../store/productSlice";
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { addToCart } from "../store/cartSlice";

const Products = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    function handleAddToCart(product) {
        dispatch(addToCart(product));
    }
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <p>{products.length}</p>
            <Grid container spacing={2}>
            {products.map((product) => (
                <Card key={product.id}>
<img src={product.image} alt={product.title} style={{objectFit: "cover", maxHeight: "100px"}} />
                    <CardMedia image={product.image} />
                    <CardContent>
                        <Typography>{product.title}</Typography>
                    </CardContent>
                    <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                </Card>
            ))}
            </Grid>
        </div>
    );
};

export default Products;