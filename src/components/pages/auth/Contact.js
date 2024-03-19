import { Grid } from "@mui/material";

const Contact = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Contact Page</h1>
        <hr />
        <section class Name="content" id="contact"/>
      <h2 class Name="text-center">Contact Us</h2>
      <div class Name="form"/>
        <input
          class Name="form-input"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        /><br/>
         <input
          class Name="form-input"
          type="phone number"
          name="phone"
          id="phone"
          placeholder="Enter your phone no."
        /><br/>
        <input
          class Name="form-input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        /> <br/>
        <input
          class Name="form-input"
          type="address"
          name="address"
          id="name"
          placeholder="Enter your address"
        /><br/>
        <button class="btn-dark">Submit</button>
      </Grid>
    </Grid>
  </>;
};

export default Contact;