import './App.css'
import {PageTop} from "./components/page-top/index.jsx";
import {Company} from "./components/company/index.jsx";
import {Tasks} from "./components/tasks/index.jsx";
import {Cooperation} from "./components/cooperation/index.jsx";
import {PageBottom} from "./components/page-bottom/index.jsx";
import {BottomInfo} from "./components/bottom-info/index.jsx";
import {useRef, useState} from "react";

function App() {
    const [companyData, setCompanyData] = useState({});
    const [tasksData, setTasksData] = useState({});
    const [cooperationData, setCooperationData] = useState({});
    const ref = useRef(null);

    const collectData = () => ({
        company: companyData,
        tasks: tasksData,
        cooperation: cooperationData
    });

    return (
        <>
            <main className="page-container" ref={ref}>
                <PageTop/>
                <Company onDataChange={setCompanyData}/>
                <Tasks onDataChange={setTasksData}/>
                <Cooperation onDataChange={setCooperationData}/>
                <PageBottom collectData={collectData}/>
            </main>
            <BottomInfo/>
        </>
    );
}

export default App;
