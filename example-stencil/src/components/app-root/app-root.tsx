import { Component, h } from '@stencil/core';
@Component({ tag: 'app-root' })
export class AppRoot {
  render() {
    return (
      <main>
        <header>
          <duet-header
            logoHref=""
            current-href={window.location.pathname}
            items={[
              { label: 'home', href: '/' },
              { label: 'tasks', href: '/tasks' },
              { label: 'users', href: '/users' },
            ]}
          ></duet-header>
        </header>
        <content>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="home-component" exact={true} />
              <stencil-route url="/tasks" component="tasks-component" />
              <stencil-route url="/users" component="users-component" />
            </stencil-route-switch>
          </stencil-router>
        </content>
      </main>
    );
  }
}
