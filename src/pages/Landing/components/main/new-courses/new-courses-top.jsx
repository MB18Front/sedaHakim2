import Image from "next/image";
import rightArr from "./img/right-arrow.svg";
import leftArr from "./img/left-arrow.svg";

const NewCoursesTop = () => {
    return (
        <>
            <div className="flex justify-between ">

                <div className="border-r-el-gold border-r-4 p-3">
                    <h4 className="text-[18px] text-right">
                        <strong>
                        جدید ترین دوره ها
                        </strong>
                    </h4>
                    <p>
                        دوره های آپدیت شده و جدید
                    </p>
                </div>

                <div className="flex items-center">
                    <div className="flex gap-4">
                        <button className="bg-white p-2 rounded-md shadow-md border-[#B0B0B0] border-2 text-[#B0B0B0] transition hover:scale-95">
                        مشاهده همه +
                        </button>
                        <div className="gap-1 hidden mobile:flex">
                            {/* set event */}
                            <button className="bg-white flex justify-center items-center p-2 rounded-md shadow-md border-[#B0B0B0] border-[1px] text-[#B0B0B0] transition hover:scale-95 aspect-square">
                                <Image src={rightArr} className="w-[20px] h-[20px]"/>
                            </button>

                            <button className="bg-white flex justify-center items-center p-2 rounded-md shadow-md border-[#B0B0B0] border-[1px] text-[#B0B0B0] transition hover:scale-95 aspect-square">
                                <Image src={leftArr} className="w-[20px] h-[20px]"/>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default NewCoursesTop;