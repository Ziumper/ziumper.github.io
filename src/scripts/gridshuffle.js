import Shuffle from 'shufflejs';

export class GridShuffle {

    constructor
        (
            itemSelectorClass,
            sizerSelectorClass,
            shuffleContainerId,
            itemInnerClassName,
            itemTransitionClassName,
        ) {


            this.itemSelectorClass = itemSelectorClass //'.shuffle-item';
            this.sizerSelectorClass = sizerSelectorClass //'.shuffle-sizer';
            this.shuffleContainerId = shuffleContainerId //'shuffle-container';
            this.itemInnerClassName = itemInnerClassName; //.picture-item__inner
            this.itemTransitionClassName = itemTransitionClassName; //'picture-item__inner--transition'

            this.gridContainerElement = document.getElementById(this.shuffleContainerId);
            this.gridItems = this.gridContainerElement.querySelectorAll(this.itemSelectorClass)

            this.shuffleInstance = new Shuffle(this.gridContainerElement, {
                itemSelector: this.itemSelectorClass,
                sizer: this.sizerSelectorClass,
            });

            let callback = this.showItemsInViewport.bind(this);

            this.observer = new window.IntersectionObserver(callback, {
                threshold: 0.5,
            });

            // Loop through each grid item and add it to the viewport watcher.
            for (var i = 0; i < this.gridItems.length; i++) {
                this.observer.observe(this.gridItems[i]);
            }

            // Add the transition class to the items after ones that are in the viewport
            // have received the `in` class.
            setTimeout(function() {
                this.addTransitionToItems();
            }.bind(this), 100);

        }

    addTransitionToItems() {
        for (var i = 0; i < this.gridItems.length; i++) {
            var inner = this.gridItems[i].querySelector(this.itemInnerClassName);
            if (inner) {
                inner.classList.add(this.itemTransitionClassName);
            } else {
                console.error("Grid item inner element not defined")
            }

        }
    }

    showItemsInViewport(changes) {
        changes.forEach(function(change) {
            if (change.isIntersecting) {
                change.target.classList.add('in');
            }
        });
    }





}

export function filter(key) {
    window.gridShuffle.shuffleInstance.filter(key);
}