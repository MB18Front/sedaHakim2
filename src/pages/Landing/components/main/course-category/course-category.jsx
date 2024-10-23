import Image from "next/image";
import anatomi from "./img/anatomi.svg";
import yadavi from "./img/yadavi.svg";
import enabie from "./img/enabie.svg";
import mabaniTeb from "./img/mabani-teb.svg";
import faravarde from "./img/faravarde.svg";

const CourseCategory = () => {
    return (
        <div className="p-8 mobile:px-32 px-16">

            <div className="flex justify-center mobile:justify-between gap-4 overflow-hidden">

                <div className="flex gap-2">
                    <button className="bg-white p-2 rounded-md shadow-sm border-el-gold border-2 text-el-gold transition hover:scale-95">
                        دوره های آموزشی
                    </button>
                    <button className="bg-white p-2 rounded-md shadow-sm border-[#B0B0B0] border-2 text-[#B0B0B0] transition hover:scale-95">
                        دوره های آموزشی
                    </button>
                </div>

                <div className="hidden mobile:block">
                    <button className="bg-white p-2 rounded-md shadow-sm border-[#B0B0B0] border-2 text-[#B0B0B0] transition hover:scale-95">
                        مشاهده همه +
                    </button>
                </div>
 
            </div>

            <div className="flex flex-wrap justify-center mt-4 mobile:justify-between">

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                

            </div>

            <div className="flex-wrap justify-center mt-4 mobile:justify-between hidden mobile:flex">

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>

                <div className="text-canter p-2">
                    <div className="p-2 rounded-xl shadow-md bg-white">
                        <Image src={anatomi}  className="aspect-square"/>
                    </div>

                    <p className="p-2 text-sm">
                        آناتومی
                    </p>

                </div>



            </div>

            <div className="block mobile:hidden">
                <button className="bg-white p-2 rounded-md shadow-md text-[#B0B0B0] transition hover:scale-95">
                    مشاهده همه +
                </button>
            </div>
                
        </div> 
    )
};

export default CourseCategory;