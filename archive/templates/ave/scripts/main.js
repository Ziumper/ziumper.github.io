

main();

function main() {
  
    //jquery functions
    $( document ).ready(function() {
        turnOnSwitchImagesToMainProductByMinatures();
        addOnClickEventOnHoverIconForShowingProductPreviewMenu();
        removeShowPreviewMenuWhenMouseLeaveProductPreviewContainer();
    });
}

function removeShowPreviewMenuWhenMouseLeaveProductPreviewContainer() {
    var products = document.getElementsByClassName('product');

    for(var i=0; i < products.length; i++) {
        var product = products[i];
        product.addEventListener('mouseleave',function (){
            var childs = this.childNodes;
            
            for(var j = 0 ; j < childs.length; j++) { 
                var child = childs[j];
                if(child.classList) {
                    if(child.classList.contains('show-preview-menu')) {
                        child.classList.remove('show-preview-menu');
                        break;
                    }
                }
            }
        })
    }
}

function addOnClickEventOnHoverIconForShowingProductPreviewMenu() {
    var icons = document.getElementsByClassName('product-hover-icon');

    for(var i =0; i < icons.length; i++) {
        var icon = icons[i];
        addOnClickEvent(icon);
    }


    function addOnClickEvent(icon) {
        icon.onclick = function() {
            var siblings = this.parentNode.childNodes;
    
            for(var i = 0; i < siblings.length; i++) {
                var sibling = siblings[i];
                if(sibling.classList)
                {
                    if(sibling.classList.contains('product-preview-menu')) {
                        if(sibling.classList.contains('show-preview-menu')) {
                            sibling.classList.remove('show-preview-menu');
                        } else {
                            sibling.classList.add('show-preview-menu');
                        }
                        
                        break;
                    }
                }
            }
        }
    }
    
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
                    $(child).fadeOut(1000,function(){
                        child.setAttribute('src',imageSrcToSet);
                    });
                   
                    $(child).fadeIn(1000);
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

