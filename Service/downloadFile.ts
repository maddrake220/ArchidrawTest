import JSZip from "jszip";
import { saveAs } from "file-saver";

const getFileName = (_id: string) => {
  const array = _id.split("/");
  return array[array.length - 1];
};

async function asyncurlToPromise(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application",
    },
  });
  return await response.blob();
}

const downloadFile = (params: string | string[] | null) => {
  if (null) return;
  if (typeof params === "string") {
    fetch(params, {
      method: "GET",
      headers: {
        "Content-Type": "application",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", getFileName(params));

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link?.parentNode?.removeChild(link);
      });
  } else if (Array.isArray(params)) {
    var zip = new JSZip();
    for (let p of params) {
      zip.file(getFileName(p), asyncurlToPromise(p), { binary: true });
    }

    zip.generateAsync({ type: "blob" }).then(function callback(blob) {
      // see FileSaver.js
      saveAs(blob, "download.zip");
    });
  }
};

export default downloadFile;
