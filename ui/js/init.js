function getFontListNum() {
    return getElemPropertyValue('idFontListNumber', 'value');
}

// Preenche a lista dinamica de apps populares.
function defPopDesignApps(containerId) {

    // Tem que existir para a lista existir.
    var container = document.getElementById(containerId);

    // A chamada a "GrowLists.newList" abaixo nao cria a lista se o container nao existir, mas fazendo este teste
    // aqui eu evito a criacao de "itemsToGrow", que inclusive tem o overhead do sorteio dos itens aleatorios.
    if (container) {

        // Cria uma lista com todas as possibilidades e escolhe 6 aleatoriamente para mostrar.
        // Com esse passo a mais, eu consigo usar uma GrowList para mostrar um subconjunto aleatorio de itens.
        // A GrowList e mais complexa, pois cada item tem 3 subitens para substituicao na string de mascara.
        var chosenPopEffects = randomSlice(
            [
                // Text Effects
                ['/text_generator/others/3d/lava/3d-lava-text-logo-generators.html', '3d-lava-text-effect.jpg', '3D Lava Text'],
                ['/text_generator/others/long-shadow-effect/3d-long-shadow-text-effect-logo-creator.html', 'long-shadow-text-logo.jpg', 'Long Shadow'],
                ['/text_generator/text_generator_catalog.html', 'classic-text-effect.jpg', 'Classic Text Effect'],
                ['/text_generator/others/3d/3d-perspective-text-effect-creator.html', 'perspective-3d-text.jpg', 'Perspective Text'],
                ['/text_generator/others/graffiti/graffiti_text.html', '3d-graffiti-text-effect.jpg', '3D Graffiti Text'],
                ['/online-bevel-text-effect-logo-generators.html', '3d-beveled-text-logo.jpg', 'Beveled Text Logo'],
                ['/text_generator/others/carved/online_carved_text_effects.html', 'engraved-text-logo.jpg', 'Engraved Text'],
                ['/text_generator/others/carved/online_carved_text_effects.html', 'enbossed-text-logo.jpg', 'Embossed Text'],
                ['/text_generator/others/3d/3d_text.html', 'classic-3d-text.jpg', 'Classic 3D Text'],
                ['/text_generator/others/fur/realistic-fur-text-effect-logo-generator.html', 'fur-text-effect.jpg', 'Fur Text Effect'],
                ['/text_generator/others/gradient/online-gradient-text-generator.html', 'gradient-text-logo.jpg', 'Gradient Text'],
                ['/text_generator/others/ice/frozen-text-logo-generator.html', 'frozen-text-effect.jpg', 'Frozen Text'],
                ['/text_generator/others/3d/3d-blocks-text-logo-effect-generator.html', '3d-blocks-text.jpg', '3D Blocks Text'],
                ['/text_generator/others/graffiti/easy_online_graffiti_text_creator.html', 'graffiti-text-logo.jpg', 'Graffiti Effect'],
                ['/text_generator/others/3d/love/3d-love-text-effect-logo-generator.html', '3d-love-text-logo.jpg', '3D Love Logo'],
                ['/text_generator/others/3d/realistic/professional_text_effects.html', '3d-textured-text-effect.jpg', 'Textured 3D Text'],
                ['/text_generator/others/tech/futuristic-sci-fi-text-logo-effect-generator.html', '3d-sci-fi-text-logo.jpg', 'Sci-Fi Effect'],
                ['/text_generator/others/3d/horror/3d-horror-text-effect-logo-generator.html', '3d-horror-text-logo.jpg', 'Horror Text'],
                ['/text_generator/others/hair/realistic-hair-text-effect-logo-generator.html', 'hair-text-effect.jpg', 'Hair Text'],
                ['/text_generator/others/3d/glitter/glitter-text-generator.html', '3d-glitter-text-effect.jpg', '3D Glitter Text'],
                ['/text_generator/others/3d/flag_text_effect/country_flag_3d_text_effect.html', '3d-country-flag-text-logo.jpg', 'Flag Text'],
                ['/text_generator/others/chalk/chalk_text_effect.html', 'chalk-text-effect.jpg', 'Chalk Text'],
                ['/text_generator/others/led/led-text-logo-effect-generator.html', 'led-text-logo.jpg', 'Led Text'],
                ['/folded-text-effect-generators.html', 'folded-text-effect.jpg', 'Folded Text'],
                ['/text_generator/light_text_catalog.html', 'light-text-effect.jpg', 'Light Text'],
                ['/text_generator/others/3d/ice/3d-realistic-ice-text-effect-logo-generator.html', '3d-realistic-ice-text-effect.jpg', 'Realistic Ice'],
                ['/text_generator/others/torn-paper/torn-paper-text-effect-logo-generator.html', 'torn-paper-text-effect.jpg', 'Torn Paper'],
                ['/text_generator/others/3d/dragon/3d-dragon-text-effect-logo-generator.html', 'dragon-text-effect.jpg', 'Dragon Effect'],
                // Photo Effects
                ['/image_effects/photo-polaroid/polaroid-effect-photo-editor.html', 'polaroid-photo-effect.jpg', 'Polaroid Effect'],
                ['/image_effects/photo-sticker/sticker-maker-photo-editor.html', 'photo-sticker-effect.jpg', 'Photo Sticker'],
                ['/image_effects/photo_cartoon/online-photo-cartoonizer.html', 'cartoon-photo-effect.jpg', 'Cartoon Effect'],
                ['/photo_sketch/pen-ink-engraved-drawing-photo-effect-editor.html', 'ink-drawing-photo-effect.jpg', 'Ink Drawing'],
                ['/image_effects/photo_paint/watercolor-photo-effect-editor.html', 'watercolor-photo-effect.jpg', 'Watercolor'],
                ['/image_effects/photo_paint/oil_painting_photo_effect.html', 'oil-painting-photo-effect.jpg', 'Oil Painting'],
                ['/image_effects/photo-psychedelic/groovy-urban-psychedelic-effect-photo-editor.html', 'psychedelic-photo-effect.jpg', 'Psychedelic'],
                ['/image_effects/photo-fire/burning-fire-effect-photo-editor.html', 'fire-border-photo-effect.jpg', 'Fire Border'],
                ['/image_effects/photo-grunge/grunge-effect-photo-editor.html', 'grunge-photo-effect.jpg', 'Grunge Effect'],
                ['/image_effects/photo-page-curl/page-curl-effect-photo-editor.html', 'page-curl-photo-effect.jpg', 'Page Curl'],
                ['/image_effects/photo-hdr/3d-hdr-photo-effect-editor.html', '3d-hdr-photo-effect.jpg', '3D HDR'],
                ['/image_effects/photo-3d-perspective/3d-perspective-effect-photo-editor.html', '3d-perspective-photo-effect.jpg', 'Perspective'],
                ['/image_effects/photo-3d-blocks/3d-photo-effect-creator-editor.html', '3d-blocks-photo-effect.jpg', '3D Blocks'],
                ['/image_effects/photo-vintage-illustration/vintage-illustration-photo-effect-editor.html', 'illustration-photo-effect.jpg', 'Illustration'],
                ['/image_effects/photo-vintage-retro/vintage-retro-photo-effect-generator.html', 'retro-photo-effect.jpg', 'Retro Effect'],
                ['/image_effects/photo-jigsaw-puzzle/jigsaw-puzzle-photo-effect-generator.html', 'puzzle-photo-effect.jpg', 'Puzzle Effect'],
                ['/image_effects/photo-lomography/lomo-photo-effect-generator.html', 'lomo-photo-effect.jpg', 'Lomo Effect'],
                ['/image_effects/photo_text/photo-typography-effect-generator.html', 'typography-photo-effect.jpg', 'Photo Typography'],
                ['/image_effects/photo-halftone/halftone-image-generator.html', 'halftone-photo-effect.jpg', 'Halftoning'],
                ['/image_effects/photo_paint/modernist_painting_photo_effect.html', 'modernist-painting-photo-effect.jpg', 'Modernist'],
                ['/image_effects/photo_chalk/chalk_drawing_photo_effect.html', 'chalk-drawing-photo-effect.jpg', 'Chalk Drawing'],
                ['/photo_sketch/realistic_colorful_drawing_photo_effect.html', 'colorful-drawing-photo-effect.jpg', 'Colorful Drawing'],
                ['/photo_sketch/realistic_pencil_sketch_photo_effect.html', 'pencil-sketch-photo-effect.jpg', 'Sketch Effect'],
                ['/image_effects/photo-neon-light/neon-light-effect-photo-editor.html', 'neon-photo-effect.jpg', 'Neon Effect'],
                ['/image_effects/photo-merge/country-flag-photo-composition-effect-editor.html', 'country-flag-photo-effect.jpg', 'Flag Effect'],
                ['/image_effects/photo-vintage-drawing/drawing-vintage-photo-effect-generator.html', 'vintage-drawing-photo-effect.jpg', 'Vintage Drawing'],
                ['/image_effects/photo-lego-toy/lego-toy-photo-effect-editor.html', 'lego-photo-effect.jpg', 'Lego Effect'],
                ['/image_effects/photo_graffiti/photo_graffiti_effect_generator.html', 'graffiti-photo-effect.jpg', 'Photo Graffiti']
            ], 6);

        var images = [],
            links = [],
            labels = [],
            chosenPopEffect;

        for (var i = 0; i < chosenPopEffects.length; i++) {
            chosenPopEffect = chosenPopEffects[i];
            links[i] = chosenPopEffect[0];
            images[i] = chosenPopEffect[1];
            labels[i] = chosenPopEffect[2];
        }

        // function PreloadImageList(startNumber, imageElemName, imagePath, images, linkElemName, linkPath, links, labelElemName, labels, callbackAfterLoadAll) {
        var preloadList = new PreloadImageList(1, 'PopEffectsImg', '/ui/images/popular-design-app/', images, 'PopEffectsLink', '', links, 'PopEffectsLabel', labels, function () {
            show([containerId]);
        });
        preloadList.loadAll();
    }
}

function defInit() {

    hide(['idOverlayPreloader']);

    // So cria a lista de apps populares se o container existir.
    defPopDesignApps('idPopEffectsContainer');

    // Lista de cores do Color Picker (mostrada com modal).
    // -------------------------
    SelLists.newList('cp1', 'idColor', ['hoverable-sh-1x', 'sel-list-item'], '', '', '001');
    // -------------------------

    // Listas de efeitos em que e mostrado um nome para cada um.
    // -------------------------
    // Lista de efeitos de foto que fica fora do formulario.
    //SelLists.newList('pe1', 'idSelectedPhotoEffect', ['hoverable-bg-4th', 'sel-item'], '', '', 'realistic_pencil_sketch_photo_effect_004');

    // Lista de efeitos de texto que fica fora do formulario.
    //SelLists.newList('te1', 'idSelectedTextEffect', ['hoverable-bg-4th', 'sel-item'], '', '', initialNamedTextEffect);

    // dpe = "downloadable photo effects" = lista de efeitos distribuida em varias janelas na tela, sendo que as 
    //        imagens da maioria das janelas nao sao carregadas de antemao -> usado no simple photo editor.
    //SelLists.newList('dpe1', 'idSelectedEffect', ['hoverable-bg-4th', 'sel-item'], '', '', 'vintage-retro-photo-effect_004');
    // -------------------------


    // Listas de imagens que sao mostradas com tabelas.
    // So sao criadas aquelas cujo elemento que mantem a selecao da lista existir.
    // -------------------------
    // Lista usada na pagina de texto 3D classico.
    //SelLists.newList('rendStyle3d', 'idRenderingStyle', ['sel-list-item'], '', '', '2', 'idHasMergedImageTable3dRenderingStyle');	
    // Lista usada na pagina de texto 3D classico.
    //SelLists.newList('textModel3d', 'idModel3D', ['sel-list-item'], '', '', '1', 'idHasMergedImageTable3dTextModel');	
    // Lista usada na pagina que desenha texto em foto.
    //SelLists.newList('textLayout', 'idTextLayoutStyle', ['sel-list-item'], '', '', 'text-layout-style-00', 'idHasMergedImageTableTextLayout');
    // -------------------------


    // Lista de fontes (mostrada com tabela).
    // -------------------------
    // Se a funcao "getFontListNum" retornar undefined, significa que o elemento "idFontListNumber"
    // nao existe, entao a lista nao sera criada e nao havera problema.
    SelLists.newList('f1', 'idFontName', ['sel-list-item'], 'idViewFontName', 'Font name : &nbsp;&nbsp; <<0>>', initialFontName);
    // -------------------------


    // Listas de imagens.
    // -------------------------
    // Lista usada nas paginas dos textos 3D texturizados.
    //SelLists.newList('textStyle3d', 'idTextStyle3DName', ['sel-list-item'], '', '', '3d_textured6', 'idHasImageList3dTextStyle');
    // Lista usada nas paginas dos textos de luz e neon.
    //SelLists.newList('textStyleLight', 'idTextStyleLightName', ['sel-list-item'], '', '', 'light_text_style_01', 'idHasImageListLightTextStyle');
    // -------------------------


    // Listas de imagens pequenas.
    // -------------------------
    //SelLists.newList('sChalk', 'idImageName', ['sel-list-item'], '', '', 'chalkboard_003', 'idHasSmallImageListChalkboard');	
    //SelLists.newList('sWall', 'idImageName', ['sel-list-item'], '', '', 'wall_002_tlb', 'idHasSmallImageListWall');	
    //SelLists.newList('sTex', 'idSelectedSmallImage', ['sel-list-item'], '', '', 'abstract085_tlb', 'idHasSmallImageListTexture');
    //SelLists.newList('sModel3d', 'idSelected3dModel', ['sel-list-item'], '', '', '3d_model_01', 'idHasSmallImageList3dModel');
    //SelLists.newList('sSticker', 'idSelectedStickerShape', ['sel-list-item'], '', '', 'sticker_011', 'idHasSmallImageListSticker');
    //SelLists.newList('sSocial', 'idSelectedIcon', ['sel-list-item'], '', '', 'apple_1', 'idHasSmallImageListSocialLogo');
    SelLists.newList('sSymbol1', 'idSelectedSymbol1', ['sel-list-item'], '', '', initialSymbol1);
    SelLists.newList('sSymbol2', 'idSelectedSymbol2', ['sel-list-item'], '', '', initialSymbol2);
    SelLists.newList('sSymbol3', 'idSelectedSymbol3', ['sel-list-item'], '', '', initialSymbol3);
    SelLists.newList('sSymbol4', 'idSelectedSymbol4', ['sel-list-item'], '', '', initialSymbol4);
    // -------------------------


    // Listas que crescem.
    // -------------------------
    // this.newList = function (listName, containerId, itemsToAdd, addSlice, itemMask, padChar, itemsSizeWithPad, idElemsToHideWhenAddAll, callbackWhenAddAll) {
    /*
    GrowLists.newList('g1', 'idGrowList1', '4-15', 5, 
                    '<div class="css-block-center pad-small">' +
                        '<img class="size-full size-max-very-small" src="/www/images/text/splash<<0>>_text_effect.jpg" />' +
                        '<p>Text Effect <<0>></p>' +
                    '</div>',
                    '0', 3, ['idGrowList1ButtonContainer']);
    */

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
    // -------------------------


    // Verificacoes de dados.
    // -------------------------
    DataChecker.setMsgElements('idOverlayModalMsg', 'idModalMsgText', 'idModalMsgTitle');
    DataChecker.newCheck('blabla', 'value', 'Text', 'blk'); // Teste: o elemento deste check nao existe.
    DataChecker.newCheck('idTextToRender', 'value', 'Text', 'blk');
    DataChecker.newCheck('idTextLine1', 'value', 'Text line', 'blk');
    DataChecker.newCheck('idImageInput', 'value', 'Input image', 'blk');
    DataChecker.newCheck('idImageInput', 'value', 'Input image', 'ext', ['.jpg', '.png', '.gif']);
    DataChecker.newCheck('idValueOne', 'value', 'Value one', 'rng', [20, 30]);
    DataChecker.newCheck('idValueOne', 'value', 'Value one', 'rng', [20, 22], 'idMargin', 'value', '>', '15');
    // -------------------------

}

function defSubmit() {
    show(['idOverlayPreloader']);
    // var _submit = function () {document.FormMain.submit();}
    // window.setTimeout(_submit, 1500);
    document.FormMain.submit();
}

function resultPageSubmit() {
    var changeVisibility = function () {
        toggleCss(['idDownloadMessage', 'idDonwloadButton'], ['css-hide']);
    }
    // Torna o botao invisivel e a mensagem visivel.
    changeVisibility();
    // Vai tornar o botao visivel de novo e a mensagem invisivel em 60 segundos.
    window.setTimeout(changeVisibility, 60000);
    document.FormMain.submit();
}