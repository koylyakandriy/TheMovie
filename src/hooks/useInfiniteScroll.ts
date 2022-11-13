import { EventHandler, useEffect, useState } from 'react';

type ScrollingElement = {
	scrollHeight: number;
	scrollTop: number;
	clientHeight: number;
};

type EventType = {
	target: {
		scrollingElement: ScrollingElement;
	} | null;
};

type useInfiniteScrollProps = {
	fetchNextPage(): void;
	hasNextPage?: boolean;
};

const useInfiniteScroll = ({ fetchNextPage, hasNextPage }: useInfiniteScrollProps) => {
	const [fetching, setFetching] = useState(false);

	useEffect(() => {
		const onScroll: EventHandler<any> = async (event: EventType) => {
			if (event.target?.scrollingElement) {
				const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;

				if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
					setFetching(true);
					if (hasNextPage) {
						await fetchNextPage();
					}
					setFetching(false);
				}
			}
		};

		document.addEventListener('scroll', onScroll);

		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, [fetchNextPage, fetching, hasNextPage]);
};

export default useInfiniteScroll;
