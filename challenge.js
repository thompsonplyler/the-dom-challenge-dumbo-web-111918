document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    let the_counter = document.getElementById("counter");
    let plus_button = document.getElementById("+");
    let minus_button = document.getElementById("-");
    let pause_button = document.getElementById("pause");
    let like_button = document.getElementById("<3");
    let comment_form = document.getElementById("comment-form");
    let submit_button = document.getElementById("submit")
    let input_field = document.getElementById("input")

    console.log(comment_form.name)
    let paused = false;
    let i = 0;

    pause_button.addEventListener("click",function(){
        if (paused === false) {
            paused = true
        }
        else { 
            paused = false
        }

    })

    setInterval(function(){
        if (paused === false){
            the_counter.innerText = parseInt(the_counter.innerText)+1
        }
        else {
            the_counter.innerText = parseInt(the_counter.innerText)
        }
    }
        , 1000)

        plus_button.addEventListener("click", function(){
            the_counter.innerHTML = parseInt(the_counter.innerHTML)+1
        })

        minus_button.addEventListener("click", function(){
            the_counter.innerHTML = parseInt(the_counter.innerHTML)-1
        })

        like_button.addEventListener("click",function(){
            i = the_counter.innerText;
            let likes = document.querySelector(".likes");
            
            if (document.getElementById(i)){
                j++
                let li = document.getElementById(i);
                console.log(li.innerText)
                li.innerHTML = i + " was liked " + `${j} times.`
            }
            else {
                let li = document.createElement("li")
                j = 1
                li.setAttribute("id", i);
                likes.append(li);
                li.innerHTML = i + " was liked " + j + " times."
            }
        })

        comment_form.addEventListener("submit",function(this_form){
            this_form.preventDefault();
            let attributes=this_form.target.children[0]; //grabs the attributes from the form
            let form_value=attributes.value;
            attributes.value = "";
            let comments = document.getElementById("list");
            let comment = document.createElement("p")
            comment.innerText = form_value;
            comments.append(comment);
        })


    })