// https://docs.astro.build/en/guides/cms/contentful/#installing-dependencies

import contentful from "contentful";
import type { EntryFieldTypes, Asset } from "contentful";

export interface LandingImage {
  contentTypeId: "image";
  fields: {
    title: EntryFieldTypes.Text;
    alt: EntryFieldTypes.Text;
    file: Asset;
  };
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
    contactUs: Array<Component>;
    blog: Component;
  };
};

export interface Tag {
  contentTypeId: "tag";
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  };
};

export interface Category {
  contentTypeId: "category";
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
};

export interface Author {
  contentTypeId: "author";
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  };
};

export interface BlogPost {
  contentTypeId: "blogPost";
  fields: {
    publishDate: EntryFieldTypes.Date;
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    author: EntryFieldTypes.Text;
    category: Category;
    tags: Array<Tag>;
    excerpt: EntryFieldTypes.Text;
    featuredImage: Asset;
    content: EntryFieldTypes.RichText;
  };
};

interface Metadata {
  contentTypeId: "metadata";
  fields: {
    identifier: EntryFieldTypes.Text;
    pageTitle: EntryFieldTypes.Text;
  };
};

interface TitleBlock {
  contentTypeId: "titleBlock";
  fields: {
    identifier: EntryFieldTypes.Text;
    tagline: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    subtitle: EntryFieldTypes.Text;
  };
};

interface Card {
  contentTypeId: "card";
  fields: {
    identifier: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Symbol;
  };
};

interface FaqCard {
  contentTypeId: "faqCard";
  fields: {
    identifier: EntryFieldTypes.Text;
    question: EntryFieldTypes.Text;
    answer: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Symbol;
  };
};

interface Component {
  contentTypeId: "component";
  fields: {
    identifier: EntryFieldTypes.Text;
    sectionHeader: TitleBlock;
    titleBlockContent: TitleBlock;
    cards: Array<Card> | Array<FaqCard>;
  };
};

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});