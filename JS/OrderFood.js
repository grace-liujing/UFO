var ufo = angular.module('UFOApp',['ngRoute']);

ufo.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'main.html',
            controller  : 'OrderFoodController'
        })
        .when('/summary',{
            templateUrl : 'summary.html',
            controller : 'SummaryController'
        });
}]);

ufo.controller('OrderFoodController', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.restaurants = [
        "肯德基",
        "麦当劳",
        "必胜客",
        "星巴克",
        "Costa",
        "东方饺子馆",
        "永和大王",
        "吉野家",
        "和合谷",
        "龙香记米粉"
    ];

    $scope.singleMenu = [{
        name: "老北京鸡肉卷",
        price: 14.0,
        group: "缤纷单品",
        image: "../images/single1.jpg"
    },{
        name: "墨西哥鸡肉卷",
        price: 12.0,
        group: "缤纷单品",
        image: "../images/single2.jpg"
    },{
        name: "香烤照烧鸡腿饭",
        price: 21.0,
        group: "缤纷单品",
        image: "../images/single3.jpg"
    },{
        name: "新奥尔良烤鸡腿饭",
        price: 20.0,
        group: "缤纷单品",
        image: "../images/single4.jpg"
    },{
        name: "香辣鸡柳饭",
        price: 20.0,
        group: "缤纷单品",
        image: "../images/single5.jpg"
    },{
        name: "新奥尔良烤鸡翅",
        price: 9.0,
        group: "缤纷单品",
        image: "../images/single6.jpg"
    },{
        name: "劲爆鸡米花",
        price: 12.0,
        group: "缤纷单品",
        image: "../images/single7.jpg"
    },{
        name: "新奥尔良烤鸡腿堡",
        price: 16.50,
        group: "缤纷单品",
        image: "../images/single8.jpg"
    }];

    $scope.setMenu = [{
        name: "堡堡双人餐",
        price: 70.0,
        group: "超值套餐",
        image: "../images/set1.jpg"
    },{
        name: "特惠经典全家餐",
        price: 92.0,
        group: "超值套餐",
        image: "../images/set2.jpg"
    },{
        name: "饭堡双人餐",
        price: 68.0,
        group: "超值套餐",
        image: "../images/set3.jpg"
    }];


    $rootScope.cart = [];
    $scope.addToCart = function(menu){
        $rootScope.cart.push(menu);
    };

}]);

ufo.controller('SummaryController', ['$scope', '$rootScope', function($scope, $rootScope){
}]);





