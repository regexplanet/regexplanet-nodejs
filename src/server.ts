
import {
    type getVersionFn,
    server,
} from "@regexplanet/template";
import { runTest } from "@regexplanet/common";


const getVersion: getVersionFn = () => {
    return {
        tech: `Node.JS ${process.version}`,
        version: `${process.version}`.replace(/^v/, ""),
    };
};

async function main() {

    server({
        engineCode: "nodejs",
        engineName: "Node.JS",
        engineRepo: "regexplanet-nodejs",
        getVersion,
        runTest,
    });
}

main();
