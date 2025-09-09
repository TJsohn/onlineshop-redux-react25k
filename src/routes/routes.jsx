import Layout from "../components/Layout"
import Products from "../components/Products"
import Cart from "../components/Cart"

export const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Products /> },
            { path: "cart", element: <Cart /> }
        ]
    }
];