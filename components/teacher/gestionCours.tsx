import Image from "next/image"
import ApprenezEff from "../ApprenezEff"
import DrawerNewcous from "./DrawerNewcous"
import { ScrollArea } from "@/components/ui/scroll-area"
import images from "@/constants/falarohy"
import { VscKebabVertical } from "react-icons/vsc";
import { ChartInteractive } from "./ChartInteractive"

const GestionCours = () => {
    return (
        <div className="py-4 flex flex-col gap-4">
            <div className="flex w-full gap-4 justify-between">
                <div className="w-2/3">
                    <ApprenezEff />
                </div>
                <div className="w-1/3">
                    <DrawerNewcous />
                </div>
            </div>
            <div className="flex justify-between gap-4">
                <div className="min-w-[410px] flex flex-col gap-4">
                    <h1 className="text-xl">Listes des cours</h1>
                    <ScrollArea className="max-h-[420px] min-h-[420px]">
                        <div className="bg-darkwhite p-4 mb-4 flex justify-between items-center rounded shadow">
                            <div className="flex gap-4">
                                <Image
                                    src={images.programmation}
                                    alt={"programmation"}
                                    width={500}
                                    height={500}
                                    className="w-20 h-14 rounded-sm " />
                                <div>
                                    <h1 className="text-xl">Programmation</h1>
                                    <p className="text-dash">25+ cours</p>
                                </div>
                            </div>
                            <button className="w-5 h-6 flex justify-center items-center">
                                <VscKebabVertical />
                            </button>
                        </div>
                        <div className="bg-darkwhite p-4 mb-4 flex justify-between items-center rounded shadow">
                            <div className="flex gap-4">
                                <Image
                                    src={images.programmation}
                                    alt={"programmation"}
                                    width={500}
                                    height={500}
                                    className="w-20 h-14 rounded-sm " />
                                <div>
                                    <h1 className="text-xl">Programmation</h1>
                                    <p className="text-dash">25+ cours</p>
                                </div>
                            </div>
                            <button className="w-5 h-6 flex justify-center items-center">
                                <VscKebabVertical />
                            </button>
                        </div>
                        <div className="bg-darkwhite p-4 mb-4 flex justify-between items-center rounded shadow">
                            <div className="flex gap-4">
                                <Image
                                    src={images.programmation}
                                    alt={"programmation"}
                                    width={500}
                                    height={500}
                                    className="w-20 h-14 rounded-sm " />
                                <div>
                                    <h1 className="text-xl">Programmation</h1>
                                    <p className="text-dash">25+ cours</p>
                                </div>
                            </div>
                            <button className="w-5 h-6 flex justify-center items-center">
                                <VscKebabVertical />
                            </button>
                        </div>
                        <div className="bg-darkwhite p-4 mb-4 flex justify-between items-center rounded shadow">
                            <div className="flex gap-4">
                                <Image
                                    src={images.programmation}
                                    alt={"programmation"}
                                    width={500}
                                    height={500}
                                    className="w-20 h-14 rounded-sm " />
                                <div>
                                    <h1 className="text-xl">Programmation</h1>
                                    <p className="text-dash">25+ cours</p>
                                </div>
                            </div>
                            <button className="w-5 h-6 flex justify-center items-center">
                                <VscKebabVertical />
                            </button>
                        </div>
                        <div className="bg-darkwhite p-4 mb-4 flex justify-between items-center rounded shadow">
                            <div className="flex gap-4">
                                <Image
                                    src={images.programmation}
                                    alt={"programmation"}
                                    width={500}
                                    height={500}
                                    className="w-20 h-14 rounded-sm " />
                                <div>
                                    <h1 className="text-xl">Programmation</h1>
                                    <p className="text-dash">25+ cours</p>
                                </div>
                            </div>
                            <button className="w-5 h-6 flex justify-center items-center">
                                <VscKebabVertical />
                            </button>
                        </div>
                        <div className="bg-darkwhite p-4 mb-4 flex justify-between items-center rounded shadow">
                            <div className="flex gap-4">
                                <Image
                                    src={images.programmation}
                                    alt={"programmation"}
                                    width={500}
                                    height={500}
                                    className="w-20 h-14 rounded-sm " />
                                <div>
                                    <h1 className="text-xl">Programmation</h1>
                                    <p className="text-dash">25+ cours</p>
                                </div>
                            </div>
                            <button className="w-5 h-6 flex justify-center items-center">
                                <VscKebabVertical />
                            </button>
                        </div>
                    </ScrollArea>
                </div>
                <div className="w-[80%] flex flex-col gap-4">
                    <h1 className="text-xl">Activité actuelle</h1>
                    <ChartInteractive/>
                </div>
            </div>
        </div>
    )
}

export default GestionCours