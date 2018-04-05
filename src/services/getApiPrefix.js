const port = process.env.PORT || 3001;
const serverOrigin = '' + window.location.origin;
const host = serverOrigin.slice(0, -serverOrigin.indexOf(':') - 1);
let apiPrefix;
if (host.length > 5) {
  apiPrefix = `${ host }:${ port }`;
} else {
  apiPrefix = serverOrigin;
}


export default apiPrefix;