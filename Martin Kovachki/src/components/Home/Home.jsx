import Navigation from "../../Shared/Navigation"
import About from "../../Shared/About/About"
import "./Home.css"
import Projects from "../../Shared/Projects/Projects"
import Experience from "../../Shared/Experience/Experience"
import Education from "../../Shared/Education/Education"
export default function Home(){

    return(
        <>
        <section className="mainSection">

            <div className="staticSide">
                <Navigation></Navigation>
              
                </div>    
                <div className="scrollerSide">
                    <About></About>
                    <Projects></Projects>
                    <Experience></Experience>
                    <Education></Education>
                </div>
           
        </section>
        </>
    )
}