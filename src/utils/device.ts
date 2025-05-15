/**
 * Utilitário para detecção de dispositivos e navegadores
 */

/**
 * Verifica se o dispositivo atual é um dispositivo móvel
 * baseado no user agent e na largura da tela
 */
export const isMobileDevice = (): boolean => {
  // Verificação baseada no userAgent (mais comum e confiável)
  const userAgentCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(
    navigator.userAgent
  );
  
  // Verificação baseada no tamanho da tela (mais precisa para responsividade)
  const screenSizeCheck = window.innerWidth < 768;
  
  // Verificação baseada em características de touch
  const touchCheck = 'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 || 
    (navigator as any).msMaxTouchPoints > 0;
  
  // Verificação adicional para iPad/Tablet
  const isTablet = /iPad|Tablet/i.test(navigator.userAgent) || 
                  (window.innerWidth >= 600 && window.innerWidth < 1024);
  
  // Debugging para ajudar na solução de problemas
  if (import.meta.env.DEV) {
    console.debug(`Detecção de dispositivo:
      - UserAgent indica mobile/tablet: ${userAgentCheck}
      - Tamanho de tela mobile: ${screenSizeCheck} (${window.innerWidth}px)
      - Suporta touch: ${touchCheck}
      - É tablet: ${isTablet}
    `);
  }
  
  // Combinar verificações para maior precisão
  // Para navegação, consideramos tablets também como mobile
  return userAgentCheck || isTablet || (screenSizeCheck && touchCheck);
};

/**
 * Verifica se estamos em um dispositivo iOS (iPhone/iPad)
 */
export const isIOSDevice = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
};

/**
 * Verifica se estamos no Safari
 */
export const isSafariBrowser = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1;
};

/**
 * Obtém o tipo de dispositivo para ajustes específicos
 */
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (window.innerWidth < 768) return 'mobile';
  if (window.innerWidth < 1024) return 'tablet';
  return 'desktop';
};
