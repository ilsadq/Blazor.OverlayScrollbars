import {ClickScrollPlugin, OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin} from "overlayscrollbars";

OverlayScrollbars.plugin([ClickScrollPlugin, ScrollbarsHidingPlugin, SizeObserverPlugin]);

class OverlayScrollbarElement extends HTMLElement {
    constructor() {
        super();
        this._osInstance = null;
    }

    connectedCallback() {
        if (this._osInstance) return;

        const getBool = (attrName, defaultValue = false) => {
            const val = this.getAttribute(attrName);
            if (val === null) return defaultValue;
            return !(val === "false" || val === "0");
        };

        this._osInstance = OverlayScrollbars(this, {
            paddingAbsolute: getBool("padding-absolute"),
            showNativeOverlaidScrollbars: getBool("native-overlaid"),
            overflow: {
                x: this.getAttribute("overflow-x") ?? "scroll",
                y: this.getAttribute("overflow-y") ?? "scroll"
            },
            scrollbars: {
                theme: this.getAttribute("theme") ?? "os-theme-dark",
                visibility: this.getAttribute("visibility") ?? "auto",
                autoHide: this.getAttribute("auto-hide") ?? "never",
                autoHideDelay: (() => {
                    const val = this.getAttribute("auto-hide-delay");
                    return val === null ? 1300 : Number(val);
                })(),
                autoHideSuspend: getBool("auto-hide-suspend"),
                dragScroll: getBool("drag-scroll", true),
                clickScroll: (() => {
                    const val = this.getAttribute("click-scroll");
                    if (val === "instant") return "instant";
                    return getBool("click-scroll", false);
                })(),
                pointers: this.getAttribute("pointers")?.split(",").map(s => s.trim()).filter(Boolean) || null
            }
        });
    }

    disconnectedCallback() {
        this._osInstance?.destroy();
        this._osInstance = null;
    }
}

customElements.define("overlay-scrollbar", OverlayScrollbarElement);