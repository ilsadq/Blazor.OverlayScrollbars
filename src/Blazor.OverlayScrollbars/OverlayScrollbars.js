import { OverlayScrollbars } from "overlayscrollbars";

export class OverlayScrollbarElement extends HTMLElement {
    _osInstance;
    
    connectedCallback() {
        this._osInstance = OverlayScrollbars(this, {
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
                autoHideSuspend: this.hasAttribute("auto-hide-suspend"),
                dragScroll: !this.hasAttribute("no-drag"),
                clickScroll: this.hasAttribute("click-scroll") || false,
                pointers: this.getAttribute("pointers")?.split(",") || null,
            },
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