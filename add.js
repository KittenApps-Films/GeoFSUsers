import { users } from "/GeoFS_Wiki/GeoFSUsers.js"
import { get } from '/edit/code.js'
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
var url_string = window.location.href; 
var url = new URL(url_string);
var name = url.searchParams.get("n");

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

var newFile = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: 'GeoFSUsers.js',
  message: 'added to GeoFSUsers.js',
  content: btoa(content),
  sha: old.data.sha,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
}
export function one() {
  console.log("one run")
}
