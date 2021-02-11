var request = new XMLHttpRequest();

document.getElementById("user_search").addEventListener("click",
    function () {
        var user = document.getElementById("text-box").value;
        var url = 'https://api.github.com/users/'+user;
        request.open('GET', url);
        request.send();
    })

var html;
request.onreadystatechange = function () {
    var user = {};
    if (request.readyState == 4) {
        user = JSON.parse(request.responseText);
    }

    document.getElementById("user-holder").innerHTML = " ";
        html = "<div id =\"user-card\" class=\"card flag_cards\" style=\"width:18rem;\"><img id=\"" + user.login + "\",class=\"flag-image\" src=\"";
        html += user.avatar_url + "\"class=\"card-img-top\"><div class=\"card-body\"><h3> User: "
            + user.login + "</h3> <h4>Repo's: " + user.public_repos + "</h4</div></div>";
        document.getElementById("user-holder").innerHTML += html;
}



var modalRequest = new XMLHttpRequest();
document.getElementById("user-holder").addEventListener("click", function (event) {
        console.log(event.target.className)
        if(event.target.className === "card-img-top"){
        var user = document.getElementById("text-box").value;
        var url = 'https://api.github.com/users/'+user;
        modalRequest.open('GET', url);
        modalRequest.send();

        var modal = document.getElementById("mymodal");

        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        $('body').css('overflow', 'hidden');
        span.onclick = function () {
            modal.style.display = "none";
            $('body').css('overflow', 'auto');
        }
    }
})

modalRequest.onreadystatechange = function () {
    var user = {};
    console.log("hvhgg");
    if (request.readyState == 4) {
        user = JSON.parse(request.responseText);
    }

        html = "<div class=\"card flag_cards\" style=\"width:18rem;\"> <img id=\"" + user.login + "\",class=\"flag-image\" src=\"";
        html += user.avatar_url + "\"class=\"card-img-top\"><div class=\"card-body\"><h3> User: "
            + user.login + "</h3><h4>Id: " + user.id +"</h4> <a href="+user.html_url+">"+user.html_url+"</a> <h5>Followers:  " 
            + user.followers +"</h5> <h5> Gists:  " + user.public_gists+"</h5> <h6>Location: "+ user.location +"</h6></div></div>";
         document.getElementById("modal_body").innerHTML = html;
}

