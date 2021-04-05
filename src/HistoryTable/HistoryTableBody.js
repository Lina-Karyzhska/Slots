import { TableCell, TableRow, TableBody } from '@material-ui/core';
import React from 'react';

const HistoryTabelBody = (props) => {
    const { rows, getComparator, stableSort, order, orderBy, rowsPerPage, page } = props;
    
    return (
        <TableBody>
          {stableSort(rows, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow
                  hover
                  tabIndex={-1}
                  key={row.id}
                >
                  <TableCell align="center">{row.id + 1}</TableCell>
                  <TableCell align="center">{row.slots}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
    )
}

export default HistoryTabelBody