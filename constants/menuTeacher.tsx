import { BiSolidDashboard } from "react-icons/bi";
import { FaUser, FaUserAlt } from "react-icons/fa";
import { GoHome, GoHomeFill } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAddCircle, MdAddCircleOutline } from "react-icons/md";

interface MenuTeacher  {
    title: string;
    iconOne: any;
    iconTow:any;
    Content:any;
}
     

const menuTeacher:MenuTeacher[] = [
    {
        title: 'Home',
        iconOne: <GoHome size={26} />,
        iconTow: <GoHomeFill size={26} />,
        Content: <p>Bienvenue sur la page d'accueil !</p>,
      },
      {
        title: 'Dash',
        iconOne: <LuLayoutDashboard  size={26} />,
        iconTow: <BiSolidDashboard size={26} />,
        Content: <p>Ceci est la section profil utilisateur.</p>,
      },
   {
        title: "Cours",
        iconOne: <MdAddCircleOutline size={26} />,
        iconTow: <MdAddCircle size={26} />,
        Content: <p>aojoute de cours</p>,
    },
   /* {
        title: "",
        iconOne: "",
        iconTow: "",
        Content: "",
    },*/
]

export default menuTeacher