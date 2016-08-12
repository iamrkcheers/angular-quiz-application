app.controller("quizctrl", function ($scope, footballfactory) {
    $scope.qwerty = footballfactory;
    //$scope.quizActive=footballfactory.quizActive;
    //console.log($scope.quizActive);
    //$rootscope.quizActive=footballfactory.quizActive;
    //$scope.quizActive=$rootscope.quizActive;
    $scope.quiz = footballfactory.ques;
    $scope.activeQuestion = 0;
    $scope.questions = footballfactory.ques;
    var numQuesAnswered = 0;
    $scope.error = false;
    $scope.finalise = false;

    $scope.setActiveQues = function (index) {
        if (index === undefined) {
            var br = false;
            var quizLength = footballfactory.ques.length - 1;
            while (!br) { //next unanswered ques k liye
                $scope.activeQuestion = $scope.activeQuestion < quizLength ? ++$scope.activeQuestion : 0;
                if ($scope.activeQuestion === 0) {
                    $scope.error = true;
                }
                if ($scope.questions[$scope.activeQuestion].selected === null) {
                    br = true;
                }
            }
        } else {
            $scope.activeQuestion = index;
        }
    };

    $scope.quesAns = function () {
        var queslength = footballfactory.ques.length;
        if ($scope.questions[$scope.activeQuestion].selected !== null) {
            numQuesAnswered++;
            if (numQuesAnswered >= queslength) {
                for (var i = 0; i < queslength; i++) { //numQuesAnswered >= queslength but all ques not answered
                    if ($scope.questions[i].selected === null) {
                        setActiveQues(i);
                        return;
                    }
                }
                $scope.error = false;
                $scope.finalise = true;
                //alert($scope.finalise);
                return;
            }
        }
        $scope.setActiveQues();
    };

    $scope.selectAnswer = function (index) {
        $scope.questions[$scope.activeQuestion].selected = index;
    };

    $scope.finaliseAns = function () {
        $scope.finalise = false;
        $scope.activeQuestion = 0;
        numQuesAnswered = 0;
        footballfactory.markQuiz();
        footballfactory.changeState("quiz", false);
        footballfactory.changeState("results", true);
    }
});