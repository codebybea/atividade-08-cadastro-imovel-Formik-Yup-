"use client";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina({ titulo, children }) {
  return (
    <>
      {/* Barra de Navegação */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">LarDoceLar</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Acessar Lista" id="basic-nav-dropdown">
              <NavDropdown.Item href="/formulario/cadastro/lista">
                Lista de Imovel
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Barra de Titulo */}
      <div className="bg-danger text-center text-white py-3">
        <h1>{titulo}</h1>
      </div>

      {/* Conteudo da Página */}
      <Container className="mt-2">{children}</Container>
    </>
  );
}
