import NewCourseSlider from "./new-Courses-slider/new-courses-slider";
import NewCoursesTop from "./new-courses-top";

const NewCourses = () => {
    return (
        <>
            <div className="bg-main-color p-8 mt-8 mobile:px-32">

                <NewCoursesTop />

                <NewCourseSlider />

            </div>
        </>
    )
}

export default NewCourses;