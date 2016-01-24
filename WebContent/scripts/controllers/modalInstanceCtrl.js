/** Restaurant Reservation :: Shivang Parekh
 * **/

reservationAppCtrls
    .controller('ConfirmationDetailModal', ['$scope', '$modalInstance','confirmationDetails', function($scope, $modalInstance, confirmationDetails)
    {

        $scope.confirmationsDetails = confirmationDetails;
        $scope.confirmationsDetails.date = new Date(confirmationDetails.date * 1000);

        $scope.ok = function()
        {
          $modalInstance.close();
        };

        $scope.cancel = function()
        {
            $modalInstance.dismiss('cancel');
        };
    }]);