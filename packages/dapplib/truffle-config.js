require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan remember stick around heavy civil army genuine'; 
let testAccounts = [
"0x4da6128b211bb1df7787235cf95e84a66964255450042a5d48af630e99614506",
"0x2521e8d5c5354e572f54bfa84d490154f6706e2a59bd2c2b8d775fd55e4a00bd",
"0x561f2550945fa89be4cdee7676e3c8fcf04eaf32f2f49ef5f38b05f2e0567a42",
"0x6590f7d498fb42949c43f85c681b1fd7ba467c4d19ec0f7057c6f0ab695875be",
"0x63e7f0d5fea1871a684edc107624612fe0524cdfcc0960fa051f753a984cba7c",
"0xbfa3674a9519adcfb96f8e279cbcbc588f92f615bb944a5be34a9dfbb617e274",
"0xac6bb39e8dc7f616e4cc9c58a18932d60f3ee346a3e125c5188c06a6981fce3b",
"0x97bc25cc5331976602998e6f08eedf2cd3d7634df92acc0d4a095330055812bd",
"0x55cd9b84a2cd76c3e2fdee0ff1b2273a58395005059af5d348da13e4eb5bf34f",
"0x2ba6d2cc90364786f7f8fb9dfb132cbbf9c71b53b5b742e7984c18830213620e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
