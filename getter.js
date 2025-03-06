import { get } from '/edit/code.js'
import { Octokit } from "https://esm.sh/@octokit/core";

export async function getContents() {


const octokit = new Octokit({
  auth: get(),
})

var oldfile = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: 'GeoFSUsers.js',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    'Accept' : 'application/vnd.github.html+json'
  }
})
console.log(oldfile);
console.log(oldfile.data.content);
function getter(data) {
  console.log(data);
  var a = atob(data)
  console.log(a);
  var b = a.slice(19)
  console.log(b);
  var c = JSON.parse(b)
  console.log(c);
  return c
}
var filecontents = getter(oldfile.data.content)

return filecontents
}
