const DUMMY_DATA = [
    {
        title: 'درباره ما',
        link: 'about',
        children: [
            {
                label: 'مسئولیت اجتماعی',
                link: '/assets/documents/social-res.pdf',
            },
        ],
    },
    {
        title: 'ارتباط با ما',
        link: '#',
        children: [
            {
                link: '#',
                label: "",
                links: [
                    {
                        title: '021-4500',
                        link: '0214500',
                    }
                ],
            },
            {
                label: "",
                links: [
                    {
                        title: '026-4500',
                        link: '0264500',
                    }
                ],
            },
        ],
    },
    {
        title: 'اخبار و مقالات',
        link: 'panel/blogs',
    },
    {
        title: 'سوالات متداول',
        link: 'faq',
    },
    {
        title: 'استخدام',
        link: 'https://mammutco.adilar.com/',
    },
];

export const allMenus = () => {
  return DUMMY_DATA;
};