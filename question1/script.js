// Code goes here

angular.module('appModule', [])
  .controller('appCtrl', function($scope) {
    $scope.data = [
      { text:
      "<p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.   randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"
      }
    ];
  })
  .filter('highlightFilter', function($sce) {
    return function(text, word) {
      if (word) text = text.replace(new RegExp('('+word+')', 'gi'),
        '<span class="highlighted">$1</span>');
      return $sce.trustAsHtml(text);
    };
  });