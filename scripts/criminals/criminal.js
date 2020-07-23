export const criminalHTMLConverter = (criminalObj) => {
    return `
    <section class="criminal__card">
    <h1>${criminalObj.name}</h1>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </section>
    `
}