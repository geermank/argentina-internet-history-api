export default function handler(req, res) {
    const firstParagraph = "Even though our journey starts in 1994, we have to first go a bit back in time. In particular to the year 1987," +
        "year in which Argentina achieved a connection between its Ministry of Foreign Affairs and the University of Toronto." + 
        "This was the first internation communication of the country via e-mail, using the protocol UUCP. As a side note," +
        "this connection was possible by first communicating via telephone. "
    
    const response = {
        pageTitle: "Early years",
        content: [
            {
                type: "navbar",
                data: {
                    icon: "assets/logo.png",
                    title: "The history of the Internet in Argentina",
                    links: [
                        {
                            text: "Home",
                            url: "index.html"
                        },
                        {
                            text: "Mass adoption",
                            url: "index.html"
                        },
                        {
                            text: "Modern era",
                            url: "index.html"
                        }
                    ]
                }
            },
            {
                type: "title",
                data: {
                    text: "Early years"
                }
            },
            {
                type: "paragraph",
                data: {
                    text: firstParagraph
                }
            }
        ]
    }


  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).json({ response });
}
