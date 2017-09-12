var app = angular.module("app", ["ui.router"])
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/shou")
	$stateProvider // 配置路由服务
		.state("shou", {
			url: "/shou",
			templateUrl: "a.html",
			controller: "shouye"
		})
		.state("chong", {
			url: "/chong",
			templateUrl: "b.html"
		})
		.state("dian", {
			url: "/dian",
			templateUrl: "c.html"
		})
		.state("ling", {
			url: "/ling",
			templateUrl: "d.html"
		})
		.state("guo", {
			url: "/guo",
			templateUrl: "e.html"
		})
		.state("jin", {
			url: "/jin",
			templateUrl: "f.html"
		})
		.state("chao", {
			url: "/chao",
			templateUrl: "g.html"
		})
		.state("hai", {
			url: "/hai",
			templateUrl: "h.html"
		})
		.state("sheng", {
			url: "/sheng",
			templateUrl: "i.html"
		})
		.state("wo", {
			url: "/wo",
			templateUrl: "j.html"
		})

})


//控制器
app.controller("shouye", function($scope, $http, $interval,$timeout) {
	//			读取数据
	$http.get("http://127.0.0.1:6868").then(function(res) {
		$scope.val = res.data.info
	})
	
	//		左右轮播
//	$scope.lb = function() {
	$timeout(function(){
		new Swiper("#banner", {
			autoplay: 2000,
			loop: true,
			pagination: ".swiper-pagination"
		})
	})
		
//	}
//   文字	上下轮播
	$timeout(function(){
		new Swiper("#banner1", {
			autoplay: 2000,
			loop: true,

			direction: "vertical"
		})
	})
	//	倒计时
	$scope.future = new Date("2017/9/7 8:00:00").getTime();
	console.log($scope.future);
	$time = $interval(function() {
		$scope.now = new Date().getTime(); //现在的系统时间
		$scope.date = new Date($scope.future - $scope.now)
		console.log($scope.date);
	}, 1000)

})
