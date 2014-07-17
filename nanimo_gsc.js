<!-- my script { -->
// <script src="http://code.jquery.com/jquery-latest.min.js"></script>
// <script type="text/javascript">
/* ============================================================ *
    nanimo-gsc.js
 * ============================================================ */
$(function(){
    /******************************
      module - search box (using GOOGLE CUSTOME SEARCH ENGINE)
     ******************************/
    // layout @entrance page --> move to header bottom

    var searchbox_layout_is = 0;
    /* specify the layout;
       0: "bottom" of a entry contents
       1: "side-by-side" with the blog title
       2: "above" the blog title
       3: "below" the blog title
    */

    if ($('body').hasClass('page-index')) {
        if (searchbox_layout_is == 2) {
            //alert ("searchbox_layout_is: " + searchbox_layout_is);
            $("#top-editarea").prependTo("header#blog-title");
        } else {
            //alert ("searchbox_layout_is: " + searchbox_layout_is);
            $("#top-editarea").appendTo("header#blog-title");
        }
    }else{
        switch(searchbox_layout_is) {
            case 0 :
                //if (!$("body").hasClass("page-index")) $("#top-editarea").insertAfter(".module-profile");
                $("#top-editarea").prependTo("#box2");
                break;
            case 1 :
                //if (!$("body").hasClass("page-index")) $("#top-editarea").appendTo("header#blog-title");
                $("#top-editarea").appendTo("header#blog-title");
                break;
            case 2 :
                $("#top-editarea").prependTo("header#blog-title");
                break;
            case 3 :
                //$("#top-editarea").insertAfter("header");
                break;
        }

    }

    //$("header#blog-title").addClass("searchbox-layout");

    // switch google custome search engine. dont use hatena search module
    $(".hatena-module-search-box").remove();
    $(".searchbox-htn").remove();

    // design search box
    /* design search box button (set to hide in css)
    $("td.gsc-search-button").remove();
    */

    // rename id
    $("div#top-editarea").attr("id", "searchbox-ggl");

    // add button
    $("#searchbox-ggl").after("<div id='searchbox-btn' title='検索コントロールを展開'>");

    // wrap search box module
    $("#searchbox-ggl, #searchbox-btn").wrapAll("<div id='search-box'>");

});

jQuery( function() {
    jQuery( '#searchbox-btn' ) . click( function() {
        //jQuery( "#animate-toggle-block" ) . animate( { width: 'toggle' }, 'slow' );
        jQuery( "#searchbox-ggl" ) . animate( { width: 'toggle' }, 'fast' );
    } );
} );
// </script>
<!-- } my script -->
