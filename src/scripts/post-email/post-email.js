function postMessage() {
    $('#email-forms').submit(function(){
        $.post(
            'post-email.php', // адрес обработчика
            $("#email-forms").serialize(), // отправляемые данные

            function(msg) { // получен ответ сервера
                $('#my_message_email').html(msg);

                (function PopUpShow(){
                    $("#popup1").css({"display" : "block"});
                }())
            }
        );

        return false;
    });
}

setTimeout(postMessage, 100);

function postMessageTimeout() {
    setTimeout(postMessage, 100);
}

function contactsButtonListener() {
    let contactsButtonsArray = document.querySelectorAll(".contacts");

    contactsButtonsArray.forEach(el => el.addEventListener("click", postMessageTimeout));
}

function contactsButtonListenerRestart() {
    setTimeout(contactsButtonListener, 100);
}

function mainButtonListener() {
    let mainButtonsArray = document.querySelectorAll(".main");

    mainButtonsArray.forEach(el => el.addEventListener("click", contactsButtonListenerRestart));
}

setTimeout(contactsButtonListener, 100);
setTimeout(mainButtonListener, 100);