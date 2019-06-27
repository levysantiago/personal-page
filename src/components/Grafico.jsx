import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class Grafico extends Component {
  render() {
    const { title, percent, color } = this.props;

    const data = {
      labels: ["know", ""],
      datasets: [
        {
          data: [percent, 100 - percent],
          backgroundColor: [color, "#f4f4f4"]
          //hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    const options = {
      responsive: true,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: title
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };

    return (
      <div class="col s4 m2">
        <Doughnut data={data} options={options} width="10" height="15" />
      </div>
    );
  }
}

export default Grafico;
