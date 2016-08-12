app.controller("resultsctrl", function ($scope, footballfactory) {
    $scope.qwerty = footballfactory;
    $scope.quiz = footballfactory.ques;
    $scope.activeQuestion = 0;
    $scope.questions = footballfactory.ques;
    $scope.setActiveQues = function (index) {
        $scope.activeQuestion = index;
    };
    $scope.getAnsClass = function (index) {
        if (index === footballfactory.correctAns[$scope.activeQuestion]) {
            return "bg-success";
        } else if (index === footballfactory.ques[$scope.activeQuestion].selected) {
            return "bg-danger";
        }
    }
    $scope.perc = function () {
        return footballfactory.numCorrectAns / footballfactory.ques.length * 100;
    }
    $scope.reset = function () {
        footballfactory.changeState("results", false);
        footballfactory.numCorrectAns = 0;
        for (var i = 0; i < footballfactory.ques.length; i++) {
            var data = footballfactory.ques[i];
            data.selected = null;
            data.correct = null;
        }
    }
});