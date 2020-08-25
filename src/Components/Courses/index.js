import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";
import axios from "axios";
// import Axios from "axios";
export default class Responsive extends Component {
  state = {
    courses: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      this.setState({
        courses: res.data.slice(0, 15),
      });
    });
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const { courses } = this.state;
    const couusesRes = courses.map((couresitem) => {
      return (
        <div key={couresitem.id}>
          <img src={couresitem.url} alt="tille" />
          <h3>
            OUR TOP <span>COURSES</span>
          </h3>
          <p className="py-0">{couresitem.title}</p>
          <button className="btn btn-dark m-0">&#36; 25</button>
        </div>
      );
    });
    return (
      <div className="courses">
        <div className="container">
          <div className="text-center">
            <h2>
              OUR TOP <span>COURSES</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took
            </p>
          </div>
        </div>
        <Slider className="text-center" {...settings}>
          {couusesRes}
        </Slider>
      </div>
    );
  }
}

// <div className="courses">
// <div className="container">
//   <div className="text-center">
//     <h2>OUR TOP COURSES</h2>
//     <p>
//       Lorem Ipsum is simply dummy text of the printing and typesetting
//       industry. Lorem Ipsum has been the industry's standard dummy text
//       ever since the 1500s, when an unknown printer took
//     </p>
//   </div>
// </div>
// </div>
