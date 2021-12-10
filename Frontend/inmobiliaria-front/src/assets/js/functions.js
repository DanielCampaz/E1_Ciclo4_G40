function OpenGeneralMessageModal(message){
    document.querySelector("#pMessageText"). innerHTML= message;
    let elem =document.querySelector("#modal-general-message")
    var instance = M.Modal.getInstance(elem);
    instance.open();
}

function Courrusel(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {
            duration: 200
        });
        instances.open();
      });
}