import { Outlet } from '@remix-run/react';
import { mergeMeta } from '~/utils';

import type { Handle } from '~/types/handle';
import { BreadcrumbItem } from '~/components/elements/Breadcrumb';

export const meta = mergeMeta(() => [
  { title: 'Bisanonton - Trending' },
  { name: 'keywords', content: 'trending, trending movies, trending tv shows, trending anime' },
  { property: 'og:url', content: `${process.env.BASE_URL}/trending/` },
  { property: 'og:title', content: 'Bisanonton - Trending' },
  { name: 'description', content: 'Trending' },
  { property: 'og:description', content: 'Trending' },
  { name: 'twitter:title', content: 'Bisanonton - Trending' },
  { name: 'twitter:description', content: 'Trending' },
]);

export const handle: Handle = {
  breadcrumb: ({ t }) => (
    <BreadcrumbItem to="/trending/" key="trending">
      {t('trending.title')}
    </BreadcrumbItem>
  ),
};

const Trending = () => <Outlet />;

export default Trending;
