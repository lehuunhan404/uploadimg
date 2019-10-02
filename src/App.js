import React, * as react from "react"
import  "./App.css"

class UpLoad extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      images: [],
      isShowOverlay: false,
      number: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const len = event.target.files.length
    let images = []
    for (let index = 0; index < len; index++) {
      images.push(URL.createObjectURL(event.target.files[index]))
    }

    this.setState({
      images
    })
  }
  render() {
    let { images, isShowOverlay, number } = this.state
    let images2 = images.slice(0, 5)
    number = images.length - 5
    isShowOverlay = images.length > 5 ? !isShowOverlay : isShowOverlay
    return (
      <div className="Wrapper">
        <input className="Input" type="file" name="pic" accept="image/*" multiple onChange={this.handleChange} />
        <div className="Contro">
          {images2.map((image, index) => (
            <div className="Box" key={index}>
              <img className="Img" src={image} alt="abc" />
            </div>
          ))}
          {isShowOverlay ? (
            <div className="Add">
              <p>+{number}</p>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}


export default UpLoad
