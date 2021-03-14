module.exports = {
    title: '学英语',
    description: '用来学英语的静态站点',
    themeConfig: {
        sidebarDepth: 2,
        sidebar: [
            {
                title: "生活英语",
                collapsable: false,
                children: [
                    '/life-english/chapter1/1.生活琐事',
                    '/life-english/chapter1/2.个人习惯',
                    '/life-english/chapter1/3.个人健康',
                    '/life-english/chapter1/4.出门在外',
                    '/life-english/chapter1/5.交通',
                    '/life-english/chapter1/6.兴趣爱好',
                    '/life-english/chapter1/7.图书馆',
                    '/life-english/chapter1/8.网络购物',
                    '/life-english/chapter1/9.租房',
                    '/life-english/chapter1/10.逢年过节',
                    '/life-english/chapter1/11.工作',
                ]
            },
            {
                title: "旅游英语",
                collapsable: true,
                children: [
                    '/life-english/chapter1/1.生活琐事',
                    '/life-english/chapter1/2.个人习惯',
                    '/life-english/chapter1/3.个人健康',
                ]
            }
        ]
    }
}