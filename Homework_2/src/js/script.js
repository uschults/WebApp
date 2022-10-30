window.onload = function() {
    fetch('http://myjson.dit.upm.es/api/bins/b6vy')
        .then((response) => response.json())
        .then(json => {
            let middle_postbar = document.getElementById("posts");
            
            for (const i in json){
                
                let post = document.createElement("div");
                post.className = "post";

                let post_head = document.createElement("div");
                post_head.className = "post_head";
                post_head.innerHTML = 
                '<a><img id="profile_pic" src="res/images/me.png" width="40" height="40" alt="My picture"></a>';
                let post_time = document.createElement("p");
                post_time.innerHTML = json[i].time;
                post_head.appendChild(post_time);


                let post_body = document.createElement("div");
                post_body.className = "post_body";
                post_body.innerHTML = '<p>' + json[i].body + '</p>';
                if(json[i].hasOwnProperty("image")){
                    let post_image = document.createElement("div");
                    post_image.className = "post_image";
                    post_image.innerHTML = '<img src="' + json[i].image + '" alt="My picture">';
                    post_body.appendChild(post_image);
                }

                let post_footer = document.createElement("div");
                post_footer.className = "post_footer"
                post_footer.innerHTML = '<button type="submit" class="like_button" id="like_button"><img src="res/images/like_button.png" width="40" height="40" alt="Like" /></button><p>Likes: 69</p> <p>Comments: 42</p>'

                
                post.appendChild(post_head);
                post.appendChild(post_body);
                post.appendChild(post_footer);
                middle_postbar.appendChild(post);  
            }
        });}