import { useCriminal, getCriminal } from "./criminalDataProvider.js";
import { criminalHTMLConverter } from "./criminal.js";


const contentTarget = document.querySelector(".criminalsContainer")
export const criminalList = () => {

        getCriminal()
            .then(() => {
                const criminalArray = useCriminal()
                let criminalHTMLRepresentations = ""
                criminalArray.forEach(criminal => {
                   criminalHTMLRepresentations += criminalHTMLConverter(criminal)
                })
    
                contentTarget.innerHTML = criminalHTMLRepresentations
            })
    }
