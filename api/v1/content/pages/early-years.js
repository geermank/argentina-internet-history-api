import { sduiResponse } from "../../sdui/response";
import { navBar, navBarLink } from "../../sdui/components/navigation/navbar";
import { title, subtitle, paragraph } from "../../sdui/components/text/text"
import { 
    firstParagraph,
    secondParagraph,
    thirdParagraph, 
    fourthParagraph, 
    fifthParagrah, 
    sixthParagraph, 
    seventhParagraph, 
    eighthParagraph,
    ninthParagraph
} from "./early-yeras-strings";
import { verticalSpace, Space } from "../../sdui/components/spacing/verticalSpace";
import { timeline, timelineMilestone } from "../../sdui/components/timeline/timeline";

export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json(
        sduiResponse(
            "Early years",
            [
                navBar(
                    "assets/logo.png",
                    "The history of the Internet in Argentina",
                    [
                        navBarLink("Home", "index.html"),
                        navBarLink("Mass adoption", "index.html"),
                        navBarLink("Modern era", "index.html")
                    ]
                ),
                title("Early years (1994 - 2005)"),
                verticalSpace(Space.Sm),
                subtitle("In a nutshell"),
                timeline(
                    [
                        timelineMilestone("1987", "First international email connection"),
                        timelineMilestone("First TCP/IP Internet connection", "1990"),
                        timelineMilestone("1993", "Creation of RETINA network"),
                        timelineMilestone("First submarine fiber-optic cable and digital connection", "1994"),
                        timelineMilestone("1995", "Internet access goes commercial"),
                        timelineMilestone("National interest declaration and broadband launch", "1997"),
                        timelineMilestone("2000", "Rise of free ISPs"),
                    ]
                ),
                verticalSpace(Space.Sm),
                subtitle("Laying the Foundations"),
                paragraph(firstParagraph),
                paragraph(secondParagraph),
                paragraph(thirdParagraph),
                paragraph(fourthParagraph),
                verticalSpace(Space.Sm),
                subtitle("Commercial connections and beyond"),
                paragraph(fifthParagrah),
                paragraph(sixthParagraph),
                paragraph(seventhParagraph),
                paragraph(eighthParagraph),
                paragraph(ninthParagraph)
            ]
        )
    );
}
