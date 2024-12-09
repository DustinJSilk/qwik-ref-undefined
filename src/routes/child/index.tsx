import { component$, type Signal } from "@builder.io/qwik";

export const Foo = component$((props: { ref?: Signal<HTMLElement> }) => {
  const Tag = Math.random() ? "div" : "span";

  return <Tag ref={props.ref}>Foo element</Tag>;
});

export default component$(() => {
  return <Foo />;
});
