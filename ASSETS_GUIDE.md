# 📸 Guia de Assets - LP Discurso do Líder

## 📁 Estrutura de Pastas

```
src/assets/
├── images/
│   ├── instructor/
│   │   └── fernando-machado.webp       # Foto do Fernando Machado
│   └── modules/
│       ├── modulo-01-fundacao.webp     # Thumbnail Módulo 1
│       ├── modulo-02-preparacao.webp   # Thumbnail Módulo 2
│       ├── modulo-03-apresentacao.webp # Thumbnail Módulo 3
│       ├── modulo-04-improviso.webp    # Thumbnail Módulo 4
│       ├── modulo-05-engajamento.webp  # Thumbnail Módulo 5
│       └── bonus-sintese.webp          # Thumbnail Bônus
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

### 2. Thumbnails dos Módulos (6 arquivos)

#### Módulo 1: Fundação
**Arquivo:** `src/assets/images/modules/modulo-01-fundacao.webp`
- **Dimensões:** 400x600px (3:4 ratio)
- **Formato:** WebP
- **Peso máximo:** 80KB
- **Conteúdo sugerido:** Ícone/ilustração representando "fundação/base" com número "01" em destaque

#### Módulo 2: Preparação
**Arquivo:** `src/assets/images/modules/modulo-02-preparacao.webp`
- **Dimensões:** 400x600px (3:4 ratio)
- **Formato:** WebP
- **Peso máximo:** 80KB
- **Conteúdo sugerido:** Ícone/ilustração representando "checklist/preparação" com número "02"

#### Módulo 3: Apresentação
**Arquivo:** `src/assets/images/modules/modulo-03-apresentacao.webp`
- **Dimensões:** 400x600px (3:4 ratio)
- **Formato:** WebP
- **Peso máximo:** 80KB
- **Conteúdo sugerido:** Ícone/ilustração representando "palco/apresentação" com número "03"

#### Módulo 4: Improviso
**Arquivo:** `src/assets/images/modules/modulo-04-improviso.webp`
- **Dimensões:** 400x600px (3:4 ratio)
- **Formato:** WebP
- **Peso máximo:** 80KB
- **Conteúdo sugerido:** Ícone/ilustração representando "raio/improvisação" com número "04"

#### Módulo 5: Engajamento
**Arquivo:** `src/assets/images/modules/modulo-05-engajamento.webp`
- **Dimensões:** 400x600px (3:4 ratio)
- **Formato:** WebP
- **Peso máximo:** 80KB
- **Conteúdo sugerido:** Ícone/ilustração representando "conexão/networking" com número "05"

#### Bônus: Síntese Final
**Arquivo:** `src/assets/images/modules/bonus-sintese.webp`
- **Dimensões:** 400x600px (3:4 ratio)
- **Formato:** WebP
- **Peso máximo:** 80KB
- **Conteúdo sugerido:** Ícone/ilustração representando "presente/bônus" com ícone de gift 🎁

---

## 🎨 Guidelines de Design para Thumbnails

### Paleta de Cores (Manter Consistência)
```css
Primária: #ff6b35 (laranja vibrante)
Secundária: #f7931e (laranja dourado)
Background: #050505 (preto profundo)
Destaques: rgba(255, 107, 53, 0.1) (laranja transparente)
```

### Estilo Visual
- **Background:** Fundo escuro (#050505 ou gradiente escuro)
- **Número do Módulo:** Grande, bold, em laranja (#ff6b35)
- **Elementos:** Minimalistas, modernos, profissionais
- **Contraste:** Alto contraste para legibilidade
- **Consistência:** Mesmo estilo visual em todos os 6 thumbnails

### Texto nos Thumbnails
- **Evite texto excessivo** (apenas número do módulo)
- O texto descritivo já está no HTML
- Foco em ícones e elementos visuais

---

## 📌 Onde os Assets Serão Usados

### Seção Instructor
```html
<img src="/assets/images/instructor/fernando-machado.webp" 
     alt="Fernando Machado - Ex-Âncora SBT"
     loading="lazy"
     style="width:100%;max-width:400px;border-radius:0.75rem">
```

### Seção Modules (Carrossel)
```html
<!-- Módulo 1 -->
<img src="/assets/images/modules/modulo-01-fundacao.webp" 
     alt="Módulo 1 - Fundação: Conteúdo Reina"
     loading="lazy">

<!-- Módulo 2 -->
<img src="/assets/images/modules/modulo-02-preparacao.webp" 
     alt="Módulo 2 - Preparação: Checklist Estratégico"
     loading="lazy">

<!-- ... e assim por diante -->
```

---

## ⚙️ Como Otimizar Imagens para WebP

### Opção 1: Online (Squoosh)
1. Acesse: https://squoosh.app
2. Arraste a imagem JPG/PNG
3. Escolha formato WebP
4. Ajuste qualidade para 80-85%
5. Download

### Opção 2: CLI (cwebp)
```bash
# Instalar
brew install webp

# Converter
cwebp -q 85 input.jpg -o output.webp

# Batch convert (todos os módulos)
for i in {1..5}; do
  cwebp -q 85 "modulo-0${i}.jpg" -o "modulo-0${i}-*.webp"
done
```

### Opção 3: ImageMagick
```bash
# Converter e redimensionar
convert input.jpg -resize 400x600 -quality 85 output.webp
```

---

## 📋 Checklist de Assets

### Antes de Adicionar
- [ ] Todas as imagens estão em WebP
- [ ] Dimensões corretas (600x800 para instructor, 400x600 para módulos)
- [ ] Peso otimizado (<150KB instructor, <80KB módulos)
- [ ] Nomes de arquivo seguem convenção exata
- [ ] Paleta de cores consistente (#ff6b35)

### Após Adicionar
- [ ] Build executado (`npm run build`)
- [ ] Assets copiados para `dist/assets/`
- [ ] Preview testado (`npm run preview`)
- [ ] Imagens carregando corretamente
- [ ] Lazy loading funcionando
- [ ] Performance Lighthouse >90%

---

## 🚀 Próximos Passos

### 1. Preparar Assets
Crie ou obtenha as 7 imagens seguindo as especificações acima.

### 2. Adicionar à Pasta
```bash
# Copiar para a estrutura correta
cp fernando-machado.webp src/assets/images/instructor/
cp modulo-*.webp src/assets/images/modules/
```

### 3. Atualizar HTML
Substituir os placeholders atuais (que usam apenas números) pelas tags `<img>`.

### 4. Build e Test
```bash
npm run build
npm run preview
```

---

## 💡 Alternativa: Placeholders Temporários

Se as imagens não estiverem disponíveis imediatamente, o HTML atual já funciona com **placeholders visuais** (números grandes em backgrounds coloridos). 

A LP está **100% funcional** mesmo sem as imagens reais, mas adicionar assets profissionais aumentará:
- Credibilidade visual
- Autoridade percebida
- Taxa de conversão estimada (+15-25%)

---

## 📞 Dúvidas?

As imagens podem ser:
1. **Fotos reais** (Fernando + screenshots dos módulos)
2. **Designs customizados** (Figma/Canva)
3. **IA Generated** (Midjourney/DALL-E com prompts específicos)

**Importante:** Manter consistência visual e paleta laranja vibrante (#ff6b35) em todos os assets.
