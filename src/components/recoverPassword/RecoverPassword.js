import React, { useEffect, useState, useContext } from "react";
import { TranslationContext } from '../../context/translation/TranslationContext'
  

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Auth } from "aws-amplify";
import amplifyConfig from "../../config/amplifyConfig";

import { useHistory } from "react-router-dom";

import RecoverPasswordStyles from "../../styles/recoverPassword/recoverPasswordStyles";
import Messages from "../commons/warningMessage/messages";
import WarningMessage from "../commons/warningMessage/warningMessage";


import {
  EmailField,
} from "../commons/CustomFields";
import { Paper, Container, Grid } from "@material-ui/core";
import { ButtonForm } from "../commons/Buttons";


const initialValues = {
  email: "",
};


const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo invalido")
    .required("Requerido"),
});

export default function CompanyRegistration() {

  const [loading, setLoading] = useState(false);
  const [openWarningMessage1, setOpenWarningMessage1] = useState(false);
  const [openWarningMessage2, setOpenWarningMessage2] = useState(false);
  const [initial, setInitial] = useState(true) 


  let history = useHistory();

  const emailFieldValue = document.getElementById("email")  != null ? document.getElementById('email').value : null;

  const handleWarningMessage1 = () => {
    setOpenWarningMessage1(!openWarningMessage1);
  };
  const handleWarningMessage2 = () => {
    setOpenWarningMessage2(!openWarningMessage2);
  };


  const onSubmit = async (values) => {
    const  email = values.email;

    setLoading(true);
    try {
      //validate email received exist or not
      const consult = await axios.get(
          `${process.env.REACT_APP_GATEWAY_END_POINT}/aduser/validate?email=${email}`
        )
        
          console.log('result',consult.data.body)
          const result =  consult.data.body;
          console.log(result)

          if (!result.exist) {
            // *** if mail not exist ***
            handleWarningMessage1()
          } else {
            // *** if mail  exist ***

            if(!result.isactive  || !result.isverified)  handleWarningMessage1()
            
            if(result.isactive && result.isverified){

              try {
                amplifyConfig.initAmplify("User");
                var data = await Auth.forgotPassword(email)
                console.log('data',data)
                const location = {
                  pathname: "/recoverPasswordConfirmation",
                 };
                 history.push(location);
              } catch (error) {
                handleWarningMessage2()
              }
            }

          }
      
      setLoading(false);
      
    } catch (error) {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(()=>{

    if(!formik.isValid ||emailFieldValue != null){
      setInitial(false)
    }

  },[formik.isValid,emailFieldValue])

  const classes = RecoverPasswordStyles();
  const { translate } = useContext(TranslationContext)

  return (
    <React.Fragment>
      {openWarningMessage1 && (
        <>
          <WarningMessage
            open={openWarningMessage1}
            onClose={handleWarningMessage1}
            message1={Messages.message7}
            message2={Messages.message8}
          />
        </>
      )}

      {openWarningMessage2 && (
        <>
          <WarningMessage
            open={openWarningMessage2}
            onClose={handleWarningMessage2}
            message1={Messages.message9}
            message2={Messages.message10}
          />
        </>
      )}

      <Grid container spacing={0} className={classes.mainContainer}>
        <Grid item xs={6} sm={6} md={6}>
          <Paper className={classes.container2}>
            <Grid item xs={12} className={classes.containerTitle}>
              <p className={classes.sub1}>{translate('recoverPassword', 'Title')}</p>
              <p className={classes.sub2}>{translate('recoverPassword', 'SubTitle')}</p>
            </Grid>

            <Container component="main" maxWidth="sm" className={classes.form}>
              <form className={classes.form} onSubmit={formik.handleSubmit}>
                <div className={classes.containerFields}>

                  <EmailField
                    className={classes.textbox}
                    name="email"
                    label={translate('recoverPassword', 'FieldEmail')}
                    error={formik.errors.email}
                    handleChange={formik.handleChange}
                  />

                </div>

                <div className={classes.sub3}>
                  <p>{translate('recoverPassword', 'FooterText')}</p>
                </div>
                
                 <div className={classes.contButtonForm}>
                  <ButtonForm
                    type="submit"
                    className={ formik.isValid && !initial && emailFieldValue !=null  ? classes.submit : classes.submitDisabled}
                    text={translate('recoverPassword', 'Button')}
                    disabled={loading || !formik.isValid}
                  />
                </div>
              </form>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
