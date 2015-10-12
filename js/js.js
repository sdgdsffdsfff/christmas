var getManFrames = (function () {
    var frames = {
        normal: {
            man1: [
                { x: 0, y: 0, duration: 1 }, { x: 58, y: 0, duration: 1 }, { x: 116, y: 0, duration: 1 }, { x: 174, y: 0, duration: 1 }, { x: 232, y: 0, duration: 1 },
                { x: 0, y: 64, duration: 1 }, { x: 58, y: 64, duration: 1 }, { x: 116, y: 64, duration: 1 }, { x: 174, y: 64, duration: 1 }, { x: 232, y: 64, duration: 1 },
                { x: 0, y: 128, duration: 1 }, { x: 58, y: 128, duration: 1 }, { x: 116, y: 128, duration: 1 }, { x: 174, y: 128, duration: 1 }, { x: 232, y: 128, duration: 1 },
                { x: 0, y: 192, duration: 1 }, { x: 58, y: 192, duration: 1 }, { x: 116, y: 192, duration: 1 }, { x: 174, y: 192, duration: 1 }, { x: 232, y: 192, duration: 1 },
                { x: 0, y: 256, duration: 1 }, { x: 58, y: 256, duration: 1 }, { x: 116, y: 256, duration: 1 }, { x: 174, y: 256, duration: 1 }, { x: 232, y: 256, duration: 1 }
            ],
            man2: [
                { x: 0, y: 0, duration: 1 }, { x: 213, y: 0, duration: 1 }, { x: 426, y: 0, duration: 1 }, { x: 639, y: 0, duration: 1 }, { x: 852, y: 0, duration: 1 },
                { x: 1065, y: 0, duration: 1 }, { x: 1278, y: 0, duration: 1 }, { x: 1491, y: 0, duration: 1 }, { x: 1704, y: 0, duration: 1 }, { x: 1917, y: 0, duration: 1 },

                { x: 0, y: 116, duration: 1 }, { x: 213, y: 116, duration: 1 }, { x: 426, y: 116, duration: 1 }, { x: 639, y: 116, duration: 1 }, { x: 852, y: 116, duration: 1 },
                { x: 1065, y: 116, duration: 1 }, { x: 1278, y: 116, duration: 1 }, { x: 1491, y: 116, duration: 1 }, { x: 1704, y: 116, duration: 1 }, { x: 1917, y: 116, duration: 1 },

                { x: 0, y: 232, duration: 1 }, { x: 213, y: 232, duration: 1 }, { x: 426, y: 232, duration: 1 }, { x: 639, y: 232, duration: 1 }, { x: 852, y: 232, duration: 1 },
                { x: 1065, y: 232, duration: 1 }, { x: 1278, y: 232, duration: 1 }, { x: 1491, y: 232, duration: 1 }, { x: 1704, y: 232, duration: 1 }, { x: 1917, y: 232, duration: 1 },

                { x: 0, y: 348, duration: 1 }, { x: 213, y: 348, duration: 1 }, { x: 426, y: 348, duration: 1 }, { x: 639, y: 348, duration: 1 }, { x: 852, y: 348, duration: 1 },
                { x: 1065, y: 348, duration: 1 }, { x: 1278, y: 348, duration: 1 }, { x: 1491, y: 348, duration: 1 }, { x: 1704, y: 348, duration: 1 }, { x: 1917, y: 348, duration: 1 },

                { x: 0, y: 464, duration: 1 }, { x: 213, y: 464, duration: 1 }
            ],
            man3: [
                { x: 426, y: 464, duration: 1 }, { x: 639, y: 464, duration: 1 }, { x: 852, y: 464, duration: 1 },
                { x: 1065, y: 464, duration: 1 }, { x: 1278, y: 464, duration: 1 }, { x: 1491, y: 464, duration: 1 }, { x: 1704, y: 464, duration: 1 }, { x: 1917, y: 464, duration: 1 },

                { x: 0, y: 580, duration: 1 }, { x: 213, y: 580, duration: 1 }, { x: 426, y: 580, duration: 1 }, { x: 639, y: 580, duration: 1 }, { x: 852, y: 580, duration: 1 },
                { x: 1065, y: 580, duration: 1 }, { x: 1278, y: 580, duration: 1 }, { x: 1491, y: 580, duration: 1 }, { x: 1704, y: 580, duration: 1 }, { x: 1917, y: 580, duration: 1 },

                { x: 0, y: 696, duration: 1 }, { x: 213, y: 696, duration: 1 }, { x: 426, y: 696, duration: 1 }, { x: 639, y: 696, duration: 1 }, { x: 852, y: 696, duration: 1 },
                { x: 1065, y: 696, duration: 1 }, { x: 1278, y: 696, duration: 1 }, { x: 1491, y: 696, duration: 1 }, { x: 1704, y: 696, duration: 1 }, { x: 1917, y: 696, duration: 1 },

                { x: 0, y: 812, duration: 1 }, { x: 213, y: 812, duration: 1 }, { x: 426, y: 812, duration: 1 }, { x: 639, y: 812, duration: 1 }, { x: 852, y: 812, duration: 1 },
                { x: 1065, y: 812, duration: 1 }, { x: 1278, y: 812, duration: 1 }, { x: 1491, y: 812, duration: 1 }, { x: 1704, y: 812, duration: 1 }, { x: 1917, y: 812, duration: 1 },

                { x: 0, y: 928, duration: 1 }, { x: 213, y: 928, duration: 1 }, { x: 426, y: 928, duration: 1 }, { x: 639, y: 928, duration: 1 }, { x: 852, y: 928, duration: 1 },
                { x: 1065, y: 928, duration: 1 }, { x: 1278, y: 928, duration: 1 }, { x: 1491, y: 928, duration: 1 }, { x: 1704, y: 928, duration: 1 }, { x: 1917, y: 928, duration: 1 },

                { x: 0, y: 1044, duration: 1 }, { x: 213, y: 1044, duration: 1 }, { x: 426, y: 1044, duration: 1 }, { x: 639, y: 1044, duration: 1 }, { x: 852, y: 1044, duration: 1 },
                { x: 1065, y: 1044, duration: 1 }, { x: 1278, y: 1044, duration: 1 }, { x: 1491, y: 1044, duration: 1 }, { x: 1704, y: 1044, duration: 1 }, { x: 1917, y: 1044, duration: 1 }
            ],
            man4: [
                { x: 0, y: 0, duration: 1 }, { x: 72, y: 0, duration: 1 }, { x: 144, y: 0, duration: 1 }, { x: 216, y: 0, duration: 1 }, { x: 288, y: 0, duration: 1 },

                { x: 0, y: 90, duration: 1 }, { x: 72, y: 90, duration: 1 }, { x: 144, y: 90, duration: 1 }, { x: 216, y: 90, duration: 1 }, { x: 288, y: 90, duration: 1 },

                { x: 0, y: 180, duration: 1 }, { x: 72, y: 180, duration: 1 }, { x: 144, y: 180, duration: 1 }, { x: 216, y: 180, duration: 1 }, { x: 288, y: 180, duration: 1 },

                { x: 0, y: 270, duration: 1 }, { x: 72, y: 270, duration: 1 }, { x: 144, y: 270, duration: 1 }, { x: 216, y: 270, duration: 1 }, { x: 288, y: 270, duration: 1 }
            ],
            end: [
                { x: 0, y: 0, duration: 1 }, { x: 127, y: 0, duration: 1 }, { x: 254, y: 0, duration: 1 }, { x: 381, y: 0, duration: 1 }, { x: 508, y: 0, duration: 1 }, { x: 635, y: 0, duration: 1 },
                { x: 762, y: 0, duration: 1 }, { x: 889, y: 0, duration: 1 }, { x: 1016, y: 0, duration: 1 }, { x: 1143, y: 0, duration: 1 }, { x: 1270, y: 0, duration: 1 },

                { x: 0, y: 111, duration: 1 }, { x: 127, y: 111, duration: 1 }, { x: 254, y: 111, duration: 1 }, { x: 381, y: 111, duration: 1 }, { x: 508, y: 111, duration: 1 }, { x: 635, y: 111, duration: 1 },
                { x: 762, y: 111, duration: 1 }, { x: 889, y: 111, duration: 1 }, { x: 1016, y: 111, duration: 1 }, { x: 1143, y: 111, duration: 1 }, { x: 1270, y: 111, duration: 1 },

                { x: 0, y: 222, duration: 1 }, { x: 127, y: 222, duration: 1 }, { x: 254, y: 222, duration: 1 }, { x: 381, y: 222, duration: 1 }, { x: 508, y: 222, duration: 1 }, { x: 635, y: 222, duration: 1 },
                { x: 762, y: 222, duration: 1 }, { x: 889, y: 222, duration: 1 }, { x: 1016, y: 222, duration: 1 }, { x: 1143, y: 222, duration: 1 }, { x: 1270, y: 222, duration: 1 },

                { x: 0, y: 333, duration: 1 }, { x: 127, y: 333, duration: 1 }, { x: 254, y: 333, duration: 1 }, { x: 381, y: 333, duration: 1 }, { x: 508, y: 333, duration: 1 }, { x: 635, y: 333, duration: 1 },
                { x: 762, y: 333, duration: 1 }, { x: 889, y: 333, duration: 1 }, { x: 1016, y: 333, duration: 1 }, { x: 1143, y: 333, duration: 1 }, { x: 1270, y: 333, duration: 1 },

                { x: 0, y: 444, duration: 1 }, { x: 127, y: 444, duration: 1 }, { x: 254, y: 444, duration: 1 }, { x: 381, y: 444, duration: 1 }, { x: 508, y: 444, duration: 1 }, { x: 635, y: 444, duration: 1 },
                { x: 762, y: 444, duration: 1 }, { x: 889, y: 444, duration: 1 }, { x: 1016, y: 444, duration: 1 }, { x: 1143, y: 444, duration: 1 }, { x: 1270, y: 444, duration: 1 }
            ]
        }
    };
    return function (typeName, animName) {
        return frames[typeName][animName];
    }
})();
var getWomanFrames = (function () {
    var frames = {
        normal: {
            woman1: [
                { x: 0, y: 0, duration: 1 }, { x: 77, y: 0, duration: 1 }, { x: 154, y: 0, duration: 1 }, { x: 231, y: 0, duration: 1 }, { x: 308, y: 0, duration: 1 }, { x: 385, y: 0, duration: 1 },

                { x: 0, y: 100, duration: 1 }, { x: 77, y: 100, duration: 1 }, { x: 154, y: 100, duration: 1 }, { x: 231, y: 100, duration: 1 }, { x: 308, y: 100, duration: 1 }, { x: 385, y: 100, duration: 1 },

                { x: 0, y: 200, duration: 1 }, { x: 77, y: 200, duration: 1 }, { x: 154, y: 200, duration: 1 }, { x: 231, y: 200, duration: 1 }, { x: 308, y: 200, duration: 1 }
            ],
            woman2: [
                { x: 0, y: 0, duration: 1 }, { x: 77, y: 0, duration: 1 }, { x: 154, y: 0, duration: 1 }, { x: 231, y: 0, duration: 1 }, { x: 308, y: 0, duration: 1 }, { x: 385, y: 0, duration: 1 }, { x: 462, y: 0, duration: 1 }, { x: 539, y: 0, duration: 1 },

                { x: 0, y: 100, duration: 1 }, { x: 77, y: 100, duration: 1 }, { x: 154, y: 100, duration: 1 }, { x: 231, y: 100, duration: 1 }, { x: 308, y: 100, duration: 1 }, { x: 385, y: 100, duration: 1 }, { x: 462, y: 100, duration: 1 }, { x: 539, y: 100, duration: 1 },

                { x: 0, y: 200, duration: 1 }, { x: 77, y: 200, duration: 1 }, { x: 154, y: 200, duration: 1 }, { x: 231, y: 200, duration: 1 }, { x: 308, y: 200, duration: 1 }, { x: 385, y: 200, duration: 1 }, { x: 462, y: 200, duration: 1 }, { x: 539, y: 200, duration: 1 },

                { x: 0, y: 300, duration: 1 }, { x: 77, y: 300, duration: 1 }, { x: 154, y: 300, duration: 1 }, { x: 231, y: 300, duration: 1 }, { x: 308, y: 300, duration: 1 }, { x: 385, y: 300, duration: 1 }, { x: 462, y: 300, duration: 1 }, { x: 539, y: 300, duration: 1 },

                { x: 0, y: 400, duration: 1 }, { x: 77, y: 400, duration: 1 }, { x: 154, y: 400, duration: 1 }, { x: 231, y: 400, duration: 1 }, { x: 308, y: 400, duration: 1 }, { x: 385, y: 400, duration: 1 }, { x: 462, y: 400, duration: 1 }, { x: 539, y: 400, duration: 1 }

            ],
            woman3: [
                { x: 0, y: 0, duration: 1 }, { x: 72, y: 0, duration: 1 }, { x: 144, y: 0, duration: 1 }, { x: 216, y: 0, duration: 1 }, { x: 288, y: 0, duration: 1 },

                { x: 0, y: 90, duration: 1 }, { x: 72, y: 90, duration: 1 }, { x: 144, y: 90, duration: 1 }, { x: 216, y: 90, duration: 1 }, { x: 288, y: 90, duration: 1 },

                { x: 0, y: 180, duration: 1 }, { x: 72, y: 180, duration: 1 }, { x: 144, y: 180, duration: 1 }, { x: 216, y: 180, duration: 1 }, { x: 288, y: 180, duration: 1 },

                { x: 0, y: 270, duration: 1 }, { x: 72, y: 270, duration: 1 }, { x: 144, y: 270, duration: 1 }, { x: 216, y: 270, duration: 1 }, { x: 288, y: 270, duration: 1 },

                { x: 0, y: 360, duration: 1 }, { x: 72, y: 360, duration: 1 }, { x: 144, y: 360, duration: 1 }, { x: 216, y: 360, duration: 1 }, { x: 288, y: 360, duration: 1 }
            ],
            woman4: [
                { x: 0, y: 0, duration: 1 }
            ]
        }
    }
    return function (typeName, animName) {
        return frames[typeName][animName];
    }
})();
var getBallFrames = (function () {
    var frames = {
        normal: {
            ball1: [
                { x: 0, y: 0, duration: 1 }
            ],
            ball2: [
                { x: 0, y: 0, duration: 1 }, { x: 318, y: 0, duration: 1 },
                { x: 0, y: 69, duration: 1 }, { x: 318, y: 69, duration: 1 },
                { x: 0, y: 138, duration: 1 }, { x: 318, y: 138, duration: 1 },
                { x: 0, y: 207, duration: 1 }, { x: 318, y: 207, duration: 1 },
                { x: 0, y: 276, duration: 1 }, { x: 318, y: 276, duration: 1 },
                { x: 0, y: 345, duration: 1 }, { x: 318, y: 345, duration: 1 },
                { x: 0, y: 414, duration: 1 }, { x: 318, y: 414, duration: 1 },
                { x: 0, y: 483, duration: 1 }, { x: 318, y: 483, duration: 1 },
                { x: 0, y: 552, duration: 1 }, { x: 318, y: 552, duration: 1 },
                { x: 0, y: 621, duration: 1 }, { x: 318, y: 621, duration: 1 },
                { x: 0, y: 690, duration: 1 }, { x: 318, y: 690, duration: 1 },
                { x: 0, y: 759, duration: 1 }
            ]
        }
    }
    return function (typeName, animName) {
        return frames[typeName][animName];
    }
})();
var getDeerFrames = (function () {

    var frames = {
        normal: {
            lu1: [
                { x: 0, y: 0, duration: 1 }
            ],
            lu2: [
                { x: 0, y: 0, duration: 1 }, { x: 90, y: 0, duration: 1 }, { x: 180, y: 0, duration: 1 }, { x: 270, y: 0, duration: 1 },
                { x: 0, y: 70, duration: 1 }, { x: 90, y: 70, duration: 1 }, { x: 180, y: 70, duration: 1 }, { x: 270, y: 70, duration: 1 },
                { x: 0, y: 140, duration: 1 }, { x: 90, y: 140, duration: 1 }, { x: 180, y: 140, duration: 1 }, { x: 270, y: 140, duration: 1 },
                { x: 0, y: 210, duration: 1 }, { x: 90, y: 210, duration: 1 }, { x: 180, y: 210, duration: 1 }, { x: 270, y: 210, duration: 1 },
                { x: 0, y: 280, duration: 1 }, { x: 90, y: 280, duration: 1 }, { x: 180, y: 280, duration: 1 }, { x: 270, y: 280, duration: 1 },
                { x: 0, y: 350, duration: 1 }, { x: 90, y: 350, duration: 1 }, { x: 180, y: 350, duration: 1 }, { x: 270, y: 350, duration: 1 },
                { x: 0, y: 420, duration: 1 }, { x: 90, y: 420, duration: 1 }, { x: 180, y: 420, duration: 1 }, { x: 270, y: 420, duration: 1 },
                { x: 0, y: 490, duration: 1 }, { x: 90, y: 490, duration: 1 }, { x: 180, y: 490, duration: 1 }, { x: 270, y: 490, duration: 1 }
            ],
            lu3: [
            { x: 0, y: 0, duration: 1 }
            ],
            lu4: [
                { x: 0, y: 0, duration: 1 }, { x: 50, y: 0, duration: 1 }, { x: 100, y: 0, duration: 1 }, { x: 150, y: 0, duration: 1 },
                { x: 0, y: 40, duration: 1 }, { x: 50, y: 40, duration: 1 }, { x: 100, y: 40, duration: 1 }, { x: 150, y: 40, duration: 1 }
            ],
            lu5: [
                { x: 0, y: 0, duration: 34 }, { x: 40, y: 0, duration: 1 }, { x: 80, y: 0, duration: 1 }, { x: 120, y: 0, duration: 1 }, { x: 160, y: 0, duration: 1 },
                { x: 0, y: 35, duration: 1 }, { x: 40, y: 35, duration: 1 }, { x: 80, y: 35, duration: 1 }, { x: 120, y: 35, duration: 1 }, { x: 160, y: 35, duration: 1 },
                { x: 0, y: 70, duration: 1 }, { x: 40, y: 70, duration: 1 }, { x: 80, y: 70, duration: 1 }, { x: 120, y: 70, duration: 1 }, { x: 160, y: 70, duration: 1 },
                { x: 0, y: 105, duration: 1 }, { x: 40, y: 105, duration: 1 }, { x: 80, y: 105, duration: 1 }, { x: 120, y: 105, duration: 17 }
            ]
        }
    }
    return function (typeName, animName) {
        return frames[typeName][animName];
    }
})();
var getHeartFrames = (function () {
    var frames = {
        normal: {
            heart1: [
                { x: 0, y: 0, duration: 1 }, { x: 108, y: 0, duration: 1 },
                { x: 0, y: 49, duration: 1 }, { x: 108, y: 49, duration: 1 },
                { x: 0, y: 98, duration: 1 }, { x: 108, y: 98, duration: 1 },
                { x: 0, y: 147, duration: 1 },
                { x: 0, y: 0, duration: 1 }, { x: 108, y: 0, duration: 1 },
                { x: 0, y: 49, duration: 1 }, { x: 108, y: 49, duration: 1 },
                { x: 0, y: 98, duration: 1 }, { x: 108, y: 98, duration: 1 },
                { x: 0, y: 147, duration: 1 }
            ]
        }
    }
    return function (typeName, animName) {
        return frames[typeName][animName];
    }
})();
function getImageResouce() {
    return [{ id: 'pic1', src: 'css/img/bg.png' },
        { id: 'fangzi', src: 'css/img/fangzi.png' },
        { id: 'jiaotang', src: 'css/img/jiaotang.png' },
        { id: 'logo', src: 'css/img/logo.png' },
        { id: 'shu1', src: 'css/img/shu1.png' },
        { id: 'shu2', src: 'css/img/shu2.png' },
        { id: 'shu3', src: 'css/img/shu3.png' },
        { id: 'sousuo', src: 'css/img/sousuo.png' },
        { id: 'xuedui1', src: 'css/img/xuedui1.png' },
        { id: 'xuedui2', src: 'css/img/xuedui2.png' },
        { id: 'nan1', src: 'css/img/1nan0-2.4s.png' },
        { id: 'nan2', src: 'css/img/2nan.png' },
        { id: 'nan4', src: 'css/img/4nan.png' },
        { id: 'ball1', src: 'css/img/ball1.png' },
        { id: 'ball2', src: 'css/img/ball2.png' },
        { id: 'nv1', src: 'css/img/nv1.png' },
        { id: 'nv2', src: 'css/img/nv2.png' },
        { id: 'nv3', src: 'css/img/nv3.png' },
        { id: 'lu', src: 'css/img/lu.png' },
        { id: '2lu', src: 'css/img/2lu.png' },
        { id: '3lu', src: 'css/img/3lu.png' },
        { id: '4lu', src: 'css/img/4lu.png' },
        { id: '5lu', src: 'css/img/5lu.png' },
        { id: 'end', src: 'css/img/end.png' },
        { id: 'xinzuo', src: 'css/img/xinzuo.png' }

    ];
};
var $Canvas = {
    logoX: function () {
        return $(".logo").offset().left + $(".logo").width()
    },
    searchX: function () {
        return $(".g-search").offset().left + $(".g-search").width()
    },
    searchP: function () {
        return $(".g-search").offset().left;
    }
};
//球
(function () {
    var Ball = function (cfg) {
        this.game = null;
        this.name = '';
        this.count = 0;
        this.stateUpdate = my.fn;
        Ball.superclass.constructor.call(this, cfg);
    }
    my.inherit(Ball, my.Sprite);

    Ball.prototype.init = function () {
        this.width = 318;
        this.height = 69;
        this.setAnim("normal", "ball1", "ball2");
        this.stateUpdate = this.__stateUpdate;
        Ball.superclass.init.call(this);
    }
    Ball.prototype.update = function (deltaTime) {
        Ball.superclass.update.call(this, deltaTime);
        this.stateUpdate(deltaTime);
    }
    Ball.prototype.__stateUpdate = function (deltaTime) {
        var game = this.game;
        if (this.count == 1) {
            if (this.animName != 'ball2') {
                this.setAnim('normal', 'ball2', "ball2", false);
                this.animName = 'ball2';
            }
        }
        if (this.count == 2) {
            if (this.animName != 'ball1') {
                this.width = 9;
                this.height = 9;

                this.x = this.x + 318;
                this.y = this.y + 55;
                this.flipX = false;
                this.speedX = 0.3;
                this.speedY = 0;
                this.acceX = 0;
                this.acceY = 0;
                this.setAnim('normal', 'ball1', "ball1", true);
                this.animName = 'ball1';
            }
            if (this.scaleX <= 2) {
                this.scaleX += 0.01;
                this.scaleY += 0.01;
            }
            if (this.x > $Canvas.searchX() + 50) {
                this.speedX = 0;
                this.count = 3;
            }
        }
        this.parent.change();
    }
    Ball.prototype.setAnim = function (typeName, animName, picName, isloop, donplay) {
        var self = this;
        this.animName = animName;
        var anim = new my.Animation({
            image: my.ImageManager.get(picName),
            frames: getBallFrames(typeName, animName),
            loop: isloop
        });
        anim.init();
        anim.onend = function () {
            if (self.count == 1) {
                self.count = 2;
            }
        }
        if (!donplay) {
            anim.play();
        }
        this.anim = anim;
    }
    window.Ball = Ball;
})();
//鹿
(function () {
    var Deer = function (cfg) {
        this.game = null;
        this.name = '';
        this.count = 0;
        this.count1 = 0;
        this.stateUpdate = my.fn;
        Deer.superclass.constructor.call(this, cfg);
    }
    my.inherit(Deer, my.Sprite);
    Deer.prototype.init = function () {
        this.width = 31;
        this.height = 25;
        this.stateUpdate = this.__stateUpdate;
        Deer.superclass.init.call(this);
    }
    Deer.prototype.update = function (deltaTime) {
        Deer.superclass.update.call(this, deltaTime);
        this.stateUpdate(deltaTime);
    }
    Deer.prototype.__stateUpdate = function (deltaTime) {
        var game = this.game;
        if (this.count == 1) {
            if (this.animName != 'lu1') {
                this.flipX = false;
                this.speedX = 0;
                this.speedY = 0.2;
                this.acceX = 0;
                this.acceY = 0;
                this.setAnim('normal', "lu1", "lu");
                this.animName = 'lu1';
            }
            if (this.y > 70) {
                this.speedY = 0;
            }
        }
        if (this.count == 2) {
            if (this.animName != 'lu2') {
                this.width = 90;
                this.height = 70;
                this.y = this.y - 40;
                this.setAnim('normal', "lu2", "2lu");
                this.animName = 'lu2';
            }
        }
        if (this.count == 3) {
            if (this.animName != 'lu3') {
                this.width = 37;
                this.height = 28;
                this.y = this.y + 40;
                this.x = this.x + 55;
                this.speedY = -0.2;
                this.acceY = 1 / 4000;
                this.speedX = 0.5;
                this.setAnim('normal', "lu3", "3lu");
                this.animName = 'lu3';
            }
            if (this.x > $Canvas.searchX() - 20) {
                this.speedX = 0.08;
                this.acceY = 1 / 1000;
                if (this.y > 70) {
                    this.y = 70;
                    this.speedX = 0;
                    this.acceY = 0;
                    this.count == 4;
                }
                if (this.count1 == 0) {
                    this.count1 = 1;
                }
            } else
                if (this.x > $Canvas.searchP() && this.y > -5) {
                    this.count1 = 1;
                    this.speedY = 0;
                    this.acceY = 0;
                    this.speedX = 0.4;
                    game.heart.count = 1;
                }
        }
        if (this.count == 5) {
            if (this.animName != 'lu5') {
                this.width = 40;
                this.height = 35;
                this.speedY = 0.2;
                this.acceY = 0;
                this.speedX = 0;
                this.setAnim('normal', "lu5", "5lu");
                this.animName = 'lu5';
            }
            if (this.y > 60) {
                this.speedY = 0;
            }
        }
        this.parent.change();
    }
    Deer.prototype.setAnim = function (typeName, animName, picName, donplay) {
        this.animName = animName;
        var anim = new my.Animation({
            image: my.ImageManager.get(picName),
            frames: getDeerFrames(typeName, animName),
            loop: false
        });
        anim.init();
        if (!donplay) {
            anim.play();
        }
        this.anim = anim;
    }
    window.Deer = Deer;
})();
//爱心
(function () {
    var Heart = function (cfg) {
        this.game = null;
        this.name = '';
        this.count = 0;
        this.stateUpdate = my.fn;
        Heart.superclass.constructor.call(this, cfg);
    }
    my.inherit(Heart, my.Sprite);

    Heart.prototype.init = function () {
        this.width = 108;
        this.height = 49;
        //this.setAnim("normal", "heart1", "xinzuo", true);
        this.stateUpdate = this.__stateUpdate;
        Heart.superclass.init.call(this);
    }
    Heart.prototype.update = function (deltaTime) {
        Heart.superclass.update.call(this, deltaTime);
        this.stateUpdate(deltaTime);
    }
    Heart.prototype.__stateUpdate = function (deltaTime) {
        var game = this.game;
        if (this.count == 1) {
            if (this.animName != 'heart1') {
                this.setAnim("normal", "heart1", "xinzuo");
                this.animName = 'heart1';
            }
        }
        this.parent.change();
    }
    Heart.prototype.setAnim = function (typeName, animName, picName, isloop, donplay) {
        var self = this;
        this.animName = animName;
        var anim = new my.Animation({
            image: my.ImageManager.get(picName),
            frames: getHeartFrames(typeName, animName),
            loop: isloop
        });
        anim.init();
        anim.onend = function () {
            if (self.count == 1) {
                self.count = 2;
            }
        }
        if (!donplay) {
            anim.play();
        }
        this.anim = anim;
    }
    window.Heart = Heart;
})();
(function () {
    var snowWoman = function (cfg) {
        this.game = null;
        this.count = 0;
        this.stateUpdate = my.fn;
        snowWoman.superclass.constructor.call(this, cfg);
    }
    my.inherit(snowWoman, my.Sprite);
    snowWoman.prototype.init = function () {
        //初始化数据
        this.width = 77;
        this.height = 100;
        this.stateUpdate = this.__stateUpdate;
        snowWoman.superclass.init.call(this);
    }
    snowWoman.prototype.update = function (deltaTime) {
        snowWoman.superclass.update.call(this, deltaTime);
        this.stateUpdate(deltaTime);
    }
    snowWoman.prototype.__stateUpdate = function (deltaTime) {
        var game = this.game;
        if (this.count == 1) {
            if (this.animName != 'women1') {
                this.setAnim('normal', 'woman1', "nv1");
                this.animName = 'women1';
            }
        }
        if (this.count == 2) {
            if (this.animName != 'women2') {
                this.setAnim('normal', 'woman2', "nv2");
                this.animName = 'women2';
            }
        }
        if (this.count == 3) {
            if (this.animName != 'women3') {
                this.flipX = false;
                this.speedY = -0.6;
                this.acceY = 1 / 2000;
                this.speedX = -0.4;
                this.width = 63;
                this.height = 79;
                this.setAnim('normal', 'woman4', "nv3");
                this.animName = 'women3';
                game.deer.visible = false;
            }
            if (this.lastY < this.y && this.count == 3) {
                this.count = 4;
            }

        }
        if (this.count == 4) {
            if (this.x < $Canvas.searchP() && this.y > -40) {
                this.count = 5;
                this.speedY = 0;
                this.acceY = 0;
                this.speedX = 0;
            }
        }
        this.parent.change();
    }
    snowWoman.prototype.setAnim = function (typeName, animName, picName, donplay) {
        var self = this;
        this.animName = animName;
        var anim = new my.Animation({
            image: my.ImageManager.get(picName),
            frames: getWomanFrames(typeName, animName),
            loop: false
        });
        anim.init();
        anim.onend = function () {
            if (self.count == 2) {
                self.count = 3;
            }
        }
        if (!donplay) {
            anim.play();
        }
        this.anim = anim;
    }
    window.snowWoman = snowWoman;
})();
(function () {
    var snowMan = function (cfg) {
        this.game = null;
        this.count = 0;
        this.stateUpdate = my.fn;
        snowMan.superclass.constructor.call(this, cfg);
    }
    my.inherit(snowMan, my.Sprite);
    snowMan.prototype.init = function () {
        this.width = 58;
        this.height = 64;
        this.stateUpdate = this.__stateUpdate;
        snowMan.superclass.init.call(this);
    }
    snowMan.prototype.update = function (deltaTime) {
        snowMan.superclass.update.call(this, deltaTime);
        this.stateUpdate(deltaTime);
    }
    snowMan.prototype.__stateUpdate = function (deltaTime) {
        var game = this.game;
        if (this.count == 0) {
            if (this.animName != 'man1') {
                this.setAnim('normal', 'man1', "nan1");
                this.animName = 'man1';
            }
        }
        if (this.count == 1) {
            if (this.animName != 'man2') {
                this.width = 213;
                this.height = 116;
                this.y = -16;
                this.x = this.x - 63;
                this.setAnim('normal', 'man2', 'nan2');
                this.animName = 'man2';
            }
        }
        if (this.count == 2) {
            if (this.animName != 'man3') {
                this.setAnim('normal', 'man3', 'nan2');
                this.animName = 'man3';
            }
        }
        if (this.count == 3) {
            if (this.animName != 'man4') {
                this.width = 72;
                this.height = 90;
                this.x = this.x + 45;
                this.y = this.y + 25;
                this.setAnim('normal', 'man4', 'nan4');
                this.animName = 'man4';
            }
        }
        if (this.count == 4) {
            if (this.animName != 'end') {
                this.width = 127;
                this.height = 111;
                this.y = this.y - 20;
                this.setAnim('normal', 'end', 'end');
                this.animName = 'end';
            }
        }
        game.controller();
        this.parent.change();
    }
    snowMan.prototype.setAnim = function (typeName, animName, picName, donplay) {
        var self = this;
        this.animName = animName;
        var anim = new my.Animation({
            image: my.ImageManager.get(picName),
            frames: getManFrames(typeName, animName),
            loop: false
        });
        anim.init();
        anim.onend = function () {
            if (self.count == 0) {
                self.count = 1;
            }
        }
        if (!donplay) {
            anim.play();
        }
        this.anim = anim;
    }
    window.snowMan = snowMan;
})();
(function () {
    var myGame = function (cfg) {
        this.viewport = null;

        this.snowman = null;
        this.ball = null;
        this.snowoman = null;
        this.deer = null;
        this.heart = null;

        this.bgLayer = null;
        this.scenLayer = null;
        this.snowLayer = null;

        this.viewportWH = [window.innerWidth, 100];

        myGame.superclass.constructor.call(this, cfg);
    }
    my.inherit(myGame, my.Game);
    myGame.prototype.__createCanvas = function () {
        var viewport = new my.Viewport({
            width: this.viewportWH[0],
            height: this.viewportWH[1]
        });
        var bgLayer = new my.Layer({
            viewport: viewport
        });
        bgLayer.setCanvas('wqt14033254_canvas_bg');
        this.appendChild(bgLayer);

        var scenLayer = new my.Layer({
            viewport: viewport
        });
        scenLayer.setCanvas('wqt14033254_canvas_spirit');
        this.appendChild(scenLayer);

        var snowLayer = new my.Layer({
            viewport: viewport
        });
        snowLayer.setCanvas('wqt14033254_canvas_snow');
        this.appendChild(snowLayer);

        this.bgLayer = bgLayer;
        this.scenLayer = scenLayer;
        this.snowLayer = snowLayer;
        this.viewport = viewport;
    };
    myGame.prototype.__createSence = function () {
        var bg = new my.Bitmap({
            image: my.ImageManager.get("pic1"),
            width: this.viewportWH[0],
            height: this.viewportWH[1],
            repeat: true,
            direction: 1,
            y: 80
        });
        this.bgLayer.appendChild(bg);
    };
    myGame.prototype.__createShowman = function () {
        var snowman = new snowMan({
            x: $Canvas.logoX() + 14,
            y: 25
        });
        snowman.game = this;
        this.snowman = snowman;
        this.snowLayer.appendChild(snowman);

        var ball = new Ball({
            x: snowman.x - 55, y: 30
        });
        ball.game = this;
        this.ball = ball;
        this.snowLayer.appendChild(ball);

        var snowoman = new snowWoman({
            x: $Canvas.searchX() + 30,
            y: snowman.y - 25
        });
        snowoman.game = this;
        this.snowoman = snowoman;
        this.snowLayer.appendChild(snowoman);

        var deer = new Deer({
            x: snowman.x - 100, y: 0
        });
        deer.game = this;
        this.deer = deer;
        this.snowLayer.appendChild(deer);

        var heart = new Heart({
            x: snowman.x + 70, y: 0
        });
        heart.game = this;
        this.heart = heart;
        this.snowLayer.appendChild(heart);

    }
    myGame.prototype.init = function () {
        this.__createCanvas();
        this.__createSence();
        this.__createShowman();
        myGame.superclass.init.call(this);
    };
    myGame.prototype.stateInit = function () {
        this.bgLayer.change();
        this.scenLayer.change();
    }
    myGame.prototype.controller = function () {
        if (this.snowman.animName == "man2") {
            var _curframe = this.snowman.anim.currentFrameIndex;
            console.log(_curframe);
            if (_curframe == 20) {
                if (this.ball) {
                    this.ball.count = 1;
                }
            }
            if (_curframe == 3) {
                if (this.deer) {
                    this.deer.count = 1;
                }
            }
        }
        if (this.snowman.animName == "man3") {
            var _curframe = this.snowman.anim.currentFrameIndex;
            if (_curframe == 22) {
                if (this.deer) {
                    this.deer.count = 2;
                }
            }
            if (_curframe == 54) {
                if (this.deer) {
                    this.deer.count = 3;
                }
            }
        }
        if (this.snowman.animName == "end") {
            var _curframe = this.snowman.anim.currentFrameIndex;
            if (_curframe == 25) {
                if (this.deer) {
                    this.deer.visible = true;
                    this.deer.x = this.snowman.x + 127;
                    this.deer.y = 10;
                    this.deer.count = 5;
                }
            }
        }
        if (this.deer.animName == "lu3") {
            if (this.deer.count1 == 1 && this.deer.count == 3 && this.snowoman) {
                this.deer.count1 = 2;
                this.snowoman.count = 2;
            }
        }
        if (this.snowoman.animName == "women3") {
            if (this.snowoman.count == 4) {
                this.snowman.count = 3;
            }
            if (this.snowoman.count == 5) {
                this.snowoman.visible = false;
                this.snowman.count = 4;
            }

        }
        if (this.ball.count == 3 && this.snowoman) {
            this.ball.count = 4;
            this.snowoman.count = 1;
            this.snowman.count = 2;
            this.ball.destory();
        }

    }
    window.myGame = myGame;
})();
(function () {
    var imageResources = getImageResouce();
    my.ImageManager.load(imageResources, loadImageCallback);
    function loadImageCallback(index) {
        my.DOM.get("wqt14033254_lbLoad").innerHTML = index / imageResources.length * 100;
        if (index < imageResources.length) {
        } else {
            init();
        }
    }
    function init() {
        my.DOM.get("wqt14033254_canvas_bg").width = window.innerWidth;
        my.DOM.get("wqt14033254_canvas_spirit").width = window.innerWidth;
        my.DOM.get("wqt14033254_canvas_snow").width = window.innerWidth;
        var mygame = new myGame();
        mygame.setFPS(24);
        mygame.init();
        mygame.stateInit();
        mygame.start();
    }
})();