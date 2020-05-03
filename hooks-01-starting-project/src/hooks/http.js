import {useReducer, useCallback} from 'react';

const initialState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
}

const httpReducer = (currHttpState, action) => {
    switch (action.type) {
        case 'SEND_REQUEST':
            return {loading: true, error: null, data: null, extra: null, identifier: action.identifier};
        case 'RESPONSE':
            return {...currHttpState, loading: false, data: action.responseData, extra: action.extra}
        case 'ERROR':
            return { loading: false, error: action.errorData}
        case 'CLEAR':
            return initialState;
        default:
            throw new Error('Should not be reached!')
    }
}

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState)

    const clear = useCallback(() => {
        dispatchHttp({type: 'CLEAR'})
    }, [])

    const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
        dispatchHttp({type: 'SEND_REQUEST', identifier: reqIdentifier})
        fetch(url, {
            method,
            body,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                return res.json()
            })
            .then(resData => {
                dispatchHttp({
                    type: 'RESPONSE',
                    responseData: resData,
                    extra: reqExtra
                })
            })
            .catch(error => {
                dispatchHttp({type: 'ERROR', errorData: 'Something Went Wrong! D:'})
            })
    }, []);

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest,
        reqExtra: httpState.extra,
        reqIdentifier: httpState.identifier,
        clear
    }

};

export default useHttp;