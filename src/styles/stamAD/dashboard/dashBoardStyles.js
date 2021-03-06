import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

const DashBoardStyles = makeStyles((theme) => ({

  mainContDashBoard: {
  },

  buttonFilter: {
    display: "flex",
    position: "initial",
    width: "120px",
    height: "42px",
    left: "129px",
    top: "116px",
    border: "1px solid",
    borderColor: "#ffffff",
    borderRadius: "9px",
    backgroundColor: "#ECECEC",
    outline: "0px",
    cursor: "pointer",

    "& p": {
      width: "auto",
      height: "24px",
      left: "171px",
      top: "125px",
      margin: "auto",
      "& span": {
        color: "#black",
        fontFamily: "roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "22px",
        lineHeight: "24px",
      },
      "& img": {
        marginRight: "0px",
        marginLeft: "auto",
      },
    },
  },

  filterDivField: {
    position: "initial",
    margin: "auto",
    marginRight: "12px",
    outlined: "0px",
  },

  menuItemField: {
    width: "196px !important",
    padding: "5px 0px 5px 17px",

    "& div span": {
      padding: "0px",
      textAlign: "left",
      marginLeft: "14px",
      fontFamily: ['"Nunito Sans"', "sans-serif"].join(","),
      letterSpacing: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "1.43",
    },
    "& span": {
      padding: "0",
    },
  },

  /* Columnas*/

  contColumns: {
    display:"flex",
    marginTop:"50px",
    marginBottom: "35px",
    width: "100%",
    height: "98%",
  },


  /* footer */

  footer: {
    display:"flex",
    width: "100%",
    height: "45px",
    marginTop: "auto",
    marginBottom: "45px",
    position: "inherit",
  },

  footerContPagination: {
    marginRight: "0px",
    marginLeft: "auto",
    display: "flex",
  },

  contButtonsBoardsFooter:{
      display: "flex",
      width: "auto",
      marginRight: "47px"
  },

  contButton: {
    height: "100%"
  },

  buttonBoardFooterSelected:{
    width: "125px",
    height: "90%",
    textAlign:"center",
    background: "#a4cdb7",
    wordBreak: "break-Word",
    borderRadius: "5px",
    border: "none",
    outline: "0px",
    cursor: "pointer",
    "& p":{
      margin: "0px 5px 0px 5px",
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "13px",
      lineHeight: "15px",
      color: "#FFFFFF",
    },
    "&:hover":{
      background: "#4d6d9a",
    }
    
  },

  buttonBoardFooterNoSelected:{
    width: "125px",
    height: "90%",
    textAlign:"center",
    background: " #F6F6F6",
    wordBreak: "break-Word",
    borderRadius: "5px",
    border: "none",
    outline: "0px",
    cursor: "pointer",
    
    "& p":{
      margin: "0px 5px 0px 5px",
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "13px",
      lineHeight: "15px",
      color: "#989898",
      
    },
    "&:hover":{
      background: "#ecece9",
  }
  },

  buttonAddBoard:{
    width: "110px",
    height: "100%",
    textAlign:"center",
    border: "1px solid",
    borderColor: "#a4cdb7",
    borderRadius: "5px",
    outline: "0px",
    cursor: "pointer",
    "& p":{
      margin: "0px 5px 0px 5px",
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      lineHeight: "15px",
      color: "#1B3355",

    },
    "&:hover":{
      background: "#0000002e",
  }
  }

  
  
}));

export default DashBoardStyles;
