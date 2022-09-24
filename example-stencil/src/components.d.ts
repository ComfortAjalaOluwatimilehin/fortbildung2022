/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IProduct } from "./components/products/products";
import { ITask } from "./components/tasks/tasks";
import { IUser } from "./components/users/users";
export namespace Components {
    interface AppRoot {
    }
    interface HomeComponent {
    }
    interface ProductComponent {
        "id": string;
        "match": any;
    }
    interface ProductForm {
        "formIsDisabled": boolean;
        "onSave": (update: IProduct) => any;
        "product": IProduct;
    }
    interface ProductsComponent {
    }
    interface TaskComponent {
        "task": ITask;
    }
    interface TasksComponent {
    }
    interface UsersComponent {
        "users": Array<IUser>;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLHomeComponentElement extends Components.HomeComponent, HTMLStencilElement {
    }
    var HTMLHomeComponentElement: {
        prototype: HTMLHomeComponentElement;
        new (): HTMLHomeComponentElement;
    };
    interface HTMLProductComponentElement extends Components.ProductComponent, HTMLStencilElement {
    }
    var HTMLProductComponentElement: {
        prototype: HTMLProductComponentElement;
        new (): HTMLProductComponentElement;
    };
    interface HTMLProductFormElement extends Components.ProductForm, HTMLStencilElement {
    }
    var HTMLProductFormElement: {
        prototype: HTMLProductFormElement;
        new (): HTMLProductFormElement;
    };
    interface HTMLProductsComponentElement extends Components.ProductsComponent, HTMLStencilElement {
    }
    var HTMLProductsComponentElement: {
        prototype: HTMLProductsComponentElement;
        new (): HTMLProductsComponentElement;
    };
    interface HTMLTaskComponentElement extends Components.TaskComponent, HTMLStencilElement {
    }
    var HTMLTaskComponentElement: {
        prototype: HTMLTaskComponentElement;
        new (): HTMLTaskComponentElement;
    };
    interface HTMLTasksComponentElement extends Components.TasksComponent, HTMLStencilElement {
    }
    var HTMLTasksComponentElement: {
        prototype: HTMLTasksComponentElement;
        new (): HTMLTasksComponentElement;
    };
    interface HTMLUsersComponentElement extends Components.UsersComponent, HTMLStencilElement {
    }
    var HTMLUsersComponentElement: {
        prototype: HTMLUsersComponentElement;
        new (): HTMLUsersComponentElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "home-component": HTMLHomeComponentElement;
        "product-component": HTMLProductComponentElement;
        "product-form": HTMLProductFormElement;
        "products-component": HTMLProductsComponentElement;
        "task-component": HTMLTaskComponentElement;
        "tasks-component": HTMLTasksComponentElement;
        "users-component": HTMLUsersComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface HomeComponent {
    }
    interface ProductComponent {
        "id"?: string;
        "match": any;
    }
    interface ProductForm {
        "formIsDisabled"?: boolean;
        "onSave"?: (update: IProduct) => any;
        "product": IProduct;
    }
    interface ProductsComponent {
    }
    interface TaskComponent {
        "task"?: ITask;
    }
    interface TasksComponent {
    }
    interface UsersComponent {
        "users"?: Array<IUser>;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "home-component": HomeComponent;
        "product-component": ProductComponent;
        "product-form": ProductForm;
        "products-component": ProductsComponent;
        "task-component": TaskComponent;
        "tasks-component": TasksComponent;
        "users-component": UsersComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "home-component": LocalJSX.HomeComponent & JSXBase.HTMLAttributes<HTMLHomeComponentElement>;
            "product-component": LocalJSX.ProductComponent & JSXBase.HTMLAttributes<HTMLProductComponentElement>;
            "product-form": LocalJSX.ProductForm & JSXBase.HTMLAttributes<HTMLProductFormElement>;
            "products-component": LocalJSX.ProductsComponent & JSXBase.HTMLAttributes<HTMLProductsComponentElement>;
            "task-component": LocalJSX.TaskComponent & JSXBase.HTMLAttributes<HTMLTaskComponentElement>;
            "tasks-component": LocalJSX.TasksComponent & JSXBase.HTMLAttributes<HTMLTasksComponentElement>;
            "users-component": LocalJSX.UsersComponent & JSXBase.HTMLAttributes<HTMLUsersComponentElement>;
        }
    }
}
