import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['name'],
  sortAscending: true,
  data: function() {
    var categories = this.get('name'); 
    var data = {
      labels: [],
      datasets: []
    };
    var dataset = {
      label: "Spending Categories",
      fillColor: "rgba(0,138,132, 0.4)",
      scaleGridLineColor : "rgba(239,239,239,.4)",
      strokeColor: "#efefef",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: []
    };
    categories.forEach(function(category) {
      if (category.get('id')) {
        var names = category.get('names');

        dataset.data.push(names);
     }
   });
   data.datasets.push(dataset);
   return data;
  }.property('model')
});
