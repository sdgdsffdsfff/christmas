(function () {
    var my = {
        fn: new Function(),
        inherit: function (childClass, parentClass) {
            var Constructor = new Function();
            Constructor.prototype = parentClass.prototype;
            childClass.prototype = new Constructor();
            childClass.prototype.constructor = childClass;
            childClass.superclass = parentClass.prototype;

            if (childClass.prototype.constructor == Object.prototype.constructor) {
                childClass.prototype.constructor = parentClass;
            }
        },
        extend: function (obj, newProperties) {
            var key;

            for (key in newProperties) {
                if (newProperties.hasOwnProperty(key)) {
                    obj[key] = newProperties[key];
                }
            }

            return obj;
        },
        copy: function (obj, targetClass, newProperties) {
            if (typeof obj !== 'object') {
                return obj;
            }

            var value = obj.valueOf();
            if (obj != value) {
                return new obj.constructor(value);
            }

            var o;
            if (obj instanceof obj.constructor && obj.constructor !== Object) {
                if (targetClass) {
                    o = new targetClass();
                } else {
                    o = my.clone(obj.constructor.prototype);
                }

                for (var key in obj) {
                    if (targetClass || obj.hasOwnProperty(key)) {
                        o[key] = obj[key];
                    }
                }
            } else {
                o = {};
                for (var key in obj) {
                    o[key] = obj[key];
                }
            }

            if (newProperties) {
                for (var key in newProperties) {
                    o[key] = newProperties[key];
                }
            }

            return o;
        },
        clone: function (obj) {
            my.__cloneFunc.prototype = obj;
            return new my.__cloneFunc();
        },
        __cloneFunc: function () {
        },
        delegate: function (func, scope) {
            scope = scope || window;

            if (arguments.length > 2) {
                var args = Array.prototype.slice.call(arguments, 2);

                return function () {
                    return func.apply(scope, args);
                }
            } else {
                return function () {
                    return func.call(scope);
                }
            }
        }
    }

    window.my = my;
})();
(function () {

    my.DOM = {
        get: function (id) {
            return document.getElementById(id);
        },
        getStyleValue: function (element, name) {
            if (element.currentStyle) {
                return element.currentStyle[name];
            } else {
                var style = document.defaultView.getComputedStyle(element, null);
                return style[name];
            }
        },
        hide: function (element) {
            element.style.display = 'none';
        },
        show: function (element) {
            element.style.display = 'block';
        },
        remove: function (element) {
            element.parentNode.removeChild(element);
        },
        hasClass: function (element, className) {
            var names = element.className.split(/\s+/);
            for (var i = 0; i < names.length; i++) {
                if (names[i] == className) {
                    return true;
                }
            }
            return false;
        },
        addClass: function (element, className) {
            if (!this.hasClass(element, className)) {
                element.className += ' ' + className;
            }
        },
        removeClass: function (element, className) {
            if (this.hasClass(element, className)) {
                var names = element.className.split(/\s+/), newClassName = [];
                for (var i = 0; i < names.length; i++) {
                    if (names[i] != className) {
                        newClassName.push(names[i]);
                    }
                }
                element.className = newClassName.join(' ');
            }
        }
    }

})();
(function () {

    var ImageManager = {
        __loadList: {},
        __loadImage: function (item, callback) {
            var image = new Image();
            image.onload = function () {
                ImageManager.__loadList[item.id] = image;
                callback();
            }
            image.src = item.src;
        },
        load: function (images, statechange, __index) {
            __index = __index || 0;
            if (images[__index]) {
                ImageManager.__loadImage(images[__index], function () {
                    ImageManager.load(images, statechange, __index + 1);
                });
            }
            statechange(__index);
        },
        get: function (id) {
            return this.__loadList[id];
        }
    }

    my.ImageManager = ImageManager;
})();
(function () {

    my.Math = {
        random: function (min, max) {
            return Math.floor((max - min + 1) * Math.random()) + min;
        },
        pointtoradian: Math.PI / 180
    }

})();
(function () {

    var KeyEvent = function () {
    }
    KeyEvent.__keyCodeMap = {
        VK_ESCAPE: 27, // ESC键
        VK_RETURN: 13, // 回车键
        VK_TAB: 9, // TAB键
        VK_CAPITAL: 20, // Caps Lock键
        VK_SHIFT: 16, // Shift键
        VK_CONTROL: 17, // Ctrl键
        VK_MENU: 18, // Alt键
        VK_SPACE: 32, // 空格键
        VK_BACK: 8, // 退格键
        VK_LWIN: 91, // 左徽标键
        VK_RWIN: 92, // 右徽标键
        K_APPS: 93, // 鼠标右键快捷键

        VK_INSERT: 45, // Insert键
        VK_HOME: 36, // Home键
        VK_PRIOR: 33, // Page Up
        VK_NEXT: 34, // Page Down
        VK_END: 35, // End键
        VK_DELETE: 46, // Delete键
        VK_LEFT: 37, // 方向键(←)
        VK_UP: 38, // 方向键(↑)
        VK_RIGHT: 39, // 方向键(→)
        VK_DOWN: 40, // 方向键(↓)

        VK_F1: 112, // F1键
        VK_F2: 113, // F2键
        VK_F3: 114, // F3键
        VK_F4: 115, // F4键
        VK_F5: 116, // F5键
        VK_F6: 117, // F6键
        VK_F7: 118, // F7键
        VK_F8: 119, // F8键
        VK_F9: 120, // F9键
        VK_F10: 121, // F10键
        VK_F11: 122, // F11键
        VK_F12: 123, // F12键

        VK_NUMLOCK: 144, // Num Lock键
        VK_NUMPAD0: 96, // 小键盘0
        VK_NUMPAD1: 97, // 小键盘1
        VK_NUMPAD2: 98, // 小键盘2
        VK_NUMPAD3: 99, // 小键盘3
        VK_NUMPAD4: 100, // 小键盘4
        VK_NUMPAD5: 101, // 小键盘5
        VK_NUMPAD6: 102, // 小键盘6
        VK_NUMPAD7: 103, // 小键盘7
        VK_NUMPAD8: 104, // 小键盘8
        VK_NUMPAD9: 105, // 小键盘9
        VK_DECIMAL: 110, // 小键盘.
        VK_MULTIPLY: 106, // 小键盘*
        VK_PLUS: 107, // 小键盘+
        VK_SUBTRACT: 109, // 小键盘-
        VK_DIVIDE: 111, // 小键盘/
        VK_PAUSE: 19, // Pause Break键
        VK_SCROLL: 145, // Scroll Lock键

        A: 65, // A键
        B: 66, // B键
        C: 67, // C键
        D: 68, // D键
        E: 69, // E键
        F: 70, // F键
        G: 71, // G键
        H: 72, // H键
        I: 73, // I键
        J: 74, // J键
        K: 75, // K键
        L: 76, // L键
        M: 77, // M键
        N: 78, // N键
        O: 79, // O键
        P: 80, // P键
        Q: 81, // Q键
        R: 82, // R键
        S: 83, // S键
        T: 84, // T键
        U: 85, // U键
        V: 86, // V键
        W: 87, // W键
        X: 88, // X键
        Y: 89, // Y键
        Z: 90, // Z键

        NUMPAD0: 48, // 0键
        NUMPAD1: 49, // 1键
        NUMPAD2: 50, // 2键
        NUMPAD3: 51, // 3键
        NUMPAD4: 52, // 4键
        NUMPAD5: 53, // 5键
        NUMPAD6: 54, // 6键
        NUMPAD7: 55, // 7键
        NUMPAD8: 56, // 8键
        NUMPAD9: 57 // 9键
    }

    KeyEvent.__keyDownMap = {};

    KeyEvent.addListener = function () {
        document.onkeydown = function (e) {
            var e = e || event, code = e.keyCode || e.which;
            KeyEvent.__keyDownMap[code] = true;
        }

        document.onkeyup = function (e) {
            var e = e || event, code = e.keyCode || e.which;
            KeyEvent.__keyDownMap[code] = false;
        }
    }
    KeyEvent.removeListener = function () {
        document.onkeydown = null;
        document.onkeyup = null;
    }
    KeyEvent.check = function (key) {
        var code = KeyEvent.__keyCodeMap[key];
        return !!KeyEvent.__keyDownMap[code];
    }

    my.KeyEvent = KeyEvent;
})();
(function () {

    var Component = function (cfg) {
        this.initialized = false;
        this.parent = null;
        my.extend(this, cfg);
    }
    Component.prototype.oninit = my.fn;
    Component.prototype.ondestory = my.fn;
    Component.prototype.init = function () {
        this.initialized = true;
        this.oninit();
    }
    Component.prototype.destory = function () {
        if (this.parent) {
            this.parent.removeChild(this);
            this.parent = null;
        }

        this.ondestory();
        this.oninit = this.ondestory = null;
    }

    my.Component = Component;
})();
(function () {

    var DisplayObject = function (cfg) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.right = 0;
        this.bottom = 0;
        this.alpha = 1;
        this.rotation = 0;
        this.flipX = false;
        this.flipY = false;
        this.scaleX = 1;
        this.scaleY = 1;
        this.visible = true;
        DisplayObject.superclass.constructor.call(this, cfg);
    }
    my.inherit(DisplayObject, my.Component);
    DisplayObject.prototype.onshow = my.fn;
    DisplayObject.prototype.onhide = my.fn;
    DisplayObject.prototype.onupdate = my.fn;
    DisplayObject.prototype.onrender = my.fn;
    DisplayObject.prototype.ondraw = my.fn;
    DisplayObject.prototype.show = function () {
        this.visible = true;
        this.onshow();
    }
    DisplayObject.prototype.hide = function () {
        this.visible = false;
        this.onhide();
    }
    DisplayObject.prototype.update = function (deltaTime) {
        if (this.onupdate) {
            this.onupdate();
        }
    }
    DisplayObject.prototype.__transform = function (context) {
        context.translate(this.x, this.y);

        // 透明度
        if (this.alpha < 1) {
            context.globalAlpha = this.alpha;
        }

        // 旋转
        if (this.rotation % 360 > 0) {
            var offset = [this.width / 2, this.height / 2];
            context.translate(offset[0], offset[1]);
            context.rotate(this.rotation % 360 / 180 * Math.PI);
            context.translate(-offset[0], -offset[1]);
        }

        // 翻转
        if (this.flipX || this.flipY) {
            context.translate(this.flipX ? this.width : 0, this.flipY ? this.height : 0);
            context.scale(this.flipX ? -1 : 1, this.flipY ? -1 : 1);
        }

        // 缩放
        if (this.scaleX != 1 || this.scaleY != 1) {
            context.scale(this.scaleX, this.scaleY);
        }
    }

    DisplayObject.prototype.render = function (context) {
        if (!this.visible || this.alpha <= 0) {
            return false;
        }

        // 保存当前画布状态
        context.save();
        // 变形渲染帧
        this.__transform(context);
        this.draw(context);
        // 恢复画布状态
        context.restore();

        this.onrender();
    }

    DisplayObject.prototype.draw = function (context) {
        this.ondraw();
    }

    DisplayObject.prototype.destory = function () {
        this.onshow = this.onhide = this.onupdate = this.onrender = this.ondraw = null;
        DisplayObject.superclass.destory.call(this);
    }

    my.DisplayObject = DisplayObject;
})();
(function () {

    var DisplayObjectContainer = function (cfg) {

        this.__childs = [];

        DisplayObjectContainer.superclass.constructor.call(this, cfg);
    }
    my.inherit(DisplayObjectContainer, my.DisplayObject);

    DisplayObjectContainer.prototype.init = function () {
        var childs = this.__childs, child;

        for (var i = 0, len = childs.length; i < len; i++) {
            child = childs[i];
            if (!child.initialized) {
                child.init();
            }
        }
        DisplayObjectContainer.superclass.init.call(this);
    }

    DisplayObjectContainer.prototype.appendChild = function (child) {
        this.addChildAt(child, this.__childs.length);
    }

    DisplayObjectContainer.prototype.prependChild = function (child) {
        this.addChildAt(child, 0);
    }

    DisplayObjectContainer.prototype.addChildAt = function (child, index) {
        child.parent = this;
        this.__childs.splice(index, 0, child);
    }

    DisplayObjectContainer.prototype.removeChild = function (child) {
        var childs = this.__childs;

        for (var i = 0, len = childs.length; i < len; i++) {
            if (childs[i] == child) {
                this.removeChildAt(i);
                break;
            }
        }
    }

    DisplayObjectContainer.prototype.removeChildAt = function (index) {
        var child = this.__childs.splice(index, 1);

        if (child) {
            child.parent = null;
        }
    }

    DisplayObjectContainer.prototype.removeAll = function () {
        this.__childs.length = 0;
    }

    DisplayObjectContainer.prototype.getChildAt = function (index) {
        return this.__childs[index];
    }

    DisplayObjectContainer.prototype.getChilds = function () {
        return this.__childs;
    }

    DisplayObjectContainer.prototype.update = function (deltaTime) {
        var childs = this.__childs;

        for (var i = 0, len = childs.length; i < len; i++) {
            if (childs[i]) {
                childs[i].update(deltaTime);
            }
        }
        DisplayObjectContainer.superclass.update.call(this);
    }

    DisplayObjectContainer.prototype.draw = function (context) {
        var childs = this.__childs;

        for (var i = 0, len = childs.length; i < len; i++) {
            childs[i].render(context);
        }
        DisplayObjectContainer.superclass.draw.call(this);
    }

    DisplayObjectContainer.prototype.destoryChilds = function () {
        var childs = this.__childs;

        for (var i = 0, len = childs.length; i < len; i++) {
            childs[0].destory();
        }
    }

    DisplayObjectContainer.prototype.destory = function () {
        this.destoryChilds();
        this.__childs = null;
        DisplayObjectContainer.superclass.destory.call(this);
    }

    my.DisplayObjectContainer = DisplayObjectContainer;
})();
(function () {

    var Animation = function (cfg) {


        this.image = null;

        this.frames = [];

        this.loop = true;

        this.speed = 1;

        this.playing = false;

        this.currentFrameIndex = 0;

        this.currentFrame = null;

        this.__framePlayedDuration = 0;

        Animation.superclass.constructor.call(this, cfg);
    }
    my.inherit(Animation, my.Component);


    Animation.prototype.onplay = my.fn;
    Animation.prototype.onstop = my.fn;
    Animation.prototype.onend = my.fn;

    Animation.prototype.__gotoFrame = function (index) {
        if (this.frames[index]) {
            this.currentFrameIndex = index;
            this.currentFrame = this.frames[index];
            this.__framePlayedDuration = 0;
        }
    }

    Animation.prototype.__nextFrame = function () {
        if (this.currentFrameIndex < this.frames.length - 1) {
            this.__gotoFrame(this.currentFrameIndex + 1);
        } else if (this.loop) {
            this.__gotoFrame(0);
        } else {
            this.stop();
            this.onend();
        }
    }

    Animation.prototype.init = function () {
        this.__gotoFrame(0);
        Animation.superclass.init.call(this);
    }

    Animation.prototype.play = function () {
        this.playing = true;
        this.onplay();
    }

    Animation.prototype.stop = function () {
        this.playing = false;
        this.onstop();
    }

    Animation.prototype.gotoAndPlay = function (index) {
        this.__gotoFrame(index);
        this.play();
    }

    Animation.prototype.gotoAndStop = function (index) {
        this.__gotoFrame(index);
        this.stop();
    }

    Animation.prototype.update = function (deltaTime) {
        if (!this.playing) {
        } else if (this.__framePlayedDuration >= this.currentFrame.duration) {
            this.__nextFrame();
        } else {
            this.__framePlayedDuration += deltaTime * this.speed;
        }
    }

    Animation.prototype.destory = function () {
        this.image = this.frames = this.currentFrame = this.onplay = this.onstop = this.onend = null;
        Animation.superclass.destory.call(this);
    }

    my.Animation = Animation;
})();
(function () {

    var Sprite = function (cfg) {


        this.anim = null;

        this.speedX = 0;

        this.speedY = 0;

        this.acceX = 0;

        this.acceY = 0;

        this.lastX = 0;

        this.lastY = 0;

        this.lastSpeedX = 0;

        this.lastSpeedY = 0;

        this.bottom = 0;

        this.right = 0;

        this.color = "#ff0000";//测试

        Sprite.superclass.constructor.call(this, cfg);
    }
    my.inherit(Sprite, my.DisplayObject);


    Sprite.prototype.__getCollRect = function () {
        if (this.anim && this.anim.currentFrame) {
            return this.anim.currentFrame.collRect;
        }
    }

    Sprite.prototype.hitTest = function (sprite2) {
        var collRect1 = this.__getCollRect(), collRect2 = sprite2.__getCollRect(), coll1, coll2, result = false;

        if (collRect1 && collRect2) {
            var i1, len1 = collRect1.length, i2, len2 = collRect2.length;

            for (i1 = 0; i1 < len1; i1++) {
                coll1 = collRect1[i1];

                for (i2 = 0; i2 < len2; i2++) {
                    coll2 = collRect2[i2];
                    var _x = Math.abs((this.x + coll1[0] + coll1[2] / 2) - (sprite2.x + coll2[0] + coll2[2] / 2)) < (coll1[2] + coll2[2]) / 2;
                    var _y = Math.abs((this.y + coll1[1] + coll1[3] / 2) - (sprite2.y + coll2[1] + coll2[3] / 2)) < (coll1[3] + coll2[3]) / 2;
                    if (_x && _y) {
                        result = true;
                        //console.log("X:" + this.x + ":" + coll1[0] + ":" + coll1[2] + "=" + sprite2.x + ":" + coll2[0] + ":" + coll2[2]);
                        //console.log("Y:" + this.y + ":" + coll1[1] + ":" + coll1[3] + "=" + sprite2.y + ":" + coll2[1] + ":" + coll2[3]);
                        break;
                    }
                }
            }
        }
        sprite2 = collRect1 = collRect2 = coll1 = coll2 = null;
        return result;
    }
    Sprite.prototype.hitVertical = function (sprite2) {
        var collRect1 = this.__getCollRect(), collRect2 = sprite2.__getCollRect(), coll1, coll2, result = {
            isSuccess: false,
            data: 0
        };
        if (collRect1 && collRect2) {
            var i1, len1 = collRect1.length, i2, len2 = collRect2.length;
            for (i1 = 0; i1 < len1; i1++) {
                coll1 = collRect1[i1];

                for (i2 = 0; i2 < len2; i2++) {
                    coll2 = collRect2[i2];
                    var _sprite2Y = Math.abs(sprite2.y + coll2[1]);
                    var _sprite1B = Math.abs(this.y + coll1[1] + coll1[3]);
                    var _sprite1H = Math.abs(this.y + coll1[1] + coll1[3] / 2);
                    if (_sprite2Y > _sprite1H && _sprite2Y < _sprite1B) {
                        result = {
                            isSuccess: true,
                            data: _sprite2Y - coll1[1] - coll1[3]//顶部高度
                        };
                        break;
                    }
                }
            }
        }
        sprite2 = collRect1 = collRect2 = coll1 = coll2 = null;
        return result;
    }

    Sprite.prototype.getPlayXY_ByHit = function (sprite2) {
        var collRect1 = this.__getCollRect(), collRect2 = sprite2.__getCollRect(), coll1, coll2, result = { X: 0, Y: 0 };
        if (collRect1 && collRect2) {
            var i1, len1 = collRect1.length, i2, len2 = collRect2.length;
            for (i1 = 0; i1 < len1; i1++) {
                coll1 = collRect1[i1];

                for (i2 = 0; i2 < len2; i2++) {
                    coll2 = collRect2[i2];
                    result.X = sprite2.x - coll1[0] - coll1[2] + coll2[0];
                    result.Y = sprite2.y - coll1[1] - coll1[3] + coll2[1];
                    break;
                }
            }
        }
        sprite2 = collRect1 = collRect2 = coll1 = coll2 = null;
        return result;
    }

    Sprite.prototype.IsOutOnhitVertical = function (sprite2) {
        var collRect1 = this.__getCollRect(), collRect2 = sprite2.__getCollRect(), coll1, coll2, result = false;

        if (collRect1 && collRect2) {
            var i1, len1 = collRect1.length, i2, len2 = collRect2.length;

            for (i1 = 0; i1 < len1; i1++) {
                coll1 = collRect1[i1];

                for (i2 = 0; i2 < len2; i2++) {
                    coll2 = collRect2[i2];
                    var _x = (this.x + coll1[0] + coll1[2] < sprite2.x + coll2[0] || this.x + coll1[0] > sprite2.x + coll2[0] + coll2[2])
                    var _y = (this.y + coll1[1] + coll1[3] == sprite2.y + coll2[1])
                    if (_x && _y) {
                        result = true;
                        break;
                    }
                }
            }
        }
        sprite2 = collRect1 = collRect2 = coll1 = coll2 = null;
        return result;
    }


    Sprite.prototype.col_Between_Rects = function (rectObjB) {
        return ((this.right > rectObjB.x && this.right < rectObjB.right
            || this.x > rectObjB.x && this.x < rectObjB.right)
            && (this.bottom > rectObjB.y && this.bottom < rectObjB.bottom
            || this.y < rectObjB.bottom && this.bottom > rectObjB.y));
    }


    Sprite.prototype.update = function (deltaTime) {
        this.lastSpeedX = this.speedX;
        this.lastSpeedY = this.speedY;
        this.lastX = this.x;
        this.lastY = this.y;



        //console.log("lastSpeedX:" + this.lastSpeedX + "this.lastSpeedY:" + this.lastSpeedY + "this.lastX:" + this.lastX + "this.lastY:" + this.lastY);

        // 计算移动速度
        this.speedX = this.lastSpeedX + this.acceX * deltaTime;
        this.speedY = this.lastSpeedY + this.acceY * deltaTime;

        // 计算精灵位置
        this.x += Math.round((this.lastSpeedX + this.speedX) * deltaTime / 2);
        this.y += Math.round((this.lastSpeedY + this.speedY) * deltaTime / 2);

        this.right = this.x + this.width;
        this.bottom = this.y + this.height;

        // 更新当前动画帧状态
        if (this.anim) {
            this.anim.update(deltaTime);
        }
        Sprite.superclass.update.call(this);
    }

    Sprite.prototype.draw = function (context) {
        var anim = this.anim;
        if (anim && anim.currentFrame) {
            var frame = anim.currentFrame;
            context.drawImage(anim.image, frame.x, frame.y, this.width, this.height, 0, 0, this.width, this.height);
            Sprite.superclass.draw.call(this);

            //test
            //if (frame.collRect) {
            //    var collRect = frame.collRect, coll;

            //    context.fillStyle = this.color;
            //    context.globalAlpha = 0.5;

            //    for (var i = 0, len = collRect.length; i < len; i++) {
            //        coll = collRect[i];
            //        context.fillRect(coll[0], coll[1], coll[2], coll[3]);
            //    }
            //}

        }
    }

    Sprite.prototype.destory = function () {
        if (this.anim) {
            this.anim.destory();
            this.anim = null;
        }
        Sprite.superclass.destory.call(this);
    }

    my.Sprite = Sprite;
})();
(function () {

    var Viewport = function (cfg) {


        this.x = 0;

        this.y = 0;

        this.width = 0;

        this.height = 0;

        this.__lastX = 0;

        this.__lastY = 0;

        Viewport.superclass.constructor.call(this, cfg);
    }
    my.inherit(Viewport, my.Component);

    Viewport.prototype.move = function (x, y, absolute) {
        this.__lastX = this.x;
        this.__lastY = this.y;

        if (absolute) {
            this.x = x;
            this.y = y;
        } else {
            this.x += x;
            this.y += y;
        }
    }

    my.Viewport = Viewport;
})();
(function () {

    var Layer = function (cfg) {


        this.viewport = null;

        this.distance = 1;

        this.__canvas = null;

        this.__context = null;

        this.__change = true;

        Layer.superclass.constructor.call(this, cfg);
    }
    my.inherit(Layer, my.DisplayObjectContainer);


    Layer.prototype.init = function () {
        var childs = this.__childs, child;

        for (var i = 0, len = childs.length; i < len; i++) {
            child = childs[i];

            child.x /= this.distance;
            child.y /= this.distance;

            if (!child.initialized) {
                child.init();
            }
        }

        my.DisplayObject.prototype.init.call(this);
    }

    Layer.prototype.setCanvas = function (canvas) {
        if (typeof canvas === 'string') {
            canvas = document.getElementById(canvas);
        }

        if (canvas && canvas.getContext) {
            this.__canvas = canvas;
            this.__context = canvas.getContext('2d');
        }
    }

    Layer.prototype.clear = function () {
        if (this.__change) {
            this.__context.clearRect(0, 0, this.__canvas.width, this.__canvas.height);
        }
    }

    Layer.prototype.change = function () {
        this.__change = true;
    }

    Layer.prototype.render = function () {
        if (this.__change) {
            Layer.superclass.render.call(this, this.__context);
            this.__change = false;
        }
    }

    Layer.prototype.draw = function (context) {
        var childs = this.__childs, child = null, viewport = this.viewport;
        var vx = viewport.x / this.distance, vy = viewport.y / this.distance, vw = viewport.width, vh = viewport.height;
        var cx = cy = cw = ch = 0;

        for (var i = 0, len = childs.length; i < len; i++) {
            child = childs[i];
            cx = child.x;
            cy = child.y;
            cw = child.width;
            ch = child.height;

            if (Math.abs((cx + cw / 2) - (vx + vw / 2)) < (cw + vw) / 2 && Math.abs((cy + ch / 2) - (vy + vh / 2)) < (ch + vh) / 2) {
                child.x = cx - vx;
                child.y = cy - vy;

                child.render(context);

                child.x = cx;
                child.y = cy;
            }
        }
        my.DisplayObject.prototype.draw.call(this);
    }

    Layer.prototype.destory = function () {
        this.viewport = this.__canvas = this.__context = null;
        Layer.superclass.destory.call(this);
    }

    my.Layer = Layer;
})();
(function () {

    var Bitmap = function (cfg) {

        this.image = null;

        this.repeat = false;

        this.__pattern = null;

        this.__type = ["no-repeat", "repeat-x", "repeat-y", "repeat"];

        this.direction = 0;

        Bitmap.superclass.constructor.call(this, cfg);
    }
    my.inherit(Bitmap, my.DisplayObject);

    Bitmap.prototype.draw = function (context) {
        if (this.repeat) {
            if (!this.__pattern) {
                this.__pattern = context.createPattern(this.image, this.__type[this.direction]);
            }
            context.fillStyle = this.__pattern;
            context.fillRect(0, 0, this.width, this.height);
        } else {
            context.drawImage(this.image, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
        }
        Bitmap.superclass.draw.call(this);
    }

    Bitmap.prototype.destory = function () {
        this.image = null;
        Bitmap.superclass.destory.call(this);
    }

    my.Bitmap = Bitmap;
})();
(function () {

    var Game = function (cfg) {


        this.viewport = null;

        this.FPS = 30;

        this.playing = false;

        this.__sleep = 1000 / this.FPS;

        this.__lastTime = 0;

        this.__timeout = null;

        Game.superclass.constructor.call(this, cfg);
    }
    my.inherit(Game, my.DisplayObjectContainer);

    Game.prototype.onstart = my.fn;
    Game.prototype.onstop = my.fn;

    Game.prototype.setFPS = function (fps) {
        this.FPS = fps;
        this.__sleep = 1000 / fps;
    }

    Game.prototype.start = function () {
        if (!this.playing) {
            this.playing = true;
            this.__lastTime = new Date().getTime();
            this.__run();
            this.onstart();
        }
    }

    Game.prototype.stop = function () {
        if (this.playing) {
            this.playing = false;
            clearTimeout(this.__timeout);
            this.onstop();
        }
    }

    Game.prototype.render = function () {
        var childs = this.__childs, child;

        for (var i = 0, len = childs.length; i < len; i++) {
            childs[i].render();
        }
        this.onrender();
    }

    Game.prototype.clear = function () {
        var childs = this.__childs, child;

        for (var i = 0, len = childs.length; i < len; i++) {
            childs[i].clear();
        }
    }

    Game.prototype.__run = function () {
        var now = 0;

        this.__timeout = setTimeout(my.delegate(this.__run, this), this.__sleep);
        now = new Date().getTime();

        this.update(now - this.__lastTime);
        this.clear();
        this.render();

        /*
         if(undefined === window.tracetime) {
         window.tracetime = 0;
         } else if(window.tracetime > 1000) {
         window.tracetime = 0;
         console.log(new Date().getTime() - now);
         } else {
         window.tracetime += (now - this.__lastTime);
         }
         */

        this.__lastTime = now;
    }

    Game.prototype.destory = function () {
        this.stop();
        Game.superclass.destory.call(this);
    }

    my.Game = Game;
})();

