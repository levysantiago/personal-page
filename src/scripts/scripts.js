$(document).ready(function() {
  $("textarea#mensagem").characterCounter();
  $("textarea#descricao").characterCounter();
});

$(document).ready(function() {
  $(".sidenav").sidenav();
});

$(document).ready(function() {
  $(".materialboxed").materialbox();
});

document.addEventListener("DOMContentLoaded", function() {
  let elems = document.querySelectorAll(".parallax");
  let instances = M.Parallax.init(elems, 0);
});

let randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

function get_chart_config(percent, color, title) {
  let percent2 = 100 - percent;
  return {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [percent, percent2],
          backgroundColor: [color, "#f4f4f4"],
          label: "Dataset 1"
        }
      ],
      labels: ["know", ""]
    },
    options: {
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
    }
  };
}

window.onload = function() {
  let ctx = document.getElementById("chart-cc").getContext("2d");
  window.myDoughnut = new Chart(ctx, get_chart_config(80, "#a6a6a6", "C/C++"));
  ctx = document.getElementById("chart-java").getContext("2d");
  window.myDoughnut = new Chart(ctx, get_chart_config(70, "#ff5757", "Java"));
  ctx = document.getElementById("chart-python").getContext("2d");
  window.myDoughnut = new Chart(ctx, get_chart_config(70, "#5271ff", "Python"));
  ctx = document.getElementById("chart-php").getContext("2d");
  window.myDoughnut = new Chart(ctx, get_chart_config(60, "#8c52ff", "PHP"));
  ctx = document.getElementById("chart-javascript").getContext("2d");
  window.myDoughnut = new Chart(
    ctx,
    get_chart_config(50, "#fad12c", "Javascript")
  );
  ctx = document.getElementById("chart-solidity").getContext("2d");
  window.myDoughnut = new Chart(
    ctx,
    get_chart_config(40, "#545454", "Solidity")
  );
  ctx = document.getElementById("chart-r").getContext("2d");
  window.myDoughnut = new Chart(ctx, get_chart_config(40, "#38b6ff", "R"));
  ctx = document.getElementById("chart-csharp").getContext("2d");
  window.myDoughnut = new Chart(ctx, get_chart_config(30, "#89449d", "C#"));
  ctx = document.getElementById("chart-css").getContext("2d");
  window.myDoughnut = new Chart(ctx, get_chart_config(80, "#5271ff", "CSS"));
  ctx = document.getElementById("chart-html").getContext("2d");
  window.myDoughnut = new Chart(ctx, get_chart_config(80, "#ff914d", "HTML"));
  ctx = document.getElementById("chart-sql").getContext("2d");
  window.myDoughnut = new Chart(ctx, get_chart_config(80, "#b85518", "SQL"));
};
