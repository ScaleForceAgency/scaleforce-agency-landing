// https://docs.astro.build/en/guides/cms/contentful/#installing-dependencies

import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",

  // Below is an alternate arrangement for using the Contently Preview feature
  // (Preview feature only available to Contently paid plan users)
  // accessToken: import.meta.env.DEV
  //   ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
  //   : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  // host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});