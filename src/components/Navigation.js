import React from "react";
// import '../stylesheets/App.css';
import IconNavigation from "./IconNavigation";

class Navigation extends React.Component {
  linkToGithub(githubUser) {
    let githubValue = githubUser;
    let newGithubValue = githubValue.replace("https://github.com/", "");
    let previewGithub;
    if (githubValue === "") {
      previewGithub = "#";
    } else {
      previewGithub = `https://github.com/${newGithubValue}`;
    }
    return previewGithub;
  }
  linkToLinkedin(linkedinUser) {
    let linkedinValue = linkedinUser;
    let newLinkedinValue = linkedinValue.replace(
      "https://www.linkedin.com/in/",
      ""
    );
    let previewLinkedin;
    if (linkedinValue === "") {
      previewLinkedin = "#";
    } else {
      previewLinkedin = `https://www.linkedin.com/in/${newLinkedinValue}`;
    }
    return previewLinkedin;
  }

  render() {
    return (
      <nav className="card__preview--nav">
        <ul className="card__socialmedia">
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="phone"
            icon="fas fa-mobile-alt"
            href={this.props.phone}
          />
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="email"
            icon="far fa-envelope"
            href={"mailto:" + this.props.email}
          />
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="linkedin"
            icon="fab fa-linkedin-in"
            href={this.linkToLinkedin(this.props.linkedin)}
          />
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="github"
            icon="fab fa-github-alt"
            href={this.linkToGithub(this.props.github)}
          />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
