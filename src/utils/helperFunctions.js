export const capitalise = (str) => {
  if (str && typeof str === 'string') {
    return str
      .split(' ')
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .map((str) =>
        str.includes('-')
          ? str
              .split('-')
              .map((str) => str[0].toUpperCase() + str.slice(1))
              .join('-')
          : str
      )
      .join(' ');
  } else {
    console.error(
      'ERROR: helper function "capitalise" requires a parameter of trype "string"'
    );
    return '';
  }
};
