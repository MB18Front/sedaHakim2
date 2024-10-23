import Image from "next/image";
import videoImg from "./img/video.svg";

const AboutUs = () => {
    return (
        <>
        <div className="p-8 py-18 px-16 mobile:px-32 mt-8 block mobile:flex items-center bg-pink-back shadow-inner gap-40">

            <div className="text-right">
                <div className="border-r-2 border-solid border-r-el-gold p-4 text-right">

                    <h3 className="text-[28px] text-right text-icon-blue">
                        <span className="text-black"> با </span>
                        <strong>
                          صدای حکیم
                        </strong>
                    </h3>
                    <p className="text-lg">
                        بیشتر آشنا شوید
                    </p>
                </div>

                <div className="m-1 mt-4">

                    <p>
                        موسسه پژوهشی و آموزشی صدای حکیم با هدف ارتقا سطح علمی و ترویج دانش طب سنتی با بهره گیری از برترین اساتید اقدام به برگزاری دوره های ویژه مینماید
                    </p>

                </div>

                <div className="m-1 mt-4">
                    <button className="bg-[#333] text-white p-2 px-4 rounded-lg shadow-md">
                        بیشتر بخوانید
                    </button>
                </div>
            </div>

            <div className="mobile:mt-0 mt-8">
                <Image src={videoImg}/>
            </div>

        </div>
        </>
    )
}

export default AboutUs;