// RESULTS COMPONENT

// REACT IMPORT
import React from 'react';

import {
  Table, TableBody, TableCell, TableFooter, TableHeader, TableRow,
  Text,
} from 'grommet';
//import SandboxComponent from './SandboxComponent';

// Always should store amount in cents to avoid precision errors
const DATA = [
  {
    id: 1, name: '1', mode: 'Bus', emissions: 3775,
  },
  {
    id: 2, name: '2', mode: 'Train', emissions: 5825,
  },
  {
    id: 3, name: '3', mode: 'Car', emissions: 4300,
  },
];

const COLUMNS = [
  {
    property: 'rank',
    label: 'Rank',
    dataScope: 'row',
    format: datum => <strong>{datum.name}</strong>,
  },
  {
    property: 'mode',
    label: 'Mode of Transportation',
  },
  {
    property: 'emissions',
    label: 'Co2 Emissions (lbs)',
    align: 'end',

  },
];

export default () => (

    <Table caption='Simple Table'>
      <TableHeader>
        <TableRow>
          {COLUMNS.map(c => (
            <TableCell key={c.property} scope='col' border='bottom' align={c.align}>
              <Text>{c.label}</Text>
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {DATA.map(datum => (
          <TableRow key={datum.id}>
            {COLUMNS.map(c => (
              <TableCell key={c.property} scope={c.dataScope} align={c.align}>
                <Text>
                  {c.format ? c.format(datum) : datum[c.property]}
                </Text>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
);
