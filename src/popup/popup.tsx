// Import necessary modules and components
import React, { useEffect, useState } from "react";
import "./popup.css"; // Import your CSS file
import Fact from "../component/Facts";
import Summary from "../component/Summary";
import MyLoader from "../component/MyLoader";
import CopyIcon from "../assets/icon/CopyIcon";
import CheckIcon from "../assets/icon/CheckIcon";
import Header from "../component/Header";
import * as OpenAi from '../Services';
import { copyToClipboard } from "../utils";
import ErrorMessage from '../component/Error' // Update the path as needed
import { DEFAULT_TAB_URL } from "../constants";



// Define the Popup component
const Popup = () => {
    // State variables
    const [data, setData] = useState<string>("");
    // const [summarizedText, setSummarizedText] = useState<string>(
    //     '\n\n1. Indiatimes is a website that covers news, entertainment, technology, and more.\n\n2. The website has a special section called "Spectrum" which is dedicated to the LGBTQIA+ community.\n\n3. Indiatimes has a newsletter that subscribers can receive to get handpicked updates based on their interests.'
    // );
    const [summarizedText, setSummarizedText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('Something went wrong');

    const [error, setError] = useState<boolean>(false);

    const [action, setAction] = useState<string>("Summary");
    const [copyClicked, setCopyClicked] = useState<boolean>(false); // State to track whether copy icon is clicked


    // Fetch data from the active tab when component mounts
    useEffect(() => {
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                if (tabs?.[0]?.url === DEFAULT_TAB_URL) {
                    window.close();
                    return;
                }


                chrome.tabs.sendMessage(
                    tabs[0].id,
                    { message: "getInnerText" },
                    function (response) {
                        if (!response) {
                            setMessage("Please refresh your page once to get extension work");
                            setError(true);
                        } else {
                            setError(false);
                            setData(response);
                        }
                    }
                );
            }
        );

        return () => {
            setSummarizedText("");
            setData("");
        };
    }, []);

    // Call API on action change &working
    useEffect(() => {


        setLoading(true);

        if (!data) return;

        getSummaryFromOpenAi();
    }, [action, data]);

    async function getSummaryFromOpenAi() {
        try {
            const result = await OpenAi.getSummary({ data, action });
            setLoading(false);
            setSummarizedText(result.choices[0].text.trim());
            if(result.choices[0].text.trim() === ''){
                setError(true)
            }

        } catch (error) {
            setError(true)

        }
    }


    // Function to handle action button clicks
    const handleClick = (type: string) => {
        setSummarizedText('');
        setAction(type);
    };

    // Function to copy text to clipboard
    function copy(text: string) {
        if (text) {
            copyToClipboard(text)
            setCopyClicked(true); // Set the state to indicate copy icon is clicked
            setTimeout(() => setCopyClicked(false), 1000); // Reset copyClicked state after 1 second

        }
    }


    return (
        <div className="popup-container">
            <div id="app" className="app-container">
                <div className="flex h-full flex-col dark:bg-[#333440] dark:text-gray-50 overflow-hidden ">
                    {/* Header component for selecting action */}
                    <Header
                        action={action}
                        onActionChange={handleClick}
                        header={'Quick Brief: Rapid Web Page Summaries'}
                    />
                    {
                        error ? <ErrorMessage message={message} /> : <div className="content-container ">

                            <div className="overflow-y-auto h-full text-container">
                                {/* Content */}
                                <div
                                    id="headlessui-tabs-panel-:r2:"
                                    role="tabpanel"
                                    tabIndex={-1}
                                    data-headlessui-state="selected"
                                    aria-labelledby="headlessui-tabs-tab-:r0:"
                                >
                                    <div className="px-4">
                                        {/* Prose component for displaying text */}

                                        <div
                                            className="prose prose-sm prose-primary mb-4 max-w-none overflow-auto break-words dark:prose-invert"
                                            id="main"
                                            dir="auto"
                                        >
                                            {loading && !summarizedText ? (
                                                <MyLoader />
                                            ) : (
                                                <>
                                                    {/* Display Fact or Summary component based on action */}
                                                    {action === "Facts" && (
                                                        <Fact text={summarizedText} />
                                                    )}
                                                    {action === "Summary" && (
                                                        <Summary
                                                            text={summarizedText}
                                                            header={action}
                                                        />
                                                    )}
                                                </>
                                            )
                                            }
                                        </div>


                                    </div>
                                </div>

                            </div>
                            {/* Copy icon for copying summarized text */}

                            <div className="cursor-pointer">
                                {/* Show the CopyIcon only if summarizedText exists */}
                                {summarizedText && (
                                    <div
                                        title={copyClicked ? "Copied" : "Copy"}
                                        onClick={() => copy(summarizedText)}
                                    >
                                        {copyClicked ? <CheckIcon /> : <CopyIcon />}
                                    </div>
                                )}
                            </div>

                        </div>

                    }


                </div>
            </div>
        </div>
    );
};

// Export the component
export default Popup;
