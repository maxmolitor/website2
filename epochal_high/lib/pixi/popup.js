import AbstractPopup from './abstractpopup.js'
import Button from './button.js'
import ButtonGroup from './buttongroup.js'

/**
 * Class that represents a PixiJS InteractivePopup.
 * The class is used for various other Popup-like classes
 * like Popup, Message...
 *
 * @class
 * @abstract
 * @extends AbstractPopup
 */
export class InteractivePopup extends AbstractPopup {

    /**
     * Creates an instance of an InteractivePopup (only for internal use).
     *
     * @constructor
     * @param {object} [opts] - An options object to specify to style and behaviour of the popup.
     * @param {boolean} [opts.closeOnPopup=false] - Should the popup be closed when the user clicks on the popup?
     * @param {boolean} [opts.closeButton=true] - Should a close button be displayed on the upper right corner?
     * @param {object} [opts.button] - A Button object to be display on the lower right corner.
     * @param {object} [opts.buttonGroup] - A ButtonGroup object to be displayed on the lower right corner.
     */
    constructor(opts = {}) {

        opts = Object.assign({}, {
            closeOnPopup: false,
            closeButton: true,
            button: null,
            buttonGroup: null
        }, opts)

        super(opts)

        this._closeButton = null
        this._buttons = null

        // padding
        this.smallPadding = this.opts.padding / 2

        // setup
        //-----------------
        this.setup()

        // layout
        //-----------------
        this.layout()
    }

    /**
     * Creates the framework and instantiates everything.
     *
     * @private
     * @return {AbstractPopup} A reference to the popup for chaining.
     */
    setup() {

        super.setup()

        // interaction
        //-----------------
        this.on('pointerup', e => {
            if (this.opts.closeOnPopup) {
                this.hide()
            } else {
                e.stopPropagation()
            }
        })

        // closeButton
        //-----------------
        if (this.opts.closeButton) {
            let closeButton = PIXI.Sprite.fromImage('../../assets/icons/png/flat/close.png', true)
            closeButton.width = this.headerStyle.fontSize
            closeButton.height = closeButton.width
            closeButton.tint = this.theme.color2
            // This is needed, because the closeButton belongs to the content. The popup must resize with the closeButton.
            if (this._header) {
                closeButton.x = this._header.width + this.innerPadding
            } else if (this._content) {
                closeButton.x = this._content.width + this.innerPadding
            }

            closeButton.interactive = true
            closeButton.buttonMode = true
            closeButton.on('pointerdown', e => {
                this.hide()
            })

            this._closeButton = closeButton
            this.addChild(closeButton)

            // maxWidth is set and a closeButton should be displayed
            //-----------------
            if (this.opts.maxWidth) {
                const wordWrapWidth = this.opts.maxWidth - (2 * this.opts.padding) - this.smallPadding - this._closeButton.width
                if (this._header) {
                    this.headerStyle.wordWrapWidth = wordWrapWidth
                } else if (this._content) {
                    this.textStyle.wordWrapWidth = wordWrapWidth
                }
            }
        }

        // buttons
        //-----------------
        if (this.opts.button || this.opts.buttonGroup) {
            if (this.opts.button) {
                this._buttons = new Button(Object.assign({textStyle: this.theme.textStyleSmall}, this.opts.button))
            } else {
                this._buttons = new ButtonGroup(Object.assign({textStyle: this.theme.textStyleSmall}, this.opts.buttonGroup))
            }
            this.addChild(this._buttons)

            this._buttons.y = this.innerPadding + this.sy
        }

        return this
    }

    /**
     * Should be called to refresh the layout of the popup. Can be used after resizing.
     *
     * @return {AbstractPopup} A reference to the popup for chaining.
     */
    layout() {

        super.layout()
        
        // closeButton
        //-----------------
        if (this.opts.closeButton) {
            this._closeButton.x = this.wantedWidth - this.smallPadding - this._closeButton.width
            this._closeButton.y = this.smallPadding
        }

        // buttons
        //-----------------
        if (this._buttons) {
            this._buttons.x = this.wantedWidth - this.opts.padding - this._buttons.width
            this._buttons.y = this.wantedHeight - this.opts.padding - this._buttons.height
        }

        return this
    }

    /**
     * Calculates the size of the children of the AbstractPopup.
     * Cannot use getBounds() because it is not updated when children
     * are removed.
     * 
     * @private
     * @override
     * @returns {object} An JavaScript object width the keys width and height.
     */
    getInnerSize() {

        let size = super.getInnerSize()

        if (this._closeButton) {
            size.width += this.smallPadding + this._closeButton.width
        }

        if (this._buttons) {
            size.width = Math.max(size.width, this._buttons.x + this._buttons.width)
            size.height += this.innerPadding + this._buttons.height
        }

        return size
    }
}

/**
 * Class that represents a PixiJS Popup.
 *
 * @example
 * // Create the popup
 * const popup = new Popup({
 *     header: 'Goethe',
 *     content: 'Man kann die Erfahrung nicht früh genug machen, wie entbehrlich man in der Welt ist.'
 * })
 *
 * // Add the popup to a DisplayObject
 * app.scene.addChild(popup)
 *
 * @class
 * @extends InteractivePopup
 * @see {@link https://www.iwm-tuebingen.de/iwmbrowser/lib/pixi/popup.html|DocTest}
 */
export default class Popup extends InteractivePopup {

    /**
     * Creates an instance of a Popup.
     *
     * @constructor
     * @param {object} [opts] - An options object to specify to style and behaviour of the popup.
     * @param {boolean} [opts.closeButton=false] - Should a close button be displayed on the upper right corner?
     * @param {number} [opts.minWidth=0] - The minimum width of the popup.
     * @param {number} [opts.minHeight=0] - The minimum height of the popup.
     */
    constructor(opts = {}) {

        opts = Object.assign({}, {
            closeButton: false,
            minWidth: 0,
            minHeight: 0
        }, opts)

        super(opts)
    }
}
