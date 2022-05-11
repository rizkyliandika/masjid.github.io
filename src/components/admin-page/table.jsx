import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const Table = (props) => {
    useEffect(() => {
        console.log('data props: ', props.data)
    }, [])

    const columns = [
        { title: 'name', field: 'name' },
        { title: 'age', field: 'age' },
        { title: 'address', field: 'address' },
        { title: 'role', field: 'role' },
        { title: 'createdAt', field: 'createdAt' },
        { title: 'updatedAt', field: 'updatedAt' }]


    return (
        <div>
            <DataGrid
                rows={props.data}
                columns={columns}
            />
        </div>
    )
}