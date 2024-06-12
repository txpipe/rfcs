export default {
    logo: <span>TxPipe Grants</span>,
    project: {
        link: "https://github.com/txpipe/",
    },
    chat: {
        link: "https://discord.gg/Vc3x8N9nz2",
    },
    docsRepositoryBase: "https://github.com/txpipe/rfcs/blob/main",
    sidebar: {
        items: [
            {
                title: 'Grants',
                items: [
                    {
                        title: 'Catalyst',
                        items: [
                            { title: 'Fund-9', path: '/Grants/Catalyst/Fund-9' },
                            { title: 'Fund-10', path: '/Grants/Catalyst/Fund-10' },
                            { title: 'Fund-11', path: '/Grants/Catalyst/Fund-11' },
                        ],
                    },
                    {
                        title: 'Deep-Funding',
                        items: [
                            { title: 'Round-2', path: '/Grants/Deep-Funding/Round-2' },
                        ],
                    },
                ],
            },
        ],
    },
    useNextSeoProps() {
        return {
            titleTemplate: "%s – TxPipe Grants",
            description: "TxPipe's Grants",
            canonical: "https://grants.txpipe.io",
            siteName: "TxPipe Grants",
            openGraph: {
                url: "https://grants.txpipe.io",
                title: "TxPipe Grants",
                description: "TxPipe's Grants Report",
            },
            twitter: {
                handle: "@txpipe_tools",
            },
        };
    },
    footer: {
        text: "TxPipe Grants",
    },
    
};