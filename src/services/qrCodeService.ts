import axios from "axios";

class QRCodeService {
  private apiUrl = "https://qrcode-monkey.p.rapidapi.com/qr/custom";
  private apiKey = "fded4e9526msh66fa0c9c1d3195bp1e2320jsn567f2f25b737"; // Replace with your actual API key

  async generateQRCode(data: string): Promise<Buffer> {
    const options = {
      method: "POST",
      url: this.apiUrl,
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": "qrcode-monkey.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        data,
        config: {
          body: "rounded-pointed",
          eye: "frame14",
          eyeBall: "ball16",
          erf1: [],
          erf2: ["fh"],
          erf3: ["fv"],
          brf1: [],
          brf2: ["fh"],
          brf3: ["fv"],
          bodyColor: "#5C8B29",
          bgColor: "#FFFFFF",
          eye1Color: "#3F6B2B",
          eye2Color: "#3F6B2B",
          eye3Color: "#3F6B2B",
          eyeBall1Color: "#60A541",
          eyeBall2Color: "#60A541",
          eyeBall3Color: "#60A541",
          gradientColor1: "#5C8B29",
          gradientColor2: "#25492F",
          gradientType: "radial",
          gradientOnEyes: false,
          logo: "",
        },
        size: 300,
        download: false,
        file: "png",
      },
      responseType: "arraybuffer",
    };

    try {
      const response = await axios.request(options as any);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to generate QR code: ${error.message}`);
    }
  }
}

export default new QRCodeService();
