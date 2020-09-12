
//hàm tạo background cho nav menu khi lăn chuột cuộn trang 
window.addEventListener("scroll", function(){
    var a = document.querySelector("nav.menu")
    a.classList.toggle("menu-scroll", window.scrollY > 0);
})
// hàm mở khung đặt hàng
function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
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
})