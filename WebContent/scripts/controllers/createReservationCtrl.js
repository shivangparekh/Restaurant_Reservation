/**
Restaurant reservation :: Shivang Parekh.
 */
'use strict';

reservationAppCtrls
    .controller('CreateReservationCtrl', ['$http','$scope', '$modal',  function($http, $scope, $modal) {




        $scope.user = {
        				
        		first_name:"shivang",
        		last_name:"parekh",
        		phone_number:"6823004948",
        		email:"shivang_par@hotmail.com",
        		no_of_guests:4,
        		phone_prefix : "1",
        		visit : true,
        		specialRequests:"vegitarian",
        			
        };
        $scope.items = {
        		"1"  : "US +1",
                "91" : "India +91",
                "01" : "CANADA +1",
                "44" : "UNITED KINGDOM +44"
            }


        $scope.date = new Date();

        $scope.open = {

                date: false

            };



        $scope.animationsEnabled = true;
        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };


        $scope.dateOptions = {
            showWeeks: false,
            startingDay: 1
        };

        $scope.timeOptions = {
            readonlyInput: true,
            showMeridian: false
        };

        $scope.openCalendar = function(e, date) {
            e.preventDefault();
            e.stopPropagation();

            $scope.open[date] = true;
        };


$scope.addCust = function()
{


	$scope.getDate = new Date($scope.user.date);

	
	$scope.user.date = $scope.getDate.getTime()/1000;

    $scope.confirmationsDetails = {};

    $scope.openConfirmationModal = function(size, response)
    {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'myModalContent.html',
            controller: 'ConfirmationDetailModal',
            size: size,
            resolve: {
                confirmationDetails: function () {
                    return response;
                }
            }
        })
    };
	$http({
		method:'POST',
	    url:'api/customer/add',
	    data:$scope.user
	}).success(function(response)
	{
		console.log(response.payload)
        $scope.openConfirmationModal('lg',response.payload);

    }).error(function(error)
	{
		console.log(error);
	})
}



    }]);