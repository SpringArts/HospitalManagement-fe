"use client"
import axios from 'axios';
import Cookies from 'js-cookie';
import React ,{ useEffect , useMemo, useState} from 'react'
import Layout from '../Layout';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const page = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemsPerPage] = useState(20);
    const [hospitalLists, setHospitalLists] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [isSuccess , setIsSuccess] = useState(false);
    const [rowCountState , setRowCountState] = useState();
    const [rowId , setRowId] = useState(null);

    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 10,
      });

    const token = Cookies.get("token");
    const getHospitalList = async () => {
        try {
            await axios.get(
                `http://127.0.0.1:8000/api/hospitals?page=${paginationModel.page + 1}&perPage=${paginationModel.pageSize}`,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                },
            ).then((response)=> {
                setIsLoading(false)
                setHospitalLists(response.data.data);
                setIsSuccess(true)
            }).then((error)=>console.log(error));

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getHospitalList();
    }, [paginationModel]);


    useEffect(()=>{
    setRowCountState(hospitalLists?.meta?.totalItems)
    },[isSuccess])
    

    const columns = useMemo(()=>[
        {
            field: "id",
            headerName: "ID",
            editable: false,
            width: 60
        },
        {
            field: "name",
            headerName: "Name",
            editable: true,
            flex: 0.6,
        },
        {
            field: "email",
            headerName: "Email",
            editable: true,
            flex: 0.8
        },
        {
            field: "phone",
            headerName: "Phone",
            editable: true,
            width: 120
        },
        {
            field: "address",
            headerName: "Address",
            editable: true,
            flex: 1
        },
        {
            field: "bio",
            headerName: "Bio",
            editable: true,
            flex : 1
        },
        {
            field: "createdAt",
            headerName: "created_at",
            editable: false,
            flex: 1
        },
    ],[])

  return (
    <Layout>
        <div
                className="p-5 !w-full min-w-full"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#fff",
                        color: "#000",
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "#fff",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: "#fff",
                        color: "#000",
                        borderTop: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `#000 !important`,
                    },
                }}
            >
                <DataGrid
                    sx={{ width: "100%" }}
                    columns={columns}
                    rows={hospitalLists.data || []}
                    rowCount={rowCountState}
                    loading={isLoading}
                    pageSizeOptions={[10,15,20]}
                    paginationModel={paginationModel}
                    paginationMode='server'
                    onPaginationModelChange={setPaginationModel}
                    // editMode="row"
                    getRowId={(row)=>row.id}
                    // onRowEditCommit={(params)=> {
                    //     console.log(params)
                    //     setRowId(params.id)
                    // }}
                    onCellEditStart={(params)=>{
                        console.log(params)
                        setRowId(params.id)
                    }}
                    slots={{ toolbar: GridToolbar  }}
                />
            </div>
    </Layout>
  )
}

export default page