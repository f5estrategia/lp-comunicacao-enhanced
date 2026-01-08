/**
 * Vanilla TypeScript Accordion Component
 * Lightweight alternative to Radix UI Accordion (~800 bytes minified)
 */

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Para quem é esse programa?",
    answer: "Para executivos, empresários, líderes e profissionais que querem usar a comunicação como ferramenta de resultados. Não é curso para 'falar bonito' - é para gerar resultados."
  },
  {
    question: "Preciso ter experiência com oratória?",
    answer: "Não. O programa foi desenhado para quem nunca fez curso de comunicação e também para quem já fez vários e não viu resultado. Começamos do zero e vamos até técnicas avançadas."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "Acesso por 1 ano. Você pode assistir quantas vezes quiser, no seu ritmo, durante esse período."
  },
  {
    question: "Serve para comunicação digital também?",
    answer: "Sim. O Módulo 5 é dedicado a comunicação em câmera, lives, reuniões virtuais e gravação de conteúdo."
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Se não for para você, devolvemos 100% do valor. Sem perguntas."
  },
  {
    question: "Emite certificado?",
    answer: "Sim. Todos recebem certificado profissional de conclusão."
  }
];

export function initAccordion(): void {
  const container = document.querySelector('.faq-accordion');
  if (!container) return;

  // Render FAQ items
  container.innerHTML = faqData.map((item, index) => `
    <div class="faq-item" data-index="${index}">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}">
        <span>${item.question}</span>
        <svg class="faq-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div class="faq-answer" id="faq-answer-${index}">
        ${item.answer}
      </div>
    </div>
  `).join('');

  // Add click handlers
  const items = container.querySelectorAll('.faq-item');
  items.forEach(item => {
    const button = item.querySelector('.faq-question') as HTMLButtonElement;

    button?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      items.forEach(i => {
        i.classList.remove('active');
        const btn = i.querySelector('.faq-question') as HTMLButtonElement;
        btn?.setAttribute('aria-expanded', 'false');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
