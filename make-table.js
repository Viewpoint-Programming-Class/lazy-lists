function makeRow({ repo, url }) {
  const row = document.createElement('tr');
  const cell = document.createElement('td');

  row.appendChild(cell);
  cell.appendChild(makeLink({ url, text: repo }));

  return row;
}

function makeLink({ url, text }) {
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.textContent = text;

  return link;
}

function makeTable({ repos }) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  table.appendChild(tbody);

  repos.forEach((repo) => {
    tbody.appendChild(makeRow(repo));
  });

  return table;
}

export default makeTable;
