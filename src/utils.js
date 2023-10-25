
// set bg based on screen width 
export const selectBg = (screenWidth, tabSelected) => {
    if (screenWidth > 996) {
      const bgImage = `background-${tabSelected}-desktop.jpg`;
      return bgImage;
    } else if (screenWidth >= 768 && screenWidth < 997) {
      const bgImage = `background-${tabSelected}-tablet.jpg`;
      return bgImage;
    }
  }