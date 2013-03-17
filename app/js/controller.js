function BookListCtrl($scope, $http) {
    $http.get('books/books.json').success(function(books){
        $scope.books = books;
    });
    $scope.orderProp = "author";

}
function BookDetailCtrl($scope,$http, $routeParams) {
    $http.get('books/books.json').success(function(books){
        angular.forEach(books, function(book, idx) {
            if (book.id == $routeParams.bookId) {
                $scope.book = book;
            }
        });
    });
}
