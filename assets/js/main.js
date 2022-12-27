// ============== left sidebar js =============

$(document).on("click","#sidebar li", function(){
	$(this).addClass('active').siblings().removeClass('active');
});

// ==================== left menu sidber dropdown ===============

$(".sub-menu ul").hide();
$(".sub-menu a").click(function(){
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa fa-caret-up fa fa-caret-down");
});