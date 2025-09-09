import { Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav style={{ padding: "1rem", background: "#eee" }}>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout;