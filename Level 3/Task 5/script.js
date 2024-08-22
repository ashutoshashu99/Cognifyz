fetch('https://api.github.com/users/ashutoshashu99')
.then(response => response.json())
.then((data) => {
    const {avatar_url, html_url, followers, following, name, repos_url}  = data
    document.querySelector("img").setAttribute('src' , avatar_url);
    document.querySelector(".username").innerHTML = name;
    document.querySelector(".followers").innerHTML = 'Followers: '+followers;
    document.querySelector(".following").innerHTML = 'Following: '+following;
    
    const urlButton = document.querySelector(".url");

    urlButton.addEventListener('click', ()=>{
        window.open(html_url, "_blank");
    })

    // const repoButton = document.querySelector(".repo-url");

    // repoButton.addEventListener('click', ()=>{
    //     window.open(repos_url, "_blank");
    // })
})
.catch((error)=> console.log("Error : " + error))


