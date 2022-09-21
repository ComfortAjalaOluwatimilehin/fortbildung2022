import { Component, h } from '@stencil/core';
@Component({ tag: 'home-component', styleUrl: './home.css' })
export class HomeComponent {
  render() {
    return (
      <div>
        <duet-heading level="h2" visual-level="h0">Hello, this is your first Stencil app right ?</duet-heading>
      </div>
    );
  }
}
