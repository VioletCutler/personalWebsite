export const setTheme = (themeName) => {
  const propertyName = "--selectedTheme";
  const selectedProps = propertySelector(propertyName);
  // Set the selected values to values of a different theme
  changeTheme(selectedProps, themeName, propertyName);
};

function propertySelector(propertyName) {
  // Get all 'selected' custom CSS properties from the ':root'.
  // These are the variables that are actually used (as oppose to vars to store the alternatives from different themes)
  const selectedCssProps = Array.from(document.styleSheets).reduce(
    (acc, sheet) =>
      (acc = [
        ...acc,
        ...Array.from(sheet.cssRules).reduce(
          (def, rule) =>
            (def =
              rule.selectorText === ":root"
                ? [
                    ...def,
                    ...Array.from(rule.style).filter((name) =>
                      name.startsWith(propertyName)
                    ),
                  ]
                : def),
          []
        ),
      ]),
    []
  );
  return selectedCssProps;
}

function changeTheme(selectedProps, themeName, propertyName) {

  selectedProps.forEach((prop) => {
    console.log('prop', prop)
    // set each selected variable with its analogous variable from the new theme
    document.documentElement.style.setProperty(
      prop,
      `var(--${themeName}${prop.substring(propertyName.length)})`
    );
  });
}

export const setButtonTheme = (themeName, buttonName) => {

  const propertyName = '--selectedThemeButtonBackground';
  const selectedProps = buttonPropertySelector(buttonName);
  // Set the selected values to values of a different theme
  changeButtonTheme(selectedProps, buttonName, propertyName);
};


function buttonPropertySelector(selectorText) {

  // Get all 'selected' custom CSS properties from the ':root'.
  // These are the variables that are actually used (as oppose to vars to store the alternatives from different themes)
  const selectedCssProps = Array.from(document.styleSheets).reduce(
    (acc, sheet) =>
      (acc = [
        ...acc,
        ...Array.from(sheet.cssRules).reduce(
          (def, rule) =>
            (def =
              rule.selectorText === selectorText
                ? [
                    ...def,
                    ...Array.from(rule.style)
                  ]
                : def),
          []
        ),
      ]),
    []
  );
  console.log('CSS stylesheets ->', Array.from(document.styleSheets))

  return selectedCssProps;
}

function changeButtonTheme(selectedProps, themeName, propertyName) {
  console.log("selected props ->", selectedProps, "theme name ->", themeName, 'property name ->', propertyName);

  selectedProps.forEach((prop) => {
    // set each selected variable with its analogous variable from the new theme
    document.documentElement.style.setProperty(
      themeName,
      `var(--${propertyName}Background`
    );
  });
}