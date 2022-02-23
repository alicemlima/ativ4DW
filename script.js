$(document).ready(function(){
    formatPage();
});

function formatPage() {
    var request;

    request = $.ajax({
        url: 'http://jsonplaceholder.typicode.com/users',
        type: "GET",
    });

    request.done(function(response){
        $.each(response, function(i, item){
            var id = item.id;
            var nameUser = item.name;
            posts(id, nameUser);
        });
    });
}

function posts(id, name) {

    var request;
    
    request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/?userId=' + id,
        type: "GET",
    });

    request.done(function(response){
        $(".the-author").html("<h2>" + name + "</h2>");

        $.each(response, function(i, item){
            var title = item.title;
            var body = item.body;

            $(".the-author").append(
                "<h4>" + title + "</h4>" 
                + "<h5>" + body + "</h5>")
        });
    });
}

function albums(id, nome){
    var request;
    
    request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/albums/?userId=' + id,
        type: "GET",
    });

}