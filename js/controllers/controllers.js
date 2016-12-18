'use strict';

var ctr = angular.module('myApp.controller', []);

//////////
// ROOT CONTROLLER
ctr.controller
('RootCtrl',
	['$scope', '$routeParams', '$http', function($scope, $routeParams, $http)
                    {
						var temp = {};
                        var defer = $q.defer();
                        $http.get("php/overview.php")
                            .then(function(data){
                                /*$scope.campaigns = data;*/
                                temp = data;
                                defer.resolve(data);
                                defer.$apply();
                            })
                            .error(function() {
                                $scope.campaigns = "Error in fetching data";
                            });
                        return defer.promise;

					}
						
					]);

//////////
// Step 1 Controller CONTROLLER

ctr.controller('Step1Controller', Step1Controller);

Step1Controller.$inject = ['$scope', '$routeParams', '$http', '$location', 'summaryService'];

function Step1Controller($scope, $routeParams, $http, $location, summaryService){

                        //summary of campaign
                       $scope.newJobtitle = function(campaign) {
                            summaryService.setJobtitle(campaign.jobtitle);
                        };

                        //for path
                        $scope.go = function(hash){
							$location.hash( hash );
						};
						//create timestamp id
						var createid = function(){
							$scope.campaignid = new Date();
						};
						createid();

						$scope.campaign = {};

						$scope.submitForm = function() {
							$http({
								method: 'POST',
								url: 'php/setup-step1.php',
								data: $scope.campaign,
								headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
							})
								.success(function(data){
									console.log(data);
									if (data.errors) {
										$scope.errorJobtitle = data.errors.jobtitle;
										$scope.errorVacancyid = data.errors.vacancyid;
									} else {
										$scope.message = data.message;
									}
								})
								.error(function(data) {
									console.log(data);
								});
							return false;
						};
                    }
    ;


//////////
// LIST CONTROLLER

ctr.controller
	('ListController',
		['$scope', 'Test', 'summaryService', function ($scope, Test, summaryService)
	                    {
                            $scope.job = summaryService.getJobtitle();


                            $scope.tests = Test.query();
							$scope.orderProp = 'duration';

// --COUNTER (Amount & time) FOR SELECTED TESTS

							$scope.selectedCounter = 0;
							$scope.change = function (item) {

								if (item.selected) {
									$scope.selectedCounter++;
								} else {
									$scope.selectedCounter--;
								}
									};
            $scope.selectedDuration = 0;

/*            $scope.sum = function (item) {
                if (item.selected) {
                    $scope.selectedDuration = ($scope.selectedDuration + test.duration)
                } else {
                    $scope.selectedDuration = ($scope.selectedDuration - test.duration)
                }
            };*/
	}]);

//////////
// TEST DETAIL CONTROLLER

ctr.controller
	('TestDetailCtrl',
		['$scope', '$routeParams', 'Test', function($scope, $routeParams, Test)
	                    {
							$scope.$on('$routeChangeSuccess', function() {
							$scope.test = Test.get({testId: $routeParams.testId}, function(test) {
									$scope.mainImageUrl = test.screenshots[0];
							});
							$scope.setImage = function(imageUrl) {
								$scope.mainImageUrl = imageUrl;
								};
							$scope.hello = function(name) {
								alert('Test ' + (name || 'works' + '!'));
								};

						} );}
	]);

