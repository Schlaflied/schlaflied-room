import rss from '@astrojs/rss';

// One item per writing page (not per essay/episode inside a page) — the
// per-episode tabs on toronto-100/musings/fanfiction carry no publish date
// of their own, so an episode-level feed would need invented dates. Page
// last-modified dates are real, git-verifiable data.
const items = [
  {
    title: '我和多伦多的100件小事',
    link: '/zh/writing/toronto-100/',
    description: '已出版的散文集，一百件小事加一份蒙特利尔手记：无草稿，想到哪写到哪，回头才看见那些反复出现的暗线。',
    pubDate: new Date('2026-09-01'),
  },
  {
    title: '随笔',
    link: '/zh/writing/musings/',
    description: '不成集、不定期的零散文字。',
    pubDate: new Date('2026-09-01'),
  },
  {
    title: '同人',
    link: '/zh/writing/fanfiction/',
    description: '以原神向为主，围绕一对CP（艾尔海森 × 卡维）写的短篇。套着别人的故事，说的是自己真实的思考。',
    pubDate: new Date('2026-09-01'),
  },
  {
    title: 'Our Insync',
    link: '/zh/writing/our-insync/',
    description: '原创半自传体小说，二十章。借一个虚构的故事，讲自己童年真实经历过的东西。',
    pubDate: new Date('2026-08-31'),
  },
];

export function GET(context) {
  return rss({
    title: 'Schlaflied 的一间房 · 写作',
    description: '写作、AI、学习、开源与生活留下的痕迹。这是写作板块的更新订阅——新的一篇或一页发布时，这里会先知道。',
    site: context.site,
    items,
    customData: '<language>zh-CN</language>',
  });
}
