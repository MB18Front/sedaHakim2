import Image from 'next/image';
import Link from 'next/link';
import Logo from './img/Logo.svg';
import cart from "./img/cart.svg";
import profile from "./img/profile.svg";
import menuOpenImg from "./img/menu-open-btn.svg";

const MenuBar = () => {
    
    let menuToggle = false;
    
    const menuOpenClose = () => {
        const menuEl = document.getElementById('menu');
        if (menuToggle) {
            menuEl.style.right = "-100%";
        } else {
            menuEl.style.right = "0";
        }

        menuToggle = !menuToggle;
    }   

    return (
        <div className="flex justify-end border-t-4 p-4 border-el-gold sm:py-4 sm:px-0 gap-x-6 w-full bg-white sm:w-max sm:justify-center">
            <div id="menu-button"> 
                <button onClick={menuOpenClose} className="fixed z-[10000] top-0 right-0 m-6 sm:hidden p-2 bg-white aspect-square rounded-md ">
                    <Image src={menuOpenImg} width="auto" height="auto" />
                </button>
            </div>

            <div id="logo">
                <Image className="h-[43px] w-[104px] " src={Logo} height={'43px'} width={'104px'} />
            </div>

            <div id="menu" className="bg-[#fff] transition-all fixed top-0 h-screen flex justify-center items-center gap-x-6 sm:relative sm:h-[auto] sm:right-0 sm:shadow-none shadow-lg z-[1000]" >
                <div className="sm:flex sm:gap-x-10" id="menu-items">
                    <div className="p-4 sm:p-0 px-8 pl-20">
                        <Link href="#">
                            صفحه اصلی
                        </Link>
                    </div>
                    <div className="p-4 sm:p-0 px-8 pl-20">
                        <Link href="#">
                            آکادمی
                        </Link>
                    </div>
                    <div className="p-4 sm:p-0 px-8 pl-20">
                        <Link href="#">
                            مشاوره تخصصی
                        </Link>
                    </div>
                    <div className="p-4 sm:p-0 px-8 pl-20">
                        <Link href="#">
                            فروشگاه
                        </Link>
                    </div>
                    <div className="p-4 sm:p-0 px-8 pl-20">
                        <Link href="#">
                            مجله
                        </Link>
                    </div>
                    <div className="p-4 sm:p-0 px-8 pl-20">
                        <Link href="#">
                            همکاری با ما
                        </Link>
                    </div>
                    <div className="p-4 sm:p-0 px-8 pl-20">
                        <Link href="#">
                            پژوهشکده
                        </Link>
                    </div>
                </div>

            </div>

            <div className="flex  gap-x-1">
                <Link href="#">
                    <div id="cart" className="border-icon-blue border-2 p-2 rounded-xl transition shadow-icon-blue hover:scale-95 hover:shadow-lg ">
                            <Image className="w-[23px] h-[23px]" src={cart} width={"23px"} height={"23px"} />
                    </div>
                </Link>

                <Link href="#">
                    <div id="cart" className="w-full flex gap-x-1 items-center border-icon-blue border-2 p-2 rounded-xl transition shadow-icon-blue hover:scale-95 hover:shadow-lg ">
                            <Image className="h-[23px] w-[23px] p-0" src={profile} width={"auto"} height={"auto"} />

                            <section className="text-icon-blue p-0 hidden sm:block">
                                ورود / عضویت
                            </section>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default MenuBar;
