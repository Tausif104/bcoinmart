jQuery(document).ready(function () {
  $('.presell-items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  })

  var ctx = document.getElementById('myDonutChart').getContext('2d')
  var myDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Token Pre-Sale', 'Round-1', 'Round-2', 'Round-3', 'Round-4'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [150, 50, 100, 75, 150],
          backgroundColor: [
            '#7D17FF', // Custom Color 1
            '#708C51', // Custom Color 2
            '#D81588', // Custom Color 3
            '#FBA45A', // Custom Color 4
            '#D14EFF', // Custom Color 5
          ],

          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Donut Chart with Custom Colors',
        },
      },
    },
  })
})
