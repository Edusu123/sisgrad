import './nav.css'
import React from "react"

export default _ =>
  <aside className="menu-area">
    <nav className="menu">
      <a href="/">
        <i className="fa fa-home"></i> Início
      </a>
      <a href="/disciplinas">
        <i className="fa fa-graduation-cap"></i> Disciplinas
      </a>
    </nav>
  </aside>
