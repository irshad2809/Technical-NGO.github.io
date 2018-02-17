  $(document).ready(function() {
    var color1 = "#a21ec1";
    var color2 = "#8e44ad";
    $(".body-before-bg").css({
      background: 'linear-gradient(to bottom right,' + color1 + ' ,' + color2 + ' )'
    });

    $(".colorPickSelector1").colorPick({
      'initialColor': '#a21ec1',
      'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"],
      'onColorSelected': function() {
        color1 = this.color;
        this.element.css({
          'backgroundColor': color1,
          'color': color1
        });

        $(".body-before-bg").css({
          background: 'linear-gradient(to bottom right,' + color1 + ' ,' + color2 + ' )'
        });
      }
    });

    $(".colorPickSelector2").colorPick({
      'initialColor': '#16a085',
      'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"],
      'onColorSelected': function() {
        color2 = this.color;
        this.element.css({
          'backgroundColor': color2,
          'color': color2
        });
        $(".body-before-bg").css({
          background: 'linear-gradient(to bottom right,' + color1 + ' ,' + color2 + ' )'
        });


      }
    });


  });
