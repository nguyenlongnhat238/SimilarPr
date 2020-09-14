
//hàm tạo background cho nav menu khi lăn chuột cuộn trang 
window.addEventListener("scroll", function(){
    var a = document.querySelector("nav.menu")
    a.classList.toggle("menu-scroll", window.scrollY > 0);
})
// hàm mở khung đặt hàng
function openNav() {
    document.getElementById("mySidebar").style.width = "500px";
  }
//Hàm đóng khung đặt hàng
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

//GO TO TOP
$(document).ready(function(){
    $(window).scroll(function(){
        var t = $(this).scrollTop()
        if(t > 50)
            $("#Gotop").show('slow');
        else
            $("#Gotop").hide('slow');
    })
// lấy ảnh mua hàng vào thanh toán
    $(".note-page input").click(function(){
        var price = $(this).attr('data-price');
        var name = $(this).attr('data-name');
        var c = $(this).attr('data');
        $("#imgSlide").attr("src", `IMG/${c}_1.jpg`)
        $("#noteSlide").text(name)
        $("#priceSlide").text(price)
        $("#imgSlide1").attr("src", `IMG/${c}_1.jpg`)
        $("#imgSlide2").attr("src", `IMG/${c}_2.jpg`)
        $("#imgSlide3").attr("src", `IMG/${c}_3.jpg`)

    })
//thumb nail cho ảnh
    $(".thumb img").click(function(){
        $(this).attr('src')
        $("#imgSlide").attr("src", $(this).attr('src'))
    })


})
//validate
$(document).ready(function(){
    var n,p,m;
    $("#buy").click(function validateName(){
         if ($("#name").val()=="")
        {
             $("#name").css("border","red solid 3px");
            return false;
        }
        else{
         $("#name").css("border","none");
         n=true;
         return true;
        }
         })
    $("#buy").click(function validatePhone(){
        var filterPhone=/^\d{10}$/;
        if($("#phone").val().match(filterPhone))
        {
            $("#phone").css("border","none");
            p=true;
            return true;
         }
        else
        {
            $("#phone").css("border","red solid 3px");
            return false;
        }
          })
    $("#buy").click(function validateMail(){
    var filterMail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ($("#mail").val().match(filterMail))
    {
        $("#mail").css("border","none");
        m=true;
        return true;
    }
    else
    {
        $("#mail").css("border","red solid 3px");
        return false;
    }
   })
   
$("#buy").click(function(){
        if(n==true && p==true &&m==true) 
         {
            document.getElementById("dialog").style.display="block";
          }
    } )
})


window.onclick = function(event) {
    if (event.target ==document.getElementById("dialog") ) {
        document.getElementById("dialog").style.display = "none";
    }
  }
