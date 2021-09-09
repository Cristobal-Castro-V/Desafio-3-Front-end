$(document).ready(function(){
    
    var search = "";
    $("#btn-buscar").click(function(){
        search = $("#search").val();
        $.get("http://localhost:8080/api/products?search=" + search,
        function(data, statusText, xhr){
            var status = xhr.status;
            if(status == 200){
                $("#data-search").html("");
                
                for (let index = 0; index < data.length; index++) {     
                    $("#data-search").append("<div class='card col-md-3' style='width: 18rem;'>"+
                    "<img src='http://"+data[index].image +"'>" +
                    "<div class='card-body'>" +
                        "<h5 class='card-title'>"+ data[index].brand + "</h5>"+
                        "<p class='card-text'>" + data[index].description+ "</p>"+
                        "<p class='price'>$"+ data[index].price + "</p>"+
                        "<p class='discount'>$"+ data[index].discount + "</p></div></div>"
                    
                    );
                    index++;
                }



                var discount = $(".discount").html();
                if(discount.length <= 2){
                    $(".discount").css("display", "none");
                }else{
                    $(".price").css("text-decoration","line-through");
                }

                

            }
        }).fail(function() {
              $("#data-search").html("No se encontraron productos");
            });// fin get
    })// fin evento click

   
   
   
})



