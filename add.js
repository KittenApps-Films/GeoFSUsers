import { get } from 'https://kittenapps-films.github.io/edit/code.js'
import { Octokit } from "https://esm.sh/@octokit/core";
import { getContents } from "https://kittenapps-films.github.io/GeoFSUsers/getter.js"

export async function update(link,user, edit = false) {

var listOfUsers = await getContents()
console.log(listOfUsers)
const hasUser = user in listOfUsers;
console.log(hasUser)
if (hasUser) {edit = false};

if (!hasUser || edit) {
  listOfUsers[user] = link
  console.log(listOfUsers)
  var content = `export var users = ${JSON.stringify(listOfUsers)}`

  const octokit = new Octokit({
    auth: get(),
  })

  var old = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'KittenApps-Films',
    repo: 'GeoFS_Wiki',
    path: 'GeoFSUsers.js',
    branch: 'main',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  var commiter  = edit ? `Editing user ${user}` : `Adding user ${user} to users addon`;
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
}
update("brick.com","Go")
