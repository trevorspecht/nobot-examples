const url = require('url');

const args = process.argv.slice(2);

const [urlEntered] = args;

if (urlEntered === undefined) {
    console.error('Please enter a URL');
    process.exit(0);
}

const {
    protocol, slashes, host, query, href
} = url.parse(urlEntered);

console.log(`protocol: ${protocol}`);
console.log(`slashes: ${slashes}`);
console.log(`host: ${host}`);
console.log(`query: ${query}`);
console.log(`HREF: ${href}`);