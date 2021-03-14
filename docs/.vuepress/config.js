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