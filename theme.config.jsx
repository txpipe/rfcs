export default {
    logo: <span>TxPipe RFC</span>,
    project: {
        link: "https://github.com/txpipe/rfcs",
    },
    chat: {
        link: "https://discord.gg/Vc3x8N9nz2",
    },
    darkMode: false,
    docsRepositoryBase: "https://github.com/txpipe/rfcs/blob/main",
    useNextSeoProps() {
        return {
            titleTemplate: "%s – TxPipe RFCs",
        };
    },
    footer: {
        text: "TxPipe RFCs",
    },
};