import Image from "next/image";
import sonatiTebImg from "./img/ketab-sonati.svg";


const NewCourseSlider = () => {
    return (
        <>
            <div className="flex gap-2 mt-4 justify-center">
                <div className="">
                    <div>
                        <Image src={sonatiTebImg} className="rounded-t-2xl"/>
                    </div>

                    <div className="text-right p-4 rounded-b-2xl bg-white shadow-lg">
                        <p>
                            کتابخانه جامع طب سنتی - اسلامی
                        </p>

                        <div className="flex justify-between py-3 items-center">
                            <p> 700.000 ریال </p>

                            <button className="bg-icon-blue p-2 px-4 text-white rounded-md shadow-md">
                                خرید دوره
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sm:block hidden">
                    <div>
                        <Image src={sonatiTebImg} className="rounded-t-2xl"/>
                    </div>

                    <div className="text-right p-4 rounded-b-2xl bg-white shadow-lg">
                        <p>
                            کتابخانه جامع طب سنتی - اسلامی
                        </p>

                        <div className="flex justify-between py-3 items-center">
                            <p> 700.000 ریال </p>

                            <button className="bg-icon-blue p-2 px-4 text-white rounded-md shadow-md">
                                خرید دوره
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sm:block hidden">
                    <div>
                        <Image src={sonatiTebImg} className="rounded-t-2xl"/>
                    </div>

                    <div className="text-right p-4 rounded-b-2xl bg-white shadow-lg">
                        <p>
                            کتابخانه جامع طب سنتی - اسلامی
                        </p>

                        <div className="flex justify-between py-3 items-center">
                            <p> 700.000 ریال </p>

                            <button className="bg-icon-blue p-2 px-4 text-white rounded-md shadow-md">
                                خرید دوره
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sm:block hidden">
                    <div>
                        <Image src={sonatiTebImg} className="rounded-t-2xl"/>
                    </div>

                    <div className="text-right p-4 rounded-b-2xl bg-white shadow-lg">
                        <p>
                            کتابخانه جامع طب سنتی - اسلامی
                        </p>

                        <div className="flex justify-between py-3 items-center">
                            <p> 700.000 ریال </p>

                            <button className="bg-icon-blue p-2 px-4 text-white rounded-md shadow-md">
                                خرید دوره
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewCourseSlider;