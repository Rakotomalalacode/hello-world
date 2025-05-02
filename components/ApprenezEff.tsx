import images from "@/constants/falarohy"
import Image from "next/image"
import { FaUser } from "react-icons/fa6"
import { IoIosSchool } from "react-icons/io"

const ApprenezEff = () => {
    return (
        <div>
            <div className="w-full h-52 flex justify-between pr-4 rounded-xl bg-vertground">
                <div className="p-4 flex flex-col justify-between">
                    <div>
                        <h1 className="text-white text-3xl">Apprenez efficacement avec nous !</h1>
                        <p className="text-gray-200">Welcome to the Falarohy</p>
                    </div>
                    <div className="flex gap-16">
                        <div className="flex  items-center gap-3 text-white">
                            <div className="max-w-16 min-w-16 flex flex-col items-center text-white justify-center h-16 bg-violeground rounded-full">
                                <IoIosSchool size={40} />
                            </div>
                            <div>
                                <p className="text-2xl ">Students</p>
                                <p className="text-md text-gray-200">5000 +</p>
                            </div>
                        </div>
                        <div className="flex  items-center gap-3 text-white">
                            <div className="max-w-16 min-w-16 flex flex-col items-center text-white justify-center h-16 bg-oragersground rounded-full">
                                <FaUser size={30} />
                            </div>
                            <div>
                                <p className="text-2xl ">Export Mentors</p>
                                <p className="text-md text-gray-200">3000 +</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src={images.teacherpreview}
                    alt={"teacher-preview"}
                    width={500}
                    height={500}
                    className="w-auto" />
            </div>
        </div>
    )
}

export default ApprenezEff