const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwBC04b0H_58EI1L1zYD_UjHryY3FZ88KWBbh5RmZAaDSq3RQ3QV3AWwUIHURCzQ7YRYA/exec";

fetch(WEB_APP_URL,{
    method:"POST",
    body:JSON.stringify({
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        answers:answers,
        total:total
    })
});