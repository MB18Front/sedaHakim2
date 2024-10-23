import Image from "next/image";
import h1Bg from "./img/h1-bg.svg";
import searchImg from "./img/search.svg";
import headerBgPc from "./img/header-bg-pc.svg";
import headerBgMob from "./img/header-bg-mobile.svg";

const Header = () => {
    return (
        <>
            <header className="h-[60vh] flex justify-center items-center sm:px-[20rem] px-5 relative z-[100]">
                <div className="absolute top-0 left-0 z-[-1000]">
                    <Image src={headerBgPc} className="sm:block hidden"/>
                    <Image src={headerBgMob} className="sm:hidden block"/>
                </div>
                <div>
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl sm:text-5xl relative"> 
                            معتبر ترین سایت <span className="relative w-full text-white">
                                <Image src={h1Bg} className="absolute top-0 left-0 z-[-1] max-w-full scale-[2.5] translate-x-[6%]" />
                                طب سنتی
                            </span> ایران 
                        </h1>

                        <p className="p-4 m-4 text-sm">
                        موسسه پژوهشی و آموزشی صدای حکیم با هدف ارتقا سطح علمی و ترویج دانش طب سنتی با بهره گیری از برترین اساتید اقدام به برگزاری دوره های ویژه مینماید.
                        </p>
                    </div>

                    <div id="search-bar-form" className="flex justify-between shadow-2xl rounded-lg mt-6 p-4 gap-8 bg-white">
                        <input className="w-full" type="text" placeholder="جست و جو در محتوا..."/>
                        <button className="bg-el-gold p-2 rounded-md shadow">
                            <Image src={searchImg} className="w-[1.5rem]"/>
                        </button>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;