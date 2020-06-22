function defInit() {

	//hide(['idOverlayPreloader']);

	SelLists.newList('cp1', 'idColor', ['hoverable-sh-1x', 'sel-list-item'], '', '', '001');

	SelLists.newList('te1', 'idSelectedTextEffect', ['hoverable-bg-4th', 'sel-item'], '', '',
		'abstract083');

	SelLists.newList('te2', 'idSelectedTextEffect2', ['hoverable-bg-4th', 'sel-item'], '', '',
		'3d_blue');

	SelLists.newList('fe1', 'idSelectedPhotoEffect', ['hoverable-bg-4th', 'sel-item'], '', '',
		'color_improvement_effect_001');

	SelLists.newList('f1', 'idFontName', ['sel-list-item'], 'idViewFontName', 'Font name : &nbsp;&nbsp; <<0>>',
		'01 Digit');

	SelLists.newList('i2', 'idRenderingStyle', ['sel-list-item'], '', '', '1');

	SelLists.newList('i3', 'idModel3D', ['sel-list-item'], '', '', '1');

	SelLists.newList('s1', 'idTextStyle3DName', ['sel-list-item'], '', '', '3d_text_style1');

	SelLists.newList('s2', 'idSelectedIcon3dModel', ['sel-list-item'], '', '', 'icon_3d_model_01');

	SelLists.newList('s3', 'idTextLayoutStyle', ['sel-list-item'], '', '', 'text-layout-style-00');

	SelLists.newList('s4', 'idSelectedSmallImage', ['sel-list-item'], '', '', 'abstract084_tlb');

	SelLists.newList('s7', 'idSelectedStickerShape', ['sel-list-item'], '', '', 'sticker_001');

	SelLists.newList('s5', 'idOrnament01', ['sel-list-item'], '', '', 'abstract001');

	SelLists.newList('s6', 'idOrnament02', ['sel-list-item'], '', '', 'star_001');

	SelLists.newList('s8', 'idOrnament03', ['sel-list-item'], '', '', 'love_001');

	SelLists.newList('s9', 'idOrnament04', ['sel-list-item'], '', '', 'office_001');

	SelLists.newList('s10', 'idOrnament05', ['sel-list-item'], '', '', 'christmas_001');

	SelLists.newList('s11', 'idOrnament06', ['sel-list-item'], '', '', 'tech_001');

	SelLists.newList('s12', 'idOrnament07', ['sel-list-item'], '', '', 'female_001');

	SelLists.newList('s13', 'idOrnament08', ['sel-list-item'], '', '', 'male_001');

	SelLists.newList('s14', 'idOrnament09', ['sel-list-item'], '', '', 'horror_001');

	SelLists.newList('s15', 'idOrnament10', ['sel-list-item'], '', '', 'art_001');

	SelLists.newList('s16', 'idOrnament11', ['sel-list-item'], '', '', 'kids_001');

	SelLists.newList('s17', 'idOrnament12', ['sel-list-item'], '', '', 'game_001');

	SelLists.newList('s18', 'idOrnament13', ['sel-list-item'], '', '', 'sport_001');

	SelLists.newList('s19', 'idOrnament14', ['sel-list-item'], '', '', 'food_001');

	SelLists.newList('s20', 'idOrnament15', ['sel-list-item'], '', '', 'clothing_001');

	SelLists.newList('s21', 'idOrnament16', ['sel-list-item'], '', '', 'music_001');

	SelLists.newList('s22', 'idOrnament17', ['sel-list-item'], '', '', 'animal_001');

	SelLists.newList('s23', 'idOrnament18', ['sel-list-item'], '', '', 'science_001');

	SelLists.newList('s24', 'idOrnament19', ['sel-list-item'], '', '', 'flower_001');

	SelLists.newList('s25', 'idOrnament20', ['sel-list-item'], '', '', 'transport_001');

	SelLists.newList('s26', 'idOrnament21', ['sel-list-item'], '', '', 'cloud_001');

	SelLists.newList('s27', 'idOrnament22', ['sel-list-item'], '', '', 'zodiac_001');

	// Cria uma lista com todas as possibilidades e escolhe 5 aleatoriamente para mostrar.
	// Com esse passo a mais, eu consigo usar uma GrowList para mostrar um subconjunto aleatorio de itens.
	// A GrowList e mais complexa, pois cada item tem 3 subitens para substituicao na string de mascara.
	var itemsToGrow = randomSlice(
		[
			'/www/list.html ## floral001_text_effect.jpg ## Floral Text EFfect',
			'/www/list2.html ## pen-ink-engraved-drawing-photo-effect-1.jpg ## Ink Engraved Photo Effect',
			'/www/list3.html ## glitter001_text_effect.jpg ## Glitter Text Effect',
			'/www/notfound.html ## cracked001_text_effect.jpg ## Cracked Text Effect',
			'/www/list.html ## floral001_text_effect.jpg ## Floral Text EFfect 2',
			'/www/list2.html ## pen-ink-engraved-drawing-photo-effect-1.jpg ## Ink Engraved Photo Effect 2',
			'/www/list3.html ## glitter001_text_effect.jpg ## Glitter Text Effect 2',
			'/www/notfound.html ## cracked001_text_effect.jpg ## Cracked Text Effect 2',
			'/www/list.html ## floral001_text_effect.jpg ## Floral Text EFfect 3',
			'/www/list2.html ## pen-ink-engraved-drawing-photo-effect-1.jpg ## Ink Engraved Photo Effect 3',
			'/www/list3.html ## glitter001_text_effect.jpg ## Glitter Text Effect 3',
			'/www/notfound.html ## cracked001_text_effect.jpg ## Cracked Text Effect 3',
		], 5);
	GrowLists.newList('g1', 'idGrowList1', itemsToGrow, 2,
		'<div class="css-block-center pad-small">' +
		'<a href="<<0>>">' +
		'<img class="size-full size-max-very-small" src="<<1>>" />' +
		'</a>' +
		'<p><<2>></p>' +
		'</div>',
		'0', 3, ['idGrowList1ButtonContainer']);

	DataChecker.setMsgElements('idOverlayModalMsg', 'idModalMsgText', 'idModalMsgTitle');
	DataChecker.newCheck('blabla', 'value', 'Text', 'blk'); // Teste: o elemento deste check nao existe.
	DataChecker.newCheck('idTextToRender', 'value', 'Text', 'blk');
	DataChecker.newCheck('idImageInput', 'value', 'Input image', 'blk');
	DataChecker.newCheck('idImageInput', 'value', 'Input image', 'ext', ['.jpg', '.png', '.gif']);
	DataChecker.newCheck('idValueOne', 'value', 'Value one', 'rng', [20, 30]);
	DataChecker.newCheck('idValueOne', 'value', 'Value one', 'rng', [20, 22], 'idMargin', 'value', '>=', '15');
}

function defSubmit() {
	show(['idOverlayPreloader']);
	var _submit = function () {
		document.FormMain.submit();
	}
	window.setTimeout(_submit, 500);
}