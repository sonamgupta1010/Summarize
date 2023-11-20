// Importing necessary modules
import axios from "axios";
import { generatePrompt } from "../utils";
import { MAXIMUM_ATTEMPT, MAXIMUM_TOKENS, TEMP } from "../constants";

// Retrieving environment variables
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const SUMMARY_URL = process.env.SUMMARY_URL;

// Function to try a request to the summary API
async function tryRequest(data, action, retries = 0) {
    try {
        // Attempt to send a POST request to the summary API
        const { data: openAiResult } = await axios.post(
            SUMMARY_URL,
            {
                // Generate a prompt for the summary
                prompt: generatePrompt(data, action),
                // Set the maximum number of tokens for the response
                max_tokens: MAXIMUM_TOKENS,
                // Set the temperature for the response
                temperature: TEMP,
            },
            // Include the API key in the headers
            { headers: { Authorization: `Bearer ${REACT_APP_API_KEY}` } }
        );
        // If the request is successful, return the result
        return openAiResult;
    } catch (error) {
        // If the request fails and the maximum number of retries has not been reached, retry the request
        if (retries < MAXIMUM_ATTEMPT) {
            return tryRequest(data, action, retries + 1);
        } else {
            // If the maximum number of retries has been reached, throw the error
            throw error;
        }
    }
}

// Function to get a summary from the API
export async function getSummary(args) {
    // Try the request to the API and return the result
    return tryRequest(args.data, args.action);
}
