import React from "react";

export const Checkbox = React.forwardRef(({ indeterminate, ...rest}, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
        if (typeof resolvedRef === 'object' && resolvedRef.current) {
          resolvedRef.current.indeterminate = Boolean(indeterminate);
        }
      }, [resolvedRef, indeterminate]);

    return (
        <>
            <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
    )
})

// React.useEffect(() => {
//     resolvedRef.current.indeterminate = indeterminate
// }, [resolvedRef, indeterminate])

Checkbox.displayName = 'Checkbox'