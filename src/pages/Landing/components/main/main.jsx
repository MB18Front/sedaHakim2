import Image from "next/image";
import CourseCategory from "./course-category/course-category";
import circle from "./img/circle.svg";
import NewCourses from "./new-courses/new-courses";
import AboutUs from "./about-us/about-us";
import PopCourses from "./pop-courses/pop-courses";
import Doctor from "./doctor/doctor";

const MainPart = () => {
    return (
        <>
            <main className="bg-main-color bg-header-pc  z-20">
                <div className="absolute w-full p-0 top-0 z-[-100] translate-x-[1.25%] translate-y-[100%] mobile:translate-y-[40%] scale-x-150">
                    {/* fix the circle size changing */}
                    <Image src={circle}/>
                </div>
                <CourseCategory />
                <NewCourses />
                <AboutUs />
                <PopCourses />
                <Doctor />
            </main>
        </>
    )
};

export default MainPart;