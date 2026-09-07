import * as React from 'react';
import { _ } from '@joplin/lib/locale';

interface Props {
	searchText: string;
	onClose: ()=> void;
}

const SearchNotFoundBanner: React.FC<Props> = props => {
	return (
		<div className="warning-banner search-not-found-banner">
			<span className="message">{_('No results found for "%s"', props.searchText)}</span>
			<a
				href="#"
				className="close"
				onClick={props.onClose}
				aria-label={_('Close')}
			><i className="fas fa-times"/></a>
		</div>
	);
};

export default SearchNotFoundBanner;
