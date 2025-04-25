import React from 'react'

const withLoading = (WrappedComponent) => {
    function EnhancedComponent({isLoading, ...props}) {

        if (isLoading) {
            return <h2 style={{textAlign:"center"}}>Loading...</h2>
        }

        return <WrappedComponent {...props} />
    }

    return EnhancedComponent;
}

export default withLoading