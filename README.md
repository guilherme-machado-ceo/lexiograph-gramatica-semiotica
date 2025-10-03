# Lexiograph: Gramática Semiótica dos Sistemas Digitais

<!-- Futuristic banner -->
<p align="center">
  <!-- Banner inline para evitar clique / redirecionamento -->
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1200 400">
    <defs>
      <radialGradient id="bg" cx="50%" cy="50%" r="75%">
        <stop offset="0%" stop-color="#05070d"/>
        <stop offset="60%" stop-color="#0a0f1f"/>
        <stop offset="100%" stop-color="#0b1228"/>
      </radialGradient>
      <linearGradient id="neon" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00eaff"/>
        <stop offset="50%" stop-color="#9b5cf6"/>
        <stop offset="100%" stop-color="#ff2ef2"/>
      </linearGradient>
      <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="6" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <!-- Background -->
    <rect x="0" y="0" width="1200" height="400" fill="url(#bg)"/>

    <!-- Grid -->
    <g stroke="#1c2a4a" stroke-width="1.25" opacity="0.45">
      <path d="M60 0 V400 M120 0 V400 M180 0 V400 M240 0 V400 M300 0 V400 M360 0 V400 M420 0 V400 M480 0 V400 M540 0 V400 M600 0 V400 M660 0 V400 M720 0 V400 M780 0 V400 M840 0 V400 M900 0 V400 M960 0 V400 M1020 0 V400 M1080 0 V400 M1140 0 V400"/>
      <path d="M0 60 H1200 M0 120 H1200 M0 180 H1200 M0 240 H1200 M0 300 H1200 M0 360 H1200"/>
    </g>

    <!-- Concentric circles -->
    <g stroke="#253660" stroke-width="3" opacity="0.6" filter="url(#glow)">
      <circle cx="600" cy="200" r="200" fill="none"/>
      <circle cx="600" cy="200" r="150" fill="none"/>
      <circle cx="600" cy="200" r="100" fill="none"/>
    </g>

    <!-- Neon diagonal line -->
    <g filter="url(#glow)">
      <path d="M120 330 L1080 70" stroke="url(#neon)" stroke-width="5" fill="none" opacity="0.95"/>
    </g>

    <!-- Title / Signature -->
    <g text-anchor="middle" font-family="Orbitron, Roboto, Segoe UI, Arial, sans-serif" fill="#dff6ff">
      <text x="600" y="108" font-size="56" font-weight="800">Lexiograph</text>
      <text x="600" y="150" font-size="20" fill="#a6d6ff">Gramática Semiótica dos Sistemas Digitais</text>
    </g>

    <!-- Central logo + rings -->
    <g transform="translate(600,210)" filter="url(#glow)">
      <!-- logo como imagem vetorial referenciada -->
      <image href="assets/lexiograph-logo.svg" x="-90" y="-90" width="180" height="180" preserveAspectRatio="xMidYMid meet"/>
      <!-- rotating rings around logo -->
      <g>
        <circle r="100" fill="none" stroke="#00eaff" stroke-width="3.5" opacity="0.9"/>
        <circle r="70" fill="none" stroke="#9b5cf6" stroke-width="3.5" opacity="0.9"/>
        <circle r="40" fill="none" stroke="#ff2ef2" stroke-width="3.5" opacity="0.9"/>
        <circle cx="100" cy="0" r="5" fill="#00eaff"/>
        <circle cx="0" cy="70" r="4.5" fill="#9b5cf6"/>
        <circle cx="-40" cy="0" r="4" fill="#ff2ef2"/>
      </g>
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 0 0" to="360 0 0" dur="18s" repeatCount="indefinite"/>
    </g>

    <!-- Tagline -->
    <g text-anchor="middle" font-family="Roboto, Segoe UI, Arial, sans-serif" fill="#aaf0ff">
      <text x="600" y="350" font-size="17" opacity="0.95">Lex • IO • Graph — Compliance Digital, Interação Sistêmica e Grafos de Conhecimento</text>
    </g>
  </svg>
</p>

<!-- Badges -->
<p align="center">
  <a href="https://guilherme-machado-ceo.github.io/lexiograph-gramatica-semiotica/"><img alt="Pages" src="https://img.shields.io/badge/GitHub%20Pages-published-0aefff?logo=github&logoColor=white"></a>
  <a href="https://github.com/guilherme-machado-ceo/lexiograph-gramatica-semiotica/actions"><img alt="Actions" src="https://img.shields.io/badge/Actions-Deploy%20Pages-9b5cf6?logo=githubactions&logoColor=white"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-Apache%202.0-ff2ef2"></a>
</p>

Lexiograph é mais do que uma marca — é uma linguagem. Uma gramática visual que emerge da interseção entre compliance digital, interação sistêmica e estruturação do conhecimento.

Ao decompor Lexiograph = Lex + IO + Graph, revelamos uma arquitetura semiótica que traduz sistemas digitais em signos, fluxos e grafos.

- Lex representa a lei, a governança algorítmica, o código ético dos sistemas.
- IO simboliza a dinâmica de entrada e saída, a interação entre humanos e máquinas.
- Graph é a grafia, o grafo, a rede de significados que conecta tudo.

Com a assinatura Lex Quantum, propomos uma nova forma de pensar e visualizar o digital: como linguagem, como sistema, como arte.

---

## Visão Geral

<p align="center">
  <svg width="100%" height="6" viewBox="0 0 1200 6" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sep-neon" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00eaff"/>
        <stop offset="50%" stop-color="#9b5cf6"/>
        <stop offset="100%" stop-color="#ff2ef2"/>
      </linearGradient>
      <filter id="sep-glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect x="0" y="2" width="1200" height="2" fill="url(#sep-neon)" filter="url(#sep-glow)" />
  </svg>
</p>

Na era da hiperconectividade, a Lexiograph propõe uma gramática semiótica para interpretar e representar sistemas digitais: unindo governança algorítmica (Lex), fluxos de dados e interação (IO) e grafos de conhecimento (Graph).

Nossa abordagem oferece uma estrutura conceitual e visual para mapear, codificar e comunicar sistemas complexos com clareza, interoperabilidade e profundidade simbólica.

---

## Decomposição Semiótica

<p align="center">
  <img src="assets/separator.svg" alt="Separator" width="100%" />
</p>

### Lex — Lei, Compliance, Governança Digital
- Princípios éticos e regulatórios aplicados a sistemas e algoritmos.
- Conformidade técnica, jurídica e operacional.
- Auditoria, transparência e confiabilidade em fluxos e decisões.

### IO — Input/Output, Interação e Fluxo
- Interfaces homem-máquina e protocolos de comunicação.
- Ciclos de entrada, processamento e saída de informação.
- Orquestração de eventos, automações e integrações.

### Graph — Grafia, Grafos e Estrutura de Conhecimento
- Modelagem semântica e ontologias.
- Grafos de entidades, relações e inferências.
- Visualizações que tornam o conhecimento navegável e inteligível.

---

## Lex Quantum

<p align="center">
  <img src="assets/separator.svg" alt="Separator" width="100%" />
</p>
A assinatura Lex Quantum é o selo que integra rigor técnico e estética semiótica. Ela orienta soluções que interpretam, codificam e comunicam sistemas complexos com precisão, beleza e significado.

- Design de informação + engenharia semiótica.
- Interoperabilidade, padronização e governança.
- Visualização de arquiteturas, fluxos e grafos.

---

## Proposta de Valor

<p align="center">
  <img src="assets/separator.svg" alt="Separator" width="100%" />
</p>
- Traduzir sistemas em linguagem visual e semiótica.
- Aumentar clareza, confiança e governança em plataformas digitais.
- Facilitar interoperabilidade e documentação viva de sistemas.

---

## Aplicações

<p align="center">
  <img src="assets/separator.svg" alt="Separator" width="100%" />
</p>
- Mapas de arquitetura de software e dados.
- Catálogos de APIs, fluxos de eventos e integrações.
- Grafos de conhecimento e navegação semântica.
- Dashboards de governança e conformidade.
- Narrativas visuais para comunicação executiva e técnica.

---

## Princípios

<p align="center">
  <img src="assets/separator.svg" alt="Separator" width="100%" />
</p>
- Clareza: visual e conceitual.
- Ética: governança e responsabilidade algorítmica.
- Interoperabilidade: padrões abertos e reutilização.
- Estética funcional: forma a serviço do significado.

---

## Estrutura do Repositório

<p align="center">
  <img src="assets/separator.svg" alt="Separator" width="100%" />
</p>

- `assets/lexiograph-logo.svg`: logomarca vetorial da Lexiograph (Lex + IO + Graph).
- `README.md`: visão geral, manifesto e fundamentos da gramática semiótica.

Futuramente:
- `docs/`: padrões visuais, ontologias, guias de modelagem.
- `examples/`: cenários e bibliotecas de símbolos semióticos.
- `site/`: landing page e documentação navegável.

---

## Roadmap (sugestão)

<p align="center">
  <img src="assets/separator.svg" alt="Separator" width="100%" />
</p>
1. Padronização visual dos elementos Lex, IO e Graph.
2. Biblioteca de ícones e componentes semióticos.
3. Modelos de documentação e mapas sistêmicos.
4. Protótipo de site/documentação (Lex Quantum).

---

## Como Contribuir

<p align="center">
  <img src="assets/separator.svg" alt="Separator" width="100%" />
</p>
- Abra issues com propostas e feedback.
- Sugira símbolos, ontologias e estruturas visuais.
- Envie PRs com exemplos, melhorias e arquivos SVG.

---

## Licença

<p align="center">
  <img src="assets/separator.svg" alt="Separator" width="100%" />
</p>
Este projeto está licenciado sob a Apache License 2.0. Consulte o arquivo LICENSE para o texto completo.