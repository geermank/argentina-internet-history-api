import {
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    fourthParagraph,
    fifthParagrah,
    sixthParagraph,
    seventhParagraph
} from "./mass-adoption-strings"
import { sduiResponse } from "../../sdui/response";
import { navBar, navBarLink } from "../../sdui/components/navigation/navbar";
import { title, subtitle, paragraph } from "../../sdui/components/text/text";
import { SpaceSm, SpaceMd } from "../../sdui/components/spacing/spacing";
import { timeline, timelineMilestone } from "../../sdui/components/timeline/timeline";

export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json(
        sduiResponse(
            "Mass adoption",
            [
                navBar(
                    "assets/logo.png",
                    "The history of the Internet in Argentina",
                    [
                        navBarLink("Home", "index.html"),
                        navBarLink("Early years", "early-years.html"),
                        navBarLink("Modern era", "modern-era.html")
                    ]
                ),
                title("Mass adoption (2005 - 2015)"),
                SpaceSm,
                subtitle("In a nutshell"),
                timeline(
                    [
                        timelineMilestone("2007", "Launch of 3G"),
                        timelineMilestone("2010", "Start of the Conectar Igualdad program"),
                        timelineMilestone("2013", "Dial-up connections go virtually extinct"),
                        timelineMilestone("2014", "Introduction of 4G LTE"),
                        timelineMilestone("2014", "Launch of ARSAT-1")
                    ]
                ),
                SpaceMd,
                paragraph(firstParagraph),
                paragraph(secondParagraph),
                paragraph(thirdParagraph),
                paragraph(fourthParagraph),
                paragraph(fifthParagrah),
                paragraph(sixthParagraph),
                paragraph(seventhParagraph)
            ]
        )
    );
}