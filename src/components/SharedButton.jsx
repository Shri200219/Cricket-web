import React from "react";
import { Button } from "react-bootstrap";

export const SharedButton = ({
    variant,
    type,
    size,
    label,
    className,
    onClick,
}) => {
    return (
        <Button
            variant={variant}
            type={type}
            size={size}
            className={className}
            onClick={onClick} 
        >
            {label}
        </Button>
    );
};
