import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';
import './datatable.css';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 160},
    { field: 'author', headerName: 'Author', width: 160 },
    { field: 'genre', headerName: 'Genre', width: 160 },
    { field: 'publisher', headerName: 'Publisher', width: 160 },
    { field: 'datePublished', headerName: 'Date Published', width: 160 },
  ];

  
const Datatable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       //Listen for real-time updates
        const unsub = onSnapshot(
            collection(db, 'products'), 
            (snapShot) => {
                let list = [];
                snapShot.docs.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()});
                });
                setData(list);
            },
            (error) => {
                console.log(error);
            }
        );

        //clean up function
        return () => {
            unsub();    
        };
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'products', id));
            setData(data.filter(item=>item.id !== id))
        } catch(err) {
            console.log(err)
        }
    };

    const actionColumn = [
        { 
            field: 'action', 
            headerName: 'Action', 
            width: 160, 
            renderCell:(params) => {
                console.log(params.row.id) // log user id
                return (
                    <div className='cellAction'>
                        <Link to={`/products/${params.row.id}`} className='datatable-link'>
                            <div className='viewButton'>View</div>
                        </Link>
                        <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div> 
                    </div>
                );
            },
        },
    ];
   

    return (
        <div className="datatable-container">
            <div className='datatable-title'>
                Add New Book
                <Link to='/products/new' className='datatable-link addNew-button'>
                    Add New
                </Link> 
            </div>
            <div className='datatable'>
                <Paper >
                    <DataGrid
                            className='datagrid'
                            rows={data}
                            columns={columns.concat(actionColumn)}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />  
                </Paper>  
            </div>
        </div>
    );
    
};

export default Datatable;