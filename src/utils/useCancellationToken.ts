import React, {useMemo} from 'react';

interface CancellationToken {
    isCancelled: boolean
    cancel(): void
}

export function useCancellationToken(): CancellationToken {
    return useMemo(() => {
        const token = {
            isCancelled: false,
            cancel: () => {}
        }

        token.cancel = () => token.isCancelled = true

        return token as CancellationToken
    }, [])
}