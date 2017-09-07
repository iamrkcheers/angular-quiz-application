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
        if (index === undefined) { // comes from 'answer has not been given, continue is clicked'
            var br = false;
            var quizLength = footballfactory.ques.length - 1;
            while (!br) { //next unanswered ques k liye
                $scope.activeQuestion = $scope.activeQuestion < quizLength ? ++$scope.activeQuestion : 0; // will either yield activeQuestion = [1,9] or activeQuestion = 0
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
            // answer has been given, continue is clicked
            numQuesAnswered++;
            if (numQuesAnswered >= queslength) {
                // wd be '=' when continue is pressed 10 straight times; wd be '>' when continue is pressed & again the previous ques. is loaded from the btn-toolbar, and so-on and so-forth.
                for (var i = 0; i < queslength; i++) { //numQuesAnswered >= queslength but all ques not answered
                    if ($scope.questions[i].selected === null) {
                        setActiveQues(i);
                        return;
                    }
                }
                // numQuesAnswered >= queslength but all ques answered
                $scope.error = false;
                $scope.finalise = true;
                //alert($scope.finalise);
                return;
            }
        }
        // answer has not been given, continue is clicked
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