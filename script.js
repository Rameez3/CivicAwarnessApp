$(document).ready(function () {
  new WOW().init();

  // Programatically Adding the Year in Footer
  var d = new Date();
  var y = d.getFullYear();
  $("#year").html(y);
  // Navigation Animation
  $(".peer_link").click(function () {
    var position = $('#main-container').offset().top;
    $("HTML, BODY").animate({
      scrollTop: position
    }, 1000);
  })
  $(".problem_link").click(function () {
    var position = $("#problem").offset().top - 70;
    $("HTML, BODY").animate({
      scrollTop: position
    }, 1000);
  });
  $(".statistics_link").click(function () {
    var position = $("#statistics").offset().top - 70;
    $("HTML, BODY").animate({
      scrollTop: position
    }, 1000);
  });
  $(".voting_link").click(function () {
    var position = $("#voting_locations").offset().top - 70;
    $("HTML, BODY").animate({
      scrollTop: position
    }, 1000);
  });
  $(".about_link").click(function () {
    var position = $("#about_us").offset().top - 70;
    $("HTML, BODY").animate({
      scrollTop: position
    }, 1000);
  });
  $(".contact_link").click(function () {
    var position = $("#contact").offset().top - 70;
    $("HTML, BODY").animate({
      scrollTop: position
    }, 1000);
  });
  $(".resources_link").click(function () {
    var position = $("#resources").offset().top - 70;
    $("HTML, BODY").animate({
      scrollTop: position
    }, 1000);
  })
  // Form Validation Code
  $("form").submit(function (e) {
    e.preventDefault()
    var letters = /^[A-Za-z]+$/;


    if ($("#name").val().length == 0) {
      $("#nameError").html("Please enter a name!");
      e.preventDefault();
    }
    else if (!letters.test($("#name").val())) {
      $("#nameError").html("Your name can only contain letters!");
      e.preventDefault();
    }

    if (emailInput = $("#email").val().length == 0) {
      $("#emailError").html("Please enter an email!");
      e.preventDefault();
    }
    else if (!$("#email").val().includes("@")) {
      $("#emailError").html("Please include an @ in your email");
      e.preventDefault();
    }

    if (messageInput = $("#message").val().length == 0) {
      $("#messageError").html("Please include a Question!");
      e.preventDefault();
    }
    else if (messageInput = $("#message").val().length > 250) {
      $("#messageError").html("Word Limit Exceeded!");
      e.preventDefault();
    }


  });




  // Bar Graph Animation & Statistics
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1990', '1994', '1998', '2002', '2006', '2010', '2014', '2018'],
      datasets: [{
        label: 'Years',
        data: [57.25, 59.96, 46.06, 45.07, 45.36, 48.58, 38.69, 58],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(209, 90, 181, 0.2)',
          'rgba(36, 112, 114, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(209, 90, 181, 1)',
          'rgba(36, 112, 114, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            callback: function (value) {
              return value + "%"
            }
          },
          scaleLabel: {
            display: true,
            labelString: "Percentage of Voters"
          }
        }]
      }
    }
  });
});
