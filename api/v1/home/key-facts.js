export default function handler(req, res) {
  const facts = [
    { 
      title: "The Cybercafé Era",
      subtitle: "Argentina’s early internet growth was heavily driven by cybercafés, which made access affordable for many during the late 1990s and early 2000s",
      localAsset: "assets/cybercafes.jpg",
      imageContentDescription: "Image of a cybercafé in Argentina during the 2000s."
    },
    { 
      title: "Argentina’s Internet Gateway",
      subtitle: "Located in the coastal town of Las Toninas, Buenos Aires Province, this hub receives nearly all of Argentina’s submarine fiber optic cables, acting as the primary entry point for international internet traffic.",
      localAsset: "assets/internet_cable.jpg",
      imageContentDescription: "Submarine cable connecting Argentina to the rest of the world."
    },
    { 
      title: "National Satellite Infrastructure",
      subtitle: "The government-owned company ARSAT manages national satellites and infrastructure to improve connectivity, especially in rural areas",
      localAsset: "assets/arsat.jpg",
      imageContentDescription: "ARSAT ground station in Argentina."
    }
  ];
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).json({ facts });
}
