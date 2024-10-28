import { useState } from "react";
import Route from "./Route";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const MyNav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", component: "Home" },
        { id: 2, path: "/about", component: "About" },
        { id: 3, path: "/services", component: "Services" },
        { id: 4, path: "/contact", component: "Contact" },
        { id: 5, path: "/profile", component: "Profile" }
      ];
      

    return (
        <nav className="p-6">
            <div className="md:hidden px-4 py-3 w-fit rounded-xl hover:bg-slate-300" onClick={()=> setOpen(!open)}>
            {
                open? <RxCross2 className="text-2xl"></RxCross2>:<IoMdMenu className="text-2xl "></IoMdMenu>
            }
            
            
            </div>

             <ul className={`md:flex mr-4 absolute md:static duration-1000 ${open ? 'top-28':'-top-96'}`}>
             
             {
                routes.map(route => <Route  key={route.id} route={route} ></Route>)
             }
             </ul>
        </nav>
    );
};

export default MyNav;