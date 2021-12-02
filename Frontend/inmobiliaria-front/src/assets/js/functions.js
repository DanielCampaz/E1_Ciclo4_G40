function OpenGeneralMessageModal(message){
    document.querySelector("#pMessageText"). innerHTML= message;
    let elem =document.querySelector("#modal-general-message")
    var instance = M.Modal.getInstance(elem);
    instance.open();
}