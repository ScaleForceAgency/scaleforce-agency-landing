import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Welcome',
      href: getPermalink('/#welcome'),
    },
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Categories',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tags',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Book a call', href: getPermalink('/#calendly') }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Services', href: getPermalink('/#services') },
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'FAQ', href: getPermalink('/#faq') },
        // { text: 'Customer stories', href: '#' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Locations', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
      ],
    },
    // TODO: optimize this once everything else is
    // {
      //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: getPermalink('/') },
    //     { text: 'Status', href: getPermalink('/') },
    //   ],
    // },
    {
      title: 'Contact',
      links: [
        { text: 'Phone', href: getPermalink('/#contact') },
        { text: 'Email', href: getPermalink('/#contact') },
        { text: 'Chat', href: getPermalink('/#contact') },
        { text: 'Video', href: getPermalink('/#calendly') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ScaleForceAgency' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://scaleforce.agency/"> ScaleForce</a> · All rights reserved.
  `,
};
