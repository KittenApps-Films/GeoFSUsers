import { users } from "https://kittenapps-films.github.io/GeoFS_Wiki/GeoFSUsers.js"
import { get } from 'https://kittenapps-films.github.io/edit/code.js'
import { Octokit } from "https://esm.sh/@octokit/core";

/*var url_string = window.location.href; 
var url = new URL(url_string);
var user = url.searchParams.get("u");

var url_string = window.location.href; 
var url = new URL(url_string);
var link = url.searchParams.get("l");*/

export async function update(link,user) {

users[user] = link
var content = `
export var users = ${JSON.stringify(users)}
`
/*var url_string = window.location.href; 
var url = new URL(url_string);
var name = url.searchParams.get("n");*/

const octokit = new Octokit({
  auth: get(),
})

var old = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: 'GeoFSUsers.js',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
var commiter  = `Adding user ${user} to users addon`
var newFile = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: 'GeoFSUsers.js',
  message: 'added to GeoFSUsers.js',
  committer: {
    name: commiter,
    email: 'kittenappsandfilms@gmail.com'
  },
  content: btoa(content),
  sha: old.data.sha,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
}
export function one() {
  console.log(this)
}
