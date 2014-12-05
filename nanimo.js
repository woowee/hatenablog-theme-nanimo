<!-- my script { -->
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript">


/* ============================================================ *
    open in new tab(window)
 * ============================================================ */

$(function(){
    // $('.entry-content p a').not('[href*="'+location.hostname+'"]').attr({'target':'_blank'}); //全てのリンクを別タブにする場合
    $('.entry-content p a').not('[name^="f"]').attr({'target':'_blank'}); //全てのリンクを別タブにする場合
    $('.entry-content blockquote .via a').attr({'target':'_blank'});
});

/* ============================================================ *
    nanimo.js
 * ============================================================ */

$(function(){
    /******************************
      module - profile
     ******************************/
    // rename a class, hatena-module-profile.
    $(".hatena-module.hatena-module-profile").addClass("my-module-profile");

    // hatena-module-profile --> module-profile

    // modify interface of follow button
    $(".hatena-follow-button-box.btn-subscribe .subscribing .foreground").text("[-]");
    $(".hatena-follow-button-box.btn-subscribe .subscribing .foreground").attr("title", "読者をやめる");    // tool-tip
    $(".hatena-follow-button-box.btn-subscribe .subscribing .background").text("[-]");
    $(".hatena-follow-button-box.btn-subscribe .unsubscribing .foreground").text("[+]");
    $(".hatena-follow-button-box.btn-subscribe .unsubscribing .foreground").attr("title", "読者になる");    // toool-tip
    $(".hatena-follow-button-box.btn-subscribe .unsubscribing .background").text("[+]");

    // wrap id and button
    $(".my-module-profile .id, .my-module-profile .hatena-follow-button-box.btn-subscribe").wrapAll("<div class='id-and-button'>");

    // put id and the follow-button on center..
    var x_center = $("#box2").width() * .5;
    if ($('.my-module-profile span').hasClass('id')) {
        //alert ("has id");
        var x_shift = $(".id").width() * .50;
    } else {
        //alert ("has no id");
        var x_shift = $('.unsubscribing').width(); // width of 'hatena-follow-button' is zero, ... why?
    }

    /* var xis = x_center - x_shift * .50; */
    var xis = x_center - x_shift;

    // put on the center
    $(".id-and-button").css({"padding-left" : xis+"px"});

    // move the profile to outside of hatena module
    $(".my-module-profile").insertBefore("#box2-inner");

    // remove title of profile
    $(".my-module-profile>div.hatena-module-title").remove();

    // subsciption count; remove if it is zero
    if ($.trim($(".subscription-count").text()) == '') {
        $(".subscription-count").remove();
    }



    /******************************
     entried date
     ******************************/
    $(".page-index .pager-next a").text(" 以前のエントリー");



    /******************************
     tag, categories
     ******************************/
    // subsciption count; remove if it is zero
    $(".categories").each (function() {
        if ($.trim($(this).text()) == '') {
            $(this).removeClass("categories");
        }
    });



    /******************************
      module - search box (using hatena search module)
     ******************************/
    if ($('div').hasClass('gsc-control-cse') || $('div').hasClass('gsc-control-searchbox-only')  ) {
        // remove the original module (not in css is better) if it s been put.
        $('.hatena-module-search-box').remove();
        if ($('div').hasClass('searchbox-htn')) $('.searchbox-htn').remove();
    } else {
        // change layout (entrance page) --> move into header bottom
        $(".page-index .hatena-module.hatena-module-search-box").appendTo("header#blog-title");

        // change layout (else) --> move into header top
        $(".page-entry .hatena-module.hatena-module-search-box").prependTo("header#blog-title");
        $(".page-archive .hatena-module.hatena-module-search-box").prependTo("header#blog-title");
        $(".page-category-category_name .hatena-module.hatena-module-search-box").prependTo("header#blog-title");

        // wrapping
        $("header#blog-title .hatena-module.hatena-module-search-box").wrapAll("<div class='searchbox-htn'></div>");

        // dont need title
        $(".hatena-module.hatena-module-search-box .hatena-module-title").remove();
    }



    /******************************
     entried date
     ******************************/
    // * any pages *
    //   --> move the entried date string into the footer of each entries
    $("article").each(function(){
        // identify id
        var article_id = '#' + $(this).attr('id');

        // specify each `.date` of entries
        var article_date = $(article_id + " .date");
        // .date --> #entry-xxxxxxxxxxxxxxxxxxxx .date

        // specify each `.entry-inner` of entries
        //var article_entryinner = $(article_id + " .entry-inner");
        var article_entryinner = $(article_id + " .entry-footer-section");
        // .entry-inner --> #entry-xxxxxxxxxxxxxxxxxxxx .entry-inner

        // wrap each date of entries with a class ".entry-date-tofooter", and set label "entried"
        $(article_date).wrap("<span class='entry-date-to-entry-footer'>").prepend("entried: ");
        // --> <div class="entry-date-tofooter">entried: <div class="date"></div></div>

        // move date info to the bottom of the each entries
        var article_date_tofooter = $(article_id + " .entry-date-to-entry-footer");
        $(article_date_tofooter).appendTo(article_entryinner);
    });



    /******************************
     page header
     ******************************/
    // * category page *
    //   --> line up blog-title and breadcrump in a row at header, like; "{blog-title} > {breadcrump}"
    if ($("body").hasClass("page-category-category_name")) {
        $(this).find("#blog-title h1#title").after(" > " + $("#top-box .breadcrumb span").text());

        // remove original element (not in css is better)
        $("#top-box").remove();
    }

    // * archive page *
    if ($("body").hasClass("page-archive")) {
        if ($(this).find("h2").not("#blog-description").text()) {
            // year-month-day archive page
            // --> "{blog-title} > {xxからyy間の記事リスト}"
            $(this).find("#blog-title h1#title").after(" > " + $("h2").not("#blog-description").text());

            // remove original element (not in css is better)
            $("h2").not("#blog-description").remove();
            $(this).css("csstext","border:1px solid red !important;");

        } else {
            // category archive page
            // --> "{blog-title} > {category/tag name}"
            $(this).find("#blog-title h1#title").after(" > " + $("#top-box .breadcrumb span").text());

            // remove original element (not in css is better)
            $("#top-box").remove();
            $(this).css("csstext","border:1px solid blue !important;");
        }
    }
});
$(window).load(function() {
    /******************************
      commented date
     ******************************/
    // * any page *
    // コメントの日付、'日前' 表示を 'yyyy/mm/dd' の形式にする
    $("ul.comment li").each(function(){
        // get a date info of the each comments as the  jquery object
        var objdatecomment = $(this).find("p.comment-metadata time");

        // get string of commented date
        var epochtime = objdatecomment.attr('data-epoch');

        if (epochtime) {
            // won't display using 'nn 日前'
            objdatecomment.removeAttr("data-relative");

            // translate eopch time to date
            var mydate = new Date;    /*memo. the first letter of "date" is need to be capitalized */
            mydate.setTime(epochtime.slice(0,epochtime.length-3) * 1000);

            // year, month, day
            var myyear = mydate.getFullYear();
            var mymonth = ('00' + (mydate.getMonth() + 1)).slice(-2);
            var myday = ('00' + mydate.getDate()).slice(-2);

            var mydatecommentis = "commented at    " + myyear + "/" + mymonth + "/" + myday;

            // set yyyy/mm/dd
            objdatecomment.text(mydatecommentis);
        }
    });
});
</script>
<!-- } my script -->
