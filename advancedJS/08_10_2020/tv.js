var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tv = /** @class */ (function () {
    function Tv(status, brand, inches, price, tvType) {
        this.OnOFF = status;
        this.brand = brand;
        this.price = price;
        this.inches = inches;
        this.channel = 1;
        this.volume = 50;
        document.getElementById("displayTV").innerHTML = "";
        var displayTv = document.getElementById("displayTV");
        var tvDiv = document.createElement("div");
        tvDiv.setAttribute("class", "col-lg-10");
        tvDiv.id = "tv";
        // var tvVid = document.createElement('video');
        // tvVid.width = 1060;
        // tvVid.height = 610;
        // tvVid.autoplay = true;
        // var tvVidSource = document.createElement('source');
        // tvVidSource.type = 'video/mp4';
        // tvVidSource.src = 'images/video.mp4';
        // tvVid.appendChild(tvVidSource);
        // tvDiv.appendChild(tvVid);
        var tvImage = document.createElement("img");
        tvImage.setAttribute("class", "img-fluid mainImg");
        if (tvType == "LED") {
            tvImage.src = "/images/led.jpg";
            tvImage.alt = "LED Tv";
        }
        else if (tvType == "PLASMA") {
            tvImage.src = "/images/plasma.png";
            tvImage.alt = "Plasma Tv";
        }
        else {
            tvImage.src = "/images/base.png";
            tvImage.alt = "Base Tv";
        }
        tvDiv.appendChild(tvImage);
        var remoteDiv = document.createElement("div");
        remoteDiv.setAttribute("class", "col-lg-2");
        remoteDiv.id = "remote";
        var remoteImg = document.createElement("img");
        remoteImg.setAttribute("class", "img-fluid remoteImg");
        remoteImg.alt = "remote";
        remoteImg.useMap = "#image_map";
        remoteImg.src = "/images/remote2.jpg";
        var remoteMap = document.createElement("map");
        remoteMap.name = "image_map";
        var startstopArea = document.createElement("area");
        startstopArea.alt = "Switch On/Off";
        startstopArea.href = "#";
        startstopArea.coords = "60,38,12";
        startstopArea.shape = "circle";
        startstopArea.onclick = this.startStopTv();
        var volumeUpArea = document.createElement("area");
        volumeUpArea.alt = "Volume Up";
        volumeUpArea.href = "#";
        volumeUpArea.coords = "82,87,12";
        volumeUpArea.shape = "circle";
        volumeUpArea.onclick = this.increaseVolume();
        var volumeDownArea = document.createElement("area");
        volumeDownArea.alt = "Volume down";
        volumeDownArea.href = "#";
        volumeDownArea.coords = "82,146,12";
        volumeDownArea.shape = "circle";
        volumeDownArea.onclick = this.decreaseVolume();
        var nextChannelArea = document.createElement("area");
        nextChannelArea.alt = "next channel";
        nextChannelArea.href = "#";
        nextChannelArea.coords = "115,118,12";
        nextChannelArea.shape = "circle";
        nextChannelArea.onclick = this.nextChannel();
        var previousChannelArea = document.createElement("area");
        previousChannelArea.alt = "Previous channel";
        previousChannelArea.href = "#";
        previousChannelArea.coords = "48,115,12";
        previousChannelArea.shape = "circle";
        previousChannelArea.onclick = this.previousChannel();
        var resetArea = document.createElement("area");
        resetArea.alt = "Reset";
        resetArea.href = "#";
        resetArea.coords = "106,60,13";
        resetArea.shape = "circle";
        resetArea.onclick = this.reset();
        remoteMap.append(startstopArea, volumeUpArea, volumeDownArea, nextChannelArea, previousChannelArea, resetArea);
        remoteDiv.append(remoteImg, remoteMap);
        displayTv.append(tvDiv, remoteDiv);
    }
    Tv.prototype.startStopTv = function () {
        var _this = this;
        return function () {
            if (_this.OnOFF == "ON") {
                _this.OnOFF = "OFF";
                console.log("TV Switched OFF : " + _this.OnOFF);
            }
            else {
                _this.OnOFF = "ON";
                console.log("TV Switched ON : " + _this.OnOFF);
            }
        };
    };
    Tv.prototype.increaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume < 100) {
                _this.volume = _this.volume + 1;
                console.log("Volume Increased: " + _this.volume);
            }
        };
    };
    Tv.prototype.decreaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume > 0) {
                _this.volume = _this.volume - 1;
            }
            console.log("Volume Decreased: " + _this.volume);
        };
    };
    Tv.prototype.nextChannel = function () {
        var _this = this;
        return function () {
            if (_this.channel < 50) {
                _this.channel = _this.channel + 1;
            }
            console.log("Next channel: " + _this.channel);
        };
    };
    Tv.prototype.previousChannel = function () {
        var _this = this;
        return function () {
            if (_this.channel > 1) {
                _this.channel = _this.channel - 1;
            }
            console.log("Previous channel: " + _this.channel);
        };
    };
    Tv.prototype.reset = function () {
        var _this = this;
        return function () {
            _this.channel = 1;
            _this.volume = 50;
            console.log("Reset channel: " + _this.channel + " and rest Volume: " + _this.volume);
        };
    };
    Tv.prototype.status = function () {
        return this.brand + " at channel " + this.channel + ", volume " + this.volume;
    };
    return Tv;
}());
var LedTV = /** @class */ (function (_super) {
    __extends(LedTV, _super);
    function LedTV(status, brand, inches, price, screenthickness, energyUsage, lifespan, refreshRate, viewingAngle, backlight, displayDetails) {
        var _this = this;
        var tvType = "LED";
        _this = _super.call(this, status, brand, inches, price, tvType) || this;
        _this.screenthickness = screenthickness;
        _this.energyUsage = energyUsage;
        _this.lifespan = lifespan;
        _this.refreshRate = refreshRate;
        _this.viewingAngle = viewingAngle;
        _this.backlight = backlight;
        _this.displayDetails = displayDetails;
        return _this;
    }
    return LedTV;
}(Tv));
var PlasmaTV = /** @class */ (function (_super) {
    __extends(PlasmaTV, _super);
    function PlasmaTV(status, brand, inches, price, screenthickness, energyUsage, lifespan, refreshRate, viewingAngle, backlight, displayDetails) {
        var _this = this;
        var tvType = "PLASMA";
        _this = _super.call(this, status, brand, inches, price, tvType) || this;
        _this.screenthickness = screenthickness;
        _this.energyUsage = energyUsage;
        _this.lifespan = lifespan;
        _this.refreshRate = refreshRate;
        _this.viewingAngle = viewingAngle;
        _this.backlight = backlight;
        _this.displayDetails = displayDetails;
        return _this;
    }
    return PlasmaTV;
}(Tv));
var BaseTV = /** @class */ (function (_super) {
    __extends(BaseTV, _super);
    function BaseTV(status, brand, inches, price) {
        var _this = this;
        var tvType = "BASE";
        _this = _super.call(this, status, brand, inches, price, tvType) || this;
        return _this;
    }
    return BaseTV;
}(Tv));
var showTV = function (tvType) {
    switch (tvType) {
        case "base":
            new BaseTV("ON", "Samsung", 36, 28000);
            break;
        case "plasma":
            new PlasmaTV("ON", "LG", 36, 28000, "4cm", "250W", "10 years", "60 Hz", "178", "RGB", "fantastic Plasma display");
            break;
        case "led":
            new LedTV("ON", "Oneplus", 36, 28000, "3cm", "280W", "6 years", "120 Hz", "178", "RGB", "fantastic LED display");
            break;
        default:
            console.log("Somaething Went wrong");
            break;
    }
};
