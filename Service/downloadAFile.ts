const getFileName = (_id: string) => _id.split("images/")[1];
const downloadAFile = (_id: string) => {
  fetch(_id, {
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
      link.setAttribute("download", getFileName(_id));

      // Append to html link element page
      document.body.appendChild(link);

      // Start download
      link.click();

      // Clean up and remove the link
      link?.parentNode?.removeChild(link);
    });
};

export default downloadAFile;
