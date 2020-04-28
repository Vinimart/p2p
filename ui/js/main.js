function checkElemPropertyValue(idElem, propName, operator, value) {
    var str = document.getElementById(idElem)[propName] + operator + value;
    return eval(str);
}

//The maximum is inclusive and the minimum is inclusive.
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The Math.random() function returns a floating-point, pseudo-random number 
    // in the range [0, 1); that is, from 0 (inclusive) up to but not including
    // 1 (exclusive), which you can then scale to your desired range. The 
    // implementation selects the initial seed to the random number generation 
    // algorithm; it cannot be chosen or reset by the user.	
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomSlice(items, size) {
    // Array auxiliar que comeca igual ao array de entrada, mas cujos itens
    // serao mudados de lugar.
    var auxItems = items.slice(0),
        i = items.length - 1,
        // Quando o maior indice levado em conta no sorteio for menor do
        // que esse valor, para de sortear. Isso vai significar que ja
        // sorteou o numero de itens desejado e o restante do array e a
        // parte que nao foi sorteada.
        min = i - size + 1,
        // Variavel auxilar para fazer a troca da posicao do elemento sorteado,
        // colocando-o no final da parte ainda "valida" do array.
        temp,
        // Indice sorteado.
        index;

    while (i >= min) {
        // Sorteia um indice entre os valores validos (valores nao sorteados).
        // "index" pode receber um valor de 0 a i (inclusive).
        index = Math.floor((i + 1) * Math.random());
        // Troca o item sorteado com o ultimo item valido, de modo que o item
        // sorteado passa para o final do array levado em conta nessa iteracao.
        temp = auxItems[index];
        auxItems[index] = auxItems[i];
        auxItems[i] = temp;
        // Decrementa o tamanho do array valido (parte ainda nao sorteada).
        --i;
    }

    // Retorna a parte dos itens que foi selecionada.
    // Sao os "size" ultimos items do array auxiliar.
    return auxItems.slice(min);
}

function isBlankStr(str) {
    // A chamada ao metodo "replace" faz o trim da string
    // evitando que strings compostas so de espacos em branco
    // cheguem ao servidor.
    str = str.replace(/^\s+|\s+$/g, "");
    return str === "";
}

function strEndsWith(str, end) {
    var substr = str.substring(str.length - end.length);
    return substr === end;
}

function strEndsWithOneOf(str, ends) {
    for (var i = 0; i < ends.length; i++) {
        if (strEndsWith(str, ends[i]))
            return true;
    }

    return false;
}

function strPad(str, isLeftPad, finalStrSize, padChar) {

    var padSize = finalStrSize - str.length;

    if (padSize > 0) {

        var pad = '';
        for (var i = 0; i < padSize; i++) {
            pad = pad + padChar;
        }

        if (isLeftPad)
            str = pad + str;
        else
            str = str + pad;
    }

    return str;
}

// "toReplace" e "newValue" podem ser strings ou vetores de strings.
function replaceAll(str, toReplace, newValue, leftFlag, rightFlag) {

    var newStr = str;

    if (isArray(toReplace)) {

        for (var i = 0; i < toReplace.length; i++) {
            if (i < newValue.length)
                newStr = replaceAll(newStr, toReplace[i], newValue[i], leftFlag, rightFlag);
            else
                newStr = replaceAll(newStr, toReplace[i], "", leftFlag, rightFlag);
        }

    } else {

        leftFlag = leftFlag || "";
        rightFlag = rightFlag || "";

        var itemToReplace = leftFlag + toReplace + rightFlag;

        var index = 0;

        index = newStr.indexOf(itemToReplace, index);

        while (index >= 0) {
            newStr = newStr.replace(itemToReplace, newValue + "");
            index = newStr.indexOf(itemToReplace, index);
        }
    }

    return newStr;

};

function format(str, items, leftFlag, rightFlag) {
    str = str + '';

    // Eu sei que os valores a serem substituidos sao numeros.
    var toReplace = [];
    for (var i = 0; i < items.length; i++)
        toReplace[i] = i;

    str = replaceAll(str, toReplace, items, leftFlag, rightFlag);

    return str;
};

function arrayToStr(array, sep) {
    var str = '';

    if (array.length > 0) {
        for (var i = 0; i < array.length - 1; i++) {
            str = str + array[i] + sep;
        }
        str = str + array[array.length - 1];
    }

    return str;
};

function isArray(item) {
    return item && (item instanceof Object) && (item.constructor === Array);
};


function getElemPosAndSize(element) {
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        values = new Object();

    values.left = Math.round(elemRect.left - bodyRect.left);
    values.top = Math.round(elemRect.top - bodyRect.top);
    values.width = Math.round(elemRect.right - elemRect.left);
    values.height = Math.round(elemRect.bottom - elemRect.top);

    return values;
}

function show(ids) {
    if (ids) {
        for (var i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).classList.remove("hide-element");
        }
    }
}

function hide(ids) {
    if (ids) {
        for (var i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).classList.add("hide-element");
        }
    }
}

function removeCss(ids, cssClasses) {
    if (ids && cssClasses) {
        var id;
        for (var i = 0; i < ids.length; i++) {
            id = ids[i];
            for (var j = 0; j < cssClasses.length; j++) {
                document.getElementById(id).classList.remove(cssClasses[j]);
            }
        }
    }
}

function toggleCss(ids, cssClasses) {
    if (ids && cssClasses) {
        var id;
        for (var i = 0; i < ids.length; i++) {
            id = ids[i];
            for (var j = 0; j < cssClasses.length; j++) {
                document.getElementById(id).classList.toggle(cssClasses[j]);
            }
        }
    }
}

function toggleHide(ids) {
    toggleCss(ids, ["hide-element"]);
}

function setInnerImagesSrc(outerId, path, files) {
    var imgs = document.getElementById(outerId).getElementsByTagName("img");

    /* Nao pode haver menos imagens do que nomes de arquivos passados. */
    for (var i = 0; i < files.length; i++) {
        imgs[i].src = path + files[i];
    }
}

function changeSel(selKeeperId, newSelValue, prefixToSelElemId, cssToToggle, viewKeeperId, viewTextMask, setOnlyIfEmpty) {
    // Tem que existir.
    var keeper = document.getElementById(selKeeperId);

    // Seguranca.
    if (keeper) {
        // Pode existir ou nao.
        var viewKeeper = viewKeeperId !== "" ? document.getElementById(viewKeeperId) : undefined;

        if (setOnlyIfEmpty) {
            if (keeper.value === "")
                keeper.value = newSelValue;
            // Tem que fazer essa parte de qualquer jeito, senao nao seta a interface quando vai para outra pagina e volta.
            var selElemId = prefixToSelElemId + keeper.value;
            toggleCss([selElemId], cssToToggle);
        } else {
            var oldSelElemId = prefixToSelElemId + keeper.value,
                newSelElemId = prefixToSelElemId + newSelValue;
            toggleCss([oldSelElemId, newSelElemId], cssToToggle);
            keeper.value = newSelValue;
        }

        if (viewKeeper)
            viewKeeper.innerHTML = viewTextMask !== "" ? viewTextMask.replace("<<0>>", keeper.value) : keeper.value;
    } else {
        alert('ERROR: Id = "' + selKeeperId + '" is not valid in this page.');
    }
}

function showModalMsg(idMsgContainerElem, idMsgTextElem, msg, idMsgTitleElem, title) {
    var msgElem = document.getElementById(idMsgTextElem),
        titleElem = document.getElementById(idMsgTitleElem);

    msgElem.innerHTML = msg;

    if (titleElem && title) {
        titleElem.innerHTML = title;
    }

    show([idMsgContainerElem]);
}

function stopProp(event) {
    event.cancelBubble = true; // IE
    if (event.stopPropagation)
        event.stopPropagation(); // Others
}


/* --------------- BEGIN: DATA CHECKER --------------- */
var DataChecker = new(function () {

    this.toCheck = [];
    this.checkFunctionsWithMsg = {};
    this.idMsgContainerElem;
    this.idMsgTextElem;
    this.idMsgTitleElem;

    this.setMsgElements = function (idMsgContainerElem, idMsgTextElem, idMsgTitleElem) {
        this.idMsgContainerElem = idMsgContainerElem;
        this.idMsgTextElem = idMsgTextElem;
        this.idMsgTitleElem = idMsgTitleElem;
    }

    // Os 4 ultimos parametros sao opcionais e referem-se a uma
    // condicao a ser obedecida para que o check seja feito.
    // Condicao: que a propriedade "condProperty" do elemento de id "idElemToCond" retorne true para o operador "condOperator" com o valor "condValue".
    this.newCheck = function (idElemToCheck, propertyToCheck, elemViewName, checkType, valuesToCheck, idElemToCond, condProperty, condOperator, condValue) {

        // Tem que existir para o check existir.
        var elemToCheck = document.getElementById(idElemToCheck);

        // Seguranca. Esse teste permite que eu tente adicionar checks que nao necessariamente existem na pagina.
        if (elemToCheck) {
            var newCheck = {};
            newCheck.idElem = idElemToCheck;
            newCheck.prop = propertyToCheck;
            newCheck.viewName = elemViewName;
            newCheck.checkType = checkType;
            newCheck.values = valuesToCheck;
            if (idElemToCond) {
                // Condicional a ser obedecida para que o check seja feito.
                newCheck.cond = {
                    "idElem": idElemToCond,
                    "propName": condProperty,
                    "operator": condOperator,
                    "propValue": condValue
                };
            }

            this.toCheck[this.toCheck.length] = newCheck;
        }
    }

    this.checkBlankWithMsg = function (idElemToCheck, propertyToCheck, elemViewName, valuesToCheck) {
        var elem = document.getElementById(idElemToCheck),
            result = {
                "ok": "true",
                "msg": ""
            };

        if (elem) {
            var value = elem["value"];

            if (isBlankStr(value)) {
                result.ok = false;
                result.msg = format('Field "<<0>>" value is empty or has only blank characters.', [elemViewName], "<<", ">>");
            }
        }

        return result;
    }

    this.checkRangeWithMsg = function (idElemToCheck, propertyToCheck, elemViewName, valuesToCheck) {
        var elem = document.getElementById(idElemToCheck),
            result = {
                "ok": "true",
                "msg": ""
            };

        if (elem) {
            var value = elem["value"];

            if (value < valuesToCheck[0] || value > valuesToCheck[1]) {
                result.ok = false;
                result.msg = format('Field "<<0>>" must have a value between <<1>> and <<2>>. ', [elemViewName, valuesToCheck[0], valuesToCheck[1]], "<<", ">>");
            }
        }

        return result;
    }

    this.checkExtensionWithMsg = function (idElemToCheck, propertyToCheck, elemViewName, valuesToCheck) {
        var elem = document.getElementById(idElemToCheck),
            result = {
                "ok": "true",
                "msg": ""
            };

        if (elem) {
            var value = elem["value"];

            if (!strEndsWithOneOf(value, valuesToCheck)) {
                result.ok = false;
                result.msg = format('File "<<0>>" must have one of these types: (<<1>>). ', [elemViewName, arrayToStr(valuesToCheck, ", ")], "<<", ">>");
            }
        }

        return result;
    }

    // Seta um objeto com as funcoes de check, sendo que cada uma e enderecada
    // por uma string especifica que identifica o tipo de verificacao.
    this.checkFunctionsWithMsg["blk"] = this.checkBlankWithMsg;
    this.checkFunctionsWithMsg["rng"] = this.checkRangeWithMsg;
    this.checkFunctionsWithMsg["ext"] = this.checkExtensionWithMsg;

    this.checkAllWithMsg = function (msgTitle) {

        var check, func, result;

        for (var i = 0; i < this.toCheck.length; i++) {

            check = this.toCheck[i];

            // So entra no if se:
            // 1) nao ha condicao para o check
            // ou
            // 2) a condicao do check (guardada em "check.cond") tem o id de um elemento cuja propriedade especifica tem um valor
            //    que retorna true quando comparado com determinado valor usando o operador desejado;
            // - o id do elemento e guardado em "cond.idElem";
            // - o nome da propriedade do elemento e guardado em "cond.propName";
            // - o operador desejado para comparar os dois valores e guardado em "cond.operator";
            // - o valor da propriedade do elemento e guardado em "cond.propValue".
            if (!check.cond || checkElemPropertyValue(check.cond.idElem, check.cond.propName, check.cond.operator, check.cond.propValue)) {

                // Seta a funcao certa pelo tipo de verificacao desejado.
                func = this.checkFunctionsWithMsg[check.checkType];
                result = func(check.idElem, check.prop, check.viewName, check.values);

                if (!result.ok) {
                    showModalMsg(this.idMsgContainerElem, this.idMsgTextElem, result.msg, this.idMsgTitleElem, msgTitle);
                    return false;
                }
            }
        }

        return true;
    }

    return this;

})();
/* --------------- END: DATA CHECKER --------------- */


/* --------------- BEGIN: SELECTION LISTS --------------- */
var SelLists = new(function () {

    this.lists = [];

    this.newList = function (listName, keeperId, cssToToggle, viewKeeperId, viewTextMask, firstValue) {

        // Tem que existir para a lista existir.
        var keeper = document.getElementById(keeperId);

        // Seguranca. Esse teste permite que eu tente adicionar listas que nao necessariamente existem na pagina.
        if (keeper) {
            var list = {};
            list.keeperId = keeperId;
            list.cssToToggle = cssToToggle;
            list.viewKeeperId = viewKeeperId || "";
            list.viewTextMask = viewTextMask || "";

            this.lists[listName] = list;

            if (firstValue)
                changeSel(list.keeperId, firstValue, listName + ".", list.cssToToggle, list.viewKeeperId, list.viewTextMask, true);
        }
    }

    this.change = function (listNameAndValue, setOnlyIfEmpty) {
        var vector = listNameAndValue.split("."),
            listName = vector[0],
            value = vector[1],
            list = this.lists[listName];

        changeSel(list.keeperId, value, listName + ".", list.cssToToggle, list.viewKeeperId, list.viewTextMask, setOnlyIfEmpty);
    }

    return this;

})();
/* --------------- END: SELECTION LISTS --------------- */


/* --------------- BEGIN: GROW LISTS --------------- */
var GrowLists = new(function () {

    this.subItemsSeparator = " ## ";

    this.lists = {};

    // "itemsToAdd" pode ser um array com todos os valores ou uma string do tipo "from-to" para indicar um range de numeros.
    // "addSlice" pode ser um numero ou um array de numeros (um valor de slice para cada iteracao).
    this.newList = function (listName, containerId, itemsToAdd, addSlice, itemMask, padChar, itemsSizeWithPad, idElemsToHideWhenAddAll, callbackWhenAddAll) {

        // Tem que existir para a lista existir.
        var container = document.getElementById(containerId);

        // Seguranca. Esse teste permite que eu tente adicionar listas que nao necessariamente existem na pagina.
        if (container) {

            var list = {};

            list.container = container;

            if (isArray(itemsToAdd)) {
                // Foram enviados os valores para crescer a lista (podem ser os valores finais ou
                // valores a serem substituidos em "itemMask").
                list.itemsToAdd = itemsToAdd;
            } else {
                // Foi enviado um range de valores numericos para crescer a lista (com certeza
                // cada valor numerico tera que ser substituidos em "itemMask" para gerar a string
                // final de cada item da lista).
                // Este range passado sera transformado num array de valores sequenciais.
                list.itemsToAdd = [];
                var fromTo = itemsToAdd.split("-"),
                    from = parseInt(fromTo[0]),
                    to = parseInt(fromTo[1]),
                    index = 0;
                for (var i = from; i <= to; i++) {
                    list.itemsToAdd[index++] = i.toString();
                }
            }

            list.addSlice = addSlice;
            list.itemMask = itemMask || "";
            list.padChar = padChar || "";
            list.itemsSizeWithPad = itemsSizeWithPad;
            list.idElemsToHideWhenAddAll = idElemsToHideWhenAddAll || [];
            list.callbackWhenAddAll = callbackWhenAddAll;
            list.nextSlice = 0;
            list.nextItem = 0;
            list.finished = false;

            this.lists[listName] = list;
        }

    }

    this.grow = function (listName, growToEnd) {

        var list = this.lists[listName];

        // So faz algo se a lista ainda nao estiver completa.
        if (!list.finished) {

            // Determina o indice inicial e final do proximo crescimento da lista.
            var startItem, endItem;
            startItem = list.nextItem;
            if (growToEnd) {
                // Nao importa onde a lista esteja, vai crescer ate o final.
                endItem = list.itemsToAdd.length - 1;
            } else {
                // A lista vai crescer o proximo slice.
                // "list.addSlice" pode ser um numero ou um array de numeros.
                var slice = isArray(list.addSlice) ? list.addSlice[list.nextSlice] : list.addSlice;
                endItem = startItem + slice - 1;
            }

            // Determina se e mais um crescimento intermediario ou se ja e o ultimo.
            if (endItem >= (list.itemsToAdd.length - 1)) {
                endItem = list.itemsToAdd.length - 1;
                // Significa que nao havera uma proxima iteracao.
                list.finished = true;
                // Esconde os elementos informados (nao espera a adicao dos ultimos elementos,
                // o que pode ajudar a evitar cliques a mais).
                hide(list.idElemsToHideWhenAddAll);
            } else {
                // Para a proxima iteracao (nao e atualizado se e a ultima iteracao da lista).
                list.nextSlice++;
                list.nextItem = endItem + 1;
            }

            if (list.itemMask !== "") {
                // Se existe uma mascara, cada item representa os valores para a parte da mascara que tem que ser substituida.				
                var item,
                    sep = this.subItemsSeparator;
                for (var i = startItem; i <= endItem; i++) {
                    item = list.itemsToAdd[i];
                    if (item.indexOf(sep) >= 0) {
                        // Se a string de "item" contem o separador de subitens, entende-se que a string
                        // na verdade tem varios subitens que devem ser separados e substituidos individualmente.
                        var subItems = item.split(sep);
                        item = format(list.itemMask, subItems, "<<", ">>");
                    } else {
                        // Faz o padding no item se for o caso.
                        if (list.padChar !== "")
                            item = strPad(item, true, list.itemsSizeWithPad, list.padChar);
                        // Faz a substituicao na mascara.
                        item = format(list.itemMask, [item], "<<", ">>");
                    }
                    // Adiciona o item ao container.
                    list.container.innerHTML += item + "\n";
                }
            } else {
                // Se nao existe mascara para os itens, significa que eles ja vem totalmente prontos.
                for (var i = startItem; i <= endItem; i++) {
                    // Adiciona o item ao container.
                    list.container.innerHTML += list.itemsToAdd[i] + "\n";
                }
            }

            // Executa a callback se for o caso.
            if (list.finished && list.callbackWhenAddAll)
                list.callbackWhenAddAll(list);
        }
    }

    return this;

})();
/* --------------- END: GROW LISTS --------------- */


/* --------------- BEGIN: COLOR TABLE --------------- */

// Foram feitas alteracoes nos metodos dessa classe para ser compativel com o novo prototipo (vinimartdev.com)
var ColorTable = new(function () {

    this.target;

    this.set = function (id, idDisplay) {
        this.target = document.getElementById(id);
        this.colorDisplay = document.getElementById(idDisplay)

        var container = document.getElementById("idColorTableContainer");

        //values = getElemPosAndSize(this.target);

        //container.style.left = values.left + "px";
        //container.style.top = (values.top + values.height) + "px";
        //container.style.width = values.width + "px";

        toggleHide([container.id]);
    }

    this.setColorInput = function (id, idDisplay) {
        this.target = document.getElementById(id);
        this.colorDisplay = document.getElementById(idDisplay)

        if (this.target.value.length === 6) {
            this.selColor = this.target.value
            this.colorDisplay.style.backgroundColor = '#' + this.selColor
        }
    }

    this.setColor = function (color) {
        this.selColor = color
        let colorTableOkBtn = document.getElementById('idColorTableOkBtn')

        colorTableOkBtn.addEventListener('click', () => {

            this.target.value = this.selColor;
            this.colorDisplay.style.backgroundColor = '#' + this.selColor
        })
    }

    return this;

})();
/* --------------- END: COLOR TABLE --------------- */