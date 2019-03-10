

main();

function main() {
    turnOnSwitchImagesToMainProductByMinatures();
}

function turnOnSwitchImagesToMainProductByMinatures() {

    var minatures = document.getElementsByClassName('minature');
    
    for(var i= 0; i < minatures.length; i++) {
        var minature = minatures[i];
        addSwitchImageEventHandlerOnClickToMinature(minature)
        
    }

    function addSwitchImageEventHandlerOnClickToMinature(minature) {
    
        minature.onclick = function () {
            setImageMainImageProductSource(minature)
        }
    }

    function setImageMainImageProductSource(minature) {
        var parent = minature.parentNode.parentNode;
        var children = parent.childNodes;

        for(var i = 0; i < children.length; i++) {
            var child = children[i];
            if(child.classList)  {
                if(child.classList.contains('main-product-image')) {
                    imageSrcToSet = getImageSrcFromMiniature(minature);
                    child.setAttribute('src',imageSrcToSet);
                    break;
                }
            }
        }
    }

    function getImageSrcFromMiniature(minature) {
        for(var i=0; i < minature.childNodes.length; i++){
            if(minature.childNodes[i].tagName == 'IMG'){
                var img = minature.childNodes[i];
                var attribute = img.getAttribute('src');
                return attribute;
            }
            
        }
        
        return '';
    }
    
}

// Źródło: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
;(function() {
    // pomocnicy
    var regExp = function(name) {
        return new RegExp('(^| )'+ name +'( |$)');
    };
    var forEach = function(list, fn, scope) {
        for (var i = 0; i < list.length; i++) {
            fn.call(scope, list[i]);
        }
    };

    // obiekt listy klasy z podstawowymi metodami
    function ClassList(element) {
        this.element = element;
    }

    ClassList.prototype = {
        add: function() {
            forEach(arguments, function(name) {
                if (!this.contains(name)) {
                    this.element.className += this.element.className.length > 0 ? ' ' + name : name;
                }
            }, this);
        },
        remove: function() {
            forEach(arguments, function(name) {
                this.element.className =
                    this.element.className.replace(regExp(name), '');
            }, this);
        },
        toggle: function(name) {
            return this.contains(name) 
                ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function(name) {
            return regExp(name).test(this.element.className);
        },
        // bonus..
        replace: function(oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };

    // IE8/9, Safari
    if (!('classList' in Element.prototype)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function() {
                return new ClassList(this);
            }
        });
    }

    // replace() wspierane przez pozostałe przeglądarki
    if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();



