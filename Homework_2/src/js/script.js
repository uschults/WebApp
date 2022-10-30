window.onload = function() {
    fetch('http://myjson.dit.upm.es/api/bins/38me')
        .then((response) => response.json())
        .then(json => {
            let middle = document.createElement("div");
            middle.className = "middle";

            let middle_postbar = document.createElement("div");
            middle_postbar.className = "middle_postbar";
            for (const i in json){
                
                let post = document.createElement("div");
                post.className = "post";

                let post_head = document.createElement("div");
                post_head.className = "post_header";
                post_head.innerText = json[i].time;
                
                let post_body = document.createElement("div");
                post_body.className = "post_body";
                post_body.innerText = json[i].body;

                let post_footer = document.createElement("div");
                post_footer.className = "post_footer"
                
                post.appendChild(post_head);
                post.appendChild(post_body);
                middle_postbar.appendChild(post);
                middle.appendChild(middle_postbar);
                document.body.appendChild(middle);
                console.log(json[i]);
                
            }
        });}