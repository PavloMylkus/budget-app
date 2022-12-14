import React, { useContext, Profiler } from 'react';
import App from './app';
import { ThemeProvider } from 'styled-components';
import { AppContext } from '../../providers/context';
import { getTheme } from '../../providers/themes/getTheme';
import { IntlAppProvider } from '../../providers/i18n/provider';

export default () => {
	const { state, dispatch } = useContext(AppContext)


	return (
		<ThemeProvider theme={getTheme(state.themeName)}>
			<IntlAppProvider>
				<Profiler id='app'>
					<App />
				</Profiler>
			</IntlAppProvider>
		</ThemeProvider>

	)
}
