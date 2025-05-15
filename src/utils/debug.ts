// Utilidade para debug de elementos no DOM
import { useSmoothScroll } from "../hooks/useSmoothScroll";

/**
 * Verifica se todos os IDs de seção existem no documento
 * Útil para depurar problemas de navegação suave
 */
export const checkSectionIds = () => {
  const navItems = [
    { name: "Home", section: "home" },
    { name: "Nossa História", section: "about" },
    { name: "Produtos", section: "products" },
    { name: "Depoimentos", section: "testimonials" },
    { name: "Contato", section: "contact" },
  ];

  console.log("--- VERIFICAÇÃO DE IDs DE SEÇÃO ---");
  let allSectionsExist = true;

  navItems.forEach((item) => {
    const element = document.getElementById(item.section);
    const exists = element !== null;
    console.log(`Seção '${item.section}' (${item.name}): ${exists ? "ENCONTRADA ✓" : "NÃO ENCONTRADA ✗"}`);
    
    if (element) {
      // Verifica se a seção está visível e tem dimensões
      const rect = element.getBoundingClientRect();
      const hasSize = rect.width > 0 && rect.height > 0;
      console.log(`  - Dimensões: ${Math.round(rect.width)}x${Math.round(rect.height)} (${hasSize ? "OK" : "PROBLEMA"})`);
      
      // Destaca temporariamente para visualização
      const originalBorder = element.style.border;
      element.style.border = "2px solid rgba(255, 0, 0, 0.5)";
      element.style.position = "relative";
      
      setTimeout(() => {
        element.style.border = originalBorder;
      }, 3000);
    }
    
    if (!exists) allSectionsExist = false;
  });

  if (!allSectionsExist) {
    console.error("⚠️ Algumas seções não foram encontradas no documento!");
    console.log("Verifique se todos os elementos têm os IDs corretos em seus componentes.");
  } else {
    console.log("✅ Todas as seções foram encontradas no documento");
  }
  
  return allSectionsExist;
};

/**
 * Verifica se todos os links de navegação estão funcionando
 */
export const checkNavLinks = () => {
  console.log("--- VERIFICAÇÃO DE LINKS DE NAVEGAÇÃO ---");
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      console.log(`Link para #${targetId}: ${targetElement ? "VÁLIDO ✓" : "INVÁLIDO ✗"}`);
    }
  });
};

/**
 * Testa a navegação para uma seção específica
 */
export const testScrollToSection = (sectionId: string) => {
  const { scrollToSection } = useSmoothScroll();
  console.log(`Testando navegação para #${sectionId}...`);
  scrollToSection(sectionId, () => {
    console.log(`Navegação para #${sectionId} concluída`);
  });
};

/**
 * Função para iniciar a verificação de debug
 */
export const initDebug = () => {
  // Aguarde a renderização completa antes de verificar
  setTimeout(() => {
    console.log("=== INICIANDO VERIFICAÇÕES DE DEBUG ===");
    checkSectionIds();
    checkNavLinks();
    console.log("=======================================");
    
    // Adicionar listener global para debugging de cliques
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        console.log(`🔍 DEBUG: Link clicado: ${target.getAttribute('href')}`);
      }
    });
    
    console.log("Debug ativado! Use window.testNav('sectionId') para testar a navegação manualmente.");
    
    // Adicionar função global para teste manual
    (window as any).testNav = (id: string) => testScrollToSection(id);
  }, 1000);
};
