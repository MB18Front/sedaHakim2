import Image from "next/image";
import dcImage from "./img/doctor.svg";
import graph from "./img/graph.svg";

const Doctor = () => {
    return (
        <>
            <div className="relative flex mobile:flex-row flex-col bg-gradient-to-r from-[#FFE99A] to-[#FAFAFA05] p-8 px-10 mobile:px-32 mobile:gap-16 gap-4 items-center justify-center">

                <Image className="absolute left-0 top-0 w-[20%] h-[100%]" src={graph} />

                <div className="px-8">

                    <div className="border-r-el-gold border-r-4 p-3">
                        <h4 className="text-[18px] text-right">
                            <strong>
                                توصیه های پزشک
                            </strong>
                        </h4>
                        <p className="text-right text-icon-blue">
                            صدای حکیم
                        </p>
                    </div>

                    <div>

                        <p className="text-justify p-4 pt-8">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                        </p>

                    </div>

                </div>

                <div className="flex justify-center mobile:w-full">

                    <Image src={dcImage} className="mobile:w-full w-[50%]"/>

                </div>

            </div>
        </>
    )
}

export default Doctor;