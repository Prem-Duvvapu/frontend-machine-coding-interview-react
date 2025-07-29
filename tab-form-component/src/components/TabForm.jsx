import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState({
        name: "Prem",
        age: "23",
        email: "premd@gmail.com",
        interests: ["coding", "reading books"],
        theme: "dark",
    });

    const tabs = [
        {
            name: "Profile",
            component: Profile,
        },
        {
            name: "Interests",
            component: Interests,
        },
        {
            name: "Settings",
            component: Settings,
        },
    ];

    const ActiveTabComponent = tabs[activeTab].component;

    return (
        <div>
            <div className="heading-container">
                {
                    tabs.map((tab, index) => (
                        <div 
                            key={index} 
                            className="heading" 
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.name}
                        </div>
                    ))
                }
            </div>

            <div className="tab-body">
                <ActiveTabComponent data={data} setData={setData} />
            </div>
        </div>
    );
}

export default TabForm;
