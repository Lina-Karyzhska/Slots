import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import React from 'react';

const TabelHeader = (props) => {
    const headCells = [
        { id: 'id', disablePadding: true, sortable: true, label: 'ID' },
        { id: 'slots', disablePadding: false, sortable: false, label: 'Slots' },
        { id: 'time', disablePadding: false, sortable: true, label: 'Date' }
    ];

    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    headCell.sortable ?
                        <TableCell
                          key={headCell.id}
                          style={{width: headCell.id === 'id' ? '10%' : '45%'}}
                          align='center'
                          sortDirection={orderBy === headCell.id ? order : false}
                        >
                          <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                          >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                              <span className={classes.visuallyHidden}>
                                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                              </span>
                            ) : null}
                          </TableSortLabel>
                        </TableCell>
                    : 
                        <TableCell
                            key={headCell.id}
                            style={{width: '45%'}}
                            align='center'
                        >
                            {headCell.label}
                        </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default TabelHeader