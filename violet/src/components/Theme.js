function propertySelector (propertyName) {
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
      return selectedCssProps
}

function changeTheme(selectedProps, themeName, propertyName) {
    console.log('propertyName.length', propertyName.length)
    console.log('CssProps ==>', selectedProps[0].substring(propertyName.length), 'ThemeName==>', themeName)
  selectedProps.forEach((prop) => {
      console.log('prop==>',prop)
    // set each selected variable with its analogous variable from the new theme
    document.documentElement.style.setProperty(
      prop,
      `var(--${themeName}${prop.substring(propertyName.length)})`
    );
  });
}

export const setTheme = (themeName) => {
const propertyName = '--selectedTheme'
  const selectedProps = propertySelector(propertyName)
  console.log('SelectedCssProps', selectedProps)
  // Set the selected values to values of a different theme
  changeTheme(selectedProps, themeName, propertyName)
  
//   selectedCssProps.forEach((prop) => {
//     // set each selected variable with its analogous variable from the new theme
//     document.documentElement.style.setProperty(
//       prop,
//       `var(--${themeName}${prop.substring(10)})`
//     );
//   });
};



export const setButtonTheme = (themeName) => {

}