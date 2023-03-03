const { writeFile } = require('fs');
const { argv } = require('yargs');
const packageContent = require('../package.json');

// This is good for local dev environments, when it"s better to
// store a projects environment variables in a .gitignore"d file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs"s argv object
const environment = argv.environment || 'dev';
const isProd = environment === 'prod';
const isUniversal = argv.universal === true;

const targetPath = `./src/environments/environment.${environment}.ts`;
const envConfigFile = `
export const environment = {
	production: ${isProd},
	weatherApi: "${process.env.OWM_API || ''}",
    version: 'v${packageContent.version}'
};
`;

writeFile(targetPath, envConfigFile, (err: Error) => {
    if (err) {
        console.log(err);
    }

    console.log(`Output generated at ${targetPath}`);
});
