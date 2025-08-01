export default ({ ...buildInfo }) => {
  // return c
  return {
    ...buildInfo,
    preserveSymlinks: true
  };
};
