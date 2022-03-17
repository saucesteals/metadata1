export const generate = (): ScriptData => {
  return {
    scripts: {
      dynamicUrls: [
        "https://c.amazon-adsystem.com/bao-csm/forensics/a9-tq-forensics-incremental.min.js",
        "https://images-na.ssl-images-amazon.com/images/I/31YXrY93hfL.js",
        "https://images-na.ssl-images-amazon.com/images/I/61XKxrBtDVL._RC|11Y+5x+kkTL.js,51KMV3Cz2XL.js,31x4ENTlVIL.js,31f4+QIEeqL.js,01N6xzIJxbL.js,518BI433aLL.js,01rpauTep4L.js,31QZSjMuoeL.js,61ofwvddDeL.js,01KsMxlPtzL.js_.js?AUIClients/AmazonUI",
        "https://images-na.ssl-images-amazon.com/images/I/21G215oqvfL._RC|21OJDARBhQL.js,218GJg15I8L.js,31lucpmF4CL.js,2119M3Ks9rL.js,51AjK+mcqiL.js_.js?AUIClients/AuthenticationPortalAssets",
        "https://images-na.ssl-images-amazon.com/images/I/01wGDSlxwdL.js?AUIClients/AuthenticationPortalInlineAssets",
        "https://images-na.ssl-images-amazon.com/images/I/31TyXYXSSZL.js?AUIClients/CVFAssets",
        "https://images-na.ssl-images-amazon.com/images/I/81gLkT0N6tL.js?AUIClients/SiegeClientSideEncryptionAUI",
        "https://images-na.ssl-images-amazon.com/images/I/31jdfgcsPAL.js?AUIClients/AmazonUIFormControlsJS",
        "https://images-na.ssl-images-amazon.com/images/I/71QCGnDPPDL.js?AUIClients/FWCIMAssets",
        "https://images-na.ssl-images-amazon.com/images/I/71SLENeYBFL.js?AUIClients/ACICAssets",
        "https://static.siege-amazon.com/prod/profiles/AuthenticationPortalSigninNA.js",
      ],
      inlineHashes: [
        -1746719145, -1110312912, -815800953, -314038750, -211036372, 216868775,
        1424856663, 288533800, 318224283, -362024285, 585973559, 4606827,
        -1611905557, 1800521327, 2118020403, 1532181211, -1957835502,
        -222105570, -1616636591,
      ],
      elapsed: 8,
      dynamicUrlCount: 11,
      inlineHashesCount: 19,
    },
  };
};

export interface ScriptData {
  scripts: {
    dynamicUrls: string[];
    inlineHashes: number[];
    elapsed: number;
    dynamicUrlCount: number;
    inlineHashesCount: number;
  };
}
