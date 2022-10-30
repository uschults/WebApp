window.onload = function() {
    fetch('http://myjson.dit.upm.es/api/bins/38me')
        .then((response) => response.json())
        .then(json => {
            let middle_postbar = document.getElementById("posts");
            
            for (const i in json){
                
                let post = document.createElement("div");
                post.className = "post";

                let post_head = document.createElement("div");
                post_head.className = "post_header";
                post_head.innerHTML = 
                '<a><img id="profile_pic" src="res/images/me.png" width="40" height="40" alt="My picture"></a>';
                let post_time = document.createElement("p");
                post_time.innerHTML = json[i].time;
                post_head.appendChild(post_time);


                let post_body = document.createElement("div");
                post_body.className = "post_body";
                post_body.innerText = json[i].body;

                let post_footer = document.createElement("div");
                post_footer.className = "post_footer"
                
                post.appendChild(post_head);
                post.appendChild(post_body);
                middle_postbar.appendChild(post);  
            }
        });}