# 🚀 Projeto ReactJS com TailwindCSS – Tela de Login

Este projeto demonstra uma interface de Login criada utilizando **ReactJS**, **Vite** e estilização com **TailwindCSS via CDN**, seguindo exatamente a estrutura mostrada no material de estudo.

O projeto utiliza componentes reutilizáveis, validação simples e estilização moderna com utilitários Tailwind.

---

## 📌 Funcionalidades

- ✔️ Campo de usuário com validação de vazio  
- ✔️ Campo de senha com pré-visualização do texto digitado  
- ✔️ Botão com efeito interativo ao clique  
- ✔️ Layout responsivo, centralizado e limpo  
- ✔️ Organização em componentes conforme boas práticas  

---

## 📁 Estrutura do Projeto

/ (raiz)
├── index.html
├── package.json
├── vite.config.js
│
└── src/
├── main.jsx
├── App.jsx
│
└── components/
└── tailwind/
├── Login.jsx
├── Label.jsx
├── LabelTitle.jsx
├── InputText.jsx
├── InputPassword.jsx
└── Button.jsx


---

## 🧩 Descrição dos Arquivos

### **index.html**
- Carrega Tailwind via CDN  
- Renderiza o React no elemento `#root`

### **main.jsx**
- Ponto de entrada que monta o App

### **App.jsx**
- Renderiza o componente `<Login />`

### **Login.jsx**
- Monta toda a interface da tela de login

### **Componentes Tailwind**
- `Label` → rótulos
- `LabelTitle` → título principal
- `InputText` → input com validação
- `InputPassword` → input com senha exibida dinamicamente
- `Button` → botão interativo

---

# 🏁 **Como Rodar o Projeto (Passo a Passo):

1. Clone o repositório
   ---bash
   git clone https://github.com/rebecavasco-prog/exemplo--Tailwind.git
