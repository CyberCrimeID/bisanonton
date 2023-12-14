import { Outlet } from '@remix-run/react';
import { mergeMeta } from '~/utils';

import type { Handle } from '~/types/handle';
import { searchPages } from '~/constants/tabLinks';
import { BreadcrumbItem } from '~/components/elements/Breadcrumb';

export const meta = mergeMeta(() => [
  { title: 'Bisanonton - Search' },
  { name: 'description', content: 'Search Movies, Tv Series and Anime on Bisanonton' },
  { property: 'og:url', content: `${process.env.BASE_URL}/search` },
  { property: 'og:title', content: 'Bisanonton - Search' },
  { property: 'og:image', content: `${process.env.BASE_URL}/api/ogimage?it=search` },
  { property: 'og:description', content: 'Search Movies, Tv Series and Anime on Bisanonton' },
  { name: 'twitter:title', content: 'Bisanonton - Search' },
  { name: 'twitter:image', content: `${process.env.BASE_URL}/api/ogimage?it=search` },
  { name: 'twitter:description', content: 'Search Movies, Tv Series and Anime on Bisanonton' },
]);

export const handle: Handle = {
  breadcrumb: ({ t }) => (
    <BreadcrumbItem to="/search" key="search">
      {t('search.action')}
    </BreadcrumbItem>
  ),
  showTabLink: true,
  tabLinkPages: searchPages,
  tabLinkTo: () => '/search/',
  miniTitle: ({ t }) => ({
    title: t('search.action'),
    showImage: false,
  }),
};

const SearchPage = () => <Outlet />;

export default SearchPage;
