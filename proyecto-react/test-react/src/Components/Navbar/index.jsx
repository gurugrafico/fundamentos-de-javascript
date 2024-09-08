import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-8 px-8 text-sm font-light top-0">
            <ul className="flex item-center gap-3">
                <li>
                    <NavLink to="/">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/clothes">Ropa</NavLink>
                </li>
                <li>
                    <NavLink to="/electronics">Electrónicos</NavLink>
                </li>
                <li>
                    <NavLink to="/other">Otros</NavLink>
                </li>
            </ul>
            <ul className="flex item-center gap-3">
                <li>
                    <NavLink to="/my-account">Mi cuenta</NavLink>
                </li>
                <li>
                    <NavLink to="/my-orders">Mis órdenes</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in">Registrarse</NavLink>
                </li>
            </ul>
        </nav>
    )    
}

export default Navbar