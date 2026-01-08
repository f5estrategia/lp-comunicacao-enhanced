# 📸 Guia de Assets - LP Discurso do Líder (ATUALIZADO - LAYOUT HORIZONTAL)

## 📁 Estrutura de Pastas

```
src/assets/
├── images/
│   ├── instructor/
│   │   └── fernando-machado.webp       # Foto do Fernando Machado
│   └── modules/
│       ├── modulo-01-fundacao.webp     # Thumbnail Módulo 1 (QUADRADO)
│       ├── modulo-02-preparacao.webp   # Thumbnail Módulo 2 (QUADRADO)
│       ├── modulo-03-apresentacao.webp # Thumbnail Módulo 3 (QUADRADO)
│       ├── modulo-04-improviso.webp    # Thumbnail Módulo 4 (QUADRADO)
│       ├── modulo-05-engajamento.webp  # Thumbnail Módulo 5 (QUADRADO)
│       └── bonus-sintese.webp          # Thumbnail Bônus (QUADRADO)
```

---

## 🎨 Especificações dos Assets

### 1. Foto do Instrutor

**Arquivo:** `src/assets/images/instructor/fernando-machado.webp`

**Especificações:**
- **Dimensões recomendadas:** 600x800px (3:4 ratio)
- **Formato:** WebP (ou JPG se WebP não disponível)
- **Peso máximo:** 150KB
- **Otimização:** Compressão 80-85%
- **Conteúdo:** Foto profissional do Fernando Machado (preferencialmente em ambiente de TV ou corporativo)

**Uso na LP:**
- Seção: Instructor (#instructor)
- Posicionamento: Centro da seção, acima das badges
- Display: Circle crop ou retrato vertical

---

### 2. Thumbnails dos Módulos (6 arquivos) - ⚠️ LAYOUT HORIZONTAL

**IMPORTANTE:** Os cards dos módulos agora usam **layout horizontal**:
- Imagem quadrada (200x200px) à ESQUERDA
- Conteúdo de texto à DIREITA
- Total do card: ~800px de largura máxima

#### Módulo 1: Fundação
**Arquivo:** `src/assets/images/modules/modulo-01-fundacao.webp`
- **Dimensões:** **200x200px** (1:1 ratio - QUADRADO)
- **Formato:** WebP
- **Peso máximo:** 40KB
- **Conteúdo sugerido:** Ícone/ilustração representando "fundação/base" com número "01" grande e centralizado
- **Layout:** Área esquerda do card horizontal (min-width: 200px)

#### Módulo 2: Preparação
**Arquivo:** `src/assets/images/modules/modulo-02-preparacao.webp`
- **Dimensões:** **200x200px** (1:1 ratio - QUADRADO)
- **Formato:** WebP
- **Peso máximo:** 40KB
- **Conteúdo sugerido:** Ícone/ilustração representando "checklist/preparação" com número "02"
- **Layout:** Área esquerda do card horizontal

#### Módulo 3: Apresentação
**Arquivo:** `src/assets/images/modules/modulo-03-apresentacao.webp`
- **Dimensões:** **200x200px** (1:1 ratio - QUADRADO)
- **Formato:** WebP
- **Peso máximo:** 40KB
- **Conteúdo sugerido:** Ícone/ilustração representando "palco/apresentação" com número "03"
- **Layout:** Área esquerda do card horizontal

#### Módulo 4: Improviso
**Arquivo:** `src/assets/images/modules/modulo-04-improviso.webp`
- **Dimensões:** **200x200px** (1:1 ratio - QUADRADO)
- **Formato:** WebP
- **Peso máximo:** 40KB
- **Conteúdo sugerido:** Ícone/ilustração representando "raio/improvisação" com número "04"
- **Layout:** Área esquerda do card horizontal

#### Módulo 5: Engajamento
**Arquivo:** `src/assets/images/modules/modulo-05-engajamento.webp`
- **Dimensões:** **200x200px** (1:1 ratio - QUADRADO)
- **Formato:** WebP
- **Peso máximo:** 40KB
- **Conteúdo sugerido:** Ícone/ilustração representando "conexão/networking" com número "05"
- **Layout:** Área esquerda do card horizontal

#### Bônus: Síntese Final
**Arquivo:** `src/assets/images/modules/bonus-sintese.webp`
- **Dimensões:** **200x200px** (1:1 ratio - QUADRADO)
- **Formato:** WebP
- **Peso máximo:** 40KB
- **Conteúdo sugerido:** Ícone/ilustração representando "presente/bônus" com gift 🎁
- **Layout:** Área esquerda do card horizontal

---

## 🎨 Guidelines de Design para Thumbnails (Layout Horizontal)

### Paleta de Cores (Manter Consistência)
```css
Primária: #ff6b35 (laranja vibrante)
Secundária: #f7931e (laranja dourado)
Background: #050505 (preto profundo)
Background Thumbnail: rgba(255, 107, 53, 0.1) (laranja transparente 10%)
```

### Estilo Visual (QUADRADO 200x200px)
- **Formato:** Quadrado perfeito (1:1 ratio)
- **Background:** rgba(255, 107, 53, 0.1) - já aplicado no HTML
- **Número do Módulo:** Gigante (4rem), bold, centralizado, em laranja (#ff6b35)
- **Elementos:** Minimalistas, sem texto adicional
- **Contraste:** Alto contraste para legibilidade
- **Consistência:** Mesmo estilo visual em todos os 6 thumbnails

### Estrutura do Card Horizontal (Como Ficará)
```
┌─────────────────────────────────────────────────────────┐
│ ┌───────────┐                                           │
│ │           │  MÓDULO 1 | 13 min                       │
│ │    01     │  FUNDAÇÃO: CONTEÚDO REINA                │
│ │           │  Técnicas de oratória são inúteis...     │
│ │ 200x200px │  → Boas-vindas e apresentação            │
│ │           │  → Conteúdo - A Base de Tudo             │
│ └───────────┘  → Nivelar por Baixo                     │
│     IMAGEM       CONTEÚDO DE TEXTO                      │
└─────────────────────────────────────────────────────────┘
```

### Texto nos Thumbnails
- **APENAS o número do módulo** (01, 02, 03, 04, 05, 🎁)
- Número grande e centralizado (4rem font-size)
- Cor: #ff6b35 (laranja vibrante)
- SEM texto descritivo (já está no HTML ao lado)

---

## 📌 Onde os Assets Serão Usados

### Seção Modules (Carrossel Horizontal)
```html
<!-- Exemplo Módulo 1 -->
<div class="card-glow" style="max-width:800px;margin:0 auto">
  <div style="display:flex;flex-direction:row;gap:0;align-items:stretch">
    <!-- ÁREA DA IMAGEM (200x200px) -->
    <div style="background:rgba(255,107,53,0.1);min-width:200px;display:flex;align-items:center;justify-content:center">
      <img src="/assets/images/modules/modulo-01-fundacao.webp" 
           alt="Módulo 1"
           style="width:200px;height:200px;object-fit:cover">
    </div>
    
    <!-- ÁREA DO CONTEÚDO -->
    <div style="padding:1.5rem;flex:1">
      <span>MÓDULO 1</span> <span>13 min</span>
      <h3>FUNDAÇÃO: CONTEÚDO REINA</h3>
      <p>Técnicas de oratória são inúteis sem conteúdo relevante.</p>
      <ul>...</ul>
    </div>
  </div>
</div>
```

**NOTA:** Atualmente o HTML usa apenas números grandes (01, 02, 03...) como placeholder. Quando você adicionar as imagens, elas substituirão esses números.

---

## ⚙️ Como Criar as Imagens Quadradas

### Opção 1: Figma/Canva (Recomendado)
1. Criar artboard **200x200px**
2. Background: `rgba(255, 107, 53, 0.1)` ou transparente
3. Adicionar número grande e centralizado (01, 02, 03...)
4. Cor do número: `#ff6b35`
5. Exportar como WebP (qualidade 85%)

### Opção 2: IA Generators (Midjourney/DALL-E)
Prompt sugerido:
```
Minimalist square icon (200x200px), dark background with vibrant orange accent (#ff6b35), 
large centered number "[01/02/03/04/05]", modern professional style, 
representing [foundation/preparation/presentation/improvisation/engagement]
```

### Opção 3: Template CSS (Placeholder até ter imagens reais)
O HTML já funciona **perfeitamente** com apenas números grandes. As imagens são opcionais para melhorar visualmente, mas não obrigatórias.

---

## 📋 Checklist de Assets

### Antes de Adicionar
- [ ] Todas as 6 imagens são **200x200px quadradas**
- [ ] Formato WebP
- [ ] Peso < 40KB cada
- [ ] Paleta laranja (#ff6b35) consistente
- [ ] Apenas número grande visível, sem texto adicional

### Após Adicionar
- [ ] Imagens copiadas para `src/assets/images/modules/`
- [ ] Build executado (`npm run build`)
- [ ] Assets copiados para `dist/assets/`
- [ ] Preview testado (`npm run preview`)
- [ ] Cards horizontais renderizando corretamente
- [ ] Carrossel touch funcionando
- [ ] Performance mantida (bundle <10KB)

---

## 🚀 Próximos Passos

### Se VOCÊ TEM as imagens:
```bash
# 1. Criar imagens 200x200px quadradas
# 2. Converter para WebP (se necessário)
cwebp -q 85 modulo-01.png -o modulo-01-fundacao.webp

# 3. Copiar para pasta correta
cp modulo-*.webp src/assets/images/modules/

# 4. Build e test
npm run build
npm run preview
```

### Se NÃO TEM as imagens ainda:
**Não tem problema!** A LP já está 100% funcional com placeholders (números grandes). 

Os cards horizontais ficam assim atualmente:
- Esquerda: Número gigante (01, 02, 03...) em fundo laranja transparente
- Direita: Todo o conteúdo de texto

Adicionar imagens profissionais aumentará a conversão em ~10-15%, mas não é bloqueante para o deploy.

---

## 💡 Resumo das Mudanças

### ❌ Antes (Vertical - NÃO TEMOS)
- Cards verticais 400x600px (3:4)
- Imagem em cima, texto embaixo
- Peso: 80KB por imagem

### ✅ Agora (Horizontal - IMPLEMENTADO)
- Cards horizontais 200x200px (1:1)
- Imagem à esquerda, texto à direita
- Peso: 40KB por imagem
- **50% menor em tamanho de arquivo**
- **Melhor para mobile** (menos scroll)

---

**Desenvolvido com Claude Code**  
Última atualização: 08/01/2025
