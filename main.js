// CHART OPTIONS
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333",
  },
  series: [
    {
      name: "Population",
      data: [
        2761720, 1600000, 1500000, 1212504, 798634, 679588, 644473, 617301,
        590000, 549543,
      ],
    },
  ],
  xaxis: {
    categories: [
      "Quezon City",
      "Manila",
      "Caloocan City",
      "Davao",
      "Cebu City",
      "General Santos",
      "Taguig",
      "Pasig City",
      "Las Pinas",
      "Antipolo",
    ],
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  fill: {
    colors: ["#f44336"],
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: "10 Largest Cities in Philippines by Population",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px",
    },
  },
};

// INITIALIZE CHART
const chart = new ApexCharts(document.querySelector("#chart"), options);

// RENDER CHART
chart.render();

// EVENT METHOD EXAMPLE
document.querySelector(".horizontal").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  })
);

document.querySelector(".vertical").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  })
);
