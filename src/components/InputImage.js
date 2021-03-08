import React from "react";
import "../stylesheets/layout/_fill.scss";
import defaultAvatar from "../images/animals.gif";

class InputImage extends React.Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.myFileField = React.createRef();
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  uploadImage(ev) {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      this.fr.addEventListener("load", this.getImage);
      this.fr.readAsDataURL(myFile);
    }
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  render() {
    const avatar = this.props.avatar === "" ? defaultAvatar : this.props.avatar;
    return (
      <>
        <label className="fill__form--label" htmlFor={this.props.generalValue}>
          {this.props.label}
        </label>
        <div className="fill__form--image">
          <label className="fill__form--image--button js__profile-trigger">
            {this.props.labelbtnImage}

            <input
              type={this.props.type}
              name=""
              id=""
              ref={this.myFileField}
              className="fill__form--image--input js__profile-upload-btn"
              onChange={this.uploadImage}
            />
          </label>
          <div
            className="fill__form--image--preview js__profile-preview js-form"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
        </div>
      </>
    );
  }
}
export default InputImage;
