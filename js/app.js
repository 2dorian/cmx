(function () {

'use strict';
var app = angular.module('myApp', ['myApp.controller', 'ngRoute', 'appFilters', 'appServices' ]);


	app.service('summaryService', function() {

		this.job = "undefined";
		return {
			getJobtitle: function() {
				return this.job;
			},
			setJobtitle: function(value) {
				this.job = value
			}
		};
	});

	/*
	--Custom directive -works- :

	app.directive('mySummary', function() {
		return {
			restrict: 'A', /!* A = html Attribute *!/
			replace: false,
			scope: {
				jobtitle: '=jobtitle',
				myLinkText: '@'
			},
			template: '\
          <div>\
            <label>Jobtitle:</label>\
            TEST\
            <a href="{{jobtitle}}">{{campaign.jobtitle}}</a>\
          </div>\
        '
		};
	});

	--Can be called in a view using:

	 <div my-summary
	 jobtitle="campaign.jobtitle"
	 my-link-text="Placeholder text"><br/>
	 </div>

	*/

	app.config(['$routeProvider',
                       function($routeProvider)
                      		{$routeProvider
								.when('/root',
								 {
									 templateUrl: 'partials/root/root.html',
									 controller: 'RootCtrl'
								 })
								.when('/setup-step1',
									{
										templateUrl: 'partials/steps/setup-step1.html',
										controller: 'Step1Controller'
									})
								.when('/setup-step2',
								 {
                        	 		templateUrl: 'partials/steps/setup-step2.html',
                        	 		controller: 'ListController'
								 })
								.when('/setup-step3',
									{
										templateUrl: 'partials/steps/setup-step3.html',
										controller: 'Step3Controller'
									})
								.when('/tests/:testId',
								 {
                        	 		templateUrl: 'partials/tests/test-detail.html',
                        	 		controller: 'TestDetailCtrl'
								 })
								.otherwise({
                        	   		redirectTo: '/root'
							 });
                       	}
			]);

})();