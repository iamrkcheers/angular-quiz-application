app.controller("footballcontroller", function ($scope, footballfactory) {

    $scope.activePlayer = {};
    $scope.changeActivePlayer = function (index) {
        $scope.activePlayer = index;
    };

    //$rootscope.quizActive=footballfactory.quizActive;
    $scope.qwerty = footballfactory;
    //$scope.quizActive=false;
    //alert($scope.quizActive);

    $scope.activateQuiz = function () { //$scope.quizActive=true;
        //console.log(footballfactory.quizActive);
        //footballfactory.quizMetrics().quizActive=true;
        $scope.qwerty.changeState("quiz", true);
        //console.log(footballfactory.quizActive);
        //footballfactory.quizActive=true;
        //$scope.quizActive=footballfactory.quizActive;
        //$scope.quizActive=true;
        //alert(footballfactory.quizActive);
        //$rootscope.quizActive=footballfactory.quizActive;
        //$scope.quizActive=$rootscope.quizActive;
    };

    $scope.search = "";

    $scope.dataList = footballfactory.show();
});