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
