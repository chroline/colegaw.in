type Components = Record<string, React.ComponentType<any>>;

export function useMDXComponents(components: Components): Components {
  return {
    a: (props: React.ComponentProps<"a">) => <a {...props} rel="noreferrer noopener" target="_blank" />,
    ...components,
  };
}
