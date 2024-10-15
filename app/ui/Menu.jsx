// import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/dashboard.png",
        label: "Dashboard",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/asset.png",
        label: "Application",
        href: "/application",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/order.png",
        label: "Enquiry",
        href: "/enquiry",
        visible: ["admin", "teacher"],
      },
      // {
      //   icon: "/instock.png",
      //   label: "Stock Intake",
      //   href: "/transaction",
      //   visible: ["admin", "teacher"],
      // },
     
   
      // {
      //   icon: "/stock.png",
      //   label: "Stocks",
      //   href: "/stock",
      //   visible: ["admin", "teacher"],
      // },
     
  
    ],
  },
  {
    title: "Maintenance",
    items: [
 
      // {
      //   icon: "/shop.png",
      //   label: "Supplier",
      //   href: "/suppliers",
      //   visible: ["admin", "teacher"],
      // },
      // {
      //   icon: "/equipments.png",
      //   label: "Equipments",
      //   href: "/equipments",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/products.png",
      //   label: "Products",
      //   href: "/products",
      //   visible: ["admin"],
      // },
      // {
      //   icon: "/logout.png",
      //   label: "Logout",
      //   href: "/login",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-small">
      {menuItems.map(i=>(
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-500 font-light my-4 ">{i.title}</span>
          {i.items.map(item=>(
            <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
              <Image src={item.icon} alt="" width={30} height={30}/>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
};

export default Menu;