import {
    OverlayScrollbars,
    ClickScrollPlugin,
    ScrollbarsHidingPlugin
} from 'overlayscrollbars';

OverlayScrollbars.plugin([ClickScrollPlugin, ScrollbarsHidingPlugin]);

class OverlayScrollbarElement extends HTMLElement {
    constructor() {
        super();
        this.osInstance = null;
    }

    connectedCallback() {
        if (OverlayScrollbars(this)) return;

        this.osInstance = OverlayScrollbars(this, {
            paddingAbsolute: this.hasAttribute("padding-absolute"),
            showNativeOverlaidScrollbars: this.hasAttribute("native-overlaid"),
            overflow: {
                x: this.getAttribute("overflow-x") || "scroll",
                y: this.getAttribute("overflow-y") || "scroll",
            },
            scrollbars: {
                theme: this.getAttribute("theme") || "os-theme-dark",
                visibility: this.getAttribute("visibility") || "auto",
                autoHide: this.getAttribute("auto-hide") || "never",
                autoHideDelay: Number(this.getAttribute("auto-hide-delay")) || 1300,
                clickScroll: this.hasAttribute("click-scroll"),
                autoHideSuspend: this.hasAttribute("auto-hide-suspend"),
                dragScroll: this.hasAttribute("drag"),
            }
        });
    }

    disconnectedCallback() {
        if (this.osInstance) {
            this.osInstance.destroy();
            this.osInstance = null;
        }
    }
}

customElements.define("overlay-scrollbar", OverlayScrollbarElement);