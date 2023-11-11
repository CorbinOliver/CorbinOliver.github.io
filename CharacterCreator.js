import html2canvas from 'html2canvas';
screenshot() {
    // Select the element that you want to capture
    const captureElement = document.querySelector(".menu-box-container.picker");
  
    // Call the html2canvas function and pass the element as an argument
    html2canvas(captureElement).then((canvas) => {
      // Get the image data as a base64-encoded string
      const imageData = canvas.toDataURL("image/png");
  
      // Do something with the image data, such as saving it as a file or sending it to a server
      // For example, you can create an anchor element and trigger a download action
      const link = document.createElement("a");
      link.setAttribute("download", "screenshot.png");
      link.setAttribute("href", imageData);
      link.click();
    });
}