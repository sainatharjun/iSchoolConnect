import { Component } from "react";
import ErrorManager from "./error.manager";
import HeroComp from "./hero.component";

class MainApp extends Component{
    render(){
        return <div>
                    <h1>Welcome to My Application</h1>
                    <ErrorManager>
                        <HeroComp power={6}></HeroComp>
                    </ErrorManager>
                    <ErrorManager>
                        <HeroComp power={4}></HeroComp>
                    </ErrorManager>
                    <ErrorManager>
                        <HeroComp power={7}></HeroComp>
                    </ErrorManager>
                </div>
    }
}

export default MainApp