export default {
    logo: <span>TxPipe Grants & RFCs</span>,
    project: {
        link: "https://github.com/txpipe/",
    },
    chat: {
        link: "https://discord.gg/Vc3x8N9nz2",
    },
    docsRepositoryBase: "https://github.com/txpipe/rfcs/blob/main",
    useNextSeoProps() {
        return {
            titleTemplate: "%s – TxPipe RFCs",
            description: "TxPipe's  & RFCs",
            canonical: "https://rfcs.txpipe.io",
            siteName: "TxPipe Grants ocument& RFCs",
            openGraph: {
                url: "https://rfcs.txpipe.io",
                title: "TxPipe Grants & RFCs",
                description: "TxPipe's Grants & RFCs",
            },
            twitter: {
                handle: "@txpipe_tools",
            },
        };
    },
    footer: {
        text: "TxPipe Grants & RFCs",
    },
    
};