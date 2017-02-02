$( document ).ready(function() {

	/*select*/
	$(function() {
		jcf.replaceAll();
	});


	/*custom file*/
	var wrapper = $( ".file_upload" ),
		inp = wrapper.find( "input" ),
		btn = wrapper.find( "button" ),
		lbl = wrapper.find( "div" );
	btn.focus(function(){
		inp.focus()
	});
	// Crutches for the :focus style:
	inp.focus(function(){
		wrapper.addClass( "focus" );
	}).blur(function(){
		wrapper.removeClass( "focus" );
	});
	//
	btn.add( lbl ).click(function(){
		inp.click();
	});
	//
	btn.focus(function(){
		wrapper.addClass( "focus" );
	}).blur(function(){
		wrapper.removeClass( "focus" );
	});
	var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

	inp.change(function(){
		var file_name;
		if( file_api && inp[ 0 ].files[ 0 ] )
			file_name = inp[ 0 ].files[ 0 ].name;
		else
			file_name = inp.val().replace( "C:\\fakepath\\", '' );

		if( ! file_name.length )
			return;

		if( lbl.is( ":visible" ) ){
			lbl.text( file_name );
			btn.text( "Выбрать" );
		}else
			btn.text( file_name );
	}).change();
		//
	$( window ).resize(function(){
		$( ".file_upload input" ).triggerHandler( "change" );
	})


	var myMoto = document.getElementById('offer');
	function motoClick() {
		$('.about-us_link_block').css('display','block');
		$('#offer').css('display','none');
	}
	myMoto.onclick = motoClick;

});

/*collum height*/
if(window.innerWidth > 980) {
	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
			function()
			{
				currentHeight = $(this).height();
				if(currentHeight > tallestcolumn)
				{
					tallestcolumn = currentHeight;
				}
			}
		);
		columns.height(tallestcolumn);
	}
	$(document).ready(function() {
		setEqualHeight($(".our-prorose_blocks figure"));
		setEqualHeight($(".contacts_blocks .span6"));
	});
}
/*end colum*/