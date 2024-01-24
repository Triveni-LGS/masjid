// import * as React from 'react';
// import './index.css'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import {
//   GridRowModes,
//   DataGrid,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridRowEditStopReasons,
// } from '@mui/x-data-grid';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomId,
//   randomArrayItem,
// } from '@mui/x-data-grid-generator';

// const roles = ['Market', 'Finance', 'Development'];
// const randomRole = () => {
//   return randomArrayItem(roles);
// };

// const initialRows = [
//   {
//     id: 1,
//     name: "Kapil",
//     age: 25,
    
//   },
//   {
//     id: 2,
//     name: "Kapil",
//     age: 25,
//   },
// ];

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// function SalahTimingTable() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState({});

//   const handleRowEditStop = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const handleEditClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };

//   const columns = [
//     { field: 'name', headerName: 'Name', minWidth: 100,flex:1, align: 'center',
//     headerAlign: 'center', editable: true },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       minWidth: 100,
//       flex:1,
//       align: 'center',
//       headerAlign: 'center',
//       editable: true,
//     },
//     // {
//     //   field: 'joinDate',
//     //   headerName: 'Join date',
//     //   type: 'date',
//     //   width: 180,
//     //   editable: true,
//     // },
//     // {
//     //   field: 'role',
//     //   headerName: 'Department',
//     //   width: 220,
//     //   editable: true,
//     //   type: 'singleSelect',
//     //   valueOptions: ['Market', 'Finance', 'Development'],
//     // },
//     {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       flex:1,
//       minWidth: 100,
//       cellClassName: 'actions',
//       headerClassName: 'header-red-background',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               sx={{
//                 color: 'primary.main',
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         height: 500,
//         width: '100%',
//         '& .actions': {
//           color: 'text.secondary',
//         },
//         '& .textPrimary': {
//           color: 'text.primary',
//         },
//       }}
//     >
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowModesModelChange={handleRowModesModelChange}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         className="header-red-background"
//         autoPageSize
//         pageSize={rows.length}
//         slots={{
//           toolbar: EditToolbar,
//         }}
//         slotProps={{
//           toolbar: { setRows, setRowModesModel },
//         }}
//       />
//     </Box>
//   );
// }

// export default SalahTimingTable

import React, { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import './index.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { DataGrid, GridActionsCellItem, GridRowModes, GridRowEditStopReasons } from '@mui/x-data-grid';
import { IoMdAddCircleOutline } from "react-icons/io";

import { PiDotsThreeVerticalFill } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { Menu, MenuItem, TextField } from '@mui/material';

const initialRows = [
  {
    id: 1,
    name: 'Kapil',
    age: 25,
  },
  {
    id: 2,
    name: 'apil',
    age: 20,
  },
];

function SalahTimingTable() {
 
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [masjidTimings,setMasjidTimings] = useState([])
  const [rows, setRows] = React.useState([]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };
  const processRowUpdate = (newRow) => {
    // Format time columns to HH:mm with leading zeros
    const updatedRow = { ...newRow };
    Object.keys(updatedRow).forEach((key) => {
      if (key.endsWith('time') && typeof updatedRow[key] === 'string') {
        const [hours, minutes] = updatedRow[key].split(':').map(Number);
        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        updatedRow[key] = formattedTime;
      }
    });
  
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === newRow.id ? updatedRow : row))
    );
    return updatedRow;
  };
  
  
  
  
  

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const addMasjidTime=()=>{
    alert("Are you sure")
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMultiMenuClick = (id) => (event) => {
    handleMenuClick(event);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const fetchProducts = async () => {
    try {
      
      const response = await fetch(`http://localhost:3009/api/v1/getmasjeedtimings/1`, {
        method: "GET",
        
      }); // Replace with your API endpoint
      if (response.ok) {
        const data = await response.json();
        setRows(data.data);
        console.log(data.data,data.data)
      } else {
        setRows("");
      }
    } catch (error) {
      setRows("");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(rows,"kapil")

  


  const columns = [
    {
      field: 'day',
      headerName: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          DAY <IoMdAddCircleOutline onClick={addMasjidTime} className="masjid-add-icon" />
        </div>
      ),
      minWidth: 100,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      editable: false,
      sortable: false,
    },
    {
      field: 'fajr',
      headerName: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          FAJR <IoMdAddCircleOutline className="masjid-add-icon" />
        </div>
      ),
      type: 'time',
      minWidth: 100,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      editable: true,
      renderEditCell: (params) => (
        <TextField
  type="time"
  value={params.value}
  onChange={(e) => {
    const inputTime = e.target.value;
    
    // Split the input into hours and minutes
    const [hours, minutes] = inputTime.split(':').map(Number);
  
    // Ensure hours and minutes are two digits
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  
    const isValidTimeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/.test(formattedTime);
  
    if (isValidTimeFormat) {
      params.api.setEditCellValue(params.id, params.field, formattedTime);
    } else {
      // Handle invalid time format (you may display an error message)
      console.error('Invalid time format');
    }
  }}
  onBlur={(e) => {
    // If the edited value is empty, set it back to the original value
    if (e.target.value.trim() === '') {
      params.api.setEditCellValue(params.id, params.field, params.value);
    }
  }}
  InputLabelProps={{
    shrink: true,
  }}
  inputProps={{
    step: 300, // 5 minutes
  }}
/>
      ),
    },
    {
      field: 'shouruq',
      headerName: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          SHOURUQ <IoMdAddCircleOutline className="masjid-add-icon" />
        </div>
      ),
      
      minWidth: 100,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'dhuhr',
      headerName: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          DHUHR <IoMdAddCircleOutline className="masjid-add-icon" />
        </div>
      ),
      
      minWidth: 100,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'asr',
      headerName: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          ASR <IoMdAddCircleOutline className="masjid-add-icon" />
        </div>
      ),
      
      minWidth: 100,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'maghrib',
      headerName: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          MAGHRIB <IoMdAddCircleOutline className="masjid-add-icon" />
        </div>
      ),
      
      minWidth: 100,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'isha',
      headerName: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          ISHA <IoMdAddCircleOutline className="masjid-add-icon" />
        </div>
      ),
      
      minWidth: 100,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'ACTIONS',
      flex: 1,
      minWidth: 100,
      cellClassName: 'actions',
      headerClassName: 'header-red-background',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<FiEdit className="vertical-dot-icon"/>}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          // <GridActionsCellItem
          //   icon={<DeleteIcon />}
          //   label="Delete"
          //   onClick={handleDeleteClick(id)}
          //   color="inherit"
          // />,
          <GridActionsCellItem
            icon={<PiDotsThreeVerticalFill  className="vertical-dot-icon"/>}
            label="MultiMenu"
            onClick={handleMultiMenuClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        // editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        className="header-red-background"
        autoPageSize
        pageSize={rows.length}
        disableColumnMenu
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'right', horizontal: 'right' }}
      >
        <MenuItem onClick={handleMenuClose}>Action 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Action 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Action 3</MenuItem>
      </Menu>
    </Box>
  );
}

export default SalahTimingTable;
