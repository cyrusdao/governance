import abis from "./abis.js";
import addresses from "./addresses.js";
import legacyModule from "./legacy/index.js";

const chains = [];
const legacy = legacyModule;

export { chains, abis, addresses, legacy };
