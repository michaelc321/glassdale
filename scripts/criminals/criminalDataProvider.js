let criminal = []

export const useCriminal = () => {
    return criminal.slice()
}

export const getCriminal = () => {
    return fetch("https://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(
        parsedCriminals => {
            criminal = parsedCriminals
        }
    )
}
