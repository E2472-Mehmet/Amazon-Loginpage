import React from "react";
import { Button, TextField, Grid,Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    wrapper: {
        marginTop: "6rem",
        
    },
});

function Signup() {
    const signupStyles = styles();
  return (

    
    <Container className={signupStyles.wrapper} maxWidth= "sm">

      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          fullWidth

        />
        </Grid>

        <Grid item xs={12}>
            <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" fullWidth/>
            
            </Grid>
        <Grid item xs={12}>
            <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined" fullWidth />
            
            </Grid>
            <Grid item xs={12}>
            <TextField 
            id="outlined-basic" 
            label="Re-enter password" 
            variant="outlined" fullWidth />
            
            </Grid>

        <Grid item xs={12}>
            <Button 
            variant="contained" 
            color="primary"  fullWidth>
            
          Create your Amazon account
        </Button>
        </Grid>
        
        </Grid>
        <p>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <br/>
        <br/>
        
        <p>Already have an account? Sign-In</p>
      </Container>


     
   
  );
}

export default Signup;
