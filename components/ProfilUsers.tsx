import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { BsCheck2All } from "react-icons/bs";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { IoChevronDown } from "react-icons/io5";
import { useSession } from "next-auth/react";
import Image from "next/image";
import images from "@/constants/falarohy";
import LogoutBtn from "./LogoutBtn";
import { useEffect, useState } from "react"
type Theme = "light" | "dark" | "system"


function AvatarUsers() {
    const { data: session, status } = useSession();
    return (
        <Avatar>
            <AvatarImage src={session?.user.image || ''} alt="@shadcn" />
            <AvatarFallback>FR</AvatarFallback>
        </Avatar>
    )
}


export function ProfilUsers() {
    const { data: session, status } = useSession();

    const [theme, setTheme] = useState<Theme>("system")

    const applyTheme = (theme: Theme) => {
        const root = document.documentElement
        const isDark =
            theme === "dark" ||
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

        if (isDark) {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
    }

    useEffect(() => {
        const saved = (localStorage.getItem("theme") as Theme) || "system"
        setTheme(saved)
        applyTheme(saved)
    }, [])

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        applyTheme(newTheme)
    }

    const [active, setActive] = useState(0);
    const buttonStyle = (value: Theme) =>
        `px-4 py-2 rounded border transition ${theme === value
            ? "bg-blue-600 text-white"
            : "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        }`

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="rounded-full border">
                    <AvatarUsers />
                    <div className="border absolute -mt-3 ml-5 w-fit rounded-full border-dash flex items-center justify-center bg-background ">
                        <IoChevronDown size={12} />
                    </div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>{session?.user.name}</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="hover:rounded">Info users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent className="mr-3 rounded">
                                <DropdownMenuItem className="hover:rounded">Nom : {session?.user.name}</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="hover:rounded">Email : {session?.user.email}</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="hover:rounded">Rôle : {session?.user.role}</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="hover:rounded">Thème</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent className="mr-3 rounded">
                                <DropdownMenuItem onClick={() => { handleThemeChange("light"); setActive(1) }} className="hover:rounded flex justify-between w-48">
                                    Light
                                    {active === 1 ? <BsCheck2All size={25} className="text-violeground" /> : ""}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => { handleThemeChange("dark"); setActive(2) }} className="hover:rounded flex justify-between w-48">
                                    Dark
                                    {active === 2 ? <BsCheck2All size={25} className="text-violeground" /> : ""}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => { handleThemeChange("system"); setActive(3) }} className="hover:rounded flex justify-between w-48">
                                    Système
                                    {active === 3 ? <BsCheck2All size={25} className="text-violeground" /> : ""}
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        À propos de Falarohy
                        <DropdownMenuShortcut>
                            <Image src={images.logoDash} width={15} height={15} alt={""} />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="rounded"><LogoutBtn /></DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
