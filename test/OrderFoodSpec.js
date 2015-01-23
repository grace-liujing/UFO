describe("when order food",function(){
    var scope, ctrl;

    beforeEach(module('UFOApp'));

    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();

        ctrl = $controller('OrderFoodController',{
            $scope: scope
        });
    }));

    it('should be able to return restaurants', function(){
        expect(scope.restaurants.length).toEqual(10);
    });

    it('should be able to add item to shopping cart', function(){
        expect(scope.cart.length, 0);

        var item = {
            name: "饭堡双人餐",
            price: 68.0,
            group: "超值套餐",
            image: "../images/set3.jpg"
        };

        scope.addToCart(item);

        expect(scope.cart.length).toEqual(1);

        var itemInShoppingCart = scope.cart[0];

        expect(itemInShoppingCart.name).toEqual( "饭堡双人餐");
        expect(itemInShoppingCart.price).toEqual( 68.0);
        expect(itemInShoppingCart.group).toEqual( "超值套餐");
        expect(itemInShoppingCart.image).toEqual( "../images/set3.jpg");

    });

});
