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
import { SpaceSm, SpaceMd } from "../../sdui/components/spacing/spacing";
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
                title("Modern era (2015 - 2025)"),
                verticalSpace(SpaceSm),
                subtitle("In a nutshell"),
                timeline(
                    [
                        timelineMilestone("2023", "Deployment of 5G begins"),
                        timelineMilestone("2024", "Fiber optic connections reach 4.8 millon subscribers"),
                        timelineMilestone("2025", "90.1% of the population uses the Internet")
                    ]
                ),
                verticalSpace(SpaceMd),
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
