function myEvents(){
       
$.get("https://api.github.com/users/develra/events", github, function(events){
$.get("/git-jquery/templates/eventList.jade", function(template){
      var html = jade.render(template, {items: events})
            $('#list').html(html)
        })
    })
}
