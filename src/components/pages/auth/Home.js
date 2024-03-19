import { Grid } from "@mui/material";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page</h1>
        <hr />
        <p>The task entails building a dynamic web application using ReactJS for the frontend and Django REST Framework for the backend, with MySQL as the database. The frontend must include register and login pages, event display, and interaction functionalities such as liking/unliking events and adding new events. The backend should handle user authentication and CRUD operations for events, utilizing Django's ORM and DRF's API endpoints. The database schema should include fields for event details and user likes. React components should manage UI state and make API calls to update the database based on user interactions. Overall, the application must adhere strictly to the specified tech stack and fulfill the outlined requirements to qualify for consideration for the internship position.</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;