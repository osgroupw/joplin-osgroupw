import { StateEffect, StateField } from '@codemirror/state';
import { setSearchQuery } from '@codemirror/search';

// Set once a search for the current query has completed. Reset whenever the
// query changes, since the previous result is no longer relevant.
export const setNoMatchFound = StateEffect.define<boolean>();

const noMatchFoundField = StateField.define<boolean>({
	create: () => false,
	update: (value, tr) => {
		let result = value;
		for (const effect of tr.effects) {
			if (effect.is(setSearchQuery)) {
				result = false;
			} else if (effect.is(setNoMatchFound)) {
				result = effect.value;
			}
		}
		return result;
	},
});

export default noMatchFoundField;
