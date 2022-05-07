import React from "react";
import Dashboard from '../public/icons/Dashboard.svg';

const navButtons = [
  {
    label: "Dashboard",
    path: "/home",
    icon: "/icons/Dashboard.svg",
  },
  {
    label: "Pedidos",
    path: "/pedidos",
    icon: '/icons/Pedidos.svg'
  },
  {
    label: "Produtos",
    path: "/produtos",
    icon: '/icons/Produtos.svg'
  },
  {
    label: "Clientes",
    path: "/clientes",
    icon: '/icons/Clientes.svg'
  },
  {
    label: "Financeiro",
    path: "/financeiro",
    icon: '/icons/Financeiro.svg'
  },
  {
    label: "Usuários",
    path: "/usuários",
    icon: '/icons/Usuarios.svg'
  },
];

const navButtonsMore = [{
  label: "",
  path: "javascript:void(0)",
  icon: ''
}];

const perfilButtons = [{
  label:"Meus Dados",
  path:"/meusdados",
  icon:""
},{
  label:"Sair",
  path:"/logout",
  icon:""
}];

export default navButtons;

export {navButtonsMore};
export {perfilButtons};
