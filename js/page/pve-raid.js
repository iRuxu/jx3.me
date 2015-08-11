H.ready(['jquery'],function(){
	jQuery(function($){

		var $raidlogo = $(".c-raidlogo"),
			$nav = $(".m-raid-nav li a"),
			mod = getRequest('mod'),
			sortid = getRequest('sortid')

    	//导航栏激活
		H.curpage('.u-raid')

		//route助手
		H.route(56)

		//认证角标
		$raidlogo.add(".c-raidavt").each(function(i){
			if($(this).find('.verif a').length){
				var keywords = $(this).find('.verif a').attr('href'),
					index = keywords.indexOf('vid'),
					verif = keywords.charAt(index+4)
				$(this).addClass('u-verif u-verif-'+verif)
			}
		})

		//菜单栏（栏目局部）
		if(!mod) $nav.eq(0).addClass('on')
		if(mod=='forumdisplay'&&sortid=='9') $nav.eq(1).addClass('on')
		if(mod=='forumdisplay'&&sortid=='13') $nav.eq(2).addClass('on')
		if(mod=='forumdisplay'&&sortid=='12') $nav.eq(3).addClass('on')
		if(mod=='post') $nav.eq(4).addClass('on')

	})
})