import React, { Component } from "react";
import "./style.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
class Customers extends Component {
  state = {
    customers: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      this.setState({
        customers: res.data.slice(2, 5),
      });
      console.log(this.state.customers);
    });
  }

  render() {
    const { customers } = this.state;
    const customersres = customers.map((custome) => {
      return (
        <div className="col-md-4 item" key={custome.id}>
          <div className="row">
            <div className="col-1">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <div className="col-10">
              <p>
                {custome.title} {custome.title}
                {custome.title}
              </p>
            </div>
          </div>
          <div className="text-center">
            <img src={custome.url} alt="test" />
          </div>
        </div>
      );
    });

    return (
      <section className="customers">
        <div className="container">
          <div className="text-center">
            <h2>
              STUDENTS <span>REVIEWS</span>
            </h2>
            <p className="p-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took
            </p>
          </div>
          <div className="row">{customersres}</div>
        </div>
      </section>
    );
  }
}
export default Customers;
