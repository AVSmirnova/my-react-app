import { NavLink } from "react-router-dom";
const Navbar = ()=>{
    return(
        <nav className = "navbar">
            <ul>
                <li><NavLink to="/"> Главная</NavLink></li>
                <li><NavLink to="/about"> О нас</NavLink></li>
                <li><NavLink to="/contact">Контакты</NavLink></li>
                <li><NavLink to="/doc">Документы</NavLink></li>
                <li><NavLink to="/vacancie">Вакансии</NavLink></li>
            </ul>
        </nav>
    )
    
}
export default Navbar