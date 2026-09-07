import { EditorState } from '@codemirror/state';
import { SearchState } from '../../types';
import { getSearchQuery, searchPanelOpen } from '@codemirror/search';
import noMatchFoundField from './noMatchFoundState';

const getSearchState = (state: EditorState) => {
	const query = getSearchQuery(state);
	const searchState: SearchState = {
		searchText: query.search,
		replaceText: query.replace,
		useRegex: query.regexp,
		caseSensitive: query.caseSensitive,
		dialogVisible: searchPanelOpen(state),
		noMatchFound: state.field(noMatchFoundField, false) ?? false,
	};
	return searchState;
};

export default getSearchState;
