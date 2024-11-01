import './App.css'
import {PageTop} from "./components/page-top/index.jsx";
import {Company} from "./components/company/index.jsx";
import {Tasks} from "./components/tasks/index.jsx";
import {Cooperation} from "./components/cooperation/index.jsx";
import {PageBottom} from "./components/page-bottom/index.jsx";
import {BottomInfo} from "./components/bottom-info/index.jsx";

function App() {

    return (
        <>
            <main className="page-container">
                <PageTop/>
                <Company/>
                <Tasks/>
                <Cooperation/>
                <PageBottom/>
            </main>
            <BottomInfo/>
        </>

    )
}

export default App
