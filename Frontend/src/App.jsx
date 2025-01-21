import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp, UserButton } from "@clerk/clerk-react";



const App = () => {
  return (

    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/signin" element={<SignIn routing="path" path="/signin" />} />
        <Route path="/signup" element={<SignUp routing="path" path="/signup" />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />

        {/* Redirect to SignIn if not signed in */}
        {/* <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        /> */}
      </Routes>
    </Router>

  );
};

const Dashboard = () => (
  <div>
    <h1>Welcome to the Dashboard</h1>
    <UserButton />
  </div>
);

export default App;
