// https://docs.astro.build/en/guides/cms/contentful/#installing-dependencies

import contentful from "contentful";
import type { EntryFieldTypes, Asset } from "contentful";

export interface BlogPost {
  contentTypeId: "blogPost",
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  }
}

export interface LandingImage {
  contentTypeId: "image",
  fields: {
    title: EntryFieldTypes.Text;
    alt: EntryFieldTypes.Text;
    file: Asset;
  }
};

export interface LandingPage {
  contentTypeId: "landingPage";
  fields: {
    identifier: EntryFieldTypes.Text;
    metadata: Metadata;
    hero: Component;
    services: Array<Component>;
    features: Array<Component>;
    faq: Component;
    contact: Component;
    blog: Component;
  };
};

interface Metadata {
  contentTypeId: "metadata",
  fields: {
    identifier: EntryFieldTypes.Text;
  }
};

interface TitleBlock {
  contentTypeId: "titleBlock";
  fields: {
    identifier: EntryFieldTypes.Text;
    tagline: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    subtitle: EntryFieldTypes.Text;
  }
};

interface Card {
  contentTypeId: "card";
  fields: {
    identifier: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Symbol;
  }
};

interface FaqCard {
  contentTypeId: "faqCard";
  fields: {
    identifier: EntryFieldTypes.Text;
    question: EntryFieldTypes.Text;
    answer: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Symbol;
  }
};

interface Component {
  contentTypeId: "component";
  fields: {
    identifier: EntryFieldTypes.Text;
    sectionHeader: TitleBlock;
    titleBlockContent: TitleBlock;
    cards: Array<Card> | Array<FaqCard>;
  }
};

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});