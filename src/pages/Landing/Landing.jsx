import Header from "./components/Header/Header";
import MainPart from "./components/main/main";
import MenuBar from "./components/Menu-bar/Menu-bar";

const Landing = () => {
    return(
        <>
            <div id="nav-bar" className="bg-white flex justify-center items-center">
                <MenuBar />
            </div>
            <Header/>
            <MainPart />
        </>
    )
}

export default Landing;
