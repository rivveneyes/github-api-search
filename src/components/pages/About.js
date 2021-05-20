import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1 className="heading center">About This App</h1>
      <p className="info ">
        This app was created to be able to search for Github users.
        <hr />
        <br />
        This application was maid with HTML,CSS,React. I maid calls to the
        github api useing a axios library. The application is currently lauched
        on <a href="https://githubfiner1357.netlify.app/">Netlify</a>.
      </p>
    </Fragment>
  );
};

export default About;
