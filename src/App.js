import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  createHttpLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

import About from "./pages/about";
import Projects from "./pages/projects";
import Home from "./pages/homepage"
import Skills from "./pages/skills"
import Contact from "./pages/contact"
import Header from "./pages/components/header";
import Footer from "./pages/components/footer"
import { setContext } from "@apollo/client/link/context";
import './styles/index.css';


// const httpLink = createHttpLink({
//   uri: `/graphql`,
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
