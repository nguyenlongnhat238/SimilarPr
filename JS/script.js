
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


