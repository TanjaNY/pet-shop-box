var HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = 'rabbit seek urge copy carry tank february sudden skate neutral runway know';

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        develop: {
            port: 8545
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/38ff07b6625d4ba9b68615a19f54b50d`);
            },
            network_id: '3',
                    },
        test: {
            provider: function () {
                return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
            },
            network_id: '*',
            gas: 4000000
        },
    },
};
