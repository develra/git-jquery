function myRepos(){
    console.log("List Repos")
    $.get("https://api.github.com/users/develra/repos", github, function(data) {
        $.get("/git-jquery/templates/repoList.jade", function(template) {
            var html = jade.render(template, {items: data})
            $("#list").html(html)
            repoView(data[0].full_name)
        })
    })
}
