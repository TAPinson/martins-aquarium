

import { useTip } from './TipDataProvider.js';
import { proTip } from './Tip.js'

export const tipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("aside");
    const tips = useTip();


    let tipHTMLRepresentation ="";

    for (const tip of tips) {
        tipHTMLRepresentation += proTip(tip)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
            <article>${tipHTMLRepresentation}</article>
    `
}