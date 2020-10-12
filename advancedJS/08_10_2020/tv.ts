type tvStatus = "ON" | "OFF";

class Tv {
  brand: string;
  channel: number;
  price: number;
  inches: number;
  OnOFF: tvStatus;
  volume: number;

  constructor(
    status: tvStatus,
    brand: string,
    inches: number,
    price: number,
    tvType: string
  ) {
    this.OnOFF = status;
    this.brand = brand;
    this.price = price;
    this.inches = inches;
    this.channel = 1;
    this.volume = 50;

    (<HTMLDivElement>document.getElementById("displayTV")).innerHTML = "";
    let displayTv = document.getElementById("displayTV");

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
    } else if (tvType == "PLASMA") {
      tvImage.src = "/images/plasma.png";
      tvImage.alt = "Plasma Tv";
    } else {
      tvImage.src = "/images/base.png";
      tvImage.alt = "Base Tv";
    }

    tvDiv.appendChild(tvImage);

    let remoteDiv = document.createElement("div");
    remoteDiv.setAttribute("class", "col-lg-2");
    remoteDiv.id = "remote";

    let remoteImg = document.createElement("img");
    remoteImg.setAttribute("class", "img-fluid remoteImg");
    remoteImg.alt = "remote";
    remoteImg.useMap = "#image_map";
    remoteImg.src = "/images/remote2.jpg";

    let remoteMap = document.createElement("map");
    remoteMap.name = "image_map";

    let startstopArea = document.createElement("area");
    startstopArea.alt = "Switch On/Off";
    startstopArea.href = "#";
    startstopArea.coords = "60,38,12";
    startstopArea.shape = "circle";
    startstopArea.onclick = this.startStopTv();

    let volumeUpArea = document.createElement("area");
    volumeUpArea.alt = "Volume Up";
    volumeUpArea.href = "#";
    volumeUpArea.coords = "82,87,12";
    volumeUpArea.shape = "circle";
    volumeUpArea.onclick = this.increaseVolume();

    let volumeDownArea = document.createElement("area");
    volumeDownArea.alt = "Volume down";
    volumeDownArea.href = "#";
    volumeDownArea.coords = "82,146,12";
    volumeDownArea.shape = "circle";
    volumeDownArea.onclick = this.decreaseVolume();

    let nextChannelArea = document.createElement("area");
    nextChannelArea.alt = "next channel";
    nextChannelArea.href = "#";
    nextChannelArea.coords = "115,118,12";
    nextChannelArea.shape = "circle";
    nextChannelArea.onclick = this.nextChannel();

    let previousChannelArea = document.createElement("area");
    previousChannelArea.alt = "Previous channel";
    previousChannelArea.href = "#";
    previousChannelArea.coords = "48,115,12";
    previousChannelArea.shape = "circle";
    previousChannelArea.onclick = this.previousChannel();

    let resetArea = document.createElement("area");
    resetArea.alt = "Reset";
    resetArea.href = "#";
    resetArea.coords = "106,60,13";
    resetArea.shape = "circle";
    resetArea.onclick = this.reset();

    remoteMap.append(
      startstopArea,
      volumeUpArea,
      volumeDownArea,
      nextChannelArea,
      previousChannelArea,
      resetArea
    );
    remoteDiv.append(remoteImg, remoteMap);
    displayTv.append(tvDiv, remoteDiv);
  }

  startStopTv(): () => void {
    return () => {
      if (this.OnOFF == "ON") {
        this.OnOFF = "OFF";
        console.log(`TV Switched OFF : ${this.OnOFF}`);
      } else {
        this.OnOFF = "ON";
        console.log(`TV Switched ON : ${this.OnOFF}`);
      }
    };
  }

  increaseVolume(): () => void {
    return () => {
      if (this.volume < 100) {
        this.volume = this.volume + 1;
        console.log(`Volume Increased: ${this.volume}`);
      }
    };
  }

  decreaseVolume(): () => void {
    return () => {
      if (this.volume > 0) {
        this.volume = this.volume - 1;
      }
      console.log(`Volume Decreased: ${this.volume}`);
    };
  }

  nextChannel(): () => void {
    return () => {
      if (this.channel < 50) {
        this.channel = this.channel + 1;
      }

      console.log(`Next channel: ${this.channel}`);
    };
  }

  previousChannel(): () => void {
    return () => {
      if (this.channel > 1) {
        this.channel = this.channel - 1;
      }

      console.log(`Previous channel: ${this.channel}`);
    };
  }

  reset(): () => void {
    return () => {
      this.channel = 1;
      this.volume = 50;

      console.log(
        `Reset channel: ${this.channel} and rest Volume: ${this.volume}`
      );
    };
  }

  status() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

class LedTV extends Tv {
  screenthickness: string;
  energyUsage: string;
  lifespan: string;
  refreshRate: string;
  viewingAngle: string;
  backlight: string;
  displayDetails: string;

  constructor(
    status: tvStatus,
    brand: string,
    inches: number,
    price: number,
    screenthickness: string,
    energyUsage: string,
    lifespan: string,
    refreshRate: string,
    viewingAngle: string,
    backlight: string,
    displayDetails: string
  ) {
    let tvType = "LED";
    super(status, brand, inches, price, tvType);
    this.screenthickness = screenthickness;
    this.energyUsage = energyUsage;
    this.lifespan = lifespan;
    this.refreshRate = refreshRate;
    this.viewingAngle = viewingAngle;
    this.backlight = backlight;
    this.displayDetails = displayDetails;
  }
}

class PlasmaTV extends Tv {
  screenthickness: string;
  energyUsage: string;
  lifespan: string;
  refreshRate: string;
  viewingAngle: string;
  backlight: string;
  displayDetails: string;

  constructor(
    status: tvStatus,
    brand: string,
    inches: number,
    price: number,
    screenthickness: string,
    energyUsage: string,
    lifespan: string,
    refreshRate: string,
    viewingAngle: string,
    backlight: string,
    displayDetails: string
  ) {
    let tvType = "PLASMA";
    super(status, brand, inches, price, tvType);
    this.screenthickness = screenthickness;
    this.energyUsage = energyUsage;
    this.lifespan = lifespan;
    this.refreshRate = refreshRate;
    this.viewingAngle = viewingAngle;
    this.backlight = backlight;
    this.displayDetails = displayDetails;
  }
}

class BaseTV extends Tv {
  constructor(status: tvStatus, brand: string, inches: number, price: number) {
    let tvType = "BASE";
    super(status, brand, inches, price, tvType);
  }
}

let showTV = (tvType) => {
  switch (tvType) {
    case "base":
      new BaseTV("ON", "Samsung", 36, 28000);
      break;

    case "plasma":
      new PlasmaTV(
        "ON",
        "LG",
        36,
        28000,
        "4cm",
        "250W",
        "10 years",
        "60 Hz",
        "178",
        "RGB",
        "fantastic Plasma display"
      );
      break;

    case "led":
      new LedTV(
        "ON",
        "Oneplus",
        36,
        28000,
        "3cm",
        "280W",
        "6 years",
        "120 Hz",
        "178",
        "RGB",
        "fantastic LED display"
      );
      break;

    default:
      console.log("Somaething Went wrong");
      break;
  }
};
