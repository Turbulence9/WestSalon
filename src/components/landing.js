import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


class Calender extends Component {
  constructor(props) {
    super(props);
    this.toCalenderPage = this.toCalenderPage.bind(this);
  }

  toCalenderPage(ev) {
    ev.preventDefault();
    console.log(this.props);
    const { history } = this.props;
    history.push('/calender');
  }

  render() {
    return (
    <div className="Landing">
      West Salon By Leah
      <button onClick={this.toCalenderPage}>
        Book Appointment
      </button>
  </div>
  )}
};
export default Calender;
