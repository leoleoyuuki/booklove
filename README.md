
# 📖 BookLove - Micro-SaaS

## 📅 Planejamento - 07/10/2024

---

## ✨ Visão Geral

O **BookLove** é um serviço de micro-SaaS que permite aos casais criarem um **Livro de Memórias Personalizado**. 
Após o preenchimento de um formulário com títulos, descrições e fotos, o serviço gera uma página personalizada com as memórias do casal. 

### 🎯 Planos:
- **Plano Inicial**: 3 memórias + Contador de tempo de namoro + Duração de 1 Ano = R$19,90
- **Plano Avançado**: 10 memórias + Contador de tempo de namoro + Duração de 1 Vitalícia = R$47,90

---

## 🛠️ Tecnologias Utilizadas

- **Mercado Pago**: Gerenciamento de pagamentos e integração de planos.
- **NextJS**: Desenvolvimento fullstack e geração de páginas dinâmicas.
- **Firebase**: Armazenamento de imagens e informações das memórias.
- **Vercel**: Hospedagem da aplicação para alta escalabilidade.
- **Tailwind CSS**: Estilização da página com design responsivo e eficiente.
- **Envio de E-mails + QR Code**: Serviço de e-mails (SendGrid ou Mailgun) para envio do link do livro de memórias e geração de QR Code.

---

## 🚀 Funcionalidades Detalhadas

### 1. **Formulário de Memórias**
   - O usuário preenche um formulário com:
     - **Título**
     - **Mensagem/descrição**
     - **Upload de Foto**
   - **Firebase Storage**: Armazena as fotos do casal.
   - **Firebase Firestore**: Salva os metadados (título, descrição e link das imagens).

### 2. **Planos e Pagamentos**
   - **Mercado Pago**: Integração para processamento de pagamento.
     - **Plano Inicial**: 3 memórias
     - **Plano Avançado**: 10 memórias
   - Após confirmação do pagamento, o formulário libera a quantidade de memórias permitida pelo plano.

### 3. **Criação do Livro de Memórias**
   - Geração automática de uma **página personalizada** com as memórias.
   - Cada livro é acessível via **URL única** criada para o casal.
   - Possibilidade de compartilhar o livro com amigos e familiares.

### 4. **Envio de E-mail com Link e QR Code**
   - **Serviço de E-mails**: Integração com **SendGrid** ou **Mailgun** para envio automático.
   - **QR Code**: Geração automática de QR Code para fácil compartilhamento da URL do livro.

### 5. **Hospedagem e Estilização**
   - **Vercel**: Hospedagem com deploy automatizado e otimizações de performance.
   - **Tailwind CSS**: Estilização simples e personalizável para melhorar a experiência do usuário e criar um design visualmente agradável.

---

## 📅 Próximos Passos
- Definir templates de design do livro de memórias.
- Implementar a integração com o Mercado Pago.
- Desenvolver o sistema de geração de QR Code e envio de e-mails automáticos.
