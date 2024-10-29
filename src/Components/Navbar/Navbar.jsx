import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



const Navbar=()=> {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:userId", name: "User Profile" }
      ];
      
    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose>  
                    : 
                    <AiOutlineMenu ></AiOutlineMenu>
                }
                
            </div>
            
           <ul className={`md:flex duration-1000 px-6  absolute md:static
            ${open ? 'top-16' : '-top-60'}
            bg-yellow-200`}>
           {
                routes.map(route =>
                    <Link key={route.id} route={route}></Link>
                )
            }
           </ul>
        </nav>
    );
}

export default Navbar;