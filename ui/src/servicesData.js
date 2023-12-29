const Services = {
    services:[
        {
            id:1,
            title:"Web Geliştirme",
            description:`Yaklaşık ${new Date().getFullYear() - 2022} yıldır Web Geliştirmeyle uğraşıyorum,
            React,Node,Express ve Angular.js Frameworkleri hakkında bilgi sahibiyim`,
        },
        {
            id:2,
            title:"Mobil Geliştirme",
            description:`Yaklaşık ${new Date().getFullYear() - 2022} Yıldır Mobil Geliştirmeyle uğraşıyorum ,
            React-Native ile cross-platform uygulamalar geliştiriyorum`
        }
    ],
    technology:[
        {
            id:1,
            title:"Mobil Geliştirme",
            techs:[
                {
                    id:1,
                    name:"React-Native",
                    type:"Cross-Platform"
                }
            ]
        },
        {
            id:2,
            title:"Web Geliştirme",
            techs: [
                {
                    id:1,
                    name:"React"
                },
                {
                    id:2,
                    name:"Angular.js"
                },
                {
                    id:3,
                    name: "Node.js"
                },
                {
                    id:4,
                    name:"Typescript"
                },
                {
                    id:5,
                    name:"Express"
                },
                {
                    id:6,
                    name:"JSON"
                }
            ]
        }
    ]
}

export default Services;