    //chart code will be here
    anychart.onDocumentReady(function() {

      var data = [
        {"x": "Family", "value": 10, category: "Family"},
        {"x": "Friends", "value": 10, category: "Friends"}
      ];

     // create a tag (word) cloud chart
      var chart = anychart.tagCloud(data);

      // format the tooltips
      var tooltip = chart.tooltip();
      // enable HTML for tooltips
      chart.tooltip().useHtml(true);
      tooltip.positionMode("point");
      tooltip.format("Goal steps: <b>{%value}");

      // disable tooltip
      chart.tooltip(false);

      // oppure
      // tooltip.format("Goal steps: <b>{%value}{scale:(1)(1000)(1000)(1000)|( dozen)( thousand)( million)( billion)}</b>");
      // set a chart title
      // chart.title('15 most spoken languages')
      // set an array of angles at which the words will be laid out
      chart.angles([0])
      // se si vuole modificare l'angolazione
      //chart.angles([0, -45, 90])
      // enable a color range
      // chart.colorRange(true);
      // set the color range length
      // chart.colorRange().length('80%');

      // display the word cloud chart
      chart.container("wordCloudChart");

      // add an event listener (se si vuole aggiungre una action)
      /* chart.listen("pointClick", function(e){
      var url = "https://en.wikipedia.org/wiki/" + e.point.get("x");
      window.open(url, "_blank");
      }); */

      // new event listener with dictionary
      var dict = {
        "Family": "https://www.google.com",
        "Friends": "https://mattiabaldinazzo.it"
      };

      chart.listen("pointClick", function(e){
        for(var key in dict) {
        var valueSelected = dict[e.point.get("x")];
        window.open(valueSelected, "_blank");
        }
      });


      // change color of the background of the Chart
      chart.background().fill({
      keys: ["#2a2a2a", "#2a2a2a", "#2a2a2a"],
      angle: 130,
      });

      // set the tooltip content
      chart.tooltip().format(function(e){
      var value = ((this.value)*100)/200000;
      return "Value: " + value + "%";
      });

      // scale to show the least frequent elements too
      chart.scale(anychart.scales.linear());

      chart.draw();
    });
