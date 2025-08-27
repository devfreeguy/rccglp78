export const trackAssetsLoading = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    // Already loaded
    if (document.readyState === "complete") {
      resolve();
      return;
    }

    // Wait for load event
    window.addEventListener(
      "load",
      () => {
        resolve();
      },
      { once: true }
    );
  });
};

export const trackImagesLoading = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    const images: HTMLImageElement[] = Array.from(document.images);
    let loaded = 0;

    if (images.length === 0) {
      resolve();
      return;
    }

    const checkDone = () => {
      loaded++;
      if (loaded === images.length) {
        resolve();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkDone();
      } else {
        img.addEventListener("load", checkDone);
        img.addEventListener("error", checkDone);
      }
    });
  });
};
