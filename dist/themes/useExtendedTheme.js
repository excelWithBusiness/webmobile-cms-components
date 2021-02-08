import { useContext } from 'react';
import { ThemeContext } from '@excelwithbusiness/webmobile-sc-components';
export var useExtendedTheme = function useExtendedTheme() {
  var theme = useContext(ThemeContext);

  if (!theme.extended) {
    throw new Error('Extended Theme missing! Did you forget to wrap component with <ExtendedThemeProvider />?');
  }

  return theme;
};
//# sourceMappingURL=useExtendedTheme.js.map