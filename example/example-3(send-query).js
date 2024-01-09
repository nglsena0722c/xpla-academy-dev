const { LCDClient } = require("@xpla/xpla.js");

const lcd = new LCDClient({
    chainID: 'cube_47-5',
    URL: 'https://cube-lcd.xpla.dev'
});

async function main() {
    const txInfo = await lcd.tx.txInfo("ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353"); // Transaction data
    console.log(JSON.stringify(txInfo, null, 2));

    const balance = await lcd.bank.balance("xpla1f6hcc3hpxyg8rst9d5sg393e5jaj7453t0xmz8"); // Balance details
    console.log(JSON.stringify(balance, null, 2));
}
main()