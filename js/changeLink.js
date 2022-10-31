/* comments:
try the jQuery
      */
     $(function(){ //document.ready...

        $("a").each(function(){

            $(this).css("text-decoration", "line-through");
            console.log($(this).attr('href'));

            $(this).attr('href',"https://www.google.com");
        });

        //get image path correct
        $('img').each(function(){
            //var srcName =$(this).attr('src');
            //console.log(srcName);
        });

     });