import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { MdOutlineAdd } from "react-icons/md"


const DrawerNewcous = () => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <p className="text-xl text-center">Avoir plus de connaissances à partager ?</p>
            </div>
            <Drawer>
                <DrawerTrigger className="w-full">
                    <div className="text-white flex items-center justify-center gap-3 bg-indigo-600/90 hover:bg-indigo-600 rounded py-2 w-full">
                        <MdOutlineAdd size={25} />
                        <p>créer un nouveau cours</p>
                    </div>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        Submit
                        <DrawerClose>
                            Cancel
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <div className="flex justify-between">
                <div className="flex flex-col items-center bg-dash  rounded-sm">
                    <p className="text-lg p-2 text-white bg-oragersground px-8.5 rounded-t-sm">Cours en cours</p>
                    <div className="p-5">
                        5
                    </div>
                </div>
                <div className="flex flex-col items-center bg-dash  rounded-sm">
                    <p className="text-lg p-2 text-white bg-oragersground px-7 rounded-t-sm">Étudier qui apprend</p>
                    <div className="p-5">
                        25
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DrawerNewcous