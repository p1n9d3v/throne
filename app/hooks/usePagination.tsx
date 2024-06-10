import { queryPagination } from '@/api/firestore';
import { Updater, PaginationState } from '@tanstack/react-table';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface Props {
    paths: string[];
    orderByField: string;
    orderType: 'asc' | 'desc';
}

function usePagination({ paths, orderByField, orderType }: Props): {
    data: any;
    pagination: PaginationState;
    onChangePage: (pageState: Updater<PaginationState>) => void;
    isLoading: boolean;
} {
    const [lastVisible, setLastVisible] = React.useState<any>(undefined);
    const [firstVisible, setFirstVisible] = React.useState<any>(undefined);
    const [type, setType] = React.useState<'first' | 'prev' | 'next' | 'last'>(
        'first',
    );
    const [nextPagination, setNextPagination] = React.useState({
        pageIndex: 0,
        pageSize: 5,
    });
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 5,
    });

    const { data, isLoading } = useQuery({
        queryKey: [...paths, pagination],
        queryFn: async () => {
            const resp = await queryPagination({
                type,
                pageSize: pagination.pageSize,
                lastVisible,
                firstVisible,
                paths,
                orderByField,
                orderType,
            });
            setLastVisible(resp.lastVisible);
            setFirstVisible(resp.firstVisible);
            return resp;
        },
    });

    const onChangePage = (pageState: Updater<PaginationState>) => {
        setNextPagination(pageState);
    };

    React.useEffect(() => {
        const diff = nextPagination.pageIndex - pagination.pageIndex;
        if (diff === 1) setType('next');
        else if (diff === -1) setType('prev');
        else if (diff < -1) setType('first');
        else if (diff > 1) setType('last');
        setPagination(nextPagination);
    }, [nextPagination]);

    return {
        pagination,
        onChangePage,
        data: data ?? [],
        isLoading,
    };
}

export default usePagination;
