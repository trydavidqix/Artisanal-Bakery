export const useSmoothScroll = () => {
  const scrollToSection = (sectionId: string, callback?: () => void): void => {
    const element = document.getElementById(sectionId);
      if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
        if (callback) {
        const distance = Math.abs(window.pageYOffset - offsetPosition);
        const scrollTime = Math.min(Math.max(distance / 4, 300), 1000);
        
        setTimeout(callback, scrollTime);
      }
    }
  };

  return { scrollToSection };
};
