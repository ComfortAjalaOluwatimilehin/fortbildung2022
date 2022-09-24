import { Component, h, Prop } from '@stencil/core';
export interface IUser {
  email: string;
  first_name: string;
  gender: string;
  id: number;
  ip_address: string;
  last_name: string;
}
@Component({ tag: 'users-component', styleUrl: './users.css' })
export class UsersComponent {
  @Prop() users: Array<IUser> = [];

  async fetchUsers(): Promise<void> {
    const response = await fetch('http://localhost:1080/users');
    const data = await response.json();
    this.users = data;
  }
  componentWillLoad() {
    if(this.users.length > 0) return
    this.fetchUsers();
  }
  render() {
    return (
      <section class="users-container">
        <duet-heading level="h1" visual-level="h0">
          All Users
        </duet-heading>
        <duet-heading level="h6">Mockserver</duet-heading>
        <duet-table>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>IP Address</th>
              </tr>
            </thead>
            <tbody>
              {this.users.map(user => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{`${user.first_name} ${user.last_name}`}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.ip_address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </duet-table>
      </section>
    );
  }
}
