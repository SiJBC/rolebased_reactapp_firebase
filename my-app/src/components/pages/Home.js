import React from "react";

// If user is logged in 

function Home() {
  return (
    <div>
      <h1>Firebase React Role Based Authentication</h1>
      <p>
        This application renders different content based on the users level of Authentication
        <br/>
          * Unauthenticated user can access the sign up and sign in pages as well as the home screen
          <br/>
          * Authenticated User can additionally access the user page
          <br/>
          * The Authenticated Admin can additionally access the admin page 
          <br/>  
          * The Nav Tabs will render according to the different levels of access, Also even if the user access a route outside of their authentication staus the route will return a 404 

      </p>
    </div>
  );
}

export default Home;
