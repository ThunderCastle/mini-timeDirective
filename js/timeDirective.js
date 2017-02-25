app.directive('showTime', function(){
  return{
    restrict: 'E',
    template: '<div class="hello"> The current time is {{time}} </div>',
    link: function(scope, element){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }
  }
})
