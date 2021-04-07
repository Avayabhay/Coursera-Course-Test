document.addEventListener("DOMContentLoaded",
function(event){
    document.querySelector("button").addEventListener("click",
    function(){
        var self = this;
        var name = "";
        $ajaxUtils.sendGetRequest("./data/name.txt",
            function(request){
                self.name = request.responseText;   
                console.log(self.name);
                document.querySelector(".content").innerHTML = `<h2> Hello ${self.name} !`;

            });
            // console.log(self.name);
    })
})