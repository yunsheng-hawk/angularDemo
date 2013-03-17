function DemoCtrl($scope) {
    $scope.books = [
        {"id":1, "name":"Javascript from beginer to master", "author":"zhangsan"},
        {"id":2, "name":"Master Javascript", "author":"lishuhao"},
        {"id":3, "name":"J2ee in practice", "author":"zhangsan"},
        {"id":4, "name":"JSF intro", "author":"wangwu"},
        {"id":5, "name":"Design pattern", "author":"zhaoliu"},

    ];

    $scope.orderProp = "author";

    $scope.size = function() {
        return $scope.books.length;
    }
}
