import { isMobileDevice } from '../utils/device';

export const useSmoothScroll = () => {
  // Flag para evitar rolagens simultâneas (usando uma variável de referência)
  let isScrolling = false;
  
  // Timeout de segurança para liberar a flag caso algo dê errado
  let safetyTimeout: ReturnType<typeof setTimeout> | null = null;

  const scrollToSection = (sectionId: string, callback?: () => void): void => {
    // Se já está rolando, não inicie uma nova rolagem
    if (isScrolling) {
      return;
    }

    try {
      // Ativa a flag para evitar rolagens simultâneas
      isScrolling = true;
      
      // Configurar timeout de segurança (liberar flag após 1s caso algo dê errado)
      if (safetyTimeout) clearTimeout(safetyTimeout);
      safetyTimeout = setTimeout(() => {
        isScrolling = false;
      }, 1000);
      
      // Buscar o elemento pelo ID
      let element: HTMLElement | null = document.getElementById(sectionId);
      
      // Verificação adicional se não encontrou pelo ID
      if (!element) {
        const alternatives = [
          document.querySelector(`section[id="${sectionId}"]`),
          document.querySelector(`[data-section="${sectionId}"]`),
          document.querySelector(`[data-id="${sectionId}"]`),
          document.querySelector(`.section-${sectionId}`)
        ];
        
        const foundElement = alternatives.find(el => el !== null);
        element = foundElement ? foundElement as HTMLElement : null;
      }
      
      if (element) {
        // Detecta o tipo de dispositivo para ajustes específicos
        const isMobile = isMobileDevice();
        
        // Offset para considerar o cabeçalho fixo
        const headerOffset = isMobile ? 60 : 80;
        
        // Calcular posição do elemento
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.scrollY;
        const scrollTarget = absoluteElementTop - headerOffset;        // Usar abordagem mais suave com scrollTo e liberar flag rapidamente
        window.scrollTo({
          top: scrollTarget,
          behavior: "smooth"
        });
        
        // Limpar o timeout de segurança
        if (safetyTimeout) {
          clearTimeout(safetyTimeout);
          safetyTimeout = null;
        }
        
        // Executar o callback quase imediatamente para melhorar a responsividade da UI
        if (callback) {
          // Pequeno timeout para permitir que a rolagem comece primeiro
          setTimeout(callback, 50);
        }
        
        // Libera a flag rapidamente para permitir interações durante a rolagem
        setTimeout(() => {
          isScrolling = false;
        }, 100);} else {
        // Se o elemento não for encontrado, libere a flag e chame o callback
        if (callback) {
          callback();
        }
        isScrolling = false;
      }
    } catch (error) {
      // Em caso de erro, garantir que a flag seja liberada
      if (callback) callback();
      isScrolling = false;
    }
  };
  // Função para verificar se os elementos alvo existem (para debug)
  const checkTargetElements = (): void => {
    const navItems = [
      "home", "about", "products", "testimonials", "contact"
    ];
    
    navItems.forEach(id => {
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`Elemento #${id} não encontrado no DOM`);
      }
    });
  };

  return { scrollToSection, checkTargetElements };
};
