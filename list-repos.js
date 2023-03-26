import { Octokit } from 'https://cdn.skypack.dev/@octokit/core';

import config from './config.js';

const octokit = new Octokit({
  auth: config.token,
});

export default function (page, perPage = 30) {
  return octokit.request('GET /orgs/{org}/repos', {
    org: 'octokit',
    type: 'all',
    page,
    per_page: perPage,
  });
}
