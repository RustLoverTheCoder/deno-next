export type { ServeInit } from "std/http/server.ts";

export type StartOptions = FreshOptions & {
  experimentalDenoServe?: boolean;
};

export interface FreshOptions {
  render?: RenderFunction;
  plugins?: Plugin[];
  staticDir?: string;
}

export type RenderFunction = (
  ctx: RenderContext,
  render: InnerRenderFunction
) => void | Promise<void>;

export type InnerRenderFunction = () => string;

export class RenderContext {
  #id: string;
  #state: Map<string, unknown> = new Map();
  #styles: string[] = [];
  #url: URL;
  #route: string;
  #lang: string;

  constructor(id: string, url: URL, route: string, lang: string) {
    this.#id = id;
    this.#url = url;
    this.#route = route;
    this.#lang = lang;
  }

  get id(): string {
    return this.#id;
  }

  get state(): Map<string, unknown> {
    return this.#state;
  }

  get styles(): string[] {
    return this.#styles;
  }

  get url(): URL {
    return this.#url;
  }

  get route(): string {
    return this.#route;
  }

  get lang(): string {
    return this.#lang;
  }

  set lang(lang: string) {
    this.#lang = lang;
  }
}
