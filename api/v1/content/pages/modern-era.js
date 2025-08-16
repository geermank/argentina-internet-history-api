import { sduiResponse } from "../../sdui/response";
import { navBar, navBarLink } from "../../sdui/components/navigation/navbar";
import { title, subtitle, paragraph } from "../../sdui/components/text/text";
import { 
    firstParagraph,
    secondParagraph,
    thirdParagraph, 
    fourthParagraph, 
    fifthParagrah, 
    sixthParagraph
} from "./modern-era-strings";
import { verticalSpace, Space } from "../../sdui/components/spacing/verticalSpace";
import { timeline, timelineMilestone } from "../../sdui/components/timeline/timeline";

export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json(
        sduiResponse(
            "Modern era",
            [
                navBar(
                    "assets/logo.png",
                    "The history of the Internet in Argentina",
                    [
                        navBarLink("Home", "index.html"),
                        navBarLink("Early years", "early-years.html"),
                        navBarLink("Mass adoption", "mass-adoption.html")
                    ]
                ),
                title("Mass adoption (2015 - 2025)"),
                verticalSpace(Space.Sm),
                subtitle("In a nutshell"),
                timeline(
                    [
                        timelineMilestone("1987", "First international email connection"),
                        timelineMilestone("1993", "Creation of RETINA network"),
                        timelineMilestone("1994", "First digital connection"),
                        timelineMilestone("1995", "Internet access goes commercial"),
                        timelineMilestone("2000", "Rise of free ISPs"),
                    ]
                ),
                verticalSpace(Space.Md),
                paragraph(firstParagraph),
                paragraph(secondParagraph),
                paragraph(thirdParagraph),
                paragraph(fourthParagraph),
                paragraph(fifthParagrah),
                paragraph(sixthParagraph)
            ]
        )
    );
}
