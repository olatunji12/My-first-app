var app = angular.module('myAttendance',[]);
app.controller('myList', function($scope) {
	$scope.products = [];
	$scope.addNames = function() {
		$scope.products.push(
			{
				first: $scope.name.first,
				last:  $scope.name.last,
	});
    }
});