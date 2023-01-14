export default {
    logo: <span>TxPipe RFC</span>,
    project: {
        link: "https://github.com/txpipe/rfcs",
    },
    chat: {
        link: "https://discord.gg/Vc3x8N9nz2",
    },
    docsRepositoryBase: "https://github.com/txpipe/rfcs/blob/main",
    useNextSeoProps() {
        return {
            titleTemplate: "%s – TxPipe RFCs",
            description: "TxPipe's Request for Comments repository",
            canonical: "https://rfcs.txpipe.io",
            siteName: "TxPipe RFCs",
            openGraph: {
                url: "https://rfcs.txpipe.io",
                title: "TxPipe RFCs",
                description: "TxPipe's Request for Comments repository",
            },
            twitter: {
                handle: "@txpipe_tools",
            },
        };
    },
    footer: {
        text: "TxPipe RFCs",
    },
};