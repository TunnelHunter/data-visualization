app.controller('pageListCtrl', ['$scope', function ($scope) {
    $scope.fn_go_page = function (value) {
        switch (value) {
            case 1:
                window.location.href = '#/info';
                break;
            case 2:
                window.location.href = '#/powers';
                break;
            case 3:
                window.location.href = '#/waters';
                break;
            case 4:
                window.location.href = '#/fertilizer';
                break;
            case 5:
                window.location.href = '#/environment';
                break;
            case 6:
                window.location.href = '#/production';
                break;
            case 7:
                window.location.href = '#/orders';
                break;
            case 8:
                window.location.href = '#/qualityTrace';
                break;
            default:
                break;
        }
    }
}]);