import React, { useState } from "react";

import {
  Menu,
  MenuItem,
  ListItemText,
  Typography,
  Dialog,
  DialogTitle,
  TextField,
  Slide,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import DashBoardStyles from "../../styles/dashboard/dashBoardStyles";
import ChangeName from "./changeName";
import ChangeColor from "./changeColor";
import DownArrow from "../../assets/images/pngFiles/Fill.png";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Dashboard() {
  const classes = DashBoardStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openChangeColor, setOpenChangeColor] = useState(false);

  

  const handleChangeName = () => {
    setOpenChangeName(!openChangeName);
  };

  const handleChangeColor = () => {
    setOpenChangeColor(!openChangeColor);
    console.log("hola hola")
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("event", event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      {openChangeName && (
        <ChangeName 
          open={openChangeName}
          onClose={handleChangeName}/>
      )}
       {openChangeColor && (
         <>
         {console.log("hola")}
        <ChangeColor 
          open={openChangeColor}
          onClose={handleChangeColor}/>
        </>
      )}
      <main>
        <section className={classes.filterDivField}>
          <button onClick={handleClick} className={classes.buttonFilter}>
            <p>
              <span>Tablero 1222222</span>
              <img src={DownArrow} alt="logo" />
            </p>{" "}
          </button>

          <Menu
            id="filterMenu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            disableScrollLock={true}
            getContentAnchorEl={null}
            onClose={handleClose}
            keepMounted
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuItem
              key={"change-name"}
              value={"change-name"}
              className={classes.menuItemField}
              onClick={handleChangeName}
            >
              <ListItemText primary={"Cambiar nombre"} />
            </MenuItem>
            <MenuItem
              key={"change-color"}
              value={"change-name"}
              className={classes.menuItemField}
              onClick={handleChangeColor}
            >
              <ListItemText primary={"Cambiar Color"} />
            </MenuItem>
            <MenuItem
              key={"delete-board"}
              value={"delete-board"}
              className={classes.menuItemField}
              
            >
              <ListItemText primary={"Eliminar"} />
            </MenuItem>
          </Menu>
        </section>

        <section className={classes.footerContDashBoard}>
          <div className={classes.footerContButtonBoards}>
            {/* array con .lengh del método */}

            <button
              /* onClick={handleClick} */ className={classes.buttonFooterBoard}
            >
              <p>
                <span>BoardName</span>
              </p>
            </button>
            <button
              /* onClick={handleClick} */ className={classes.buttonFooterBoard}
            >
              <p>
                <span>BoardName2</span>
              </p>
            </button>
            <button
              /* onClick={handleClick} */ className={classes.buttonFooterBoard}
            >
              <p>
                <span>BoardName3</span>
              </p>
            </button>
          </div>

          <div className={classes.footerContAddBoard}>
            <button
              /* onClick={handleClick} */ className={
                classes.buttonFooterAddBoard
              }
            >
              <p>
                <span>+ Agregar tablero</span>
              </p>
            </button>
          </div>

          <div className={classes.footerContPagination}>
            <Typography>Páginas: 1-10 </Typography>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              page={1}
              selected={true}
              SelectProps={{
                inputProps: { "aria-label": "Paginas: " },
                native: true,
              }}
            />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Dashboard;


/* <Dialog
          classes={{ root: classes.dialogChangeName }}
          open={openChangeName}
          onClose={handleChangeName}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth={false}
          scroll="paper"
        >
          <section className={classes.contTitleChangeName}>
            <DialogTitle 
              style={{padding: "10px 0px"}} 
              id="alert-dialog-slide-title"
              classes={{root: classes.titleChangeName}}
            >
              {"Nombre del tablero"}
            </DialogTitle>
            <button className={classes.contCloseIcon} onClick={handleChangeName}>
            <img src={Close} alt="close" width="10px" height="8px" />
            </button>
          </section>
          
          <section>
            <TextField 
              variant="outlined" 
              // classes={{ root: classes.textFieldChangeName }} 
              className={classes.textFieldChangeName}
              autoFocus={true}
              value={name}
              onChange={onChangeName}
              
            />
          </section>

          <section className={classes.contButtonsChangeName}>
            <button className={classes.buttonChangeName} onClick={handleSaveChangeName}>
              <p>Cambiar Nombre</p>
            </button>
            <button className={classes.buttonCancelChangeName} onClick={handleChangeName}>
              <p>Cancelar</p>
            </button>
          </section>
        </Dialog> */