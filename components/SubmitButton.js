import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';

function SubmitButton({ title, ...otherProps }) {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton
            onPress={(handleSubmit)}
            {...otherProps}
            title={title}></AppButton>
    );
}

export default SubmitButton;